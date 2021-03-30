/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        checked: boolean;
        disabled: boolean;
        loading: boolean;
        events({ onChange }: SwitchEvent): void;
    };
}

interface SwitchEvent {
    onChange?: (checked: boolean) => void;
}

class Switch implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = '1.0';
        this.COMPONENTS = $el('r-switch', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        checked: boolean;
        disabled: boolean;
        loading: boolean;
        events({ onChange }: SwitchEvent): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'switch');

        const Input = target.querySelector('input[type="hidden"]') as HTMLInputElement;
        const isChecked: boolean = Input.value === 'true';
        const isDisabled: boolean = target.classList.contains(`${PREFIX.switch}-disabled`);
        const isLoading: boolean = target.classList.contains(`${PREFIX.switch}-loading`);

        const changeState = (flag: boolean, state: boolean, cls: string) => {
            if (flag && !type.isBol(flag)) return;

            if (flag && state) return;
            else target.classList.add(`${PREFIX.switch}-${cls}`);

            if (flag == false) target.classList.remove(`${PREFIX.switch}-${cls}`);
        };

        return {
            get checked() {
                return isChecked;
            },
            set checked(newVal: boolean) {
                changeState(newVal, isChecked, 'checked');
            },

            get disabled() {
                return isDisabled;
            },
            set disabled(newVal: boolean) {
                changeState(newVal, isDisabled, 'disabled');
            },

            get loading() {
                return isLoading;
            },
            set loading(newVal: boolean) {
                changeState(newVal, isLoading, 'loading');
            },

            events({ onChange }: SwitchEvent) {
                let checked: boolean;
                const handler = () => {
                    checked = JSON.parse(Input.value);
                    onChange && type.isFn(onChange, checked);
                };
                bind(target, 'click', handler);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            node.setAttribute('tabindex', '0');

            const {
                checked,
                loading,
                disabled,
                size,
                open,
                close,
                trueColor,
                falseColor
            } = this._attrs(node);

            this._setSize(node, size);
            this._setMainTemplate(node);
            this._setDisabled(node, disabled);
            this._setLoading(node, loading);
            this._setStatusBgc(node, checked, trueColor, falseColor);

            const SwitchInner = node.querySelector(`.${PREFIX.switch}-inner`)!;
            const HiddenInput = node.querySelector('input[type="hidden"]') as HTMLInputElement;

            this._setChecked(node, HiddenInput, checked);
            this._setStatusText(SwitchInner, checked, open, close);

            this._handleChange(node, HiddenInput, SwitchInner, {
                open,
                close,
                trueColor,
                falseColor
            });

            removeAttrs(node, [
                'checked',
                'loading',
                'disabled',
                'size',
                'open',
                'close',
                'true-color',
                'false-color'
            ]);
        });
    }

    private _setDisabled(node: Element, disabled: boolean) {
        if (!disabled) return;
        node.classList.add(`${PREFIX.switch}-disabled`);
    }

    private _setLoading(node: Element, loading: boolean): void {
        if (!loading) return;
        node.classList.add(`${PREFIX.switch}-loading`);
    }

    private _setSize(node: Element, size: string): void {
        if (!size || size === 'default') return;
        node.classList.add(`${PREFIX.switch}-${size}`);
    }

    private _setMainTemplate(node: Element): void {
        const template = `
        <input type="hidden" /> 
        <span class="${PREFIX.switch}-inner"></span>
        `;

        setHtml(node, template);
    }

    private _handleChange(
        node: Element,
        input: HTMLInputElement,
        textContainer: Element,
        options: { open: string; close: string; trueColor: string; falseColor: string }
    ): void {
        const handler = () => {
            const isLoading: boolean = node.classList.contains(`${PREFIX.switch}-loading`);
            const isDisabled: boolean = node.classList.contains(`${PREFIX.switch}-disabled`);

            if (isDisabled || isLoading) return false;

            const isChecked: boolean = node.classList.contains(`${PREFIX.switch}-checked`);

            let flag = false;
            if (isChecked) {
                node.classList.remove(`${PREFIX.switch}-checked`);
            } else {
                flag = !flag;
                node.classList.add(`${PREFIX.switch}-checked`);
            }

            this._setChecked(node, input, flag);
            this._setStatusBgc(node, flag, options.trueColor, options.falseColor);
            this._setStatusText(textContainer, flag, options.open, options.close);
        };

        bind(node, 'click', handler);
    }

    private _setChecked(node: Element, input: HTMLInputElement, checked: boolean): void {
        if (checked) {
            node.classList.add(`${PREFIX.switch}-checked`);
        }

        input.value = `${checked}`;
    }

    private _setStatusText(elem: Element, checked: boolean, open: string, close: string): void {
        const changeText = (text: string, flag: boolean) => {
            if (text) {
                if (flag) {
                    setHtml(elem, text);
                } else {
                    setHtml(elem, text);
                }
            }
        };
        changeText(open, checked);
        changeText(close, !checked);

        checked ? setHtml(elem, open) : setHtml(elem, close);
    }

    private _setStatusBgc(
        node: Element,
        checked: boolean,
        trueColor: string,
        falseColor: string
    ): void {
        if (trueColor) {
            if (checked) {
                setCss(node, 'backgroundColor', trueColor);
                setCss(node, 'borderColor', trueColor);
            }
        }
        if (falseColor) {
            if (!checked) {
                setCss(node, 'backgroundColor', falseColor);
                setCss(node, 'borderColor', falseColor);
            }
        }
    }

    private _attrs(node: Element) {
        return {
            checked: getBooleanTypeAttr(node, 'checked'),
            loading: getBooleanTypeAttr(node, 'loading'),
            disabled: getBooleanTypeAttr(node, 'disabled'),
            size: getStrTypeAttr(node, 'size', 'default'),
            open: getStrTypeAttr(node, 'open', ''),
            close: getStrTypeAttr(node, 'close', ''),
            trueColor: getStrTypeAttr(node, 'true-color', ''),
            falseColor: getStrTypeAttr(node, 'false-color', '')
        };
    }
}

export default Switch;
