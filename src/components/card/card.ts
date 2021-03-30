/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import { moreThanOneNode } from '../../mixins';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        title: string;
        extra: string;
    };
}

class Card implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-card', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        title: string;
        extra: string;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'card');

        const CardHead = target.querySelector(`.${PREFIX.card}-head`)!;
        const CardExtra = target.querySelector(`.${PREFIX.card}-extra`)!;

        return {
            get title() {
                return setHtml(CardHead);
            },
            set title(newVal: string) {
                if (newVal && !type.isStr(newVal)) return;
                setHtml(CardHead, newVal);
            },
            get extra() {
                return setHtml(CardExtra);
            },
            set extra(newVal: string) {
                if (newVal && !type.isStr(newVal)) return;
                setHtml(CardExtra, newVal);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            if (moreThanOneNode(node)) return;

            const placeholderNode = node.firstElementChild!;
            const { title, extra, shadow, noBorder, disHover } = this._attrs(node);

            this._isShowBordered(node, noBorder);
            this._isShowShadow(node, shadow);
            this._isDisHover(node, disHover);

            this._setHead(node, title);
            this._setBody(node, placeholderNode);
            this._setExtra(node, extra);

            removeAttrs(node, ['title', 'extra', 'shadow', 'dis-hover', 'bordered']);
        });
    }

    private _isShowBordered(node: Element, noBorder: boolean): void {
        if (!noBorder) return;
        node.classList.add(`${PREFIX.card}-no-border`);
    }

    private _isShowShadow(node: Element, shadow: boolean): void {
        if (!shadow) return;
        node.classList.add(`${PREFIX.card}-shadow`);
    }

    private _isDisHover(node: Element, disHover: boolean): void {
        if (!disHover) return;
        node.classList.add(`${PREFIX.card}-dis-hover`);
    }

    private _setHead(node: Element, title: string): void {
        if (!title) return;

        const CardHeadTemplate = `<div class="${PREFIX.card}-head">${title}</div>`;
        node.insertAdjacentHTML('afterbegin', CardHeadTemplate);
    }

    private _setBody(node: Element, placeholderNode: Element): void {
        const Fragment = document.createDocumentFragment();
        const CardBody = createElem('div');

        CardBody.className = `${PREFIX.card}-body`;
        CardBody.appendChild(placeholderNode);

        Fragment.appendChild(CardBody);
        node.appendChild(Fragment);
    }

    private _setExtra(node: Element, extra: string): void {
        if (!extra) return;

        const CardExtraTemplate = `<div class="${PREFIX.card}-extra">${extra}</div>`;
        node.insertAdjacentHTML('beforeend', CardExtraTemplate);
    }

    private _attrs(node: Element) {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            extra: getStrTypeAttr(node, 'extra', ''),
            shadow: getBooleanTypeAttr(node, 'shadow'),
            disHover: getBooleanTypeAttr(node, 'dis-hover'),
            noBorder: getBooleanTypeAttr(node, 'no-border')
        };
    }
}

export default Card;
