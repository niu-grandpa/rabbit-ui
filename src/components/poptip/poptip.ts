/* eslint-disable @typescript-eslint/no-non-null-assertion */
import PREFIX from '../prefix';
import {
    $el,
    bind,
    createElem,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml,
    siblings
} from '../../dom-utils';
import { _newCreatePopper } from '../../mixins/tooltip';
import { CssTransition, clickOutside, _arrow, warn, _Popper, clickoutside } from '../../mixins';
import { type, validComps } from '../../utils';

interface Config {
    config(
        el: string
    ): {
        visible: boolean;
        disabled: boolean;
        title: string;
        content: string;
        events: ({ onPopperShow, onPopperHide, onOk, onCancel }: PoptipEvents) => void;
    };
}

interface PoptipEvents {
    onPopperShow: () => void;
    onPopperHide: () => void;
    onOk: () => void;
    onCancel: () => void;
}

const STATEKEY = 'visibleState';
const DEFAULTDELAY = 80;

let VISIBLETIMER: any = null,
    EVENTTIMER: any = null;

class Poptip implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v2.0';
        this.COMPONENTS = $el('r-poptip', { all: true });
        this._create(this.COMPONENTS);
        _arrow.scrollUpdate();
    }

    public config(
        el: string
    ): {
        visible: boolean;
        disabled: boolean;
        title: string;
        content: string;
        events: ({ onPopperShow, onPopperHide, onOk, onCancel }: PoptipEvents) => void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'poptip');

        const { _attrs, _setVisible, _handleTrigger } = Poptip.prototype;
        const { trigger, title, content, disabled, placement, offset, confirm } = _attrs(target);

        const PoptipRefElem = target.querySelector(`.${PREFIX.poptip}-rel`)! as HTMLElement;
        const PoptipPopper = target.querySelector(`.${PREFIX.poptip}-popper`)! as HTMLElement;
        const PoptipTitle = target.querySelector(`.${PREFIX.poptip}-title`)!;
        const PoptipContent = target.querySelector(`.${PREFIX.poptip}-body-content`)!;

        return {
            get visible() {
                return PoptipPopper.dataset[STATEKEY] === 'show';
            },
            set visible(newVal: boolean) {
                if (newVal && !type.isBol(newVal)) return;
                _setVisible(newVal, PoptipRefElem, PoptipPopper, placement, offset);
            },
            get disabled() {
                return disabled;
            },
            set disabled(newVal: boolean) {
                if (newVal && !type.isBol(newVal)) return;
                _handleTrigger(
                    trigger,
                    newVal,
                    target,
                    PoptipRefElem,
                    PoptipPopper,
                    placement,
                    offset
                );
            },
            get title() {
                return title;
            },
            set title(newVal: string) {
                if (newVal && !type.isStr(newVal)) return;
                setHtml(PoptipTitle, newVal);
            },
            get content() {
                return content;
            },
            set content(newVal: string) {
                if (newVal && !type.isStr(newVal)) return;
                setHtml(PoptipContent, newVal);
            },
            events({ onPopperShow, onPopperHide, onOk, onCancel }) {
                if (confirm) {
                    const PoptipOkBtn = PoptipPopper.querySelector(`.${PREFIX.button}-primary`);
                    const PoptipCancelBtn = PoptipPopper.querySelector(`.${PREFIX.button}-text`);

                    bind(PoptipOkBtn, 'click', () => onOk && type.isFn(onOk));
                    bind(PoptipCancelBtn, 'click', () => onCancel && type.isFn(onCancel));
                }
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const ReferenceElem = node.firstElementChild || node.innerHTML;

            const {
                trigger,
                title,
                content,
                placement,
                padding,
                offset,
                confirm,
                visible,
                width,
                wordWrap,
                disabled,
                okText,
                cancelText
            } = this._attrs(node);

            this.setMainTemplate(node, title, content, placement);

            const PoptipRel = node.querySelector(`.${PREFIX.poptip}-rel`)!;
            const PoptipPopper = node.querySelector(
                `.${PREFIX.poptip}-popper`
            )! as HTMLEmbedElement;

            this.addReferenceElem(PoptipRel, ReferenceElem);
            this.setConfirmTemplate(confirm, node, title, okText, cancelText);
            this._setPlacement(PoptipRel, PoptipPopper, placement, offset);
            this._setVisible(visible, PoptipRel, PoptipPopper, placement, offset);
            this._setPadding(node, padding);
            this._setWidthAndWordWrap(PoptipPopper, width, wordWrap);
            this._handleTrigger(
                trigger,
                disabled,
                node,
                PoptipRel,
                PoptipPopper,
                placement,
                offset
            );
            this._handleBtnClick(PoptipRel, PoptipPopper, placement, offset);

            removeAttrs(node, [
                'width',
                'title',
                'offset',
                'content',
                'confirm',
                'visible',
                'padding',
                'disabled',
                'trigger',
                'placement',
                'word-wrap',
                'ok-text',
                'cancel-text'
            ]);
        });
    }

    private setMainTemplate(
        node: Element,
        title: string,
        content: string,
        placement: string
    ): void {
        const template = `
         <div class="${PREFIX.poptip}-rel"></div>
         <div class="${PREFIX.poptip}-popper" x-placement="${placement}">
             <div class="${PREFIX.poptip}-content">
                 <div class="${PREFIX.poptip}-arrow"></div>
                 <div class="${PREFIX.poptip}-inner">
                    ${title ? `<div class="${PREFIX.poptip}-title">${title}</div>` : ''}
                     <div class="${PREFIX.poptip}-body">
                         <div class="${PREFIX.poptip}-body-content">${content}</div>
                     </div>
                 </div>
             </div>
         </div>
        `;

        setHtml(node, template);
    }

    private addReferenceElem(child: Element, ReferenceElem: string | Element): void {
        if (typeof ReferenceElem === 'string') {
            setHtml(child, ReferenceElem);
        } else if (ReferenceElem instanceof Element) {
            child.appendChild(ReferenceElem);
        }
    }

    private setConfirmTemplate(
        confirm: boolean,
        node: Element,
        title: string,
        okText: string,
        cancelText: string
    ): void {
        if (!confirm) return;

        const template = `
         <i class="${PREFIX.icon} ${PREFIX.icon}-ios-help-circle"></i>
         <div class="${PREFIX.poptip}-body-message">${title}</div>
         <div class="${PREFIX.poptip}-footer">
            <button type="button" class="${PREFIX.button} ${PREFIX.button}-text ${PREFIX.button}-sm">${cancelText}</button>
            <button type="button" class="${PREFIX.button} ${PREFIX.button}-primary ${PREFIX.button}-sm">${okText}</button>
         </div>
        `;

        const PoptipBody = node.querySelector(`.${PREFIX.poptip}-body`)!;

        setHtml(PoptipBody, template);

        node.querySelector(`.${PREFIX.poptip}-title`)!.remove();
        node.classList.add(`${PREFIX.poptip}-confirm`);
    }

    private _handleTrigger(
        type: string,
        disabled: boolean,
        node: Element,
        refElem: Element,
        popper: HTMLElement,
        placement: string,
        offset: number
    ): void {
        if (disabled) return;

        const show = (show: boolean, e?: MouseEvent) => {
            if (e) e.stopPropagation();
            this._setVisible(show, refElem, popper, placement, offset);
        };

        if (type === 'hover') {
            bind(node, 'mouseenter', (e: MouseEvent) => {
                if (VISIBLETIMER) clearTimeout(VISIBLETIMER);
                if (popper.dataset[STATEKEY] === 'show') return;
                VISIBLETIMER = setTimeout(() => show(true, e), DEFAULTDELAY);
            });
            bind(node, 'mouseleave', (e: MouseEvent) => {
                if (VISIBLETIMER) clearTimeout(VISIBLETIMER);
                if (popper.dataset[STATEKEY] === 'show')
                    setTimeout(() => show(false, e), DEFAULTDELAY);
            });
        }

        if (type === 'click') {
            const hide = () => show(false);

            const clickEv = (e: MouseEvent) => {
                const poppers = document.querySelectorAll(`.${PREFIX.poptip}-popper`);

                poppers.forEach((child) => {
                    const otherPopper = child as HTMLElement;
                    if (otherPopper.dataset[STATEKEY] === 'show')
                        this._setVisible(false, refElem, otherPopper, placement, offset);
                });

                popper.style.visibility === 'visible' ? show(false, e) : show(true, e);
            };

            clickoutside(node, hide);
            bind(refElem, 'click', (e: MouseEvent) => clickEv(e));
        }
        if (type === 'focus') {
            bind(refElem, 'mousedown', (e: MouseEvent) => show(true, e));
            bind(refElem, 'mouseup', (e: MouseEvent) => show(false, e));
        }
    }

    private _handleBtnClick(
        refElem: Element,
        popper: HTMLElement,
        placement: string,
        offset: number
    ): void {
        const PoptipOkBtn = popper.querySelector(`.${PREFIX.button}-primary`);
        const PoptipCancelBtn = popper.querySelector(`.${PREFIX.button}-text`);

        if (!PoptipOkBtn) return;

        const hidden = () => this._setVisible(false, refElem, popper, placement, offset);

        bind(PoptipOkBtn, 'click', hidden);
        bind(PoptipCancelBtn, 'click', hidden);
    }

    private _setVisible(
        visible: boolean,
        refElem: Element,
        popper: HTMLElement,
        placement: string,
        offset: number
    ): void {
        const { _setPlacement, _visibleTransition } = Poptip.prototype;

        if (visible) {
            popper.dataset[STATEKEY] = 'show';
            _visibleTransition('in', popper);
            _setPlacement(refElem, popper, placement, offset);
        } else {
            popper.dataset[STATEKEY] = 'close';
            setTimeout(() => {
                popper.dataset[STATEKEY] === 'close' && _visibleTransition('out', popper);
            }, 0);
        }
    }

    private _setPlacement(
        refElem: Element,
        popper: HTMLElement,
        placement: string,
        offset: number
    ): void {
        _Popper._newCreatePopper(refElem, popper, placement, offset);
    }

    private _visibleTransition(type: 'in' | 'out', popper: HTMLElement): void {
        const aniCls =
            type === 'in'
                ? { enterCls: 'zoom-big-fast-enter' }
                : { leaveCls: 'zoom-big-fast-leave' };

        CssTransition(popper, {
            inOrOut: type,
            ...aniCls,
            rmCls: true,
            timeout: 190
        });
    }

    private _setWidthAndWordWrap(child: Element, width: number, wordWrap: boolean): void {
        setCss(child, 'width', `${width}px`);

        if (!wordWrap) return;

        const PoptipBodyContent = child.querySelector(`.${PREFIX.poptip}-body-content`)!;
        PoptipBodyContent.classList.add(`${PREFIX.poptip}-body-content-word-wrap`);
    }

    private _setPadding(node: Element, padding: string): void {
        if (!padding) return;
        setCss(node.querySelector(`.${PREFIX.poptip}-title`)!, 'padding', padding);
        setCss(node.querySelector(`.${PREFIX.poptip}-body`)!, 'padding', padding);
    }

    private _attrs(node: Element) {
        return {
            width: getNumTypeAttr(node, 'width', -1),
            offset: getNumTypeAttr(node, 'offset', 0),
            title: getStrTypeAttr(node, 'title', ''),
            okText: getStrTypeAttr(node, 'ok-text', '确定'),
            content: getStrTypeAttr(node, 'content', ''),
            trigger: getStrTypeAttr(node, 'trigger', 'click'),
            padding: getStrTypeAttr(node, 'padding', ''),
            placement: getStrTypeAttr(node, 'placement', 'top'),
            cancelText: getStrTypeAttr(node, 'cancel-text', '取消'),
            confirm: getBooleanTypeAttr(node, 'confirm'),
            visible: getBooleanTypeAttr(node, 'visible'),
            disabled: getBooleanTypeAttr(node, 'disabled'),
            wordWrap: getBooleanTypeAttr(node, 'word-wrap')
        };
    }
}

export default Poptip;

// interface PoptipAttrs {
//     width: number;
//     offset: number;
//     title: string;
//     okText: string;
//     content: string;
//     trigger: string;
//     padding: string;
//     placement: string;
//     cancelText: string;
//     isDisabled: boolean;
//     wordWrap: boolean;
//     confirm: boolean;
// }

// interface PoptipEvents {
//     onShow?: () => void; // 提示框显示时触发
//     onHide?: () => void; // 提示框消失时触发
//     onOk?: () => void; // 点击确定的回调
//     onCancel?: () => void; // 点击取消的回调
// }

// interface Config {
//     config(
//         el: string
//     ): {
//         title: string | number; // 显示的标题
//         content: string | number; // 显示的正文内容，只在非 confirm 模式下有效
//         events: (options: PoptipEvents) => void;
//     };
// }

// const DEFAULTDELAY = 100;
// let SHOWTIMER: any, EVENTTIMER: any;

// class Poptip implements Config {
//     readonly VERSION: string;
//     private COMPONENTS: NodeListOf<Element>;
//     private children: NodeListOf<HTMLElement>;

//     constructor() {
//         this.VERSION = 'v1.0';
//         this.COMPONENTS = $el('r-poptip', { all: true });
//         this._create(this.COMPONENTS);
//         this.children = $el(`.${PREFIX.poptip}-popper`, { all: true });

//         clickOutside(this.children, 'poptipShow', 'zoom-big-fast-leave');

//         _arrow.scrollUpdate();
//     }

//     public config(
//         el: string
//     ): {
//         title: string | number;
//         content: string | number;
//         events: ({ onShow, onHide, onOk, onCancel }: PoptipEvents) => void;
//     } {
//         const target = $el(el);

//         validComps(target, 'poptip');

//         const { attrs } = Poptip.prototype;

//         const PoptipRef = target.querySelector(`.${PREFIX.poptip}-rel`);
//         const PoptipPopper = target.querySelector(`.${PREFIX.poptip}-popper`);
//         const PoptipContent = target.querySelector(`.${PREFIX.poptip}-body-content-inner`);

//         let PoptipTitle: any;
//         let OkBtn: any;
//         let CancelBtn: any;

//         // 判断要设置的提示框标题是否是确认对话框的标题
//         // 判断是否要获取确认对话框的确定和取消按钮
//         if (attrs(target).confirm) {
//             PoptipTitle = target.querySelector(`.${PREFIX.poptip}-body-message`);
//             OkBtn = target.querySelector(`.${PREFIX.button}-primary.${PREFIX.button}-sm`);
//             CancelBtn = target.querySelector(`.${PREFIX.button}-text.${PREFIX.button}-sm`);
//         } else {
//             PoptipTitle = target.querySelector(`.${PREFIX.poptip}-title-inner`);
//         }

//         return {
//             get title() {
//                 return setHtml(PoptipTitle);
//             },
//             set title(newVal) {
//                 if (type.isStr(newVal) || type.isNum(newVal)) setHtml(PoptipTitle, newVal);
//             },
//             get content() {
//                 return setHtml(PoptipContent);
//             },
//             set content(newVal) {
//                 if (type.isStr(newVal) || type.isNum(newVal)) setHtml(PoptipContent, newVal);
//             },
//             events({ onShow, onHide, onOk, onCancel }) {
//                 const triggerMode = attrs(target).trigger;

//                 const showEv = () => {
//                     if (PoptipPopper.dataset.poptipShow === 'true') onShow && type.isFn(onShow);
//                 };
//                 const hideEv = () => {
//                     if (PoptipPopper.dataset.poptipShow === 'false') onHide && type.isFn(onHide);
//                 };
//                 const clickEv = () => {
//                     showEv();
//                     hideEv();
//                 };

//                 if (triggerMode === 'click') {
//                     bind(PoptipRef, 'click', clickEv);
//                 } else if (triggerMode === 'focus') {
//                     bind(target, 'mousedown', showEv);
//                     bind(target, 'mouseup', hideEv);
//                 } else if (triggerMode === 'hover') {
//                     _Popper.handleHoverShowAndHideEvents({
//                         reference: target,
//                         popper: PoptipPopper,
//                         datasetVal: 'poptipStatus',
//                         showCb: onShow,
//                         hideCb: onHide,
//                         delay: DEFAULTDELAY,
//                         timer: EVENTTIMER
//                     });
//                 }

//                 // 确认对话框的确定和取消按钮都要触发提示框隐藏
//                 if (OkBtn) {
//                     bind(OkBtn, 'click', () => {
//                         hideEv();
//                         onOk && type.isFn(onOk);
//                     });
//                 }
//                 if (CancelBtn) {
//                     bind(OkBtn, 'click', () => {
//                         hideEv();
//                         onCancel && type.isFn(onCancel);
//                     });
//                 }
//             }
//         };
//     }

//     private _create(COMPONENTS: NodeListOf<Element>): void {
//         COMPONENTS.forEach((node, i) => {
//             this._createPoptipNodes(node, i);
//             removeAttrs(node, [
//                 'width',
//                 'title',
//                 'content',
//                 'ok-text',
//                 'padding',
//                 'disabled',
//                 'placement',
//                 'word-wrap',
//                 'cancel-text'
//             ]);
//         });
//     }

//     private _createPoptipNodes(node: Element, i: number): void {
//         const attrs = this.attrs(node);

//         if (attrs.confirm) node.className = `${PREFIX.poptip}-confirm`;

//         const uid = `poptip${i}`;

//         const referenceElem = node.firstElementChild!;
//         const PoptipRel = createElem('div');

//         PoptipRel.className = `${PREFIX.poptip}-rel`;
//         PoptipRel.appendChild(referenceElem);

//         const whatModel = attrs.confirm ? this._confirmTpl(attrs) : this._normalTpl(attrs);

//         const template = `
//             <div class="${PREFIX.poptip}-popper" x-placement=${attrs.placement} data-poptip-uid=${uid}>
//                 <div class="${PREFIX.poptip}-content">
//                     <div class="${PREFIX.poptip}-arrow" data-popper-arrow></div>
//                     <div class="${PREFIX.poptip}-inner">${whatModel}</div>
//                 </div>
//             </div>
//         `;

//         setHtml(node, template);

//         this._setWidth(attrs, uid);

//         const Popper = $el(`[data-poptip-uid=${uid}]`)!;

//         Popper?.before(PoptipRel);

//         // 初始化 display
//         setCss(Popper, 'display', 'none');

//         if (!attrs.isDisabled) {
//             // @ts-ignore
//             this._triggerDisplay(attrs.trigger, node, PoptipRel, Popper, attrs);
//         }
//     }

//     private _normalTpl(attrs: PoptipAttrs): string {
//         const setPadding = attrs.padding ? `padding:${attrs.padding}` : '';

//         const isShowTitle =
//             !attrs.wordWrap && attrs.title
//                 ? `<div class="${PREFIX.poptip}-title" style="${setPadding}">
//                       <div class="${PREFIX.poptip}-title-inner">${attrs.title}</div>
//                    </div>`
//                 : '';

//         const template = `
//             ${isShowTitle}
//             <div class="${PREFIX.poptip}-body" style="${setPadding}">
//                 <div class="${PREFIX.poptip}-body-content">
//                 <div class="${PREFIX.poptip}-body-content-inner">${attrs.content}</div>
//                 </div>
//             </div>
//             `;

//         return template;
//     }

//     private _confirmTpl(attrs: PoptipAttrs): string {
//         const template = `
//           <div class="${PREFIX.poptip}-body">
//               <i class="${PREFIX.icon} ${PREFIX.icon}-ios-help-circle"></i>
//               <div class="${PREFIX.poptip}-body-message">${attrs.title}</div>
//           </div>
//           <div class="${PREFIX.poptip}-footer">
//               <button class="${PREFIX.button} ${PREFIX.button}-text ${PREFIX.button}-sm">${attrs.cancelText}</button>
//               <button class="${PREFIX.button} ${PREFIX.button}-primary ${PREFIX.button}-sm">${attrs.okText}</button>
//           </div>
//       `;

//         return template;
//     }

//     private _setWidth(attrs: PoptipAttrs, uid: string): void {
//         const popper = document.querySelector(`[data-poptip-uid=${uid}]`);
//         if (attrs.width) {
//             setCss(popper, 'width', `${attrs.width}px`);
//         }

//         if (attrs.wordWrap) {
//             const popperContent = popper?.querySelector(`.${PREFIX.poptip}-body-content`);
//             popperContent?.classList.add(`${PREFIX.poptip}-body-content-word-wrap`);
//         }
//     }

//     private _triggerDisplay(
//         trigger: string,
//         parent: HTMLElement,
//         referenceChild: HTMLElement,
//         popper: Element | any,
//         poptipAttrs: PoptipAttrs
//     ): void {
//         if (trigger !== 'click' && trigger !== 'hover' && trigger !== 'focus') {
//             warn(`The Poptip attribute trigger got an invalid trigger mode --> '${trigger}'`);
//             return;
//         }

//         const { _initPoptip } = this;

//         const common = {
//             rmCls: true,
//             enterCls: 'zoom-big-fast-enter',
//             leaveCls: 'zoom-big-fast-leave',
//             timeout: 200
//         };

//         // 通过设置 popper.dataset.poptipShow 来判断是否隐藏或显示
//         const show = () => {
//             popper.dataset.poptipShow = 'true';
//             CssTransition(popper, {
//                 inOrOut: 'in',
//                 ...common
//             });
//             _initPoptip(parent, popper, poptipAttrs);
//         };
//         const hide = () => {
//             popper.dataset.poptipShow = 'false';
//             CssTransition(popper, {
//                 inOrOut: 'out',
//                 ...common
//             });
//         };

//         const judgmentIsVisible = () => (popper.dataset.poptipShow === 'true' ? hide() : show());

//         if (trigger === 'click' || trigger === 'focus') {
//             _initPoptip(parent, popper, poptipAttrs);
//             _arrow.toggleUpdate(popper, trigger, parent);
//         }
//         if (trigger === 'click') {
//             bind(referenceChild, 'click', judgmentIsVisible);
//         } else if (trigger === 'focus' && !poptipAttrs.confirm) {
//             bind(referenceChild, 'mousedown', judgmentIsVisible);
//             bind(referenceChild, 'mouseup', hide);
//         } else if (trigger === 'hover' && !poptipAttrs.confirm) {
//             bind(parent, 'mouseenter', () => {
//                 SHOWTIMER = setTimeout(() => {
//                     show();
//                 }, DEFAULTDELAY);
//             });
//             bind(parent, 'mouseleave', () => {
//                 clearTimeout(SHOWTIMER);
//                 hide();
//             });

//             _arrow.toggleUpdate(popper, 'hover', parent, DEFAULTDELAY);
//         }

//         // 确认对话框的确定和取消按钮触发隐藏
//         if (poptipAttrs.confirm) {
//             const confirmOkBtn = popper.querySelector(
//                 `.${PREFIX.button}-primary.${PREFIX.button}-sm`
//             );
//             const confirmCancelBtn = popper.querySelector(
//                 `.${PREFIX.button}-text.${PREFIX.button}-sm`
//             );
//             confirmOkBtn.addEventListener('click', judgmentIsVisible);
//             confirmCancelBtn.addEventListener('click', judgmentIsVisible);
//         }
//     }

//     private _initPoptip(reference: Element, popper: Element | any, poptipAttrs: PoptipAttrs): any {
//         const NCP = _newCreatePopper(reference, popper, poptipAttrs.placement, poptipAttrs.offset);
//         return NCP;
//     }

//     private attrs(node: Element): PoptipAttrs {
//         return {
//             // number type
//             width: getNumTypeAttr(node, 'width', 0),
//             offset: getNumTypeAttr(node, 'offset', 0),
//             // string type
//             title: getStrTypeAttr(node, 'title', ''),
//             okText: getStrTypeAttr(node, 'ok-text', '确定'),
//             content: getStrTypeAttr(node, 'content', ''),
//             trigger: getStrTypeAttr(node, 'trigger', 'click'),
//             padding: getStrTypeAttr(node, 'padding', ''),
//             placement: getStrTypeAttr(node, 'placement', 'top'),
//             cancelText: getStrTypeAttr(node, 'cancel-text', '取消'),
//             // boolean type
//             confirm: getBooleanTypeAttr(node, 'confirm'),
//             isDisabled: getBooleanTypeAttr(node, 'disabled'),
//             wordWrap: getBooleanTypeAttr(node, 'word-wrap')
//         };
//     }
// }

// export default Poptip;
