/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
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
                editable,
                readonly,
                size,
                placeholder,
                controlsOutside
            } = this._attrs(node);

            this._setMainTemplate(node);
            this._setOutSide(node, controlsOutside);

            const Input = node.querySelector(`.${PREFIX.inputnb}-input`)! as HTMLInputElement;

            this._setInput(Input, min, max, step, name, inputId, placeholder);
            this._setValue(Input, value, precision, min, max);
            this._setSize(node, size);
            this._setDisabled(node, Input, disabled);
            this._setReadonly(Input, readonly, !editable);

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
            <a class="${PREFIX.inputnb}-handler ${PREFIX.inputnb}-handler-down ${PREFIX.inputnb}-handler-down-disabled">
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
        inputElem: HTMLInputElement,
        min: number,
        max: number,
        step: number,
        name: string,
        inputId: string,
        placeholder: string
    ): void {
        min || min === 0 ? (inputElem.min = `${min}`) : '';
        max || min === 0 ? (inputElem.max = `${max}`) : '';
        step && step !== 1 ? (inputElem.step = `${step}`) : '';
        name ? (inputElem.name = name) : '';
        inputId ? (inputElem.id = inputId) : '';
        placeholder ? (inputElem.placeholder = placeholder) : '';
    }

    private _setValue(
        inputElem: HTMLInputElement,
        value: number,
        precision: number,
        min: number,
        max: number
    ): void {
        if (value || value === 0) {
            if (value <= min) {
                value = min;
            }
            if (value >= max) {
                value = max;
            }

            const newVal: string | number = precision ? value.toFixed(precision) : value;
            inputElem.value = `${newVal}`;
        }
    }

    private _setSize(node: Element, size: string): void {
        if (!size) return;
        node.classList.add(`${PREFIX.inputnb}-${size}`);
    }

    private _setDisabled(node: HTMLElement, inputElem: HTMLInputElement, disabled: boolean): void {
        if (!disabled) {
            node.classList.remove(`${PREFIX.inputnb}-disabled`);
            inputElem.disabled = false;
        } else {
            node.classList.add(`${PREFIX.inputnb}-disabled`);
            inputElem.disabled = true;
        }
    }

    private _setReadonly(inputElem: HTMLInputElement, readonly: boolean, editable: boolean): void {
        if (readonly || !editable) {
            inputElem.readOnly = true;
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
            editable: getBooleanTypeAttr(node, 'editable'),
            readonly: getBooleanTypeAttr(node, 'readonly'),
            controlsOutside: getBooleanTypeAttr(node, 'controls-outside')
        };
    }
}

export default InputNumber;
