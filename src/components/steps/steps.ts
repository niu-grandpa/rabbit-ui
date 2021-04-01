/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    getNumTypeAttr,
    getStrTypeAttr,
    nextAll,
    prevAll,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { warn } from '../../mixins';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        current: number;
        title: string;
        content: string;
        status: string;
        itemStatus: string[];
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
        current: number;
        title: string;
        content: string;
        status: string;
        itemStatus: string[];
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'steps');

        const { _setCurrentStep, _setStatus, _setStatusIcon } = Steps.prototype;

        const _current = target.dataset['current']!;
        const StepsTitle = target.querySelector(`.${PREFIX.steps}-title`)!;
        const StepsContent = target.querySelector(`.${PREFIX.steps}-content`)!;
        const StepsStep = target.querySelectorAll('r-step')!;

        const setTitleOrContent = (elem: Element, val: string) => {
            if (val && !type.isStr(val)) return;
            setHtml(elem, val);
        };

        return {
            get current() {
                return Number(target.dataset['current']);
            },
            set current(newVal: number) {
                if (!type.isNum(newVal)) return;
                _setCurrentStep(target, newVal, target.dataset['status']!);
            },

            get title() {
                return setHtml(StepsTitle);
            },

            set title(newVal: string) {
                setTitleOrContent(StepsTitle, newVal);
            },

            get content() {
                return setHtml(StepsContent);
            },
            set content(newVal: string) {
                setTitleOrContent(StepsContent, newVal);
            },

            get status() {
                return target.dataset['status']!;
            },
            set status(newVal: string) {
                if (newVal && !type.isStr(newVal)) return;

                const currentStep = target.querySelector(`r-step[data-index="${_current}"]`)!;

                _setStatus(target, currentStep, newVal);
            },

            get itemStatus() {
                return [];
            },
            set itemStatus(newVal: string[]) {
                if (newVal && !type.isArr(newVal)) return;

                const changeStatus = (elem: Element, status: string) => {
                    elem.setAttribute('status', status);
                    _setStatusIcon(status, elem);
                };

                if (newVal.length == 1) {
                    const step = StepsStep[0];
                    changeStatus(step, newVal[0]);
                    return;
                }

                StepsStep.forEach((step, idx) =>
                    newVal[idx] ? changeStatus(step, newVal[idx]) : ''
                );
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { current, status, direction } = this._attrs(node);
            const StepsStepItem = node.querySelectorAll('r-step');

            this._setDirection(node, direction);
            this._setStepChildren(StepsStepItem);
            this._setCurrentStep(node, current, status);

            removeAttrs(node, ['current', 'status']);
        });
    }

    private _setDirection(node: Element, direction: string): void {
        node.setAttribute('direction', `${direction}`);
    }

    private _setStepChildren(stepItem: NodeListOf<Element>): void {
        stepItem.forEach((step, idx) => {
            // @ts-ignore
            step.dataset['index'] = `${idx}`;

            this._setStatusFlag(step);

            const { icon, title, content } = this._attrs(step);

            const stepsText = idx + 1;

            const template = `
             <div class="${PREFIX.steps}-tail"><i></i></div>
             <div class="${PREFIX.steps}-head">
                <div class="${PREFIX.steps}-head-inner">
                   <span id="stepsIcon"></span>
                   <span id="stepsText">${stepsText}</span>
                </div>
             </div>
             <div class="${PREFIX.steps}-main">
                <div class="${PREFIX.steps}-title">${title}</div>
                <div class="${PREFIX.steps}-content">${content}</div>
             </div>
            `;

            setHtml(step, template);

            this._setCustomIcon(step, icon);

            removeAttrs(step, ['title', 'content', 'icon']);
        });
    }

    private _setStatusFlag(step: Element): void {
        const status = step.getAttribute('status');

        // 如果用户在步骤项设置了status则为该项打上标记，避免被自动设置的默认状态覆盖
        if (status) {
            // @ts-ignore
            step.dataset['specifiesStatus'] = status;
        }
    }

    private _setCurrentStep(node: Element, current: number, status: string): void {
        const len = node.childElementCount - 1;
        // 防止溢出边界
        if (current > len) {
            warn(
                `The currently active step item you set does not exist in the <r-steps>. --> "${current}"`
            );
            console.error(node);
            current = len;
        }

        // @ts-ignore
        node.dataset['current'] = current;

        const { _setStatus } = Steps.prototype;
        const currentStep = node.querySelector(`r-step[data-index="${current}"]`)!;

        _setStatus(node, currentStep, status);
    }

    private _setStatus(node: Element, currentStep: Element, status: string): void {
        // @ts-ignore
        node.dataset['status'] = status;

        const { _setStatusIcon, _setPrevAndNextStatus, _setNextError } = Steps.prototype;

        // @ts-ignore
        const isAutoStatus = currentStep.dataset['autoStatus'];
        const selfStatus = currentStep.getAttribute('status');

        // 1.如果步骤项设置了status则优先使用该状态，不包括打上autoStatus的标记项。
        // 2.如果步骤项父容器指定了某项步骤项为活跃状态，并且指定了 status 则使用该状态。
        if (selfStatus && isAutoStatus !== '') {
            currentStep.setAttribute('status', selfStatus);
            _setStatusIcon(selfStatus, currentStep);
        } else {
            currentStep.setAttribute('status', status);
            _setStatusIcon(status, currentStep);
        }

        _setPrevAndNextStatus('prev', currentStep, _setStatusIcon);
        _setPrevAndNextStatus('next', currentStep, _setStatusIcon);
        _setNextError(node);
    }

    private _setPrevAndNextStatus(
        type: 'prev' | 'next',
        currentStep: Element,
        setStatusIcon: any
    ): void {
        // @ts-ignore
        const func = type === 'prev' ? prevAll : nextAll;
        const defaultStatus = type === 'prev' ? 'finish' : 'wait';

        func(currentStep).forEach((step) => {
            // @ts-ignore
            const hasSetStatus = step.dataset['specifiesStatus'];

            // 当前步骤项位置的其他节点如果没有提示设置status，则默认设置为 finish / wait，并打上标记
            // 如果其中有某个设置了则略过
            if (!hasSetStatus) {
                // @ts-ignore
                step.dataset['autoStatus'] = '';
                step.setAttribute('status', defaultStatus);

                setStatusIcon(defaultStatus, step);
            } else {
                setStatusIcon(hasSetStatus, step);
            }
        });
    }

    private _setStatusIcon(status: string, step: Element): void {
        // @ts-ignore
        const isUseCustomIcon: boolean = step.dataset['useIcon'] === 'true';

        // 如果使用了自定义图标则略过
        if (isUseCustomIcon) return;

        const StepsIcon = step.querySelector('#stepsIcon')!;
        const StepsText = StepsIcon.nextElementSibling!;

        // 步骤项状态不为finish或error则显示步骤数字、隐藏图标容器，反之。
        if (status !== 'finish' && status !== 'error') {
            setCss(StepsIcon, 'display', 'none');
            setCss(StepsText, 'display', '');
            return;
        }

        setCss(StepsIcon, 'display', '');
        setCss(StepsText, 'display', 'none');

        let iconType = '';

        if (status === 'finish') {
            iconType = 'ios-checkmark';
        }
        if (status === 'error') {
            iconType = 'ios-close';
        }

        StepsIcon.className = `${PREFIX.steps}-icon ${PREFIX.icon} ${PREFIX.icon}-${iconType}`;
    }

    private _setCustomIcon(step: Element, icon: string): void {
        if (!icon) return;

        // @ts-ignore
        step.dataset['useIcon'] = 'true';
        step.classList.add(`${PREFIX.steps}-custom`);

        const StepsIcon = step.querySelector('#stepsIcon')!;

        StepsIcon.classList.add(`${PREFIX.icon}`);
        StepsIcon.classList.add(`${PREFIX.icon}-${icon}`);

        setCss(StepsIcon.nextElementSibling!, 'display', 'none');
    }

    private _setNextError(node: Element): void {
        const StepsStep = node.querySelectorAll('r-step');

        StepsStep.forEach((step, idx) => {
            if (step.getAttribute('status') === 'error' && idx !== 0) {
                const prevStep = StepsStep[idx - 1];

                if (prevStep.getAttribute('status') === 'error') {
                    prevStep.classList.add(`${PREFIX.steps}-next-error`);
                } else {
                    prevStep.classList.remove(`${PREFIX.steps}-next-error`);
                }
            }
        });
    }

    private _attrs(node: Element) {
        return {
            current: getNumTypeAttr(node, 'current', 0),
            icon: getStrTypeAttr(node, 'icon', ''),
            title: getStrTypeAttr(node, 'title', ''),
            status: getStrTypeAttr(node, 'status', 'process'),
            content: getStrTypeAttr(node, 'content', ''),
            direction: getStrTypeAttr(node, 'direction', 'horizontal')
        };
    }
}

export default Steps;
