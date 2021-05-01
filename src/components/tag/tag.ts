import {
    $el,
    bind,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { destroyElem, validComps } from '../../utils';
import { isFn } from '../../utils/check-type';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        events({ onClose, onChange }: TagEvents): void;
    };
}

interface TagEvents {
    onClose?: ($this: Element) => void;
    onChange?: (checked: boolean) => void;
}

class Tag implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = '1.0';
        this.COMPONENTS = $el('r-tag', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        events({ onClose, onChange }: TagEvents): void;
    } {
        const target = $el(el);

        validComps(target, 'tag');

        const CloseIcon = target.querySelector(`.${PREFIX.icon}-ios-close`);

        const $this = target;
        let checked: boolean;

        return {
            events({ onClose, onChange }: TagEvents) {
                bind(target, 'click', () => {
                    checked = target.dataset.checked === 'true' ? true : false;
                    onChange && isFn(onChange, checked);
                });

                if (!CloseIcon) return;

                bind(CloseIcon, 'click', (e: Event) => {
                    e.stopPropagation();
                    onClose && isFn(onClose, $this);
                });
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { type, size, color, checked, checkable, closable } = this._attrs(node);

            this._setMainTemplate(node);
            this._setType(node, type);
            this._setIsChecked(node, checked);
            this._setSize(node, size);
            this._setColor(node, type, checkable, color);
            this._setClosable(node, closable);
            this._setCheckable(node, checkable);
            this._handleClose(node, closable);

            removeAttrs(node, ['type', 'size', 'color', 'checked', 'checkable', 'closable']);
        });
    }

    private _setMainTemplate(node: Element): void {
        const content = setHtml(node);
        setHtml(node, `<span class="${PREFIX.tag}-text">${content}</span>`);
    }

    private _setType(node: Element, type: string) {
        if (type) node.classList.add(`${PREFIX.tag}-${type}`);

        if (type === 'dot') {
            node.insertAdjacentHTML('afterbegin', `<span class="${PREFIX.tag}-dot-inner"></span>`);
        }
    }

    private _setIsChecked(node: Element, checkable: string): void {
        if (checkable !== 'true') return;
        node.classList.add(`${PREFIX.tag}-checked`);
    }

    private _setColor(node: Element, type: string, checkable: boolean, color: string): void {
        const { _defaultColors } = this;
        const isUseDefaultColor = _defaultColors().includes(color);
        const TagText = node.querySelector(`.${PREFIX.tag}-text`);

        if (!color) return;

        if (isUseDefaultColor) {
            node.classList.add(`${PREFIX.tag}-${color}`);
        } else {
            setCss(node, 'background', `${color}`);
            setCss(node, 'borderColor', `${color}`);
        }

        if (color !== 'default' && type !== 'dot' && type !== 'border' && !checkable) {
            TagText?.classList.add(`${PREFIX.tag}-color-white`);
        }

        if (isUseDefaultColor && type === 'border') {
            TagText?.classList.add(`${PREFIX.tag}-color-${color}`);
        } else {
            setCss(TagText, 'color', `${color}`);
        }
    }

    private _setSize(node: Element, size: string): void {
        if (!size) return;
        node.classList.add(`${PREFIX.tag}-size-${size}`);
    }

    private _setClosable(node: Element, closable: boolean): void {
        if (!closable) return;

        node.classList.add(`${PREFIX.tag}-closable`);
        node.insertAdjacentHTML(
            'beforeend',
            `<i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>`
        );
    }

    private _setCheckable(node: Element, checkable: boolean): void {
        if (!checkable) return;

        node.classList.remove(`${PREFIX.tag}-checked`);

        const TagText = node.querySelector(`.${PREFIX.tag}-text`);

        bind(node, 'click', () => {
            const isChecked = node.classList.contains(`${PREFIX.tag}-checked`);
            // @ts-ignore
            node.dataset.checked = !isChecked;
            node.classList[isChecked ? 'remove' : 'add'](`${PREFIX.tag}-checked`);
            TagText?.classList[isChecked ? 'remove' : 'add'](`${PREFIX.tag}-color-white`);
        });
    }

    private _handleClose(node: Element, closable: boolean): void {
        if (!closable) return;

        const CloseIcon = node.querySelector(`.${PREFIX.icon}-ios-close`);
        bind(CloseIcon, 'click', () => {
            destroyElem(node, { fadeOut: true });
        });
    }

    private _defaultColors(): string[] {
        const COLORS = [
            'default',
            'primary',
            'success',
            'warning',
            'error',
            'blue',
            'green',
            'red',
            'yellow',
            'pink',
            'magenta',
            'volcano',
            'orange',
            'gold',
            'lime',
            'cyan',
            'geekblue',
            'purple'
        ];
        return COLORS;
    }

    private _attrs(node: Element) {
        return {
            type: getStrTypeAttr(node, 'type', ''),
            size: getStrTypeAttr(node, 'size', ''),
            color: getStrTypeAttr(node, 'color', 'default'),
            checked: getStrTypeAttr(node, 'checked', 'true'),
            closable: getBooleanTypeAttr(node, 'closable'),
            checkable: getBooleanTypeAttr(node, 'checkable')
        };
    }
}

export default Tag;
