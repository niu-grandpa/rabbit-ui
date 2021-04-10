import { $el, bind, getStrTypeAttr, removeAttrs } from '../../dom-utils';
import { type, validComps } from '../../utils';

interface Config {
    config(
        el: string
    ): {
        endTime: string;
        events({ onStop }: CountDownEvent): void;
    };
}

interface CountDownEvent {
    onStop: (endTime: boolean) => void;
}

class CountDown implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-count-down', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        endTime: string;
        events({ onStop }: CountDownEvent): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'count-down');

        const { _countTime } = CountDown.prototype;

        return {
            get endTime() {
                return '';
            },
            set endTime(newVal: string) {
                if (newVal && !type.isStr(newVal)) return;
                _countTime(target, newVal);
            },

            events({ onStop }: CountDownEvent) {
                if (!onStop) return;

                bind(target, 'DOMNodeInserted', (e: any) => {
                    if (e.target.textContent === '00:00:00') {
                        type.isFn(onStop, true);
                    }
                });
            }
        };
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            const { endTime } = this._attrs(node);

            this._countTime(node, endTime);

            removeAttrs(node, ['endTime']);
        });
    }

    private _countTime(node: Element, endTime: string): void {
        if (!endTime) return;

        let timer: any = null;

        const countDown = () => {
            //获取当前时间
            const date = new Date();
            const now = date.getTime();

            //设置截止时间
            const endDate = new Date(endTime);
            const _endTime = endDate.getTime();

            //时间差
            const diff = _endTime - now;

            //定义变量 d,h,m,s保存倒计时的时间
            let d = 0,
                h = 0,
                m = 0,
                s = 0;

            if (diff >= 0) {
                d = Math.floor(diff / 1000 / 60 / 60 / 24);
                h = Math.floor((diff / 1000 / 60 / 60) % 24);
                m = Math.floor((diff / 1000 / 60) % 60);
                s = Math.floor((diff / 1000) % 60);
            }

            const checkTime = (t: any) => {
                if (t < 10) t = `0${t}`;
                return t;
            };

            //将0-9的数字前面加上0，例1变为01
            d = checkTime(d);
            h = checkTime(h);
            m = checkTime(m);
            s = checkTime(s);

            node.textContent = `${h}:${m}:${s}`;
        };

        countDown();

        timer = window.setInterval(countDown, 1000);

        bind(node, 'DOMNodeInserted', (e: any) => {
            if (e.target.textContent === '00:00:00') {
                window.clearInterval(timer);
                return;
            }
        });
    }

    private _attrs(node: Element) {
        return {
            endTime: getStrTypeAttr(node, 'end-time', '')
        };
    }
}

export default CountDown;
