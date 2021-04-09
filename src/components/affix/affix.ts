import { $el, getBooleanTypeAttr, getNumTypeAttr, removeAttrs } from '../../dom-utils';

class Affix {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-affix', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            const { useCapture, offsetTop, offsetBottom } = this._attrs(node);

            this._handleScroll(node, useCapture, offsetTop, offsetBottom);

            removeAttrs(node, ['use-capture', 'offset-top', 'offset-bottom']);
        });
    }

    private _handleScroll(
        node: Element,
        useCapture: boolean,
        offsetTop: number,
        offsetBottom: number
    ) {
        let affix = false;

        const scrollTop = this._getScroll(window, true);
        const elOffset = this._getOffset(node);
        const windowHeight = window.innerHeight;
        // @ts-ignore
        const elHeight = node.offsetHeight;
    }

    private _setAffix(type: string, node: Element, scrollY: number, offset: number): void {
        const nodeWidth = Math.round(node.getBoundingClientRect().width);
        const nodeHeight = Math.round(node.getBoundingClientRect().height);
    }

    private _getOffset(
        element: Element
    ): {
        top: number;
        left: number;
    } {
        const rect = element.getBoundingClientRect();

        const scrollTop = this._getScroll(window, true);
        const scrollLeft = this._getScroll(window);

        const docEl = window.document.body;
        const clientTop = docEl.clientTop || 0;
        const clientLeft = docEl.clientLeft || 0;

        return {
            top: rect.top + scrollTop - clientTop,
            left: rect.left + scrollLeft - clientLeft
        };
    }

    private _getScroll(target: Window, top?: boolean): number {
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        const method = top ? 'scrollTop' : 'scrollLeft';

        let ret = target[prop];

        if (typeof ret !== 'number') {
            ret = window.document.documentElement[method];
        }

        return ret;
    }

    private _attrs(node: Element) {
        return {
            offsetTop: getNumTypeAttr(node, 'offset-top', 0),
            offsetBottom: getNumTypeAttr(node, 'offset-bottom'),
            useCapture: getBooleanTypeAttr(node, 'use-capture')
        };
    }
}

export default Affix;
