/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * 解决事件监听兼容性问题
 * @param {Object} obj对象
 * @param {String} type事件类型,不带'on'前缀
 * @param {Function} callback事件处理程序
 */
export function bind(obj: Element | HTMLElement | Window | any, type: string, callback: any): void {
    if (obj.addEventListener) {
        // W3C内核
        obj.addEventListener(type, callback);
    } else {
        // IE内核
        obj.attachEvent(`on${type}`, callback);
    }
}

/**
 * 解决移除事件监听兼容性问题
 * @param {Object} obj对象
 * @param {String} type事件类型,不带'on'前缀
 * @param {Function} callback事件处理程序
 */
export function unbind(obj: Element | HTMLElement | Window | any, type: string, callback: any) {
    if (obj.removeEventListener) {
        // W3C内核
        obj.removeEventListener(type, callback);
    } else {
        // IE内核
        obj.detachEvent(`on${type}`, callback);
    }
}
