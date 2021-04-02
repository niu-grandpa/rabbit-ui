import {
    $el,
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
            const { name, checked } = this._attrs(node);

            this._setChecked(node, checked);
            this._setMainTemplate(node, name);

            removeAttrs(node, ['name', 'checked']);
        });
    }

    private _setChecked(node: Element, checked: boolean): void {
        if (!checked) return;
        node.classList.add(`${PREFIX.checkbox}-checked`);
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

    private _attrs(node: Element) {
        return {
            name: getStrTypeAttr(node, 'name', ''),
            label: getStrTypeAttr(node, 'label', ''),
            value: getArrTypeAttr(node, 'value'),
            checked: getBooleanTypeAttr(node, 'checked'),
            indeterminate: getBooleanTypeAttr(node, 'indeterminate')
        };
    }
}

export default Checkbox;
