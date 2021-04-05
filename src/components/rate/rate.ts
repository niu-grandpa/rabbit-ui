import {
    $el,
    createElem,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import PREFIX from '../prefix';

class Rate {
    readonly VERSION: string;
    private COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-rate', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { icon, count, value, character, showText, allowHalf } = this._attrs(node);

            // @ts-ignore
            node.dataset['value'] = `${value}`;

            this._setMainTemplate(node, count, icon, character);
            this._setShowText(node, showText, value);

            removeAttrs(node, [
                'icon',
                'count',
                'value',
                'character',
                'disabled',
                'allow-half',
                'show-text',
                'clearable'
            ]);
        });
    }

    private _setMainTemplate(node: Element, count: number, icon: string, character: string) {
        const Fragment = document.createDocumentFragment();

        let i = 0;
        for (; i < count; i++) {
            const RateStar = createElem('div');

            this._setStarContent(RateStar, icon, character);

            Fragment.appendChild(RateStar);
        }

        node.appendChild(Fragment);
    }

    private _setStarContent(star: Element, icon: string, character: string): void {
        if (icon || character) {
            star.className = `${PREFIX.rate}-star-chart`;

            let content = '';

            if (icon) {
                content = `<i class="${PREFIX.icon} ${PREFIX.icon}-${icon}"></i>`;
            } else if (character) {
                content = character;
            }

            const template = `
             <span type="half" class="${PREFIX.rate}-star-first">${content}</span> 
             <span class="${PREFIX.rate}-star-second">${content}</span>
            `;

            setHtml(star, template);
        } else {
            star.className = `${PREFIX.rate}-star`;

            const template = `<span type="half" class="${PREFIX.rate}-star-content"></span> `;

            setHtml(star, template);
        }
    }

    private _setActiveStars(node: Element, value: string | number, half: boolean): void {
        value = Number(value) - 1;

        const RateStars = node.querySelectorAll(`.${PREFIX.rate}-star` || `.${PREFIX.rate}-chart`);

        // if (!half) {
        //     if (value >= idx) {
        //         star.classList.add(`${PREFIX.rate}-star-full`);
        //     }
        // } else {
        //     if (/\./.test(`${value}`) && value >= idx) {
        //         star.classList.add(`${PREFIX.rate}-star-full`);
        //     }
        // }
    }

    private _setShowText(node: Element, showText: boolean, value: string | number): void {
        if (!showText) return;

        const RateText = createElem('div');

        RateText.className = `${PREFIX.rate}-text`;

        if (value > 0) {
            setHtml(RateText, `<span>${value} 星</span>`);
        }

        node.appendChild(RateText);
    }

    private _attrs(node: Element) {
        return {
            count: getNumTypeAttr(node, 'count', 5),
            value: getNumTypeAttr(node, 'value', 0),
            disabled: getBooleanTypeAttr(node, 'disabled'),
            allowHalf: getBooleanTypeAttr(node, 'allow-half'),
            showText: getBooleanTypeAttr(node, 'show-text'),
            clearable: getBooleanTypeAttr(node, 'clearable'),
            icon: getStrTypeAttr(node, 'icon', ''),
            character: getStrTypeAttr(node, 'character', '')
        };
    }
}

export default Rate;
