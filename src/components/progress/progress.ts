import { type, validComps } from '../../utils';
import { $el, createElem, removeAttrs, setCss, setHtml, setText } from '../../dom-utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        percent: number;
        successPercent: number;
    };
}

const PrgesIconType = {
    success: '<i class="rab-icon rab-icon-ios-checkmark-circle"></i>',
    warning: '<i class="rab-icon rab-icon-ios-alert"></i>',
    wrong: '<i class="rab-icon rab-icon-ios-close-circle"></i>'
};

class Progress implements Config {
    readonly VERSION: string;
    private COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-progress', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        percent: number;
        successPercent: number;
    } {
        const target = $el(el);

        validComps(target, 'progress');

        const progress = target.querySelector(`.${PREFIX.progress}-bg`);
        const progressSucs = target.querySelector(`.${PREFIX.progress}-success-bg`);
        const progressText = target.querySelector(`.${PREFIX.progress}-inner-text`);

        return {
            get percent() {
                return progress;
            },

            set percent(newVal: number) {
                if (!type.isNum(newVal) || newVal == progress.style.width) return;

                if (progressText) setHtml(progressText, `${newVal}%`);

                setCss(progress, 'width', `${newVal}%`);
            },

            get successPercent() {
                return progressSucs;
            },

            set successPercent(newVal) {
                if (!type.isNum(newVal) || newVal == progressSucs.style.width) return;

                setCss(progressSucs, 'width', `${newVal}%`);
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            this._createChildNodes(node);

            removeAttrs(node, [
                'percent',
                'show-text',
                'text-inside',
                'stroke-width',
                'stroke-color',
                'success-percent'
            ]);
        });
    }

    private _createChildNodes(wrapper: Element): void {
        const PgrsOuter = createElem('div');
        const PgrsInner = createElem('div');
        const PgrsBar = createElem('div');
        const PgrsBarSucess = createElem('div');

        PgrsOuter.className = `${PREFIX.progress}-outer`;
        PgrsInner.className = `${PREFIX.progress}-inner`;
        PgrsBar.className = `${PREFIX.progress}-bg`;
        PgrsBarSucess.className = `${PREFIX.progress}-success-bg`;

        this._setPercent(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeWidth(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeColor(wrapper, PgrsBar);

        PgrsInner.append(PgrsBar, PgrsBarSucess);
        PgrsOuter.appendChild(PgrsInner);
        wrapper.appendChild(PgrsOuter);

        this._showText(wrapper, PgrsBar);
    }

    private _setPercent(wrapper: Element, bar: HTMLElement, successBar: HTMLElement): void {
        const percent = `${this._getPercent(wrapper)}%`;
        const successPercent = `${this._getSuccessPercent(wrapper)}%`;

        setCss(bar, 'width', percent);
        setCss(successBar, 'width', successPercent);
    }

    private _setStrokeWidth(wrapper: Element, bar: HTMLElement, successBar: HTMLElement): void {
        const strokeWidth = `${this._getStrokeWidth(wrapper)}px`;

        setCss(bar, 'height', strokeWidth);
        setCss(successBar, 'height', strokeWidth);
    }

    private _showText(wrapper: Element, PgrsBar: HTMLElement): void {
        if (!this._isShowText(wrapper)) return;

        const PgrsTextWrapper = createElem('div');
        const PgresText = createElem('span');

        PgrsTextWrapper.className = `${PREFIX.progress}-text`;
        PgresText.className = `${PREFIX.progress}-inner-text`;

        const percentText = `${this._getPercent(wrapper)}%`;

        setText(PgresText, percentText);

        if (!this._isTextInside(wrapper)) {
            wrapper.className = `${PREFIX.progress}-show-info`;

            if (this._getStatus(wrapper) === 'success') {
                setHtml(PgresText, PrgesIconType.success);
            } else if (this._getStatus(wrapper) === 'warning') {
                setHtml(PgresText, PrgesIconType.warning);
            } else if (this._getStatus(wrapper) === 'wrong') {
                setHtml(PgresText, PrgesIconType.wrong);
            }

            PgrsTextWrapper.appendChild(PgresText);

            wrapper.appendChild(PgrsTextWrapper);
        } else {
            PgrsBar.appendChild(PgresText);
        }
    }

    private _setStrokeColor(wrapper: Element, PgrsBar: HTMLElement): void {
        const { from, to } = this._getStrokeColor(wrapper);

        if (from.length || to.length) {
            const strokeColor = `linear-gradient(to right, ${from} 0%, ${to} 100%)`;

            setCss(PgrsBar, 'backgroundImage', strokeColor);
        }
    }

    private _getStatus(node: Element): string | null {
        return node.getAttribute('status');
    }

    private _getPercent(node: Element): string {
        return node.getAttribute('percent') || '0';
    }

    private _getSuccessPercent(node: Element): string {
        return node.getAttribute('success-percent') || '0';
    }

    private _getStrokeWidth(node: Element): string {
        return node.getAttribute('stroke-width') || '10';
    }

    private _getStrokeColor(
        node: Element
    ): {
        from: Array<string>;
        to: Array<string>;
    } {
        if (!node.getAttribute('stroke-color')) {
            return {
                from: [],
                to: []
            };
        } else {
            /**
             * 转为真实数组
             * "['','']" -> ['','']
             */
            const strArr: string = node.getAttribute('stroke-color')?.replace(/'/g, '"') || '';
            const colorArr = JSON.parse(strArr);

            return {
                from: colorArr[0],
                to: colorArr[1]
            };
        }
    }

    private _isTextInside(node: Element): boolean {
        return node.getAttribute('text-inside') === 'true';
    }

    private _isShowText(node: Element): boolean {
        if (node.getAttribute('show-text') === 'false') return false;
        else return true;
    }
}

export default Progress;
