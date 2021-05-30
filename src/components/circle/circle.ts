/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    createElem,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { moreThanOneNode } from '../../mixins';
import { randomStr, type } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        percent: number;
        strokeColor: string | string[];
    };
}

class Circle implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-circle', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        percent: number;
        strokeColor: string | string[];
    } {
        const target = $el(el) as HTMLElement;
        const InnerCircle = target.querySelectorAll('path')[1] as SVGPathElement;

        const { _attrs, _setPercent, _setStrokeColor } = Circle.prototype;
        const { percent, strokeWidth, dashboard, strokeColor } = _attrs(target);

        return {
            get percent() {
                return percent;
            },
            set percent(newVal: number) {
                if (newVal && !type.isNum(newVal)) return;
                _setPercent(InnerCircle, newVal, strokeWidth, dashboard);
            },
            get strokeColor() {
                return strokeColor;
            },
            set strokeColor(newVal: string | string[]) {
                if (newVal && !type.isStr(newVal) && !type.isArr(newVal)) return;
                _setStrokeColor(InnerCircle, newVal);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<HTMLElement>): void {
        COMPONENTS.forEach((node) => {
            if (moreThanOneNode(node)) return;
            const CircleContent = node.firstElementChild;

            const {
                size,
                percent,
                strokeLinecap,
                strokeWidth,
                strokeColor,
                trailColor,
                trailWidth,
                dashboard
            } = this._attrs(node);

            this._setSize(node, size);
            this._setMainTemplate(
                node,
                percent,
                trailColor,
                trailWidth,
                strokeLinecap,
                strokeWidth,
                strokeColor,
                dashboard
            );

            const InnerCircle = node.querySelectorAll('path')[1]! as SVGPathElement;

            this._setPercent(InnerCircle, percent, strokeWidth, dashboard);
            this._setStrokeColor(InnerCircle, strokeColor);
            this._setInnerContent(node, CircleContent);

            removeAttrs(node, [
                'percent',
                'size',
                'stroke-linecap',
                'stroke-width',
                'stroke-color',
                'trail-width',
                'trail-color',
                'dashboard'
            ]);
        });
    }

    private _setSize(node: HTMLElement, size: number): void {
        setCss(node, 'width', `${size}px`);
        setCss(node, 'height', `${size}px`);
    }

    private _setMainTemplate(
        node: HTMLElement,
        percent: number,
        trailColor: string,
        trailWidth: number,
        strokeLinecap: string,
        strokeWidth: number,
        strokeColor: string,
        dashboard: boolean
    ): void {
        const pathString = this._getPathString(strokeWidth, dashboard);
        const { trailStyle, pathStyle } = this._getStyle(strokeWidth, dashboard);
        const computedStrokeWidth = percent === 0 && dashboard ? 0 : strokeWidth;

        const template = `
        <svg viewBox="0 0 100 100">
          <path
            d="${pathString}"
            stroke="${trailColor}"
            stroke-width="${trailWidth}"
            fill-opacity="0"
            stroke-linecap="${strokeLinecap}"
            style="${trailStyle}"
          ></path>
          <path
            d="${pathString}"
            stroke-linecap="${strokeLinecap}"
            stroke-width="${computedStrokeWidth}"
            fill-opacity="0"
            style="${pathStyle}"
          ></path>
        </svg>
        `;

        setHtml(node, template);
    }

    private _radius(strokeWidth: number): number {
        return 50 - strokeWidth / 2;
    }

    private _setPercent(
        innerCircle: SVGPathElement,
        percent: number,
        strokeWidth: number,
        dashboard: boolean
    ): void {
        const { _radius } = Circle.prototype;
        const len = Math.floor(Math.PI * 2 * _radius(strokeWidth));

        if (dashboard) {
            setCss(innerCircle, 'strokeDasharray', `${(percent / 100) * (len - 75)}px ${len}px`);
        } else {
            setCss(innerCircle, 'strokeDashoffset', `${((100 - percent) / 100) * len}px`);
        }
    }

    private _setStrokeColor(innerCircle: SVGPathElement, color: string | string[]): void {
        const id = `${PREFIX.circle}-${randomStr(3)}`;

        let strokeValue: string;
        if (typeof color === 'string') {
            strokeValue = color;
        } else if (Array.isArray(color) && color.length <= 2) {
            strokeValue = `url(#${id})`;
            const defs = Circle.prototype.showDefs(id, color);
            innerCircle.parentElement!.insertAdjacentHTML('beforeend', defs);
        }

        innerCircle.setAttribute('stroke', strokeValue!);
    }

    private _getPathString(strokeWidth: number, dashboard: boolean): string {
        const radius = this._radius(strokeWidth);
        if (dashboard) {
            return `M 50,50 m 0,${radius}
          a ${radius},${radius} 0 1 1 0,-${2 * radius}
          a ${radius},${radius} 0 1 1 0,${2 * radius}`;
        } else {
            return `M 50,50 m 0,-${radius}
          a ${radius},${radius} 0 1 1 0,${2 * radius}
          a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
        }
    }

    private _getStyle(
        strokeWidth: number,
        dashboard: boolean
    ): {
        trailStyle: string;
        pathStyle: string;
    } {
        const len = Math.floor(Math.PI * 2 * this._radius(strokeWidth));

        let trailStyle: string, pathStyle: string;
        if (dashboard) {
            trailStyle = `
            stroke-dasharray: ${len - 75}px ${len}px;
            stroke-dashoffset: -${75 / 2}px;
            transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s
            `;
            pathStyle = `
            stroke-dashoffset: -${75 / 2}px;
            transition:stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s
            `;
        } else {
            trailStyle = '';
            pathStyle = `
              stroke-dasharray: ${len}px ${len}px;
              transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease
              `;
        }

        return { trailStyle, pathStyle };
    }

    private showDefs(id: string, color: string[]) {
        return `<defs>
                 <linearGradient id="${id}" x1="100%" y1="0%" x2="0%" y2="0%">
                     <stop offset="0%" stop-color="${color[0]}"></stop>
                     <stop offset="100%" stop-color="${color[1]}"></stop>
                 </linearGradient>
              </defs>
              `;
    }

    private _setInnerContent(node: HTMLElement, content: Element | null): void {
        if (!content) return;

        const CircleInner = createElem('div');

        CircleInner.className = `${PREFIX.circle}-inner`;

        CircleInner.appendChild(content);
        node.appendChild(CircleInner);
    }

    private _attrs(node: HTMLElement) {
        return {
            size: getNumTypeAttr(node, 'size', 120),
            percent: getNumTypeAttr(node, 'percent', 0),
            strokeWidth: getNumTypeAttr(node, 'stroke-width', 6),
            trailWidth: getNumTypeAttr(node, 'trail-width', 5),
            trailColor: getStrTypeAttr(node, 'trail-color', '#eaeef2'),
            strokeColor: getStrTypeAttr(node, 'stroke-color', '#1890ff'),
            strokeLinecap: getStrTypeAttr(node, 'stroke-linecap', 'round'),
            dashboard: getBooleanTypeAttr(node, 'dashboard')
        };
    }
}

export default Circle;
