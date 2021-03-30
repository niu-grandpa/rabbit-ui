// 更新popver弹窗或下拉菜单的箭头方向

import { $el } from '../dom-utils';

export function scrollUpdate(): void {
    const tooltips = $el('.rab-tooltip-popper', { all: true });
    const poptips = $el('.rab-poptip-popper', { all: true });

    const scrollEv = (target: NodeListOf<HTMLElement>) => {
        target.forEach((node: HTMLElement) => {
            const { popperPlacement } = node.dataset;
            const xPlacement = node.getAttribute('x-placement');

            if (xPlacement != popperPlacement) {
                node.setAttribute('x-placement', popperPlacement!);
            }
        });
    };

    // 当页面有这些组件存在时才做滚动监听
    if (tooltips.length > 0) {
        window.addEventListener('scroll', () => scrollEv(tooltips));
    }
    if (poptips.length > 0) {
        window.addEventListener('scroll', () => scrollEv(poptips));
    }
}

export function toggleUpdate(
    popper: HTMLElement,
    updateMode?: 'hover' | 'click' | 'focus',
    reference?: Element,
    delay?: number
): void {
    const setArrow = () => {
        const xPlacement = popper.getAttribute('x-placement');
        const { popperPlacement } = popper.dataset;

        if (popperPlacement) {
            if (xPlacement === popperPlacement) return;
            popper.setAttribute('x-placement', popperPlacement);
        }
    };

    if (reference) {
        if (updateMode === 'hover') {
            reference.addEventListener(updateMode, (e) => {
                e.stopPropagation();
                if (delay) {
                    setTimeout(() => {
                        setArrow();
                    }, delay);
                } else {
                    setArrow();
                }
            });
        } else if (updateMode === 'click') {
            reference.addEventListener('click', (e) => {
                e.stopPropagation();
                setArrow();
            });
        } else if (updateMode === 'focus') {
            reference.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                setArrow();
            });
        }
    }

    setArrow();
}
