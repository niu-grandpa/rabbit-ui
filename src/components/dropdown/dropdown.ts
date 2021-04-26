/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss
} from '../../dom-utils';
import { CssTransition, warn, _Popper } from '../../mixins';
import { type, validComps } from '../../utils';

interface Config {
    config(
        el: string
    ): {
        visible: boolean;
        events: ({ onClick, onVisibleChange }: DropdownEvents) => void;
    };
}

interface DropdownEvents {
    onClick: (key: string) => void;
    onVisibleChange: (visible: boolean) => void;
}

const DEFAULTDELAY = 80;
const STATEKEY = 'visibleState';
const DROPENTERCLS = 'transition-drop-enter';
const DROPLEAVECLS = 'transition-drop-leave';

let VISIBLETIMER: any = null;

class Dropdown {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v2.0';
        this.COMPONENTS = $el('r-dropdown', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            if (!this._correctCompositionNodes(node)) return;

            const DropdownMenu = node.querySelector('r-dropdown-menu')! as HTMLElement;
            const DropdownItem = DropdownMenu.querySelector('r-dropdown-item')! as HTMLElement;

            const { trigger, placement, visible, stopPropagation } = this._attrs(node);
            const { key } = this._attrs(DropdownItem);

            this._setVisible(node, DropdownMenu, visible, placement);
            this._setChildKey(DropdownItem, key);
            this._handleTrigger(trigger, placement, stopPropagation, node, DropdownMenu);
            this._handleItemClick(node, DropdownMenu, placement);

            removeAttrs(node, ['key', 'trigger', 'placement', 'visible']);
        });
    }

    private _correctCompositionNodes(node: Element): boolean {
        if (node.childElementCount > 2) {
            warn('👇 The number of child element nodes in this r-dropdown tag cannot exceed two');
            console.error(node);
            return false;
        }
        if (node.childElementCount == 2 && node.lastElementChild!.tagName !== 'R-DROPDOWN-MENU') {
            warn('👇 The last child element tag must be made up of r-dropdown-menu');
            console.error(node);
            return false;
        }
        if (node.firstElementChild?.tagName === 'R-DROPDOWN-MENU') {
            warn(
                '👇 The first child element must be the reference element used to trigger the menu display hidden, not r-dropdown-menu'
            );
            console.error(node);
            return false;
        }

        return true;
    }

    private _handleTrigger(
        type: string,
        placement: string,
        _stopPropagation: boolean,
        node: Element,
        child: HTMLElement
    ): void {
        if (type === 'custom') return;

        const referenceElem = node.firstElementChild!;

        // 触发菜单显示隐藏的引用元素如果是禁用状态则不做操作
        if (/disabled/.test(referenceElem.className)) return;
        if (
            referenceElem.getAttribute('disabled') === 'disabled' ||
            referenceElem.getAttribute('disabled') === 'true' ||
            referenceElem.getAttribute('disabled') === ''
        ) {
            return;
        }

        const showMenu = () => {
            if (VISIBLETIMER) clearTimeout(VISIBLETIMER);
            VISIBLETIMER = setTimeout(
                () => this._setVisible(node, child, true, placement),
                DEFAULTDELAY
            );
        };
        const hidenMenu = () => {
            if (VISIBLETIMER) clearTimeout(VISIBLETIMER);
            if (child.dataset[STATEKEY] === 'visible') {
                setTimeout(() => this._setVisible(node, child, false, placement), DEFAULTDELAY);
            }
        };
        const clickIsShow = () => {
            if (child.dataset[STATEKEY] === 'hidden') {
                showMenu();
            } else {
                hidenMenu();
            }
        };
        const setStopPropagation = (e: MouseEvent) => {
            _stopPropagation ? e.stopPropagation() : undefined;
        };

        if (type === 'hover') {
            bind(node, 'mouseenter', (e: MouseEvent) => {
                setStopPropagation(e);
                showMenu();
            });
            bind(node, 'mouseleave', (e: MouseEvent) => {
                setStopPropagation(e);
                hidenMenu();
            });
        }
        if (type === 'click' || type === 'contextMenu') {
            //
        }
        if (type === 'click') {
            bind(referenceElem, 'click', (e: MouseEvent) => {
                setStopPropagation(e);
                clickIsShow();
            });
        }
        if (type === 'contextMenu') {
            bind(referenceElem, 'contextmenu', (e: MouseEvent) => {
                e.preventDefault();
                setStopPropagation(e);
                clickIsShow();
            });
        }
    }

    private _handleItemClick(node: Element, child: HTMLElement, placement: string): void {
        const DropdownItems = child.querySelectorAll('r-dropdown-item');
        DropdownItems.forEach((item) =>
            bind(item, 'click', () => this._setVisible(node, child, false, placement))
        );
    }

    private _setChildKey(child: HTMLElement, key: string): void {
        if (key) {
            child.dataset['itemKey'] = key;
            child.removeAttribute('key');
        }
    }

    private _setVisible(
        node: Element,
        child: HTMLElement,
        visible: boolean,
        placement: string
    ): void {
        child.dataset[STATEKEY] = 'pending';

        if (visible) {
            child.dataset[STATEKEY] = 'visible';
            this._setPlacement(node, child, placement);
            this._setTransitionDrop('in', child);
        } else {
            child.dataset[STATEKEY] = 'hidden';
            this._setTransitionDrop('out', child);
        }
    }

    private _setPlacement(node: Element, child: HTMLElement, placement: string): void {
        const popperPlacement = child.dataset['popperPlacement'] || placement;

        if (/^top|right-end|left-end/.test(popperPlacement)) {
            setCss(child, 'transformOrigin', 'center bottom');
        }
        if (/^bottom|right-start|left-start/.test(popperPlacement)) {
            setCss(child, 'transformOrigin', 'center top');
        }

        _Popper._newCreatePopper(node, child, placement, 0);
    }

    private _setTransitionDrop(type: 'in' | 'out', child: HTMLElement): void {
        const transitionCls =
            type === 'in' ? { enterCls: DROPENTERCLS } : { leaveCls: DROPLEAVECLS };

        CssTransition(child, {
            inOrOut: type,
            ...transitionCls,
            rmCls: true,
            timeout: 300
        });
    }

    private _attrs(node: Element) {
        return {
            key: getStrTypeAttr(node, 'key', ''),
            trigger: getStrTypeAttr(node, 'trigger', 'hover'),
            placement: getStrTypeAttr(node, 'placement', 'bottom'),
            visible: getBooleanTypeAttr(node, 'visible'),
            stopPropagation: getBooleanTypeAttr(node, 'stop-propagation')
        };
    }
}

export default Dropdown;

// // 通过点击事件冒泡的方式处理单击下拉菜单项隐藏菜单
// function handleDropdownItemClickHidden(): void {
//     bind(document, 'click', (e: any) => {
//         const { target } = e;
//         // 获取点击的目标元素名
//         const tagName = target.tagName.toLocaleLowerCase();

//         if (tagName === 'r-dropdown-item') {
//             // 是否为禁用项
//             if (target.getAttribute('disabled') === '') return;

//             // 获取菜单项的最外层容器 div.rab-select-dropdown
//             const dropdownMenu = target.parentElement.parentElement;

//             // 设置为隐藏状态
//             dropdownMenu.dataset.dropdownVisable = 'false';

//             CssTransition(dropdownMenu, {
//                 inOrOut: 'out',
//                 leaveCls: 'transition-drop-leave',
//                 rmCls: true,
//                 timeout: 280
//             });
//         }
//     });
// }

// interface DropdownEvents {
//     onClick: (index?: number) => void; // 点击菜单项时触发，返回 r-dropdown-item 索引值
// }

// interface Config {
//     config(
//         el: string
//     ): {
//         events: ({ onClick }: DropdownEvents) => void;
//     };
// }

// const defalutDpdDelay = 100;

// let SHOWTIMER: any;

// class Dropdown implements Config {
//     readonly VERSION: string;
//     readonly COMPONENTS: NodeListOf<Element>;

//     constructor() {
//         this.VERSION = 'v1.0';
//         this.COMPONENTS = $el('r-dropdown', { all: true });
//         this._create(this.COMPONENTS);
//         handleDropdownItemClickHidden();
//     }

//     public config(
//         el: string
//     ): {
//         events({ onClick }: { onClick: (index?: number) => void }): void;
//     } {
//         const target = $el(el);

//         validComps(target, 'dropdown');

//         return {
//             events({ onClick }) {
//                 const children = target.querySelectorAll('r-dropdown-item');
//                 children.forEach((child: Element, index: number) => {
//                     bind(child, 'click', () => {
//                         child.getAttribute('disabled') !== ''
//                             ? onClick && type.isFn(onClick, index)
//                             : undefined;
//                     });
//                 });
//             }
//         };
//     }

//     private _create(COMPONENTS: NodeListOf<Element>): void {
//         COMPONENTS.forEach((node) => {
//             // 判断是否由两个子节点组成
//             if (node.childElementCount > 2) {
//                 warn(
//                     'The content of a component dropdown can only be composed of two element nodes, the first being the reference element and the second being the drop-down item'
//                 );
//             }

//             // 将第一个子元素作为宿主元素
//             const refElm: Element | null = node.firstElementChild;
//             // 最后一个子元素即菜单项
//             const menuItem: Element | null = node.lastElementChild;

//             // 清空旧内容，防止获取的元素不正确
//             setHtml(node, '');

//             const DropdownRef = this._setReferenceElm(node, refElm);
//             const DropdownMenu = this._setMenuItem(node, menuItem);

//             this._handleTrigger(node, DropdownRef, DropdownMenu);

//             this._setTransformOrigin(node, DropdownMenu);

//             removeAttrs(node, ['trigger', 'placement']);
//         });
//     }

//     private _setReferenceElm(node: Element, refElm: Element | null): HTMLElement {
//         const DropdownRel = createElem('div');

//         DropdownRel.className = `${PREFIX.dropdown}-rel`;

//         refElm ? DropdownRel.appendChild(refElm) : '';
//         node.appendChild(DropdownRel);

//         return DropdownRel;
//     }

//     private _setMenuItem(node: Element, menuItem: Element | null): HTMLElement {
//         const DropdownMenu = createElem('div');

//         DropdownMenu.className = 'rab-select-dropdown';

//         this._initVisable(DropdownMenu);

//         menuItem ? DropdownMenu.appendChild(menuItem) : '';
//         node.appendChild(DropdownMenu);

//         setCss(menuItem, 'display', 'block');

//         return DropdownMenu;
//     }

//     private _initVisable(dpdMenu: HTMLElement): void {
//         setCss(dpdMenu, 'display', 'none');
//         dpdMenu.dataset.dropdownVisable = 'false';
//     }

//     private _setTransformOrigin(parent: Element, dpdMenu: HTMLElement): void {
//         const { placement } = this._attrs(parent);
//         // 根据 placement 设置源方向。
//         // top 开头、right-end、left-end 的位置设置源方向为 center-bottom，反之。
//         // left 和 right 开头的则无需设置。
//         if (/^top|right-end|left-end/.test(placement)) {
//             setCss(dpdMenu, 'transformOrigin', 'center bottom');
//         } else if (/^bottom|right-start|left-start/.test(placement)) {
//             setCss(dpdMenu, 'transformOrigin', 'center top');
//         }

//         // TODO: 根据 popper 的方向动态改变源方向
//         // dpdMenu.dataset.popperPlacement;
//     }

//     private _handleTrigger(parent: Element, dpdRef: HTMLElement, dpdMenu: HTMLElement): void {
//         const { trigger, placement } = this._attrs(parent);

//         const setPopper = () => _Popper._newCreatePopper(dpdRef, dpdMenu, placement, 0);

//         const show = () => {
//             setPopper();

//             dpdMenu.dataset.dropdownVisable = 'true';

//             CssTransition(dpdMenu, {
//                 inOrOut: 'in',
//                 enterCls: 'transition-drop-enter',
//                 rmCls: true,
//                 timeout: 300
//             });
//         };

//         const hidden = () => {
//             if (dpdMenu.dataset.dropdownVisable === 'true') {
//                 dpdMenu.dataset.dropdownVisable = 'false';
//                 CssTransition(dpdMenu, {
//                     inOrOut: 'out',
//                     leaveCls: 'transition-drop-leave',
//                     rmCls: true,
//                     timeout: 280
//                 });
//             }
//         };

//         // 通过点击宿主元素的次数判断是否显示或隐藏菜单项
//         const clicksIsVisable = (clicks: number) => (clicks % 2 == 0 ? hidden() : show());

//         if (trigger === 'hover') {
//             bind(parent, 'mouseenter', () => {
//                 SHOWTIMER = setTimeout(() => {
//                     show();
//                 }, defalutDpdDelay);
//             });
//             bind(parent, 'mouseleave', () => {
//                 clearTimeout(SHOWTIMER);
//                 hidden();
//             });
//         } else if (trigger === 'click') {
//             // 初始当前的点击次数
//             let currentClicks = 1;
//             bind(dpdRef, 'click', () => clicksIsVisable(currentClicks++));
//             bind(dpdRef, 'focusin', show);
//             bind(dpdRef, 'focusout', () => {
//                 currentClicks++;
//                 hidden();
//             });
//         } else if (trigger === 'contextMenu') {
//             // 初始当前的右击次数
//             let currentRightClick = 1;
//             bind(dpdRef, 'contextmenu', (e: any) => {
//                 e.preventDefault();
//                 clicksIsVisable(currentRightClick++);
//             });
//             bind(dpdRef, 'focusout', () => {
//                 currentRightClick++;
//                 hidden();
//             });
//         }
//     }

//     private _attrs(node: Element) {
//         return {
//             trigger: getStrTypeAttr(node, 'trigger', 'hover'),
//             placement: getStrTypeAttr(node, 'placement', 'bottom')
//         };
//     }
// }

// export default Dropdown;
