import { bind } from '../dom-utils';

/**
 * 用于点击外部关闭下拉菜单或气泡提示框
 * @param elem
 * @param callback 关闭事件回调
 * @param child
 * @param datasetKey
 * @param datasetVal 要被关闭的对象状态是否已经处于打开状态，如果是那么点击其以外的区域才执行事件回调
 */
export default function clickOutside(
    elem: Element,
    callback: (arg?: any) => any,
    child?: Element,
    datasetKey?: string,
    datasetVal?: string
): void {
    const ev = (e: Event) => {
        if (datasetKey) {
            if (child) {
                // @ts-ignore
                child.dataset[datasetKey] === datasetVal && callback(e);
            } else {
                // @ts-ignore
                child.dataset[datasetKey] === datasetVal && callback(e);
            }
        } else {
            callback();
        }
    };

    bind(document, 'click', (e: Event) => ev(e));
    bind(elem, 'click', (e: MouseEvent) => e.stopPropagation());
}
