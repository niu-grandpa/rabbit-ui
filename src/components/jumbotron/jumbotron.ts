import { $el, getStrTypeAttr, removeAttrs, setHtml } from '../../dom-utils';
import { moreThanOneNode } from '../../mixins';
import PREFIX from '../prefix';

class Jumbotron {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-jumbotron', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            if (moreThanOneNode(node)) return;

            const placeholderNode = node.firstElementChild;
            const { title, subTitle } = this._attrs(node);

            this._setMainTemplate(node, title, subTitle);
            this._setExtraContent(node, placeholderNode);

            removeAttrs(node, ['title', 'sub-title']);
        });
    }

    private _setMainTemplate(node: Element, title: string, subTitle: string): void {
        const template = `
         <div class="${PREFIX.jumbotron}-container">
             <h1 class="${PREFIX.jumbotron}-title">${title}</h1>
             <div class="${PREFIX.jumbotron}-subtitle">${subTitle}</div>
         </div>`;

        setHtml(node, template);
    }

    private _setExtraContent(node: Element, placeholderNode: Element | null): void {
        if (!placeholderNode) return;

        const JumbotronContainer = node.querySelector(`.${PREFIX.jumbotron}-container`);
        JumbotronContainer?.appendChild(placeholderNode);
    }

    private _attrs(node: Element) {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            subTitle: getStrTypeAttr(node, 'sub-title', '')
        };
    }
}

export default Jumbotron;
