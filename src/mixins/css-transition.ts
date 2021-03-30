/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
interface Config {
    inOrOut?: 'in' | 'out'; // 进场或者出场
    enterCls?: 'rab-fade-in' | string; // 进场动画
    leaveCls?: 'rab-fade-out' | string; // 出场动画
    rmCls?: boolean; // 动画结束后是否移除动画类名
    timeout?: number; // 过渡效果的持续时间
    hiddenParent?: Element | HTMLElement | any; // 是否将父元素一起隐藏
}

export default function CssTransition(
    elem: any,
    { enterCls, leaveCls, inOrOut, rmCls, timeout, hiddenParent }: Config
): void {
    const removeClassAfterTransition = (aniClassName: string): void => {
        if (rmCls) {
            setTimeout(() => {
                aniClassName ? elem.classList.remove(aniClassName) : '';
            }, timeout);
        }
    };

    if (inOrOut === 'in') {
        // 如果父元素被隐藏则变为显示
        if (hiddenParent) {
            hiddenParent.style.display = '';
            hiddenParent.style.opacity = '1';
        }

        if (elem.style.display === 'none') elem.style.display = '';
        if (elem.style.opacity === '0') elem.style.opacity = '1';

        elem.classList.add(enterCls);

        removeClassAfterTransition(enterCls!);
    } else if (inOrOut === 'out') {
        if (elem.classList.contains(enterCls)) {
            elem.classList.replace(enterCls, leaveCls);
        } else {
            elem.classList.add(leaveCls);
        }

        removeClassAfterTransition(leaveCls!);

        // 过渡效果持续时间后隐藏元素
        setTimeout(() => {
            if (hiddenParent) hiddenParent.style.display = 'none';
            elem.style.display = 'none';
            elem.style.opacity = '0';
        }, timeout);
    }
}
