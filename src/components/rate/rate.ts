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
            const { icon, count, value, character, showText, disabled, allowHalf } = this._attrs(
                node
            );

            // @ts-ignore
            node.dataset['value'] = `${value}`;

            this._setMainTemplate(node, count, icon, character);
            this._setActiveStars(node, value, allowHalf);
            this._setShowText(node, showText, value);
            this._setDisabled(node, disabled);

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
             <span class="${PREFIX.rate}-star-first">${content}</span> 
             <span class="${PREFIX.rate}-star-second">${content}</span>
            `;

            setHtml(star, template);
        } else {
            star.className = `${PREFIX.rate}-star`;

            const template = `<span class="${PREFIX.rate}-star-content"></span> `;

            setHtml(star, template);
        }
    }

    private _setActiveStars(node: Element, value: string | number, half: boolean): void {
        if (!value) return;

        let index = Number(value) - 1;

        const RateStars = node.querySelectorAll(`.${PREFIX.rate}-star`);
        const RateStarChart = node.querySelectorAll(`.${PREFIX.rate}-star-chart`);

        const setPrevStarFull = (children: NodeListOf<Element>, i: number, diff = 0) => {
            while (i--) {
                if (i < 0) break;

                if (!children[i - diff]) return;

                children[i - diff].classList.add(`${PREFIX.rate}-star-full`);
            }
        };

        const setFull = (children: NodeListOf<Element>) => {
            index = Math.floor(index);

            const lastActiveStar = children[index];

            if (!lastActiveStar) return;

            lastActiveStar.classList.add(`${PREFIX.rate}-star-full`);

            setPrevStarFull(children, index);
        };

        const setHalf = (children: NodeListOf<Element>) => {
            // @ts-ignore
            const next = Math.round(value);

            if (value < next) {
                if (children[next - 1])
                    children[next - 1].classList.add(`${PREFIX.rate}-star-half`);
            }

            setPrevStarFull(children, next, 1);
        };

        const determineHalfOrFullStar = (children: NodeListOf<Element>) => {
            if (!half) {
                setFull(children);
            } else {
                if (/\./.test(`${value}`)) {
                    setHalf(children);
                } else {
                    setFull(children);
                }
            }
        };

        determineHalfOrFullStar(RateStars);
        determineHalfOrFullStar(RateStarChart);
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

    private _setDisabled(node: Element, disabled: boolean): void {
        if (!disabled) {
            if (node.classList.contains(`${PREFIX.rate}-disabled`))
                node.classList.remove(`${PREFIX.rate}-disabled`);
        } else {
            node.classList.add(`${PREFIX.rate}-disabled`);
        }
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
