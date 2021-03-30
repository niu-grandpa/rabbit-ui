import { type, validComps } from '../../utils';
import {
    $el,
    bind,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml,
    siblings
} from '../../dom-utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        checked: boolean;
        value: string;
        events({ onChange }: RadioEvent): void;
    };
}

interface RadioEvent {
    onChange: (param?: boolean | Element) => void;
}

class Radio implements Config {
    readonly VERSION: string;
    private COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-radio', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        checked: boolean;
        value: string;
        events({ onChange }: RadioEvent): void;
    } {
        const target = $el(el) as HTMLElement;
        const isGroup = target.tagName.toLowerCase() == 'r-radio-group';

        // 排除 group 项
        if (!isGroup) {
            validComps(target, 'radio');
        }

        const {
            _isChecked,
            _isDisabled,
            _setSingleChecked,
            _setCurrentlyChecked
        } = Radio.prototype;

        return {
            get checked() {
                return !isGroup && _isChecked(target);
            },

            set checked(newVal: boolean) {
                if (isGroup || !type.isBol(newVal)) return;
                _setSingleChecked(target, newVal);
            },

            get value() {
                // @ts-ignore
                return isGroup && target.getAttribute('value');
            },

            set value(newVal: string) {
                if (!isGroup && !type.isStr(newVal)) return;

                Array.from(target.children).forEach((child) => {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    const label = child.getAttribute('label')!;
                    _setCurrentlyChecked(child, newVal, label);
                });
            },

            events({ onChange }) {
                if (!isGroup) {
                    bind(target, 'click', () => {
                        if (_isDisabled(target)) return false;
                        onChange && type.isFn(onChange, true);
                    });
                } else {
                    const item = Object.create(null);

                    bind(target, 'click', () => {
                        Array.from(target.children).forEach((child, index) => {
                            if (_isDisabled(child)) return false;

                            item['index'] = index;
                            item['label'] = child.getAttribute('label');
                            item['current'] = child;

                            if (_isChecked(child)) onChange && type.isFn(onChange, item);
                        });
                    });
                }
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            const { checked, label, icon, name } = this._attrs(node);
            const content = setHtml(node);
            const groupWrapper = this._getGroupElm(node);

            if (groupWrapper) {
                const { value } = this._attrs(groupWrapper);
                this._setCurrentlyChecked(node, value, label);
            }

            this._setMainTemplate(node, content, name);
            this._setSingleChecked(node, checked, groupWrapper);
            this._setIcon(node, icon);
            this._handleClick(node, groupWrapper);

            removeAttrs(node, ['checked', 'icon']);
        });
    }

    private _setMainTemplate(node: Element, content: string, name: string): void {
        const template = `
        <span class="${PREFIX.radio}">
          <span class="${PREFIX.radio}-inner"></span>
          <input type="radio" name="${name}" class="${PREFIX.radio}-input" />
        </span> ${content}
      `;

        setHtml(node, template);
    }

    // 设置单个radio选中
    private _setSingleChecked(
        node: Element,
        checked: boolean,
        groupWrapper?: Element | null
    ): void {
        if (groupWrapper) return;

        checked
            ? node.classList.add(`${PREFIX.radio}-checked`)
            : node.classList.remove(`${PREFIX.radio}-checked`);
    }

    // 设置radio组的当前选中项
    private _setCurrentlyChecked(node: Element, value: string, label: string): void {
        if (value !== label) return;

        node.classList.add(`${PREFIX.radio}-wrapper-checked`);
        node.classList.add(`${PREFIX.radio}-checked`);

        siblings(node).forEach((o: Element) => {
            o.classList.remove(`${PREFIX.radio}-wrapper-checked`);
            o.classList.remove(`${PREFIX.radio}-checked`);
        });
    }

    private _setIcon(node: Element, icon: string): void {
        if (!icon) return;

        const template = `<i class="${PREFIX.icon} ${PREFIX.icon}-${icon}"></i>`;
        node.querySelector(`.${PREFIX.radio}`)?.insertAdjacentHTML('afterend', template);
    }

    private _handleClick(node: Element, groupWrapper: Element | null): void {
        if (this._isDisabled(node)) return;

        const changeStatus = () => {
            if (groupWrapper) {
                node.classList.add(`${PREFIX.radio}-wrapper-checked`);

                siblings(node).forEach((o: Element) => {
                    if (this._isChecked(o)) {
                        o.classList.remove(`${PREFIX.radio}-checked`);
                        o.classList.remove(`${PREFIX.radio}-wrapper-checked`);
                        o.classList.remove(`${PREFIX.radio}-focus`);
                    }
                });
            }

            node.classList.add(`${PREFIX.radio}-checked`);
        };

        bind(node, 'click', () => changeStatus());
        bind(node, 'mousedown', () => {
            node.classList.add(`${PREFIX.radio}-focus`);
        });
        bind(node, 'mouseup', () => {
            setTimeout(() => node.classList.remove(`${PREFIX.radio}-focus`), 1000);
        });
    }

    private _getGroupElm(node: Element): Element | null {
        const tag = node.parentElement;
        return tag?.tagName.toLowerCase() === 'r-radio-group' ? tag : null;
    }

    private _isDisabled(node: Element) {
        return node.getAttribute('disabled') == '' || node.getAttribute('disabled') == 'true';
    }

    private _isChecked(node: Element) {
        return node.classList.contains(`${PREFIX.radio}-checked`);
    }

    private _attrs(node: Element) {
        return {
            value: getStrTypeAttr(node, 'value', ''),
            name: getStrTypeAttr(node, 'name', ''),
            label: getStrTypeAttr(node, 'label', ''),
            icon: getStrTypeAttr(node, 'icon', ''),
            checked: getBooleanTypeAttr(node, 'checked')
        };
    }
}

export default Radio;
