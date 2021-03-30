/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    createElem,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml,
    siblings
} from '../../dom-utils';
import { moreThanOneNode } from '../../mixins';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';

interface Config {
    config(
        el: string
    ): {
        events({ onClick, onChange }: CarouselEvents): void;
    };
}

interface CarouselEvents {
    // 点击幻灯片时触发，返回索引值
    onClick?: (index: number) => void;
    // 幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引
    onChange?: ([oldValue, value]: [number, number]) => void;
}

const AUTOPLAYSPEED = 2000;
const DURATION = 520;

class Carousel implements Config {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-carousel', { all: true });
        this._create(this.COMPONENTS);
    }

    public config(
        el: string
    ): {
        events({ onClick, onChange }: CarouselEvents): void;
    } {
        const target = $el(el) as HTMLElement;

        validComps(target, 'carousel');

        const { _attrs } = Carousel.prototype;
        const { autoplay, autoplaySpeed, hoverPause } = _attrs(target);

        return {
            events({ onClick, onChange }: CarouselEvents) {
                const elems = target.querySelectorAll(`.${PREFIX.carousel}-item`);
                const LeftArrow = target.querySelector(`.${PREFIX.carousel}-arrow.left`);
                const RightArrow = target.querySelector(`.${PREFIX.carousel}-arrow.right`);
                const lastIndex = elems.length - 1;

                const handleChange = (
                    siblingType: 'nextElementSibling' | 'previousElementSibling',
                    newSetElem: Element
                ) => {
                    const oldActiveElem = target.querySelector(
                        `.${PREFIX.carousel}-item.active`
                    )! as HTMLElement;

                    const activeElem = oldActiveElem[siblingType] || newSetElem;

                    const oldValue = Number(oldActiveElem.dataset['index']);
                    // @ts-ignore
                    const value = Number(activeElem.dataset['index']);

                    onChange && type.isFn(onChange, [oldValue, value]);
                };

                const autoPlayUseChangeEvent = () => {
                    if (!autoplay) return;

                    let eventTimer: any = null;

                    const startEvent = () => {
                        eventTimer = window.setInterval(() => {
                            handleChange('nextElementSibling', elems[0]);
                        }, autoplaySpeed);
                    };

                    const pauseEvent = () =>
                        eventTimer ? window.clearInterval(eventTimer) : false;

                    startEvent();

                    if (hoverPause === 'false') return;

                    bind(target, 'mouseenter', () => pauseEvent());
                    bind(target, 'mouseleave', () => startEvent());
                };

                const handleClick = () => {
                    elems.forEach((elem, index) => {
                        bind(elem, 'click', () => onClick && type.isFn(onClick, index));
                    });
                };

                bind(LeftArrow, 'click', () =>
                    handleChange('previousElementSibling', elems[lastIndex])
                );
                bind(RightArrow, 'click', () => handleChange('nextElementSibling', elems[0]));

                handleClick();
                autoPlayUseChangeEvent();
            }
        };
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            if (moreThanOneNode(node)) return;

            const placeholderNode = node.firstElementChild;

            if (!placeholderNode) return;

            const carouselItemCount = placeholderNode.childElementCount;

            const {
                dots,
                arrow,
                effect,
                easing,
                radiusDot,
                trigger,
                autoplay,
                hoverPause,
                autoplaySpeed
            } = this._attrs(node);

            this._setMainTemplate(node, dots, arrow);
            this._setFadeCls(node, effect);
            this._setItem(node, placeholderNode, carouselItemCount, easing);
            this._setIndicators(node, carouselItemCount, radiusDot, trigger);

            this._autoPlay(autoplay, node, hoverPause, autoplaySpeed);
            this._handleArrowClick(node, arrow);

            removeAttrs(node, [
                'dots',
                'arrow',
                'effect',
                'easing',
                'trigger',
                'radius-dot',
                'autoplay',
                'hover-pause',
                'autoplay-speed'
            ]);
        });
    }

    private _setMainTemplate(node: Element, dots: string, arrow: string): void {
        const template = `
        <button type="button" class="left ${PREFIX.carousel}-arrow ${PREFIX.carousel}-arrow-${arrow}">
           <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-back"></i>
        </button>
        <div class="${PREFIX.carousel}-list"></div>
        <button type="button" class="right ${PREFIX.carousel}-arrow ${PREFIX.carousel}-arrow-${arrow}">
           <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-forward"></i>
        </button>
        <ul class="${PREFIX.carousel}-dots ${PREFIX.carousel}-dots-${dots}"></ul>
        `;

        setHtml(node, template);
    }

    private _setFadeCls(node: Element, effect: string): void {
        effect === 'fade' ? node.classList.add(`${PREFIX.carousel}-${effect}`) : '';
    }

    private _setItem(
        node: Element,
        placeholderNode: Element,
        carouselItemCount: number,
        esaing: string
    ): void {
        const CarouselList = node.querySelector(`.${PREFIX.carousel}-list`);
        const Fragment = document.createDocumentFragment();
        const children = Array.from(placeholderNode.children);

        let i = 0;
        for (; i < carouselItemCount; i++) {
            const CarouselItem = createElem('div');

            CarouselItem.dataset['index'] = `${i}`;
            CarouselItem.className = `${PREFIX.carousel}-item`;
            CarouselItem.appendChild(children[i]);

            this._setEasing(CarouselItem, esaing);

            Fragment.appendChild(CarouselItem);
            Fragment.firstElementChild?.classList.add('active');
        }

        CarouselList?.appendChild(Fragment);
    }

    private _setEasing(item: HTMLElement, easing: string): void {
        if (!easing) return;
        setCss(item, 'transitionTimingFunction', easing);
    }

    private _setIndicators(
        node: Element,
        carouselItemCount: number,
        radiusDot: boolean,
        trigger: string
    ): void {
        const CarouselDots = node.querySelector(`.${PREFIX.carousel}-dots`);
        const Fragment = document.createDocumentFragment();

        let i = 0;
        for (; i < carouselItemCount; i++) {
            const CarouselDot = createElem('li');

            CarouselDot.dataset['slideTo'] = `${i}`;

            setHtml(
                CarouselDot,
                `<button type="button" class=${radiusDot ? 'radius' : ''}></button>`
            );

            this._handleDotChange(trigger, node, CarouselDot);

            Fragment.appendChild(CarouselDot);
            Fragment.firstElementChild?.classList.add(`${PREFIX.carousel}-active`);
        }

        CarouselDots?.appendChild(Fragment);
    }

    private _autoPlay(
        autoplay: boolean,
        node: Element,
        hoverPause: string,
        autoplaySpeed: number
    ): void {
        if (!autoplay) return;

        let autoPlayTimer: any = null;

        const play = () => {
            let speed = autoplaySpeed;

            // 当轮播图自动播放的切换速度低于 650ms 会出现问题，
            // 因此低于这个数值的都会被重置为 650ms。
            if (speed < 650) {
                speed = 650;
                console.warn(
                    `[Rabbit warn] Please do not set the sliding speed of carousel to less than 650ms. There are known problems with doing so, so it has been reset to 650ms. --> ${autoplaySpeed}ms`
                );
            }

            autoPlayTimer = window.setInterval(() => this._slide('next', node), speed);
        };

        play();

        if (hoverPause === 'false') return;

        const pause = () => (autoPlayTimer ? window.clearInterval(autoPlayTimer) : false);

        bind(node, 'mouseenter', () => pause());
        bind(node, 'mouseleave', () => play());
    }

    private _handleArrowClick(node: Element, arrow: string): void {
        if (arrow === 'none') return;

        const LeftArrow = node.querySelector(`.${PREFIX.carousel}-arrow.left`);
        const RightArrow = node.querySelector(`.${PREFIX.carousel}-arrow.right`);

        bind(LeftArrow, 'click', () => this._slide('prev', node));
        bind(RightArrow, 'click', () => this._slide('next', node));
    }

    private _handleDotChange(trigger: string, node: Element, dot: HTMLElement): void {
        let activeIndex: number, activeElem: Element;

        const _C = () => {
            activeIndex = Number(dot.dataset['slideTo']);
            activeElem = node.querySelector(
                `.${PREFIX.carousel}-item[data-index="${activeIndex}"]`
            )!;

            if (activeElem.classList.contains('active')) return;

            this._dotChange(node, activeIndex);
            this._showActiveItem(activeElem);

            siblings(activeElem).forEach((otherElem: HTMLElement) =>
                otherElem.classList.contains('active') ? this._hideOldActiveItem(otherElem) : ''
            );
        };

        if (trigger === 'hover') {
            bind(dot, 'mouseenter', () => _C());
        } else {
            bind(dot, 'click', () => _C());
        }
    }

    private _slide(type: 'prev' | 'next', node: Element): void {
        const direction = type === 'prev' ? 'right' : 'left';

        const CarouselList = node.querySelector(`.${PREFIX.carousel}-list`)!;

        const firstIndex = 0;
        const lastIndex = CarouselList.childElementCount - 1;

        const ActiveItem = node.querySelector(`.${PREFIX.carousel}-item.active`)! as HTMLElement;
        const PrevItem = ActiveItem.previousElementSibling || CarouselList.children[lastIndex];
        const NextItem = ActiveItem.nextElementSibling || CarouselList.children[firstIndex];

        const __change = (elem: Element) => this._change(type, direction, node, ActiveItem, elem);
        type === 'prev' ? __change(PrevItem) : __change(NextItem);
    }

    private _change(
        type: string,
        direction: string,
        node: Element,
        oldActiveItem: Element,
        curActiveItem: Element
    ): void {
        // @ts-ignore
        const activeIndex = Number(curActiveItem.dataset['index']);

        this._dotChange(node, activeIndex);
        this._showActiveItem(curActiveItem, type, direction);
        this._hideOldActiveItem(oldActiveItem, direction);
    }

    private _dotChange(node: Element, activeIndex: number): void {
        const CarouselDots = node.querySelector(`.${PREFIX.carousel}-dots`)!;
        const ActiveDot = CarouselDots.children[activeIndex];

        ActiveDot.classList.add(`${PREFIX.carousel}-active`);

        siblings(ActiveDot).forEach((dot: HTMLElement) =>
            dot.classList.contains(`${PREFIX.carousel}-active`)
                ? dot.classList.remove(`${PREFIX.carousel}-active`)
                : ''
        );
    }

    private _showActiveItem(activeElem: Element, type = 'next', direction = 'left'): void {
        activeElem.classList.add(`${PREFIX.carousel}-item-${type}`);
        setTimeout(() => activeElem.classList.add(`${PREFIX.carousel}-item-${direction}`), 20);
        setTimeout(() => {
            activeElem.classList.add('active');
            activeElem.classList.remove(`${PREFIX.carousel}-item-${type}`);
            activeElem.classList.remove(`${PREFIX.carousel}-item-${direction}`);
        }, DURATION);
    }

    private _hideOldActiveItem(oldElem: Element, direction = 'left'): void {
        setTimeout(() => oldElem.classList.add(`${PREFIX.carousel}-item-${direction}`), 20);
        setTimeout(() => {
            oldElem.classList.remove('active');
            oldElem.classList.remove(`${PREFIX.carousel}-item-${direction}`);
        }, DURATION);
    }

    private _attrs(node: Element) {
        return {
            dots: getStrTypeAttr(node, 'dots', 'inside'),
            arrow: getStrTypeAttr(node, 'arrow', 'hover'),
            effect: getStrTypeAttr(node, 'effect', ''),
            easing: getStrTypeAttr(node, 'easing', ''),
            trigger: getStrTypeAttr(node, 'trigger', 'click'),
            hoverPause: getStrTypeAttr(node, 'hover-pause', 'true'),
            radiusDot: getBooleanTypeAttr(node, 'radius-dot'),
            autoplay: getBooleanTypeAttr(node, 'autoplay'),
            autoplaySpeed: getNumTypeAttr(node, 'autoplay-speed', AUTOPLAYSPEED)
        };
    }
}

export default Carousel;
