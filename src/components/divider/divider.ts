import PREFIX from '../prefix';
import { $el, createElem, getBooleanTypeAttr, getStrTypeAttr, removeAttrs } from '../../dom-utils';

class Divider {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-divider', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            this._setType(node);
            this._setDashed(node);
            this._setPlain(node);
            this._setTitle(node);
            removeAttrs(node, ['dashed', 'plain', 'orientation']);
        });
    }

    private _setType(node: Element): void {
        const { type } = this._attrs(node);
        node.setAttribute('type', `${type}`);
    }

    private _setDashed(node: Element): void {
        const { dashed } = this._attrs(node);
        if (dashed) {
            node.classList.add(`${PREFIX.divider}-dashed`);
        }
    }

    private _setPlain(node: Element): void {
        const { plain } = this._attrs(node);
        if (plain) {
            node.classList.add(`${PREFIX.divider}-plain`);
        }
    }

    private _setOrientation(node: Element): void {
        const { orientation } = this._attrs(node);
        node.classList.add(`${PREFIX.divider}-with-text-${orientation}`);
    }

    private _setTitle(node: Element): void {
        if (node.innerHTML == '' || node.innerHTML == ' ') return;

        this._setOrientation(node);

        const DividerText = createElem('span');

        DividerText.className = `${PREFIX.divider}-inner-text`;
        DividerText.innerHTML = node.innerHTML;

        node.classList.add(`${PREFIX.divider}-with-text`);
        node.innerHTML = '';
        node.appendChild(DividerText);
    }

    private _attrs(node: Element) {
        return {
            type: getStrTypeAttr(node, 'type', 'horizontal'),
            orientation: getStrTypeAttr(node, 'orientation', 'center'),
            dashed: getBooleanTypeAttr(node, 'dashed'),
            plain: getBooleanTypeAttr(node, 'plain')
        };
    }
}

export default Divider;
