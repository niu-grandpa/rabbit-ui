import {
    $el,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string | Element
    ): {
        loading: boolean;
    };
}

class Button implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = '1.1.1';
        this.COMPONENTS = $el(`.${PREFIX.button}`, { all: true });
        this._getAllBtns(this.COMPONENTS);
    }

    public config(
        el: string | Element
    ): {
        loading: boolean;
    } {
        const target = typeof el === 'string' ? $el(el) : el;
        validComps(target, 'button');

        return {
            get loading() {
                return this.loading;
            },
            set loading(newVal) {
                if (newVal && !type.isBol(newVal)) return;
                Button.prototype._setLoading(target, false, newVal);
            }
        };
    }

    private _getAllBtns(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { icon, loading } = this._attrs(node);
            this._setIcon(node, icon);
            this._setLoading(node, true, loading);
            removeAttrs(node, ['icon', 'loading']);
        });
    }

    private _setIcon(node: Element, icon: string): void {
        if (!icon) return;
        if (node.innerHTML === '') {
            node.classList.add(`${PREFIX.button}-icon-only`);
            const ButtonIcon = `
              <i class="${PREFIX.icon} ${PREFIX.icon}-${icon}"></i>
            `;
            setHtml(node, ButtonIcon);
        } else {
            const Icon = createElem('i');
            Icon.className = `${PREFIX.icon} ${PREFIX.icon}-${icon}`;
            node.prepend(Icon);
        }
    }

    // 2021.5.23
    // v1.1.0 修复按钮 loading 状态下加载中图标和原有图标并列显示的 bug
    private _setLoading(node: Element, firstRender: boolean, loading: boolean): void {
        const OriginalIcon = node.querySelector('.rab-icon');
        const LoadingIcon = createElem('i');
        LoadingIcon.className = `rab-load-loop ${PREFIX.icon} ${PREFIX.icon}-loading-solid`;
        if (loading) {
            if (OriginalIcon) setCss(OriginalIcon, 'display', 'none');
            if (node.innerHTML === '') node.classList.add(`${PREFIX.button}-icon-only`);
            node.classList.add(`${PREFIX.button}-loading`);
            node.prepend(LoadingIcon);
        } else {
            if (firstRender) return;
            // 2021.6.18
            // v1.1.1 修复在没有图标仅有文本的状态下，切换为loading状态并在状态结束后无法切换为原样 bug
            // setCss(node.children[1], 'display', '');
            if (node.children[1]) setCss(node.children[1], 'display', '');
            if (node.classList.contains(`${PREFIX.button}-loading`))
                node.classList.remove(`${PREFIX.button}-loading`);
            if (node.classList.contains(`${PREFIX.button}-icon-only`))
                node.classList.remove(`${PREFIX.button}-icon-only`);
            node.firstElementChild?.remove();
        }
    }

    private _attrs(node: Element) {
        return {
            icon: getStrTypeAttr(node, 'icon', ''),
            loading: getBooleanTypeAttr(node, 'loading')
        };
    }
}

export default Button;
