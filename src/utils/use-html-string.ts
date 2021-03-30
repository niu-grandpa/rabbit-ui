import { setHtml, setText } from '../dom-utils';

/**
 * 设置属性是否支持传入 HTML 片段
 * @param elem
 * @param content
 * @param use
 */
export default function isUseHTMLString(elem: Element, content: string, use?: boolean): void {
    use ? setHtml(elem, content) : setText(elem, content);
}
