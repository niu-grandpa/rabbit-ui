/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    getArrTypeAttr,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import PREFIX from '../prefix';

class Checkbox {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-checkbox', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            const { icon, name, checked, label } = this._attrs(node);
            const CheckboxGroupWrapper = this._getGroupWrapper(node);

            this._setChecked(node, checked);
            this._setMainTemplate(node, name);
            this._setLabel(node, label);
            this._setDisabled(node);
            this._setIcon(node, icon);
            this._handleChange(node);

            if (CheckboxGroupWrapper) {
                const { value } = this._attrs(CheckboxGroupWrapper);
                this._setMultipleChecks(CheckboxGroupWrapper, value);
                removeAttrs(CheckboxGroupWrapper, ['value']);
            }

            removeAttrs(node, ['icon', 'name', 'checked', 'label']);
        });
    }

    private _setChecked(node: Element, checked: boolean): void {
        // @ts-ignore
        node.dataset['value'] = `${checked}`;

        if (!checked) {
            if (node.classList.contains(`${PREFIX.checkbox}-checked`)) {
                node.classList.remove(`${PREFIX.checkbox}-checked`);
            }
        } else {
            node.classList.add(`${PREFIX.checkbox}-checked`);
        }
    }

    private _setMainTemplate(node: Element, name: string) {
        const content = setHtml(node);

        const template = `
         <span class="${PREFIX.checkbox}">
            <span class="${PREFIX.checkbox}-inner"></span>
                <input type="checkbox" class="${PREFIX.checkbox}-input" name="${name}">
            </span>
         <span>${content}</span>
        `;

        setHtml(node, template);
    }

    private _setLabel(node: Element, label: string): void {
        if (!this._getGroupWrapper(node)) return;
        // @ts-ignore
        node.dataset['label'] = label;
    }

    private _setDisabled(node: Element): void {
        if (!this._isDisabled(node)) return;

        const CheckBoxInput = node.querySelector(`.${PREFIX.checkbox}-input`)! as HTMLInputElement;

        CheckBoxInput.disabled = true;
    }

    private _setIcon(node: Element, icon: string): void {
        if (!icon) return;

        const template = `<i class="${PREFIX.icon} ${PREFIX.icon}-${icon}"></i>`;
        node.querySelector(`.${PREFIX.checkbox}`)!.insertAdjacentHTML('afterend', template);
    }

    private _setMultipleChecks(checkboxGroupWrapper: Element, value: (string | number)[]): void {
        let i = 0;
        const { length } = value;

        for (; i < length; i++) {
            const Checkbox = checkboxGroupWrapper.querySelector(`[data-label="${value[i]}"]`);
            Checkbox ? this._setChecked(Checkbox, true) : '';
        }
    }

    private _handleChange(node: Element): void {
        const addFocusedState = (e: any) => {
            if (
                e.target.parentElement.tagName === 'R-CHECKBOX' ||
                e.target.parentElement.className === `${PREFIX.checkbox}`
            ) {
                node.querySelector(`.${PREFIX.checkbox}-inner`)?.classList.add(
                    `${PREFIX.checkbox}-focus`
                );
            } else {
                node.querySelector(`.${PREFIX.checkbox}-inner`)?.classList.remove(
                    `${PREFIX.checkbox}-focus`
                );
            }
        };

        const toogle = (e: any) => {
            e.stopPropagation();

            // @ts-ignore
            const isChecked = node.dataset['value'] === 'true' ? false : true;
            const isDisabled = this._isDisabled(node);

            if (isDisabled) return false;

            addFocusedState(e);

            this._setChecked(node, isChecked);
        };

        bind(node, 'click', (e: any) => toogle(e));
        bind(document, 'click', (e: any) => addFocusedState(e));
    }

    private _isDisabled(node: Element): boolean {
        return node.getAttribute('disabled') == '' || node.getAttribute('disabled') == 'true';
    }

    private _getGroupWrapper(node: Element): Element | null {
        const parent = node.parentElement;
        return parent?.tagName.toLowerCase() === 'r-checkbox-group' ? parent : null;
    }

    private _attrs(node: Element) {
        return {
            icon: getStrTypeAttr(node, 'icon', ''),
            name: getStrTypeAttr(node, 'name', ''),
            label: getStrTypeAttr(node, 'label', ''),
            value: getArrTypeAttr(node, 'value'),
            checked: getBooleanTypeAttr(node, 'checked'),
            indeterminate: getBooleanTypeAttr(node, 'indeterminate')
        };
    }
}

export default Checkbox;
