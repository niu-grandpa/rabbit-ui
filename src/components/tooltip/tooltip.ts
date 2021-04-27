/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { CssTransition, _arrow, _Popper } from '../../mixins';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

const DEFAULTDELAY = 80;
const EnterCls = 'zoom-big-fast-enter';
const LeaveCls = 'zoom-big-fast-leave';
const CssTransitonCommonConfig = {
    rmCls: true,
    timeout: 80,
    enterCls: EnterCls,
    leaveCls: LeaveCls
};

let VISIBLETIMER: any, EVENTTIMER: any;

interface Config {
    config(
        el: string
    ): {
        content: string | number;
        always: boolean;
        disabled: boolean;
        events: ({ onVisibleChange }: TooltipEvent) => void;
    };
}

interface TooltipEvent {
    onVisibleChange?: (visable: boolean) => void;
}

class Tooltip implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v2.0';
        this.COMPONENTS = $el('r-tooltip', { all: true });
        this._create(this.COMPONENTS);
        _arrow.scrollUpdate();
    }

    public config(
        el: string
    ): {
        content: string | number;
        always: boolean;
        disabled: boolean;
        events: ({ onVisibleChange }: TooltipEvent) => void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'tooltip');

        const { _attrs, _setAlwaysShow, _handleMouseEv } = Tooltip.prototype;
        const { delay, always, disabled, offset, placement } = _attrs(target);

        const TooltipPopper = target.querySelector(`.${PREFIX.tooltip}-popper`)! as HTMLElement;
        const TooltipInner = target.querySelector(`.${PREFIX.tooltip}-inner`)!;

        return {
            get content() {
                return setHtml(TooltipInner);
            },
            set content(newVal: string | number) {
                if (newVal && !type.isStr(newVal) && !type.isNum(newVal)) return;
                setHtml(TooltipInner, `${newVal}`);
            },

            get always() {
                return always;
            },
            set always(newVal: boolean) {
                if (newVal && !type.isBol(newVal)) return;
                _setAlwaysShow(TooltipPopper, newVal);
            },

            get disabled() {
                return disabled;
            },
            set disabled(newVal: boolean) {
                if (newVal && !type.isBol(newVal)) return;

                _handleMouseEv(
                    target,
                    TooltipPopper,
                    delay,
                    offset,
                    placement,
                    this.always,
                    newVal
                );
            },

            events({ onVisibleChange }) {
                const event = () => {
                    const visable: boolean = TooltipPopper.dataset.tooltipState === 'show';
                    onVisibleChange && type.isFn(onVisibleChange, visable);
                };
                const show = () => {
                    if (EVENTTIMER) clearTimeout(EVENTTIMER);
                    EVENTTIMER = setTimeout(event, delay);
                };
                const close = () => {
                    if (EVENTTIMER) clearTimeout(EVENTTIMER);
                    // 当鼠标移出tooltip后判断当前状态如果为 show，
                    // 那么说明气泡显示过了，该执行移出事件了。
                    // 避免了即使鼠标移出但没有显示过气泡而依然执行事件。
                    if (TooltipPopper.dataset.tooltipState === 'show')
                        setTimeout(event, DEFAULTDELAY);
                };

                bind(target, 'mouseenter', show);
                bind(target, 'mouseleave', close);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const {
                content,
                theme,
                placement,
                offset,
                maxWidth,
                delay,
                always,
                disabled
            } = this._attrs(node);

            const children = !node.firstElementChild
                ? node.innerHTML.trim()
                : node.firstElementChild;

            this._setMainTemplate(node, content, theme, placement);

            const TooltipPopper = node.querySelector(`.${PREFIX.tooltip}-popper`)! as HTMLElement;

            this._setReferencesElem(node, children);
            this._setPopper(node, TooltipPopper, placement, offset);
            this._setMaxWidth(node, maxWidth);
            this._setAlwaysShow(TooltipPopper, always);
            this._handleMouseEv(node, TooltipPopper, delay, offset, placement, always, disabled);

            removeAttrs(node, ['content', 'theme', 'delay', 'max-width', 'disabled', 'offset']);
        });
    }

    private _setMainTemplate(
        node: Element,
        content: string,
        theme: string,
        placement: string
    ): void {
        const template = `
         <div class="${PREFIX.tooltip}-rel"></div>
         <div class="${PREFIX.tooltip}-popper ${PREFIX.tooltip}-${theme}" x-placement="${placement}">
             <div class="${PREFIX.tooltip}-content">
                 <div class="${PREFIX.tooltip}-arrow"></div>
                 <div class="${PREFIX.tooltip}-inner">${content}</div>
             </div>
         </div>
       `;

        setHtml(node, template);
    }

    private _setReferencesElem(node: Element, children: Element | string): void {
        const TooltipRel = node.querySelector(`.${PREFIX.tooltip}-rel`)!;

        if (children instanceof Element) {
            TooltipRel.appendChild(children);
        } else {
            setHtml(TooltipRel, children);
        }
    }

    private _setMaxWidth(node: Element, width: string): void {
        if (!width) return;

        const TooltipInner = node.querySelector(`.${PREFIX.tooltip}-inner`)!;

        TooltipInner.classList.add(`${PREFIX.tooltip}-with-width`);
        setCss(TooltipInner, 'maxWidth', `${width}px`);
    }

    private _setAlwaysShow(children: HTMLElement, always: boolean): void {
        if (!always) setCss(children, 'display', 'none');
        children.dataset.tooltipState = 'pending';
    }

    private _handleMouseEv(
        node: Element,
        children: HTMLElement,
        delay: number,
        offset: number,
        placement: string,
        always: boolean,
        disabled: boolean
    ): void {
        if (always || disabled) return;

        const setVisable = (mode: 'in' | 'out') => {
            if (mode === 'in') this._setPopper(node, children, placement, offset);
            children.dataset.tooltipState = mode === 'in' ? 'show' : 'close';
            CssTransition(children, {
                inOrOut: mode,
                ...CssTransitonCommonConfig
            });
        };
        const show = () => {
            if (VISIBLETIMER) clearTimeout(VISIBLETIMER);
            VISIBLETIMER = setTimeout(() => setVisable('in'), delay);
        };
        const hide = () => {
            if (VISIBLETIMER) clearTimeout(VISIBLETIMER);
            if (children.dataset.tooltipState === 'show')
                setTimeout(() => setVisable('out'), DEFAULTDELAY);
        };

        bind(node, 'mouseenter', show);
        bind(node, 'mouseleave', hide);
    }

    private _setPopper(
        node: Element,
        children: HTMLElement,
        placement: string,
        offset: number
    ): any {
        return _Popper._newCreatePopper(node, children, placement, offset);
    }

    private _attrs(node: Element) {
        return {
            theme: getStrTypeAttr(node, 'theme', 'dark'),
            content: getStrTypeAttr(node, 'content', ''),
            maxWidth: getStrTypeAttr(node, 'max-width', ''),
            placement: getStrTypeAttr(node, 'placement', 'top'),
            delay: getNumTypeAttr(node, 'delay', DEFAULTDELAY),
            offset: getNumTypeAttr(node, 'offset', 0),
            always: getBooleanTypeAttr(node, 'always'),
            disabled: getBooleanTypeAttr(node, 'disabled')
        };
    }
}

export default Tooltip;
