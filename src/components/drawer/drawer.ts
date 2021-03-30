import PREFIX from '../prefix';
import {
    $el,
    bind,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { CssTransition, moreThanOneNode, Scrollable } from '../../mixins';
import { type, validComps } from '../../utils';

interface DrawerEvents {
    onClose?: () => void;
}

interface Config {
    config(
        el: string
    ): {
        title: string;
        visable: boolean;
        events: ({ onClose }: DrawerEvents) => void;
    };
}

class Drawer implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.1.1';
        this.COMPONENTS = $el('r-drawer', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        title: string;
        visable: boolean;
        events: ({ onClose }: DrawerEvents) => void;
    } {
        const target = $el(el);

        validComps(target, 'drawer');

        const { _handleVisable, _attrs } = Drawer.prototype;

        const DrawerMask = target.querySelector(`.${PREFIX.drawer}-mask`);
        const DrawerWrap = target.querySelector(`.${PREFIX.drawer}-wrap`);
        const _Drawer = target.querySelector(`.${PREFIX.drawer}`);
        const DrawerTitle = target.querySelector(`.${PREFIX.drawer}-header-inner`);
        const DrawerClose = target.querySelector(`.${PREFIX.drawer}-close`);

        return {
            get title() {
                return setHtml(DrawerTitle);
            },
            set title(newVal: string) {
                if (!type.isStr(newVal)) return;
                setHtml(DrawerTitle, newVal);
            },
            get visable() {
                return false;
            },
            set visable(newVal: boolean) {
                if (!type.isBol(newVal)) return;

                _handleVisable(newVal, target, [DrawerMask, DrawerWrap, _Drawer]);
            },
            events({ onClose }) {
                // v1.0.1 改用on事件绑定，防止触发回调事件的次数随着每次点击而不断的重复叠加
                if (DrawerClose) DrawerClose.onclick = () => onClose && type.isFn(onClose);
                if (_attrs(target).maskClosable === 'true')
                    DrawerWrap.onclick = () => onClose && type.isFn(onClose);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            this._createDrawerNodes(node);

            setCss(node, 'display', 'block');

            removeAttrs(node, [
                'title',
                'width',
                'height',
                'mask',
                'visible',
                'closable',
                'scrollable',
                'lock-scroll'
            ]);
        });
    }

    private _createDrawerNodes(node: Element): void {
        const DrawerMask = createElem('div');
        const DrawerWrap = createElem('div');
        const Drawer = createElem('div');
        const DrawerContent = createElem('div');
        const DrawerClose = createElem('a');
        const DrawerHeader = createElem('div');
        const DrawerHeaderInner = createElem('div');
        const DrawerBody = createElem('div');

        this._setCls([
            DrawerMask,
            DrawerWrap,
            Drawer,
            DrawerContent,
            DrawerClose,
            DrawerHeader,
            DrawerHeaderInner,
            DrawerBody
        ]);

        this._setSize(node, Drawer);
        this._setPlacement(node, Drawer);
        this._setOpenInContainer(node, DrawerMask, DrawerWrap, Drawer);

        this._initVisible(node, DrawerMask, DrawerWrap, Drawer);
        this._handleClose(node, [DrawerMask, DrawerWrap, Drawer], DrawerClose);

        DrawerWrap.appendChild(Drawer);
        Drawer.appendChild(DrawerContent);

        this._setClosable(node, DrawerContent, DrawerClose);
        this._setHeader(node, DrawerContent, DrawerHeader, DrawerHeaderInner);

        DrawerContent.appendChild(DrawerBody);

        this._setBodyContent(node, DrawerBody);
        this._setMask(node, DrawerMask, DrawerWrap, DrawerContent);

        node.appendChild(DrawerWrap);
    }

    private _setCls(elms: HTMLElement[]): void {
        const elmsCls = [
            `${PREFIX.drawer}-mask`,
            `${PREFIX.drawer}-wrap`,
            `${PREFIX.drawer}`,
            `${PREFIX.drawer}-content`,
            `${PREFIX.drawer}-close`,
            `${PREFIX.drawer}-header`,
            `${PREFIX.drawer}-header-inner`,
            `${PREFIX.drawer}-body`
        ];

        let i = 0;
        const { length } = elms;
        for (; i < length; i++) {
            const elm = elms[i];
            elm.className = elmsCls[i];
        }
    }

    private _setSize(parent: Element, children: HTMLElement): void {
        const { width, height, placement } = this._attrs(parent);

        if (placement === 'top' || placement === 'bottom') {
            setCss(children, 'height', height);
        } else if (placement === 'left' || placement === 'right') {
            children.style.width = width;
            setCss(children, 'width', width);
        }
    }

    private _setPlacement(parent: Element, children: HTMLElement): void {
        const { placement } = this._attrs(parent);

        children.classList.add(`${PREFIX.drawer}-${placement}`);
    }

    private _setOpenInContainer(
        parent: Element,
        drawerMask: HTMLElement,
        drawerWrap: HTMLElement,
        drawer: HTMLElement
    ): void {
        const { inner } = this._attrs(parent);

        if (!inner) return;

        drawerMask.classList.add(`${PREFIX.drawer}-mask-inner`);
        drawerWrap.classList.add(`${PREFIX.drawer}-wrap-inner`);
        drawer.classList.add(`${PREFIX.drawer}-inner`);
    }

    private _setMask(
        parent: Element,
        drawerMask: HTMLElement,
        drawerWrap: HTMLElement,
        drawerContent: HTMLElement
    ): void {
        let { mask } = this._attrs(parent);

        if (parent.getAttribute('mask') == null) mask = true;

        if (!mask) {
            drawerWrap.classList.add(`${PREFIX.drawer}-no-mask`);
            drawerContent.classList.add(`${PREFIX.drawer}-content-no-mask`);
            return;
        }

        parent.appendChild(drawerMask);
    }

    private _setClosable(parent: Element, children: HTMLElement, drawerClose: HTMLElement): void {
        const { closable } = this._attrs(parent);

        if (!closable) return;

        setHtml(drawerClose, `<i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>`);

        children.appendChild(drawerClose);
    }

    private _setHeader(
        parent: Element,
        drawerContent: HTMLElement,
        drawerHeader: HTMLElement,
        drawerTitle: HTMLElement
    ): void {
        const { title } = this._attrs(parent);

        if (!title) {
            drawerContent.parentElement?.classList.add(`${PREFIX.drawer}-no-header`);
            return;
        }

        setHtml(drawerTitle, title);

        drawerHeader.appendChild(drawerTitle);
        drawerContent.appendChild(drawerHeader);
    }

    private _setBodyContent(parent: Element, children: HTMLElement): void {
        // v1.1.1 增加占位节点的组成数量判断
        if (moreThanOneNode(parent)) return;

        const placeholderNode = parent.firstElementChild;
        if (placeholderNode) children.appendChild(placeholderNode);
    }

    private _initVisible(
        parent: Element,
        drawerMask: HTMLElement,
        drawerWrap: HTMLElement,
        drawer: HTMLElement
    ): void {
        const { visible } = this._attrs(parent);

        // @ts-ignore
        parent.dataset.drawerVisable = `${visible}`;

        if (visible) return;

        drawerWrap.classList.add(`${PREFIX.drawer}-hidden`);

        setCss(drawerMask, 'display', 'none');
        setCss(drawer, 'display', 'none');
    }

    private _handleVisable(visable: boolean, target: Element, children: Element[]): void {
        const { _show, _hide } = Drawer.prototype;
        visable ? _show(target, children) : _hide(target, children);
    }

    private _handleClose(parent: Element, hiddenElm: Element[], triggerElm: HTMLElement): void {
        const { _hide } = Drawer.prototype;

        // triggerElm 表示右上角关闭按钮
        bind(triggerElm, 'click', () => _hide(parent, hiddenElm));
        bind(hiddenElm[1], 'click', () => _hide(parent, hiddenElm));
        bind(hiddenElm[2], 'click', (e: any) => e.stopPropagation());
    }

    private _show(parent: Element, showElm: Element[]): void {
        const { _attrs } = Drawer.prototype;
        const { inner, placement, scrollable } = _attrs(parent);

        let { lockScroll } = _attrs(parent);
        !parent.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;

        // 设置为在当前 dom 里打开则不隐藏 body 滚动条
        if (!inner) Scrollable({ scroll: scrollable, lock: lockScroll });

        // @ts-ignore
        // 设置当前为显示状态
        parent.dataset.drawerVisable = 'true';

        // showElm[0] 表示遮盖层
        // showElm[1] 表示抽屉的父容器wrap
        // showElm[2] 表示抽屉主体

        showElm[1].classList.contains(`${PREFIX.drawer}-hidden`) &&
            showElm[1].classList.remove(`${PREFIX.drawer}-hidden`);

        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            rmCls: true,
            timeout: 250
        });

        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: `${PREFIX.drawer}-${placement}-move-enter`,
            rmCls: true,
            timeout: 550
        });
    }

    private _hide(parent: Element, hiddenElm: Element[]): void {
        const { placement } = Drawer.prototype._attrs(parent);

        // @ts-ignore
        // 设置为隐藏状态
        parent.dataset.drawerVisable = 'false';

        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示抽屉的父容器wrap
        // hiddenElm[2] 表示抽屉主体
        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });

        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: `${PREFIX.drawer}-${placement}-move-leave`,
            rmCls: true,
            timeout: 490
        });

        setTimeout(() => {
            hiddenElm[1].classList.add(`${PREFIX.drawer}-hidden`);
            setCss(hiddenElm[2], 'display', 'none');
            Scrollable({ scroll: true, lock: true, node: parent, tagName: 'drawer' });
        }, 490);
    }

    private _attrs(node: Element) {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            width: getStrTypeAttr(node, 'width', '256px'),
            height: getStrTypeAttr(node, 'height', '256px'),
            placement: getStrTypeAttr(node, 'placement', 'right'),
            mask: getBooleanTypeAttr(node, 'mask'),
            inner: getBooleanTypeAttr(node, 'inner'),
            visible: getBooleanTypeAttr(node, 'visible'),
            closable: getBooleanTypeAttr(node, 'closable'),
            scrollable: getBooleanTypeAttr(node, 'scrollable'),
            lockScroll: getBooleanTypeAttr(node, 'lock-scroll'),
            maskClosable: getStrTypeAttr(node, 'mask-closable', 'true')
        };
    }
}

export default Drawer;
