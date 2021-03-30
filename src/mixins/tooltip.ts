import { createPopper } from '@popperjs/core';
import { bind, unbind } from '../dom-utils';
import { type } from '../utils';

export function _newCreatePopper(
    reference: Element,
    popper: HTMLElement,
    placement: string | any,
    offset: number
): any {
    return createPopper(reference, popper, {
        placement: placement, // 设置位置
        modifiers: [
            {
                name: 'computeStyles',
                options: {
                    gpuAcceleration: false // 使用top/left属性。否则会和弹出器动画冲突
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: false // 避免重新计算弹出器位置从而造成位置牛头不对马嘴
                }
            },
            {
                name: 'offset',
                options: {
                    offset: [offset] // 自定义弹出器出现位置的偏移量
                }
            }
        ]
    });
}

interface handleOptions {
    reference: Element;
    popper: Element | any;
    datasetVal: string;
    showCb: any;
    hideCb: any;
    delay: number;
    timer: any;
}

export function handleHoverShowAndHideEvents({
    reference,
    popper,
    datasetVal,
    showCb,
    hideCb,
    delay,
    timer
}: handleOptions): void {
    bind(reference, 'mouseenter', () => {
        timer = setTimeout(() => {
            showEv();
        }, delay);
    });

    bind(reference, 'mouseleave', hideEv);

    // 通过设置 popper.dataset.tooltipShow 的方式可以判断提示框是否显示，
    // 并根据设置的值 "true" 和 "false" 来判断是否执行对应回调事件，
    // 避免出现鼠标快速经过但没有显示提示框，却依然执行了提示框消失时触发的回调

    function showEv(): void {
        popper.dataset[datasetVal] = 'show';
        showCb && type.isFn(showCb);
    }

    function hideEv(): void {
        clearTimeout(timer);

        if (popper.dataset[datasetVal] === 'show') {
            popper.dataset[datasetVal] = 'hide';
            hideCb && type.isFn(hideCb);
        }

        unbind(reference, 'mouseenter', showEv);
    }
}
