import { warn } from '.';

/**
 * 检查组件标签下是否具有一个父元素，
 * 不允许组件下有多个子节点用于添加额外内容，只有由一个节点组成。
 */
export default function moreThanOneNode(node: Element): boolean {
    if (node.childElementCount > 1) {
        warn(`The <${node.tagName.toLowerCase()}> tag must have a parent element`);
        return true;
    }
    return false;
}
