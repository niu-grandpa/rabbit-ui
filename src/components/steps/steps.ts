/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    getNumTypeAttr,
    getStrTypeAttr,
    nextAll,
    prevAll,
    removeAttrs,
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

        const { _setActiveStep, _setStatus } = Steps.prototype;

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

                _setActiveStep(target, newVal, target.dataset['status']!);
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

                const current = target.dataset['current']!;
                const defaultStatus = target.dataset['status']!;

                const currentStep = target.querySelector(`r-step[data-index="${current}"]`)!;

                _setStatus(target, currentStep, newVal, defaultStatus, true);
            },

            get itemStatus() {
                return [];
            },
            set itemStatus(newVal: string[]) {
                if (newVal && !type.isArr(newVal)) return;

                const changeStatus = (step: Element, newStatus: string) =>
                    _setStatus(target, step, newStatus, 'process', false, newStatus);

                if (newVal.length == 1) {
                    if (newVal[0]) changeStatus(StepsStep[0], newVal[0]);
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
            this._setActiveStep(node, current, status);

            removeAttrs(node, ['current', 'status']);
        });
    }

    private _setDirection(node: Element, direction: string): void {
        node.setAttribute('direction', `${direction}`);
    }

    private _setStepChildren(stepItem: NodeListOf<Element>): void {
        stepItem.forEach((step, idx) => {
            const { icon, title, content } = this._attrs(step);

            const stepNumber = idx + 1;

            const template = `
             <div class="${PREFIX.steps}-tail"><i></i></div>
             <div class="${PREFIX.steps}-head">
                <div class="${PREFIX.steps}-head-inner">
                   <span id="showIconOrNums">${stepNumber}</span>
                </div>
             </div>
             <div class="${PREFIX.steps}-main">
                <div class="${PREFIX.steps}-title">${title}</div>
                <div class="${PREFIX.steps}-content">${content}</div>
             </div>
            `;

            // @ts-ignore
            step.dataset['index'] = `${idx}`;

            setHtml(step, template);

            this._setCustomIcon(step, icon);

            removeAttrs(step, ['title', 'content', 'icon']);
        });
    }

    private _setCustomIcon(step: Element, icon: string): void {
        if (!icon) return;

        // @ts-ignore
        step.dataset['useIcon'] = 'true';
        step.classList.add(`${PREFIX.steps}-custom`);

        const container = step.querySelector('#showIconOrNums')!;
        container.className = `${PREFIX.steps}-icon ${PREFIX.icon} ${PREFIX.icon}-${icon}`;
        setHtml(container, '');
    }

    private _setActiveStep(node: Element, current: number, status: string): void {
        const len = node.childElementCount - 1;

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

        const activeStep = node.querySelector(`r-step[data-index="${current}"]`) as HTMLElement;
        // @ts-ignore
        const activeStatus = node.dataset['status'];

        // @ts-ignore
        _setStatus(node, activeStep, status, 'process', true, activeStatus);

        // 当前活跃状态步骤项的前面所有项
        prevAll(activeStep).forEach((prevStep) => {
            // @ts-ignore
            _setStatus(node, prevStep, status, 'finish');

            if (activeStep.getAttribute('status') === 'error') {
                if (prevStep.getAttribute('status') === 'error') {
                    prevStep.classList.add(`${PREFIX.steps}-next-error`);
                }
            }
        });

        // 当前活跃状态步骤项的后面所有项
        nextAll(activeStep).forEach((nextStep) => {
            // @ts-ignore
            _setStatus(node, nextStep, status, 'wait');

            if (activeStep.getAttribute('status') !== 'error') return;
            if (nextStep.getAttribute('status') === 'error') return;
            if (!nextStep.nextElementSibling) return;
            if (nextStep.nextElementSibling.getAttribute('status') !== 'error') return;

            nextStep.classList.add(`${PREFIX.steps}-next-error`);
        });

        if (activeStep.getAttribute('status') === 'error') {
            const elem = activeStep.previousElementSibling || activeStep;
            elem.classList.add(`${PREFIX.steps}-next-error`);
        }
    }

    private _setStatus(
        node: Element,
        step: Element,
        status: string,
        defaultStatus: string,
        isActive?: boolean,
        newSetStatus?: string
    ): void {
        newSetStatus ? step.setAttribute('status', newSetStatus) : '';

        const { _setStatusIcon, _setNextErrorStatus } = Steps.prototype;
        const selfStatus = step.getAttribute('status');

        // 1.步骤项设置了 status 属性指定状态则优先使用该状态
        // 2.步骤项父的容器指定了当前某项步骤项为活跃状态，并且指定了 status 则使用该状态
        // 3.如果都不符合以上条件就使用默认状态
        if (selfStatus) {
            step.setAttribute('status', selfStatus);
            _setStatusIcon(selfStatus, step);
        } else if (isActive && status) {
            step.setAttribute('status', status);
            _setStatusIcon(status, step);
        } else {
            step.setAttribute('status', defaultStatus);
            _setStatusIcon(defaultStatus, step);
        }

        _setNextErrorStatus(node);

        // @ts-ignore
        node.dataset['status'] = status;
    }

    private _setNextErrorStatus(node: Element): void {
        const hasErrorStep = node.querySelectorAll('r-step[status="error"]');
        const { length } = hasErrorStep;

        if (hasErrorStep.length > 1) {
            const lastElem = hasErrorStep[length - 1];
            const curPrevElem = lastElem.previousElementSibling || hasErrorStep[0];
            if (curPrevElem?.getAttribute('status') === 'error') {
                curPrevElem.classList.add(`${PREFIX.steps}-next-error`);
            }
        }
    }

    private _setStatusIcon(status: string, step: Element): void {
        // @ts-ignore
        const isUseCustomIcon: boolean = step.dataset['useIcon'] === 'true';

        if (isUseCustomIcon) return;
        if (status !== 'finish' && status !== 'error') return;

        const container = step.querySelector('#showIconOrNums')!;
        container.className = `${PREFIX.steps}-icon ${PREFIX.icon}`;
        setHtml(container, '');

        let iconType = '';
        if (status === 'finish') {
            iconType = 'ios-checkmark';
        }
        if (status === 'error') {
            iconType = 'ios-close';
        }

        container.classList.add(`${PREFIX.icon}-${iconType}`);
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
