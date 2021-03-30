/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { warn } from '../../mixins';
import { prevAll, nextAll, removeAttrs, $el, setText, setHtml } from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface StepsConfig {
    current: number;
    status?: 'wait' | 'process' | 'finish' | 'error';
}

interface StepConfig {
    idx?: number; // 要设置的第几个步骤，默认为0
    title?: string; // 设置标题
    content?: string; // 设置步骤的详细描述
}

interface Config {
    config(
        el: string
    ): {
        setSteps: ({ current, status }: StepsConfig) => void;
        setChildren: ({ idx, title, content }: StepConfig) => void;
    };
}

class Steps implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = '1.0';
        this.COMPONENTS = $el('r-steps', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        setSteps({ current, status }: StepsConfig): void;
        setChildren({ idx, title, content }: StepConfig): void;
    } {
        const target = $el(el);

        validComps(target, 'steps');

        const { _updateStatus, _getCurrent } = Steps.prototype;

        const oldCurrent = _getCurrent(target);

        return {
            setSteps({ current, status }: StepsConfig) {
                if (current !== oldCurrent) {
                    if (!current && current !== 0) {
                        warn('The current property is missing in the Steps configuration');
                        return;
                    } else if ((current && type.isNum(current)) || (status && type.isStr(status))) {
                        _updateStatus(target, current, status);
                    }
                }
            },
            setChildren({ idx, title, content }: StepConfig) {
                // 如果没有传入索引值则默认为第一个
                if (!idx) idx = 0;

                const ChildCurrent = target.children[idx];
                const ChildTitle = ChildCurrent.querySelector(`.${PREFIX.steps}-title`);
                const ChildContent = ChildCurrent.querySelector(`.${PREFIX.steps}-content`);

                if (title && type.isStr(title)) setText(ChildTitle, title);

                if (content && type.isStr(content)) setText(ChildContent, content);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            this._setDirection(node);
            this._updateStatus(node, this._getCurrent(node));
            this._createStepItem(node);
            removeAttrs(node, ['status']);
        });
    }

    private _createStepItem(node: Element): void {
        // 该父节点下的所有 r-step 标签
        const { children } = node;

        let i = 0;

        const { length } = children;

        for (; i < length; i++) {
            const child = children[i];
            const uid = `steps${i}`;
            const idxText = `${i + 1}`;
            const title = this._getTitle(child);
            const content = this._getContent(child);

            child.innerHTML = `
             <div class="${PREFIX.steps}-tail"><i></i></div>
             <div class="${PREFIX.steps}-head">
                 <div class="${PREFIX.steps}-head-inner">
                    <span data-steps-uid=${uid} data-step="current">${idxText}</span>
                 </div>
             </div>
             <div class="${PREFIX.steps}-main">
                 <div class="${PREFIX.steps}-title">${title}</div>
                 <div class="${PREFIX.steps}-content">${content}</div>
             </div>
            `;

            this._setCustomIcon(child);
            this._setNextErrorStatus(child);
            this._autoSetFinishOrErrorIcon(child, i);

            removeAttrs(child, ['title', 'content', 'icon']);
        }
    }

    private _setDirection(node: Element): void {
        if (!node.getAttribute('direction')) node.setAttribute('direction', 'horizontal');
    }

    private _updateStatus(parent: Element, current: number, status?: string): void {
        const _this = Steps.prototype;

        const total = parent.children.length - 1;
        const currentStep = parent.children[current];

        validComps(currentStep, 'step');
        _this._validIndexCheck(total, current, currentStep);

        const isParentStatus = parent.getAttribute('status');
        const isChildStatus = currentStep.getAttribute('status');

        let currentStatus: string;

        // 如果当前步骤没有状态则默认设为 process 状态
        if (!isParentStatus && !isChildStatus) {
            currentStatus = 'process';
            // 父节点有设置状态并且当前选中的子节点没有设置，则采用父节点的状态，否则反之
        } else if (isParentStatus && !isChildStatus) {
            currentStatus = isParentStatus;
        } else if (isChildStatus && isChildStatus !== 'wait') {
            currentStatus = isChildStatus;
        } else {
            currentStatus = 'process';
        }

        _this._setCurrentStatus(currentStep, !status ? currentStatus : status);
        _this._setPrevStatus(currentStep);
        _this._setNextStatus(currentStep);
        _this._setNextErrorStatus(currentStep);

        setTimeout(() => _this._autoSetFinishOrErrorIcon(currentStep, current), 0);
    }

    private _setCurrentStatus(node: Element, status?: string): void {
        if (status) {
            node.setAttribute('status', status);
        } else {
            // 如果没有设置status则默认为wait
            node.setAttribute('status', this._geStatus(node) || 'wait');
        }
    }

    private _setPrevStatus(node: Element): void {
        prevAll(node).forEach((prevNode) => {
            // 除去最开始的步骤，当前步骤是正在进行中的，那么它前面的状态一定是完成或者错误
            // 因此，前面的步骤不能随便的设为等待或进行中状态
            // 除了 error 状态其余前面的节点都覆盖为 finish 状态
            if (this._geStatus(prevNode) !== 'error') {
                this._setCurrentStatus(prevNode, 'finish');
            }
        });
    }

    private _setNextStatus(node: Element): void {
        // 从当前节点位置开始，设置其后面的所有节点状态为 wait
        nextAll(node).forEach((nextNode) => this._setCurrentStatus(nextNode));
    }

    private _setNextErrorStatus(node: Element): void {
        if (
            this._geStatus(node) === 'error' &&
            node.previousElementSibling &&
            this._geStatus(node.previousElementSibling) === 'error'
        ) {
            node.previousElementSibling.classList.add(`${PREFIX.steps}-next-error`);
        }
    }

    // 设置已被标记状态为成功或失败的图标
    private _autoSetFinishOrErrorIcon(node: Element, current: number): void {
        if (this._getIcon(node)) return;

        const prefixIconCls = `${PREFIX.steps}-icon ${PREFIX.icon} ${PREFIX.icon}-`;
        const currentStatus = this._geStatus(node);

        const setFinishOrErrorIcon = (status: string, children: Element): void => {
            if (status === 'finish' || status === 'error') {
                setHtml(children, '');

                if (status === 'finish') children.className = `${prefixIconCls}ios-checkmark`;

                if (status === 'error') children.className = `${prefixIconCls}ios-close`;
            }
        };

        // 判断当前选中的步骤的状态是完成还是错误
        if (currentStatus === 'finish' || currentStatus === 'error') {
            const uid = `[data-steps-uid=${current}]`;
            const HeadInner = node.querySelector(uid)!;
            setFinishOrErrorIcon(currentStatus, HeadInner);
        }

        // 判断之前的所有步骤的状态
        prevAll(node).forEach((prevNode) => {
            const prevStatus = this._geStatus(prevNode);

            // 如果之前的步骤的状态存在有完成或者是错误的则添加对应图标
            if (prevStatus === 'finish' || prevStatus === 'error') {
                const HeadInner = prevNode.querySelector('[data-step="current"]')!;
                setFinishOrErrorIcon(prevStatus, HeadInner);
            }
        });
    }

    private _setCustomIcon(node: Element): void {
        const iconType = this._getIcon(node);

        if (!iconType) return;

        node.classList.add(`${PREFIX.steps}-custom`);

        const child = node.querySelector(`.${PREFIX.steps}-head-inner`)!.children[0];

        setHtml(child, '');

        child.className = `${PREFIX.steps}-icon ${PREFIX.icon} ${PREFIX.icon}-${iconType}`;
    }

    private _getCurrent(node: Element): number {
        return Number(node.getAttribute('current')) || 0;
    }

    private _geStatus(node: Element): string | null {
        return node.getAttribute('status');
    }

    private _getTitle(node: Element): string {
        return node.getAttribute('title') || '';
    }

    private _getContent(node: Element): string {
        return node.getAttribute('content') || '';
    }

    private _getIcon(node: Element): string {
        return node.getAttribute('icon') || '';
    }

    // 判断设置的索引值是否超过了最大索引值
    private _validIndexCheck(total: number, current: number, inode: Element): void {
        // 如果超过最大索引值则该节点是不存在的
        if (!inode) {
            warn(
                `The current total number of steps is only ${total}, you cannot set it to ${current}`
            );
            return;
        }
    }
}

export default Steps;
