import { warn, CssTransition } from '../mixins';

interface Options {
    key?: string | number;
    prefixKey?: string;
    fadeOut?: boolean;
    clsLeave?: string;
    clsEnter?: string;
    destroy?: boolean;
    duration?: number;
    transitionTime?: number;
}

export function destroyElem(
    elem: any,
    {
        fadeOut = false,
        clsLeave,
        clsEnter,
        duration = 3,
        transitionTime = 250,
        destroy = true
    }: Options
): void {
    let timer = null;

    // 方式一：是否只用淡出效果
    if (fadeOut) {
        isDismiss();
        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: 'rab-fade-in',
            leaveCls: 'rab-fade-out',
            timeout: 250
        });
        return;
    }

    // 方式二：手动配置过渡效果和过渡时间
    timer = setTimeout(() => {
        isDismiss();
        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: clsEnter,
            leaveCls: clsLeave,
            timeout: transitionTime
        });
    }, duration * 1000);

    // 自动关闭的延时为 0 则不关闭
    duration <= 0 ? clearTimeout(timer) : timer;

    // 判断需要销毁或者是仅隐藏元素
    function isDismiss() {
        setTimeout(() => {
            if (destroy) {
                elem.remove();
                elem = null; // 释放内存
            }
        }, transitionTime);
    }
}

export function destroyElemByKey(options: Options): void {
    const { prefixKey } = options;
    let { key } = options;
    // 统一转换为字符串
    typeof key !== 'string' ? (key = key?.toString()) : key;
    // 传入的key是否选取得到对应的元素
    const target = document.querySelector(`[${prefixKey}-key="${key}"]`);
    target ? destroyElem(target, options) : warn(`The key value is invalid --> "${key}"`);
}
