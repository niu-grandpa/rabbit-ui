/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { warn } from '../../mixins';
import {
    prevAll,
    nextAll,
    removeAttrs,
    $el,
    setText,
    setHtml,
    getNumTypeAttr,
    getStrTypeAttr,
    createElem,
    siblings
} from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface StepsConfig {
    current: number;
    status?: 'wait' | 'process' | 'finish' | 'error';
}

interface Config {
    config(
        el: string
    ): {
        current: number;
        title: string;
        content: string;
    };
}

class Steps {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = '1.0';
        this.COMPONENTS = $el('r-steps', { all: true });
        this._create(this.COMPONENTS);
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
        stepItem.forEach((elem, idx) => {
            const { icon, title, content, status } = this._attrs(elem);

            const stepNumber = idx + 1;

            const template = `
             <div class="${PREFIX.steps}-tail"><i></i></div>
             <div class="${PREFIX.steps}-head">
                <div class="${PREFIX.steps}-head-inner">
                   <span>${stepNumber}</span>
                </div>
             </div>
             <div class="${PREFIX.steps}-main">
                <div class="${PREFIX.steps}-title">${title}</div>
                <div class="${PREFIX.steps}-content">${content}</div>
             </div>
            `;

            // @ts-ignore
            elem.dataset['index'] = `${idx}`;

            setHtml(elem, template);
            removeAttrs(elem, ['title', 'content', 'icon']);
        });
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

        const setStatus = (step: Element, isActive: boolean, defaultStatus: string) => {
            const selfStatus = step.getAttribute('status');

            if (selfStatus) {
                step.setAttribute('status', selfStatus);
            } else if (isActive && status) {
                step.setAttribute('status', status);
            } else {
                step.setAttribute('status', defaultStatus);
            }
        };

        const activeStep = node.querySelector(`r-step[data-index="${current}"]`) as HTMLElement;
        // @ts-ignore
        setStatus(activeStep, true, 'process');

        prevAll(activeStep).forEach((prevStep) => {
            // @ts-ignore
            setStatus(prevStep, false, 'finish');
        });

        nextAll(activeStep).forEach((nextStep) => {
            // @ts-ignore
            setStatus(nextStep, false, 'wait');
        });
    }

    private _attrs(node: Element) {
        return {
            current: getNumTypeAttr(node, 'current', 0),
            icon: getStrTypeAttr(node, 'icon', ''),
            title: getStrTypeAttr(node, 'title', ''),
            status: getStrTypeAttr(node, 'status', ''),
            content: getStrTypeAttr(node, 'content', ''),
            direction: getStrTypeAttr(node, 'direction', 'horizontal')
        };
    }
}

export default Steps;
