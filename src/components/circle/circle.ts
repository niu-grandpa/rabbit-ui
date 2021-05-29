import { randomStr } from '../../utils';
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
import PREFIX from '../prefix';

class Circle {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-circle', { all: true });
        this._create(this.COMPONENTS);
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
        const id = `${PREFIX.circle}-${randomStr(3)}`;

        const pathString = this._getPathString(strokeWidth, dashboard);
        const { trailStyle, pathStyle } = this._getStyle(percent, strokeWidth, dashboard);

        const computedStrokeWidth = percent === 0 && dashboard ? 0 : strokeWidth;

        const isColorArr =
            strokeColor.startsWith('[') && strokeColor.endsWith(']')
                ? Array.isArray(JSON.parse(strokeColor))
                : false;

        const strokeValue = isColorArr ? `url(#${id})` : strokeColor;

        const template = `
        <svg viewBox="0 0 100 100">
          ${this.showDefs(isColorArr, id, strokeColor)}
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
            stroke="${strokeValue}"
            stroke-width="${computedStrokeWidth}"
            fill-opacity="0"
            style="${pathStyle}"
          ></path>
        </svg>
        `;

        setHtml(node, template);
    }

    private _setPercent(percent: number): void {
        //
    }

    private _setInnerContent(node: HTMLElement, content: Element | null): void {
        if (!content) return;

        const CircleInner = createElem('div');

        CircleInner.className = `${PREFIX.circle}-inner`;

        CircleInner.appendChild(content);
        node.appendChild(CircleInner);
    }

    private showDefs(c: boolean, id: string, color: string) {
        if (!c) return '';

        return `<defs>
                   <linearGradient id="${id}" x1="100%" y1="0%" x2="0%" y2="0%">
                       <stop offset="0%" stop-color="${JSON.parse(color)[0]}"></stop>
                       <stop offset="100%" stop-color="${JSON.parse(color)[1]}"></stop>
                   </linearGradient>
                </defs>
                `;
    }

    private _radius(strokeWidth: number): number {
        return 50 - strokeWidth / 2;
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
        percent: number,
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
            stroke-dasharray: ${Math.floor(percent / 100) * (len - 75)}px ${len}px;
            stroke-dashoffset: -${75 / 2}px;
            transition:stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s
            `;
        } else {
            trailStyle = '';
            pathStyle = `
              stroke-dasharray: ${len}px ${len}px;
              stroke-dashoffset: ${((100 - percent) / 100) * len}px;
              transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease
              `;
        }

        return { trailStyle, pathStyle };
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
