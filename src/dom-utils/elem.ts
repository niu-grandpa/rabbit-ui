/**
 * 获取元素
 * @param node
 * @param options 选项 all 表示是否获取所有节点
 */
export function $el(
    node: string | Element | any,
    options?: { all: boolean }
): Element | HTMLElement | null | NodeListOf<any> | NodeListOf<Element> | any {
    if (options?.all) {
        return document.querySelectorAll(node);
    } else {
        return document.querySelector(node);
    }
}

export function createElem(tagName: string): HTMLElement {
    return document.createElement(tagName);
}

export function setCss(node: Element | HTMLElement | any, styeName: string, value: string): string {
    return (node.style[styeName] = value);
}

export function setHtml(node: Element, value?: string): string {
    if (value || value === '') {
        return (node.innerHTML = value);
    } else {
        return node.innerHTML;
    }
}

export function setText(node: Element, value?: string): string {
    if (value || value === '') {
        return (node.textContent = value);
    } else {
        return node.textContent || '';
    }
}

// 通用的标签属性获取方法
// 获取后的值由原先的字符串类型转换成对应类型

// Return String type
export function getStrTypeAttr(node: Element, attrName: string, defaultVal: string): string | any {
    return node.getAttribute(attrName) || defaultVal;
}

// Return Boolean type
export function getBooleanTypeAttr(node: Element, attrName: string): boolean {
    return node.getAttribute(attrName) === 'true';
}

// Return Number type
export function getNumTypeAttr(node: Element, attrName: string, defaultVal?: number): number | any {
    return Number(node.getAttribute(attrName)) || defaultVal;
}

// Return Array type
export function getArrTypeAttr(node: Element, attrName: string): Array<string | number> {
    const attr = node.getAttribute(attrName)?.replace(/'/g, '"') || '[]';
    const array: [string | number] = JSON.parse(attr);

    return array;
}
