import { type, validComps } from '../../utils';
import { $el, bind, getStrTypeAttr, removeAttrs, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        events({ onBack }: PHEvent): void;
    };
}

interface PHEvent {
    onBack: () => void;
}

class PageHeader implements Config {
    readonly VERSION: string;
    private COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-page-header', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        events({ onBack }: PHEvent): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'page-header');

        const backButton = target.querySelector(`.${PREFIX.pageHeader}-back`);

        return {
            events({ onBack }) {
                bind(backButton, 'click', () => {
                    type.isFn(onBack);
                });
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { title, subTitle } = this._attrs(node);

            this._setMainTemplate(node, title, subTitle);

            removeAttrs(node, ['title', 'sub-title']);
        });
    }

    private _setMainTemplate(node: Element, title: string, subTitle: string): void {
        const template = `
        <div class="${PREFIX.pageHeader}-heading">
            <div class="${PREFIX.pageHeader}-back">
                <i class="${PREFIX.icon} ${PREFIX.icon}-md-arrow-back"></i>
            </div>
            <span class="${PREFIX.pageHeader}-heading-title">${title}</span>
            <span class="${PREFIX.pageHeader}-heading-sub-title">${subTitle}</span>
        </div>
        `;

        setHtml(node, template);
    }

    private _attrs(node: Element) {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            subTitle: getStrTypeAttr(node, 'sub-title', '')
        };
    }
}

export default PageHeader;
