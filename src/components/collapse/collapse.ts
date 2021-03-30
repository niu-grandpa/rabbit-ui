import PREFIX from '../prefix';
import {
    getArrTypeAttr,
    getBooleanTypeAttr,
    getStrTypeAttr,
    setCss,
    setHtml
} from '../../dom-utils/elem';
import { $el, bind, removeAttrs, siblings, slider } from '../../dom-utils';
import { type, validComps } from '../../utils';

interface CollapseEvents {
    onChange?: (key: []) => void;
}

interface Config {
    config(
        el: string
    ): {
        activeKey: string | number | string[] | number[];
        events({ onChange }: CollapseEvents): void;
    };
}

class Collapse implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-collapse', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        activeKey: string | number | string[] | number[];
        events({ onChange }: { onChange: (key: []) => void }): void;
    } {
        const target = $el(el);

        validComps(target, 'collapse');

        const { _attrs, _dataSetActiveKey, _openByKey } = Collapse.prototype;

        const activeKey = JSON.parse(target.dataset.activeKey);

        return {
            get activeKey() {
                return activeKey;
            },
            set activeKey(newVal: string | number | string[] | number[]) {
                if (newVal == activeKey) return;

                _dataSetActiveKey(target, newVal);
                _openByKey(target, newVal, target.getAttribute('accordion'));
            },
            events({ onChange }) {
                const panels = target.querySelectorAll('r-collapse-panel');

                // 储存已展开面板的 key
                const key: string[] = [];

                const pushKey = (el: Element, toggle: boolean) => {
                    const { accordion } = _attrs(target);
                    // @ts-ignore
                    const panelKey = el.dataset.panelKey;

                    if (el.classList.contains(`${PREFIX.collapse}-item-active`)) {
                        key.push(panelKey);
                    } else if (toggle) {
                        const idx = key.indexOf(panelKey);
                        idx > -1 ? key.splice(idx, 1) : '';
                    }

                    // 手风琴模式下每展开一个面板就删除其他的 key
                    if (accordion) {
                        siblings(el).forEach((o) => {
                            const otherIdx = key.indexOf(o.dataset.panelKey);
                            otherIdx > -1 ? key.splice(otherIdx, 1) : '';
                        });
                    }
                };

                panels.forEach((panel: Element) => {
                    const header = panel.querySelector(`.${PREFIX.collapse}-header`);

                    // 存放初始化面板时默认已展开的 key
                    pushKey(panel, false);

                    bind(header, 'click', () => {
                        // 这里用定时器是为了跟移除显示面板样式类名的时机同步
                        setTimeout(() => {
                            pushKey(panel, true);
                            onChange && type.isFn(onChange, key);
                        }, 150);
                    });
                });
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { simple, ghost, defaultactivekey, accordion } = this._attrs(node);

            this._dataSetActiveKey(node, defaultactivekey);
            this._setGhost(node, ghost);
            this._setSimple(node, simple);
            this._createChildNodes(node);
            this._openByKey(node, defaultactivekey, accordion);

            removeAttrs(node, ['simple', 'ghost', 'defaultactivekey']);
        });
    }

    private _dataSetActiveKey(
        node: Element,
        activeKey: string | number | string[] | number[]
    ): void {
        if (activeKey) {
            // @ts-ignore
            node.dataset['activeKey'] = Array.isArray(activeKey) ? `[${activeKey}]` : activeKey;
        }
    }

    private _setGhost(node: Element, ghost: boolean): void {
        ghost ? node.classList.add(`${PREFIX.collapse}-ghost`) : '';
    }

    private _setSimple(node: Element, simple: boolean): void {
        simple ? node.classList.add(`${PREFIX.collapse}-simple`) : '';
    }

    private _createChildNodes(node: Element): void {
        const collapsePanels = node.querySelectorAll('r-collapse-panel');
        this._setPanel(node, collapsePanels);
    }

    private _setPanel(parent: Element, panels: NodeListOf<Element>): void {
        // 遍历所有面板节点
        panels.forEach((panel, index) => {
            const { key, title, hideArrow } = this._attrs(panel);

            // @ts-ignore
            // 面板的 key 如果没填则默认为索引值
            panel.dataset.panelKey = !key ? index : key;

            // 保存面板原先的第一个节点，也就是要填充的内容
            const content = panel.firstElementChild;

            const arrowIcon = `<i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-forward"></i>`;

            const template = `
                 <div class="${PREFIX.collapse}-header">
                    ${!hideArrow ? arrowIcon : ''} ${title}
                 </div>
                 <div class="${PREFIX.collapse}-content">
                    <div class="${PREFIX.collapse}-content-box"></div>
                 </div>`;

            // 清空面板原先的所有内容
            setHtml(panel, '');
            // 追加html模板
            setHtml(panel, template);

            // 将原先的占位内容填充至面板内容盒子
            const panelContentBox = panel.querySelector(`.${PREFIX.collapse}-content-box`);

            content ? panelContentBox?.appendChild(content) : null;

            setCss(panel, 'display', 'block');

            this._handleToggle(parent, panel);

            removeAttrs(panel, ['key', 'title', 'hide-arrow']);
        });
    }

    private _handleToggle(parent: Element, panel: Element): void {
        const { accordion } = this._attrs(parent);

        const collapseHeader = panel.querySelector(`.${PREFIX.collapse}-header`);
        const collapseContent = panel.querySelector(`.${PREFIX.collapse}-content`);

        bind(collapseHeader, 'click', () => this._slide(panel, collapseContent!, accordion));
    }

    private _slide(p: Element, c: Element, accordion: boolean): void {
        const activeCls = `${PREFIX.collapse}-item-active`;

        const slideUp = (arg1: Element, arg2: Element) => {
            slider.slideUp(arg2, 150);
            setTimeout(() => {
                arg1.classList.remove(activeCls);
            }, 150);
        };

        if (p.classList.contains(activeCls)) {
            slideUp(p, c);
        } else {
            slider.slideDown(c, 150);
            p.classList.add(activeCls);
        }

        // 手风琴模式
        if (accordion) {
            // 获取除了已展开的面板外的所有其他面板
            siblings(p).forEach((otherP) => {
                const otherC = otherP.querySelector(`.${PREFIX.collapse}-content`);
                slideUp(otherP, otherC);
            });
        }
    }

    private _openByKey(
        node: Element,
        key: string | number | string[] | number[],
        accordion: boolean
    ): void {
        // 获取选中的 key 的面板
        let selected: Element | null;

        const open = () => {
            if (selected) {
                selected.classList.add(`${PREFIX.collapse}-item-active`);

                if (accordion) {
                    siblings(selected).forEach((o) => {
                        o.classList.remove(`${PREFIX.collapse}-item-active`);
                    });
                }
            }
        };

        // 如果 activeKey 是数组则对其进行遍历获取所有面板
        // 且如果是手风琴模式则只选取数组的第一项，只展开一个面板
        if (Array.isArray(key)) {
            const { length } = key;
            // length == 1 说明数组只有一项所以不必对其进行遍历
            if (accordion || length == 1) {
                selected = node.querySelector(`[data-panel-key="${key[0]}"]`);
                open();
            } else {
                let i = 0;
                for (; i < length; i++) {
                    selected = node.querySelector(`[data-panel-key="${key[i]}"]`);
                    open();
                }
            }
        } else {
            selected = node.querySelector(`[data-panel-key="${key}"]`);
            open();
        }
    }

    private _attrs(node: Element) {
        return {
            key: getStrTypeAttr(node, 'key', ''),
            title: getStrTypeAttr(node, 'title', ''),
            ghost: getBooleanTypeAttr(node, 'ghost'),
            simple: getBooleanTypeAttr(node, 'simple'),
            hideArrow: getBooleanTypeAttr(node, 'hide-arrow'),
            accordion: getBooleanTypeAttr(node, 'accordion'),
            defaultactivekey:
                getStrTypeAttr(node, 'defaultactivekey', '') &&
                getArrTypeAttr(node, 'defaultactivekey')
        };
    }
}

export default Collapse;
