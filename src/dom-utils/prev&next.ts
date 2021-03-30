/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function prevAll(el: Element): Element[] {
    const Parent = el.parentElement;
    const Child = Parent!.children;
    const prevChildren = [];

    let i = 0;
    const { length } = Child;

    for (; i < length; i++) {
        const _child = Child[i];
        if (_child == el) {
            break;
        }
        prevChildren.push(_child);
    }
    return prevChildren;
}

export function nextAll(el: Element): Element[] {
    const Parent = el.parentElement;
    const Child = Parent!.children;
    const nextChildren = [];

    const { length } = Child;
    const start = 0;
    let i = length - 1;

    for (; i >= start; i--) {
        const _child = Child[i];
        if (_child == el) {
            break;
        }
        nextChildren.unshift(_child);
    }
    return nextChildren;
}
