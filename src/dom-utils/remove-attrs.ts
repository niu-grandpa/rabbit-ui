/**
 * 移除组件标签的自定义属性
 * 1.非关联css的属性
 * 2.仅取值属性
 * 3.非业务逻辑代码要用的属性
 */
export default function removeAttrs(elem: Element, attrs: Array<string>): void {
    const len = attrs.length;
    let i = 0,
        attrName = '';
    for (; i < len; i++) {
        attrName = attrs[i];
        if (elem.hasAttribute(attrName)) {
            elem.removeAttribute(attrName);
        }
    }
}
