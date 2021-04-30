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
import { clickoutside, CssTransition, _arrow, _Popper } from '../../mixins';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

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
    onPopperShow?: () => void;
    onPopperHide?: () => void;
    onOk?: () => void;
    onCancel?: () => void;
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
                    confirm,
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
                const visibleEvent = (show: boolean) => {
                    if (show) {
                        onPopperShow && type.isFn(onPopperShow);
                    } else {
                        onPopperHide && type.isFn(onPopperHide);
                    }
                };
                const toogleEv = () => {
                    setTimeout(() => {
                        PoptipPopper.dataset[STATEKEY] === 'show'
                            ? visibleEvent(true)
                            : visibleEvent(false);
                    }, 200);
                };
                const clickoutsideEv = () => {
                    if (PoptipPopper.style.visibility === 'visible') {
                        setTimeout(() => visibleEvent(false), DEFAULTDELAY);
                    }
                };

                if (!confirm) {
                    if (trigger === 'hover') {
                        bind(target, 'mouseenter', () => {
                            if (EVENTTIMER) clearTimeout(EVENTTIMER);
                            EVENTTIMER = setTimeout(() => visibleEvent(true), DEFAULTDELAY);
                        });
                        bind(target, 'mouseleave', () => {
                            if (EVENTTIMER) clearTimeout(EVENTTIMER);
                            if (PoptipPopper.dataset[STATEKEY] === 'show')
                                setTimeout(() => visibleEvent(false), DEFAULTDELAY);
                        });
                    }
                    if (trigger === 'focus') {
                        bind(PoptipRefElem, 'mousedown', () => visibleEvent(true));
                        bind(PoptipRefElem, 'mouseup', () => visibleEvent(false));
                    }
                }
                if (trigger === 'click' || trigger === 'focus') {
                    clickoutside(target, clickoutsideEv);
                }
                if (trigger === 'click') {
                    bind(PoptipRefElem, 'click', toogleEv);
                }
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
                confirm,
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
        confirm: boolean,
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

        if (!confirm) {
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
            if (type === 'focus') {
                bind(refElem, 'mousedown', (e: MouseEvent) => show(true, e));
                bind(refElem, 'mouseup', (e: MouseEvent) => show(false, e));
            }
        }

        if (type === 'click') {
            const hide = () => {
                if (popper.dataset[STATEKEY] === 'close') return;
                show(false);
            };
            const clickEv = (e: MouseEvent) => {
                const poppers = document.querySelectorAll(`.${PREFIX.poptip}-popper`);
                poppers.forEach((child) => {
                    const otherPopper = child as HTMLElement;
                    if (otherPopper.dataset[STATEKEY] === 'show') {
                        this._setVisible(false, refElem, otherPopper, placement, offset);
                    }
                });
                popper.style.visibility === 'visible' ? show(false, e) : show(true, e);
            };

            clickoutside(node, hide);
            bind(refElem, 'click', (e: MouseEvent) => clickEv(e));
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
