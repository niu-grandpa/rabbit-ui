/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml,
    siblings
} from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        activeIndex: string;
        events: ({ onClick, onTabRemove }: TabsEvents) => void;
    };
}

interface TabsEvents {
    onClick?: (index?: string) => void;
    onTabRemove?: (index?: string) => void;
}

class Tabs implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = '1.0';
        this.COMPONENTS = $el('r-tabs', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        activeIndex: string;
        events({ onClick, onTabRemove }: TabsEvents): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'tabs');

        const TabTabs = target.querySelectorAll(`.${PREFIX.tabs}-tab`);
        const TabPanes = target.querySelectorAll('r-tab-pane');

        const { _attrs, _changeTab, _changePane } = Tabs.prototype;
        const { activeIndex } = _attrs(target);
        return {
            get activeIndex() {
                return activeIndex;
            },

            set activeIndex(newVal: string) {
                if (!type.isStr(newVal)) return;

                TabPanes.forEach((pane, i) => {
                    const p = pane as HTMLElement;

                    if (newVal !== p.dataset.paneKey) return;

                    _changeTab(TabTabs[i], true);
                    _changePane([false, p.parentElement!, i, 'true', p]);
                });
            },

            events({ onClick, onTabRemove }) {
                TabTabs.forEach((tab, i) => {
                    const tabClose = tab.querySelector(`.${PREFIX.tabs}-close`);

                    const clickEv = () => {
                        const TabPane = TabPanes[i] as HTMLElement;
                        const key = TabPane.dataset.paneKey;

                        onClick && type.isFn(onClick, key);

                        if (!tabClose) return;
                        onTabRemove && type.isFn(onTabRemove, key);
                    };

                    bind(tab, 'click', clickEv);

                    if (!tabClose) return;
                    bind(tabClose, 'click', clickEv);
                });
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const tabPanes = node.querySelectorAll('r-tab-pane');
            const { activeIndex, size, type, closable, animated } = this._attrs(node);

            this._setType(node, type);
            this._setSize(node, type, size);
            this._setNoAnimation(node, animated);
            this._setBodyTemplate(node);
            this._setTabPane([node, tabPanes, activeIndex, type, animated, closable]);

            removeAttrs(node, ['active-index', 'type', 'size', 'closable', 'animated']);
        });
    }

    private _setType(node: Element, type: string): void {
        if (type !== 'card') return;
        node.classList.add(`${PREFIX.tabs}-${type}`);
    }

    private _setSize(node: Element, type: string, size: string): void {
        if (type !== 'line' || size !== 'small') return;
        node.classList.add(`${PREFIX.tabs}-mini`);
    }

    private _setNoAnimation(node: Element, animated: string): void {
        if (animated === 'true') return;
        node.classList.add(`${PREFIX.tabs}-no-animation`);
    }

    private _setBodyTemplate(node: Element): void {
        const template = `
          <div class="${PREFIX.tabs}-bar">
              <div tabindex="0" class="${PREFIX.tabs}-nav-container">
                  <div class="${PREFIX.tabs}-nav-wrap">
                     <div class="${PREFIX.tabs}-nav"></div>
                  </div>
              </div>
          </div>
          <div class="${PREFIX.tabs}-content ${PREFIX.tabs}-content-animated"></div>`;

        setHtml(node, template);
    }

    private _setTabPane(
        args: [Element, NodeListOf<Element>, string, string, string, boolean]
    ): void {
        const [node, panes, activekey, type, animated, closable] = args;

        const TabNav = node.querySelector(`.${PREFIX.tabs}-nav`);
        const TabPaneContainer = node.querySelector(`.${PREFIX.tabs}-content`);

        const Fragment = document.createDocumentFragment();

        panes.forEach((pane, idx) => {
            const { index: key, tab, icon, closable: separateClose, disabled } = this._paneAttrs(
                pane
            );

            const TabsTab: HTMLElement = this._setTab(TabNav!, tab);

            this._setTabIcon(TabsTab, icon);
            this._setTabClosable([TabsTab, type, closable, separateClose]);
            this._setTabDisabled(TabsTab, disabled);

            setCss(pane, 'display', `${animated === 'true' ? 'block' : 'none'}`);

            this._setPaneKey(pane, key, idx);
            this._setActive([closable, TabPaneContainer!, TabsTab, pane, activekey, idx, animated]);

            this._handleToggle([closable, TabsTab, pane, idx, disabled, animated]);
            this._handleRemove(TabsTab, pane);

            Fragment.appendChild(pane);

            removeAttrs(pane, ['index', 'tab', 'icon', 'disabled', 'closable']);
        });

        TabPaneContainer?.appendChild(Fragment);
    }

    private _setTab(tabsNav: Element, content: string): HTMLElement {
        const TabsTab = createElem('div');

        TabsTab.className = `${PREFIX.tabs}-tab`;

        setHtml(TabsTab, content);

        tabsNav.appendChild(TabsTab);

        return TabsTab;
    }

    private _setTabIcon(tabElm: Element, icon: string): void {
        if (!icon) return;

        const Icon = createElem('i');

        Icon.className = `${PREFIX.icon} ${PREFIX.icon}-${icon}`;
        tabElm.prepend(Icon);
    }

    private _setTabClosable(args: [Element, string, boolean, string]): void {
        const [tabElm, type, closable, separateClose] = args;

        if (!closable || type !== 'card') return;

        const CloseIcon = createElem('icon');

        CloseIcon.className = `${PREFIX.icon} ${PREFIX.icon}-ios-close ${PREFIX.tabs}-close`;

        // 单独设置当前选项是否可以关闭页签
        if (separateClose === 'false') return;

        tabElm.appendChild(CloseIcon);
    }

    private _setTabDisabled(tabsTab: Element, disabled: boolean): void {
        if (!disabled) return;
        tabsTab.classList.add(`${PREFIX.tabs}-tab-disabled`);
    }

    private _setPaneKey(pane: Element, key: string, idx: number): void {
        // 当前面板的 key 如果不填则默认为其索引值
        // @ts-ignore
        pane.dataset.paneKey = !key ? idx : key;
    }

    private _setActive(args: [boolean, Element, Element, Element, string, number, string]): void {
        const [closable, paneContainer, tabsTab, pane, activekey, idx, animated] = args;

        // @ts-ignore
        const isEqual = activekey === pane.dataset.paneKey;

        if (isEqual) {
            this._changeTab(tabsTab);
            this._changePane([closable, paneContainer, idx]);
        }

        setCss(pane, 'visibility', `${isEqual ? 'visible' : 'hidden'}`);

        if (animated === 'false') {
            setCss(pane, 'display', `${isEqual ? 'block' : 'none'}`);
        }
    }

    private _handleToggle(args: [boolean, Element, Element, number, boolean, string]): void {
        const [closable, tabsTab, pane, idx, disabled, animated] = args;

        bind(tabsTab, 'click', () => {
            if (disabled) return false;

            this._changeTab(tabsTab);
            this._changePane([closable, pane.parentElement!, idx, animated, pane]);
        });
    }

    private _handleRemove(tabsTab: Element, pane: Element): void {
        const TabClose = tabsTab.querySelector(`.${PREFIX.tabs}-close`);

        if (!TabClose) return;

        /**
         * @param elm1 tabs的选项
         * @param elm2 tabs的面板
         */
        const changeActive = (elm1: Element, elm2: Element) => {
            if (tabsTab.classList.contains(`${PREFIX.tabs}-tab-active`)) {
                this._changeTab(elm1, false);
            }

            setCss(elm2, 'display', 'block');
            setCss(elm2, 'visibility', 'visible');
        };

        const removeEv = () => {
            const prevTab = tabsTab.previousElementSibling;
            const nextTab = tabsTab.nextElementSibling;
            const prevPane = pane.previousElementSibling;
            const nextPane = pane.nextElementSibling;

            if (nextTab && nextPane) {
                changeActive(nextTab, nextPane);
            } else if (prevTab && prevPane) {
                changeActive(prevTab, prevPane);
            }

            tabsTab.remove();
            pane.remove();
        };

        bind(TabClose, 'click', (e: Event) => {
            e.stopPropagation();
            removeEv();
        });
    }

    private _changeTab(tabsTab: Element, siblingsChange = true): void {
        tabsTab.classList.add(`${PREFIX.tabs}-tab-active`);
        tabsTab.classList.add(`${PREFIX.tabs}-tab-focused`);

        if (!siblingsChange) return;

        siblings(tabsTab).forEach((o) => {
            o.classList.remove(`${PREFIX.tabs}-tab-active`);
            o.classList.remove(`${PREFIX.tabs}-tab-focused`);
        });
    }

    private _changePane(args: [boolean, Element, number, string?, Element?]): void {
        const [closable, paneContainer, idx, animated, pane] = args;

        // 如果选项卡启用了可关闭功能，则不使用动画切换，这为了减少 tab 删除操作的工作量
        if (!closable) {
            const translateX = idx * 100;
            setCss(paneContainer, 'transform', `translateX(-${translateX}%)`);
        }

        // 是否要一并更改面板项
        if (!pane) return;

        setCss(pane, 'display', 'block');
        setCss(pane, 'visibility', 'visible');

        siblings(pane).forEach((o) => {
            if (animated === 'false' || closable) setCss(o, 'display', 'none');

            setCss(o, 'visibility', 'hidden');
        });
    }

    private _attrs(node: Element) {
        return {
            activeIndex: getStrTypeAttr(node, 'active-index', '0'),
            type: getStrTypeAttr(node, 'type', 'line'),
            size: getStrTypeAttr(node, 'size', 'default'),
            animated: getStrTypeAttr(node, 'animated', 'true'),
            closable: getBooleanTypeAttr(node, 'closable')
        };
    }

    private _paneAttrs(pane: Element) {
        return {
            tab: getStrTypeAttr(pane, 'tab', ''),
            index: getStrTypeAttr(pane, 'index', ''),
            icon: getStrTypeAttr(pane, 'icon', ''),
            closable: getStrTypeAttr(pane, 'closable', 'true'),
            disabled: getBooleanTypeAttr(pane, 'disabled')
        };
    }
}

export default Tabs;
