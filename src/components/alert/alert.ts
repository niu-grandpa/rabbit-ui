/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import { moreThanOneNode, warn } from '../../mixins';
import { destroyElem, type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        title: string;
        icon: string;
        events({ onClose }: AlertEvent): void;
    };
}

interface AlertEvent {
    onClose?: (event: MouseEvent) => void;
}

class Alert implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-alert', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        title: string;
        icon: string;
        events({ onClose }: AlertEvent): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'alert');

        const AlertTitle = target.querySelector(`.${PREFIX.alert}-title`)!;
        const AlertIcon = target.querySelector(`.${PREFIX.alert}-icon`)!;

        return {
            get title() {
                return setHtml(AlertTitle);
            },
            set title(newVal: string) {
                if (newVal && !type.isStr(newVal)) return;
                setHtml(AlertTitle, newVal);
            },

            get icon() {
                return setHtml(AlertIcon);
            },
            set icon(newVal: string) {
                if (!AlertIcon) {
                    warn(`You need to set the "show-icon" attribute to "true" --> "${el}"`);
                    return;
                }
                if (newVal && !type.isStr(newVal)) return;
                setHtml(AlertIcon, newVal);
            },

            events({ onClose }: AlertEvent) {
                const AlertClose = target.querySelector(`.${PREFIX.alert}-close`)!;
                if (!AlertClose) return;
                bind(AlertClose, 'click', (event: Event) => onClose && type.isFn(onClose, event));
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            if (moreThanOneNode(node)) return;

            const { icon, type, title, closable, banner, showIcon, closeText } = this._attrs(node);
            const placeholderNode = node.firstElementChild;

            this._setMainTemplate(node, title);
            this._setBanner(node, banner);
            this._setIconType(node, type, showIcon, icon, placeholderNode);
            this._setDescription(node, placeholderNode);
            this._setClosable(node, closable, closeText);
            this._handleClose(node);

            removeAttrs(node, ['title', 'icon', 'banner', 'closable', 'close-text', 'show-icon']);
        });
    }

    private _setMainTemplate(node: Element, title: string) {
        const template = `
         <div class="${PREFIX.alert}-title">${title}</div>
         <div class="${PREFIX.alert}-desc"></div>
        `;
        setHtml(node, template);
    }

    private _setBanner(node: Element, banner: boolean): void {
        if (!banner) return;
        node.classList.add(`${PREFIX.alert}-with-banner`);
    }

    private _setIconType(
        node: Element,
        type: string,
        showIcon: boolean,
        icon: string,
        desc: Element | null
    ): void {
        if (!showIcon) return;

        node.classList.add(`${PREFIX.alert}-with-icon`);

        const AlertIconWrap = createElem('span');
        AlertIconWrap.className = `${PREFIX.alert}-icon`;

        if (icon) {
            setHtml(AlertIconWrap, icon);
        } else {
            // 默认为 info 图标
            let iconType = 'information-circle';

            switch (type) {
                case 'success':
                    iconType = 'checkmark-circle';
                    break;
                case 'warning':
                    iconType = 'alert';
                    break;
                case 'error':
                    iconType = 'close-circle';
                    break;
            }

            if (desc) {
                iconType += '-outline';
            }

            const AlertIcon = `<i class="${PREFIX.icon} ${PREFIX.icon}-ios-${iconType}"></i>`;

            setHtml(AlertIconWrap, AlertIcon);
        }

        node.appendChild(AlertIconWrap);
    }

    private _setDescription(node: Element, placeholderNode: Element | null) {
        if (!placeholderNode) return;

        node.classList.add(`${PREFIX.alert}-with-desc`);

        const AlertDesc = node.querySelector(`.${PREFIX.alert}-desc`)!;
        AlertDesc.appendChild(placeholderNode);
    }

    private _setClosable(node: Element, closable: boolean, closeText: string): void {
        if (!closable) return;

        const AlertClose = `
        <a class="${PREFIX.alert}-close">
          ${!closeText ? ` <i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>` : closeText}
        </a>`;

        node.insertAdjacentHTML('beforeend', AlertClose);
    }

    private _handleClose(node: Element): void {
        const AlertIcon = node.querySelector(`.${PREFIX.alert}-close`);
        if (!AlertIcon) return;
        bind(AlertIcon, 'click', () => destroyElem(node, { fadeOut: true, destroy: true }));
    }

    private _attrs(node: Element) {
        return {
            icon: getStrTypeAttr(node, 'icon', ''),
            type: getStrTypeAttr(node, 'type', 'info'),
            title: getStrTypeAttr(node, 'title', ''),
            closeText: getStrTypeAttr(node, 'close-text', ''),
            banner: getBooleanTypeAttr(node, 'banner'),
            closable: getBooleanTypeAttr(node, 'closable'),
            showIcon: getBooleanTypeAttr(node, 'show-icon')
        };
    }
}

export default Alert;
