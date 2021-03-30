export default function siblings(elem: Element): any[] {
    const r = [];
    let n = elem.parentNode?.firstChild;
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
            r.push(n);
        }
    }
    return r;
}
