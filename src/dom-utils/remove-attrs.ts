/**
 * 移除组件标签的自定义属性
 * 1.非关联css的属性
 * 2.仅取值属性
 * 3.非业务逻辑代码要用的属性
 */
export default function removeAttrs(elem: Element, attrs: Array<string>): void {
    setTimeout(() => {
        let i = 0;
        const { length } = attrs;
        for (; i < length; i++) {
            const attr = attrs[i];
            elem.getAttribute(attr) || elem.getAttribute(attr) === ''
                ? elem.removeAttribute(attr)
                : null;
        }
    }, 0);
}
