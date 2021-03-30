import { $el, bind, getNumTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';

class BackTop {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-back-top', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { right, bottom, height, duration } = this._attrs(node);

            this._setRight(node, right);
            this._setBottom(node, bottom);
            this._setAppearance(node);

            this._handleScroll(node, height);
            this._handleClick(node, duration);

            removeAttrs(node, ['right', 'bottom', 'height', 'duration']);
        });
    }

    private _setRight(node: Element, right: number): void {
        setCss(node, 'right', `${right}px`);
    }

    private _setBottom(node: Element, bottom: number): void {
        setCss(node, 'bottom', `${bottom}px`);
    }

    private _setAppearance(node: Element): void {
        if (setHtml(node) && setHtml(node) !== ' ') {
            setHtml(node, node.innerHTML);
        } else {
            const template = `<div class="${PREFIX.backtop}-inner">
                                  <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-up"></i>
                              </div>`;

            setHtml(node, template);
        }
    }

    private _handleScroll(node: Element, height: number): void {
        const visable = (y: number) => {
            const scrollY = Math.floor(y);
            const visibilityHeight = Math.floor(height);

            // 判断页面是否滚动到指定显示的高度
            scrollY >= visibilityHeight
                ? setCss(node, 'display', 'block')
                : setCss(node, 'display', '');
        };

        bind(window, 'scroll', () => {
            visable(window.scrollY);
        });
    }

    private _handleClick(node: Element, duration: number): void {
        bind(node, 'click', () => {
            const sTop: number = document.documentElement.scrollTop || document.body.scrollTop;
            this._scrollTop(window, sTop, 0, duration);
        });
    }

    private _scrollTop(el: any, from: number, to: number, duration: number) {
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame =
                window.webkitRequestAnimationFrame ||
                // @ts-ignore
                window.mozRequestAnimationFrame ||
                // @ts-ignore
                window.msRequestAnimationFrame ||
                function (callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
        }

        const difference = Math.abs(from - to);
        const step = Math.ceil((difference / duration) * 25);

        const scroll = (start: number, end: number, step: number) => {
            let d = start + step > end ? end : start + step;

            if (start <= end && d == 0) return;

            d = start - step < end ? end : start - step;

            el === window ? window.scrollTo(d, d) : (el.scrollTop = d);

            window.requestAnimationFrame(() => scroll(d, end, step));
        };

        scroll(from, to, step);
    }

    private _attrs(node: Element) {
        return {
            right: getNumTypeAttr(node, 'right', 30),
            bottom: getNumTypeAttr(node, 'bottom', 30),
            height: getNumTypeAttr(node, 'height', 400),
            duration: getNumTypeAttr(node, 'duration', 500)
        };
    }
}

export default BackTop;
