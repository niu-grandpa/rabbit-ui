import { CssTransition, warn } from '../../mixins';
import { type, destroyElem, destroyElemByKey, useHTMLString } from '../../utils';
import { usePromiseCallback } from '../../mixins';
import PREFIX from '../prefix';
import { $el, createElem, setCss, setHtml } from '../../dom-utils';

interface NoticeGlobalAPI {
    top?: number; // 通知组件距离顶端的距离，单位像素
    duration?: number; // 默认自动关闭的延时，单位秒
}

interface NoticeOptions {
    key?: string | number; // 当前通知的唯一标识
    icon?: string; // 自定义图标
    title?: string; // 通知提醒的标题
    desc?: string; // 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式
    style?: string; // 自定义内联样式
    onClose?: () => void; // 点击通知关闭按钮时的回调
    onClick?: () => void; // 点击通知时触发的回调函数
    duration?: number; // 自动关闭的延时，单位秒，不关闭可以写 0
    closable?: boolean; // 是否显示右上角关闭按钮，默认为 true
    className?: string; // 自定义 CSS class
    dangerouslyUseHTMLString?: boolean;
}

interface Events {
    open(config: NoticeOptions): Promise<void>;
    info(config: NoticeOptions): Promise<void>;
    success(config: NoticeOptions): Promise<void>;
    warning(config: NoticeOptions): Promise<void>;
    error(config: NoticeOptions): Promise<void>;
    close(key: string): void;
    destroy(): void;
}

const NotPrefixKey = 'rab-notice';

const NotMoveEnter = `${PREFIX.notice}-move-enter`;
const NotMoveLeave = `${PREFIX.notice}-move-leave`;

const iconTypes = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    loading: 'loading-solid'
};

const DEFAULT_NOTICE: {
    top: number;
    duration: number;
} = {
    top: 24,
    duration: 4.5
};

let zIndex = 1180;

// 创建实例的最外层父容器
function createNoticeInsanceWrapper(): HTMLElement {
    const NoticeWrapper = createElem('div');

    NoticeWrapper.className = `${PREFIX.notice}`;

    setCss(NoticeWrapper, 'zIndex', `${zIndex}`);
    setCss(NoticeWrapper, 'right', '0');

    setTimeout(() => setCss(NoticeWrapper, 'top', `${DEFAULT_NOTICE.top}px`), 0);

    document.body.appendChild(NoticeWrapper);

    return NoticeWrapper;
}

class $Notice implements Events {
    readonly VERSION: string;
    readonly instances: Array<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        // 存储已经创建的实例，在 destroy方法里需要用到
        this.instances = [];
        createNoticeInsanceWrapper();
    }

    public open(config: NoticeOptions): Promise<void> {
        this._createInstance('normal', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    }

    public info(config: NoticeOptions): Promise<void> {
        this._createInstance('info', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    }

    public success(config: NoticeOptions): Promise<void> {
        this._createInstance('success', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    }

    public warning(config: NoticeOptions): Promise<void> {
        this._createInstance('warning', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    }

    public error(config: NoticeOptions): Promise<void> {
        this._createInstance('error', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    }

    public config(options: NoticeGlobalAPI): void {
        if (options.top) {
            DEFAULT_NOTICE.top = options.top;
        }
        if (options.duration || options.duration === 0) {
            DEFAULT_NOTICE.duration = options.duration;
        }
    }

    public close(key: string): void {
        destroyElemByKey({
            key,
            duration: 0.1,
            clsLeave: NotMoveLeave,
            prefixKey: NotPrefixKey
        });
    }

    public destroy(): void {
        this.instances.forEach((instance) => {
            destroyElem(instance, {
                clsLeave: NotMoveLeave,
                duration: 0.1
            });
        });
        // 清空存放的所有实例
        this.instances.length = 0;
    }

    private _autoSetZindex(): void {
        zIndex++;
        setCss($el(`.${PREFIX.notice}`), 'zIndex', `${zIndex}`);
    }

    private _createInstance(type: string, config: NoticeOptions): HTMLElement {
        this._autoSetZindex();

        const Notice = createElem('div');
        const NoticeContent = createElem('div');
        const NoticeCustomContent = createElem('div');
        const NoticeTitle = createElem('div');
        const NoticeDesc = createElem('div');

        this._setCls(
            type,
            [Notice, NoticeContent, NoticeCustomContent, NoticeTitle, NoticeDesc],
            config.className
        );
        this._setKey(Notice, config.key);
        this._setTitle(NoticeTitle, config.title, config.dangerouslyUseHTMLString);
        this._setDesc(
            Notice,
            NoticeCustomContent,
            NoticeDesc,
            config.desc,
            config.dangerouslyUseHTMLString
        );
        this._setIcon(type, NoticeCustomContent, NoticeDesc, config.icon);
        this._setClosable(Notice, config.closable, config.onClose);
        this._customStyle(Notice, config.style);

        NoticeCustomContent.append(NoticeTitle, NoticeDesc);
        NoticeContent.appendChild(NoticeCustomContent);
        Notice.appendChild(NoticeContent);
        document.querySelector(`.${PREFIX.notice}`)?.appendChild(Notice);

        CssTransition(Notice, {
            inOrOut: 'in',
            enterCls: NotMoveEnter
        });

        this.instances.push(Notice);

        this._handleNoticeClick(Notice, config.onClick);
        this._autoClose(Notice, config.duration);

        return Notice;
    }

    private _setCls(type: string, nodes: Array<HTMLElement>, customCls?: string): void {
        const nodesCls = [
            `${PREFIX.noticeChild} ${customCls ? customCls : ''}`,
            `${PREFIX.noticeChild}-content`,
            `${PREFIX.noticeChild}-custom-content ${PREFIX.notice}-with-${type}`,
            `${PREFIX.notice}-title`,
            `${PREFIX.notice}-desc`
        ];

        let i = 0;

        const { length } = nodes;

        for (; i < length; i++) {
            const node = nodes[i];
            node.className = nodesCls[i];
        }
    }

    private _setKey(node: HTMLElement, key: any): void {
        if (!key) return;
        node.setAttribute(`${NotPrefixKey}-key`, key);
    }

    private _setTitle(node: HTMLElement, title?: string, dangerouslyUseHTMLString?: boolean): void {
        // 必须设置一个通知提醒标题
        if (!title) {
            warn('You must set a notification to remind the title');
            return;
        }

        // 是否支持传入 HTML 片段
        useHTMLString(node, title, dangerouslyUseHTMLString);
    }

    private _setDesc(
        parent: HTMLElement,
        children_custm: HTMLElement,
        child_desc: HTMLElement,
        desc?: string,
        dangerouslyUseHTMLString?: boolean
    ): void {
        if (!desc) return;

        parent.classList.add(`${PREFIX.noticeChild}-with-desc`);

        children_custm.classList.add(`${PREFIX.notice}-with-desc`);

        // 是否支持传入 HTML 片段
        useHTMLString(child_desc, desc, dangerouslyUseHTMLString);
    }

    private _setIcon(
        type: string,
        child_custom: HTMLElement,
        child_desc: HTMLElement,
        customIcon?: string
    ): void {
        // 不带状态图标的类型
        if (type === 'noraml') return;
        if (type !== 'normal' || customIcon) {
            child_custom.classList.add(`${PREFIX.notice}-with-icon`);
        }

        let isOutline = '';

        // 带有状态图标并且是否带有提示内容，如果有则将图标设为 outline 外观
        if (child_desc.innerHTML) isOutline = '-outline';

        const NoticeIcon = createElem('span');
        NoticeIcon.className = `${PREFIX.notice}-icon ${PREFIX.notice}-icon-${type}`;

        // 是否自定义状态图标
        if (customIcon) {
            setHtml(NoticeIcon, customIcon);
        } else {
            // @ts-ignore
            const defaultIcon = `<i class="${PREFIX.icon} ${PREFIX.icon}-${iconTypes[type]}${isOutline}"></i>`;
            setHtml(NoticeIcon, defaultIcon);
        }

        child_custom.prepend(NoticeIcon);
    }

    private _setClosable(parent: HTMLElement, closable?: boolean, onClose?: () => void): void {
        // 默认显示右上角关闭按钮
        type.isUndef(closable) ? (closable = true) : closable;

        if (!closable) return;

        parent.classList.add(`${PREFIX.noticeChild}-closable`);

        const NoticeClose = createElem('a');
        const closeIcon = `<i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>`;

        NoticeClose.className = `${PREFIX.noticeChild}-close`;

        setHtml(NoticeClose, closeIcon);

        this._handleClose(parent, NoticeClose, onClose);

        parent.appendChild(NoticeClose);
    }

    // 自定义内联样式
    private _customStyle(node: HTMLElement, style?: string): void {
        if (!style) return;

        setCss(node, 'cssText', style);
    }

    // 点击通知时触发的回调函数
    private _handleNoticeClick(parent: HTMLElement, onClick?: () => void): void {
        parent.onclick = (e) => {
            e.stopPropagation();

            if (onClick) type.isFn(onClick);
        };
    }

    private _handleClose(parent: HTMLElement, closeBtn: HTMLElement, onClose?: () => void): void {
        closeBtn.onclick = (e) => {
            e.stopPropagation();

            if (onClose) type.isFn(onClose);

            destroyElem(parent, {
                clsLeave: NotMoveLeave,
                duration: 0.1
            });
        };
    }

    private _autoClose(instance: HTMLElement, duration?: number): void {
        // 为每个实例自己的 duration参数设置默认值，如果有传入值则使用自定义的值
        type.isUndef(duration) ? (duration = DEFAULT_NOTICE.duration) : duration;

        destroyElem(instance, {
            duration,
            clsLeave: NotMoveLeave
        });
    }
}

export default $Notice;
