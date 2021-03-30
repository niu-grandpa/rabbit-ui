import { CssTransition } from '.';
import { bind } from '../dom-utils';

/**
 * 适用tooltip、poptip的点击空白处关闭
 */
export default function clickOutside(
    target: NodeListOf<HTMLElement>,
    datasetVal: string,
    leaveCls: string
): void {
    const hideJudgment = () => {
        target.forEach((node) => {
            if (node.dataset[datasetVal] === 'true') {
                node.dataset[datasetVal] = 'false';
                CssTransition(node, {
                    inOrOut: 'out',
                    rmCls: true,
                    leaveCls,
                    timeout: 200
                });
            }
        });
    };

    bind(document, 'focusout', (e: any) => {
        e.stopPropagation();
        hideJudgment();
    });

    bind(document, 'click', (e: any) => {
        e.stopPropagation();
        hideJudgment();
    });
}
