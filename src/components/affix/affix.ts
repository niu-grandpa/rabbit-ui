/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    createElem,
    getBooleanTypeAttr,
    getNumTypeAttr,
    removeAttrs,
    setCss
} from '../../dom-utils';
import { type } from '../../utils';
import PREFIX from '../prefix';

function getScroll(target: Window, top?: boolean): number {
    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';

    let ret = target[prop];

    if (typeof ret !== 'number') {
        ret = window.document.documentElement[method];
    }

    return ret;
}

function getOffset(
    element: HTMLElement
): {
    top: number;
    left: number;
} {
    const rect = element.getBoundingClientRect();

    const scrollTop = getScroll(window, true);
    const scrollLeft = getScroll(window);

    const docEl = window.document.body;
    const clientTop = docEl.clientTop || 0;
    const clientLeft = docEl.clientLeft || 0;

    return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
    };
}

interface Config {
    config(
        el: string
    ): {
        events({ onChange }: AffixEvent): void;
    };
}

interface AffixEvent {
    onChange?: (affixed: boolean) => void;
}

class Affix implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-affix', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        events({ onChange }: AffixEvent): void;
    } {
        const target = $el(el) as HTMLElement;
        const { offsetTop, offsetBottom } = Affix.prototype._attrs(target);

        const elOffset = getOffset(target);
        const elHeight = target.offsetHeight;
        const windowHeight = window.innerHeight;

        let affixed = false,
            offsetType = 'top';

        if (offsetBottom >= 0) {
            offsetType = 'bottom';
        }

        return {
            events({ onChange }) {
                const handler = () => {
                    const isAffix: boolean = target.classList.contains(`${PREFIX.affix}`);
                    const scrollTop = getScroll(window, true);

                    // 固定到顶部时触发事件
                    if (elOffset.top - offsetTop < scrollTop && offsetType == 'top' && !isAffix) {
                        affixed = true;
                        onChange && type.isFn(onChange, affixed);
                    } else if (
                        elOffset.top - offsetTop > scrollTop &&
                        offsetType == 'top' &&
                        affixed
                    ) {
                        affixed = false;
                        onChange && type.isFn(onChange, affixed);
                    }

                    // 固定到底部时触发事件
                    if (
                        elOffset.top + offsetBottom + elHeight > scrollTop + windowHeight &&
                        offsetType == 'bottom' &&
                        !affixed
                    ) {
                        affixed = true;
                        onChange && type.isFn(onChange, affixed);
                    } else if (
                        elOffset.top + offsetBottom + elHeight < scrollTop + windowHeight &&
                        offsetType == 'bottom' &&
                        affixed
                    ) {
                        affixed = false;
                        onChange && type.isFn(onChange, affixed);
                    }
                };

                handler();

                // 这里 useCapture 选项设置为 true 解决了被下面同样的滚动监听覆盖的 bug
                // 相当于提高了事件触发优先级
                window.addEventListener('scroll', handler, true);
                window.addEventListener('resize', handler, true);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<HTMLElement>): void {
        COMPONENTS.forEach((node) => {
            const { offsetTop, offsetBottom, useCapture } = this._attrs(node);

            const wrapper = createElem('div');
            const cloneElm = this._createCloneElm(wrapper);

            node.after(wrapper);
            wrapper.appendChild(node);

            this._handleScroll(node, cloneElm, offsetTop, offsetBottom, useCapture);

            removeAttrs(node, ['offset-top', 'offset-bottom', 'use-capture']);
        });
    }

    private _createCloneElm(node: HTMLElement): HTMLElement {
        const element = createElem('div');
        setCss(element, 'display', 'none');
        node.after(element);
        return element;
    }

    private _handleScroll(
        node: HTMLElement,
        cloneElm: HTMLElement,
        offsetTop: number,
        offsetBottom: number,
        useCapture: boolean
    ): void {
        const container = node.parentElement!;

        const elOffset = getOffset(node);
        const elHeight = node.offsetHeight;

        const windowHeight = window.innerHeight;

        let affix = false,
            top: string,
            left: string,
            width: string,
            bottom: string,
            offsetType = 'top',
            cloneElmWidth: string,
            cloneElmHeight: string,
            display: string;

        if (offsetBottom >= 0) {
            offsetType = 'bottom';
        }

        const scroll = () => {
            const isAffix: boolean = node.classList.contains(`${PREFIX.affix}`);
            const scrollTop = getScroll(window, true);

            // 固定到顶部
            if (elOffset.top - offsetTop < scrollTop && offsetType == 'top' && !isAffix) {
                affix = true;
                display = '';
                top = `${offsetTop}px`;
                left = `${elOffset.left}px`;
                width = `${container.offsetWidth}px`;
                cloneElmWidth = `${node.clientWidth}px`;
                cloneElmHeight = `${node.clientHeight}px`;
                node.classList.add(`${PREFIX.affix}`);
            } else if (elOffset.top - offsetTop > scrollTop && offsetType == 'top' && affix) {
                top = '';
                left = '';
                width = '';
                affix = false;
                display = 'none';
                cloneElmWidth = '';
                cloneElmHeight = '';
                node.classList.remove(`${PREFIX.affix}`);
            }

            // 固定到底部
            if (
                elOffset.top + offsetBottom + elHeight > scrollTop + windowHeight &&
                offsetType == 'bottom' &&
                !affix
            ) {
                affix = true;
                left = `${elOffset.left}px`;
                width = `${container.offsetWidth}px`;
                bottom = `${offsetBottom}px`;
                node.classList.add(`${PREFIX.affix}`);
            } else if (
                elOffset.top + offsetBottom + elHeight < scrollTop + windowHeight &&
                offsetType == 'bottom' &&
                affix
            ) {
                affix = false;
                left = '';
                width = '';
                bottom = '';
                node.classList.remove(`${PREFIX.affix}`);
            }

            setCss(node, 'top', top);
            setCss(node, 'left', left);
            setCss(node, 'width', width);
            setCss(node, 'bottom', bottom);

            setCss(cloneElm, 'width', cloneElmWidth);
            setCss(cloneElm, 'height', cloneElmHeight);
            setCss(cloneElm, 'display', display);
        };

        scroll();

        window.addEventListener('scroll', scroll, useCapture);
        window.addEventListener('resize', scroll, useCapture);
    }

    private _attrs(node: HTMLElement) {
        return {
            offsetTop: getNumTypeAttr(node, 'offset-top', 0),
            offsetBottom: getNumTypeAttr(node, 'offset-bottom'),
            useCapture: getBooleanTypeAttr(node, 'use-capture')
        };
    }
}

export default Affix;
