/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { CssTransition, moreThanOneNode, Scrollable } from '../../mixins';
import { type, validComps } from '../../utils';
import Button from '../button';
import PREFIX from '../prefix';

interface ModalEvents {
    onOk?: () => void;
    onCancel?: () => void;
}

interface Config {
    config(
        el: string
    ): {
        title: string;
        visible: boolean;
        events({ onOk, onCancel }: ModalEvents): void;
    };
}

const RABBIT_BTN = new Button();

class Modal implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.1';
        this.COMPONENTS = $el('r-modal', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        title: string;
        visible: boolean;
        events({ onOk, onCancel }: ModalEvents): void;
    } {
        const target = $el(el);

        validComps(target, 'modal');

        const { _attrs, _getModalNode, _handleVisable } = Modal.prototype;
        const { loading } = _attrs(target);
        const M_Child = _getModalNode(target);

        return {
            get title() {
                return setHtml(M_Child.modalTitle);
            },
            set title(newVal: string) {
                if (type.isStr(newVal)) setHtml(M_Child.modalTitle, newVal);
            },
            get visible() {
                return false;
            },
            set visible(newVal: boolean) {
                if (type.isBol(newVal)) {
                    // 当设置modal为隐藏状态并且确定按钮是加载中的状态则初始化它
                    if (!newVal) {
                        if (loading) RABBIT_BTN.config(M_Child.modalOkBtn).loading = newVal;
                    }

                    _handleVisable(newVal, target, [
                        M_Child.modalMask,
                        M_Child.modalWrap,
                        M_Child.modal
                    ]);
                }
            },
            events({ onOk, onCancel }: ModalEvents) {
                const { closable, maskClosable } = _attrs(target);

                const okEv = () => {
                    // 是否设置按钮为加载中状态
                    if (loading) RABBIT_BTN.config(M_Child.modalOkBtn).loading = loading;

                    onOk && type.isFn(onOk);
                };

                const cancelEv = () => {
                    // 如果按钮为加载中状态则初始化其状态
                    if (loading) RABBIT_BTN.config(M_Child.modalOkBtn).loading = !loading;

                    // 防止关闭modal后按键esc依然可以触发事件
                    window.onkeydown = (e: any) => (e.key === 'Escape' ? false : '');

                    onCancel && type.isFn(onCancel);
                };

                // 由于内部的_handleClose方法使用addEventListener为触发关闭模态框的元素绑定点击事件，
                // 从而与这里绑定的事件造成冲突，一个回调事件同时多次触发的问题
                // 因此使用on事件绑定，防止触发回调事件的次数随着每次点击而不断的重复叠加
                if (maskClosable === 'true') {
                    // @ts-ignore
                    M_Child.modalWrap.onclick = () => cancelEv();
                    // @ts-ignore
                    M_Child.modal.onclick = (e: any) => e.stopPropagation();
                }

                if (closable === 'true') {
                    // @ts-ignore
                    M_Child.modalClose.onclick = () => cancelEv();

                    window.onkeydown = (e: any) => (e.key === 'Escape' ? cancelEv() : '');
                }
                // @ts-ignore
                M_Child.modalOkBtn.onclick = () => okEv();
                // @ts-ignore
                M_Child.modalCancelBtn.onclick = () => cancelEv();
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            this._createTemplate(node);

            setCss(node, 'display', 'block');

            removeAttrs(node, [
                'width',
                'title',
                'ok-text',
                'class-name',
                'cancel-text',
                'mask',
                'visible',
                'scrollable',
                'fullscreen',
                'lock-scroll',
                'footer-hide'
            ]);
        });
    }

    private _createTemplate(node: Element): void {
        // v1.1 增加占位节点的组成数量判断
        if (moreThanOneNode(node)) return;

        // 获取最初 modal容器下的占位内容
        const placeholderNode = node.firstElementChild;

        const { width, title, zIndex, okText, cancelText, className } = this._attrs(node);

        const template = `
          <div class="${PREFIX.modal}-mask" style="z-index:${zIndex}"></div>
          <div class="${PREFIX.modal}-wrap ${className}" style="z-index:${zIndex}">
              <div class="${PREFIX.modal}" style="width: ${width}">
                  <div class="${PREFIX.modal}-content">
                      <a class="${PREFIX.modal}-close">
                        <i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>
                      </a>
                      <div class="${PREFIX.modal}-header">
                          <div class="${PREFIX.modal}-header-inner">${title}</div>
                      </div>
                      <div class="${PREFIX.modal}-body"></div>
                      <div class="${PREFIX.modal}-footer">
                          <button type="button" class="rab-btn rab-btn-text" id="modalBtn1">${cancelText}</button>
                          <button type="button" class="rab-btn rab-btn-primary" id="modalBtn2">${okText}</button>
                      </div>
                  </div>
              </div>
          </div>
      `;

        setHtml(node, template);

        this._initVisable(node);
        this._setHeader(node);
        // @ts-ignore
        this._setContent(node, placeholderNode);
        this._setMask(node);
        this._setFullScreen(node);
        this._setClosable(node);
        this._setFooterHide(node);
        this._handleClose(node);
    }

    private _initVisable(node: Element): void {
        const { visible, scrollable } = this._attrs(node);

        const { modalMask, modalWrap, modal } = this._getModalNode(node);

        let { lockScroll } = this._attrs(node);
        !node.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;

        if (visible) {
            setCss(modalMask, 'display', '');
            modalWrap.classList.remove(`${PREFIX.modal}-hidden`);
            setCss(modal, 'display', '');
            Scrollable({ scroll: scrollable, lock: lockScroll });
        } else {
            setCss(modalMask, 'display', 'none');
            modalWrap.classList.add(`${PREFIX.modal}-hidden`);
            setCss(modal, 'display', 'none');
        }

        // @ts-ignore
        // 设置初始显示状态
        node.dataset.modalVisable = visible;
    }

    private _setHeader(node: Element): void {
        const { title } = this._attrs(node);

        if (!title) {
            const modalHeader = node.querySelector(`.${PREFIX.modal}-header`);
            modalHeader?.remove();
        }
    }

    private _setContent(node: Element, content: Element): void {
        const modalBody = node.querySelector(`.${PREFIX.modal}-body`);
        if (content) modalBody?.appendChild(content);
    }

    private _setMask(node: Element): void {
        const { _attrs, _getModalNode } = this;
        const { mask } = _attrs(node);

        if (mask === 'false') {
            const { modalMask, modalWrap, modal } = _getModalNode(node);

            modalMask.remove();
            modalWrap.classList.add(`${PREFIX.modal}-no-mask`);
            modal.classList.add(`${PREFIX.modal}-content-no-mask`);
        }
    }

    private _setFullScreen(node: Element): void {
        const { fullscreen } = this._attrs(node);

        if (fullscreen) {
            const { modal } = this._getModalNode(node);
            modal.classList.add(`${PREFIX.modal}-fullscreen`);
        }
    }

    private _setClosable(node: Element): void {
        const { closable } = this._attrs(node);

        if (closable === 'false') {
            const { modalClose } = this._getModalNode(node);
            modalClose.remove();
        }
    }

    private _setFooterHide(node: Element): void {
        const { footerHide } = this._attrs(node);

        if (footerHide) {
            const modalFooter = node.querySelector(`.${PREFIX.modal}-footer`);
            modalFooter?.remove();
        }
    }

    private _handleVisable(visible: boolean, target: Element, children: Element[]): void {
        const { _show, _hide } = Modal.prototype;
        visible ? _show(target, children) : _hide(target, children);
    }

    private _handleClose(parent: Element): void {
        const { _attrs, _hide, _getModalNode } = this;

        const { closable, maskClosable, loading } = _attrs(parent);

        const {
            modalMask,
            modalWrap,
            modal,
            modalClose,
            modalOkBtn,
            modalCancelBtn
        } = _getModalNode(parent);

        const hidden = () => _hide(parent, [modalMask, modalWrap, modal]);

        // 右上角关闭按钮
        // ESC 键关闭
        if (closable === 'true') {
            bind(modalClose, 'click', () => hidden());
            bind(window, 'keydown', (e: any) => (e.key === 'Escape' ? hidden() : ''));
        }

        // 遮盖层关闭
        if (maskClosable === 'true') {
            bind(modalWrap, 'click', () => hidden());
            bind(modal, 'click', (e: any) => e.stopPropagation());
        }

        // 确定和取消按钮关闭
        //非加载中状态可以点击关闭模态框
        if (!loading) bind(modalOkBtn, 'click', () => hidden());

        bind(modalCancelBtn, 'click', () => hidden());
    }

    private _show(parent: Element, showElm: Element[]): void {
        const { _attrs } = Modal.prototype;
        const { scrollable } = _attrs(parent);

        let { lockScroll } = _attrs(parent);
        !parent.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;

        // @ts-ignore
        // 设置当前为显示状态
        parent.dataset.modalVisable = 'true';

        // showElm[0] 表示遮盖层
        // showElm[1] 表示模态框的父容器wrap
        // showElm[2] 表示模态框主体

        showElm[1].classList.contains(`${PREFIX.modal}-hidden`) &&
            showElm[1].classList.remove(`${PREFIX.modal}-hidden`);

        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            timeout: 250,
            rmCls: true
        });

        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: 'zoom-big-enter',
            timeout: 250,
            rmCls: true
        });

        Scrollable({ scroll: scrollable, lock: lockScroll });
    }

    private _hide(parent: Element, hiddenElm: Element[]): void {
        // @ts-ignore
        // 设置当前为隐藏状态
        parent.dataset.modalVisable = 'false';

        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示模态框的父容器wrap
        // hiddenElm[2] 表示模态框主体

        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });

        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: 'zoom-big-leave',
            rmCls: true,
            timeout: 250
        });

        setTimeout(() => {
            hiddenElm[1].classList.add(`${PREFIX.modal}-hidden`);
            setCss(hiddenElm[2], 'display', 'none');
            Scrollable({ scroll: true, lock: true, node: parent, tagName: 'modal' });
        }, 240);
    }

    private _getModalNode(node: Element) {
        const modalMask = node.querySelector(`.${PREFIX.modal}-mask`)!;
        const modalWrap = node.querySelector(`.${PREFIX.modal}-wrap`)!;
        const modal = modalWrap.querySelector(`.${PREFIX.modal}`)!;
        const modalClose = modalWrap.querySelector(`.${PREFIX.modal}-close`)!;
        const modalTitle = modal.querySelector(`.${PREFIX.modal}-header-inner`)!;
        const modalOkBtn = modal.querySelector('#modalBtn2')!;
        const modalCancelBtn = modal.querySelector('#modalBtn1')!;
        return {
            modalMask,
            modalWrap,
            modal,
            modalClose,
            modalTitle,
            modalOkBtn,
            modalCancelBtn
        };
    }

    private _attrs(node: Element) {
        return {
            mask: getStrTypeAttr(node, 'mask', 'true'),
            width: getStrTypeAttr(node, 'width', '520px'),
            title: getStrTypeAttr(node, 'title', ''),
            okText: getStrTypeAttr(node, 'ok-text', '确定'),
            closable: getStrTypeAttr(node, 'closable', 'true'),
            className: getStrTypeAttr(node, 'class-name', ''),
            cancelText: getStrTypeAttr(node, 'cancel-text', '取消'),
            maskClosable: getStrTypeAttr(node, 'mask-closable', 'true'),
            zIndex: getNumTypeAttr(node, 'z-index', 1000),
            visible: getBooleanTypeAttr(node, 'visible'),
            loading: getBooleanTypeAttr(node, 'loading'),
            scrollable: getBooleanTypeAttr(node, 'scrollable'),
            lockScroll: getBooleanTypeAttr(node, 'lock-scroll'),
            fullscreen: getBooleanTypeAttr(node, 'fullscreen'),
            footerHide: getBooleanTypeAttr(node, 'footer-hide')
        };
    }
}

export default Modal;
