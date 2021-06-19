/* eslint-disable @typescript-eslint/no-non-null-assertion */
import PREFIX from '../prefix';
import { $el, bind, createElem, setCss, setHtml } from '../../dom-utils';
import { destroyElem, type, useHTMLString } from '../../utils';
import { CssTransition } from '../../mixins';

export type KeyType = string | number;
export type MessageType = 'info' | 'success' | 'warning' | 'error' | 'loading';
export type MessageConfig = string | Options;
export const PREFIX_KEY = 'rab-message-instance';
export const EnterClass = `${PREFIX.message}-move-enter`;
export const LeaveClass = `${PREFIX.message}-move-leave`;

interface Options {
    key?: string | number;
    content?: string;
    duration?: number;
    onClose?: () => void;
    closable?: boolean;
    background?: boolean;
    dangerouslyUseHTMLString?: boolean;
}

const ICONTYPES = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    loading: 'loading-solid'
};
let zIndex = 1010;
let name = 0;

export class CreateInstance {
    protected INSTANCES: HTMLElement[];
    constructor() {
        this.INSTANCES = [];
    }
    public _init(top: number): void {
        const Wrapper = createElem('div');
        setCss(Wrapper, 'zIndex', `${zIndex}`);
        Wrapper.setAttribute('class', `${PREFIX.message}`);
        document.body.appendChild(Wrapper);
        setTimeout(() => setCss(Wrapper, 'top', `${top}px`), 0);
    }
    protected _create(type: MessageType, config: MessageConfig, duration: number): void {
        const Message = this._setMainTemplate(type);
        const MessageContent = Message.querySelector(`.${PREFIX.messageChild}-content`)!;
        this._autoAddZIndex();
        this._setIcon(type, Message);
        this._setContent(Message, config);
        if (typeof config === 'object') {
            const { key, closable, onClose, background } = config;
            this._setKey(Message, key);
            this._setClosable(Message, MessageContent, closable, onClose);
            this._setBackground(Message, MessageContent, background);
        }
        this.INSTANCES.push(Message);
        $el(`.${PREFIX.message}`).appendChild(Message);
        this._autoClose(Message, config, duration);
    }
    private _setMainTemplate(type: MessageType): HTMLElement {
        const MessageNotice = createElem('div');
        const template = `
        <div class="${PREFIX.messageChild}-content ${PREFIX.messageChild}-content-${type}">
            <div class="${PREFIX.messageChild}-content-text">
                <div class="${PREFIX.message}-${type}">
                    <i class="${PREFIX.icon}"></i>
                    <span id="${PREFIX.messageChild}-text"></span>
                </div>
            </div>
        </div>
      `;
        MessageNotice.dataset['thisName'] = `${name++}`;
        MessageNotice.className = `${PREFIX.message}-notice`;
        setHtml(MessageNotice, template);
        CssTransition(MessageNotice, {
            inOrOut: 'in',
            enterCls: EnterClass,
            rmCls: true,
            timeout: 250
        });
        return MessageNotice;
    }
    private _setIcon(type: MessageType, elem: HTMLElement): void {
        const MessageIcon = elem.querySelector(`.${PREFIX.icon}`)!;
        if (type === 'loading') {
            MessageIcon.classList.add('rab-load-loop');
        }
        MessageIcon.classList.add(`${PREFIX.icon}-${ICONTYPES[type]}`);
    }
    private _setContent(elem: HTMLElement, content: MessageConfig): void {
        const MessageText = elem.querySelector(`#${PREFIX.messageChild}-text`)!;
        if (typeof content === 'string') {
            useHTMLString(MessageText, content, false);
        } else if (typeof content === 'object' && content.content) {
            useHTMLString(MessageText, content.content, content.dangerouslyUseHTMLString);
        }
    }
    private _setKey(elem: HTMLElement, key?: KeyType): void {
        if (!key || (key && !type.isStr(key) && !type.isNum(key))) return;
        elem.setAttribute(`${PREFIX_KEY}-key`, `${key}`);
    }
    private _setClosable(
        elem: HTMLElement,
        child: Element,
        closable?: boolean,
        onClose?: () => void
    ): void {
        if (!closable || (closable && !type.isBol(closable))) return;
        const template = `
        <a class="${PREFIX.messageChild}-close">
          <i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>
        </a>
        `;
        elem.classList.add(`${PREFIX.messageChild}-closable`);
        child.insertAdjacentHTML('beforeend', template);
        this._handleClose(elem, onClose);
    }
    private _handleClose(elem: HTMLElement, onClose?: () => void): void {
        const MessageCloseBtn = elem.querySelector(`.${PREFIX.messageChild}-close`)!;
        bind(MessageCloseBtn, 'click', () => {
            this._destroy(elem);
            onClose && type.isFn(onClose);
        });
    }
    private _setBackground(elem: HTMLElement, child: Element, background?: boolean): void {
        if (!background || (background && !type.isBol(background))) return;
        elem.classList.add(`${PREFIX.messageChild}-with-background`);
        child.classList.add(`${PREFIX.messageChild}-content-background`);
    }
    private _autoAddZIndex(): void {
        zIndex++;
        setCss($el(`.${PREFIX.message}`), 'zIndex', `${zIndex}`);
    }
    private _autoClose(elem: HTMLElement, config: MessageConfig, duration: number): void {
        if (duration || duration === 0 || !config) {
            if (duration === 0) return;
            setTimeout(() => {
                this._destroy(elem);
            }, duration * 1000);
        } else {
            if (typeof config === 'object' && config.duration) {
                setTimeout(() => {
                    this._destroy(elem);
                }, config.duration * 1000);
            }
        }
    }
    private _destroy(elem: HTMLElement): void {
        destroyElem(elem, {
            duration: 0.1,
            clsEnter: EnterClass,
            clsLeave: LeaveClass
        });
        this.INSTANCES.splice(Number(elem.dataset['thisName']), 1);
    }
}
