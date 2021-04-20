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

const DefaultDelay = 80;
const EnterCls = 'zoom-big-fast-enter';
const LeaveCls = 'zoom-big-fast-leave';
const CssTransitonCommonConfig = {
    rmCls: true,
    timeout: 80,
    enterCls: EnterCls,
    leaveCls: LeaveCls
};

let visableTimer: any, eventTimer: any;

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
                    if (eventTimer) clearTimeout(eventTimer);
                    eventTimer = setTimeout(event, delay);
                };
                const close = () => {
                    if (eventTimer) clearTimeout(eventTimer);
                    // 当鼠标移出tooltip后判断当前状态如果为 show，
                    // 那么说明气泡显示过了，该执行移出事件了。
                    // 避免了即使鼠标移出但没有显示过气泡而依然执行事件。
                    if (TooltipPopper.dataset.tooltipState === 'show')
                        setTimeout(event, DefaultDelay);
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
            if (visableTimer) clearTimeout(visableTimer);
            visableTimer = setTimeout(() => setVisable('in'), delay);
        };
        const hide = () => {
            if (visableTimer) clearTimeout(visableTimer);
            if (children.dataset.tooltipState === 'show')
                setTimeout(() => setVisable('out'), DefaultDelay);
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
            delay: getNumTypeAttr(node, 'delay', DefaultDelay),
            offset: getNumTypeAttr(node, 'offset', 0),
            always: getBooleanTypeAttr(node, 'always'),
            disabled: getBooleanTypeAttr(node, 'disabled')
        };
    }
}

export default Tooltip;

// class Tooltip implements Config {
//     readonly VERSION: string;
//     readonly COMPONENTS: NodeListOf<Element>;

//     constructor() {
//         this.VERSION = 'v1.0';
//         this.COMPONENTS = $el('r-tooltip', { all: true });
//         this._create(this.COMPONENTS);
//         _arrow.scrollUpdate();
//     }

//     public config(
//         el: string
//     ): {
//         content: string | number;
//         events: (options: TooltipEvents) => void;
//     } {
//         const target = $el(el);

//         validComps(target, 'tooltip');

//         const { _getDelay, _getIsAlways, _getIsDisabled } = Tooltip.prototype;

//         const popper = target.querySelector(`.${PREFIX.tooltip}-popper`);
//         const popperText = target.querySelector(`.${PREFIX.tooltip}-inner`);

//         return {
//             get content() {
//                 return setText(popperText);
//             },
//             set content(newVal: string | number) {
//                 if (type.isStr(newVal) || type.isNum(newVal)) setHtml(popperText, `${newVal}`);
//             },
//             events({ onShow, onHide }): void {
//                 if (_getIsAlways(target) || _getIsDisabled(target)) return;

//                 const delay = _getDelay(target);

//                 _Popper.handleHoverShowAndHideEvents({
//                     reference: target,
//                     popper: popper,
//                     datasetVal: 'tooltipShow',
//                     showCb: onShow,
//                     hideCb: onHide,
//                     delay: delay,
//                     timer: EVENTTIMER
//                 });
//             }
//         };
//     }

//     private _create(COMPONENTS: NodeListOf<Element>): void {
//         COMPONENTS.forEach((node) => {
//             this._createTooltipNodes(node);

//             removeAttrs(node, ['content', 'theme', 'delay', 'max-width', 'disabled', 'always']);
//         });
//     }

//     private _createTooltipNodes(reference: Element): void {
//         const TooltipRef = createElem('div');
//         const TooltipPopper = createElem('div');
//         const TooltipContent = createElem('div');
//         const TooltipArrow = createElem('div');
//         const TooltipInner = createElem('div');

//         this._setCls(reference, [
//             TooltipRef,
//             TooltipPopper,
//             TooltipContent,
//             TooltipArrow,
//             TooltipInner
//         ]);

//         this._setTip(reference, TooltipInner);
//         this._setMaxWidth(reference, TooltipInner);

//         const disabledShow = this._getIsDisabled(reference);
//         const alwaysShow = this._setIsAlwaysShow(reference, TooltipPopper);

//         // 如果 tooltip 没有设置为总是可见或者禁用显示，则正常鼠标移入移出事件
//         if (!alwaysShow && !disabledShow) {
//             this._triggerDisplay('enter', reference, TooltipPopper);
//             this._triggerDisplay('leave', reference, TooltipPopper);
//         }

//         const { firstElementChild } = reference;
//         // 只选取第一个子元素作为宿主元素
//         if (firstElementChild) TooltipRef.appendChild(firstElementChild);

//         TooltipPopper.appendChild(TooltipContent);
//         TooltipPopper.append(TooltipArrow, TooltipInner);
//         reference.append(TooltipRef, TooltipPopper);
//     }

//     private _setCls(reference: Element, nodes: HTMLElement[]): void {
//         // 获取主题颜色
//         const theme = this._getTheme(reference);

//         const nodesCls = [
//             `${PREFIX.tooltip}-rel`,
//             `${PREFIX.tooltip}-popper ${PREFIX.tooltip}-${theme}`,
//             `${PREFIX.tooltip}-content`,
//             `${PREFIX.tooltip}-arrow`,
//             `${PREFIX.tooltip}-inner`
//         ];

//         // 批量添加样式类名
//         let i = 0;
//         const { length } = nodes;
//         for (; i < length; i++) {
//             const node = nodes[i];
//             node.className = `${nodesCls[i]}`;
//         }
//     }

//     private _triggerDisplay(
//         trigger: 'enter' | 'leave',
//         reference: Element,
//         popper: HTMLElement
//     ): void {
//         const ev = () => {
//             if (trigger === 'enter') {
//                 this._initSetPopper(reference, popper);
//             }

//             CssTransition(popper, {
//                 inOrOut: trigger === 'enter' ? 'in' : 'out',
//                 rmCls: true,
//                 enterCls: 'zoom-big-fast-enter',
//                 leaveCls: 'zoom-big-fast-leave',
//                 timeout: 85
//             });
//         };

//         const delay = this._getDelay(reference);

//         if (trigger === 'enter') {
//             reference.addEventListener('mouseenter', () => {
//                 SHOWTIMER = setTimeout(() => {
//                     ev();
//                     setTimeout(() => {
//                         popper.setAttribute('x-placement', popper.dataset['popperPlacement']!);
//                     }, 0);
//                 }, delay);
//             });
//             _arrow.toggleUpdate(popper, 'hover', reference, delay);
//         } else {
//             reference.addEventListener('mouseleave', () => {
//                 clearTimeout(SHOWTIMER);
//                 ev();
//             });
//         }
//     }

//     private _setTip(reference: Element, popper: Element): string {
//         return (popper.textContent = this._getTip(reference));
//     }

//     private _setMaxWidth(reference: Element, popper: HTMLElement): void {
//         const maxWidth = this._getMaxWidth(reference);

//         if (maxWidth <= 0) return;

//         setCss(popper, 'maxWidth', `${maxWidth}px`);

//         popper.classList.add(`${PREFIX.tooltip}-inner-with-width`);
//     }

//     private _initSetPopper(reference: Element, popper: HTMLElement): any {
//         const offset = this._getOffset(reference);
//         const placement = this._getPlacement(reference);

//         popper.setAttribute('x-placement', placement);

//         return _Popper._newCreatePopper(reference, popper, placement, offset);
//     }

//     private _setIsAlwaysShow(reference: Element, popper: HTMLElement): boolean | void {
//         const isAlways = this._getIsAlways(reference);

//         if (isAlways) {
//             setCss(popper, 'display', '');

//             this._initSetPopper(reference, popper);

//             return true;
//         }

//         setCss(popper, 'display', 'none');
//     }

//     private _getTip(node: Element): string {
//         return node.getAttribute('content') || '';
//     }

//     private _getPlacement(node: Element): any {
//         return node.getAttribute('placement') || 'bottom';
//     }

//     private _getDelay(node: Element): number {
//         // 默认 100毫秒的延迟，防止鼠标快速经过时也会显示tooltip
//         return Number(node.getAttribute('delay')) || 100;
//     }

//     private _getIsAlways(node: Element): boolean {
//         return node.getAttribute('always') === 'true';
//     }

//     private _getIsDisabled(node: Element): boolean {
//         return node.getAttribute('disabled') === 'true';
//     }

//     private _getTheme(node: Element): string {
//         return node.getAttribute('theme') || 'dark';
//     }

//     private _getMaxWidth(node: Element): number {
//         return Number(node.getAttribute('max-width')) || 0;
//     }

//     private _getOffset(node: Element): number {
//         return Number(node.getAttribute('offset')) || 0;
//     }
// }

// export default Tooltip;
