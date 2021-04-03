/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { warn } from '../../mixins';
import {
    $el,
    bind,
    getArrTypeAttr,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        value: (string | number)[];
        checked: boolean;
        indeterminate: boolean;
        events({ onChange }: CheckboxEvent): void;
    };
}

interface CheckboxEvent {
    onChange: (checked: boolean | string[]) => void;
}

class Checkbox implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-checkbox', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        value: (string | number)[];
        checked: boolean;
        indeterminate: boolean;
        events({ onChange }: CheckboxEvent): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'checkbox');

        const {
            _attrs,
            _getGroupWrapper,
            _setChecked,
            _setIndeterminate,
            _setMultipleChecks
        } = Checkbox.prototype;

        const CheckBoxGroupWapper = _getGroupWrapper(target);
        const { value, checked, indeterminate } = _attrs(target);

        return {
            get value() {
                return value;
            },
            set value(newVal) {
                if (!CheckBoxGroupWapper) {
                    warn(`This checkbox is not a child of a group element -->"${el}"`);
                    return;
                }

                if (newVal && !type.isArr(newVal)) return;

                _setMultipleChecks(CheckBoxGroupWapper, newVal);
            },

            get checked() {
                return checked;
            },
            set checked(newVal) {
                if (newVal && !type.isBol(newVal)) return;
                _setChecked(target, newVal);
            },

            get indeterminate() {
                return indeterminate;
            },
            set indeterminate(newVal) {
                if (newVal && !type.isBol(newVal)) return;
                _setIndeterminate(target, newVal);
            },

            events({ onChange }: CheckboxEvent) {
                let checked: boolean | string[];

                const func = () => {
                    if (CheckBoxGroupWapper) {
                        checked;
                    } else {
                        checked = target.dataset['value'] === 'true';
                    }

                    onChange && type.isFn(onChange, checked);
                };

                bind(target, 'click', func);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            const { icon, name, checked, label, indeterminate } = this._attrs(node);
            const CheckboxGroupWrapper = this._getGroupWrapper(node);

            this._setChecked(node, checked);
            this._setMainTemplate(node, name);
            this._setLabel(node, label);
            this._setDisabled(node);
            this._setIcon(node, icon);
            this._setIndeterminate(node, indeterminate);
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

    private _setIndeterminate(node: Element, indeterminate: boolean) {
        const Checkbox = node.querySelector(`.${PREFIX.checkbox}`)!;

        if (!indeterminate) {
            if (Checkbox.classList.contains(`${PREFIX.checkbox}-indeterminate`)) {
                Checkbox.classList.remove(`${PREFIX.checkbox}-indeterminate`);
            }
        } else {
            Checkbox.classList.add(`${PREFIX.checkbox}-indeterminate`);
        }
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
        const addFocusedState = () => {
            node.querySelector(`.${PREFIX.checkbox}-inner`)?.classList.add(
                `${PREFIX.checkbox}-focus`
            );
            setTimeout(() => {
                node.querySelector(`.${PREFIX.checkbox}-inner`)?.classList.remove(
                    `${PREFIX.checkbox}-focus`
                );
            }, 1500);
        };

        const toogle = () => {
            // @ts-ignore
            const isChecked = node.dataset['value'] === 'true' ? false : true;
            const isDisabled = this._isDisabled(node);

            if (isDisabled) return false;

            addFocusedState();

            this._setChecked(node, isChecked);
        };

        bind(node, 'click', toogle);
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
