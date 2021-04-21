/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { $el, bind } from '../../dom-utils';
import { CssTransition, Scrollable } from '../../mixins';
import { type, useHTMLString } from '../../utils';
import Button from '../button';
import PREFIX from '../prefix';

const $MODAL_BUTTON = new Button();

const ICONTYPE = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    confirm: 'ios-help-circle',
    loading: 'loading-solid'
};

let DEFAULT_ZINDEX = 1010;

interface ModalOptions {
    width?: string | number;
    title?: string;
    content?: string;
    okText?: string;
    cancelText?: string;
    loading?: boolean;
    keyboard?: boolean;
    scrollable?: boolean;
    lockScroll?: boolean;
    dangerouslyUseHTMLString?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}

class $Modal {
    readonly VERSION: string;

    constructor() {
        this.VERSION = 'v1.0';
    }

    public info(config: ModalOptions): void {
        this._create('info', config);
    }

    public success(config: ModalOptions): void {
        this._create('success', config);
    }

    public warning(config: ModalOptions): void {
        this._create('warning', config);
    }

    public error(config: ModalOptions): void {
        this._create('error', config);
    }

    public confirm(config: ModalOptions): void {
        this._create('confirm', config);
    }

    public remove(): void {
        const { ModalParent, ModalMask, ModalWrap } = this._getNode();
        this._destroy(ModalParent, ModalMask, ModalWrap);
    }

    private _create(type: string, config: ModalOptions): void {
        DEFAULT_ZINDEX++;

        const {
            width = 416,
            title = '',
            content = '',
            okText = '确定',
            cancelText = '取消',
            loading = false,
            keyboard = false,
            scrollable = false,
            lockScroll = true,
            onOk,
            onCancel,
            dangerouslyUseHTMLString = false
        } = config;

        // @ts-ignore
        const icon = ICONTYPE[type];

        const isShowCancelBtn =
            type === 'confirm'
                ? `<button type="button" class="${PREFIX.button} ${PREFIX.button}-text">${cancelText}</button>`
                : '';

        const template = `
        <div class="${PREFIX.modal}-instance">
          <div class="${PREFIX.modal}-mask" style="z-index: ${DEFAULT_ZINDEX};"></div>
          <div class="${PREFIX.modal}-wrap" style="z-index: ${DEFAULT_ZINDEX};">
              <div class="${PREFIX.modal}" style="width: ${width}px;">
                  <div class="${PREFIX.modal}-content">
                      <div class="${PREFIX.modal}-body">
                          <div class="${PREFIX.modal}-confirm">
                              <div class="${PREFIX.modal}-confirm-head">
                                  <div class="${PREFIX.modal}-confirm-head-icon ${PREFIX.modal}-confirm-head-icon-${type}">
                                      <i class="${PREFIX.icon} ${PREFIX.icon}-${icon}"></i>
                                  </div>
                                  <div class="${PREFIX.modal}-confirm-head-title"></div>
                              </div>
                              <div class="${PREFIX.modal}-confirm-body"></div>
                              <div class="${PREFIX.modal}-confirm-footer">
                                  ${isShowCancelBtn}
                                  <button type="button" class="${PREFIX.button} ${PREFIX.button}-primary"><span>${okText}</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', template);

        const { ModalParent, ModalMask, ModalWrap, Modal } = this._getNode();

        this._setMainContent(Modal, title, content, dangerouslyUseHTMLString);
        this._setAnimation('in', ModalMask, ModalWrap);
        this._setScrollable(scrollable, lockScroll);
        this._handleBtnClick(ModalParent, ModalMask, ModalWrap, Modal, loading, onOk, onCancel);
        this._keyboardClosed(type, keyboard, ModalParent, ModalMask, ModalWrap, onCancel);
    }

    private _setMainContent(
        modal: Element,
        title: string,
        content: string,
        isUseHTML: boolean
    ): void {
        const ModalHead = modal.querySelector(`.${PREFIX.modal}-confirm-head-title`)!;
        const ModalBody = modal.querySelector(`.${PREFIX.modal}-confirm-body`)!;
        useHTMLString(ModalHead, title, isUseHTML);
        useHTMLString(ModalBody, content, isUseHTML);
    }

    private _handleBtnClick(
        parent: HTMLElement,
        mask: Element,
        wrap: Element,
        modal: Element,
        loading: boolean,
        onOk: any,
        onCancel: any
    ): void {
        const ModalOkBtn = modal.querySelector(`.${PREFIX.button}-primary`)!;
        const ModalCacnelBtn = modal.querySelector(`.${PREFIX.button}-text`);

        const remove = () => this._destroy(parent, mask, wrap);
        const okEv = () => {
            onOk && type.isFn(onOk);
            if (loading) {
                $MODAL_BUTTON.config(ModalOkBtn).loading = loading;
                return;
            }
            remove();
        };
        const cancelEv = () => {
            remove();
            onCancel && type.isFn(onCancel);
        };

        bind(ModalOkBtn, 'click', okEv);
        if (ModalCacnelBtn) bind(ModalCacnelBtn, 'click', cancelEv);
    }

    private _keyboardClosed(
        _type: string,
        keyboard: boolean,
        parent: HTMLElement,
        mask: Element,
        wrap: Element,
        onCancel: any
    ): void {
        if (!keyboard) return;

        const event = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.stopPropagation();
                // 判断页面是否有modal实例，如果有才执行事件，避免重复执行
                if (document.body.contains(parent)) {
                    // 取消的回调，只在$Modal.confirm()下有效
                    if (_type === 'confirm') onCancel && type.isFn(onCancel);
                    setTimeout(() => this._destroy(parent, mask, wrap), 0);
                }
            }
        };

        window.onkeydown = (e: KeyboardEvent) => event(e);
    }

    private _destroy(parent: HTMLElement, mask: Element, wrap: Element): void {
        this._setAnimation('out', mask, wrap);
        setTimeout(() => {
            parent.remove();
            this._setScrollable(true, false);
        }, 150);
    }

    private _setAnimation(type: 'in' | 'out', elem1: Element, elem2: Element): void {
        const maskAniCls =
            type === 'in' ? { enterCls: 'rab-fade-in' } : { leaveCls: 'rab-fade-out' };
        const modalAniCls =
            type === 'in' ? { enterCls: 'zoom-big-enter' } : { leaveCls: 'zoom-big-leave' };

        CssTransition(elem1, {
            inOrOut: type,
            ...maskAniCls,
            timeout: 250,
            rmCls: true
        });
        CssTransition(elem2, {
            inOrOut: type,
            ...modalAniCls,
            timeout: 300,
            rmCls: true
        });
    }

    private _setScrollable(scrollable: boolean, lockScroll: boolean): void {
        Scrollable({ scroll: scrollable, lock: lockScroll });
    }

    private _getNode(): {
        ModalParent: HTMLElement;
        ModalMask: Element;
        ModalWrap: Element;
        Modal: Element;
    } {
        const ModalParent = $el(`.${PREFIX.modal}-instance`) as HTMLElement;
        const ModalMask = ModalParent.querySelector(`.${PREFIX.modal}-mask`)!;
        const ModalWrap = ModalParent.querySelector(`.${PREFIX.modal}-wrap`)!;
        const Modal = ModalWrap.querySelector(`.${PREFIX.modal}`)!;
        return {
            ModalParent,
            ModalMask,
            ModalWrap,
            Modal
        };
    }
}

export default $Modal;
