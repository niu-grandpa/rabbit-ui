import { $el, createElem, setCss, setHtml } from '../../dom-utils';
import { CssTransition, usePromiseCallback } from '../../mixins';
import { destroyElem, destroyElemByKey, type, useHTMLString } from '../../utils';
import PREFIX from '../prefix';

interface MsgGlobalAPI {
    top?: number; // 消息从顶部弹出时，距离顶部的位置，单位像素
    duration?: number; // 默认自动关闭延时，单位秒
}

interface MessageOptions {
    key?: string | number; // 当前消息唯一标志
    content?: string; // 提示内容
    duration?: number; // 自动关闭的延时，单位秒，不关闭可以写 0
    onClose?: () => void; // 点击消息关闭按钮时的回调
    closable?: boolean; // 是否显示关闭按钮
    background?: boolean; // 是否显示背景色
    dangerouslyUseHTMLString?: boolean; // 是否支持传入 HTML 片段
}

interface Events {
    info(config: string | MessageOptions): Promise<void>;
    success(config: string | MessageOptions): Promise<void>;
    warning(config: string | MessageOptions): Promise<void>;
    error(config: string | MessageOptions): Promise<void>;
    loading(config: string | MessageOptions): Promise<void>;
    config(options: MsgGlobalAPI): void;
    destroy(key?: string | number): void;
}

const prefixKey = 'rab-message';

const MsgMoveEnter = `${PREFIX.message}-move-enter`;
const MsgMoveLeave = `${PREFIX.message}-move-leave`;

const iconTypes = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    loading: 'loading-solid'
};

const DEFAULT_MESSAGE: {
    top: number;
    duration: number;
} = {
    top: 24,
    duration: 3
};

let zIndex = 1010;

// 创建实例的最外层父容器
function createMessageInstanceWrapper(): HTMLElement {
    const MsgWrapper = createElem('div');

    MsgWrapper.className = `${PREFIX.message}`;
    setCss(MsgWrapper, 'zIndex', `${zIndex}`);

    setTimeout(() => {
        setCss(MsgWrapper, 'top', `${DEFAULT_MESSAGE.top}px`);
    }, 0);

    document.body.appendChild(MsgWrapper);

    return MsgWrapper;
}

class $Message implements Events {
    readonly VERSION: string;
    readonly INSTANCE: Array<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        // 存储已经创建的实例，在 destroy方法里需要用到
        this.INSTANCE = [];
        createMessageInstanceWrapper();
    }

    public info(config: string | MessageOptions): Promise<void> {
        this._createInstance('info', config);
        // message 结束时提供 then 接口在关闭后运行 callback
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    }

    public success(config: string | MessageOptions): Promise<void> {
        this._createInstance('success', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    }

    public warning(config: string | MessageOptions): Promise<void> {
        this._createInstance('warning', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    }

    public error(config: string | MessageOptions): Promise<void> {
        this._createInstance('error', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    }

    public loading(config: string | MessageOptions): Promise<void> {
        this._createInstance('loading', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    }

    public config(options: MsgGlobalAPI): void {
        if (options.top && type.isNum(options.top)) {
            DEFAULT_MESSAGE.top = options.top;
        }
        if ((options.duration && type.isNum(options.duration)) || options.duration === 0) {
            DEFAULT_MESSAGE.duration = options.duration;
        }
    }

    public destroy(key?: string | number): void {
        // 通过设置的 key 消除
        if (key && (type.isStr(key) || type.isNum(key))) {
            destroyElemByKey({
                key,
                duration: 0.1,
                prefixKey,
                clsLeave: MsgMoveLeave
            });
        } else {
            // 销毁所有实例
            this.INSTANCE.forEach((instance) => {
                destroyElem(instance, {
                    duration: 0.1,
                    clsLeave: MsgMoveLeave
                });
            });
            // 清空存放的所有实例
            this.INSTANCE.length = 0;
        }
    }

    private _autoSetZindex(): void {
        // 每次创建实例自动增加最外层父容器的层级
        zIndex++;
        setCss($el(`.${PREFIX.message}`), 'zIndex', `${zIndex}`);
    }

    private _createInstance(_type: string, config: string | MessageOptions): HTMLElement {
        this._autoSetZindex();

        const Message = createElem('div');
        const MsgContentWrap = createElem('div');
        const MsgContentBox = createElem('div');
        const MsgInfoBox = createElem('div');
        const MsgIcon = createElem('i');
        const MsgText = createElem('span');

        this._setCls(_type, [Message, MsgContentWrap, MsgContentBox, MsgInfoBox, MsgIcon]);
        this._setContent(MsgText, config);
        this._setIcon(_type, MsgIcon);

        // 参数 config 为字符串
        if (typeof config === 'string') {
            this._autoClose(Message, DEFAULT_MESSAGE.duration);
        }

        // 参数 config 为对象
        if (typeof config === 'object') {
            const { key } = config;

            let { closable, duration, onClose, background } = config;

            if (type.isUndef(closable)) closable = false;
            if (type.isUndef(onClose)) onClose = () => void 0;
            if (type.isUndef(background)) background = false;
            // 为每个实例自己的 duration 参数设置默认值，如果有传入值则使用自定义的值
            if (type.isUndef(duration)) duration = DEFAULT_MESSAGE.duration;
            // 当全局的 duration 不为 3 时说明进行了全局配置进行改变
            if (DEFAULT_MESSAGE.duration !== 3) duration = DEFAULT_MESSAGE.duration;

            this._setClosable(closable, Message, MsgContentWrap, onClose);
            this._setBackground(Message, MsgContentWrap, background);
            this._autoClose(Message, duration);
            this._setKey(Message, key);
        }

        MsgContentWrap.appendChild(MsgContentBox);
        MsgContentBox.append(MsgInfoBox);
        MsgInfoBox.append(MsgIcon, MsgText);
        Message.appendChild(MsgContentWrap);
        $el(`.${PREFIX.message}`)?.appendChild(Message);

        // 存放每次创建的实例
        this.INSTANCE.push(Message);

        CssTransition(Message, {
            inOrOut: 'in',
            enterCls: MsgMoveEnter,
            rmCls: true,
            timeout: 250
        });

        return Message;
    }

    private _setCls(type: string, elems: Array<Element>): void {
        const nodesCls = [
            `${PREFIX.messageChild}`,
            `${PREFIX.messageChild}-content ${PREFIX.messageChild}-content-${type}`,
            `${PREFIX.messageChild}-content-text`,
            `${PREFIX.message}-${type}`,
            `${PREFIX.icon}`
        ];
        elems.forEach((elem, i) => {
            elem.className = nodesCls[i];
        });
    }

    private _setIcon(type: string, icon: HTMLElement): void {
        if (type === 'loading') {
            icon.classList.add('rab-load-loop');
        }
        // @ts-ignore
        icon.classList.add(`${PREFIX.icon}-${iconTypes[type]}`);
    }

    private _setContent(node: HTMLElement, config: string | MessageOptions): void {
        if (typeof config === 'string') {
            useHTMLString(node, config, false);
        } else if (typeof config === 'object' && config.content) {
            useHTMLString(node, config.content, config.dangerouslyUseHTMLString);
        }
    }

    private _setClosable(
        closable: any,
        parent: HTMLElement,
        children: HTMLElement,
        onClose: any
    ): void {
        if (!closable) return;

        parent.classList.add(`${PREFIX.messageChild}-closable`);

        const MsgCloseBtn = createElem('a');

        MsgCloseBtn.className = `${PREFIX.messageChild}-close`;
        setHtml(MsgCloseBtn, `<i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>`);

        this._handleClose(parent, MsgCloseBtn, onClose);

        children.appendChild(MsgCloseBtn);
    }

    private _setKey(node: HTMLElement, key: any): void {
        if (!key) return;
        node.setAttribute(`${prefixKey}-key`, key);
    }

    private _autoClose(node: HTMLElement, duration: any): void {
        destroyElem(node, {
            duration,
            clsLeave: MsgMoveLeave
        });
    }

    private _handleClose(parent: HTMLElement, closeBtn: HTMLElement, onClose: any): void {
        closeBtn.addEventListener('click', () => {
            // 手动关闭后的回调
            type.isFn(onClose);
            destroyElem(parent, {
                duration: 0.1,
                clsEnter: MsgMoveEnter,
                clsLeave: MsgMoveLeave
            });
        });
    }

    private _setBackground(node: HTMLElement, children: HTMLElement, background: any): void {
        if (!background) return;

        node.classList.add(`${PREFIX.messageChild}-with-background`);
        children.classList.add(`${PREFIX.messageChild}-content-background`);
    }
}

export default $Message;
