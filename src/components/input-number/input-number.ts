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
import { warn } from '../../mixins';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        value: number;
        step: number;
        disabled: boolean;
        readOnly: boolean;
        editable: boolean;
        events({ onChange, onFocus, onBlur }: InputNumberEvents): void;
    };
}

interface InputNumberEvents {
    onChange?: (value: number) => void;
    onFocus?: (event: InputEvent) => void;
    onBlur?: () => void;
}

function addNum(num1: number, num2: number): number {
    let sq1: number, sq2: number;

    try {
        sq1 = num1.toString().split('.')[1].length;
    } catch (e) {
        sq1 = 0;
    }
    try {
        sq2 = num2.toString().split('.')[1].length;
    } catch (e) {
        sq2 = 0;
    }

    const m = Math.pow(10, Math.max(sq1, sq2));
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}

class InputNumber implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-input-number', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        value: number;
        step: number;
        disabled: boolean;
        readOnly: boolean;
        editable: boolean;
        events({ onChange, onFocus, onBlur }: InputNumberEvents): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'input-number');

        const { _attrs, _setValue, _setDisabled } = InputNumber.prototype;
        const { min, max, step, disabled, readOnly, editable, precision, formatter } = _attrs(
            target
        );

        const Input = target.querySelector(`.${PREFIX.inputnb}-input`)! as HTMLInputElement;
        const ArrowUp = target.querySelector(`.${PREFIX.inputnb}-handler-up`);
        const ArrowDown = target.querySelector(`.${PREFIX.inputnb}-handler-down`);
        const BtnUp = target.querySelector(`.${PREFIX.inputnb}-controls-outside-up`);
        const BtnDown = target.querySelector(`.${PREFIX.inputnb}-controls-outside-down`);

        return {
            get value() {
                return Number(Input.value);
            },
            set value(newVal: number) {
                if (newVal && !type.isNum(newVal)) return;
                _setValue(Input, newVal, formatter, precision, min, max);
            },
            get step() {
                return step;
            },
            set step(newVal: number) {
                if (newVal && !type.isNum(newVal)) return;
                Input.step = step;
            },
            get disabled() {
                return disabled;
            },
            set disabled(newVal: boolean) {
                if (newVal && !type.isBol(newVal)) return;
                _setDisabled(target, Input, newVal);
            },
            get readOnly() {
                return readOnly;
            },
            set readOnly(newVal: boolean) {
                if (newVal && !type.isBol(newVal)) return;

                Input.readOnly = newVal;

                const disableArrow = (elem1: Element | null, elem2: Element | null) => {
                    if (elem1) {
                        // @ts-ignore
                        elem1.style.pointerEvents = newVal ? 'none' : '';
                        // @ts-ignore
                        elem2.style.pointerEvents = newVal ? 'none' : '';
                    }
                };

                disableArrow(ArrowUp, ArrowDown);
                disableArrow(BtnUp, BtnDown);
            },
            get editable() {
                return editable;
            },
            set editable(newVal: boolean) {
                if (newVal && !type.isBol(newVal)) return;
                Input.style.pointerEvents = !newVal ? 'none' : '';
            },
            events({ onChange, onFocus, onBlur }) {
                let value: number;

                const changeEv = (e: Event) => {
                    e.stopPropagation();
                    value = Number(Input.value);
                    if (!isNaN(value)) {
                        onChange && type.isFn(onChange, value);
                    } else {
                        warn(`Invalid input value --> '${Input.value}' at '${el}'`);
                        return;
                    }
                };

                if (ArrowUp) {
                    bind(ArrowUp, 'click', changeEv);
                    bind(ArrowDown, 'click', changeEv);
                }
                if (BtnUp) {
                    bind(BtnUp, 'click', changeEv);
                    bind(BtnDown, 'click', changeEv);
                }

                bind(Input, 'keydown', (e: KeyboardEvent) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') changeEv(e);
                });
                bind(Input, 'input', (e: InputEvent) => changeEv(e));
                bind(Input, 'focus', (e: InputEvent) => {
                    e.stopPropagation();
                    onFocus && type.isFn(onFocus, e);
                });
                bind(Input, 'blur', (e: InputEvent) => {
                    e.stopPropagation();
                    onBlur && type.isFn(onBlur);
                });
            }
        };
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
                parser,
                formatter,
                precision,
                disabled,
                editable,
                readOnly,
                size,
                placeholder,
                controlsOutside
            } = this._attrs(node);

            this._setMainTemplate(node);
            this._setOutSide(node, controlsOutside);

            const Input = node.querySelector(`.${PREFIX.inputnb}-input`)! as HTMLInputElement;
            const ArrowUp = node.querySelector(`.${PREFIX.inputnb}-handler-up`);
            const ArrowDown = node.querySelector(`.${PREFIX.inputnb}-handler-down`);
            const BtnUp = node.querySelector(`.${PREFIX.inputnb}-controls-outside-up`);
            const BtnDown = node.querySelector(`.${PREFIX.inputnb}-controls-outside-down`);

            this._setInput(Input, min, max, step, name, inputId, placeholder);
            this._setValue(Input, value, formatter, precision, min, max);
            this._setSize(node, size);
            this._setDisabled(node, Input, disabled);
            this._setReadonlyAndEditable(Input, readOnly, editable);
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
                readOnly,
                parser,
                formatter
            );

            removeAttrs(node, [
                'min',
                'max',
                'step',
                'value',
                'precision',
                'size',
                'name',
                'parser',
                'formatter',
                'input-id',
                'placeholder',
                'disabled',
                'editable',
                'readOnly',
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
           <input autocomplete="off" spellcheck="false" class="${PREFIX.inputnb}-input">
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
        isNaN(min) || min === 0 ? (input.min = `${min}`) : '';
        isNaN(max) || min === 0 ? (input.max = `${max}`) : '';
        isNaN(step) && step !== 1 ? (input.step = `${step}`) : '';

        name ? (input.name = name) : '';
        inputId ? (input.id = inputId) : '';
        placeholder ? (input.placeholder = placeholder) : '';
    }

    private _formatterVal(input: HTMLInputElement, formatter: string, val: number): void {
        // `约定的 ${value}`替换为 `${val}`
        const resVal = formatter.replace('value', 'val');
        input.value = `${formatter ? eval(resVal) : val}`;
    }

    private _parserVal(parser: string, val: string): string {
        if (parser) {
            const _parser = eval(parser) as any[];
            return val.replace(_parser[0], _parser[1]);
        } else {
            // 如果没有指定从 formatter 里转换回数字的方式，则使用默认正则方式
            return val.replace(/[^\d.-]/g, '');
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
        readOnly: boolean,
        parser: string,
        formatter: string
    ): void {
        if (readOnly) return;

        const setValue = (val: number) => {
            this._setValue(input, val, formatter, precision, min, max);
            this._setHandler(aUp, aDown, btnUp, btnDown, val, min, max);
        };

        const changeStep = (type: 'up' | 'down'): false | undefined => {
            // 如果指定了输入框展示值的格式，那么这里就要用 parser 的值转换为原来的值
            const val = this._parserVal(parser, input.value);
            const targetVal = Number(val);

            if (type === 'up') {
                if (addNum(targetVal, step) <= max) {
                    setValue(targetVal);
                } else {
                    return false;
                }

                setValue(addNum(targetVal, step));
            } else if (type === 'down') {
                if (addNum(targetVal, step) >= min) {
                    setValue(targetVal);
                } else {
                    return false;
                }

                setValue(addNum(targetVal, -step));
            }
        };

        const handleKeyBoardChange = () => {
            bind(input, 'keydown', (e: KeyboardEvent) => {
                if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return false;

                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    changeStep('up');
                }
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    changeStep('down');
                }
            });
        };

        const handleInputChange = () => {
            bind(input, 'input', (e: InputEvent) => {
                e.stopPropagation();
                // 当输入框输入时只匹配数字、小数点和减号
                const val = input.value.replace(/[^\d.-]/g, '');
                setValue(Number(val));
            });
        };

        const handleArrowChange = () => {
            if (aUp && aDown) {
                bind(aUp, 'click', () => changeStep('up'));
                bind(aDown, 'click', () => changeStep('down'));
            }
            if (btnUp && btnDown) {
                bind(btnUp, 'click', () => changeStep('up'));
                bind(btnDown, 'click', () => changeStep('down'));
            }
        };

        handleKeyBoardChange();
        handleInputChange();
        handleArrowChange();
    }

    private _setValue(
        input: HTMLInputElement,
        value: number,
        formatter: string,
        precision: number,
        min: number,
        max: number
    ): void {
        let targetVal: any = !isNaN(precision) ? value.toFixed(precision) : value;

        if ((targetVal && !isNaN(targetVal)) || targetVal === 0) {
            if (targetVal > max && !isNaN(max)) {
                targetVal = max;
            } else if (targetVal < min && !isNaN(min)) {
                targetVal = min;
            }
            // 如果指定了输入框展示值的格式则使用它，否则反之
            this._formatterVal(input, formatter, targetVal);
        }
    }

    private _setSize(node: Element, size: string): void {
        if (!size) return;
        node.classList.add(`${PREFIX.inputnb}-${size}`);
    }

    private _setReadonlyAndEditable(
        input: HTMLInputElement,
        readOnly: boolean,
        editable: string
    ): void {
        if (readOnly) input.readOnly = true;
        if (readOnly || editable === 'false') input.style.pointerEvents = 'none';
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

    private _setHandler(
        aUp: Element | null,
        aDown: Element | null,
        btnUp: Element | null,
        btnDown: Element | null,
        value: number,
        min: number,
        max: number
    ): void {
        const isSetDisable = (elm1: Element, elm2: Element, outside: boolean) => {
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

        if (aUp && aDown) isSetDisable(aUp, aDown, false);
        if (btnUp && btnDown) isSetDisable(btnUp, btnDown, true);
    }

    private _attrs(node: HTMLElement) {
        return {
            min: getNumTypeAttr(node, 'min', -Infinity),
            max: getNumTypeAttr(node, 'max', Infinity),
            step: getNumTypeAttr(node, 'step', 1),
            value: getNumTypeAttr(node, 'value', 0),
            precision: getNumTypeAttr(node, 'precision'),
            size: getStrTypeAttr(node, 'size', ''),
            name: getStrTypeAttr(node, 'name', ''),
            inputId: getStrTypeAttr(node, 'input-id', ''),
            parser: getStrTypeAttr(node, 'parser', ''),
            formatter: getStrTypeAttr(node, 'formatter', ''),
            placeholder: getStrTypeAttr(node, 'placeholder', ''),
            disabled: getBooleanTypeAttr(node, 'disabled'),
            readOnly: getBooleanTypeAttr(node, 'readonly'),
            editable: getStrTypeAttr(node, 'editable', 'true'),
            controlsOutside: getBooleanTypeAttr(node, 'controls-outside')
        };
    }
}

export default InputNumber;
