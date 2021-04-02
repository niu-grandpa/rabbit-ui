/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { $el, bind, getStrTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import { warn } from '../../mixins';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        events({ onError }: AvatarEvent): void;
    };
}

interface AvatarEvent {
    onError: (event: Event) => void;
}

class Avatar implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-avatar', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        events({ onError }: AvatarEvent): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'avatar');

        const AvatarImage = target.querySelector('img');

        return {
            events({ onError }: AvatarEvent) {
                if (!AvatarImage) {
                    warn(
                        `Unable to add an event where the image failed to load for the current avatar --> "${el}"`
                    );
                    return;
                }

                bind(AvatarImage, 'error', (event: Event) => onError && type.isFn(onError, event));
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { icon, src, alt, size } = this._attrs(node);

            this._setSize(node, size);
            this._setIcon(node, icon);
            this._setImage(node, src, alt);
            this._setText(node, icon, src);

            removeAttrs(node, ['icon', 'src', 'alt']);
        });
    }

    private _setSize(node: Element, size: string): void {
        if (!size) return;

        const _size = Number(size);

        if (!_size) return;

        setCss(node, 'width', `${_size}px`);
        setCss(node, 'height', `${_size}px`);
        setCss(node, 'fontSize', `${_size / 2}px`);

        node.removeAttribute('size');
    }

    private _setIcon(node: Element, icon: string): void {
        if (!icon) return;

        node.classList.add(`${PREFIX.avatar}-icon`);

        const AvatarIcon = `<i class="${PREFIX.icon} ${PREFIX.icon}-${icon}"></i>`;
        setHtml(node, AvatarIcon);
    }

    private _setImage(node: Element, src: string, alt: string): void {
        if (!src) return;

        node.classList.add(`${PREFIX.avatar}-image`);

        const AvatarImage = `<img src="${src}" alt="${alt}" />`;
        setHtml(node, AvatarImage);
    }

    private _setText(node: Element, icon: string, src: string): void {
        if (icon || src) return;

        if (!setHtml(node)) return;

        const text = setHtml(node);

        const AvatarText = `<span class="${PREFIX.avatar}-string">${text}</span>`;

        setHtml(node, AvatarText);

        this._setScale(node);
    }

    // 防止字符型头像的字体溢出边界
    private _setScale(node: Element) {
        const children = node.querySelector(`.${PREFIX.avatar}-string`)! as HTMLElement;

        if (!children) return;

        const avatarWidth = node.getBoundingClientRect().width;
        const childrenWidth = children.offsetWidth;

        if (avatarWidth - 8 < childrenWidth) {
            const newScale = `scale(${(avatarWidth - 8) / childrenWidth}) translateX(-50%)`;
            setCss(children, 'transform', `${newScale}`);
        } else {
            setCss(children, 'transform', 'scale(1) translateX(-50%)');
        }
    }

    private _attrs(node: Element) {
        return {
            icon: getStrTypeAttr(node, 'icon', ''),
            src: getStrTypeAttr(node, 'src', ''),
            alt: getStrTypeAttr(node, 'alt', ''),
            size: getStrTypeAttr(node, 'size', '')
        };
    }
}

export default Avatar;
