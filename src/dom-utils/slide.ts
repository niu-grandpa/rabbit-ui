/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-rest-params */
// @ts-nocheck

export default window.Slider = (() => {
    // 定义Slider对象
    const Slider = {
        slideDown: (el: Element, time: number) => {
            void 0;
        },
        slideUp: (el: Element, time: number) => {
            void 0;
        }
    };

    // I.定义一个TimerManager类

    // 1）构造函数
    function TimerManager() {
        this.timers = []; // 保存定时器
        this.args = []; // 保存定时器的参数
        this.isFiring = false;
    }

    // 2）静态方法：为element添加一个TimerManager实例
    TimerManager.makeInstance = function (element) {
        // 如果element.__TimerManager__上没有TimerManager，就为其添加一个
        if (!element.__TimerManager__ || element.__TimerManager__.constructor != TimerManager) {
            element.__TimerManager__ = new TimerManager();
        }
    };

    // 3）扩展TimerManager原型，分别实现add，fire，next方法
    TimerManager.prototype.add = function (timer, args) {
        this.timers.push(timer);
        this.args.push(args);
        this.fire();
    };

    TimerManager.prototype.fire = function () {
        if (!this.isFiring) {
            const timer = this.timers.shift(), // 取出定时器
                args = this.args.shift(); // 取出定时器参数
            if (timer && args) {
                this.isFiring = true;
                // 传入参数，执行定时器函数
                timer(args[0], args[1]);
            }
        }
    };

    TimerManager.prototype.next = function () {
        this.isFiring = false;
        this.fire();
    };

    // II. 修改动画函数并在定时器结束后调用element.__TimerManager__.next()

    // 1）下滑函数
    function fnSlideDown(element, time) {
        if (element.offsetHeight == 0) {
            //如果当前高度为0，则执行下拉动画
            // 获取元素总高度
            element.style.display = 'block'; // 1.显示元素，元素变为可见
            const totalHeight = element.offsetHeight; // 2.保存总高度
            element.style.height = '0px'; // 3.再将元素高度设置为0，元素又变为不可见
            // 定义一个变量保存元素当前高度
            let currentHeight = 0; // 当前元素高度为0
            // 计算每次增加的值
            const increment = totalHeight / (time / 10);
            // 开始循环定时器
            const timer = setInterval(() => {
                // 增加一部分高度
                currentHeight += increment;
                // 把当前高度赋值给height属性
                element.style.height = `${currentHeight}px`;
                // 如果当前高度大于或等于总高度则关闭定时器
                if (currentHeight >= totalHeight) {
                    // 关闭定时器
                    clearInterval(timer);
                    // 把高度设置为总高度
                    element.style.height = `${totalHeight}px`;
                    if (
                        element.__TimerManager__ &&
                        element.__TimerManager__.constructor == TimerManager
                    ) {
                        element.__TimerManager__.next();
                    }
                }
            }, 10);
        } else {
            // 如果当前高度不为0，则直接执行队列里的下一个函数
            if (element.__TimerManager__ && element.__TimerManager__.constructor == TimerManager) {
                element.__TimerManager__.next();
            }
        }
    }

    // 2）上拉函数
    function fnSlideUp(element, time) {
        if (element.offsetHeight > 0) {
            // 如果当前高度不为0，则执行上滑动画
            // 获取元素总高度
            const totalHeight = element.offsetHeight;
            // 定义一个变量保存元素当前高度
            let currentHeight = totalHeight;
            // 计算每次减去的值
            const decrement = totalHeight / (time / 10);
            // 开始循环定时器
            const timer = setInterval(() => {
                // 减去当前高度的一部分
                currentHeight -= decrement;
                // 把当前高度赋值给height属性
                element.style.height = `${currentHeight}px`;
                // 如果当前高度小于等于0，就关闭定时器
                if (currentHeight <= 0) {
                    // 关闭定时器
                    clearInterval(timer);
                    // 把元素display设置为none
                    element.style.display = 'none';
                    // 把元素高度值还原
                    element.style.height = `${totalHeight}px`;
                    if (
                        element.__TimerManager__ &&
                        element.__TimerManager__.constructor == TimerManager
                    ) {
                        element.__TimerManager__.next();
                    }
                }
            }, 10);
        } else {
            // 如果当前高度为0， 则直接执行队列里的下一个函数
            if (element.__TimerManager__ && element.__TimerManager__.constructor == TimerManager) {
                element.__TimerManager__.next();
            }
        }
    }

    // III.定义外部访问接口

    // 1）下拉接口
    Slider.slideDown = function (element, time) {
        TimerManager.makeInstance(element);
        element.__TimerManager__.add(fnSlideDown, arguments);
        return this;
    };

    // 2）上滑接口
    Slider.slideUp = function (element, time) {
        TimerManager.makeInstance(element);
        element.__TimerManager__.add(fnSlideUp, arguments);
        return this;
    };

    // 返回Slider对象
    return Slider;
})();
