import PREFIX from '../prefix';
import {
    $el,
    bind,
    createElem,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { CssTransition, warn, _Popper } from '../../mixins';
import { type, validComps } from '../../utils';

// 通过点击事件冒泡的方式处理单击下拉菜单项隐藏菜单
function handleDropdownItemClickHidden(): void {
    bind(document, 'click', (e: any) => {
        const { target } = e;
        // 获取点击的目标元素名
        const tagName = target.tagName.toLocaleLowerCase();

        if (tagName === 'r-dropdown-item') {
            // 是否为禁用项
            if (target.getAttribute('disabled') === '') return;

            // 获取菜单项的最外层容器 div.rab-select-dropdown
            const dropdownMenu = target.parentElement.parentElement;

            // 设置为隐藏状态
            dropdownMenu.dataset.dropdownVisable = 'false';

            CssTransition(dropdownMenu, {
                inOrOut: 'out',
                leaveCls: 'transition-drop-leave',
                rmCls: true,
                timeout: 280
            });
        }
    });
}

interface DropdownEvents {
    onClick: (index?: number) => void; // 点击菜单项时触发，返回 r-dropdown-item 索引值
}

interface Config {
    config(
        el: string
    ): {
        events: ({ onClick }: DropdownEvents) => void;
    };
}

const defalutDpdDelay = 100;

let SHOWTIMER: any;

class Dropdown implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-dropdown', { all: true });
        this._create(this.COMPONENTS);
        handleDropdownItemClickHidden();
    }

    public config(
        el: string
    ): {
        events({ onClick }: { onClick: (index?: number) => void }): void;
    } {
        const target = $el(el);

        validComps(target, 'dropdown');

        return {
            events({ onClick }) {
                const children = target.querySelectorAll('r-dropdown-item');
                children.forEach((child: Element, index: number) => {
                    bind(child, 'click', () => {
                        child.getAttribute('disabled') !== ''
                            ? onClick && type.isFn(onClick, index)
                            : undefined;
                    });
                });
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            // 判断是否由两个子节点组成
            if (node.childElementCount > 2) {
                warn(
                    'The content of a component dropdown can only be composed of two element nodes, the first being the reference element and the second being the drop-down item'
                );
            }

            // 将第一个子元素作为宿主元素
            const refElm: Element | null = node.firstElementChild;
            // 最后一个子元素即菜单项
            const menuItem: Element | null = node.lastElementChild;

            // 清空旧内容，防止获取的元素不正确
            setHtml(node, '');

            const DropdownRef = this._setReferenceElm(node, refElm);
            const DropdownMenu = this._setMenuItem(node, menuItem);

            this._handleTrigger(node, DropdownRef, DropdownMenu);

            this._setTransformOrigin(node, DropdownMenu);

            removeAttrs(node, ['trigger', 'placement']);
        });
    }

    private _setReferenceElm(node: Element, refElm: Element | null): HTMLElement {
        const DropdownRel = createElem('div');

        DropdownRel.className = `${PREFIX.dropdown}-rel`;

        refElm ? DropdownRel.appendChild(refElm) : '';
        node.appendChild(DropdownRel);

        return DropdownRel;
    }

    private _setMenuItem(node: Element, menuItem: Element | null): HTMLElement {
        const DropdownMenu = createElem('div');

        DropdownMenu.className = 'rab-select-dropdown';

        this._initVisable(DropdownMenu);

        menuItem ? DropdownMenu.appendChild(menuItem) : '';
        node.appendChild(DropdownMenu);

        setCss(menuItem, 'display', 'block');

        return DropdownMenu;
    }

    private _initVisable(dpdMenu: HTMLElement): void {
        setCss(dpdMenu, 'display', 'none');
        dpdMenu.dataset.dropdownVisable = 'false';
    }

    private _setTransformOrigin(parent: Element, dpdMenu: HTMLElement): void {
        const { placement } = this._attrs(parent);
        // 根据 placement 设置源方向。
        // top 开头、right-end、left-end 的位置设置源方向为 center-bottom，反之。
        // left 和 right 开头的则无需设置。
        if (/^top|right-end|left-end/.test(placement)) {
            setCss(dpdMenu, 'transformOrigin', 'center bottom');
        } else if (/^bottom|right-start|left-start/.test(placement)) {
            setCss(dpdMenu, 'transformOrigin', 'center top');
        }

        // TODO: 根据 popper 的方向动态改变源方向
        // dpdMenu.dataset.popperPlacement;
    }

    private _handleTrigger(parent: Element, dpdRef: HTMLElement, dpdMenu: HTMLElement): void {
        const { trigger, placement } = this._attrs(parent);

        const setPopper = () => _Popper._newCreatePopper(dpdRef, dpdMenu, placement, 0);

        const show = () => {
            setPopper();

            dpdMenu.dataset.dropdownVisable = 'true';

            CssTransition(dpdMenu, {
                inOrOut: 'in',
                enterCls: 'transition-drop-enter',
                rmCls: true,
                timeout: 300
            });
        };

        const hidden = () => {
            if (dpdMenu.dataset.dropdownVisable === 'true') {
                dpdMenu.dataset.dropdownVisable = 'false';
                CssTransition(dpdMenu, {
                    inOrOut: 'out',
                    leaveCls: 'transition-drop-leave',
                    rmCls: true,
                    timeout: 280
                });
            }
        };

        // 通过点击宿主元素的次数判断是否显示或隐藏菜单项
        const clicksIsVisable = (clicks: number) => (clicks % 2 == 0 ? hidden() : show());

        if (trigger === 'hover') {
            bind(parent, 'mouseenter', () => {
                SHOWTIMER = setTimeout(() => {
                    show();
                }, defalutDpdDelay);
            });
            bind(parent, 'mouseleave', () => {
                clearTimeout(SHOWTIMER);
                hidden();
            });
        } else if (trigger === 'click') {
            // 初始当前的点击次数
            let currentClicks = 1;
            bind(dpdRef, 'click', () => clicksIsVisable(currentClicks++));
            bind(dpdRef, 'focusin', show);
            bind(dpdRef, 'focusout', () => {
                currentClicks++;
                hidden();
            });
        } else if (trigger === 'contextMenu') {
            // 初始当前的右击次数
            let currentRightClick = 1;
            bind(dpdRef, 'contextmenu', (e: any) => {
                e.preventDefault();
                clicksIsVisable(currentRightClick++);
            });
            bind(dpdRef, 'focusout', () => {
                currentRightClick++;
                hidden();
            });
        }
    }

    private _attrs(node: Element) {
        return {
            trigger: getStrTypeAttr(node, 'trigger', 'hover'),
            placement: getStrTypeAttr(node, 'placement', 'bottom')
        };
    }
}

export default Dropdown;
