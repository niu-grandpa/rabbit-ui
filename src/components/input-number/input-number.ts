/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import PREFIX from '../prefix';

interface InputNumberEvents {
    onChange: (value: number) => void;
    onFocus: () => void;
    onBlur: () => void;
}

class InputNumber {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-input-number', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<HTMLElement>) {
        COMPONENTS.forEach((node) => {
            const {
                min,
                max,
                step,
                value,
                name,
                inputId,
                precision,
                disabled,
                readonly,
                size,
                placeholder,
                controlsOutside
            } = this._attrs(node);

            this._setMainTemplate(node);
            this._setOutSide(node, controlsOutside);

            const Input = node.querySelector(`.${PREFIX.inputnb}-input`)! as HTMLInputElement;
            const ArrowUp = node.querySelector(`.${PREFIX.inputnb}-handler-up`);
            const ArrowDown = node.querySelector(`.${PREFIX.inputnb}-handler-down`);
            const BtnUp = node.querySelector(`.${PREFIX.inputnb}-handler-controls-outside-up`);
            const BtnDown = node.querySelector(`.${PREFIX.inputnb}-handler-controls-outside-down`);

            this._setInput(Input, min, max, step, name, inputId, placeholder);
            this._setValue(Input, value, precision, min, max, step);
            this._setSize(node, size);
            this._setDisabled(node, Input, disabled);
            this._setReadonly(Input, readonly);
            this._setHandler(ArrowUp, ArrowDown, BtnUp, BtnDown, value, min, max);
            this._handleChange(
                Input,
                ArrowUp,
                ArrowDown,
                BtnUp,
                BtnDown,
                min,
                max,
                step,
                precision,
                disabled,
                readonly
            );

            removeAttrs(node, [
                'min',
                'max',
                'step',
                'value',
                'precision',
                'size',
                'name',
                'input-id',
                'placeholder',
                'disabled',
                'editable',
                'readonly',
                'controls-outside'
            ]);
        });
    }

    private _setMainTemplate(node: HTMLElement): void {
        node.classList.add(`${PREFIX.inputnb}`);

        const template = `
        <div class="${PREFIX.inputnb}-handler-wrap">
            <a class="${PREFIX.inputnb}-handler ${PREFIX.inputnb}-handler-up">
                <span class="${PREFIX.inputnb}-handler-up-inner ${PREFIX.icon} ${PREFIX.icon}-ios-arrow-up"></span>
            </a>
            <a class="${PREFIX.inputnb}-handler ${PREFIX.inputnb}-handler-down">
                <span class="${PREFIX.inputnb}-handler-down-inner ${PREFIX.icon} ${PREFIX.icon}-ios-arrow-down"></span>
            </a>
        </div>
        <div class="${PREFIX.inputnb}-input-wrap">
           <input type="number" class="${PREFIX.inputnb}-input">
        </div>
        `;

        setHtml(node, template);
    }

    private _setOutSide(node: HTMLElement, controlsOutside: boolean): void {
        if (!controlsOutside) return;

        node.classList.add(`${PREFIX.inputnb}-controls-outside`);

        const handlerWrap = node.querySelector(`.${PREFIX.inputnb}-handler-wrap`)!;

        const template = `
         <div class="${PREFIX.inputnb}-controls-outside-btn ${PREFIX.inputnb}-controls-outside-down">
            <i class="${PREFIX.icon} ${PREFIX.icon}-ios-remove"></i>
         </div>
         <div class="${PREFIX.inputnb}-controls-outside-btn ${PREFIX.inputnb}-controls-outside-up">
            <i class="${PREFIX.icon} ${PREFIX.icon}-ios-add"></i>
         </div>
        `;

        handlerWrap.insertAdjacentHTML('afterend', template);
        handlerWrap.remove();
    }

    private _setInput(
        input: HTMLInputElement,
        min: number,
        max: number,
        step: number,
        name: string,
        inputId: string,
        placeholder: string
    ): void {
        min || min === 0 ? (input.min = `${min}`) : '';
        max || min === 0 ? (input.max = `${max}`) : '';
        step && step !== 1 ? (input.step = `${step}`) : '';
        name ? (input.name = name) : '';
        inputId ? (input.id = inputId) : '';
        placeholder ? (input.placeholder = placeholder) : '';
    }

    private _setSize(node: Element, size: string): void {
        if (!size) return;
        node.classList.add(`${PREFIX.inputnb}-${size}`);
    }

    private _setDisabled(node: HTMLElement, input: HTMLInputElement, disabled: boolean): void {
        if (!disabled) {
            node.classList.remove(`${PREFIX.inputnb}-disabled`);
            input.disabled = false;
        } else {
            node.classList.add(`${PREFIX.inputnb}-disabled`);
            input.disabled = true;
        }
    }

    private _handleChange(
        input: HTMLInputElement,
        aUp: Element | null,
        aDown: Element | null,
        btnUp: Element | null,
        btnDown: Element | null,
        min: number,
        max: number,
        step: number,
        precision: number,
        disabled: boolean,
        readOnly: boolean
    ): void {
        if (disabled || readOnly) return;

        const setHandlerState = () => {
            setTimeout(() => {
                this._setHandler(aUp, aDown, btnUp, btnDown, Number(input.value), min, max);
            }, 0);
        };
        const setValue = (val: number) => {
            this._setValue(input, val, precision, min, max, step);
            setHandlerState();
        };
        const addAndSubtractValues = (type: string) => {
            let val = Number(input.value);
            if (type === 'add') {
                val >= max ? (val = max) : val++;
                setValue(val);
            } else {
                val <= min ? (val = min) : val--;
                setValue(val);
            }
        };
        const handleKeyBoardChange = () => {
            bind(input, 'keydown', (e: KeyboardEvent) => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    setHandlerState();
                }
            });
        };
        const handleInputChange = () => {
            bind(input, 'input', () => setValue(Number(input.value)));
        };
        const handleArrowChange = () => {
            if (aUp && aDown) {
                bind(aUp, 'click', () => addAndSubtractValues('add'));
                bind(aDown, 'click', () => addAndSubtractValues('subtract'));
            }
            if (btnUp && btnDown) {
                bind(btnUp, 'click', () => addAndSubtractValues('add'));
                bind(btnDown, 'click', () => addAndSubtractValues('subtract'));
            }
        };

        handleKeyBoardChange();
        handleInputChange();
        handleArrowChange();
    }

    private _setValue(
        input: HTMLInputElement,
        value: number,
        precision: number,
        min: number,
        max: number,
        step: number
    ): void {
        if (value || value === 0) {
            if (value <= min) {
                value = min;
            }
            if (value >= max) {
                value = max;
            }

            const newVal: string | number = precision ? value.toFixed(precision) : value;
            input.value = `${newVal}`;
        }
    }

    private _setReadonly(input: HTMLInputElement, readonly: boolean): void {
        if (readonly) {
            input.readOnly = true;
        }
    }

    private _setHandler(
        aUp: Element | null,
        aDown: Element | null,
        btnUp: Element | null,
        btnDown: Element | null,
        value: number,
        min: number,
        max: number
    ): void {
        const isSetDisabled = (elm1: Element, elm2: Element, outside: boolean) => {
            const upDisabledCls = outside ? 'controls-outside-btn' : 'handler-up';
            const downDisabledCls = outside ? 'controls-outside-btn' : 'handler-down';

            if (Math.ceil(value) >= max) {
                elm1.classList.add(`${PREFIX.inputnb}-${upDisabledCls}-disabled`);
            } else {
                elm1.classList.remove(`${PREFIX.inputnb}-${upDisabledCls}-disabled`);
            }
            if (Math.ceil(value) <= min) {
                elm2.classList.add(`${PREFIX.inputnb}-${downDisabledCls}-disabled`);
            } else {
                elm2.classList.remove(`${PREFIX.inputnb}-${downDisabledCls}-disabled`);
            }
        };

        if (aUp && aDown) {
            isSetDisabled(aUp, aDown, false);
        }
        if (btnUp && btnDown) {
            isSetDisabled(btnUp, btnDown, true);
        }
    }

    private _attrs(node: HTMLElement) {
        return {
            min: getNumTypeAttr(node, 'min'),
            max: getNumTypeAttr(node, 'max'),
            step: getNumTypeAttr(node, 'step', 1),
            value: getNumTypeAttr(node, 'value', 0),
            precision: getNumTypeAttr(node, 'precision'),
            size: getStrTypeAttr(node, 'size', ''),
            name: getStrTypeAttr(node, 'name', ''),
            inputId: getStrTypeAttr(node, 'input-id', ''),
            placeholder: getStrTypeAttr(node, 'placeholder', ''),
            disabled: getBooleanTypeAttr(node, 'disabled'),
            readonly: getBooleanTypeAttr(node, 'readonly'),
            controlsOutside: getBooleanTypeAttr(node, 'controls-outside')
        };
    }
}

export default InputNumber;
