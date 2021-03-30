import { $el, createElem, removeAttrs, setCss, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';

class Timeline {
    readonly VERSION: string;
    readonly COMPONENTS: any;

    constructor() {
        this.VERSION = '1.0';
        this.COMPONENTS = $el('r-timeline > r-timeline-item', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const TimelineItem = node;

            const TimelineTail = createElem('div');
            const TimelineHead = createElem('div');
            const TimelineContent = createElem('div');

            this._setCls(TimelineTail, TimelineHead, TimelineContent);
            this._setColor(TimelineItem, TimelineHead);
            this._setDot(TimelineItem, TimelineHead);
            this._setContent(TimelineItem, TimelineContent);

            TimelineItem.append(TimelineTail, TimelineHead, TimelineContent);

            removeAttrs(TimelineItem, ['dot']);
        });
    }

    private _setCls(node1: HTMLElement, node2: HTMLElement, node3: HTMLElement): void {
        node1.className = `${PREFIX.timeline}-item-tail`;
        node2.className = `${PREFIX.timeline}-item-head`;
        node3.className = `${PREFIX.timeline}-item-content`;
    }

    private _setContent(parent: Element, node1: HTMLElement): void {
        setHtml(node1, parent.innerHTML);
        // 清空原先的内容
        setHtml(parent, '');
    }

    private _setColor(parent: Element, node: HTMLElement): void {
        const colors = this._getStatusColor(parent);

        // 设置预设颜色或者自定义颜色
        if (colors === 'blue' || colors === 'red' || colors === 'gray' || colors === 'green') {
            node.classList.add(`${PREFIX.timeline}-item-head-${colors}`);
        } else {
            setCss(node, 'color', colors);
            setCss(node, 'borderColor', colors);
        }
    }

    // 自定义时间轴点的内容
    private _setDot(parent: Element, node: HTMLElement): void {
        if (!this._getDotContent(parent)) return;

        node.classList.add(`${PREFIX.timeline}-item-head-custom`);

        const content = this._getDotContent(parent);
        setHtml(node, content);
    }

    private _getStatusColor(node: Element): string {
        return node.getAttribute('color') || 'blue';
    }

    private _getDotContent(parent: Element): string {
        return parent.getAttribute('dot') || '';
    }
}

export default Timeline;
