/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { moreThanOneNode, warn } from '../../mixins';
import { $el, getBooleanTypeAttr, getStrTypeAttr, removeAttrs, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';

class Select {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-select', { all: true });
        this._create(this.COMPONENTS);
    }
    private _create(COMPONENTS: NodeListOf<HTMLElement>): void {
        COMPONENTS.forEach((node) => {
            if (moreThanOneNode(node)) return;
            const placeholderNode = node.firstElementChild;
            const { size, prefix, placement, placeholder, disabled, clearable } = this._attrs(node);

            this._setSize(node, size);
            this._setMainTemplate(node, placeholder);
            this._setListOption(node, placeholderNode);

            removeAttrs(node, [
                'size',
                'prefix',
                'placement',
                'placeholder',
                'disabled',
                'clearable'
            ]);
        });
    }
    private _setSize(node: HTMLElement, size: string): void {
        if (!size) return;
        node.classList.add(`${PREFIX.select}-${size}`);
    }
    private _setMainTemplate(node: HTMLElement, placeholder: string): void {
        node.classList.add(`${PREFIX.select}-single`);
        const template = `
        <div tabindex="0" class="${PREFIX.select}-selection">
            <span class="${PREFIX.select}-placeholder">${placeholder}</span>
            <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-down ${PREFIX.select}-arrow"></i>
        </div>
        <div class="${PREFIX.select}-dropdown"></div>
        `;
        setHtml(node, template);
    }
    private _setListOption(node: Element, placeholderNode: Element | null): void {
        if (!placeholderNode) return;
        const SelectDropdown = node.querySelector(`.${PREFIX.select}-dropdown`)!;
        SelectDropdown.appendChild(placeholderNode);
    }
    private _attrs(node: HTMLElement) {
        return {
            size: getStrTypeAttr(node, 'size', ''),
            label: getStrTypeAttr(node, 'label', ''),
            prefix: getStrTypeAttr(node, 'prefix', ''),
            placement: getStrTypeAttr(node, 'placement', 'bottom-start'),
            placeholder: getStrTypeAttr(node, 'placeholder', '请选择'),
            disabled: getBooleanTypeAttr(node, 'disabled'),
            clearable: getBooleanTypeAttr(node, 'clearable')
        };
    }
}
export default Select;
