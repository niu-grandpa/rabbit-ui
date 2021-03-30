/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image403 from '../../../assets/result-403.svg';
import Image404 from '../../../assets/result-404.svg';
import Image500 from '../../../assets/result-500.svg';
import { $el, getStrTypeAttr, removeAttrs, setHtml } from '../../dom-utils';
import { moreThanOneNode } from '../../mixins';
import PREFIX from '../prefix';

class Result {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.1';
        this.COMPONENTS = $el('r-result', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            // v1.1 增加占位节点的组成数量判断
            if (moreThanOneNode(node)) return;

            const { status, title, subTitle, icon, extra } = this._attrs(node);

            const placeholderNode = node.firstElementChild;

            this._setMainTemplate(node);
            this._setStatus(node, status);
            this._setTitle(node, title, subTitle);
            this._setExtraContent(node, extra);
            this._setComplexDesc(node, placeholderNode!);
            this._setCustomIcon(node, icon);

            removeAttrs(node, ['title', 'subtitle', 'status', 'icon', 'extra']);
        });
    }

    private _setMainTemplate(node: Element): void {
        const template = `
          <div class="${PREFIX.result}-icon">
             <i class="${PREFIX.icon}"></i>
          </div>
          <div class="${PREFIX.result}-title"></div>
          <div class="${PREFIX.result}-subtitle"></div> 
          <div class="${PREFIX.result}-content"></div>
          <div class="${PREFIX.result}-extra"></div>
        `;

        setHtml(node, template);
    }

    private _setStatus(node: Element, status: string): void {
        node.classList.add(`${PREFIX.result}-${status}`);

        const ResultIcon = node.querySelector(`.${PREFIX.result}-icon`)!;
        const I = ResultIcon.querySelector('i')!;
        const iconType = this._getStatusIcon(status);
        const otherStatus = ['403', '404', '500'];

        if (otherStatus.includes(status)) {
            ResultIcon.classList.add(`${PREFIX.result}-image`);
            ResultIcon.removeChild(I);
            setHtml(ResultIcon, `<img src="${iconType}" alt="result" />`);
        } else {
            I.classList.add(`${PREFIX.icon}-${iconType}`);
        }
    }

    private _setTitle(node: Element, title: string, subTitle: string): void {
        const ResultTitle = node.querySelector(`.${PREFIX.result}-title`);
        const ResultSubTitle = node.querySelector(`.${PREFIX.result}-subtitle`);

        setHtml(ResultTitle!, title);
        setHtml(ResultSubTitle!, subTitle);
    }

    private _setExtraContent(node: Element, content: string): void {
        const ResultExtra = node.querySelector(`.${PREFIX.result}-extra`);
        setHtml(ResultExtra!, content);
    }

    private _setCustomIcon(node: Element, icon: string): void {
        if (!icon) return;

        const ResultIcon = node.querySelector(`.${PREFIX.result}-icon > i`)!;
        ResultIcon.className = `${PREFIX.icon} ${PREFIX.icon}-${icon}`;
    }

    private _setComplexDesc(node: Element, child: Element): void {
        const ResultContent = node.querySelector(`.${PREFIX.result}-content`)!;

        if (!child) {
            node.removeChild(ResultContent);
            return;
        }

        ResultContent?.appendChild(child);
    }

    private _getStatusIcon(status: string): string {
        const icons = {
            info: 'ios-alert',
            success: 'ios-checkmark-circle',
            warning: 'ios-warning',
            error: 'ios-close-circle',
            '403': Image403,
            '404': Image404,
            '500': Image500
        };

        // @ts-ignore
        return icons[status] || icons.info;
    }

    private _attrs(node: Element) {
        return {
            status: getStrTypeAttr(node, 'status', 'info'),
            icon: getStrTypeAttr(node, 'icon', ''),
            title: getStrTypeAttr(node, 'title', ''),
            extra: getStrTypeAttr(node, 'extra', ''),
            subTitle: getStrTypeAttr(node, 'subtitle', '')
        };
    }
}

export default Result;
