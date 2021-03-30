/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { $el, createElem, setCss } from '../../dom-utils';
import { CssTransition } from '../../mixins';
import { type } from '../../utils';
import PREFIX from '../prefix';

interface UpdatelobalAPI {
    color?: string; // 进度条的颜色
    height?: number; // 进度条高度，单位 px
    duration?: number; // 隐藏时的持续时间，单位 ms
    failedColor?: string; // 失败时的进度条颜色
}

// 私有方法的接口
interface UpdateAPI {
    percent?: number; // 进度条进度
    status?: 'primary' | 'success' | 'error'; // 进度状态颜色
    show?: boolean; // 是否显示进度条
}

interface Events {
    statr(): void;
    finish(): void;
    error(): void;
    update(percent: number): void;
    destroy(): void;
}

// 全局配置
const DEFAULT_LOADINGBAR: {
    color: string;
    height: number;
    duration: number;
    failedColor: string;
} = {
    color: 'primary',
    height: 2,
    duration: 800,
    failedColor: 'error'
};

let timer: any;

function createLoadingBarInstance(): HTMLElement {
    const LoadingBar = createElem('div');
    const LoadingBarInner = createElem('div');

    LoadingBar.className = `${PREFIX.loadingBar}`;
    LoadingBarInner.className = `${PREFIX.loadingBar}-inner`;

    setColor('primary', LoadingBarInner);

    // 初始进度
    setCss(LoadingBarInner, 'width', '0%');

    // 设置进度条高度为全局配置的高度
    window.setTimeout(() => {
        const height = `${DEFAULT_LOADINGBAR.height}px`;
        setCss(LoadingBar, 'height', height);
    }, 0);

    LoadingBar.appendChild(LoadingBarInner);
    document.body.appendChild(LoadingBar);

    return LoadingBar;
}

// 设置进度函数
function r_update(options: UpdateAPI): void {
    const LBar = $el(`.${PREFIX.loadingBar}`)!;
    const LBarInner = $el(`.${PREFIX.loadingBar}-inner`)!;

    // 设置进度
    setCss(LBarInner, 'width', `${options.percent}%`);

    const transitionConfig = {
        rmCls: true,
        timeout: 200,
        enterCls: 'rab-fade-in',
        leaveCls: 'rab-fade-out',
        hiddenParent: LBar
    };

    // 是否显示隐藏
    if (options.show) {
        CssTransition(LBarInner, {
            inOrOut: 'in',
            ...transitionConfig
        });
    } else {
        CssTransition(LBarInner, {
            inOrOut: 'out',
            ...transitionConfig
        });
    }

    setColor(options.status!, LBarInner);
}

// 隐藏进度条
function hide() {
    window.setTimeout(() => {
        r_update({
            show: false
        });
        window.setTimeout(() => {
            r_update({
                percent: 0
            });
        }, 200);
    }, DEFAULT_LOADINGBAR.duration);
}

function clearTimer() {
    if (timer) {
        window.clearInterval(timer);
        timer = null;
    }
}

// 设置进度条状态背景颜色
function setColor(status: string, elem: any): void {
    if (status === 'error') {
        // 是否使用全局配置的 failedColor
        if (DEFAULT_LOADINGBAR.failedColor && DEFAULT_LOADINGBAR.failedColor !== 'error') {
            setCss(elem, 'backgroundColor', DEFAULT_LOADINGBAR.failedColor);

            // 在隐藏的持续时间后初始化背景色
            window.setTimeout(() => {
                setCss(elem, 'backgroundColor', '');
            }, DEFAULT_LOADINGBAR.duration);
        } else {
            elem.classList.add(`${PREFIX.loadingBar}-inner-failed-color-error`);

            // 在隐藏的持续时间后设为初始颜色
            window.setTimeout(() => {
                elem.classList.remove(`${PREFIX.loadingBar}-inner-failed-color-error`);
            }, DEFAULT_LOADINGBAR.duration + 200);
        }
    } else if (status === 'primary') {
        // 是否使用全局配置的 color
        if (DEFAULT_LOADINGBAR.color && DEFAULT_LOADINGBAR.color !== 'primary') {
            setCss(elem, 'backgroundColor', DEFAULT_LOADINGBAR.color);
        } else {
            elem.classList.add(`${PREFIX.loadingBar}-inner-color-primary`);
        }
    }
}

class $LoadingBar implements Events {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el(`.${PREFIX.loadingBar}`);
        createLoadingBarInstance();
    }

    public statr(): void {
        if (timer) return;

        let percent = 0;

        timer = window.setInterval(() => {
            // 计算随机进度
            percent += Math.floor(Math.random() * 3 + 1);
            // 终止
            if (percent > 95) {
                clearTimer();
            }
            r_update({
                percent,
                status: 'primary',
                show: true
            });
        }, 200);
    }

    public update(percent: number): void {
        clearTimer();
        r_update({
            percent,
            status: 'success',
            show: true
        });
    }

    public finish(): void {
        clearTimer();
        r_update({
            percent: 100,
            status: 'primary',
            show: true
        });
        hide();
    }

    public error(): void {
        clearTimer();
        r_update({
            percent: 100,
            status: 'error',
            show: true
        });
        hide();
    }

    public config(options: UpdatelobalAPI): void {
        if (options.color && type.isStr(options.color)) {
            DEFAULT_LOADINGBAR.color = options.color;
        }
        if (options.height && type.isNum(options.height)) {
            DEFAULT_LOADINGBAR.height = options.height;
        }
        if (options.duration && type.isNum(options.duration)) {
            DEFAULT_LOADINGBAR.duration = options.duration;
        }
        if (options.failedColor && type.isStr(options.failedColor)) {
            DEFAULT_LOADINGBAR.failedColor = options.failedColor;
        }
    }

    public destroy(): void {
        clearTimer();
        // @ts-ignore
        document.body.removeChild($el(`.${PREFIX.loadingBar}`));
    }
}

export default $LoadingBar;
