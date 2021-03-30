import { $el, createElem, removeAttrs, setHtml } from '../../dom-utils';
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
        this.VERSION = '1.0.2';
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
                return false;
            },
            set loading(newVal) {
                if (!type.isBol(newVal)) return;

                const loadingIcon = target.querySelector(`.${PREFIX.icon}-loading-solid`);

                // v1.0.1 修复加载中图标重复追加
                if (newVal) {
                    if (!loadingIcon) {
                        target.classList.add(`${PREFIX.button}-loading`);
                        target.prepend(Button.prototype._loadIcon());
                    }
                } else {
                    target.classList.remove(`${PREFIX.button}-loading`);
                    loadingIcon ? loadingIcon.remove() : '';
                }
            }
        };
    }

    private _getAllBtns(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            this._setLoading(node);
            this._setIcon(node);
            removeAttrs(node, ['icon', 'loading']);
        });
    }

    private _setLoading(node: Element): void {
        if (this._isLoading(node)) {
            if (node.innerHTML === '') node.classList.add(`${PREFIX.button}-icon-only`);

            node.classList.add(`${PREFIX.button}-loading`);
            node.prepend(this._loadIcon());
        }
    }

    private _setIcon(node: Element): void {
        if (!this._getIcon(node)) return;

        if (node.innerHTML === '') {
            const btnIcon = `<i class="${PREFIX.icon} ${PREFIX.icon}-${this._getIcon(node)}"></i>`;

            node.classList.add(`${PREFIX.button}-icon-only`);

            setHtml(node, btnIcon);
        } else {
            const Icon = createElem('i');
            Icon.className = `${PREFIX.icon} ${PREFIX.icon}-${this._getIcon(node)}`;
            node.prepend(Icon);
        }
    }

    private _isLoading(node: Element): boolean {
        return node.getAttribute('loading') === 'true';
    }

    private _loadIcon(): HTMLElement {
        const LoadIcon = createElem('i');
        LoadIcon.className = `rab-load-loop ${PREFIX.icon} ${PREFIX.icon}-loading-solid`;
        // v1.0.2 取消样式高度，否则加载中图标会和文字不在同一水平线上
        // setCss(LoadIcon, 'height', '25px');
        return LoadIcon;
    }

    private _getIcon(node: Element): string {
        return node.getAttribute('icon') || '';
    }
}

export default Button;
