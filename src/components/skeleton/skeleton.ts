/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    createElem,
    getArrTypeAttr,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import PREFIX from '../prefix';

class Skeleton {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-skeleton', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const {
                active,
                title,
                paragraph,
                avatar,
                titleWidth,
                paragraphRows,
                paragraphWidth,
                avatarSize,
                avatarShape
            } = this._attrs(node);

            this._setActive(node, active);
            this._setMainTemplate(node);
            this._setTitle(node, title, titleWidth);
            this._showParagraph(node, paragraph, paragraphRows, paragraphWidth);
            this._showAvatar(node, avatar, avatarSize, avatarShape);

            removeAttrs(node, [
                'active',
                'title',
                'paragraph',
                'avatar',
                'title-width',
                'paragraph-width',
                'paragraph-rows',
                'avatar-shape',
                'avatar-size'
            ]);
        });
    }

    private _setActive(node: Element, active: boolean): void {
        if (!active) return;

        node.classList.add(`${PREFIX.skeleton}-active`);
    }

    private _setMainTemplate(node: Element): void {
        const template = `
        <div class="${PREFIX.skeleton}-content">
            <h3 class="${PREFIX.skeleton}-title" style="width: 38%"></h3>
            <ul class="${PREFIX.skeleton}-paragraph">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        `;

        setHtml(node, template);
    }

    private _setTitle(node: Element, isShow: string, width: number): void {
        const Title = node.querySelector(`.${PREFIX.skeleton}-title`)!;

        this._setTitleWidth(Title, width);

        if (isShow === 'false') {
            node.removeChild(Title);
        }
    }

    private _setTitleWidth(titleElm: Element, titleWidth: number): void {
        setCss(titleElm, 'width', `${titleWidth}%`);
    }

    private _showParagraph(node: Element, isShow: string, rows: number, rowsWidth: any): void {
        const Paragraph = node.querySelector(`.${PREFIX.skeleton}-paragraph`)!;

        this._setParagraphRows(Paragraph, rows);
        this._setParagraphRowsWidth(Paragraph, rowsWidth);

        if (isShow === 'false') {
            node.removeChild(Paragraph!);
        }
    }

    private _setParagraphRows(pgELm: Element, rows: number): void {
        if (!rows) return;

        const Fragment = document.createDocumentFragment();

        let i = 0;
        for (; i < rows; i++) {
            const Row = createElem('li');
            Fragment.appendChild(Row);
        }

        setHtml(pgELm, '');

        pgELm.appendChild(Fragment);
    }

    private _setParagraphRowsWidth(pgELm: Element, width: number | number[] | string[]): void {
        if (typeof width === 'number') {
            setCss(pgELm.querySelector(`.${PREFIX.skeleton}-paragraph > li`), 'width', `${width}%`);
        }

        if (Array.isArray(width) && width.length) {
            const Rows = pgELm.querySelectorAll(`.${PREFIX.skeleton}-paragraph > li`);

            let i = 0;
            for (; i < width.length; i++) {
                const rowWidth = width[i];
                const Row = Rows[i];
                Row ? setCss(Row, 'width', `${rowWidth}%`) : null;
            }
        }
    }

    private _showAvatar(node: Element, avatar: boolean, size: string, shape: string): void {
        if (!avatar) return;

        const template = `
        <div class="${PREFIX.skeleton}-header">
        <span class="${PREFIX.skeleton}-avatar ${PREFIX.skeleton}-avatar-${size} ${PREFIX.skeleton}-avatar-${shape}"></span>
        </div>
        `;

        node.insertAdjacentHTML('afterbegin', template);

        node.classList.add(`${PREFIX.skeleton}-with-avatar`);

        setCss(node.querySelector(`.${PREFIX.skeleton}-title`), 'width', '50%');
    }

    private _attrs(node: Element) {
        return {
            active: getBooleanTypeAttr(node, 'active'),
            avatar: getBooleanTypeAttr(node, 'avatar'),
            title: getStrTypeAttr(node, 'title', 'true'),
            paragraph: getStrTypeAttr(node, 'paragraph', 'true'),
            avatarSize: getStrTypeAttr(node, 'avatar-size', 'large'),
            avatarShape: getStrTypeAttr(node, 'avatar-shape', 'circle'),
            titleWidth: getNumTypeAttr(node, 'title-width'),
            paragraphWidth:
                getNumTypeAttr(node, 'paragraph-width', 0) ||
                getArrTypeAttr(node, 'paragraph-width'),
            paragraphRows: getNumTypeAttr(node, 'paragraph-rows')
        };
    }
}

export default Skeleton;
