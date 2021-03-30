import { $el, getStrTypeAttr, setHtml, removeAttrs } from '../../dom-utils';
import PREFIX from '../prefix';
import DefaultImage from '../../../assets/empty.svg';

class Empty {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-empty', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            const { desc, image, imageStyle } = this._attrs(node);
            const footerElm = node.firstElementChild;

            this._setMainTemplate(node, desc, image, imageStyle);
            this._setFooter(node, footerElm);

            removeAttrs(node, ['desc', 'image', 'image-style']);
        });
    }

    private _setMainTemplate(node: Element, desc: string, image: string, imageStyle: string): void {
        const template = ` 
         <div class="${PREFIX.empty}-image" style="${imageStyle}">
            <img src="${image}" alt="empty" />
         </div>
         <div class="${PREFIX.empty}-description">${desc == 'false' ? '' : desc}</div>`;

        setHtml(node, template);
    }

    private _setFooter(node: Element, footerElm: Element | null): void {
        if (!footerElm) return;

        const footerTpl = `<div class="${PREFIX.empty}-footer"></div>`;

        node.insertAdjacentHTML('beforeend', footerTpl);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        node.querySelector(`.${PREFIX.empty}-footer`)!.appendChild(footerElm);
    }

    private _attrs(node: Element) {
        return {
            desc: getStrTypeAttr(node, 'desc', '暂无数据'),
            image: getStrTypeAttr(node, 'image', `${DefaultImage}`),
            imageStyle: getStrTypeAttr(node, 'image-style', '')
        };
    }
}

export default Empty;
