import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PREFIX from '../prefix';
import { $el, getNumTypeAttr, getStrTypeAttr, removeAttrs, setText } from '../../dom-utils';

import 'dayjs/locale/zh-cn';

class Time {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;
    public locale: (str: string) => string;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-time', { all: true });

        // 配置默认语言 (全局)
        dayjs.locale('zh-cn');

        // 改变语言配置 (全局)，需自行引入 dayjs 语言包
        // 注意！通过 script 标签引入 rabbitjs 的情况下，通过这个函数设置语言是无效的
        this.locale = (str) => dayjs.locale(str);

        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>): void {
        COMPONENTS.forEach((node) => {
            const { type, time, interval, hash } = this._attrs(node);

            this._setTime(node, type, time, interval);
            this._handleClick(node, hash);

            removeAttrs(node, ['time', 'type', 'hash', 'interval']);
        });
    }

    private _setTime(node: Element, type: string, time: string, interval: number): void {
        const timeStamp = eval(time);

        let seconds = 0;

        const timer = () => {
            if (type === 'relative') {
                dayjs.extend(relativeTime);

                let _relativeTime = dayjs(timeStamp).fromNow();

                // 如果自动更新的间隔小于60则是要通过秒更新时间而不是分钟
                // 当秒数走到60秒后就转换为 “x分钟前” 显示
                if (interval < 60) {
                    const Chinese = ['zh', 'zh-cn', 'zh-hk', 'zh-tw'];
                    // 语言环境为中文才进行并显示秒级别更新
                    if (Chinese.includes(dayjs.locale())) {
                        seconds++;
                        setText(node, `${seconds}秒前`);
                    }
                } else {
                    setText(node, _relativeTime);
                }

                // 这段为设置中文状态下的情景
                if (_relativeTime === '几秒前') {
                    _relativeTime = '刚刚';
                } else {
                    setText(node, _relativeTime);
                }
            } else if (type === 'date') {
                const date = dayjs(timeStamp).format('YYYY-MM-DD');
                setText(node, date);
            } else if (type === 'datetime') {
                const dataTime = dayjs(timeStamp).format('YYYY-MM-DD-HH:mm:ss');
                setText(node, dataTime);
            }

            return timer;
        };

        setTimeout(() => {
            window.setInterval(timer(), interval * 1000);
        }, 0);
    }

    private _handleClick(node: Element, hash: string): void {
        if (!hash) return;

        node.classList.add(`${PREFIX.time}-with-hash`);
        node.addEventListener('click', () => (window.location.hash = hash));
    }

    private _attrs(node: Element) {
        return {
            time: getStrTypeAttr(node, 'time', ''),
            type: getStrTypeAttr(node, 'type', 'relative'),
            hash: getStrTypeAttr(node, 'hash', ''),
            interval: getNumTypeAttr(node, 'interval', 60)
        };
    }
}

export default Time;
