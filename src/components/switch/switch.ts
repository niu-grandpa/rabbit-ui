import { $el, bind, setCss, setHtml } from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    onChange(elem: string, cb: ([status, $this]: [boolean, Element]) => void): void;
}

class Switch implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = '1.0';
        this.COMPONENTS = $el('r-switch', { all: true });
        this._create(this.COMPONENTS);
    }

    public onChange(elem: string, cb: ([status, $this]: [boolean, Element]) => void): void {
        const target = $el(elem);

        validComps(target, 'switch');

        // 将当前选中的组件作为参数返回出去
        const $this = target;

        bind(target, 'click', () => {
            const status = this._getStatus(target);
            type.isFn(cb, [status, $this]);
        });
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            this._init(node);
            this._handleChange(node, this._getStatus(node));
        });
    }

    private _init(node: Element): void {
        // 初始化按键切换索引
        node.setAttribute('tabindex', '0');
        // 初始化未选中状态的开关
        if (node.getAttribute('checked') !== 'true') {
            node.setAttribute('checked', 'false');
        }
        this._setStatusText(node, this._getStatus(node));
        this._setStatusColor(node, this._getStatus(node));
    }

    // 设置自定义的状态文本
    private _setStatusText(node: Element, status: boolean): void {
        const { openText, closeText } = this._getStatusText(node);

        if (!openText || !closeText) return;

        // 创建文本容器
        const TextBox = document.createElement('span');

        TextBox.className = `${PREFIX.switch}-inner`;

        node.appendChild(TextBox);

        status ? setHtml(TextBox, openText) : setHtml(TextBox, closeText);
    }

    // 设置自定义的状态颜色
    private _setStatusColor(node: any, status: boolean): void {
        const { trueColor, falseColor } = this._getColor(node);

        if (!trueColor || !falseColor) return;

        if (status) {
            setCss(node, 'borderColor', trueColor);
            setCss(node, 'backgroundColor', trueColor);
        } else {
            setCss(node, 'borderColor', falseColor);
            setCss(node, 'backgroundColor', falseColor);
        }
    }

    private _handleChange(node: Element, status: boolean): void {
        const ev_change = () => {
            if (this._isDisabled(node)) return false;
            if (this._isLoading(node)) return false;

            status ? (status = false) : (status = true);

            node.setAttribute('checked', `${status}`);

            const { openText, closeText } = this._getStatusText(node);

            this._changeStatusText(node, status, openText, closeText);

            this._setStatusColor(node, status);
        };

        node.addEventListener('click', ev_change);
    }

    private _changeStatusText(node: Element, status: boolean, openText: any, closeText: any): void {
        // 获取当前开关下的文本容器
        const TextBox = node.querySelector(`.${PREFIX.switch}-inner`);

        if (TextBox) {
            status ? setHtml(TextBox, openText) : setHtml(TextBox, closeText);
        }
    }

    private _getStatus(node: Element): boolean {
        // 转换为真实布尔类型
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return JSON.parse(node.getAttribute('checked')!);
    }

    private _isDisabled(node: Element): boolean {
        return (
            node.getAttribute('disabled') === 'disabled' ||
            node.getAttribute('disabled') === 'true' ||
            node.getAttribute('disabled') === ''
        );
    }

    private _isLoading(node: Element): boolean {
        return node.getAttribute('rb-loading') === 'true';
    }

    private _getStatusText(
        node: Element
    ): {
        openText: string | null;
        closeText: string | null;
    } {
        return {
            openText: node.getAttribute('rb-open'),
            closeText: node.getAttribute('rb-close')
        };
    }

    private _getColor(
        node: Element
    ): {
        trueColor: string | null;
        falseColor: string | null;
    } {
        return {
            trueColor: node.getAttribute('rb-true-color'),
            falseColor: node.getAttribute('rb-false-color')
        };
    }
}

export default Switch;
