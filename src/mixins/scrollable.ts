import { setCss } from '../dom-utils';

interface Options {
    scroll?: boolean;
    lock?: boolean;
    node?: Element;
    tagName?: string;
}

export default function scrollable({ scroll = false, lock = false, node, tagName }: Options): void {
    // 是否禁止对页面滚动条的修改
    // 页面是否可以滚动
    if (lock && !scroll) {
        setCss(document.body, 'paddingRight', '17px');
        setCss(document.body, 'overflow', 'hidden');
    } else {
        setCss(document.body, 'paddingRight', '');
        setCss(document.body, 'overflow', '');
    }

    const prevNode = node?.previousElementSibling;
    // 解决抽屉或对话框组件在同时打开多个的情况下，只关闭了一个窗口而页面滚动条恢复出现的bug
    if (prevNode) {
        const prevTagName = prevNode.tagName.toLocaleLowerCase().replace(/r-/, '');
        if (prevTagName === tagName) {
            // @ts-ignore
            if (prevNode.dataset[`${prevTagName}Visable`] === 'true') {
                scrollable({ scroll: false, lock: true });
            }
        }
    }
}
