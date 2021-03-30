import PREFIX from '../prefix';
import { type, validComps } from '../../utils';
import { $el, createElem, setCss, setHtml, setText, removeAttrs } from '../../dom-utils';
import { _Popper, CssTransition, _arrow } from '../../mixins';

interface TooltipEvents {
    onShow?: () => void;
    onHide?: () => void;
}

interface Config {
    config(
        el: string
    ): {
        content: string | number; // 显示的内容
        events: (options: TooltipEvents) => void; // Tooltip 事件
    };
}

let SHOWTIMER: any, EVENTTIMER: any;

class Tooltip implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-tooltip', { all: true });
        this._create(this.COMPONENTS);
        _arrow.scrollUpdate();
    }

    public config(
        el: string
    ): {
        content: string | number;
        events: (options: TooltipEvents) => void;
    } {
        const target = $el(el);

        validComps(target, 'tooltip');

        const { _getDelay, _getIsAlways, _getIsDisabled } = Tooltip.prototype;

        const popper = target.querySelector(`.${PREFIX.tooltip}-popper`);
        const popperText = target.querySelector(`.${PREFIX.tooltip}-inner`);

        return {
            get content() {
                return setText(popperText);
            },
            set content(newVal: string | number) {
                if (type.isStr(newVal) || type.isNum(newVal)) setHtml(popperText, `${newVal}`);
            },
            events({ onShow, onHide }): void {
                if (_getIsAlways(target) || _getIsDisabled(target)) return;

                const delay = _getDelay(target);

                _Popper.handleHoverShowAndHideEvents({
                    reference: target,
                    popper: popper,
                    datasetVal: 'tooltipShow',
                    showCb: onShow,
                    hideCb: onHide,
                    delay: delay,
                    timer: EVENTTIMER
                });
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            this._createTooltipNodes(node);
            removeAttrs(node, ['content', 'theme', 'delay', 'max-width', 'disabled', 'always']);
        });
    }

    private _createTooltipNodes(reference: Element): void {
        const TooltipRef = createElem('div');
        const TooltipPopper = createElem('div');
        const TooltipContent = createElem('div');
        const TooltipArrow = createElem('div');
        const TooltipInner = createElem('div');

        this._setCls(reference, [
            TooltipRef,
            TooltipPopper,
            TooltipContent,
            TooltipArrow,
            TooltipInner
        ]);

        this._setTip(reference, TooltipInner);
        this._setMaxWidth(reference, TooltipInner);

        const disabledShow = this._getIsDisabled(reference);
        const alwaysShow = this._setIsAlwaysShow(reference, TooltipPopper);

        // 如果 tooltip 没有设置为总是可见或者禁用显示，则正常鼠标移入移出事件
        if (!alwaysShow && !disabledShow) {
            this._triggerDisplay('enter', reference, TooltipPopper);
            this._triggerDisplay('leave', reference, TooltipPopper);
        }

        const { firstElementChild } = reference;
        // 只选取第一个子元素作为宿主元素
        if (firstElementChild) TooltipRef.appendChild(firstElementChild);

        TooltipPopper.appendChild(TooltipContent);
        TooltipPopper.append(TooltipArrow, TooltipInner);
        reference.append(TooltipRef, TooltipPopper);
    }

    private _setCls(reference: Element, nodes: HTMLElement[]): void {
        // 获取主题颜色
        const theme = this._getTheme(reference);

        const nodesCls = [
            `${PREFIX.tooltip}-rel`,
            `${PREFIX.tooltip}-popper ${PREFIX.tooltip}-${theme}`,
            `${PREFIX.tooltip}-content`,
            `${PREFIX.tooltip}-arrow`,
            `${PREFIX.tooltip}-inner`
        ];

        // 批量添加样式类名
        let i = 0;
        const { length } = nodes;
        for (; i < length; i++) {
            const node = nodes[i];
            node.className = `${nodesCls[i]}`;
        }
    }

    private _triggerDisplay(
        trigger: 'enter' | 'leave',
        reference: Element,
        popper: HTMLElement
    ): void {
        const ev = () => {
            if (trigger === 'enter') this._initSetPopper(reference, popper);

            CssTransition(popper, {
                inOrOut: trigger === 'enter' ? 'in' : 'out',
                rmCls: true,
                enterCls: 'zoom-big-fast-enter',
                leaveCls: 'zoom-big-fast-leave',
                timeout: 85
            });
        };

        const delay = this._getDelay(reference);

        if (trigger === 'enter') {
            reference.addEventListener('mouseenter', () => {
                SHOWTIMER = setTimeout(() => {
                    ev();
                }, delay);
            });
            _arrow.toggleUpdate(popper, 'hover', reference, delay);
        } else {
            reference.addEventListener('mouseleave', () => {
                clearTimeout(SHOWTIMER);
                ev();
            });
        }
    }

    private _setTip(reference: Element, popper: Element): string {
        return (popper.textContent = this._getTip(reference));
    }

    private _setMaxWidth(reference: Element, popper: HTMLElement): void {
        const maxWidth = this._getMaxWidth(reference);

        if (maxWidth <= 0) return;

        setCss(popper, 'maxWidth', `${maxWidth}px`);

        popper.classList.add(`${PREFIX.tooltip}-inner-with-width`);
    }

    private _initSetPopper(reference: Element, popper: HTMLElement): any {
        const offset = this._getOffset(reference);
        const placement = this._getPlacement(reference);

        popper.setAttribute('x-placement', placement);

        return _Popper._newCreatePopper(reference, popper, placement, offset);
    }

    private _setIsAlwaysShow(reference: Element, popper: HTMLElement): boolean | void {
        const isAlways = this._getIsAlways(reference);

        if (isAlways) {
            setCss(popper, 'display', '');

            this._initSetPopper(reference, popper);

            return true;
        }

        setCss(popper, 'display', 'none');
    }

    private _getTip(node: Element): string {
        return node.getAttribute('content') || '';
    }

    private _getPlacement(node: Element): any {
        return node.getAttribute('placement') || 'bottom';
    }

    private _getDelay(node: Element): number {
        // 默认 100毫秒的延迟，防止鼠标快速经过时也会显示tooltip
        return Number(node.getAttribute('delay')) || 100;
    }

    private _getIsAlways(node: Element): boolean {
        return node.getAttribute('always') === 'true';
    }

    private _getIsDisabled(node: Element): boolean {
        return node.getAttribute('disabled') === 'true';
    }

    private _getTheme(node: Element): string {
        return node.getAttribute('theme') || 'dark';
    }

    private _getMaxWidth(node: Element): number {
        return Number(node.getAttribute('max-width')) || 0;
    }

    private _getOffset(node: Element): number {
        return Number(node.getAttribute('offset')) || 0;
    }
}

export default Tooltip;
