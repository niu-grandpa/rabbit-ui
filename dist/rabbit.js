(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rabbit", [], factory);
	else if(typeof exports === 'object')
		exports["rabbit"] = factory();
	else
		root["rabbit"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/dayjs/locale/zh-cn.js":
/*!********************************************!*\
  !*** ./node_modules/dayjs/locale/zh-cn.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(_,e){ true?module.exports=e(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js")):0}(this,function(_){"use strict";_=_&&_.hasOwnProperty("default")?_.default:_;var e={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(_,e){switch(e){case"W":return _+"周";default:return _+"日"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(_,e){var t=100*_+e;return t<600?"凌晨":t<900?"早上":t<1100?"上午":t<1300?"中午":t<1800?"下午":"晚上"}};return _.locale(e,null,!0),e});


/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/***/ (function(module) {

!function(r,t){ true?module.exports=t():0}(this,function(){"use strict";return function(r,t,e){r=r||{};var n=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,t,e,o){return n.fromToBase(r,t,e,o)}e.en.relativeTime=o,n.fromToBase=function(t,n,i,d,u){for(var a,f,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(a=d?e(t).diff(i,y.d,!0):i.diff(t,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(a));if(s=a>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),f="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return f;var M=s?l.future:l.past;return"function"==typeof M?M(f):M.replace("%s",f)},n.to=function(r,t){return i(r,t,this,!0)},n.from=function(r,t){return i(r,t,this)};var d=function(r){return r.$u?e.utc():e()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}});


/***/ }),

/***/ "./src/build-umd.ts":
/*!****************************************!*\
  !*** ./src/build-umd.ts + 144 modules ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ build_umd; }
});

// NAMESPACE OBJECT: ./src/rabbit-simple-ui.ts
var rabbit_simple_ui_namespaceObject = {};
__webpack_require__.r(rabbit_simple_ui_namespaceObject);
__webpack_require__.d(rabbit_simple_ui_namespaceObject, {
  "Alert": function() { return components_alert; },
  "Avatar": function() { return components_avatar; },
  "BackTop": function() { return components_back_top; },
  "Badge": function() { return components_badge; },
  "Breadcrumb": function() { return components_breadcrumb; },
  "Button": function() { return components_button; },
  "Card": function() { return components_card; },
  "Carousel": function() { return components_carousel; },
  "Checkbox": function() { return components_checkbox; },
  "Collapse": function() { return components_collapse; },
  "CountDown": function() { return components_count_down; },
  "Divider": function() { return components_divider; },
  "Drawer": function() { return components_drawer; },
  "Dropdown": function() { return components_dropdown; },
  "Empty": function() { return components_empty; },
  "Jumbotron": function() { return components_jumbotron; },
  "Loading": function() { return components_loading_bar; },
  "Message": function() { return components_message; },
  "Modal": function() { return components_modal; },
  "Notice": function() { return components_notice; },
  "PageHeader": function() { return components_page_header; },
  "Poptip": function() { return components_poptip; },
  "Progress": function() { return components_progress; },
  "Radio": function() { return components_radio; },
  "Result": function() { return components_result; },
  "Skeleton": function() { return components_skeleton; },
  "Spin": function() { return components_spin; },
  "Steps": function() { return components_steps; },
  "Switch": function() { return components_switch; },
  "Tabs": function() { return components_tabs; },
  "Tag": function() { return components_tag; },
  "Time": function() { return components_time; },
  "Timeline": function() { return components_timeline; },
  "Tooltip": function() { return components_tooltip; }
});

// EXTERNAL MODULE: ./src/dom-utils/index.ts + 5 modules
var dom_utils = __webpack_require__("./src/dom-utils/index.ts");
;// CONCATENATED MODULE: ./src/mixins/warn.ts
function warn(msg) {
    console.error("[Rabbit] Error: " + msg);
    return;
}

;// CONCATENATED MODULE: ./src/mixins/arrow.ts
// 更新popver弹窗或下拉菜单的箭头方向

function scrollUpdate() {
    var tooltips = (0,dom_utils.$el)('.rab-tooltip-popper', { all: true });
    var poptips = (0,dom_utils.$el)('.rab-poptip-popper', { all: true });
    var scrollEv = function (target) {
        target.forEach(function (node) {
            var popperPlacement = node.dataset.popperPlacement;
            var xPlacement = node.getAttribute('x-placement');
            if (xPlacement != popperPlacement) {
                node.setAttribute('x-placement', popperPlacement);
            }
        });
    };
    // 当页面有这些组件存在时才做滚动监听
    if (tooltips.length > 0) {
        window.addEventListener('scroll', function () { return scrollEv(tooltips); });
    }
    if (poptips.length > 0) {
        window.addEventListener('scroll', function () { return scrollEv(poptips); });
    }
}
function toggleUpdate(popper, updateMode, reference, delay) {
    var setArrow = function () {
        var xPlacement = popper.getAttribute('x-placement');
        var popperPlacement = popper.dataset.popperPlacement;
        if (popperPlacement) {
            if (xPlacement === popperPlacement)
                return;
            popper.setAttribute('x-placement', popperPlacement);
        }
    };
    if (reference) {
        if (updateMode === 'hover') {
            reference.addEventListener(updateMode, function (e) {
                e.stopPropagation();
                if (delay) {
                    setTimeout(function () {
                        setArrow();
                    }, delay);
                }
                else {
                    setArrow();
                }
            });
        }
        else if (updateMode === 'click') {
            reference.addEventListener('click', function (e) {
                e.stopPropagation();
                setArrow();
            });
        }
        else if (updateMode === 'focus') {
            reference.addEventListener('mousedown', function (e) {
                e.stopPropagation();
                setArrow();
            });
        }
    }
    setArrow();
}

;// CONCATENATED MODULE: ./src/mixins/css-transition.ts
function CssTransition(elem, _a) {
    var enterCls = _a.enterCls, leaveCls = _a.leaveCls, inOrOut = _a.inOrOut, rmCls = _a.rmCls, timeout = _a.timeout, hiddenParent = _a.hiddenParent;
    var removeClassAfterTransition = function (aniClassName) {
        if (rmCls) {
            setTimeout(function () {
                aniClassName ? elem.classList.remove(aniClassName) : '';
            }, timeout);
        }
    };
    if (inOrOut === 'in') {
        // 如果父元素被隐藏则变为显示
        if (hiddenParent) {
            hiddenParent.style.display = '';
            hiddenParent.style.opacity = '1';
        }
        if (elem.style.display === 'none')
            elem.style.display = '';
        if (elem.style.opacity === '0')
            elem.style.opacity = '1';
        elem.classList.add(enterCls);
        removeClassAfterTransition(enterCls);
    }
    else if (inOrOut === 'out') {
        if (elem.classList.contains(enterCls)) {
            elem.classList.replace(enterCls, leaveCls);
        }
        else {
            elem.classList.add(leaveCls);
        }
        removeClassAfterTransition(leaveCls);
        // 过渡效果持续时间后隐藏元素
        setTimeout(function () {
            if (hiddenParent)
                hiddenParent.style.display = 'none';
            elem.style.display = 'none';
            elem.style.opacity = '0';
        }, timeout);
    }
}

;// CONCATENATED MODULE: ./src/mixins/one-node.ts

/**
 * 检查组件标签下是否具有一个父元素，
 * 不允许组件下有多个子节点用于添加额外内容，只有由一个节点组成。
 */
function moreThanOneNode(node) {
    if (node.childElementCount > 1) {
        warn("The <" + node.tagName.toLowerCase() + "> tag must have a parent element");
        return true;
    }
    return false;
}

;// CONCATENATED MODULE: ./src/mixins/scrollable.ts

function scrollable_scrollable(_a) {
    var _b = _a.scroll, scroll = _b === void 0 ? false : _b, _c = _a.lock, lock = _c === void 0 ? false : _c, node = _a.node, tagName = _a.tagName;
    // 是否禁止对页面滚动条的修改
    // 页面是否可以滚动
    if (lock && !scroll) {
        (0,dom_utils.setCss)(document.body, 'paddingRight', '17px');
        (0,dom_utils.setCss)(document.body, 'overflow', 'hidden');
    }
    else {
        (0,dom_utils.setCss)(document.body, 'paddingRight', '');
        (0,dom_utils.setCss)(document.body, 'overflow', '');
    }
    var prevNode = node === null || node === void 0 ? void 0 : node.previousElementSibling;
    // 解决抽屉或对话框组件在同时打开多个的情况下，只关闭了一个窗口而页面滚动条恢复出现的bug
    if (prevNode) {
        var prevTagName = prevNode.tagName.toLocaleLowerCase().replace(/r-/, '');
        if (prevTagName === tagName) {
            // @ts-ignore
            if (prevNode.dataset[prevTagName + "Visable"] === 'true') {
                scrollable_scrollable({ scroll: false, lock: true });
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/mixins/cb-promise.ts
/**
 * 用于实例组件关闭后返回 promise，提供 then 接口在关闭后运行 callback
 * @param duration 组件关闭的时间，这里是用于组件没自己的配置项时，设为全局时间
 * @param compConfig 组件的配置项，这里是用于是否切换为组件自己设置的时间
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function usePromiseCallback(duration, compConfig) {
    // promise 触发的时机为默认时间
    var timeout = duration;
    // 当组件参数以对象形式传递，并且设置了自己的 duration则修改 promise的触发时机
    if (typeof compConfig === 'object') {
        if (compConfig.duration || compConfig.duration === 0) {
            timeout = compConfig.duration;
        }
        else {
            timeout = duration;
        }
    }
    return promiseCb(timeout);
}
function promiseCb(duration) {
    var timer = null;
    return new Promise(function (afterClose) {
        timer = setTimeout(afterClose, duration * 1000);
        // duration 为 0 则说明当前组件不自动关闭
        duration === 0 ? clearTimeout(timer) : timer;
    });
}

;// CONCATENATED MODULE: ./src/mixins/click-outside.ts


/**
 * 适用tooltip、poptip的点击空白处关闭
 */
function clickOutside(target, datasetVal, leaveCls) {
    var hideJudgment = function () {
        target.forEach(function (node) {
            if (node.dataset[datasetVal] === 'true') {
                node.dataset[datasetVal] = 'false';
                CssTransition(node, {
                    inOrOut: 'out',
                    rmCls: true,
                    leaveCls: leaveCls,
                    timeout: 200
                });
            }
        });
    };
    (0,dom_utils.bind)(document, 'focusout', function (e) {
        e.stopPropagation();
        hideJudgment();
    });
    (0,dom_utils.bind)(document, 'click', function (e) {
        e.stopPropagation();
        hideJudgment();
    });
}

;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js


function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe[incompatible-return]: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js





/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js








function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/validateModifiers.js


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js



 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js














function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js





 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets ? roundOffsetsByDPR(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === enums_top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js





/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js











function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper-lite.js





var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles];
var popper_lite_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/index.js









;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var popper_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./src/utils/check-type.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

var typeOf = function (r) {
    var s = Object.prototype.toString.call(r);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
var errMsg = function (right, wrong) {
    warn("The expected type accepted is " + right + ", but the error type currently in use is --> " + wrong);
    return false;
};
var isUndef = function (r) { return typeof r === 'undefined'; };
var isStr = function (r) {
    return typeof r === 'string' ? true : errMsg('string', typeOf(r));
};
var isNum = function (r) {
    return typeof r === 'number' ? true : errMsg('number', typeOf(r));
};
var isBol = function (r) {
    return typeof r === 'boolean' ? true : errMsg('boolean', typeOf(r));
};
/**
 *
 * @param r  函数名
 * @param param 回调附带的参数。有多个参数时使用数组传递
 */
var isFn = function (r, param) {
    return typeof r === 'function' ? r(param) : errMsg('function', typeOf(r));
};
var isObj = function (r) {
    return r.constructor === Object ? true : errMsg('object', typeOf(r));
};
var isArr = function (r) {
    return r.constructor === Array ? true : errMsg('array', typeOf(r));
};

;// CONCATENATED MODULE: ./src/utils/destroy.ts

function destroyElem(elem, _a) {
    var _b = _a.fadeOut, fadeOut = _b === void 0 ? false : _b, clsLeave = _a.clsLeave, clsEnter = _a.clsEnter, _c = _a.duration, duration = _c === void 0 ? 3 : _c, _d = _a.transitionTime, transitionTime = _d === void 0 ? 250 : _d, _e = _a.destroy, destroy = _e === void 0 ? true : _e;
    var timer = null;
    // 方式一：是否只用淡出效果
    if (fadeOut) {
        isDismiss();
        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: 'rab-fade-in',
            leaveCls: 'rab-fade-out',
            timeout: 250
        });
        return;
    }
    // 方式二：手动配置过渡效果和过渡时间
    timer = setTimeout(function () {
        isDismiss();
        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: clsEnter,
            leaveCls: clsLeave,
            timeout: transitionTime
        });
    }, duration * 1000);
    // 自动关闭的延时为 0 则不关闭
    duration <= 0 ? clearTimeout(timer) : timer;
    // 判断需要销毁或者是仅隐藏元素
    function isDismiss() {
        setTimeout(function () {
            if (destroy) {
                elem.remove();
                elem = null; // 释放内存
            }
        }, transitionTime);
    }
}
function destroyElemByKey(options) {
    var prefixKey = options.prefixKey;
    var key = options.key;
    // 统一转换为字符串
    typeof key !== 'string' ? (key = key === null || key === void 0 ? void 0 : key.toString()) : key;
    // 传入的key是否选取得到对应的元素
    var target = document.querySelector("[" + prefixKey + "-key=\"" + key + "\"]");
    target ? destroyElem(target, options) : warn("The key value is invalid --> \"" + key + "\"");
}

;// CONCATENATED MODULE: ./src/utils/use-html-string.ts

/**
 * 设置属性是否支持传入 HTML 片段
 * @param elem
 * @param content
 * @param use
 */
function isUseHTMLString(elem, content, use) {
    use ? (0,dom_utils.setHtml)(elem, content) : (0,dom_utils.setText)(elem, content);
}

;// CONCATENATED MODULE: ./src/utils/validComps.ts
/**
 * 检查是否为有效并且正确的组件
 */
function validComps(target, compName) {
    var r = '[Rabbit] Error: ';
    if (!target) {
        throw (new Error().message = r + "The target element you selected for configuration does not exist --> \"" + target + "\"");
    }
    var targetName = target.tagName.toLowerCase().replace(/r-/, '');
    if (targetName !== compName) {
        throw (new Error().message = r + "The configured component was selected incorrectly, it is not a " + compName + " component --> \"" + targetName + "\"");
    }
}

;// CONCATENATED MODULE: ./src/utils/index.ts






;// CONCATENATED MODULE: ./src/mixins/tooltip.ts



function _newCreatePopper(reference, popper, placement, offset) {
    return popper_createPopper(reference, popper, {
        placement: placement,
        modifiers: [
            {
                name: 'computeStyles',
                options: {
                    gpuAcceleration: false // 使用top/left属性。否则会和弹出器动画冲突
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: false // 避免重新计算弹出器位置从而造成位置牛头不对马嘴
                }
            },
            {
                name: 'offset',
                options: {
                    offset: [offset] // 自定义弹出器出现位置的偏移量
                }
            }
        ]
    });
}
function handleHoverShowAndHideEvents(_a) {
    var reference = _a.reference, popper = _a.popper, datasetVal = _a.datasetVal, showCb = _a.showCb, hideCb = _a.hideCb, delay = _a.delay, timer = _a.timer;
    (0,dom_utils.bind)(reference, 'mouseenter', function () {
        timer = setTimeout(function () {
            showEv();
        }, delay);
    });
    (0,dom_utils.bind)(reference, 'mouseleave', hideEv);
    // 通过设置 popper.dataset.tooltipShow 的方式可以判断提示框是否显示，
    // 并根据设置的值 "true" 和 "false" 来判断是否执行对应回调事件，
    // 避免出现鼠标快速经过但没有显示提示框，却依然执行了提示框消失时触发的回调
    function showEv() {
        popper.dataset[datasetVal] = 'show';
        showCb && isFn(showCb);
    }
    function hideEv() {
        clearTimeout(timer);
        if (popper.dataset[datasetVal] === 'show') {
            popper.dataset[datasetVal] = 'hide';
            hideCb && isFn(hideCb);
        }
        (0,dom_utils.unbind)(reference, 'mouseenter', showEv);
    }
}

;// CONCATENATED MODULE: ./src/mixins/index.ts










// EXTERNAL MODULE: ./src/components/prefix.ts
var prefix = __webpack_require__("./src/components/prefix.ts");
;// CONCATENATED MODULE: ./src/components/alert/alert.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */




var Alert = /** @class */ (function () {
    function Alert() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-alert', { all: true });
        this._create(this.COMPONENTS);
    }
    Alert.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'alert');
        var AlertTitle = target.querySelector("." + prefix.default.alert + "-title");
        var AlertIcon = target.querySelector("." + prefix.default.alert + "-icon");
        return {
            get title() {
                return (0,dom_utils.setHtml)(AlertTitle);
            },
            set title(newVal) {
                if (newVal && !isStr(newVal))
                    return;
                (0,dom_utils.setHtml)(AlertTitle, newVal);
            },
            get icon() {
                return (0,dom_utils.setHtml)(AlertIcon);
            },
            set icon(newVal) {
                if (!AlertIcon) {
                    warn("You need to set the \"show-icon\" attribute to \"true\" --> \"" + el + "\"");
                    return;
                }
                if (newVal && !isStr(newVal))
                    return;
                (0,dom_utils.setHtml)(AlertIcon, newVal);
            },
            events: function (_a) {
                var onClose = _a.onClose;
                var AlertClose = target.querySelector("." + prefix.default.alert + "-close");
                if (!AlertClose)
                    return;
                (0,dom_utils.bind)(AlertClose, 'click', function (event) { return onClose && isFn(onClose, event); });
            }
        };
    };
    Alert.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            if (moreThanOneNode(node))
                return;
            var _a = _this._attrs(node), icon = _a.icon, type = _a.type, title = _a.title, closable = _a.closable, banner = _a.banner, showIcon = _a.showIcon, closeText = _a.closeText;
            var placeholderNode = node.firstElementChild;
            _this._setMainTemplate(node, title);
            _this._setBanner(node, banner);
            _this._setIconType(node, type, showIcon, icon, placeholderNode);
            _this._setDescription(node, placeholderNode);
            _this._setClosable(node, closable, closeText);
            _this._handleClose(node);
            (0,dom_utils.removeAttrs)(node, ['title', 'icon', 'banner', 'closable', 'close-text', 'show-icon']);
        });
    };
    Alert.prototype._setMainTemplate = function (node, title) {
        var template = "\n         <div class=\"" + prefix.default.alert + "-title\">" + title + "</div>\n         <div class=\"" + prefix.default.alert + "-desc\"></div>\n        ";
        (0,dom_utils.setHtml)(node, template);
    };
    Alert.prototype._setBanner = function (node, banner) {
        if (!banner)
            return;
        node.classList.add(prefix.default.alert + "-with-banner");
    };
    Alert.prototype._setIconType = function (node, type, showIcon, icon, desc) {
        if (!showIcon)
            return;
        node.classList.add(prefix.default.alert + "-with-icon");
        var AlertIconWrap = (0,dom_utils.createElem)('span');
        AlertIconWrap.className = prefix.default.alert + "-icon";
        if (icon) {
            (0,dom_utils.setHtml)(AlertIconWrap, icon);
        }
        else {
            // 默认为 info 图标
            var iconType = 'information-circle';
            switch (type) {
                case 'success':
                    iconType = 'checkmark-circle';
                    break;
                case 'warning':
                    iconType = 'alert';
                    break;
                case 'error':
                    iconType = 'close-circle';
                    break;
            }
            if (desc) {
                iconType += '-outline';
            }
            var AlertIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-" + iconType + "\"></i>";
            (0,dom_utils.setHtml)(AlertIconWrap, AlertIcon);
        }
        node.appendChild(AlertIconWrap);
    };
    Alert.prototype._setDescription = function (node, placeholderNode) {
        if (!placeholderNode)
            return;
        node.classList.add(prefix.default.alert + "-with-desc");
        var AlertDesc = node.querySelector("." + prefix.default.alert + "-desc");
        AlertDesc.appendChild(placeholderNode);
    };
    Alert.prototype._setClosable = function (node, closable, closeText) {
        if (!closable)
            return;
        var AlertClose = "\n        <a class=\"" + prefix.default.alert + "-close\">\n          " + (!closeText ? " <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>" : closeText) + "\n        </a>";
        node.insertAdjacentHTML('beforeend', AlertClose);
    };
    Alert.prototype._handleClose = function (node) {
        var AlertIcon = node.querySelector("." + prefix.default.alert + "-close");
        if (!AlertIcon)
            return;
        (0,dom_utils.bind)(AlertIcon, 'click', function () { return destroyElem(node, { fadeOut: true, destroy: true }); });
    };
    Alert.prototype._attrs = function (node) {
        return {
            icon: (0,dom_utils.getStrTypeAttr)(node, 'icon', ''),
            type: (0,dom_utils.getStrTypeAttr)(node, 'type', 'info'),
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            closeText: (0,dom_utils.getStrTypeAttr)(node, 'close-text', ''),
            banner: (0,dom_utils.getBooleanTypeAttr)(node, 'banner'),
            closable: (0,dom_utils.getBooleanTypeAttr)(node, 'closable'),
            showIcon: (0,dom_utils.getBooleanTypeAttr)(node, 'show-icon')
        };
    };
    return Alert;
}());
/* harmony default export */ var alert_alert = (Alert);

;// CONCATENATED MODULE: ./src/components/alert/index.ts

/* harmony default export */ var components_alert = (alert_alert);

;// CONCATENATED MODULE: ./src/components/avatar/avatar.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */




var Avatar = /** @class */ (function () {
    function Avatar() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-avatar', { all: true });
        this._create(this.COMPONENTS);
    }
    Avatar.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'avatar');
        var AvatarImage = target.querySelector('img');
        return {
            events: function (_a) {
                var onError = _a.onError;
                if (!AvatarImage) {
                    warn("Unable to add an event where the image failed to load for the current avatar --> \"" + el + "\"");
                    return;
                }
                (0,dom_utils.bind)(AvatarImage, 'error', function (event) { return onError && isFn(onError, event); });
            }
        };
    };
    Avatar.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), icon = _a.icon, src = _a.src, alt = _a.alt, size = _a.size;
            _this._setSize(node, size);
            _this._setIcon(node, icon);
            _this._setImage(node, src, alt);
            _this._setText(node, icon, src);
            (0,dom_utils.removeAttrs)(node, ['icon', 'src', 'alt']);
        });
    };
    Avatar.prototype._setSize = function (node, size) {
        if (!size)
            return;
        var _size = Number(size);
        if (!_size)
            return;
        (0,dom_utils.setCss)(node, 'width', _size + "px");
        (0,dom_utils.setCss)(node, 'height', _size + "px");
        (0,dom_utils.setCss)(node, 'fontSize', _size / 2 + "px");
        node.removeAttribute('size');
    };
    Avatar.prototype._setIcon = function (node, icon) {
        if (!icon)
            return;
        node.classList.add(prefix.default.avatar + "-icon");
        var AvatarIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-" + icon + "\"></i>";
        (0,dom_utils.setHtml)(node, AvatarIcon);
    };
    Avatar.prototype._setImage = function (node, src, alt) {
        if (!src)
            return;
        node.classList.add(prefix.default.avatar + "-image");
        var AvatarImage = "<img src=\"" + src + "\" alt=\"" + alt + "\" />";
        (0,dom_utils.setHtml)(node, AvatarImage);
    };
    Avatar.prototype._setText = function (node, icon, src) {
        if (icon || src)
            return;
        if (!(0,dom_utils.setHtml)(node))
            return;
        var text = (0,dom_utils.setHtml)(node);
        var AvatarText = "<span class=\"" + prefix.default.avatar + "-string\">" + text + "</span>";
        (0,dom_utils.setHtml)(node, AvatarText);
        this._setScale(node);
    };
    // 防止字符型头像的字体溢出边界
    Avatar.prototype._setScale = function (node) {
        var children = node.querySelector("." + prefix.default.avatar + "-string");
        if (!children)
            return;
        var avatarWidth = node.getBoundingClientRect().width;
        var childrenWidth = children.offsetWidth;
        if (avatarWidth - 8 < childrenWidth) {
            var newScale = "scale(" + (avatarWidth - 8) / childrenWidth + ") translateX(-50%)";
            (0,dom_utils.setCss)(children, 'transform', "" + newScale);
        }
        else {
            (0,dom_utils.setCss)(children, 'transform', 'scale(1) translateX(-50%)');
        }
    };
    Avatar.prototype._attrs = function (node) {
        return {
            icon: (0,dom_utils.getStrTypeAttr)(node, 'icon', ''),
            src: (0,dom_utils.getStrTypeAttr)(node, 'src', ''),
            alt: (0,dom_utils.getStrTypeAttr)(node, 'alt', ''),
            size: (0,dom_utils.getStrTypeAttr)(node, 'size', '')
        };
    };
    return Avatar;
}());
/* harmony default export */ var avatar = (Avatar);

;// CONCATENATED MODULE: ./src/components/avatar/index.ts

/* harmony default export */ var components_avatar = (avatar);

;// CONCATENATED MODULE: ./src/components/back-top/back-top.ts


var BackTop = /** @class */ (function () {
    function BackTop() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-back-top', { all: true });
        this._create(this.COMPONENTS);
    }
    BackTop.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), right = _a.right, bottom = _a.bottom, height = _a.height, duration = _a.duration;
            _this._setRight(node, right);
            _this._setBottom(node, bottom);
            _this._setAppearance(node);
            _this._handleScroll(node, height);
            _this._handleClick(node, duration);
            (0,dom_utils.removeAttrs)(node, ['right', 'bottom', 'height', 'duration']);
        });
    };
    BackTop.prototype._setRight = function (node, right) {
        (0,dom_utils.setCss)(node, 'right', right + "px");
    };
    BackTop.prototype._setBottom = function (node, bottom) {
        (0,dom_utils.setCss)(node, 'bottom', bottom + "px");
    };
    BackTop.prototype._setAppearance = function (node) {
        if ((0,dom_utils.setHtml)(node) && (0,dom_utils.setHtml)(node) !== ' ') {
            (0,dom_utils.setHtml)(node, node.innerHTML);
        }
        else {
            var template = "<div class=\"" + prefix.default.backtop + "-inner\">\n                                  <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-arrow-up\"></i>\n                              </div>";
            (0,dom_utils.setHtml)(node, template);
        }
    };
    BackTop.prototype._handleScroll = function (node, height) {
        var visable = function (y) {
            var scrollY = Math.floor(y);
            var visibilityHeight = Math.floor(height);
            // 判断页面是否滚动到指定显示的高度
            scrollY >= visibilityHeight
                ? (0,dom_utils.setCss)(node, 'display', 'block')
                : (0,dom_utils.setCss)(node, 'display', '');
        };
        (0,dom_utils.bind)(window, 'scroll', function () {
            visable(window.scrollY);
        });
    };
    BackTop.prototype._handleClick = function (node, duration) {
        var _this = this;
        (0,dom_utils.bind)(node, 'click', function () {
            var sTop = document.documentElement.scrollTop || document.body.scrollTop;
            _this._scrollTop(window, sTop, 0, duration);
        });
    };
    BackTop.prototype._scrollTop = function (el, from, to, duration) {
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame =
                window.webkitRequestAnimationFrame ||
                    // @ts-ignore
                    window.mozRequestAnimationFrame ||
                    // @ts-ignore
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        return window.setTimeout(callback, 1000 / 60);
                    };
        }
        var difference = Math.abs(from - to);
        var step = Math.ceil((difference / duration) * 25);
        var scroll = function (start, end, step) {
            var d = start + step > end ? end : start + step;
            if (start <= end && d == 0)
                return;
            d = start - step < end ? end : start - step;
            el === window ? window.scrollTo(d, d) : (el.scrollTop = d);
            window.requestAnimationFrame(function () { return scroll(d, end, step); });
        };
        scroll(from, to, step);
    };
    BackTop.prototype._attrs = function (node) {
        return {
            right: (0,dom_utils.getNumTypeAttr)(node, 'right', 30),
            bottom: (0,dom_utils.getNumTypeAttr)(node, 'bottom', 30),
            height: (0,dom_utils.getNumTypeAttr)(node, 'height', 400),
            duration: (0,dom_utils.getNumTypeAttr)(node, 'duration', 500)
        };
    };
    return BackTop;
}());
/* harmony default export */ var back_top = (BackTop);

;// CONCATENATED MODULE: ./src/components/back-top/index.ts

/* harmony default export */ var components_back_top = (back_top);

;// CONCATENATED MODULE: ./src/components/badge/badge.ts




var Badge = /** @class */ (function () {
    function Badge() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-badge', { all: true });
        this._create(this.COMPONENTS);
    }
    Badge.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'badge');
        var countContainer = target.querySelector("." + prefix.default.badge + "-count");
        var dotContainer = target.querySelector("." + prefix.default.badge + "-dot");
        var _a = Badge.prototype, _getMaxCount = _a._getMaxCount, _showZero = _a._showZero, _setMaxCount = _a._setMaxCount;
        var maxCount = _getMaxCount(target);
        var showZero = _showZero(target);
        return {
            get count() {
                return countContainer === null || countContainer === void 0 ? void 0 : countContainer.textContent;
            },
            set count(newVal) {
                if (countContainer && isNum(newVal)) {
                    if (newVal > maxCount) {
                        _setMaxCount(countContainer, maxCount);
                    }
                    else {
                        (0,dom_utils.setText)(countContainer, "" + newVal);
                        if (newVal <= 0 && !showZero) {
                            (0,dom_utils.setCss)(countContainer, 'display', 'none');
                        }
                        else {
                            (0,dom_utils.setCss)(countContainer, 'display', '');
                        }
                    }
                }
                else {
                    warn("The count value of this badge cannot be set --> \"" + el + "\"");
                }
            },
            get text() {
                return countContainer === null || countContainer === void 0 ? void 0 : countContainer.textContent;
            },
            set text(newVal) {
                if (!isStr(newVal)) {
                    warn("The text value of this badge cannot be set --> \"" + el + "\"");
                    return;
                }
                (0,dom_utils.setText)(countContainer, newVal);
            },
            get dot() {
                return dotContainer;
            },
            set dot(newVal) {
                if (!dotContainer) {
                    warn("Unable to set this badge to dot --> \"" + el + "\"");
                    return;
                }
                if (isBol(newVal) && newVal) {
                    (0,dom_utils.setCss)(dotContainer, 'display', '');
                }
                else {
                    (0,dom_utils.setCss)(dotContainer, 'display', 'none');
                }
            }
        };
    };
    Badge.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            _this._setCount(node);
            _this._setStatusWithColor(node);
            (0,dom_utils.removeAttrs)(node, [
                'count',
                'text',
                'status',
                'color',
                'show-zero',
                'max-count',
                'dot'
            ]);
        });
    };
    Badge.prototype._setCount = function (node) {
        var count = this._getCount(node);
        var maxCount = this._getMaxCount(node);
        var BadgeCount = (0,dom_utils.createElem)('sup');
        BadgeCount.className = prefix.default.badge + "-count";
        if (count || count === 0) {
            // 显示的数字大于maxCount时，显示${maxCount}+
            if (count > maxCount) {
                this._setMaxCount(BadgeCount, maxCount);
            }
            else {
                // 数字为 0 时隐藏或者展示 Badge
                if (count <= 0 && !this._showZero(node)) {
                    (0,dom_utils.setCss)(BadgeCount, 'display', 'none');
                }
                else {
                    (0,dom_utils.setText)(BadgeCount, "" + count);
                }
            }
            this._setDot(node, BadgeCount);
        }
        if (!this._getStatus(node) && !this._getColor(node)) {
            node.appendChild(BadgeCount);
            // 状态点外观不需要设置为独立展示
            this._setAlone(BadgeCount);
        }
        this._setText(node, BadgeCount);
        this._setOffset(node, BadgeCount);
    };
    Badge.prototype._setMaxCount = function (node, maxCount) {
        (0,dom_utils.setText)(node, maxCount + "+");
    };
    Badge.prototype._setDot = function (node, children) {
        if (!this._showDot(node))
            return;
        // 设置为小红点则不显示任何计数内容
        (0,dom_utils.setHtml)(children, '');
        (0,dom_utils.setCss)(children, 'display', '');
        children.className = prefix.default.badge + "-dot";
    };
    Badge.prototype._setText = function (parent, children) {
        // 区分与标签属性 status 或 color 配合的 text 属性
        if (!this._getStatus(parent) && !this._getColor(parent)) {
            var text = this._getText(parent);
            if (text) {
                (0,dom_utils.setCss)(children, 'display', '');
                (0,dom_utils.setText)(children, text);
            }
        }
    };
    Badge.prototype._setAlone = function (children) {
        if (!children.previousElementSibling) {
            children.classList.add(prefix.default.badge + "-count-alone");
        }
    };
    Badge.prototype._setOffset = function (parent, children) {
        var offset = this._getOffset(parent);
        (0,dom_utils.setCss)(children, 'marginTop', (offset === null || offset === void 0 ? void 0 : offset.x) + "px");
        (0,dom_utils.setCss)(children, 'marginRight', (offset === null || offset === void 0 ? void 0 : offset.y) + "px");
    };
    Badge.prototype._setStatusWithColor = function (node) {
        var status = this._getStatus(node);
        var color = this._getColor(node);
        var text = this._getText(node);
        if (!status && !color)
            return;
        var BadgeStatusDot = (0,dom_utils.createElem)('span');
        var BadgeStatusText = (0,dom_utils.createElem)('span');
        if ((text && status) || (text && color))
            (0,dom_utils.setText)(BadgeStatusText, text);
        var statusCls;
        var colorCls = '';
        status ? (statusCls = prefix.default.badge + "-status-" + status) : (statusCls = '');
        // 设置更多预设的状态点颜色，或者自定义颜色
        var colorType = [
            'blue',
            'green',
            'red',
            'yellow',
            'magenta',
            'volcano',
            'orange',
            'gold',
            'lime',
            'cyan',
            'geekblue',
            'purple'
        ];
        if (colorType.includes(color)) {
            colorCls = prefix.default.badge + "-status-" + color;
        }
        else {
            (0,dom_utils.setCss)(BadgeStatusDot, 'backgroundColor', color);
        }
        BadgeStatusDot.className = prefix.default.badge + "-status-dot " + statusCls + " " + colorCls;
        BadgeStatusText.className = prefix.default.badge + "-status-text";
        node.append(BadgeStatusDot, BadgeStatusText);
    };
    Badge.prototype._getCount = function (node) {
        return Number(node.getAttribute('count'));
    };
    Badge.prototype._getMaxCount = function (node) {
        return Number(node.getAttribute('max-count')) || 99;
    };
    Badge.prototype._getOffset = function (node) {
        // 转为真实数组，如果赋值是 offset = ['0','1'] 这样的则会报错
        var offset = JSON.parse(node.getAttribute('offset') || '[]');
        // 如果是数组，那么不论写了多少个值都只返回前两个
        if (isArr(offset) && offset.length > 0) {
            return {
                x: offset[0],
                y: offset[1]
            };
        }
    };
    Badge.prototype._getStatus = function (node) {
        return node.getAttribute('status') || '';
    };
    Badge.prototype._getColor = function (node) {
        return node.getAttribute('color') || '';
    };
    Badge.prototype._getText = function (node) {
        return node.getAttribute('text') || '';
    };
    Badge.prototype._showZero = function (node) {
        return node.getAttribute('show-zero') === 'true';
    };
    Badge.prototype._showDot = function (node) {
        return node.getAttribute('dot') === 'true';
    };
    return Badge;
}());
/* harmony default export */ var badge = (Badge);

;// CONCATENATED MODULE: ./src/components/badge/index.ts

/* harmony default export */ var components_badge = (badge);

;// CONCATENATED MODULE: ./src/components/breadcrumb/breadcrumb.ts


var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-breadcrumb', { all: true });
        this._create(this.COMPONENTS);
    }
    Breadcrumb.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var separator = _this._attrs(node).separator;
            _this._createItem(node, separator);
            (0,dom_utils.removeAttrs)(node, ['separator']);
        });
    };
    Breadcrumb.prototype._createItem = function (node, separator) {
        var children = node.children;
        var Fragment = document.createDocumentFragment();
        Array.from(children).forEach(function (child) {
            var Wrapper = (0,dom_utils.createElem)('span');
            var Separator = (0,dom_utils.createElem)('span');
            Separator.className = prefix.default.breadcrumb + "-item-separator";
            // 设置分隔符
            (0,dom_utils.setHtml)(Separator, "" + separator);
            child.classList.add(prefix.default.breadcrumb + "-item-link");
            // 初始化为行内块样式
            (0,dom_utils.setCss)(child, 'display', 'inline-block');
            Wrapper.append(child, Separator);
            Fragment.appendChild(Wrapper);
        });
        node.appendChild(Fragment);
    };
    Breadcrumb.prototype._attrs = function (node) {
        return {
            separator: (0,dom_utils.getStrTypeAttr)(node, 'separator', '/')
        };
    };
    return Breadcrumb;
}());
/* harmony default export */ var breadcrumb = (Breadcrumb);

;// CONCATENATED MODULE: ./src/components/breadcrumb/index.ts

/* harmony default export */ var components_breadcrumb = (breadcrumb);

;// CONCATENATED MODULE: ./src/components/button/button.ts



var Button = /** @class */ (function () {
    function Button() {
        this.VERSION = '1.0';
        this.COMPONENTS = (0,dom_utils.$el)("." + prefix.default.button, { all: true });
        this._getAllBtns(this.COMPONENTS);
    }
    Button.prototype.config = function (el) {
        var target = typeof el === 'string' ? (0,dom_utils.$el)(el) : el;
        validComps(target, 'button');
        return {
            get loading() {
                return false;
            },
            set loading(newVal) {
                if (!isBol(newVal))
                    return;
                var loadingIcon = target.querySelector("." + prefix.default.icon + "-loading-solid");
                if (newVal) {
                    if (!loadingIcon) {
                        target.classList.add(prefix.default.button + "-loading");
                        target.prepend(Button.prototype._loadIcon());
                    }
                }
                else {
                    target.classList.remove(prefix.default.button + "-loading");
                    loadingIcon ? loadingIcon.remove() : '';
                }
            }
        };
    };
    Button.prototype._getAllBtns = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            _this._setLoading(node);
            _this._setIcon(node);
            (0,dom_utils.removeAttrs)(node, ['icon', 'loading']);
        });
    };
    Button.prototype._setLoading = function (node) {
        if (this._isLoading(node)) {
            if (node.innerHTML === '')
                node.classList.add(prefix.default.button + "-icon-only");
            node.classList.add(prefix.default.button + "-loading");
            node.prepend(this._loadIcon());
        }
    };
    Button.prototype._setIcon = function (node) {
        if (!this._getIcon(node))
            return;
        if (node.innerHTML === '') {
            var btnIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-" + this._getIcon(node) + "\"></i>";
            node.classList.add(prefix.default.button + "-icon-only");
            (0,dom_utils.setHtml)(node, btnIcon);
        }
        else {
            var Icon = (0,dom_utils.createElem)('i');
            Icon.className = prefix.default.icon + " " + prefix.default.icon + "-" + this._getIcon(node);
            node.prepend(Icon);
        }
    };
    Button.prototype._isLoading = function (node) {
        return node.getAttribute('loading') === 'true';
    };
    Button.prototype._loadIcon = function () {
        var LoadIcon = (0,dom_utils.createElem)('i');
        LoadIcon.className = "rab-load-loop " + prefix.default.icon + " " + prefix.default.icon + "-loading-solid";
        // v1.0.2 取消样式高度，否则加载中图标会和文字不在同一水平线上
        // setCss(LoadIcon, 'height', '25px');
        return LoadIcon;
    };
    Button.prototype._getIcon = function (node) {
        return node.getAttribute('icon') || '';
    };
    return Button;
}());
/* harmony default export */ var button_button = (Button);

;// CONCATENATED MODULE: ./src/components/button/index.ts

/* harmony default export */ var components_button = (button_button);

;// CONCATENATED MODULE: ./src/components/card/card.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */




var Card = /** @class */ (function () {
    function Card() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-card', { all: true });
        this._create(this.COMPONENTS);
    }
    Card.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'card');
        var CardHead = target.querySelector("." + prefix.default.card + "-head");
        var CardExtra = target.querySelector("." + prefix.default.card + "-extra");
        return {
            get title() {
                return (0,dom_utils.setHtml)(CardHead);
            },
            set title(newVal) {
                if (newVal && !isStr(newVal))
                    return;
                (0,dom_utils.setHtml)(CardHead, newVal);
            },
            get extra() {
                return (0,dom_utils.setHtml)(CardExtra);
            },
            set extra(newVal) {
                if (newVal && !isStr(newVal))
                    return;
                (0,dom_utils.setHtml)(CardExtra, newVal);
            }
        };
    };
    Card.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            if (moreThanOneNode(node))
                return;
            var placeholderNode = node.firstElementChild;
            var _a = _this._attrs(node), title = _a.title, extra = _a.extra, shadow = _a.shadow, noBorder = _a.noBorder, disHover = _a.disHover;
            _this._isShowBordered(node, noBorder);
            _this._isShowShadow(node, shadow);
            _this._isDisHover(node, disHover);
            _this._setHead(node, title);
            _this._setBody(node, placeholderNode);
            _this._setExtra(node, extra);
            (0,dom_utils.removeAttrs)(node, ['title', 'extra', 'shadow', 'dis-hover', 'bordered']);
        });
    };
    Card.prototype._isShowBordered = function (node, noBorder) {
        if (!noBorder)
            return;
        node.classList.add(prefix.default.card + "-no-border");
    };
    Card.prototype._isShowShadow = function (node, shadow) {
        if (!shadow)
            return;
        node.classList.add(prefix.default.card + "-shadow");
    };
    Card.prototype._isDisHover = function (node, disHover) {
        if (!disHover)
            return;
        node.classList.add(prefix.default.card + "-dis-hover");
    };
    Card.prototype._setHead = function (node, title) {
        if (!title)
            return;
        var CardHeadTemplate = "<div class=\"" + prefix.default.card + "-head\">" + title + "</div>";
        node.insertAdjacentHTML('afterbegin', CardHeadTemplate);
    };
    Card.prototype._setBody = function (node, placeholderNode) {
        var Fragment = document.createDocumentFragment();
        var CardBody = (0,dom_utils.createElem)('div');
        CardBody.className = prefix.default.card + "-body";
        CardBody.appendChild(placeholderNode);
        Fragment.appendChild(CardBody);
        node.appendChild(Fragment);
    };
    Card.prototype._setExtra = function (node, extra) {
        if (!extra)
            return;
        var CardExtraTemplate = "<div class=\"" + prefix.default.card + "-extra\">" + extra + "</div>";
        node.insertAdjacentHTML('beforeend', CardExtraTemplate);
    };
    Card.prototype._attrs = function (node) {
        return {
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            extra: (0,dom_utils.getStrTypeAttr)(node, 'extra', ''),
            shadow: (0,dom_utils.getBooleanTypeAttr)(node, 'shadow'),
            disHover: (0,dom_utils.getBooleanTypeAttr)(node, 'dis-hover'),
            noBorder: (0,dom_utils.getBooleanTypeAttr)(node, 'no-border')
        };
    };
    return Card;
}());
/* harmony default export */ var card = (Card);

;// CONCATENATED MODULE: ./src/components/card/index.ts

/* harmony default export */ var components_card = (card);

;// CONCATENATED MODULE: ./src/components/carousel/carousel.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */




var AUTOPLAYSPEED = 2000;
var DURATION = 520;
var Carousel = /** @class */ (function () {
    function Carousel() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-carousel', { all: true });
        this._create(this.COMPONENTS);
    }
    Carousel.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'carousel');
        var _attrs = Carousel.prototype._attrs;
        var _a = _attrs(target), autoplay = _a.autoplay, autoplaySpeed = _a.autoplaySpeed, hoverPause = _a.hoverPause;
        return {
            events: function (_a) {
                var onClick = _a.onClick, onChange = _a.onChange;
                var elems = target.querySelectorAll("." + prefix.default.carousel + "-item");
                var LeftArrow = target.querySelector("." + prefix.default.carousel + "-arrow.left");
                var RightArrow = target.querySelector("." + prefix.default.carousel + "-arrow.right");
                var lastIndex = elems.length - 1;
                var handleChange = function (siblingType, newSetElem) {
                    var oldActiveElem = target.querySelector("." + prefix.default.carousel + "-item.active");
                    var activeElem = oldActiveElem[siblingType] || newSetElem;
                    var oldValue = Number(oldActiveElem.dataset['index']);
                    // @ts-ignore
                    var value = Number(activeElem.dataset['index']);
                    onChange && isFn(onChange, [oldValue, value]);
                };
                var autoPlayUseChangeEvent = function () {
                    if (!autoplay)
                        return;
                    var eventTimer = null;
                    var startEvent = function () {
                        eventTimer = window.setInterval(function () {
                            handleChange('nextElementSibling', elems[0]);
                        }, autoplaySpeed);
                    };
                    var pauseEvent = function () {
                        return eventTimer ? window.clearInterval(eventTimer) : false;
                    };
                    startEvent();
                    if (hoverPause === 'false')
                        return;
                    (0,dom_utils.bind)(target, 'mouseenter', function () { return pauseEvent(); });
                    (0,dom_utils.bind)(target, 'mouseleave', function () { return startEvent(); });
                };
                var handleClick = function () {
                    elems.forEach(function (elem, index) {
                        (0,dom_utils.bind)(elem, 'click', function () { return onClick && isFn(onClick, index); });
                    });
                };
                (0,dom_utils.bind)(LeftArrow, 'click', function () {
                    return handleChange('previousElementSibling', elems[lastIndex]);
                });
                (0,dom_utils.bind)(RightArrow, 'click', function () { return handleChange('nextElementSibling', elems[0]); });
                handleClick();
                autoPlayUseChangeEvent();
            }
        };
    };
    Carousel.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            if (moreThanOneNode(node))
                return;
            var placeholderNode = node.firstElementChild;
            if (!placeholderNode)
                return;
            var carouselItemCount = placeholderNode.childElementCount;
            var _a = _this._attrs(node), dots = _a.dots, arrow = _a.arrow, effect = _a.effect, easing = _a.easing, radiusDot = _a.radiusDot, trigger = _a.trigger, autoplay = _a.autoplay, hoverPause = _a.hoverPause, autoplaySpeed = _a.autoplaySpeed;
            _this._setMainTemplate(node, dots, arrow);
            _this._setFadeCls(node, effect);
            _this._setItem(node, placeholderNode, carouselItemCount, easing);
            _this._setIndicators(node, carouselItemCount, radiusDot, trigger);
            _this._autoPlay(autoplay, node, hoverPause, autoplaySpeed);
            _this._handleArrowClick(node, arrow);
            (0,dom_utils.removeAttrs)(node, [
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
    };
    Carousel.prototype._setMainTemplate = function (node, dots, arrow) {
        var template = "\n        <button type=\"button\" class=\"left " + prefix.default.carousel + "-arrow " + prefix.default.carousel + "-arrow-" + arrow + "\">\n           <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-arrow-back\"></i>\n        </button>\n        <div class=\"" + prefix.default.carousel + "-list\"></div>\n        <button type=\"button\" class=\"right " + prefix.default.carousel + "-arrow " + prefix.default.carousel + "-arrow-" + arrow + "\">\n           <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-arrow-forward\"></i>\n        </button>\n        <ul class=\"" + prefix.default.carousel + "-dots " + prefix.default.carousel + "-dots-" + dots + "\"></ul>\n        ";
        (0,dom_utils.setHtml)(node, template);
    };
    Carousel.prototype._setFadeCls = function (node, effect) {
        effect === 'fade' ? node.classList.add(prefix.default.carousel + "-" + effect) : '';
    };
    Carousel.prototype._setItem = function (node, placeholderNode, carouselItemCount, esaing) {
        var _a;
        var CarouselList = node.querySelector("." + prefix.default.carousel + "-list");
        var Fragment = document.createDocumentFragment();
        var children = Array.from(placeholderNode.children);
        var i = 0;
        for (; i < carouselItemCount; i++) {
            var CarouselItem = (0,dom_utils.createElem)('div');
            CarouselItem.dataset['index'] = "" + i;
            CarouselItem.className = prefix.default.carousel + "-item";
            CarouselItem.appendChild(children[i]);
            this._setEasing(CarouselItem, esaing);
            Fragment.appendChild(CarouselItem);
            (_a = Fragment.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        }
        CarouselList === null || CarouselList === void 0 ? void 0 : CarouselList.appendChild(Fragment);
    };
    Carousel.prototype._setEasing = function (item, easing) {
        if (!easing)
            return;
        (0,dom_utils.setCss)(item, 'transitionTimingFunction', easing);
    };
    Carousel.prototype._setIndicators = function (node, carouselItemCount, radiusDot, trigger) {
        var _a;
        var CarouselDots = node.querySelector("." + prefix.default.carousel + "-dots");
        var Fragment = document.createDocumentFragment();
        var i = 0;
        for (; i < carouselItemCount; i++) {
            var CarouselDot = (0,dom_utils.createElem)('li');
            CarouselDot.dataset['slideTo'] = "" + i;
            (0,dom_utils.setHtml)(CarouselDot, "<button type=\"button\" class=" + (radiusDot ? 'radius' : '') + "></button>");
            this._handleDotChange(trigger, node, CarouselDot);
            Fragment.appendChild(CarouselDot);
            (_a = Fragment.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add(prefix.default.carousel + "-active");
        }
        CarouselDots === null || CarouselDots === void 0 ? void 0 : CarouselDots.appendChild(Fragment);
    };
    Carousel.prototype._autoPlay = function (autoplay, node, hoverPause, autoplaySpeed) {
        var _this = this;
        if (!autoplay)
            return;
        var autoPlayTimer = null;
        var play = function () {
            var speed = autoplaySpeed;
            // 当轮播图自动播放的切换速度低于 650ms 会出现问题，
            // 因此低于这个数值的都会被重置为 650ms。
            if (speed < 650) {
                speed = 650;
                console.warn("[Rabbit warn] Please do not set the sliding speed of carousel to less than 650ms. There are known problems with doing so, so it has been reset to 650ms. --> " + autoplaySpeed + "ms");
            }
            autoPlayTimer = window.setInterval(function () { return _this._slide('next', node); }, speed);
        };
        play();
        if (hoverPause === 'false')
            return;
        var pause = function () { return (autoPlayTimer ? window.clearInterval(autoPlayTimer) : false); };
        (0,dom_utils.bind)(node, 'mouseenter', function () { return pause(); });
        (0,dom_utils.bind)(node, 'mouseleave', function () { return play(); });
    };
    Carousel.prototype._handleArrowClick = function (node, arrow) {
        var _this = this;
        if (arrow === 'none')
            return;
        var LeftArrow = node.querySelector("." + prefix.default.carousel + "-arrow.left");
        var RightArrow = node.querySelector("." + prefix.default.carousel + "-arrow.right");
        (0,dom_utils.bind)(LeftArrow, 'click', function () { return _this._slide('prev', node); });
        (0,dom_utils.bind)(RightArrow, 'click', function () { return _this._slide('next', node); });
    };
    Carousel.prototype._handleDotChange = function (trigger, node, dot) {
        var _this = this;
        var activeIndex, activeElem;
        var _C = function () {
            activeIndex = Number(dot.dataset['slideTo']);
            activeElem = node.querySelector("." + prefix.default.carousel + "-item[data-index=\"" + activeIndex + "\"]");
            if (activeElem.classList.contains('active'))
                return;
            _this._dotChange(node, activeIndex);
            _this._showActiveItem(activeElem);
            (0,dom_utils.siblings)(activeElem).forEach(function (otherElem) {
                return otherElem.classList.contains('active') ? _this._hideOldActiveItem(otherElem) : '';
            });
        };
        if (trigger === 'hover') {
            (0,dom_utils.bind)(dot, 'mouseenter', function () { return _C(); });
        }
        else {
            (0,dom_utils.bind)(dot, 'click', function () { return _C(); });
        }
    };
    Carousel.prototype._slide = function (type, node) {
        var _this = this;
        var direction = type === 'prev' ? 'right' : 'left';
        var CarouselList = node.querySelector("." + prefix.default.carousel + "-list");
        var firstIndex = 0;
        var lastIndex = CarouselList.childElementCount - 1;
        var ActiveItem = node.querySelector("." + prefix.default.carousel + "-item.active");
        var PrevItem = ActiveItem.previousElementSibling || CarouselList.children[lastIndex];
        var NextItem = ActiveItem.nextElementSibling || CarouselList.children[firstIndex];
        var __change = function (elem) { return _this._change(type, direction, node, ActiveItem, elem); };
        type === 'prev' ? __change(PrevItem) : __change(NextItem);
    };
    Carousel.prototype._change = function (type, direction, node, oldActiveItem, curActiveItem) {
        // @ts-ignore
        var activeIndex = Number(curActiveItem.dataset['index']);
        this._dotChange(node, activeIndex);
        this._showActiveItem(curActiveItem, type, direction);
        this._hideOldActiveItem(oldActiveItem, direction);
    };
    Carousel.prototype._dotChange = function (node, activeIndex) {
        var CarouselDots = node.querySelector("." + prefix.default.carousel + "-dots");
        var ActiveDot = CarouselDots.children[activeIndex];
        ActiveDot.classList.add(prefix.default.carousel + "-active");
        (0,dom_utils.siblings)(ActiveDot).forEach(function (dot) {
            return dot.classList.contains(prefix.default.carousel + "-active")
                ? dot.classList.remove(prefix.default.carousel + "-active")
                : '';
        });
    };
    Carousel.prototype._showActiveItem = function (activeElem, type, direction) {
        if (type === void 0) { type = 'next'; }
        if (direction === void 0) { direction = 'left'; }
        activeElem.classList.add(prefix.default.carousel + "-item-" + type);
        setTimeout(function () { return activeElem.classList.add(prefix.default.carousel + "-item-" + direction); }, 20);
        setTimeout(function () {
            activeElem.classList.add('active');
            activeElem.classList.remove(prefix.default.carousel + "-item-" + type);
            activeElem.classList.remove(prefix.default.carousel + "-item-" + direction);
        }, DURATION);
    };
    Carousel.prototype._hideOldActiveItem = function (oldElem, direction) {
        if (direction === void 0) { direction = 'left'; }
        setTimeout(function () { return oldElem.classList.add(prefix.default.carousel + "-item-" + direction); }, 20);
        setTimeout(function () {
            oldElem.classList.remove('active');
            oldElem.classList.remove(prefix.default.carousel + "-item-" + direction);
        }, DURATION);
    };
    Carousel.prototype._attrs = function (node) {
        return {
            dots: (0,dom_utils.getStrTypeAttr)(node, 'dots', 'inside'),
            arrow: (0,dom_utils.getStrTypeAttr)(node, 'arrow', 'hover'),
            effect: (0,dom_utils.getStrTypeAttr)(node, 'effect', ''),
            easing: (0,dom_utils.getStrTypeAttr)(node, 'easing', ''),
            trigger: (0,dom_utils.getStrTypeAttr)(node, 'trigger', 'click'),
            hoverPause: (0,dom_utils.getStrTypeAttr)(node, 'hover-pause', 'true'),
            radiusDot: (0,dom_utils.getBooleanTypeAttr)(node, 'radius-dot'),
            autoplay: (0,dom_utils.getBooleanTypeAttr)(node, 'autoplay'),
            autoplaySpeed: (0,dom_utils.getNumTypeAttr)(node, 'autoplay-speed', AUTOPLAYSPEED)
        };
    };
    return Carousel;
}());
/* harmony default export */ var carousel = (Carousel);

;// CONCATENATED MODULE: ./src/components/carousel/index.ts

/* harmony default export */ var components_carousel = (carousel);

;// CONCATENATED MODULE: ./src/components/checkbox/checkbox.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */




var Checkbox = /** @class */ (function () {
    function Checkbox() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-checkbox', { all: true });
        this._create(this.COMPONENTS);
    }
    Checkbox.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        var isGroup = target.tagName.toLowerCase() == 'r-checkbox-group';
        // 排除 group 项
        if (!isGroup) {
            validComps(target, 'checkbox');
        }
        else {
            validComps(target, 'checkbox-group');
        }
        var _a = Checkbox.prototype, _attrs = _a._attrs, _setChecked = _a._setChecked, _setIndeterminate = _a._setIndeterminate, _setMultipleChecks = _a._setMultipleChecks, _isDisabled = _a._isDisabled;
        var value = _attrs(target).value;
        return {
            get value() {
                return value;
            },
            set value(newVal) {
                if (!isGroup) {
                    warn("This checkbox is not a child of a group element -->\"" + el + "\"");
                    return;
                }
                if (newVal && !isArr(newVal))
                    return;
                _setMultipleChecks(target, newVal);
            },
            get checked() {
                return target.dataset['value'] === 'true';
            },
            set checked(newVal) {
                if (newVal && !isBol(newVal))
                    return;
                _setChecked(target, newVal);
            },
            get disabled() {
                return _isDisabled(target);
            },
            set disabled(newVal) {
                if (newVal && !isBol(newVal))
                    return;
                if (isGroup)
                    return;
                newVal
                    ? target.setAttribute('disabled', 'disabled')
                    : target.removeAttribute('disabled');
                var CheckBoxInput = target.querySelector("." + prefix.default.checkbox + "-input");
                CheckBoxInput.disabled = newVal;
            },
            get indeterminate() {
                var isIndeterminate = target
                    .querySelector("." + prefix.default.checkbox)
                    .classList.contains(prefix.default.checkbox + "-indeterminate");
                return isIndeterminate;
            },
            set indeterminate(newVal) {
                if (newVal && !isBol(newVal))
                    return;
                if (isGroup)
                    return;
                _setIndeterminate(target, newVal);
            },
            events: function (_a) {
                var onChange = _a.onChange;
                var CheckBox, checked;
                isGroup ? (CheckBox = target.querySelectorAll('r-checkbox')) : (CheckBox = target);
                var fn = function () {
                    if (isGroup) {
                        checked = [];
                        CheckBox.forEach(function (elm) {
                            elm.dataset['value'] === 'true'
                                ? checked.push(elm.dataset['label'])
                                : '';
                        });
                    }
                    else {
                        checked = target.dataset['value'] === 'true';
                    }
                    onChange && isFn(onChange, checked);
                };
                (0,dom_utils.bind)(target, 'click', fn);
            }
        };
    };
    Checkbox.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), icon = _a.icon, name = _a.name, checked = _a.checked, label = _a.label, indeterminate = _a.indeterminate;
            var CheckboxGroupWrapper = _this._getGroupWrapper(node);
            _this._setChecked(node, checked);
            _this._setMainTemplate(node, name);
            _this._setLabel(node, label);
            _this._setDisabled(node);
            _this._setIcon(node, icon);
            _this._setIndeterminate(node, indeterminate);
            _this._handleChange(node);
            if (CheckboxGroupWrapper) {
                var value = _this._attrs(CheckboxGroupWrapper).value;
                _this._setMultipleChecks(CheckboxGroupWrapper, value);
                (0,dom_utils.removeAttrs)(CheckboxGroupWrapper, ['value']);
            }
            (0,dom_utils.removeAttrs)(node, ['icon', 'name', 'checked', 'label']);
        });
    };
    Checkbox.prototype._setChecked = function (node, checked) {
        // @ts-ignore
        node.dataset['value'] = "" + checked;
        if (!checked) {
            if (node.classList.contains(prefix.default.checkbox + "-checked")) {
                node.classList.remove(prefix.default.checkbox + "-checked");
            }
        }
        else {
            node.classList.add(prefix.default.checkbox + "-checked");
        }
    };
    Checkbox.prototype._setMainTemplate = function (node, name) {
        var content = (0,dom_utils.setHtml)(node);
        var template = "\n         <span class=\"" + prefix.default.checkbox + "\">\n            <span class=\"" + prefix.default.checkbox + "-inner\"></span>\n                <input type=\"checkbox\" class=\"" + prefix.default.checkbox + "-input\" name=\"" + name + "\">\n            </span>\n         <span>" + content + "</span>\n        ";
        (0,dom_utils.setHtml)(node, template);
    };
    Checkbox.prototype._setLabel = function (node, label) {
        if (!this._getGroupWrapper(node))
            return;
        // @ts-ignore
        node.dataset['label'] = label;
    };
    Checkbox.prototype._setDisabled = function (node) {
        if (!this._isDisabled(node))
            return;
        var CheckBoxInput = node.querySelector("." + prefix.default.checkbox + "-input");
        CheckBoxInput.disabled = true;
    };
    Checkbox.prototype._setIcon = function (node, icon) {
        if (!icon)
            return;
        var template = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-" + icon + "\"></i>";
        node.querySelector("." + prefix.default.checkbox).insertAdjacentHTML('afterend', template);
    };
    Checkbox.prototype._setIndeterminate = function (node, indeterminate) {
        var Checkbox = node.querySelector("." + prefix.default.checkbox);
        if (!indeterminate) {
            if (Checkbox.classList.contains(prefix.default.checkbox + "-indeterminate")) {
                Checkbox.classList.remove(prefix.default.checkbox + "-indeterminate");
            }
        }
        else {
            Checkbox.classList.add(prefix.default.checkbox + "-indeterminate");
        }
    };
    Checkbox.prototype._setMultipleChecks = function (checkboxGroupWrapper, value) {
        var _setChecked = Checkbox.prototype._setChecked;
        var Checkboxs = checkboxGroupWrapper.querySelectorAll('r-checkbox');
        var length = value.length;
        if (length == 0) {
            Checkboxs.forEach(function (elm) { return _setChecked(elm, false); });
        }
        else if (length == 1) {
            _setChecked(Checkboxs[0], true);
        }
        else {
            var i = 0;
            for (; i < length; i++) {
                var currentCheckbox = checkboxGroupWrapper.querySelector("[data-label=\"" + value[i] + "\"]");
                currentCheckbox ? _setChecked(currentCheckbox, true) : '';
            }
        }
    };
    Checkbox.prototype._handleChange = function (node) {
        var _this = this;
        var addFocusedState = function () {
            var CheckBoxInner = node.querySelector("." + prefix.default.checkbox + "-inner");
            CheckBoxInner.classList.add(prefix.default.checkbox + "-focus");
            setTimeout(function () { return CheckBoxInner.classList.remove(prefix.default.checkbox + "-focus"); }, 1500);
        };
        var toogle = function () {
            // @ts-ignore
            var isChecked = node.dataset['value'] === 'true' ? false : true;
            var isDisabled = _this._isDisabled(node);
            if (isDisabled)
                return false;
            addFocusedState();
            _this._setChecked(node, isChecked);
        };
        (0,dom_utils.bind)(node, 'click', toogle);
    };
    Checkbox.prototype._isDisabled = function (node) {
        return node.getAttribute('disabled') == '' || node.getAttribute('disabled') == 'true';
    };
    Checkbox.prototype._getGroupWrapper = function (node) {
        var parent = node.parentElement;
        return (parent === null || parent === void 0 ? void 0 : parent.tagName.toLowerCase()) === 'r-checkbox-group' ? parent : null;
    };
    Checkbox.prototype._attrs = function (node) {
        return {
            icon: (0,dom_utils.getStrTypeAttr)(node, 'icon', ''),
            name: (0,dom_utils.getStrTypeAttr)(node, 'name', ''),
            label: (0,dom_utils.getStrTypeAttr)(node, 'label', ''),
            value: (0,dom_utils.getArrTypeAttr)(node, 'value'),
            checked: (0,dom_utils.getBooleanTypeAttr)(node, 'checked'),
            indeterminate: (0,dom_utils.getBooleanTypeAttr)(node, 'indeterminate')
        };
    };
    return Checkbox;
}());
/* harmony default export */ var checkbox_checkbox = (Checkbox);

;// CONCATENATED MODULE: ./src/components/checkbox/index.ts

/* harmony default export */ var components_checkbox = (checkbox_checkbox);

// EXTERNAL MODULE: ./src/dom-utils/elem.ts
var elem = __webpack_require__("./src/dom-utils/elem.ts");
;// CONCATENATED MODULE: ./src/components/collapse/collapse.ts




var Collapse = /** @class */ (function () {
    function Collapse() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-collapse', { all: true });
        this._create(this.COMPONENTS);
    }
    Collapse.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'collapse');
        var _a = Collapse.prototype, _attrs = _a._attrs, _dataSetActiveKey = _a._dataSetActiveKey, _openByKey = _a._openByKey;
        var activeKey = JSON.parse(target.dataset.activeKey);
        return {
            get activeKey() {
                return activeKey;
            },
            set activeKey(newVal) {
                if (newVal == activeKey)
                    return;
                _dataSetActiveKey(target, newVal);
                _openByKey(target, newVal, target.getAttribute('accordion'));
            },
            events: function (_a) {
                var onChange = _a.onChange;
                var panels = target.querySelectorAll('r-collapse-panel');
                // 储存已展开面板的 key
                var key = [];
                var pushKey = function (el, toggle) {
                    var accordion = _attrs(target).accordion;
                    // @ts-ignore
                    var panelKey = el.dataset.panelKey;
                    if (el.classList.contains(prefix.default.collapse + "-item-active")) {
                        key.push(panelKey);
                    }
                    else if (toggle) {
                        var idx = key.indexOf(panelKey);
                        idx > -1 ? key.splice(idx, 1) : '';
                    }
                    // 手风琴模式下每展开一个面板就删除其他的 key
                    if (accordion) {
                        (0,dom_utils.siblings)(el).forEach(function (o) {
                            var otherIdx = key.indexOf(o.dataset.panelKey);
                            otherIdx > -1 ? key.splice(otherIdx, 1) : '';
                        });
                    }
                };
                panels.forEach(function (panel) {
                    var header = panel.querySelector("." + prefix.default.collapse + "-header");
                    // 存放初始化面板时默认已展开的 key
                    pushKey(panel, false);
                    (0,dom_utils.bind)(header, 'click', function () {
                        // 这里用定时器是为了跟移除显示面板样式类名的时机同步
                        setTimeout(function () {
                            pushKey(panel, true);
                            onChange && isFn(onChange, key);
                        }, 150);
                    });
                });
            }
        };
    };
    Collapse.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), simple = _a.simple, ghost = _a.ghost, defaultactivekey = _a.defaultactivekey, accordion = _a.accordion;
            _this._dataSetActiveKey(node, defaultactivekey);
            _this._setGhost(node, ghost);
            _this._setSimple(node, simple);
            _this._createChildNodes(node);
            _this._openByKey(node, defaultactivekey, accordion);
            (0,dom_utils.removeAttrs)(node, ['simple', 'ghost', 'defaultactivekey']);
        });
    };
    Collapse.prototype._dataSetActiveKey = function (node, activeKey) {
        if (activeKey) {
            // @ts-ignore
            node.dataset['activeKey'] = Array.isArray(activeKey) ? "[" + activeKey + "]" : activeKey;
        }
    };
    Collapse.prototype._setGhost = function (node, ghost) {
        ghost ? node.classList.add(prefix.default.collapse + "-ghost") : '';
    };
    Collapse.prototype._setSimple = function (node, simple) {
        simple ? node.classList.add(prefix.default.collapse + "-simple") : '';
    };
    Collapse.prototype._createChildNodes = function (node) {
        var collapsePanels = node.querySelectorAll('r-collapse-panel');
        this._setPanel(node, collapsePanels);
    };
    Collapse.prototype._setPanel = function (parent, panels) {
        var _this = this;
        // 遍历所有面板节点
        panels.forEach(function (panel, index) {
            var _a = _this._attrs(panel), key = _a.key, title = _a.title, hideArrow = _a.hideArrow;
            // @ts-ignore
            // 面板的 key 如果没填则默认为索引值
            panel.dataset.panelKey = !key ? index : key;
            // 保存面板原先的第一个节点，也就是要填充的内容
            var content = panel.firstElementChild;
            var arrowIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-arrow-forward\"></i>";
            var template = "\n                 <div class=\"" + prefix.default.collapse + "-header\">\n                    " + (!hideArrow ? arrowIcon : '') + " " + title + "\n                 </div>\n                 <div class=\"" + prefix.default.collapse + "-content\">\n                    <div class=\"" + prefix.default.collapse + "-content-box\"></div>\n                 </div>";
            // 清空面板原先的所有内容
            (0,elem.setHtml)(panel, '');
            // 追加html模板
            (0,elem.setHtml)(panel, template);
            // 将原先的占位内容填充至面板内容盒子
            var panelContentBox = panel.querySelector("." + prefix.default.collapse + "-content-box");
            content ? panelContentBox === null || panelContentBox === void 0 ? void 0 : panelContentBox.appendChild(content) : null;
            (0,elem.setCss)(panel, 'display', 'block');
            _this._handleToggle(parent, panel);
            (0,dom_utils.removeAttrs)(panel, ['key', 'title', 'hide-arrow']);
        });
    };
    Collapse.prototype._handleToggle = function (parent, panel) {
        var _this = this;
        var accordion = this._attrs(parent).accordion;
        var collapseHeader = panel.querySelector("." + prefix.default.collapse + "-header");
        var collapseContent = panel.querySelector("." + prefix.default.collapse + "-content");
        (0,dom_utils.bind)(collapseHeader, 'click', function () { return _this._slide(panel, collapseContent, accordion); });
    };
    Collapse.prototype._slide = function (p, c, accordion) {
        var activeCls = prefix.default.collapse + "-item-active";
        var slideUp = function (arg1, arg2) {
            dom_utils.slider.slideUp(arg2, 150);
            setTimeout(function () {
                arg1.classList.remove(activeCls);
            }, 150);
        };
        if (p.classList.contains(activeCls)) {
            slideUp(p, c);
        }
        else {
            dom_utils.slider.slideDown(c, 150);
            p.classList.add(activeCls);
        }
        // 手风琴模式
        if (accordion) {
            // 获取除了已展开的面板外的所有其他面板
            (0,dom_utils.siblings)(p).forEach(function (otherP) {
                var otherC = otherP.querySelector("." + prefix.default.collapse + "-content");
                slideUp(otherP, otherC);
            });
        }
    };
    Collapse.prototype._openByKey = function (node, key, accordion) {
        // 获取选中的 key 的面板
        var selected;
        var open = function () {
            if (selected) {
                selected.classList.add(prefix.default.collapse + "-item-active");
                if (accordion) {
                    (0,dom_utils.siblings)(selected).forEach(function (o) {
                        o.classList.remove(prefix.default.collapse + "-item-active");
                    });
                }
            }
        };
        // 如果 activeKey 是数组则对其进行遍历获取所有面板
        // 且如果是手风琴模式则只选取数组的第一项，只展开一个面板
        if (Array.isArray(key)) {
            var length_1 = key.length;
            // length == 1 说明数组只有一项所以不必对其进行遍历
            if (accordion || length_1 == 1) {
                selected = node.querySelector("[data-panel-key=\"" + key[0] + "\"]");
                open();
            }
            else {
                var i = 0;
                for (; i < length_1; i++) {
                    selected = node.querySelector("[data-panel-key=\"" + key[i] + "\"]");
                    open();
                }
            }
        }
        else {
            selected = node.querySelector("[data-panel-key=\"" + key + "\"]");
            open();
        }
    };
    Collapse.prototype._attrs = function (node) {
        return {
            key: (0,elem.getStrTypeAttr)(node, 'key', ''),
            title: (0,elem.getStrTypeAttr)(node, 'title', ''),
            ghost: (0,elem.getBooleanTypeAttr)(node, 'ghost'),
            simple: (0,elem.getBooleanTypeAttr)(node, 'simple'),
            hideArrow: (0,elem.getBooleanTypeAttr)(node, 'hide-arrow'),
            accordion: (0,elem.getBooleanTypeAttr)(node, 'accordion'),
            defaultactivekey: (0,elem.getStrTypeAttr)(node, 'defaultactivekey', '') &&
                (0,elem.getArrTypeAttr)(node, 'defaultactivekey')
        };
    };
    return Collapse;
}());
/* harmony default export */ var collapse = (Collapse);

;// CONCATENATED MODULE: ./src/components/collapse/index.ts

/* harmony default export */ var components_collapse = (collapse);

;// CONCATENATED MODULE: ./src/components/count-down/count-down.ts


var CountDown = /** @class */ (function () {
    function CountDown() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-count-down', { all: true });
        this._create(this.COMPONENTS);
    }
    CountDown.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'count-down');
        var _countTime = CountDown.prototype._countTime;
        return {
            get endTime() {
                return '';
            },
            set endTime(newVal) {
                if (newVal && !isStr(newVal))
                    return;
                _countTime(target, newVal);
            },
            events: function (_a) {
                var onStop = _a.onStop;
                if (!onStop)
                    return;
                (0,dom_utils.bind)(target, 'DOMNodeInserted', function (e) {
                    if (e.target.textContent === '00:00:00') {
                        isFn(onStop, true);
                    }
                });
            }
        };
    };
    CountDown.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var endTime = _this._attrs(node).endTime;
            _this._countTime(node, endTime);
            (0,dom_utils.removeAttrs)(node, ['endTime']);
        });
    };
    CountDown.prototype._countTime = function (node, endTime) {
        if (!endTime)
            return;
        var timer = null;
        var countDown = function () {
            //获取当前时间
            var date = new Date();
            var now = date.getTime();
            //设置截止时间
            var endDate = new Date(endTime);
            var _endTime = endDate.getTime();
            //时间差
            var diff = _endTime - now;
            //定义变量 d,h,m,s保存倒计时的时间
            var d = 0, h = 0, m = 0, s = 0;
            if (diff >= 0) {
                d = Math.floor(diff / 1000 / 60 / 60 / 24);
                h = Math.floor((diff / 1000 / 60 / 60) % 24);
                m = Math.floor((diff / 1000 / 60) % 60);
                s = Math.floor((diff / 1000) % 60);
            }
            var checkTime = function (t) {
                if (t < 10)
                    t = "0" + t;
                return t;
            };
            //将0-9的数字前面加上0，例1变为01
            d = checkTime(d);
            h = checkTime(h);
            m = checkTime(m);
            s = checkTime(s);
            node.textContent = h + ":" + m + ":" + s;
        };
        countDown();
        timer = window.setInterval(countDown, 1000);
        (0,dom_utils.bind)(node, 'DOMNodeInserted', function (e) {
            if (e.target.textContent === '00:00:00') {
                window.clearInterval(timer);
                return;
            }
        });
    };
    CountDown.prototype._attrs = function (node) {
        return {
            endTime: (0,dom_utils.getStrTypeAttr)(node, 'end-time', '')
        };
    };
    return CountDown;
}());
/* harmony default export */ var count_down = (CountDown);

;// CONCATENATED MODULE: ./src/components/count-down/index.ts

/* harmony default export */ var components_count_down = (count_down);

;// CONCATENATED MODULE: ./src/components/divider/divider.ts


var Divider = /** @class */ (function () {
    function Divider() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-divider', { all: true });
        this._create(this.COMPONENTS);
    }
    Divider.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            _this._setType(node);
            _this._setDashed(node);
            _this._setPlain(node);
            _this._setTitle(node);
            (0,dom_utils.removeAttrs)(node, ['dashed', 'plain', 'orientation']);
        });
    };
    Divider.prototype._setType = function (node) {
        var type = this._attrs(node).type;
        node.setAttribute('type', "" + type);
    };
    Divider.prototype._setDashed = function (node) {
        var dashed = this._attrs(node).dashed;
        if (dashed) {
            node.classList.add(prefix.default.divider + "-dashed");
        }
    };
    Divider.prototype._setPlain = function (node) {
        var plain = this._attrs(node).plain;
        if (plain) {
            node.classList.add(prefix.default.divider + "-plain");
        }
    };
    Divider.prototype._setOrientation = function (node) {
        var orientation = this._attrs(node).orientation;
        node.classList.add(prefix.default.divider + "-with-text-" + orientation);
    };
    Divider.prototype._setTitle = function (node) {
        if (node.innerHTML == '' || node.innerHTML == ' ')
            return;
        this._setOrientation(node);
        var DividerText = (0,dom_utils.createElem)('span');
        DividerText.className = prefix.default.divider + "-inner-text";
        DividerText.innerHTML = node.innerHTML;
        node.classList.add(prefix.default.divider + "-with-text");
        node.innerHTML = '';
        node.appendChild(DividerText);
    };
    Divider.prototype._attrs = function (node) {
        return {
            type: (0,dom_utils.getStrTypeAttr)(node, 'type', 'horizontal'),
            orientation: (0,dom_utils.getStrTypeAttr)(node, 'orientation', 'center'),
            dashed: (0,dom_utils.getBooleanTypeAttr)(node, 'dashed'),
            plain: (0,dom_utils.getBooleanTypeAttr)(node, 'plain')
        };
    };
    return Divider;
}());
/* harmony default export */ var divider = (Divider);

;// CONCATENATED MODULE: ./src/components/divider/index.ts

/* harmony default export */ var components_divider = (divider);

;// CONCATENATED MODULE: ./src/components/drawer/drawer.ts




var Drawer = /** @class */ (function () {
    function Drawer() {
        this.VERSION = 'v1.1.1';
        this.COMPONENTS = (0,dom_utils.$el)('r-drawer', { all: true });
        this._create(this.COMPONENTS);
    }
    Drawer.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'drawer');
        var _a = Drawer.prototype, _handleVisable = _a._handleVisable, _attrs = _a._attrs;
        var DrawerMask = target.querySelector("." + prefix.default.drawer + "-mask");
        var DrawerWrap = target.querySelector("." + prefix.default.drawer + "-wrap");
        var _Drawer = target.querySelector("." + prefix.default.drawer);
        var DrawerTitle = target.querySelector("." + prefix.default.drawer + "-header-inner");
        var DrawerClose = target.querySelector("." + prefix.default.drawer + "-close");
        return {
            get title() {
                return (0,dom_utils.setHtml)(DrawerTitle);
            },
            set title(newVal) {
                if (!isStr(newVal))
                    return;
                (0,dom_utils.setHtml)(DrawerTitle, newVal);
            },
            get visable() {
                return false;
            },
            set visable(newVal) {
                if (!isBol(newVal))
                    return;
                _handleVisable(newVal, target, [DrawerMask, DrawerWrap, _Drawer]);
            },
            events: function (_a) {
                var onClose = _a.onClose;
                // v1.0.1 改用on事件绑定，防止触发回调事件的次数随着每次点击而不断的重复叠加
                if (DrawerClose)
                    DrawerClose.onclick = function () { return onClose && isFn(onClose); };
                if (_attrs(target).maskClosable === 'true')
                    DrawerWrap.onclick = function () { return onClose && isFn(onClose); };
            }
        };
    };
    Drawer.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            _this._createDrawerNodes(node);
            (0,dom_utils.setCss)(node, 'display', 'block');
            (0,dom_utils.removeAttrs)(node, [
                'title',
                'width',
                'height',
                'mask',
                'visible',
                'closable',
                'scrollable',
                'lock-scroll'
            ]);
        });
    };
    Drawer.prototype._createDrawerNodes = function (node) {
        var DrawerMask = (0,dom_utils.createElem)('div');
        var DrawerWrap = (0,dom_utils.createElem)('div');
        var Drawer = (0,dom_utils.createElem)('div');
        var DrawerContent = (0,dom_utils.createElem)('div');
        var DrawerClose = (0,dom_utils.createElem)('a');
        var DrawerHeader = (0,dom_utils.createElem)('div');
        var DrawerHeaderInner = (0,dom_utils.createElem)('div');
        var DrawerBody = (0,dom_utils.createElem)('div');
        this._setCls([
            DrawerMask,
            DrawerWrap,
            Drawer,
            DrawerContent,
            DrawerClose,
            DrawerHeader,
            DrawerHeaderInner,
            DrawerBody
        ]);
        this._setSize(node, Drawer);
        this._setPlacement(node, Drawer);
        this._setOpenInContainer(node, DrawerMask, DrawerWrap, Drawer);
        this._initVisible(node, DrawerMask, DrawerWrap, Drawer);
        this._handleClose(node, [DrawerMask, DrawerWrap, Drawer], DrawerClose);
        DrawerWrap.appendChild(Drawer);
        Drawer.appendChild(DrawerContent);
        this._setClosable(node, DrawerContent, DrawerClose);
        this._setHeader(node, DrawerContent, DrawerHeader, DrawerHeaderInner);
        DrawerContent.appendChild(DrawerBody);
        this._setBodyContent(node, DrawerBody);
        this._setMask(node, DrawerMask, DrawerWrap, DrawerContent);
        node.appendChild(DrawerWrap);
    };
    Drawer.prototype._setCls = function (elms) {
        var elmsCls = [
            prefix.default.drawer + "-mask",
            prefix.default.drawer + "-wrap",
            "" + prefix.default.drawer,
            prefix.default.drawer + "-content",
            prefix.default.drawer + "-close",
            prefix.default.drawer + "-header",
            prefix.default.drawer + "-header-inner",
            prefix.default.drawer + "-body"
        ];
        var i = 0;
        var length = elms.length;
        for (; i < length; i++) {
            var elm = elms[i];
            elm.className = elmsCls[i];
        }
    };
    Drawer.prototype._setSize = function (parent, children) {
        var _a = this._attrs(parent), width = _a.width, height = _a.height, placement = _a.placement;
        if (placement === 'top' || placement === 'bottom') {
            (0,dom_utils.setCss)(children, 'height', height);
        }
        else if (placement === 'left' || placement === 'right') {
            children.style.width = width;
            (0,dom_utils.setCss)(children, 'width', width);
        }
    };
    Drawer.prototype._setPlacement = function (parent, children) {
        var placement = this._attrs(parent).placement;
        children.classList.add(prefix.default.drawer + "-" + placement);
    };
    Drawer.prototype._setOpenInContainer = function (parent, drawerMask, drawerWrap, drawer) {
        var inner = this._attrs(parent).inner;
        if (!inner)
            return;
        drawerMask.classList.add(prefix.default.drawer + "-mask-inner");
        drawerWrap.classList.add(prefix.default.drawer + "-wrap-inner");
        drawer.classList.add(prefix.default.drawer + "-inner");
    };
    Drawer.prototype._setMask = function (parent, drawerMask, drawerWrap, drawerContent) {
        var mask = this._attrs(parent).mask;
        if (parent.getAttribute('mask') == null)
            mask = true;
        if (!mask) {
            drawerWrap.classList.add(prefix.default.drawer + "-no-mask");
            drawerContent.classList.add(prefix.default.drawer + "-content-no-mask");
            return;
        }
        parent.appendChild(drawerMask);
    };
    Drawer.prototype._setClosable = function (parent, children, drawerClose) {
        var closable = this._attrs(parent).closable;
        if (!closable)
            return;
        (0,dom_utils.setHtml)(drawerClose, "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>");
        children.appendChild(drawerClose);
    };
    Drawer.prototype._setHeader = function (parent, drawerContent, drawerHeader, drawerTitle) {
        var _a;
        var title = this._attrs(parent).title;
        if (!title) {
            (_a = drawerContent.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add(prefix.default.drawer + "-no-header");
            return;
        }
        (0,dom_utils.setHtml)(drawerTitle, title);
        drawerHeader.appendChild(drawerTitle);
        drawerContent.appendChild(drawerHeader);
    };
    Drawer.prototype._setBodyContent = function (parent, children) {
        // v1.1.1 增加占位节点的组成数量判断
        if (moreThanOneNode(parent))
            return;
        var placeholderNode = parent.firstElementChild;
        if (placeholderNode)
            children.appendChild(placeholderNode);
    };
    Drawer.prototype._initVisible = function (parent, drawerMask, drawerWrap, drawer) {
        var visible = this._attrs(parent).visible;
        // @ts-ignore
        parent.dataset.drawerVisable = "" + visible;
        if (visible)
            return;
        drawerWrap.classList.add(prefix.default.drawer + "-hidden");
        (0,dom_utils.setCss)(drawerMask, 'display', 'none');
        (0,dom_utils.setCss)(drawer, 'display', 'none');
    };
    Drawer.prototype._handleVisable = function (visable, target, children) {
        var _a = Drawer.prototype, _show = _a._show, _hide = _a._hide;
        visable ? _show(target, children) : _hide(target, children);
    };
    Drawer.prototype._handleClose = function (parent, hiddenElm, triggerElm) {
        var _hide = Drawer.prototype._hide;
        // triggerElm 表示右上角关闭按钮
        (0,dom_utils.bind)(triggerElm, 'click', function () { return _hide(parent, hiddenElm); });
        (0,dom_utils.bind)(hiddenElm[1], 'click', function () { return _hide(parent, hiddenElm); });
        (0,dom_utils.bind)(hiddenElm[2], 'click', function (e) { return e.stopPropagation(); });
    };
    Drawer.prototype._show = function (parent, showElm) {
        var _attrs = Drawer.prototype._attrs;
        var _a = _attrs(parent), inner = _a.inner, placement = _a.placement, scrollable = _a.scrollable;
        var lockScroll = _attrs(parent).lockScroll;
        !parent.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        // 设置为在当前 dom 里打开则不隐藏 body 滚动条
        if (!inner)
            scrollable_scrollable({ scroll: scrollable, lock: lockScroll });
        // @ts-ignore
        // 设置当前为显示状态
        parent.dataset.drawerVisable = 'true';
        // showElm[0] 表示遮盖层
        // showElm[1] 表示抽屉的父容器wrap
        // showElm[2] 表示抽屉主体
        showElm[1].classList.contains(prefix.default.drawer + "-hidden") &&
            showElm[1].classList.remove(prefix.default.drawer + "-hidden");
        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            rmCls: true,
            timeout: 250
        });
        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: prefix.default.drawer + "-" + placement + "-move-enter",
            rmCls: true,
            timeout: 550
        });
    };
    Drawer.prototype._hide = function (parent, hiddenElm) {
        var placement = Drawer.prototype._attrs(parent).placement;
        // @ts-ignore
        // 设置为隐藏状态
        parent.dataset.drawerVisable = 'false';
        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示抽屉的父容器wrap
        // hiddenElm[2] 表示抽屉主体
        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });
        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: prefix.default.drawer + "-" + placement + "-move-leave",
            rmCls: true,
            timeout: 490
        });
        setTimeout(function () {
            hiddenElm[1].classList.add(prefix.default.drawer + "-hidden");
            (0,dom_utils.setCss)(hiddenElm[2], 'display', 'none');
            scrollable_scrollable({ scroll: true, lock: true, node: parent, tagName: 'drawer' });
        }, 490);
    };
    Drawer.prototype._attrs = function (node) {
        return {
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            width: (0,dom_utils.getStrTypeAttr)(node, 'width', '256px'),
            height: (0,dom_utils.getStrTypeAttr)(node, 'height', '256px'),
            placement: (0,dom_utils.getStrTypeAttr)(node, 'placement', 'right'),
            mask: (0,dom_utils.getBooleanTypeAttr)(node, 'mask'),
            inner: (0,dom_utils.getBooleanTypeAttr)(node, 'inner'),
            visible: (0,dom_utils.getBooleanTypeAttr)(node, 'visible'),
            closable: (0,dom_utils.getBooleanTypeAttr)(node, 'closable'),
            scrollable: (0,dom_utils.getBooleanTypeAttr)(node, 'scrollable'),
            lockScroll: (0,dom_utils.getBooleanTypeAttr)(node, 'lock-scroll'),
            maskClosable: (0,dom_utils.getStrTypeAttr)(node, 'mask-closable', 'true')
        };
    };
    return Drawer;
}());
/* harmony default export */ var drawer = (Drawer);

;// CONCATENATED MODULE: ./src/components/drawer/index.ts

/* harmony default export */ var components_drawer = (drawer);

;// CONCATENATED MODULE: ./src/components/dropdown/dropdown.ts




// 通过点击事件冒泡的方式处理单击下拉菜单项隐藏菜单
function handleDropdownItemClickHidden() {
    (0,dom_utils.bind)(document, 'click', function (e) {
        var target = e.target;
        // 获取点击的目标元素名
        var tagName = target.tagName.toLocaleLowerCase();
        if (tagName === 'r-dropdown-item') {
            // 是否为禁用项
            if (target.getAttribute('disabled') === '')
                return;
            // 获取菜单项的最外层容器 div.rab-select-dropdown
            var dropdownMenu = target.parentElement.parentElement;
            // 设置为隐藏状态
            dropdownMenu.dataset.dropdownVisable = 'false';
            CssTransition(dropdownMenu, {
                inOrOut: 'out',
                leaveCls: 'transition-drop-leave',
                rmCls: true,
                timeout: 280
            });
        }
    });
}
var defalutDpdDelay = 100;
var SHOWTIMER;
var Dropdown = /** @class */ (function () {
    function Dropdown() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-dropdown', { all: true });
        this._create(this.COMPONENTS);
        handleDropdownItemClickHidden();
    }
    Dropdown.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'dropdown');
        return {
            events: function (_a) {
                var onClick = _a.onClick;
                var children = target.querySelectorAll('r-dropdown-item');
                children.forEach(function (child, index) {
                    (0,dom_utils.bind)(child, 'click', function () {
                        child.getAttribute('disabled') !== ''
                            ? onClick && isFn(onClick, index)
                            : undefined;
                    });
                });
            }
        };
    };
    Dropdown.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            // 判断是否由两个子节点组成
            if (node.childElementCount > 2) {
                warn('The content of a component dropdown can only be composed of two element nodes, the first being the reference element and the second being the drop-down item');
            }
            // 将第一个子元素作为宿主元素
            var refElm = node.firstElementChild;
            // 最后一个子元素即菜单项
            var menuItem = node.lastElementChild;
            // 清空旧内容，防止获取的元素不正确
            (0,dom_utils.setHtml)(node, '');
            var DropdownRef = _this._setReferenceElm(node, refElm);
            var DropdownMenu = _this._setMenuItem(node, menuItem);
            _this._handleTrigger(node, DropdownRef, DropdownMenu);
            _this._setTransformOrigin(node, DropdownMenu);
            (0,dom_utils.removeAttrs)(node, ['trigger', 'placement']);
        });
    };
    Dropdown.prototype._setReferenceElm = function (node, refElm) {
        var DropdownRel = (0,dom_utils.createElem)('div');
        DropdownRel.className = prefix.default.dropdown + "-rel";
        refElm ? DropdownRel.appendChild(refElm) : '';
        node.appendChild(DropdownRel);
        return DropdownRel;
    };
    Dropdown.prototype._setMenuItem = function (node, menuItem) {
        var DropdownMenu = (0,dom_utils.createElem)('div');
        DropdownMenu.className = 'rab-select-dropdown';
        this._initVisable(DropdownMenu);
        menuItem ? DropdownMenu.appendChild(menuItem) : '';
        node.appendChild(DropdownMenu);
        (0,dom_utils.setCss)(menuItem, 'display', 'block');
        return DropdownMenu;
    };
    Dropdown.prototype._initVisable = function (dpdMenu) {
        (0,dom_utils.setCss)(dpdMenu, 'display', 'none');
        dpdMenu.dataset.dropdownVisable = 'false';
    };
    Dropdown.prototype._setTransformOrigin = function (parent, dpdMenu) {
        var placement = this._attrs(parent).placement;
        // 根据 placement 设置源方向。
        // top 开头、right-end、left-end 的位置设置源方向为 center-bottom，反之。
        // left 和 right 开头的则无需设置。
        if (/^top|right-end|left-end/.test(placement)) {
            (0,dom_utils.setCss)(dpdMenu, 'transformOrigin', 'center bottom');
        }
        else if (/^bottom|right-start|left-start/.test(placement)) {
            (0,dom_utils.setCss)(dpdMenu, 'transformOrigin', 'center top');
        }
        // TODO: 根据 popper 的方向动态改变源方向
        // dpdMenu.dataset.popperPlacement;
    };
    Dropdown.prototype._handleTrigger = function (parent, dpdRef, dpdMenu) {
        var _a = this._attrs(parent), trigger = _a.trigger, placement = _a.placement;
        var setPopper = function () { return _newCreatePopper(dpdRef, dpdMenu, placement, 0); };
        var show = function () {
            setPopper();
            dpdMenu.dataset.dropdownVisable = 'true';
            CssTransition(dpdMenu, {
                inOrOut: 'in',
                enterCls: 'transition-drop-enter',
                rmCls: true,
                timeout: 300
            });
        };
        var hidden = function () {
            if (dpdMenu.dataset.dropdownVisable === 'true') {
                dpdMenu.dataset.dropdownVisable = 'false';
                CssTransition(dpdMenu, {
                    inOrOut: 'out',
                    leaveCls: 'transition-drop-leave',
                    rmCls: true,
                    timeout: 280
                });
            }
        };
        // 通过点击宿主元素的次数判断是否显示或隐藏菜单项
        var clicksIsVisable = function (clicks) { return (clicks % 2 == 0 ? hidden() : show()); };
        if (trigger === 'hover') {
            (0,dom_utils.bind)(parent, 'mouseenter', function () {
                SHOWTIMER = setTimeout(function () {
                    show();
                }, defalutDpdDelay);
            });
            (0,dom_utils.bind)(parent, 'mouseleave', function () {
                clearTimeout(SHOWTIMER);
                hidden();
            });
        }
        else if (trigger === 'click') {
            // 初始当前的点击次数
            var currentClicks_1 = 1;
            (0,dom_utils.bind)(dpdRef, 'click', function () { return clicksIsVisable(currentClicks_1++); });
            (0,dom_utils.bind)(dpdRef, 'focusin', show);
            (0,dom_utils.bind)(dpdRef, 'focusout', function () {
                currentClicks_1++;
                hidden();
            });
        }
        else if (trigger === 'contextMenu') {
            // 初始当前的右击次数
            var currentRightClick_1 = 1;
            (0,dom_utils.bind)(dpdRef, 'contextmenu', function (e) {
                e.preventDefault();
                clicksIsVisable(currentRightClick_1++);
            });
            (0,dom_utils.bind)(dpdRef, 'focusout', function () {
                currentRightClick_1++;
                hidden();
            });
        }
    };
    Dropdown.prototype._attrs = function (node) {
        return {
            trigger: (0,dom_utils.getStrTypeAttr)(node, 'trigger', 'hover'),
            placement: (0,dom_utils.getStrTypeAttr)(node, 'placement', 'bottom')
        };
    };
    return Dropdown;
}());
/* harmony default export */ var dropdown = (Dropdown);

;// CONCATENATED MODULE: ./src/components/dropdown/index.ts

/* harmony default export */ var components_dropdown = (dropdown);

;// CONCATENATED MODULE: ./assets/empty.svg
/* harmony default export */ var empty = (".././fonts/empty.svg");
;// CONCATENATED MODULE: ./src/components/empty/empty.ts



var Empty = /** @class */ (function () {
    function Empty() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-empty', { all: true });
        this._create(this.COMPONENTS);
    }
    Empty.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), desc = _a.desc, image = _a.image, imageStyle = _a.imageStyle;
            var footerElm = node.firstElementChild;
            _this._setMainTemplate(node, desc, image, imageStyle);
            _this._setFooter(node, footerElm);
            (0,dom_utils.removeAttrs)(node, ['desc', 'image', 'image-style']);
        });
    };
    Empty.prototype._setMainTemplate = function (node, desc, image, imageStyle) {
        var template = " \n         <div class=\"" + prefix.default.empty + "-image\" style=\"" + imageStyle + "\">\n            <img src=\"" + image + "\" alt=\"empty\" />\n         </div>\n         <div class=\"" + prefix.default.empty + "-description\">" + (desc == 'false' ? '' : desc) + "</div>";
        (0,dom_utils.setHtml)(node, template);
    };
    Empty.prototype._setFooter = function (node, footerElm) {
        if (!footerElm)
            return;
        var footerTpl = "<div class=\"" + prefix.default.empty + "-footer\"></div>";
        node.insertAdjacentHTML('beforeend', footerTpl);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        node.querySelector("." + prefix.default.empty + "-footer").appendChild(footerElm);
    };
    Empty.prototype._attrs = function (node) {
        return {
            desc: (0,dom_utils.getStrTypeAttr)(node, 'desc', '暂无数据'),
            image: (0,dom_utils.getStrTypeAttr)(node, 'image', "" + empty),
            imageStyle: (0,dom_utils.getStrTypeAttr)(node, 'image-style', '')
        };
    };
    return Empty;
}());
/* harmony default export */ var empty_empty = (Empty);

;// CONCATENATED MODULE: ./src/components/empty/index.ts

/* harmony default export */ var components_empty = (empty_empty);

;// CONCATENATED MODULE: ./src/components/jumbotron/jumbotron.ts



var Jumbotron = /** @class */ (function () {
    function Jumbotron() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-jumbotron', { all: true });
        this._create(this.COMPONENTS);
    }
    Jumbotron.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            if (moreThanOneNode(node))
                return;
            var placeholderNode = node.firstElementChild;
            var _a = _this._attrs(node), title = _a.title, subTitle = _a.subTitle;
            _this._setMainTemplate(node, title, subTitle);
            _this._setExtraContent(node, placeholderNode);
            (0,dom_utils.removeAttrs)(node, ['title', 'sub-title']);
        });
    };
    Jumbotron.prototype._setMainTemplate = function (node, title, subTitle) {
        var template = "\n         <div class=\"" + prefix.default.jumbotron + "-container\">\n             <h1 class=\"" + prefix.default.jumbotron + "-title\">" + title + "</h1>\n             <div class=\"" + prefix.default.jumbotron + "-subtitle\">" + subTitle + "</div>\n         </div>";
        (0,dom_utils.setHtml)(node, template);
    };
    Jumbotron.prototype._setExtraContent = function (node, placeholderNode) {
        if (!placeholderNode)
            return;
        var JumbotronContainer = node.querySelector("." + prefix.default.jumbotron + "-container");
        JumbotronContainer === null || JumbotronContainer === void 0 ? void 0 : JumbotronContainer.appendChild(placeholderNode);
    };
    Jumbotron.prototype._attrs = function (node) {
        return {
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            subTitle: (0,dom_utils.getStrTypeAttr)(node, 'sub-title', '')
        };
    };
    return Jumbotron;
}());
/* harmony default export */ var jumbotron = (Jumbotron);

;// CONCATENATED MODULE: ./src/components/jumbotron/index.ts

/* harmony default export */ var components_jumbotron = (jumbotron);

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./src/components/loading-bar/loading-bar.ts

/* eslint-disable @typescript-eslint/no-non-null-assertion */




// 全局配置
var DEFAULT_LOADINGBAR = {
    color: 'primary',
    height: 2,
    duration: 800,
    failedColor: 'error'
};
var timer;
function createLoadingBarInstance() {
    var LoadingBar = (0,dom_utils.createElem)('div');
    var LoadingBarInner = (0,dom_utils.createElem)('div');
    LoadingBar.className = "" + prefix.default.loadingBar;
    LoadingBarInner.className = prefix.default.loadingBar + "-inner";
    setColor('primary', LoadingBarInner);
    // 初始进度
    (0,dom_utils.setCss)(LoadingBarInner, 'width', '0%');
    // 设置进度条高度为全局配置的高度
    window.setTimeout(function () {
        var height = DEFAULT_LOADINGBAR.height + "px";
        (0,dom_utils.setCss)(LoadingBar, 'height', height);
    }, 0);
    LoadingBar.appendChild(LoadingBarInner);
    document.body.appendChild(LoadingBar);
    return LoadingBar;
}
// 设置进度函数
function r_update(options) {
    var LBar = (0,dom_utils.$el)("." + prefix.default.loadingBar);
    var LBarInner = (0,dom_utils.$el)("." + prefix.default.loadingBar + "-inner");
    // 设置进度
    (0,dom_utils.setCss)(LBarInner, 'width', options.percent + "%");
    var transitionConfig = {
        rmCls: true,
        timeout: 200,
        enterCls: 'rab-fade-in',
        leaveCls: 'rab-fade-out',
        hiddenParent: LBar
    };
    // 是否显示隐藏
    if (options.show) {
        CssTransition(LBarInner, __assign({ inOrOut: 'in' }, transitionConfig));
    }
    else {
        CssTransition(LBarInner, __assign({ inOrOut: 'out' }, transitionConfig));
    }
    setColor(options.status, LBarInner);
}
// 隐藏进度条
function loading_bar_hide() {
    window.setTimeout(function () {
        r_update({
            show: false
        });
        window.setTimeout(function () {
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
function setColor(status, elem) {
    if (status === 'error') {
        // 是否使用全局配置的 failedColor
        if (DEFAULT_LOADINGBAR.failedColor && DEFAULT_LOADINGBAR.failedColor !== 'error') {
            (0,dom_utils.setCss)(elem, 'backgroundColor', DEFAULT_LOADINGBAR.failedColor);
            // 在隐藏的持续时间后初始化背景色
            window.setTimeout(function () {
                (0,dom_utils.setCss)(elem, 'backgroundColor', '');
            }, DEFAULT_LOADINGBAR.duration);
        }
        else {
            elem.classList.add(prefix.default.loadingBar + "-inner-failed-color-error");
            // 在隐藏的持续时间后设为初始颜色
            window.setTimeout(function () {
                elem.classList.remove(prefix.default.loadingBar + "-inner-failed-color-error");
            }, DEFAULT_LOADINGBAR.duration + 200);
        }
    }
    else if (status === 'primary') {
        // 是否使用全局配置的 color
        if (DEFAULT_LOADINGBAR.color && DEFAULT_LOADINGBAR.color !== 'primary') {
            (0,dom_utils.setCss)(elem, 'backgroundColor', DEFAULT_LOADINGBAR.color);
        }
        else {
            elem.classList.add(prefix.default.loadingBar + "-inner-color-primary");
        }
    }
}
var $LoadingBar = /** @class */ (function () {
    function $LoadingBar() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)("." + prefix.default.loadingBar);
        createLoadingBarInstance();
    }
    $LoadingBar.prototype.statr = function () {
        if (timer)
            return;
        var percent = 0;
        timer = window.setInterval(function () {
            // 计算随机进度
            percent += Math.floor(Math.random() * 3 + 1);
            // 终止
            if (percent > 95) {
                clearTimer();
            }
            r_update({
                percent: percent,
                status: 'primary',
                show: true
            });
        }, 200);
    };
    $LoadingBar.prototype.update = function (percent) {
        clearTimer();
        r_update({
            percent: percent,
            status: 'success',
            show: true
        });
    };
    $LoadingBar.prototype.finish = function () {
        clearTimer();
        r_update({
            percent: 100,
            status: 'primary',
            show: true
        });
        loading_bar_hide();
    };
    $LoadingBar.prototype.error = function () {
        clearTimer();
        r_update({
            percent: 100,
            status: 'error',
            show: true
        });
        loading_bar_hide();
    };
    $LoadingBar.prototype.config = function (options) {
        if (options.color && isStr(options.color)) {
            DEFAULT_LOADINGBAR.color = options.color;
        }
        if (options.height && isNum(options.height)) {
            DEFAULT_LOADINGBAR.height = options.height;
        }
        if (options.duration && isNum(options.duration)) {
            DEFAULT_LOADINGBAR.duration = options.duration;
        }
        if (options.failedColor && isStr(options.failedColor)) {
            DEFAULT_LOADINGBAR.failedColor = options.failedColor;
        }
    };
    $LoadingBar.prototype.destroy = function () {
        clearTimer();
        // @ts-ignore
        document.body.removeChild((0,dom_utils.$el)("." + prefix.default.loadingBar));
    };
    return $LoadingBar;
}());
/* harmony default export */ var loading_bar = ($LoadingBar);

;// CONCATENATED MODULE: ./src/components/loading-bar/index.ts

var Loading = new loading_bar();
/* harmony default export */ var components_loading_bar = (Loading);

;// CONCATENATED MODULE: ./src/components/message/message.ts




var prefixKey = 'rab-message';
var MsgMoveEnter = prefix.default.message + "-move-enter";
var MsgMoveLeave = prefix.default.message + "-move-leave";
var iconTypes = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    loading: 'loading-solid'
};
var DEFAULT_MESSAGE = {
    top: 24,
    duration: 3
};
var zIndex = 1010;
// 创建实例的最外层父容器
function createMessageInstanceWrapper() {
    var MsgWrapper = (0,dom_utils.createElem)('div');
    MsgWrapper.className = "" + prefix.default.message;
    (0,dom_utils.setCss)(MsgWrapper, 'zIndex', "" + zIndex);
    setTimeout(function () {
        (0,dom_utils.setCss)(MsgWrapper, 'top', DEFAULT_MESSAGE.top + "px");
    }, 0);
    document.body.appendChild(MsgWrapper);
    return MsgWrapper;
}
var $Message = /** @class */ (function () {
    function $Message() {
        this.VERSION = 'v1.0';
        // 存储已经创建的实例，在 destroy方法里需要用到
        this.INSTANCE = [];
        createMessageInstanceWrapper();
    }
    $Message.prototype.info = function (config) {
        this._createInstance('info', config);
        // message 结束时提供 then 接口在关闭后运行 callback
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.success = function (config) {
        this._createInstance('success', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.warning = function (config) {
        this._createInstance('warning', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.error = function (config) {
        this._createInstance('error', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.loading = function (config) {
        this._createInstance('loading', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.config = function (options) {
        if (options.top && isNum(options.top)) {
            DEFAULT_MESSAGE.top = options.top;
        }
        if ((options.duration && isNum(options.duration)) || options.duration === 0) {
            DEFAULT_MESSAGE.duration = options.duration;
        }
    };
    $Message.prototype.destroy = function (key) {
        // 通过设置的 key 消除
        if (key && (isStr(key) || isNum(key))) {
            destroyElemByKey({
                key: key,
                duration: 0.1,
                prefixKey: prefixKey,
                clsLeave: MsgMoveLeave
            });
        }
        else {
            // 销毁所有实例
            this.INSTANCE.forEach(function (instance) {
                destroyElem(instance, {
                    duration: 0.1,
                    clsLeave: MsgMoveLeave
                });
            });
            // 清空存放的所有实例
            this.INSTANCE.length = 0;
        }
    };
    $Message.prototype._autoSetZindex = function () {
        // 每次创建实例自动增加最外层父容器的层级
        zIndex++;
        (0,dom_utils.setCss)((0,dom_utils.$el)("." + prefix.default.message), 'zIndex', "" + zIndex);
    };
    $Message.prototype._createInstance = function (_type, config) {
        var _a;
        this._autoSetZindex();
        var Message = (0,dom_utils.createElem)('div');
        var MsgContentWrap = (0,dom_utils.createElem)('div');
        var MsgContentBox = (0,dom_utils.createElem)('div');
        var MsgInfoBox = (0,dom_utils.createElem)('div');
        var MsgIcon = (0,dom_utils.createElem)('i');
        var MsgText = (0,dom_utils.createElem)('span');
        this._setCls(_type, [Message, MsgContentWrap, MsgContentBox, MsgInfoBox, MsgIcon]);
        this._setContent(MsgText, config);
        this._setIcon(_type, MsgIcon);
        // 参数 config 为字符串
        if (typeof config === 'string') {
            this._autoClose(Message, DEFAULT_MESSAGE.duration);
        }
        // 参数 config 为对象
        if (typeof config === 'object') {
            var key = config.key;
            var closable = config.closable, duration = config.duration, onClose = config.onClose, background = config.background;
            if (isUndef(closable))
                closable = false;
            if (isUndef(onClose))
                onClose = function () { return void 0; };
            if (isUndef(background))
                background = false;
            // 为每个实例自己的 duration 参数设置默认值，如果有传入值则使用自定义的值
            if (isUndef(duration))
                duration = DEFAULT_MESSAGE.duration;
            // 当全局的 duration 不为 3 时说明进行了全局配置进行改变
            if (DEFAULT_MESSAGE.duration !== 3)
                duration = DEFAULT_MESSAGE.duration;
            this._setClosable(closable, Message, MsgContentWrap, onClose);
            this._setBackground(Message, MsgContentWrap, background);
            this._autoClose(Message, duration);
            this._setKey(Message, key);
        }
        MsgContentWrap.appendChild(MsgContentBox);
        MsgContentBox.append(MsgInfoBox);
        MsgInfoBox.append(MsgIcon, MsgText);
        Message.appendChild(MsgContentWrap);
        (_a = (0,dom_utils.$el)("." + prefix.default.message)) === null || _a === void 0 ? void 0 : _a.appendChild(Message);
        // 存放每次创建的实例
        this.INSTANCE.push(Message);
        CssTransition(Message, {
            inOrOut: 'in',
            enterCls: MsgMoveEnter,
            rmCls: true,
            timeout: 250
        });
        return Message;
    };
    $Message.prototype._setCls = function (type, elems) {
        var nodesCls = [
            "" + prefix.default.messageChild,
            prefix.default.messageChild + "-content " + prefix.default.messageChild + "-content-" + type,
            prefix.default.messageChild + "-content-text",
            prefix.default.message + "-" + type,
            "" + prefix.default.icon
        ];
        elems.forEach(function (elem, i) {
            elem.className = nodesCls[i];
        });
    };
    $Message.prototype._setIcon = function (type, icon) {
        if (type === 'loading') {
            icon.classList.add('rab-load-loop');
        }
        // @ts-ignore
        icon.classList.add(prefix.default.icon + "-" + iconTypes[type]);
    };
    $Message.prototype._setContent = function (node, config) {
        if (typeof config === 'string') {
            isUseHTMLString(node, config, false);
        }
        else if (typeof config === 'object' && config.content) {
            isUseHTMLString(node, config.content, config.dangerouslyUseHTMLString);
        }
    };
    $Message.prototype._setClosable = function (closable, parent, children, onClose) {
        if (!closable)
            return;
        parent.classList.add(prefix.default.messageChild + "-closable");
        var MsgCloseBtn = (0,dom_utils.createElem)('a');
        MsgCloseBtn.className = prefix.default.messageChild + "-close";
        (0,dom_utils.setHtml)(MsgCloseBtn, "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>");
        this._handleClose(parent, MsgCloseBtn, onClose);
        children.appendChild(MsgCloseBtn);
    };
    $Message.prototype._setKey = function (node, key) {
        if (!key)
            return;
        node.setAttribute(prefixKey + "-key", key);
    };
    $Message.prototype._autoClose = function (node, duration) {
        destroyElem(node, {
            duration: duration,
            clsLeave: MsgMoveLeave
        });
    };
    $Message.prototype._handleClose = function (parent, closeBtn, onClose) {
        closeBtn.addEventListener('click', function () {
            // 手动关闭后的回调
            isFn(onClose);
            destroyElem(parent, {
                duration: 0.1,
                clsEnter: MsgMoveEnter,
                clsLeave: MsgMoveLeave
            });
        });
    };
    $Message.prototype._setBackground = function (node, children, background) {
        if (!background)
            return;
        node.classList.add(prefix.default.messageChild + "-with-background");
        children.classList.add(prefix.default.messageChild + "-content-background");
    };
    return $Message;
}());
/* harmony default export */ var message = ($Message);

;// CONCATENATED MODULE: ./src/components/message/index.ts

var Message = new message();
/* harmony default export */ var components_message = (Message);

;// CONCATENATED MODULE: ./src/components/modal/modal.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */





var RABBIT_BTN = new components_button();
var Modal = /** @class */ (function () {
    function Modal() {
        this.VERSION = 'v1.1';
        this.COMPONENTS = (0,dom_utils.$el)('r-modal', { all: true });
        this._create(this.COMPONENTS);
    }
    Modal.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'modal');
        var _a = Modal.prototype, _attrs = _a._attrs, _getModalNode = _a._getModalNode, _handleVisable = _a._handleVisable;
        var loading = _attrs(target).loading;
        var M_Child = _getModalNode(target);
        return {
            get title() {
                return (0,dom_utils.setHtml)(M_Child.modalTitle);
            },
            set title(newVal) {
                if (isStr(newVal))
                    (0,dom_utils.setHtml)(M_Child.modalTitle, newVal);
            },
            get visable() {
                return false;
            },
            set visable(newVal) {
                if (isBol(newVal)) {
                    // 当设置modal为隐藏状态并且确定按钮是加载中的状态则初始化它
                    if (!newVal) {
                        if (loading)
                            RABBIT_BTN.config(M_Child.modalOkBtn).loading = newVal;
                    }
                    _handleVisable(newVal, target, [
                        M_Child.modalMask,
                        M_Child.modalWrap,
                        M_Child.modal
                    ]);
                }
            },
            events: function (_a) {
                var onOk = _a.onOk, onCancel = _a.onCancel;
                var _b = _attrs(target), closable = _b.closable, maskClosable = _b.maskClosable;
                var okEv = function () {
                    // 是否设置按钮为加载中状态
                    if (loading)
                        RABBIT_BTN.config(M_Child.modalOkBtn).loading = loading;
                    onOk && isFn(onOk);
                };
                var cancelEv = function () {
                    // 如果按钮为加载中状态则初始化其状态
                    if (loading)
                        RABBIT_BTN.config(M_Child.modalOkBtn).loading = !loading;
                    // 防止关闭modal后按键esc依然可以触发事件
                    window.onkeydown = function (e) { return (e.key === 'Escape' ? false : ''); };
                    onCancel && isFn(onCancel);
                };
                // 由于内部的_handleClose方法使用addEventListener为触发关闭模态框的元素绑定点击事件，
                // 从而与这里绑定的事件造成冲突，一个回调事件同时多次触发的问题
                // 因此使用on事件绑定，防止触发回调事件的次数随着每次点击而不断的重复叠加
                if (maskClosable === 'true') {
                    // @ts-ignore
                    M_Child.modalWrap.onclick = function () { return cancelEv(); };
                    // @ts-ignore
                    M_Child.modal.onclick = function (e) { return e.stopPropagation(); };
                }
                if (closable === 'true') {
                    // @ts-ignore
                    M_Child.modalClose.onclick = function () { return cancelEv(); };
                    window.onkeydown = function (e) { return (e.key === 'Escape' ? cancelEv() : ''); };
                }
                // @ts-ignore
                M_Child.modalOkBtn.onclick = function () { return okEv(); };
                // @ts-ignore
                M_Child.modalCancelBtn.onclick = function () { return cancelEv(); };
            }
        };
    };
    Modal.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            _this._createTemplate(node);
            (0,dom_utils.setCss)(node, 'display', 'block');
            (0,dom_utils.removeAttrs)(node, [
                'width',
                'title',
                'ok-text',
                'class-name',
                'cancel-text',
                'mask',
                'visable',
                'scrollable',
                'fullscreen',
                'lock-scroll',
                'footer-hide'
            ]);
        });
    };
    Modal.prototype._createTemplate = function (node) {
        // v1.1 增加占位节点的组成数量判断
        if (moreThanOneNode(node))
            return;
        // 获取最初 modal容器下的占位内容
        var placeholderNode = node.firstElementChild;
        var _a = this._attrs(node), width = _a.width, title = _a.title, zIndex = _a.zIndex, okText = _a.okText, cancelText = _a.cancelText, className = _a.className;
        var template = "\n          <div class=\"" + prefix.default.modal + "-mask\" style=\"z-index:" + zIndex + "\"></div>\n          <div class=\"" + prefix.default.modal + "-wrap " + className + "\" style=\"z-index:" + zIndex + "\">\n              <div class=\"" + prefix.default.modal + "\" style=\"width: " + width + "\">\n                  <div class=\"" + prefix.default.modal + "-content\">\n                      <a class=\"" + prefix.default.modal + "-close\">\n                        <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>\n                      </a>\n                      <div class=\"" + prefix.default.modal + "-header\">\n                          <div class=\"" + prefix.default.modal + "-header-inner\">" + title + "</div>\n                      </div>\n                      <div class=\"" + prefix.default.modal + "-body\"></div>\n                      <div class=\"" + prefix.default.modal + "-footer\">\n                          <button type=\"button\" class=\"rab-btn rab-btn-text\" id=\"modalBtn1\">" + cancelText + "</button>\n                          <button type=\"button\" class=\"rab-btn rab-btn-primary\" id=\"modalBtn2\">" + okText + "</button>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      ";
        (0,dom_utils.setHtml)(node, template);
        this._initVisable(node);
        this._setHeader(node);
        // @ts-ignore
        this._setContent(node, placeholderNode);
        this._setMask(node);
        this._setFullScreen(node);
        this._setClosable(node);
        this._setFooterHide(node);
        this._handleClose(node);
    };
    Modal.prototype._initVisable = function (node) {
        var _a = this._attrs(node), visable = _a.visable, scrollable = _a.scrollable;
        var _b = this._getModalNode(node), modalMask = _b.modalMask, modalWrap = _b.modalWrap, modal = _b.modal;
        var lockScroll = this._attrs(node).lockScroll;
        !node.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        if (visable) {
            (0,dom_utils.setCss)(modalMask, 'display', '');
            modalWrap.classList.remove(prefix.default.modal + "-hidden");
            (0,dom_utils.setCss)(modal, 'display', '');
            scrollable_scrollable({ scroll: scrollable, lock: lockScroll });
        }
        else {
            (0,dom_utils.setCss)(modalMask, 'display', 'none');
            modalWrap.classList.add(prefix.default.modal + "-hidden");
            (0,dom_utils.setCss)(modal, 'display', 'none');
        }
        // @ts-ignore
        // 设置初始显示状态
        node.dataset.modalVisable = visable;
    };
    Modal.prototype._setHeader = function (node) {
        var title = this._attrs(node).title;
        if (!title) {
            var modalHeader = node.querySelector("." + prefix.default.modal + "-header");
            modalHeader === null || modalHeader === void 0 ? void 0 : modalHeader.remove();
        }
    };
    Modal.prototype._setContent = function (node, content) {
        var modalBody = node.querySelector("." + prefix.default.modal + "-body");
        if (content)
            modalBody === null || modalBody === void 0 ? void 0 : modalBody.appendChild(content);
    };
    Modal.prototype._setMask = function (node) {
        var _a = this, _attrs = _a._attrs, _getModalNode = _a._getModalNode;
        var mask = _attrs(node).mask;
        if (mask === 'false') {
            var _b = _getModalNode(node), modalMask = _b.modalMask, modalWrap = _b.modalWrap, modal = _b.modal;
            modalMask.remove();
            modalWrap.classList.add(prefix.default.modal + "-no-mask");
            modal.classList.add(prefix.default.modal + "-content-no-mask");
        }
    };
    Modal.prototype._setFullScreen = function (node) {
        var fullscreen = this._attrs(node).fullscreen;
        if (fullscreen) {
            var modal = this._getModalNode(node).modal;
            modal.classList.add(prefix.default.modal + "-fullscreen");
        }
    };
    Modal.prototype._setClosable = function (node) {
        var closable = this._attrs(node).closable;
        if (closable === 'false') {
            var modalClose = this._getModalNode(node).modalClose;
            modalClose.remove();
        }
    };
    Modal.prototype._setFooterHide = function (node) {
        var footerHide = this._attrs(node).footerHide;
        if (footerHide) {
            var modalFooter = node.querySelector("." + prefix.default.modal + "-footer");
            modalFooter === null || modalFooter === void 0 ? void 0 : modalFooter.remove();
        }
    };
    Modal.prototype._handleVisable = function (visable, target, children) {
        var _a = Modal.prototype, _show = _a._show, _hide = _a._hide;
        visable ? _show(target, children) : _hide(target, children);
    };
    Modal.prototype._handleClose = function (parent) {
        var _a = this, _attrs = _a._attrs, _hide = _a._hide, _getModalNode = _a._getModalNode;
        var _b = _attrs(parent), closable = _b.closable, maskClosable = _b.maskClosable, loading = _b.loading;
        var _c = _getModalNode(parent), modalMask = _c.modalMask, modalWrap = _c.modalWrap, modal = _c.modal, modalClose = _c.modalClose, modalOkBtn = _c.modalOkBtn, modalCancelBtn = _c.modalCancelBtn;
        var hidden = function () { return _hide(parent, [modalMask, modalWrap, modal]); };
        // 右上角关闭按钮
        // ESC 键关闭
        if (closable === 'true') {
            (0,dom_utils.bind)(modalClose, 'click', function () { return hidden(); });
            (0,dom_utils.bind)(window, 'keydown', function (e) { return (e.key === 'Escape' ? hidden() : ''); });
        }
        // 遮盖层关闭
        if (maskClosable === 'true') {
            (0,dom_utils.bind)(modalWrap, 'click', function () { return hidden(); });
            (0,dom_utils.bind)(modal, 'click', function (e) { return e.stopPropagation(); });
        }
        // 确定和取消按钮关闭
        //非加载中状态可以点击关闭模态框
        if (!loading)
            (0,dom_utils.bind)(modalOkBtn, 'click', function () { return hidden(); });
        (0,dom_utils.bind)(modalCancelBtn, 'click', function () { return hidden(); });
    };
    Modal.prototype._show = function (parent, showElm) {
        var _attrs = Modal.prototype._attrs;
        var scrollable = _attrs(parent).scrollable;
        var lockScroll = _attrs(parent).lockScroll;
        !parent.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        // @ts-ignore
        // 设置当前为显示状态
        parent.dataset.modalVisable = 'true';
        // showElm[0] 表示遮盖层
        // showElm[1] 表示模态框的父容器wrap
        // showElm[2] 表示模态框主体
        showElm[1].classList.contains(prefix.default.modal + "-hidden") &&
            showElm[1].classList.remove(prefix.default.modal + "-hidden");
        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            timeout: 250,
            rmCls: true
        });
        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: 'zoom-big-enter',
            timeout: 250,
            rmCls: true
        });
        scrollable_scrollable({ scroll: scrollable, lock: lockScroll });
    };
    Modal.prototype._hide = function (parent, hiddenElm) {
        // @ts-ignore
        // 设置当前为隐藏状态
        parent.dataset.modalVisable = 'false';
        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示模态框的父容器wrap
        // hiddenElm[2] 表示模态框主体
        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });
        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: 'zoom-big-leave',
            rmCls: true,
            timeout: 250
        });
        setTimeout(function () {
            hiddenElm[1].classList.add(prefix.default.modal + "-hidden");
            (0,dom_utils.setCss)(hiddenElm[2], 'display', 'none');
            scrollable_scrollable({ scroll: true, lock: true, node: parent, tagName: 'modal' });
        }, 240);
    };
    Modal.prototype._getModalNode = function (node) {
        var modalMask = node.querySelector("." + prefix.default.modal + "-mask");
        var modalWrap = node.querySelector("." + prefix.default.modal + "-wrap");
        var modal = modalWrap.querySelector("." + prefix.default.modal);
        var modalClose = modalWrap.querySelector("." + prefix.default.modal + "-close");
        var modalTitle = modal.querySelector("." + prefix.default.modal + "-header-inner");
        var modalOkBtn = modal.querySelector('#modalBtn2');
        var modalCancelBtn = modal.querySelector('#modalBtn1');
        return {
            modalMask: modalMask,
            modalWrap: modalWrap,
            modal: modal,
            modalClose: modalClose,
            modalTitle: modalTitle,
            modalOkBtn: modalOkBtn,
            modalCancelBtn: modalCancelBtn
        };
    };
    Modal.prototype._attrs = function (node) {
        return {
            mask: (0,dom_utils.getStrTypeAttr)(node, 'mask', 'true'),
            width: (0,dom_utils.getStrTypeAttr)(node, 'width', '520px'),
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            okText: (0,dom_utils.getStrTypeAttr)(node, 'ok-text', '确定'),
            closable: (0,dom_utils.getStrTypeAttr)(node, 'closable', 'true'),
            className: (0,dom_utils.getStrTypeAttr)(node, 'class-name', ''),
            cancelText: (0,dom_utils.getStrTypeAttr)(node, 'cancel-text', '取消'),
            maskClosable: (0,dom_utils.getStrTypeAttr)(node, 'mask-closable', 'true'),
            zIndex: (0,dom_utils.getNumTypeAttr)(node, 'z-index', 1000),
            visable: (0,dom_utils.getBooleanTypeAttr)(node, 'visable'),
            loading: (0,dom_utils.getBooleanTypeAttr)(node, 'loading'),
            scrollable: (0,dom_utils.getBooleanTypeAttr)(node, 'scrollable'),
            lockScroll: (0,dom_utils.getBooleanTypeAttr)(node, 'lock-scroll'),
            fullscreen: (0,dom_utils.getBooleanTypeAttr)(node, 'fullscreen'),
            footerHide: (0,dom_utils.getBooleanTypeAttr)(node, 'footer-hide')
        };
    };
    return Modal;
}());
/* harmony default export */ var modal = (Modal);

;// CONCATENATED MODULE: ./src/components/modal/index.ts

/* harmony default export */ var components_modal = (modal);

;// CONCATENATED MODULE: ./src/components/notice/notice.ts





var NotPrefixKey = 'rab-notice';
var NotMoveEnter = prefix.default.notice + "-move-enter";
var NotMoveLeave = prefix.default.notice + "-move-leave";
var notice_iconTypes = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    loading: 'loading-solid'
};
var DEFAULT_NOTICE = {
    top: 24,
    duration: 4.5
};
var notice_zIndex = 1180;
// 创建实例的最外层父容器
function createNoticeInsanceWrapper() {
    var NoticeWrapper = (0,dom_utils.createElem)('div');
    NoticeWrapper.className = "" + prefix.default.notice;
    (0,dom_utils.setCss)(NoticeWrapper, 'zIndex', "" + notice_zIndex);
    (0,dom_utils.setCss)(NoticeWrapper, 'right', '0');
    setTimeout(function () { return (0,dom_utils.setCss)(NoticeWrapper, 'top', DEFAULT_NOTICE.top + "px"); }, 0);
    document.body.appendChild(NoticeWrapper);
    return NoticeWrapper;
}
var $Notice = /** @class */ (function () {
    function $Notice() {
        this.VERSION = 'v1.0';
        // 存储已经创建的实例，在 destroy方法里需要用到
        this.instances = [];
        createNoticeInsanceWrapper();
    }
    $Notice.prototype.open = function (config) {
        this._createInstance('normal', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.info = function (config) {
        this._createInstance('info', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.success = function (config) {
        this._createInstance('success', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.warning = function (config) {
        this._createInstance('warning', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.error = function (config) {
        this._createInstance('error', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.config = function (options) {
        if (options.top) {
            DEFAULT_NOTICE.top = options.top;
        }
        if (options.duration || options.duration === 0) {
            DEFAULT_NOTICE.duration = options.duration;
        }
    };
    $Notice.prototype.close = function (key) {
        destroyElemByKey({
            key: key,
            duration: 0.1,
            clsLeave: NotMoveLeave,
            prefixKey: NotPrefixKey
        });
    };
    $Notice.prototype.destroy = function () {
        this.instances.forEach(function (instance) {
            destroyElem(instance, {
                clsLeave: NotMoveLeave,
                duration: 0.1
            });
        });
        // 清空存放的所有实例
        this.instances.length = 0;
    };
    $Notice.prototype._autoSetZindex = function () {
        notice_zIndex++;
        (0,dom_utils.setCss)((0,dom_utils.$el)("." + prefix.default.notice), 'zIndex', "" + notice_zIndex);
    };
    $Notice.prototype._createInstance = function (type, config) {
        var _a;
        this._autoSetZindex();
        var Notice = (0,dom_utils.createElem)('div');
        var NoticeContent = (0,dom_utils.createElem)('div');
        var NoticeCustomContent = (0,dom_utils.createElem)('div');
        var NoticeTitle = (0,dom_utils.createElem)('div');
        var NoticeDesc = (0,dom_utils.createElem)('div');
        this._setCls(type, [Notice, NoticeContent, NoticeCustomContent, NoticeTitle, NoticeDesc], config.className);
        this._setKey(Notice, config.key);
        this._setTitle(NoticeTitle, config.title, config.dangerouslyUseHTMLString);
        this._setDesc(Notice, NoticeCustomContent, NoticeDesc, config.desc, config.dangerouslyUseHTMLString);
        this._setIcon(type, NoticeCustomContent, NoticeDesc, config.icon);
        this._setClosable(Notice, config.closable, config.onClose);
        this._customStyle(Notice, config.style);
        NoticeCustomContent.append(NoticeTitle, NoticeDesc);
        NoticeContent.appendChild(NoticeCustomContent);
        Notice.appendChild(NoticeContent);
        (_a = document.querySelector("." + prefix.default.notice)) === null || _a === void 0 ? void 0 : _a.appendChild(Notice);
        CssTransition(Notice, {
            inOrOut: 'in',
            enterCls: NotMoveEnter
        });
        this.instances.push(Notice);
        this._handleNoticeClick(Notice, config.onClick);
        this._autoClose(Notice, config.duration);
        return Notice;
    };
    $Notice.prototype._setCls = function (type, nodes, customCls) {
        var nodesCls = [
            prefix.default.noticeChild + " " + (customCls ? customCls : ''),
            prefix.default.noticeChild + "-content",
            prefix.default.noticeChild + "-custom-content " + prefix.default.notice + "-with-" + type,
            prefix.default.notice + "-title",
            prefix.default.notice + "-desc"
        ];
        var i = 0;
        var length = nodes.length;
        for (; i < length; i++) {
            var node = nodes[i];
            node.className = nodesCls[i];
        }
    };
    $Notice.prototype._setKey = function (node, key) {
        if (!key)
            return;
        node.setAttribute(NotPrefixKey + "-key", key);
    };
    $Notice.prototype._setTitle = function (node, title, dangerouslyUseHTMLString) {
        // 必须设置一个通知提醒标题
        if (!title) {
            warn('You must set a notification to remind the title');
            return;
        }
        // 是否支持传入 HTML 片段
        isUseHTMLString(node, title, dangerouslyUseHTMLString);
    };
    $Notice.prototype._setDesc = function (parent, children_custm, child_desc, desc, dangerouslyUseHTMLString) {
        if (!desc)
            return;
        parent.classList.add(prefix.default.noticeChild + "-with-desc");
        children_custm.classList.add(prefix.default.notice + "-with-desc");
        // 是否支持传入 HTML 片段
        isUseHTMLString(child_desc, desc, dangerouslyUseHTMLString);
    };
    $Notice.prototype._setIcon = function (type, child_custom, child_desc, customIcon) {
        // 不带状态图标的类型
        if (type === 'noraml')
            return;
        if (type !== 'normal' || customIcon) {
            child_custom.classList.add(prefix.default.notice + "-with-icon");
        }
        var isOutline = '';
        // 带有状态图标并且是否带有提示内容，如果有则将图标设为 outline 外观
        if (child_desc.innerHTML)
            isOutline = '-outline';
        var NoticeIcon = (0,dom_utils.createElem)('span');
        NoticeIcon.className = prefix.default.notice + "-icon " + prefix.default.notice + "-icon-" + type;
        // 是否自定义状态图标
        if (customIcon) {
            (0,dom_utils.setHtml)(NoticeIcon, customIcon);
        }
        else {
            // @ts-ignore
            var defaultIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-" + notice_iconTypes[type] + isOutline + "\"></i>";
            (0,dom_utils.setHtml)(NoticeIcon, defaultIcon);
        }
        child_custom.prepend(NoticeIcon);
    };
    $Notice.prototype._setClosable = function (parent, closable, onClose) {
        // 默认显示右上角关闭按钮
        isUndef(closable) ? (closable = true) : closable;
        if (!closable)
            return;
        parent.classList.add(prefix.default.noticeChild + "-closable");
        var NoticeClose = (0,dom_utils.createElem)('a');
        var closeIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>";
        NoticeClose.className = prefix.default.noticeChild + "-close";
        (0,dom_utils.setHtml)(NoticeClose, closeIcon);
        this._handleClose(parent, NoticeClose, onClose);
        parent.appendChild(NoticeClose);
    };
    // 自定义内联样式
    $Notice.prototype._customStyle = function (node, style) {
        if (!style)
            return;
        (0,dom_utils.setCss)(node, 'cssText', style);
    };
    // 点击通知时触发的回调函数
    $Notice.prototype._handleNoticeClick = function (parent, onClick) {
        parent.onclick = function (e) {
            e.stopPropagation();
            if (onClick)
                isFn(onClick);
        };
    };
    $Notice.prototype._handleClose = function (parent, closeBtn, onClose) {
        closeBtn.onclick = function (e) {
            e.stopPropagation();
            if (onClose)
                isFn(onClose);
            destroyElem(parent, {
                clsLeave: NotMoveLeave,
                duration: 0.1
            });
        };
    };
    $Notice.prototype._autoClose = function (instance, duration) {
        // 为每个实例自己的 duration参数设置默认值，如果有传入值则使用自定义的值
        isUndef(duration) ? (duration = DEFAULT_NOTICE.duration) : duration;
        destroyElem(instance, {
            duration: duration,
            clsLeave: NotMoveLeave
        });
    };
    return $Notice;
}());
/* harmony default export */ var notice = ($Notice);

;// CONCATENATED MODULE: ./src/components/notice/index.ts

var Notice = new notice();
/* harmony default export */ var components_notice = (Notice);

;// CONCATENATED MODULE: ./src/components/page-header/page-header.ts



var PageHeader = /** @class */ (function () {
    function PageHeader() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-page-header', { all: true });
        this._create(this.COMPONENTS);
    }
    PageHeader.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'page-header');
        var backButton = target.querySelector("." + prefix.default.pageHeader + "-back");
        return {
            events: function (_a) {
                var onBack = _a.onBack;
                (0,dom_utils.bind)(backButton, 'click', function () {
                    isFn(onBack);
                });
            }
        };
    };
    PageHeader.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), title = _a.title, subTitle = _a.subTitle;
            _this._setMainTemplate(node, title, subTitle);
            (0,dom_utils.removeAttrs)(node, ['title', 'sub-title']);
        });
    };
    PageHeader.prototype._setMainTemplate = function (node, title, subTitle) {
        var template = "\n        <div class=\"" + prefix.default.pageHeader + "-heading\">\n            <div class=\"" + prefix.default.pageHeader + "-back\">\n                <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-md-arrow-back\"></i>\n            </div>\n            <span class=\"" + prefix.default.pageHeader + "-heading-title\">" + title + "</span>\n            <span class=\"" + prefix.default.pageHeader + "-heading-sub-title\">" + subTitle + "</span>\n        </div>\n        ";
        (0,dom_utils.setHtml)(node, template);
    };
    PageHeader.prototype._attrs = function (node) {
        return {
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            subTitle: (0,dom_utils.getStrTypeAttr)(node, 'sub-title', '')
        };
    };
    return PageHeader;
}());
/* harmony default export */ var page_header = (PageHeader);

;// CONCATENATED MODULE: ./src/components/page-header/index.ts

/* harmony default export */ var components_page_header = (page_header);

;// CONCATENATED MODULE: ./src/components/poptip/poptip.ts






var DEFAULTDELAY = 100;
var poptip_SHOWTIMER, EVENTTIMER;
var Poptip = /** @class */ (function () {
    function Poptip() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-poptip', { all: true });
        this._create(this.COMPONENTS);
        this.children = (0,dom_utils.$el)("." + prefix.default.poptip + "-popper", { all: true });
        clickOutside(this.children, 'poptipShow', 'zoom-big-fast-leave');
        scrollUpdate();
    }
    Poptip.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'poptip');
        var attrs = Poptip.prototype.attrs;
        var PoptipRef = target.querySelector("." + prefix.default.poptip + "-rel");
        var PoptipPopper = target.querySelector("." + prefix.default.poptip + "-popper");
        var PoptipContent = target.querySelector("." + prefix.default.poptip + "-body-content-inner");
        var PoptipTitle;
        var OkBtn;
        var CancelBtn;
        // 判断要设置的提示框标题是否是确认对话框的标题
        // 判断是否要获取确认对话框的确定和取消按钮
        if (attrs(target).isConfirm) {
            PoptipTitle = target.querySelector("." + prefix.default.poptip + "-body-message");
            OkBtn = target.querySelector("." + prefix.default.button + "-primary." + prefix.default.button + "-sm");
            CancelBtn = target.querySelector("." + prefix.default.button + "-text." + prefix.default.button + "-sm");
        }
        else {
            PoptipTitle = target.querySelector("." + prefix.default.poptip + "-title-inner");
        }
        return {
            get title() {
                return (0,dom_utils.setHtml)(PoptipTitle);
            },
            set title(newVal) {
                if (isStr(newVal) || isNum(newVal))
                    (0,dom_utils.setHtml)(PoptipTitle, newVal);
            },
            get content() {
                return (0,dom_utils.setHtml)(PoptipContent);
            },
            set content(newVal) {
                if (isStr(newVal) || isNum(newVal))
                    (0,dom_utils.setHtml)(PoptipContent, newVal);
            },
            events: function (_a) {
                var onShow = _a.onShow, onHide = _a.onHide, onOk = _a.onOk, onCancel = _a.onCancel;
                var triggerMode = attrs(target).trigger;
                var showEv = function () {
                    if (PoptipPopper.dataset.poptipShow === 'true')
                        onShow && isFn(onShow);
                };
                var hideEv = function () {
                    if (PoptipPopper.dataset.poptipShow === 'false')
                        onHide && isFn(onHide);
                };
                var clickEv = function () {
                    showEv();
                    hideEv();
                };
                if (triggerMode === 'click') {
                    (0,dom_utils.bind)(PoptipRef, 'click', clickEv);
                }
                else if (triggerMode === 'focus') {
                    (0,dom_utils.bind)(target, 'mousedown', showEv);
                    (0,dom_utils.bind)(target, 'mouseup', hideEv);
                }
                else if (triggerMode === 'hover') {
                    handleHoverShowAndHideEvents({
                        reference: target,
                        popper: PoptipPopper,
                        datasetVal: 'poptipStatus',
                        showCb: onShow,
                        hideCb: onHide,
                        delay: DEFAULTDELAY,
                        timer: EVENTTIMER
                    });
                }
                // 确认对话框的确定和取消按钮都要触发提示框隐藏
                if (OkBtn) {
                    (0,dom_utils.bind)(OkBtn, 'click', function () {
                        hideEv();
                        onOk && isFn(onOk);
                    });
                }
                if (CancelBtn) {
                    (0,dom_utils.bind)(OkBtn, 'click', function () {
                        hideEv();
                        onCancel && isFn(onCancel);
                    });
                }
            }
        };
    };
    Poptip.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node, i) {
            _this._createPoptipNodes(node, i);
            (0,dom_utils.removeAttrs)(node, [
                'width',
                'title',
                'content',
                'ok-text',
                'padding',
                'disabled',
                'placement',
                'word-wrap',
                'cancel-text'
            ]);
        });
    };
    Poptip.prototype._createPoptipNodes = function (node, i) {
        var attrs = this.attrs(node);
        if (attrs.isConfirm)
            node.className = prefix.default.poptip + "-confirm";
        var uid = "poptip" + i;
        var referenceElem = node.firstElementChild;
        var PoptipRel = (0,dom_utils.createElem)('div');
        PoptipRel.className = prefix.default.poptip + "-rel";
        PoptipRel.appendChild(referenceElem);
        var whatModel = attrs.isConfirm ? this._confirmTpl(attrs) : this._normalTpl(attrs);
        var template = "\n            <div class=\"" + prefix.default.poptip + "-popper\" x-placement=" + attrs.placement + " data-poptip-uid=" + uid + ">\n                <div class=\"" + prefix.default.poptip + "-content\">\n                    <div class=\"" + prefix.default.poptip + "-arrow\" data-popper-arrow></div>\n                    <div class=\"" + prefix.default.poptip + "-inner\">" + whatModel + "</div>\n                </div>\n            </div>\n        ";
        (0,dom_utils.setHtml)(node, template);
        this._setWidth(attrs, uid);
        var Popper = (0,dom_utils.$el)("[data-poptip-uid=" + uid + "]");
        Popper === null || Popper === void 0 ? void 0 : Popper.before(PoptipRel);
        // 初始化 display
        (0,dom_utils.setCss)(Popper, 'display', 'none');
        if (!attrs.isDisabled) {
            // @ts-ignore
            this._triggerDisplay(attrs.trigger, node, PoptipRel, Popper, attrs);
        }
    };
    Poptip.prototype._normalTpl = function (attrs) {
        var setPadding = attrs.padding ? "padding:" + attrs.padding : '';
        var isShowTitle = !attrs.isWordWrap && attrs.title
            ? "<div class=\"" + prefix.default.poptip + "-title\" style=\"" + setPadding + "\">\n                      <div class=\"" + prefix.default.poptip + "-title-inner\">" + attrs.title + "</div>\n                   </div>"
            : '';
        var template = "\n            " + isShowTitle + "\n            <div class=\"" + prefix.default.poptip + "-body\" style=\"" + setPadding + "\">\n                <div class=\"" + prefix.default.poptip + "-body-content\">\n                <div class=\"" + prefix.default.poptip + "-body-content-inner\">" + attrs.content + "</div>\n                </div>\n            </div>\n            ";
        return template;
    };
    Poptip.prototype._confirmTpl = function (attrs) {
        var template = "\n          <div class=\"" + prefix.default.poptip + "-body\">\n              <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-help-circle\"></i>\n              <div class=\"" + prefix.default.poptip + "-body-message\">" + attrs.title + "</div>\n          </div>\n          <div class=\"" + prefix.default.poptip + "-footer\">\n              <button class=\"" + prefix.default.button + " " + prefix.default.button + "-text " + prefix.default.button + "-sm\">" + attrs.cancelText + "</button>\n              <button class=\"" + prefix.default.button + " " + prefix.default.button + "-primary " + prefix.default.button + "-sm\">" + attrs.okText + "</button>\n          </div>\n      ";
        return template;
    };
    Poptip.prototype._setWidth = function (attrs, uid) {
        var popper = document.querySelector("[data-poptip-uid=" + uid + "]");
        if (attrs.width) {
            (0,dom_utils.setCss)(popper, 'width', attrs.width + "px");
        }
        if (attrs.isWordWrap) {
            var popperContent = popper === null || popper === void 0 ? void 0 : popper.querySelector("." + prefix.default.poptip + "-body-content");
            popperContent === null || popperContent === void 0 ? void 0 : popperContent.classList.add(prefix.default.poptip + "-body-content-word-wrap");
        }
    };
    Poptip.prototype._triggerDisplay = function (trigger, parent, referenceChild, popper, poptipAttrs) {
        if (trigger !== 'click' && trigger !== 'hover' && trigger !== 'focus') {
            warn("The Poptip attribute trigger got an invalid trigger mode --> '" + trigger + "'");
            return;
        }
        var _initPoptip = this._initPoptip;
        var common = {
            rmCls: true,
            enterCls: 'zoom-big-fast-enter',
            leaveCls: 'zoom-big-fast-leave',
            timeout: 200
        };
        // 通过设置 popper.dataset.poptipShow 来判断是否隐藏或显示
        var show = function () {
            popper.dataset.poptipShow = 'true';
            CssTransition(popper, __assign({ inOrOut: 'in' }, common));
            _initPoptip(parent, popper, poptipAttrs);
        };
        var hide = function () {
            popper.dataset.poptipShow = 'false';
            CssTransition(popper, __assign({ inOrOut: 'out' }, common));
        };
        var judgmentIsVisible = function () { return (popper.dataset.poptipShow === 'true' ? hide() : show()); };
        if (trigger === 'click' || trigger === 'focus') {
            _initPoptip(parent, popper, poptipAttrs);
            toggleUpdate(popper, trigger, parent);
        }
        if (trigger === 'click') {
            (0,dom_utils.bind)(referenceChild, 'click', judgmentIsVisible);
        }
        else if (trigger === 'focus' && !poptipAttrs.isConfirm) {
            (0,dom_utils.bind)(referenceChild, 'mousedown', judgmentIsVisible);
            (0,dom_utils.bind)(referenceChild, 'mouseup', hide);
        }
        else if (trigger === 'hover' && !poptipAttrs.isConfirm) {
            (0,dom_utils.bind)(parent, 'mouseenter', function () {
                poptip_SHOWTIMER = setTimeout(function () {
                    show();
                }, DEFAULTDELAY);
            });
            (0,dom_utils.bind)(parent, 'mouseleave', function () {
                clearTimeout(poptip_SHOWTIMER);
                hide();
            });
            toggleUpdate(popper, 'hover', parent, DEFAULTDELAY);
        }
        // 确认对话框的确定和取消按钮触发隐藏
        if (poptipAttrs.isConfirm) {
            var confirmOkBtn = popper.querySelector("." + prefix.default.button + "-primary." + prefix.default.button + "-sm");
            var confirmCancelBtn = popper.querySelector("." + prefix.default.button + "-text." + prefix.default.button + "-sm");
            confirmOkBtn.addEventListener('click', judgmentIsVisible);
            confirmCancelBtn.addEventListener('click', judgmentIsVisible);
        }
    };
    Poptip.prototype._initPoptip = function (reference, popper, poptipAttrs) {
        var NCP = _newCreatePopper(reference, popper, poptipAttrs.placement, poptipAttrs.offset);
        return NCP;
    };
    Poptip.prototype.attrs = function (node) {
        return {
            // number type
            width: (0,dom_utils.getNumTypeAttr)(node, 'width', 0),
            offset: (0,dom_utils.getNumTypeAttr)(node, 'offset', 0),
            // string type
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            okText: (0,dom_utils.getStrTypeAttr)(node, 'ok-text', '确定'),
            content: (0,dom_utils.getStrTypeAttr)(node, 'content', ''),
            trigger: (0,dom_utils.getStrTypeAttr)(node, 'trigger', 'click'),
            padding: (0,dom_utils.getStrTypeAttr)(node, 'padding', ''),
            placement: (0,dom_utils.getStrTypeAttr)(node, 'placement', 'top'),
            cancelText: (0,dom_utils.getStrTypeAttr)(node, 'cancel-text', '取消'),
            // boolean type
            isConfirm: (0,dom_utils.getBooleanTypeAttr)(node, 'confirm'),
            isDisabled: (0,dom_utils.getBooleanTypeAttr)(node, 'disabled'),
            isWordWrap: (0,dom_utils.getBooleanTypeAttr)(node, 'word-wrap')
        };
    };
    return Poptip;
}());
/* harmony default export */ var poptip = (Poptip);

;// CONCATENATED MODULE: ./src/components/poptip/index.ts

/* harmony default export */ var components_poptip = (poptip);

;// CONCATENATED MODULE: ./src/components/progress/progress.ts



var PrgesIconType = {
    success: '<i class="rab-icon rab-icon-ios-checkmark-circle"></i>',
    warning: '<i class="rab-icon rab-icon-ios-alert"></i>',
    wrong: '<i class="rab-icon rab-icon-ios-close-circle"></i>'
};
var Progress = /** @class */ (function () {
    function Progress() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-progress', { all: true });
        this._create(this.COMPONENTS);
    }
    Progress.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'progress');
        var progress = target.querySelector("." + prefix.default.progress + "-bg");
        var progressSucs = target.querySelector("." + prefix.default.progress + "-success-bg");
        var progressText = target.querySelector("." + prefix.default.progress + "-inner-text");
        return {
            get percent() {
                return progress;
            },
            set percent(newVal) {
                if (!isNum(newVal) || newVal == progress.style.width)
                    return;
                if (progressText)
                    (0,dom_utils.setHtml)(progressText, newVal + "%");
                (0,dom_utils.setCss)(progress, 'width', newVal + "%");
            },
            get successPercent() {
                return progressSucs;
            },
            set successPercent(newVal) {
                if (!isNum(newVal) || newVal == progressSucs.style.width)
                    return;
                (0,dom_utils.setCss)(progressSucs, 'width', newVal + "%");
            }
        };
    };
    Progress.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            _this._createChildNodes(node);
            (0,dom_utils.removeAttrs)(node, [
                'percent',
                'show-text',
                'text-inside',
                'stroke-width',
                'stroke-color',
                'success-percent'
            ]);
        });
    };
    Progress.prototype._createChildNodes = function (wrapper) {
        var PgrsOuter = (0,dom_utils.createElem)('div');
        var PgrsInner = (0,dom_utils.createElem)('div');
        var PgrsBar = (0,dom_utils.createElem)('div');
        var PgrsBarSucess = (0,dom_utils.createElem)('div');
        PgrsOuter.className = prefix.default.progress + "-outer";
        PgrsInner.className = prefix.default.progress + "-inner";
        PgrsBar.className = prefix.default.progress + "-bg";
        PgrsBarSucess.className = prefix.default.progress + "-success-bg";
        this._setPercent(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeWidth(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeColor(wrapper, PgrsBar);
        PgrsInner.append(PgrsBar, PgrsBarSucess);
        PgrsOuter.appendChild(PgrsInner);
        wrapper.appendChild(PgrsOuter);
        this._showText(wrapper, PgrsBar);
    };
    Progress.prototype._setPercent = function (wrapper, bar, successBar) {
        var percent = this._getPercent(wrapper) + "%";
        var successPercent = this._getSuccessPercent(wrapper) + "%";
        (0,dom_utils.setCss)(bar, 'width', percent);
        (0,dom_utils.setCss)(successBar, 'width', successPercent);
    };
    Progress.prototype._setStrokeWidth = function (wrapper, bar, successBar) {
        var strokeWidth = this._getStrokeWidth(wrapper) + "px";
        (0,dom_utils.setCss)(bar, 'height', strokeWidth);
        (0,dom_utils.setCss)(successBar, 'height', strokeWidth);
    };
    Progress.prototype._showText = function (wrapper, PgrsBar) {
        if (!this._isShowText(wrapper))
            return;
        var PgrsTextWrapper = (0,dom_utils.createElem)('div');
        var PgresText = (0,dom_utils.createElem)('span');
        PgrsTextWrapper.className = prefix.default.progress + "-text";
        PgresText.className = prefix.default.progress + "-inner-text";
        var percentText = this._getPercent(wrapper) + "%";
        (0,dom_utils.setText)(PgresText, percentText);
        if (!this._isTextInside(wrapper)) {
            wrapper.className = prefix.default.progress + "-show-info";
            if (this._getStatus(wrapper) === 'success') {
                (0,dom_utils.setHtml)(PgresText, PrgesIconType.success);
            }
            else if (this._getStatus(wrapper) === 'warning') {
                (0,dom_utils.setHtml)(PgresText, PrgesIconType.warning);
            }
            else if (this._getStatus(wrapper) === 'wrong') {
                (0,dom_utils.setHtml)(PgresText, PrgesIconType.wrong);
            }
            PgrsTextWrapper.appendChild(PgresText);
            wrapper.appendChild(PgrsTextWrapper);
        }
        else {
            PgrsBar.appendChild(PgresText);
        }
    };
    Progress.prototype._setStrokeColor = function (wrapper, PgrsBar) {
        var _a = this._getStrokeColor(wrapper), from = _a.from, to = _a.to;
        if (from.length || to.length) {
            var strokeColor = "linear-gradient(to right, " + from + " 0%, " + to + " 100%)";
            (0,dom_utils.setCss)(PgrsBar, 'backgroundImage', strokeColor);
        }
    };
    Progress.prototype._getStatus = function (node) {
        return node.getAttribute('status');
    };
    Progress.prototype._getPercent = function (node) {
        return node.getAttribute('percent') || '0';
    };
    Progress.prototype._getSuccessPercent = function (node) {
        return node.getAttribute('success-percent') || '0';
    };
    Progress.prototype._getStrokeWidth = function (node) {
        return node.getAttribute('stroke-width') || '10';
    };
    Progress.prototype._getStrokeColor = function (node) {
        var _a;
        if (!node.getAttribute('stroke-color')) {
            return {
                from: [],
                to: []
            };
        }
        else {
            /**
             * 转为真实数组
             * "['','']" -> ['','']
             */
            var strArr = ((_a = node.getAttribute('stroke-color')) === null || _a === void 0 ? void 0 : _a.replace(/'/g, '"')) || '';
            var colorArr = JSON.parse(strArr);
            return {
                from: colorArr[0],
                to: colorArr[1]
            };
        }
    };
    Progress.prototype._isTextInside = function (node) {
        return node.getAttribute('text-inside') === 'true';
    };
    Progress.prototype._isShowText = function (node) {
        if (node.getAttribute('show-text') === 'false')
            return false;
        else
            return true;
    };
    return Progress;
}());
/* harmony default export */ var progress = (Progress);

;// CONCATENATED MODULE: ./src/components/progress/index.ts

/* harmony default export */ var components_progress = (progress);

;// CONCATENATED MODULE: ./src/components/radio/radio.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */



var Radio = /** @class */ (function () {
    function Radio() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-radio', { all: true });
        this._create(this.COMPONENTS);
    }
    Radio.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        var isGroup = target.tagName.toLowerCase() == 'r-radio-group';
        // 排除 group 项
        if (!isGroup) {
            validComps(target, 'radio');
        }
        else {
            validComps(target, 'radio-group');
        }
        var _a = Radio.prototype, _isChecked = _a._isChecked, _isDisabled = _a._isDisabled, _setSingleChecked = _a._setSingleChecked, _setCurrentlyChecked = _a._setCurrentlyChecked;
        return {
            get checked() {
                return !isGroup && _isChecked(target);
            },
            set checked(newVal) {
                if (isGroup || !isBol(newVal))
                    return;
                _setSingleChecked(target, newVal);
            },
            get value() {
                // @ts-ignore
                return isGroup && target.getAttribute('value');
            },
            set value(newVal) {
                if (!isGroup && !isStr(newVal))
                    return;
                Array.from(target.children).forEach(function (child) {
                    var label = child.getAttribute('label');
                    _setCurrentlyChecked(child, newVal, label);
                });
            },
            events: function (_a) {
                var onChange = _a.onChange;
                if (!isGroup) {
                    (0,dom_utils.bind)(target, 'click', function () {
                        if (_isDisabled(target))
                            return false;
                        onChange && isFn(onChange, true);
                    });
                }
                else {
                    var item_1 = Object.create(null);
                    (0,dom_utils.bind)(target, 'click', function () {
                        Array.from(target.children).forEach(function (child, index) {
                            if (_isDisabled(child))
                                return false;
                            item_1['index'] = index;
                            item_1['label'] = child.getAttribute('label');
                            item_1['current'] = child;
                            if (_isChecked(child))
                                onChange && isFn(onChange, item_1);
                        });
                    });
                }
            }
        };
    };
    Radio.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), checked = _a.checked, label = _a.label, icon = _a.icon, name = _a.name;
            var content = (0,dom_utils.setHtml)(node);
            var RadioGroupWrapper = _this._getGroupElm(node);
            if (RadioGroupWrapper) {
                var value = _this._attrs(RadioGroupWrapper).value;
                _this._setCurrentlyChecked(node, value, label);
            }
            _this._setMainTemplate(node, content, name);
            _this._setSingleChecked(node, checked, RadioGroupWrapper);
            _this._setIcon(node, icon);
            _this._handleClick(node, RadioGroupWrapper);
            (0,dom_utils.removeAttrs)(node, ['checked', 'icon']);
        });
    };
    Radio.prototype._setMainTemplate = function (node, content, name) {
        var template = "\n        <span class=\"" + prefix.default.radio + "\">\n          <span class=\"" + prefix.default.radio + "-inner\"></span>\n          <input type=\"radio\" name=\"" + name + "\" class=\"" + prefix.default.radio + "-input\" />\n        </span> " + content + "\n      ";
        (0,dom_utils.setHtml)(node, template);
    };
    // 设置单个radio选中
    Radio.prototype._setSingleChecked = function (node, checked, groupWrapper) {
        if (groupWrapper)
            return;
        checked
            ? node.classList.add(prefix.default.radio + "-checked")
            : node.classList.remove(prefix.default.radio + "-checked");
    };
    // 设置radio组的当前选中项
    Radio.prototype._setCurrentlyChecked = function (node, value, label) {
        if (value !== label)
            return;
        node.classList.add(prefix.default.radio + "-wrapper-checked");
        node.classList.add(prefix.default.radio + "-checked");
        (0,dom_utils.siblings)(node).forEach(function (o) {
            o.classList.remove(prefix.default.radio + "-wrapper-checked");
            o.classList.remove(prefix.default.radio + "-checked");
        });
    };
    Radio.prototype._setIcon = function (node, icon) {
        var _a;
        if (!icon)
            return;
        var template = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-" + icon + "\"></i>";
        (_a = node.querySelector("." + prefix.default.radio)) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterend', template);
    };
    Radio.prototype._handleClick = function (node, groupWrapper) {
        var _this = this;
        if (this._isDisabled(node))
            return;
        var changeStatus = function () {
            if (groupWrapper) {
                node.classList.add(prefix.default.radio + "-wrapper-checked");
                (0,dom_utils.siblings)(node).forEach(function (o) {
                    if (_this._isChecked(o)) {
                        o.classList.remove(prefix.default.radio + "-checked");
                        o.classList.remove(prefix.default.radio + "-wrapper-checked");
                        o.classList.remove(prefix.default.radio + "-focus");
                    }
                });
            }
            node.classList.add(prefix.default.radio + "-checked");
        };
        (0,dom_utils.bind)(node, 'click', function () { return changeStatus(); });
        (0,dom_utils.bind)(node, 'mousedown', function () {
            node.classList.add(prefix.default.radio + "-focus");
        });
        (0,dom_utils.bind)(node, 'mouseup', function () {
            setTimeout(function () { return node.classList.remove(prefix.default.radio + "-focus"); }, 1000);
        });
    };
    Radio.prototype._getGroupElm = function (node) {
        var tag = node.parentElement;
        return (tag === null || tag === void 0 ? void 0 : tag.tagName.toLowerCase()) === 'r-radio-group' ? tag : null;
    };
    Radio.prototype._isDisabled = function (node) {
        return node.getAttribute('disabled') == '' || node.getAttribute('disabled') == 'true';
    };
    Radio.prototype._isChecked = function (node) {
        return node.classList.contains(prefix.default.radio + "-checked");
    };
    Radio.prototype._attrs = function (node) {
        return {
            value: (0,dom_utils.getStrTypeAttr)(node, 'value', ''),
            name: (0,dom_utils.getStrTypeAttr)(node, 'name', ''),
            label: (0,dom_utils.getStrTypeAttr)(node, 'label', ''),
            icon: (0,dom_utils.getStrTypeAttr)(node, 'icon', ''),
            checked: (0,dom_utils.getBooleanTypeAttr)(node, 'checked')
        };
    };
    return Radio;
}());
/* harmony default export */ var radio_radio = (Radio);

;// CONCATENATED MODULE: ./src/components/radio/index.ts

/* harmony default export */ var components_radio = (radio_radio);

;// CONCATENATED MODULE: ./assets/result-403.svg
/* harmony default export */ var result_403 = (".././fonts/result-403.svg");
;// CONCATENATED MODULE: ./assets/result-404.svg
/* harmony default export */ var result_404 = (".././fonts/result-404.svg");
;// CONCATENATED MODULE: ./assets/result-500.svg
/* harmony default export */ var result_500 = (".././fonts/result-500.svg");
;// CONCATENATED MODULE: ./src/components/result/result.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */






var Result = /** @class */ (function () {
    function Result() {
        this.VERSION = 'v1.1';
        this.COMPONENTS = (0,dom_utils.$el)('r-result', { all: true });
        this._create(this.COMPONENTS);
    }
    Result.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            // v1.1 增加占位节点的组成数量判断
            if (moreThanOneNode(node))
                return;
            var _a = _this._attrs(node), status = _a.status, title = _a.title, subTitle = _a.subTitle, icon = _a.icon, extra = _a.extra;
            var placeholderNode = node.firstElementChild;
            _this._setMainTemplate(node);
            _this._setStatus(node, status);
            _this._setTitle(node, title, subTitle);
            _this._setExtraContent(node, extra);
            _this._setComplexDesc(node, placeholderNode);
            _this._setCustomIcon(node, icon);
            (0,dom_utils.removeAttrs)(node, ['title', 'subtitle', 'status', 'icon', 'extra']);
        });
    };
    Result.prototype._setMainTemplate = function (node) {
        var template = "\n          <div class=\"" + prefix.default.result + "-icon\">\n             <i class=\"" + prefix.default.icon + "\"></i>\n          </div>\n          <div class=\"" + prefix.default.result + "-title\"></div>\n          <div class=\"" + prefix.default.result + "-subtitle\"></div> \n          <div class=\"" + prefix.default.result + "-content\"></div>\n          <div class=\"" + prefix.default.result + "-extra\"></div>\n        ";
        (0,dom_utils.setHtml)(node, template);
    };
    Result.prototype._setStatus = function (node, status) {
        node.classList.add(prefix.default.result + "-" + status);
        var ResultIcon = node.querySelector("." + prefix.default.result + "-icon");
        var I = ResultIcon.querySelector('i');
        var iconType = this._getStatusIcon(status);
        var otherStatus = ['403', '404', '500'];
        if (otherStatus.includes(status)) {
            ResultIcon.classList.add(prefix.default.result + "-image");
            ResultIcon.removeChild(I);
            (0,dom_utils.setHtml)(ResultIcon, "<img src=\"" + iconType + "\" alt=\"result\" />");
        }
        else {
            I.classList.add(prefix.default.icon + "-" + iconType);
        }
    };
    Result.prototype._setTitle = function (node, title, subTitle) {
        var ResultTitle = node.querySelector("." + prefix.default.result + "-title");
        var ResultSubTitle = node.querySelector("." + prefix.default.result + "-subtitle");
        (0,dom_utils.setHtml)(ResultTitle, title);
        (0,dom_utils.setHtml)(ResultSubTitle, subTitle);
    };
    Result.prototype._setExtraContent = function (node, content) {
        var ResultExtra = node.querySelector("." + prefix.default.result + "-extra");
        (0,dom_utils.setHtml)(ResultExtra, content);
    };
    Result.prototype._setCustomIcon = function (node, icon) {
        if (!icon)
            return;
        var ResultIcon = node.querySelector("." + prefix.default.result + "-icon > i");
        ResultIcon.className = prefix.default.icon + " " + prefix.default.icon + "-" + icon;
    };
    Result.prototype._setComplexDesc = function (node, child) {
        var ResultContent = node.querySelector("." + prefix.default.result + "-content");
        if (!child) {
            node.removeChild(ResultContent);
            return;
        }
        ResultContent === null || ResultContent === void 0 ? void 0 : ResultContent.appendChild(child);
    };
    Result.prototype._getStatusIcon = function (status) {
        var icons = {
            info: 'ios-alert',
            success: 'ios-checkmark-circle',
            warning: 'ios-warning',
            error: 'ios-close-circle',
            '403': result_403,
            '404': result_404,
            '500': result_500
        };
        // @ts-ignore
        return icons[status] || icons.info;
    };
    Result.prototype._attrs = function (node) {
        return {
            status: (0,dom_utils.getStrTypeAttr)(node, 'status', 'info'),
            icon: (0,dom_utils.getStrTypeAttr)(node, 'icon', ''),
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            extra: (0,dom_utils.getStrTypeAttr)(node, 'extra', ''),
            subTitle: (0,dom_utils.getStrTypeAttr)(node, 'subtitle', '')
        };
    };
    return Result;
}());
/* harmony default export */ var result = (Result);

;// CONCATENATED MODULE: ./src/components/result/index.ts

/* harmony default export */ var components_result = (result);

;// CONCATENATED MODULE: ./src/components/skeleton/skeleton.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */


var Skeleton = /** @class */ (function () {
    function Skeleton() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-skeleton', { all: true });
        this._create(this.COMPONENTS);
    }
    Skeleton.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), active = _a.active, title = _a.title, paragraph = _a.paragraph, avatar = _a.avatar, titleWidth = _a.titleWidth, paragraphRows = _a.paragraphRows, paragraphWidth = _a.paragraphWidth, avatarSize = _a.avatarSize, avatarShape = _a.avatarShape;
            _this._setActive(node, active);
            _this._setMainTemplate(node);
            _this._setTitle(node, title, titleWidth);
            _this._showParagraph(node, paragraph, paragraphRows, paragraphWidth);
            _this._showAvatar(node, avatar, avatarSize, avatarShape);
            (0,dom_utils.removeAttrs)(node, [
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
    };
    Skeleton.prototype._setActive = function (node, active) {
        if (!active)
            return;
        node.classList.add(prefix.default.skeleton + "-active");
    };
    Skeleton.prototype._setMainTemplate = function (node) {
        var template = "\n        <div class=\"" + prefix.default.skeleton + "-content\">\n            <h3 class=\"" + prefix.default.skeleton + "-title\" style=\"width: 38%\"></h3>\n            <ul class=\"" + prefix.default.skeleton + "-paragraph\">\n                <li></li>\n                <li></li>\n                <li></li>\n            </ul>\n        </div>\n        ";
        (0,dom_utils.setHtml)(node, template);
    };
    Skeleton.prototype._setTitle = function (node, isShow, width) {
        var Title = node.querySelector("." + prefix.default.skeleton + "-title");
        this._setTitleWidth(Title, width);
        if (isShow === 'false') {
            node.removeChild(Title);
        }
    };
    Skeleton.prototype._setTitleWidth = function (titleElm, titleWidth) {
        (0,dom_utils.setCss)(titleElm, 'width', titleWidth + "%");
    };
    Skeleton.prototype._showParagraph = function (node, isShow, rows, rowsWidth) {
        var Paragraph = node.querySelector("." + prefix.default.skeleton + "-paragraph");
        this._setParagraphRows(Paragraph, rows);
        this._setParagraphRowsWidth(Paragraph, rowsWidth);
        if (isShow === 'false') {
            node.removeChild(Paragraph);
        }
    };
    Skeleton.prototype._setParagraphRows = function (pgELm, rows) {
        if (!rows)
            return;
        var Fragment = document.createDocumentFragment();
        var i = 0;
        for (; i < rows; i++) {
            var Row = (0,dom_utils.createElem)('li');
            Fragment.appendChild(Row);
        }
        (0,dom_utils.setHtml)(pgELm, '');
        pgELm.appendChild(Fragment);
    };
    Skeleton.prototype._setParagraphRowsWidth = function (pgELm, width) {
        if (typeof width === 'number') {
            (0,dom_utils.setCss)(pgELm.querySelector("." + prefix.default.skeleton + "-paragraph > li"), 'width', width + "%");
        }
        if (Array.isArray(width) && width.length) {
            var Rows = pgELm.querySelectorAll("." + prefix.default.skeleton + "-paragraph > li");
            var i = 0;
            for (; i < width.length; i++) {
                var rowWidth = width[i];
                var Row = Rows[i];
                Row ? (0,dom_utils.setCss)(Row, 'width', rowWidth + "%") : null;
            }
        }
    };
    Skeleton.prototype._showAvatar = function (node, avatar, size, shape) {
        if (!avatar)
            return;
        var template = "\n        <div class=\"" + prefix.default.skeleton + "-header\">\n        <span class=\"" + prefix.default.skeleton + "-avatar " + prefix.default.skeleton + "-avatar-" + size + " " + prefix.default.skeleton + "-avatar-" + shape + "\"></span>\n        </div>\n        ";
        node.insertAdjacentHTML('afterbegin', template);
        node.classList.add(prefix.default.skeleton + "-with-avatar");
        (0,dom_utils.setCss)(node.querySelector("." + prefix.default.skeleton + "-title"), 'width', '50%');
    };
    Skeleton.prototype._attrs = function (node) {
        return {
            active: (0,dom_utils.getBooleanTypeAttr)(node, 'active'),
            avatar: (0,dom_utils.getBooleanTypeAttr)(node, 'avatar'),
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', 'true'),
            paragraph: (0,dom_utils.getStrTypeAttr)(node, 'paragraph', 'true'),
            avatarSize: (0,dom_utils.getStrTypeAttr)(node, 'avatar-size', 'large'),
            avatarShape: (0,dom_utils.getStrTypeAttr)(node, 'avatar-shape', 'circle'),
            titleWidth: (0,dom_utils.getNumTypeAttr)(node, 'title-width'),
            paragraphWidth: (0,dom_utils.getNumTypeAttr)(node, 'paragraph-width', 0) ||
                (0,dom_utils.getArrTypeAttr)(node, 'paragraph-width'),
            paragraphRows: (0,dom_utils.getNumTypeAttr)(node, 'paragraph-rows')
        };
    };
    return Skeleton;
}());
/* harmony default export */ var skeleton = (Skeleton);

;// CONCATENATED MODULE: ./src/components/skeleton/index.ts

/* harmony default export */ var components_skeleton = (skeleton);

;// CONCATENATED MODULE: ./src/components/spin/spin.ts




var spinZIndex = 2010;
var Spin = /** @class */ (function () {
    function Spin() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-spin', { all: true });
        this._create(this.COMPONENTS);
    }
    Spin.prototype.show = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.content, content = _c === void 0 ? '' : _c;
        scrollable_scrollable({ scroll: false, lock: false });
        var template = "\n        <div class=\"" + prefix.default.spin + "-fullscreen " + prefix.default.spin + "-fullscreen-wrapper\"\n         style=\"z-index: " + spinZIndex++ + "\">\n          <r-spin fix class=\"" + prefix.default.spin + "-fullscreen \n           " + (content ? prefix.default.spin + "-show-text" : '') + "\" size=\"large\">\n            " + this._createChildTemplate(content) + "\n          </r-spin>\n         </div>\n         ";
        var fragment = document.createRange().createContextualFragment(template);
        document.body.appendChild(fragment);
        CssTransition((0,dom_utils.$el)("." + prefix.default.spin + "-fullscreen"), {
            inOrOut: 'in',
            enterCls: 'rab-fade-in'
        });
    };
    Spin.prototype.hide = function () {
        scrollable_scrollable({ scroll: true, lock: true });
        var spinElem = (0,dom_utils.$el)("." + prefix.default.spin + "-fullscreen");
        if (spinElem)
            destroyElem(spinElem, { fadeOut: true });
    };
    Spin.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var customContent = (0,dom_utils.setHtml)(node);
            customContent ? node.classList.add(prefix.default.spin + "-show-text") : '';
            (0,dom_utils.setHtml)(node, _this._createChildTemplate(customContent));
        });
    };
    Spin.prototype._createChildTemplate = function (content) {
        var template = "\n          <div class=\"" + prefix.default.spin + "-main\">\n            <span class=\"" + prefix.default.spin + "-dot\"></span>\n            <div class=\"" + prefix.default.spin + "-text\">" + content + "</div>\n          </div>\n        ";
        return template;
    };
    return Spin;
}());
/* harmony default export */ var spin = (Spin);

;// CONCATENATED MODULE: ./src/components/spin/index.ts

/* harmony default export */ var components_spin = (spin);

;// CONCATENATED MODULE: ./src/components/steps/steps.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */




var Steps = /** @class */ (function () {
    function Steps() {
        this.VERSION = '1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-steps', { all: true });
        this._create(this.COMPONENTS);
    }
    Steps.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'steps');
        var _a = Steps.prototype, _setCurrentStep = _a._setCurrentStep, _setStatus = _a._setStatus, _setStatusIcon = _a._setStatusIcon;
        var _current = target.dataset['current'];
        var StepsTitle = target.querySelector("." + prefix.default.steps + "-title");
        var StepsContent = target.querySelector("." + prefix.default.steps + "-content");
        var StepsStep = target.querySelectorAll('r-step');
        var setTitleOrContent = function (elem, val) {
            if (val && !isStr(val))
                return;
            (0,dom_utils.setHtml)(elem, val);
        };
        return {
            get current() {
                return Number(target.dataset['current']);
            },
            set current(newVal) {
                if (!isNum(newVal))
                    return;
                _setCurrentStep(target, newVal, target.dataset['status']);
            },
            get title() {
                return (0,dom_utils.setHtml)(StepsTitle);
            },
            set title(newVal) {
                setTitleOrContent(StepsTitle, newVal);
            },
            get content() {
                return (0,dom_utils.setHtml)(StepsContent);
            },
            set content(newVal) {
                setTitleOrContent(StepsContent, newVal);
            },
            get status() {
                return target.dataset['status'];
            },
            set status(newVal) {
                if (newVal && !isStr(newVal))
                    return;
                var currentStep = target.querySelector("r-step[data-index=\"" + _current + "\"]");
                _setStatus(target, currentStep, newVal);
            },
            get itemStatus() {
                return [];
            },
            set itemStatus(newVal) {
                if (newVal && !isArr(newVal))
                    return;
                var changeStatus = function (elem, status) {
                    elem.setAttribute('status', status);
                    _setStatusIcon(status, elem);
                };
                if (newVal.length == 1) {
                    var step = StepsStep[0];
                    changeStatus(step, newVal[0]);
                    return;
                }
                StepsStep.forEach(function (step, idx) {
                    return newVal[idx] ? changeStatus(step, newVal[idx]) : '';
                });
            }
        };
    };
    Steps.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), current = _a.current, status = _a.status, direction = _a.direction;
            var StepsStepItem = node.querySelectorAll('r-step');
            _this._setDirection(node, direction);
            _this._setStepChildren(StepsStepItem);
            _this._setCurrentStep(node, current, status);
            (0,dom_utils.removeAttrs)(node, ['current', 'status']);
        });
    };
    Steps.prototype._setDirection = function (node, direction) {
        node.setAttribute('direction', "" + direction);
    };
    Steps.prototype._setStepChildren = function (stepItem) {
        var _this = this;
        stepItem.forEach(function (step, idx) {
            // @ts-ignore
            step.dataset['index'] = "" + idx;
            _this._setStatusFlag(step);
            var _a = _this._attrs(step), icon = _a.icon, title = _a.title, content = _a.content;
            var stepsText = idx + 1;
            var template = "\n             <div class=\"" + prefix.default.steps + "-tail\"><i></i></div>\n             <div class=\"" + prefix.default.steps + "-head\">\n                <div class=\"" + prefix.default.steps + "-head-inner\">\n                   <span id=\"stepsIcon\"></span>\n                   <span id=\"stepsText\">" + stepsText + "</span>\n                </div>\n             </div>\n             <div class=\"" + prefix.default.steps + "-main\">\n                <div class=\"" + prefix.default.steps + "-title\">" + title + "</div>\n                <div class=\"" + prefix.default.steps + "-content\">" + content + "</div>\n             </div>\n            ";
            (0,dom_utils.setHtml)(step, template);
            _this._setCustomIcon(step, icon);
            (0,dom_utils.removeAttrs)(step, ['title', 'content', 'icon']);
        });
    };
    Steps.prototype._setStatusFlag = function (step) {
        var status = step.getAttribute('status');
        // 如果用户在步骤项设置了status则为该项打上标记，避免被自动设置的默认状态覆盖
        if (status) {
            // @ts-ignore
            step.dataset['specifiesStatus'] = status;
        }
    };
    Steps.prototype._setCurrentStep = function (node, current, status) {
        var len = node.childElementCount - 1;
        // 防止溢出边界
        if (current > len) {
            warn("The currently active step item you set does not exist in the <r-steps>. --> \"" + current + "\"");
            console.error(node);
            current = len;
        }
        // @ts-ignore
        node.dataset['current'] = current;
        var _setStatus = Steps.prototype._setStatus;
        var currentStep = node.querySelector("r-step[data-index=\"" + current + "\"]");
        _setStatus(node, currentStep, status);
    };
    Steps.prototype._setStatus = function (node, currentStep, status) {
        // @ts-ignore
        node.dataset['status'] = status;
        var _a = Steps.prototype, _setStatusIcon = _a._setStatusIcon, _setPrevAndNextStatus = _a._setPrevAndNextStatus, _setNextError = _a._setNextError;
        // @ts-ignore
        var isAutoStatus = currentStep.dataset['autoStatus'];
        var selfStatus = currentStep.getAttribute('status');
        // 1.如果步骤项设置了status则优先使用该状态，不包括打上autoStatus的标记项。
        // 2.如果步骤项父容器指定了某项步骤项为活跃状态，并且指定了 status 则使用该状态。
        if (selfStatus && isAutoStatus !== '') {
            currentStep.setAttribute('status', selfStatus);
            _setStatusIcon(selfStatus, currentStep);
        }
        else {
            currentStep.setAttribute('status', status);
            _setStatusIcon(status, currentStep);
        }
        _setPrevAndNextStatus('prev', currentStep, _setStatusIcon);
        _setPrevAndNextStatus('next', currentStep, _setStatusIcon);
        _setNextError(node);
    };
    Steps.prototype._setPrevAndNextStatus = function (type, currentStep, setStatusIcon) {
        // @ts-ignore
        var func = type === 'prev' ? dom_utils.prevAll : dom_utils.nextAll;
        var defaultStatus = type === 'prev' ? 'finish' : 'wait';
        func(currentStep).forEach(function (step) {
            // @ts-ignore
            var hasSetStatus = step.dataset['specifiesStatus'];
            // 当前步骤项位置的其他节点如果没有提示设置status，则默认设置为 finish / wait，并打上标记
            // 如果其中有某个设置了则略过
            if (!hasSetStatus) {
                // @ts-ignore
                step.dataset['autoStatus'] = '';
                step.setAttribute('status', defaultStatus);
                setStatusIcon(defaultStatus, step);
            }
            else {
                setStatusIcon(hasSetStatus, step);
            }
        });
    };
    Steps.prototype._setStatusIcon = function (status, step) {
        // @ts-ignore
        var isUseCustomIcon = step.dataset['useIcon'] === 'true';
        // 如果使用了自定义图标则略过
        if (isUseCustomIcon)
            return;
        var StepsIcon = step.querySelector('#stepsIcon');
        var StepsText = StepsIcon.nextElementSibling;
        // 步骤项状态不为finish或error则显示步骤数字、隐藏图标容器，反之。
        if (status !== 'finish' && status !== 'error') {
            (0,dom_utils.setCss)(StepsIcon, 'display', 'none');
            (0,dom_utils.setCss)(StepsText, 'display', '');
            return;
        }
        (0,dom_utils.setCss)(StepsIcon, 'display', '');
        (0,dom_utils.setCss)(StepsText, 'display', 'none');
        var iconType = '';
        if (status === 'finish') {
            iconType = 'ios-checkmark';
        }
        if (status === 'error') {
            iconType = 'ios-close';
        }
        StepsIcon.className = prefix.default.steps + "-icon " + prefix.default.icon + " " + prefix.default.icon + "-" + iconType;
    };
    Steps.prototype._setCustomIcon = function (step, icon) {
        if (!icon)
            return;
        // @ts-ignore
        step.dataset['useIcon'] = 'true';
        step.classList.add(prefix.default.steps + "-custom");
        var StepsIcon = step.querySelector('#stepsIcon');
        StepsIcon.classList.add("" + prefix.default.icon);
        StepsIcon.classList.add(prefix.default.icon + "-" + icon);
        (0,dom_utils.setCss)(StepsIcon.nextElementSibling, 'display', 'none');
    };
    Steps.prototype._setNextError = function (node) {
        var StepsStep = node.querySelectorAll('r-step');
        StepsStep.forEach(function (step, idx) {
            if (step.getAttribute('status') === 'error' && idx !== 0) {
                var prevStep = StepsStep[idx - 1];
                if (prevStep.getAttribute('status') === 'error') {
                    prevStep.classList.add(prefix.default.steps + "-next-error");
                }
                else {
                    prevStep.classList.remove(prefix.default.steps + "-next-error");
                }
            }
        });
    };
    Steps.prototype._attrs = function (node) {
        return {
            current: (0,dom_utils.getNumTypeAttr)(node, 'current', 0),
            icon: (0,dom_utils.getStrTypeAttr)(node, 'icon', ''),
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            status: (0,dom_utils.getStrTypeAttr)(node, 'status', 'process'),
            content: (0,dom_utils.getStrTypeAttr)(node, 'content', ''),
            direction: (0,dom_utils.getStrTypeAttr)(node, 'direction', 'horizontal')
        };
    };
    return Steps;
}());
/* harmony default export */ var steps = (Steps);

;// CONCATENATED MODULE: ./src/components/steps/index.ts

/* harmony default export */ var components_steps = (steps);

;// CONCATENATED MODULE: ./src/components/switch/switch.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */



var Switch = /** @class */ (function () {
    function Switch() {
        this.VERSION = '1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-switch', { all: true });
        this._create(this.COMPONENTS);
    }
    Switch.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'switch');
        var Input = target.querySelector('input[type="hidden"]');
        var isChecked = Input.value === 'true';
        var isDisabled = target.classList.contains(prefix.default.switch + "-disabled");
        var isLoading = target.classList.contains(prefix.default.switch + "-loading");
        var changeState = function (flag, state, cls) {
            if (flag && !isBol(flag))
                return;
            if (flag && state)
                return;
            else
                target.classList.add(prefix.default.switch + "-" + cls);
            if (flag == false)
                target.classList.remove(prefix.default.switch + "-" + cls);
        };
        return {
            get checked() {
                return isChecked;
            },
            set checked(newVal) {
                changeState(newVal, isChecked, 'checked');
            },
            get disabled() {
                return isDisabled;
            },
            set disabled(newVal) {
                changeState(newVal, isDisabled, 'disabled');
            },
            get loading() {
                return isLoading;
            },
            set loading(newVal) {
                changeState(newVal, isLoading, 'loading');
            },
            events: function (_a) {
                var onChange = _a.onChange;
                var checked;
                var handler = function () {
                    checked = JSON.parse(Input.value);
                    onChange && isFn(onChange, checked);
                };
                (0,dom_utils.bind)(target, 'click', handler);
            }
        };
    };
    Switch.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            node.setAttribute('tabindex', '0');
            var _a = _this._attrs(node), checked = _a.checked, loading = _a.loading, disabled = _a.disabled, size = _a.size, open = _a.open, close = _a.close, trueColor = _a.trueColor, falseColor = _a.falseColor;
            _this._setSize(node, size);
            _this._setMainTemplate(node);
            _this._setDisabled(node, disabled);
            _this._setLoading(node, loading);
            _this._setStatusBgc(node, checked, trueColor, falseColor);
            var SwitchInner = node.querySelector("." + prefix.default.switch + "-inner");
            var HiddenInput = node.querySelector('input[type="hidden"]');
            _this._setChecked(node, HiddenInput, checked);
            _this._setStatusText(SwitchInner, checked, open, close);
            _this._handleChange(node, HiddenInput, SwitchInner, {
                open: open,
                close: close,
                trueColor: trueColor,
                falseColor: falseColor
            });
            (0,dom_utils.removeAttrs)(node, [
                'checked',
                'loading',
                'disabled',
                'size',
                'open',
                'close',
                'true-color',
                'false-color'
            ]);
        });
    };
    Switch.prototype._setDisabled = function (node, disabled) {
        if (!disabled)
            return;
        node.classList.add(prefix.default.switch + "-disabled");
    };
    Switch.prototype._setLoading = function (node, loading) {
        if (!loading)
            return;
        node.classList.add(prefix.default.switch + "-loading");
    };
    Switch.prototype._setSize = function (node, size) {
        if (!size || size === 'default')
            return;
        node.classList.add(prefix.default.switch + "-" + size);
    };
    Switch.prototype._setMainTemplate = function (node) {
        var template = "\n        <input type=\"hidden\" /> \n        <span class=\"" + prefix.default.switch + "-inner\"></span>\n        ";
        (0,dom_utils.setHtml)(node, template);
    };
    Switch.prototype._handleChange = function (node, input, textContainer, options) {
        var _this = this;
        var handler = function () {
            var isLoading = node.classList.contains(prefix.default.switch + "-loading");
            var isDisabled = node.classList.contains(prefix.default.switch + "-disabled");
            if (isDisabled || isLoading)
                return false;
            var isChecked = node.classList.contains(prefix.default.switch + "-checked");
            var flag = false;
            if (isChecked) {
                node.classList.remove(prefix.default.switch + "-checked");
            }
            else {
                flag = !flag;
                node.classList.add(prefix.default.switch + "-checked");
            }
            _this._setChecked(node, input, flag);
            _this._setStatusBgc(node, flag, options.trueColor, options.falseColor);
            _this._setStatusText(textContainer, flag, options.open, options.close);
        };
        (0,dom_utils.bind)(node, 'click', handler);
    };
    Switch.prototype._setChecked = function (node, input, checked) {
        if (checked) {
            node.classList.add(prefix.default.switch + "-checked");
        }
        input.value = "" + checked;
    };
    Switch.prototype._setStatusText = function (elem, checked, open, close) {
        var changeText = function (text, flag) {
            if (text) {
                if (flag) {
                    (0,dom_utils.setHtml)(elem, text);
                }
                else {
                    (0,dom_utils.setHtml)(elem, text);
                }
            }
        };
        changeText(open, checked);
        changeText(close, !checked);
        checked ? (0,dom_utils.setHtml)(elem, open) : (0,dom_utils.setHtml)(elem, close);
    };
    Switch.prototype._setStatusBgc = function (node, checked, trueColor, falseColor) {
        if (trueColor) {
            if (checked) {
                (0,dom_utils.setCss)(node, 'backgroundColor', trueColor);
                (0,dom_utils.setCss)(node, 'borderColor', trueColor);
            }
        }
        if (falseColor) {
            if (!checked) {
                (0,dom_utils.setCss)(node, 'backgroundColor', falseColor);
                (0,dom_utils.setCss)(node, 'borderColor', falseColor);
            }
        }
    };
    Switch.prototype._attrs = function (node) {
        return {
            checked: (0,dom_utils.getBooleanTypeAttr)(node, 'checked'),
            loading: (0,dom_utils.getBooleanTypeAttr)(node, 'loading'),
            disabled: (0,dom_utils.getBooleanTypeAttr)(node, 'disabled'),
            size: (0,dom_utils.getStrTypeAttr)(node, 'size', 'default'),
            open: (0,dom_utils.getStrTypeAttr)(node, 'open', ''),
            close: (0,dom_utils.getStrTypeAttr)(node, 'close', ''),
            trueColor: (0,dom_utils.getStrTypeAttr)(node, 'true-color', ''),
            falseColor: (0,dom_utils.getStrTypeAttr)(node, 'false-color', '')
        };
    };
    return Switch;
}());
/* harmony default export */ var switch_switch = (Switch);

;// CONCATENATED MODULE: ./src/components/switch/index.ts

/* harmony default export */ var components_switch = (switch_switch);

;// CONCATENATED MODULE: ./src/components/tabs/tabs.ts




var Tabs = /** @class */ (function () {
    function Tabs() {
        this.VERSION = '1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-tabs', { all: true });
        this._create(this.COMPONENTS);
    }
    Tabs.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'tabs');
        var TabTabs = target.querySelectorAll("." + prefix.default.tabs + "-tab");
        var TabPanes = target.querySelectorAll('r-tab-pane');
        var _a = Tabs.prototype, _changeTab = _a._changeTab, _changePane = _a._changePane;
        return {
            get activeKey() {
                return '0';
            },
            set activeKey(newVal) {
                if (!isStr(newVal))
                    return;
                TabPanes.forEach(function (pane, i) {
                    var p = pane;
                    if (newVal !== p.dataset.paneKey)
                        return;
                    _changeTab(TabTabs[i], true);
                    _changePane([false, p.parentElement, i, 'true', p]);
                });
            },
            events: function (_a) {
                var onClick = _a.onClick, onTabRemove = _a.onTabRemove;
                TabTabs.forEach(function (tab, i) {
                    var tabClose = tab.querySelector("." + prefix.default.tabs + "-close");
                    var clickEv = function () {
                        var TabPane = TabPanes[i];
                        var key = TabPane.dataset.paneKey;
                        onClick && isFn(onClick, key);
                        if (!tabClose)
                            return;
                        onTabRemove && isFn(onTabRemove, key);
                    };
                    (0,dom_utils.bind)(tab, 'click', clickEv);
                    if (!tabClose)
                        return;
                    (0,dom_utils.bind)(tabClose, 'click', clickEv);
                });
            }
        };
    };
    Tabs.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var tabPanes = node.querySelectorAll('r-tab-pane');
            var _a = _this._attrs(node), defaultActivekey = _a.defaultActivekey, size = _a.size, type = _a.type, closable = _a.closable, animated = _a.animated;
            _this._setType(node, type);
            _this._setSize(node, type, size);
            _this._setNoAnimation(node, animated);
            _this._setBodyTemplate(node);
            _this._setTabPane([node, tabPanes, defaultActivekey, type, animated, closable]);
            (0,dom_utils.removeAttrs)(node, ['defaultActivekey', 'type', 'size', 'closable', 'animated']);
        });
    };
    Tabs.prototype._setType = function (node, type) {
        if (type !== 'card')
            return;
        node.classList.add(prefix.default.tabs + "-" + type);
    };
    Tabs.prototype._setSize = function (node, type, size) {
        if (type !== 'line' || size !== 'small')
            return;
        node.classList.add(prefix.default.tabs + "-mini");
    };
    Tabs.prototype._setNoAnimation = function (node, animated) {
        if (animated === 'true')
            return;
        node.classList.add(prefix.default.tabs + "-no-animation");
    };
    Tabs.prototype._setBodyTemplate = function (node) {
        var template = "\n          <div class=\"" + prefix.default.tabs + "-bar\">\n              <div tabindex=\"0\" class=\"" + prefix.default.tabs + "-nav-container\">\n                  <div class=\"" + prefix.default.tabs + "-nav-wrap\">\n                     <div class=\"" + prefix.default.tabs + "-nav\"></div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"" + prefix.default.tabs + "-content " + prefix.default.tabs + "-content-animated\"></div>";
        (0,dom_utils.setHtml)(node, template);
    };
    Tabs.prototype._setTabPane = function (args) {
        var _this = this;
        var _a = __read(args, 6), node = _a[0], panes = _a[1], activekey = _a[2], type = _a[3], animated = _a[4], closable = _a[5];
        var TabNav = node.querySelector("." + prefix.default.tabs + "-nav");
        var TabPaneContainer = node.querySelector("." + prefix.default.tabs + "-content");
        var Fragment = document.createDocumentFragment();
        panes.forEach(function (pane, idx) {
            var _a = _this._paneAttrs(pane), key = _a.key, tab = _a.tab, icon = _a.icon, separateClose = _a.closable, disabled = _a.disabled;
            var TabsTab = _this._setTab(TabNav, tab);
            _this._setTabIcon(TabsTab, icon);
            _this._setTabClosable([TabsTab, type, closable, separateClose]);
            _this._setTabDisabled(TabsTab, disabled);
            (0,dom_utils.setCss)(pane, 'display', "" + (animated === 'true' ? 'block' : 'none'));
            _this._setPaneKey(pane, key, idx);
            _this._setActive([closable, TabPaneContainer, TabsTab, pane, activekey, idx, animated]);
            _this._handleToggle([closable, TabsTab, pane, idx, disabled, animated]);
            _this._handleRemove(TabsTab, pane);
            Fragment.appendChild(pane);
            (0,dom_utils.removeAttrs)(pane, ['key', 'tab', 'icon', 'disabled', 'closable']);
        });
        TabPaneContainer === null || TabPaneContainer === void 0 ? void 0 : TabPaneContainer.appendChild(Fragment);
    };
    Tabs.prototype._setTab = function (tabsNav, content) {
        var TabsTab = (0,dom_utils.createElem)('div');
        TabsTab.className = prefix.default.tabs + "-tab";
        (0,dom_utils.setHtml)(TabsTab, content);
        tabsNav.appendChild(TabsTab);
        return TabsTab;
    };
    Tabs.prototype._setTabIcon = function (tabElm, icon) {
        if (!icon)
            return;
        var Icon = (0,dom_utils.createElem)('icon');
        Icon.className = prefix.default.icon + " " + prefix.default.icon + "-" + icon;
        tabElm.prepend(Icon);
    };
    Tabs.prototype._setTabClosable = function (args) {
        var _a = __read(args, 4), tabElm = _a[0], type = _a[1], closable = _a[2], separateClose = _a[3];
        if (!closable || type !== 'card')
            return;
        var CloseIcon = (0,dom_utils.createElem)('icon');
        CloseIcon.className = prefix.default.icon + " " + prefix.default.icon + "-ios-close " + prefix.default.tabs + "-close";
        // 单独设置当前选项是否可以关闭页签
        if (separateClose === 'false')
            return;
        tabElm.appendChild(CloseIcon);
    };
    Tabs.prototype._setTabDisabled = function (tabsTab, disabled) {
        if (!disabled)
            return;
        tabsTab.classList.add(prefix.default.tabs + "-tab-disabled");
    };
    Tabs.prototype._setPaneKey = function (pane, key, idx) {
        // 当前面板的 key 如果不填则默认为其索引值
        // @ts-ignore
        pane.dataset.paneKey = !key ? idx : key;
    };
    Tabs.prototype._setActive = function (args) {
        var _a = __read(args, 7), closable = _a[0], paneContainer = _a[1], tabsTab = _a[2], pane = _a[3], activekey = _a[4], idx = _a[5], animated = _a[6];
        // @ts-ignore
        var isEqual = activekey === pane.dataset.paneKey;
        if (isEqual) {
            this._changeTab(tabsTab);
            this._changePane([closable, paneContainer, idx]);
        }
        (0,dom_utils.setCss)(pane, 'visibility', "" + (isEqual ? 'visible' : 'hidden'));
        if (animated === 'false') {
            (0,dom_utils.setCss)(pane, 'display', "" + (isEqual ? 'block' : 'none'));
        }
    };
    Tabs.prototype._handleToggle = function (args) {
        var _this = this;
        var _a = __read(args, 6), closable = _a[0], tabsTab = _a[1], pane = _a[2], idx = _a[3], disabled = _a[4], animated = _a[5];
        (0,dom_utils.bind)(tabsTab, 'click', function () {
            if (disabled)
                return false;
            _this._changeTab(tabsTab);
            _this._changePane([closable, pane.parentElement, idx, animated, pane]);
        });
    };
    Tabs.prototype._handleRemove = function (tabsTab, pane) {
        var _this = this;
        var TabClose = tabsTab.querySelector("." + prefix.default.tabs + "-close");
        if (!TabClose)
            return;
        /**
         * @param elm1 tabs的选项
         * @param elm2 tabs的面板
         */
        var changeActive = function (elm1, elm2) {
            if (tabsTab.classList.contains(prefix.default.tabs + "-tab-active")) {
                _this._changeTab(elm1, false);
            }
            (0,dom_utils.setCss)(elm2, 'display', 'block');
            (0,dom_utils.setCss)(elm2, 'visibility', 'visible');
        };
        var removeEv = function () {
            var prevTab = tabsTab.previousElementSibling;
            var nextTab = tabsTab.nextElementSibling;
            var prevPane = pane.previousElementSibling;
            var nextPane = pane.nextElementSibling;
            if (nextTab && nextPane) {
                changeActive(nextTab, nextPane);
            }
            else if (prevTab && prevPane) {
                changeActive(prevTab, prevPane);
            }
            tabsTab.remove();
            pane.remove();
        };
        (0,dom_utils.bind)(TabClose, 'click', function (e) {
            e.stopPropagation();
            removeEv();
        });
    };
    Tabs.prototype._changeTab = function (tabsTab, siblingsChange) {
        if (siblingsChange === void 0) { siblingsChange = true; }
        tabsTab.classList.add(prefix.default.tabs + "-tab-active");
        tabsTab.classList.add(prefix.default.tabs + "-tab-focused");
        if (!siblingsChange)
            return;
        (0,dom_utils.siblings)(tabsTab).forEach(function (o) {
            o.classList.remove(prefix.default.tabs + "-tab-active");
            o.classList.remove(prefix.default.tabs + "-tab-focused");
        });
    };
    Tabs.prototype._changePane = function (args) {
        var _a = __read(args, 5), closable = _a[0], paneContainer = _a[1], idx = _a[2], animated = _a[3], pane = _a[4];
        // 如果选项卡启用了可关闭功能，则不使用动画切换，这为了减少 tab 删除操作的工作量
        if (!closable) {
            var translateX = idx * 100;
            (0,dom_utils.setCss)(paneContainer, 'transform', "translateX(-" + translateX + "%)");
        }
        // 是否要一并更改面板项
        if (!pane)
            return;
        (0,dom_utils.setCss)(pane, 'display', 'block');
        (0,dom_utils.setCss)(pane, 'visibility', 'visible');
        (0,dom_utils.siblings)(pane).forEach(function (o) {
            if (animated === 'false' || closable)
                (0,dom_utils.setCss)(o, 'display', 'none');
            (0,dom_utils.setCss)(o, 'visibility', 'hidden');
        });
    };
    Tabs.prototype._attrs = function (node) {
        return {
            defaultActivekey: (0,dom_utils.getStrTypeAttr)(node, 'defaultActivekey', '0'),
            type: (0,dom_utils.getStrTypeAttr)(node, 'type', 'line'),
            size: (0,dom_utils.getStrTypeAttr)(node, 'size', 'default'),
            animated: (0,dom_utils.getStrTypeAttr)(node, 'animated', 'true'),
            closable: (0,dom_utils.getBooleanTypeAttr)(node, 'closable')
        };
    };
    Tabs.prototype._paneAttrs = function (pane) {
        return {
            tab: (0,dom_utils.getStrTypeAttr)(pane, 'tab', ''),
            key: (0,dom_utils.getStrTypeAttr)(pane, 'key', ''),
            icon: (0,dom_utils.getStrTypeAttr)(pane, 'icon', ''),
            closable: (0,dom_utils.getStrTypeAttr)(pane, 'closable', 'true'),
            disabled: (0,dom_utils.getBooleanTypeAttr)(pane, 'disabled')
        };
    };
    return Tabs;
}());
/* harmony default export */ var tabs = (Tabs);

;// CONCATENATED MODULE: ./src/components/tabs/index.ts

/* harmony default export */ var components_tabs = (tabs);

;// CONCATENATED MODULE: ./src/components/tag/tag.ts




var Tag = /** @class */ (function () {
    function Tag() {
        this.VERSION = '1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-tag', { all: true });
        this._create(this.COMPONENTS);
    }
    Tag.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'tag');
        var CloseIcon = target.querySelector("." + prefix.default.icon + "-ios-close");
        var $this = target;
        var checked;
        return {
            events: function (_a) {
                var onClose = _a.onClose, onChange = _a.onChange;
                (0,dom_utils.bind)(target, 'click', function () {
                    checked = target.dataset.checked === 'true' ? true : false;
                    onChange && isFn(onChange, checked);
                });
                if (!CloseIcon)
                    return;
                (0,dom_utils.bind)(CloseIcon, 'click', function (e) {
                    e.stopPropagation();
                    onClose && isFn(onClose, $this);
                });
            }
        };
    };
    Tag.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), type = _a.type, size = _a.size, color = _a.color, checked = _a.checked, checkable = _a.checkable, closable = _a.closable;
            _this._setMainTemplate(node);
            _this._setType(node, type);
            _this._setIsChecked(node, checked);
            _this._setSize(node, size);
            _this._setColor(node, type, checkable, color);
            _this._setClosable(node, closable);
            _this._setCheckable(node, checkable);
            _this._handleClose(node, closable);
            (0,dom_utils.removeAttrs)(node, ['type', 'size', 'color', 'checked', 'checkable', 'closable']);
        });
    };
    Tag.prototype._setMainTemplate = function (node) {
        var content = (0,dom_utils.setHtml)(node);
        (0,dom_utils.setHtml)(node, "<span class=\"" + prefix.default.tag + "-text\">" + content + "</span>");
    };
    Tag.prototype._setType = function (node, type) {
        if (type)
            node.classList.add(prefix.default.tag + "-" + type);
        if (type === 'dot') {
            node.insertAdjacentHTML('afterbegin', "<span class=\"" + prefix.default.tag + "-dot-inner\"></span>");
        }
    };
    Tag.prototype._setIsChecked = function (node, checkable) {
        if (checkable !== 'true')
            return;
        node.classList.add(prefix.default.tag + "-checked");
    };
    Tag.prototype._setColor = function (node, type, checkable, color) {
        var _defaultColors = this._defaultColors;
        var isUseDefaultColor = _defaultColors().includes(color);
        var TagText = node.querySelector("." + prefix.default.tag + "-text");
        if (!color)
            return;
        if (isUseDefaultColor) {
            node.classList.add(prefix.default.tag + "-" + color);
        }
        else {
            (0,dom_utils.setCss)(node, 'background', "" + color);
            (0,dom_utils.setCss)(node, 'borderColor', "" + color);
        }
        if (color !== 'default' && type !== 'dot' && type !== 'border' && !checkable) {
            TagText === null || TagText === void 0 ? void 0 : TagText.classList.add(prefix.default.tag + "-color-white");
        }
        if (isUseDefaultColor && type === 'border') {
            TagText === null || TagText === void 0 ? void 0 : TagText.classList.add(prefix.default.tag + "-color-" + color);
        }
        else {
            (0,dom_utils.setCss)(TagText, 'color', "" + color);
        }
    };
    Tag.prototype._setSize = function (node, size) {
        if (!size)
            return;
        node.classList.add(prefix.default.tag + "-size-" + size);
    };
    Tag.prototype._setClosable = function (node, closable) {
        if (!closable)
            return;
        node.classList.add(prefix.default.tag + "-closable");
        node.insertAdjacentHTML('beforeend', "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>");
    };
    Tag.prototype._setCheckable = function (node, checkable) {
        if (!checkable)
            return;
        node.classList.remove(prefix.default.tag + "-checked");
        var TagText = node.querySelector("." + prefix.default.tag + "-text");
        (0,dom_utils.bind)(node, 'click', function () {
            var isChecked = node.classList.contains(prefix.default.tag + "-checked");
            // @ts-ignore
            node.dataset.checked = !isChecked;
            node.classList[isChecked ? 'remove' : 'add'](prefix.default.tag + "-checked");
            TagText === null || TagText === void 0 ? void 0 : TagText.classList[isChecked ? 'remove' : 'add'](prefix.default.tag + "-color-white");
        });
    };
    Tag.prototype._handleClose = function (node, closable) {
        if (!closable)
            return;
        var CloseIcon = node.querySelector("." + prefix.default.icon + "-ios-close");
        (0,dom_utils.bind)(CloseIcon, 'click', function () {
            destroyElem(node, { fadeOut: true });
        });
    };
    Tag.prototype._defaultColors = function () {
        var COLORS = [
            'default',
            'primary',
            'success',
            'warning',
            'error',
            'blue',
            'green',
            'red',
            'yellow',
            'pink',
            'magenta',
            'volcano',
            'orange',
            'gold',
            'lime',
            'cyan',
            'geekblue',
            'purple'
        ];
        return COLORS;
    };
    Tag.prototype._attrs = function (node) {
        return {
            type: (0,dom_utils.getStrTypeAttr)(node, 'type', ''),
            size: (0,dom_utils.getStrTypeAttr)(node, 'size', ''),
            color: (0,dom_utils.getStrTypeAttr)(node, 'color', 'default'),
            checked: (0,dom_utils.getStrTypeAttr)(node, 'checked', 'true'),
            closable: (0,dom_utils.getBooleanTypeAttr)(node, 'closable'),
            checkable: (0,dom_utils.getBooleanTypeAttr)(node, 'checkable')
        };
    };
    return Tag;
}());
/* harmony default export */ var tag = (Tag);

;// CONCATENATED MODULE: ./src/components/tag/index.ts

/* harmony default export */ var components_tag = (tag);

// EXTERNAL MODULE: ./src/components/time/time.ts
var time = __webpack_require__("./src/components/time/time.ts");
;// CONCATENATED MODULE: ./src/components/time/index.ts

/* harmony default export */ var components_time = (time.default);

;// CONCATENATED MODULE: ./src/components/timeline/timeline.ts


var Timeline = /** @class */ (function () {
    function Timeline() {
        this.VERSION = '1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-timeline > r-timeline-item', { all: true });
        this._create(this.COMPONENTS);
    }
    Timeline.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var TimelineItem = node;
            var TimelineTail = (0,dom_utils.createElem)('div');
            var TimelineHead = (0,dom_utils.createElem)('div');
            var TimelineContent = (0,dom_utils.createElem)('div');
            _this._setCls(TimelineTail, TimelineHead, TimelineContent);
            _this._setColor(TimelineItem, TimelineHead);
            _this._setDot(TimelineItem, TimelineHead);
            _this._setContent(TimelineItem, TimelineContent);
            TimelineItem.append(TimelineTail, TimelineHead, TimelineContent);
            (0,dom_utils.removeAttrs)(TimelineItem, ['dot']);
        });
    };
    Timeline.prototype._setCls = function (node1, node2, node3) {
        node1.className = prefix.default.timeline + "-item-tail";
        node2.className = prefix.default.timeline + "-item-head";
        node3.className = prefix.default.timeline + "-item-content";
    };
    Timeline.prototype._setContent = function (parent, node1) {
        (0,dom_utils.setHtml)(node1, parent.innerHTML);
        // 清空原先的内容
        (0,dom_utils.setHtml)(parent, '');
    };
    Timeline.prototype._setColor = function (parent, node) {
        var colors = this._getStatusColor(parent);
        // 设置预设颜色或者自定义颜色
        if (colors === 'blue' || colors === 'red' || colors === 'gray' || colors === 'green') {
            node.classList.add(prefix.default.timeline + "-item-head-" + colors);
        }
        else {
            (0,dom_utils.setCss)(node, 'color', colors);
            (0,dom_utils.setCss)(node, 'borderColor', colors);
        }
    };
    // 自定义时间轴点的内容
    Timeline.prototype._setDot = function (parent, node) {
        if (!this._getDotContent(parent))
            return;
        node.classList.add(prefix.default.timeline + "-item-head-custom");
        var content = this._getDotContent(parent);
        (0,dom_utils.setHtml)(node, content);
    };
    Timeline.prototype._getStatusColor = function (node) {
        return node.getAttribute('color') || 'blue';
    };
    Timeline.prototype._getDotContent = function (parent) {
        return parent.getAttribute('dot') || '';
    };
    return Timeline;
}());
/* harmony default export */ var timeline = (Timeline);

;// CONCATENATED MODULE: ./src/components/timeline/index.ts

/* harmony default export */ var components_timeline = (timeline);

;// CONCATENATED MODULE: ./src/components/tooltip/tooltip.ts




var tooltip_SHOWTIMER, tooltip_EVENTTIMER;
var Tooltip = /** @class */ (function () {
    function Tooltip() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,dom_utils.$el)('r-tooltip', { all: true });
        this._create(this.COMPONENTS);
        scrollUpdate();
    }
    Tooltip.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'tooltip');
        var _a = Tooltip.prototype, _getDelay = _a._getDelay, _getIsAlways = _a._getIsAlways, _getIsDisabled = _a._getIsDisabled;
        var popper = target.querySelector("." + prefix.default.tooltip + "-popper");
        var popperText = target.querySelector("." + prefix.default.tooltip + "-inner");
        return {
            get content() {
                return (0,dom_utils.setText)(popperText);
            },
            set content(newVal) {
                if (isStr(newVal) || isNum(newVal))
                    (0,dom_utils.setHtml)(popperText, "" + newVal);
            },
            events: function (_a) {
                var onShow = _a.onShow, onHide = _a.onHide;
                if (_getIsAlways(target) || _getIsDisabled(target))
                    return;
                var delay = _getDelay(target);
                handleHoverShowAndHideEvents({
                    reference: target,
                    popper: popper,
                    datasetVal: 'tooltipShow',
                    showCb: onShow,
                    hideCb: onHide,
                    delay: delay,
                    timer: tooltip_EVENTTIMER
                });
            }
        };
    };
    Tooltip.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            _this._createTooltipNodes(node);
            (0,dom_utils.removeAttrs)(node, ['content', 'theme', 'delay', 'max-width', 'disabled', 'always']);
        });
    };
    Tooltip.prototype._createTooltipNodes = function (reference) {
        var TooltipRef = (0,dom_utils.createElem)('div');
        var TooltipPopper = (0,dom_utils.createElem)('div');
        var TooltipContent = (0,dom_utils.createElem)('div');
        var TooltipArrow = (0,dom_utils.createElem)('div');
        var TooltipInner = (0,dom_utils.createElem)('div');
        this._setCls(reference, [
            TooltipRef,
            TooltipPopper,
            TooltipContent,
            TooltipArrow,
            TooltipInner
        ]);
        this._setTip(reference, TooltipInner);
        this._setMaxWidth(reference, TooltipInner);
        var disabledShow = this._getIsDisabled(reference);
        var alwaysShow = this._setIsAlwaysShow(reference, TooltipPopper);
        // 如果 tooltip 没有设置为总是可见或者禁用显示，则正常鼠标移入移出事件
        if (!alwaysShow && !disabledShow) {
            this._triggerDisplay('enter', reference, TooltipPopper);
            this._triggerDisplay('leave', reference, TooltipPopper);
        }
        var firstElementChild = reference.firstElementChild;
        // 只选取第一个子元素作为宿主元素
        if (firstElementChild)
            TooltipRef.appendChild(firstElementChild);
        TooltipPopper.appendChild(TooltipContent);
        TooltipPopper.append(TooltipArrow, TooltipInner);
        reference.append(TooltipRef, TooltipPopper);
    };
    Tooltip.prototype._setCls = function (reference, nodes) {
        // 获取主题颜色
        var theme = this._getTheme(reference);
        var nodesCls = [
            prefix.default.tooltip + "-rel",
            prefix.default.tooltip + "-popper " + prefix.default.tooltip + "-" + theme,
            prefix.default.tooltip + "-content",
            prefix.default.tooltip + "-arrow",
            prefix.default.tooltip + "-inner"
        ];
        // 批量添加样式类名
        var i = 0;
        var length = nodes.length;
        for (; i < length; i++) {
            var node = nodes[i];
            node.className = "" + nodesCls[i];
        }
    };
    Tooltip.prototype._triggerDisplay = function (trigger, reference, popper) {
        var _this = this;
        var ev = function () {
            if (trigger === 'enter')
                _this._initSetPopper(reference, popper);
            CssTransition(popper, {
                inOrOut: trigger === 'enter' ? 'in' : 'out',
                rmCls: true,
                enterCls: 'zoom-big-fast-enter',
                leaveCls: 'zoom-big-fast-leave',
                timeout: 85
            });
        };
        var delay = this._getDelay(reference);
        if (trigger === 'enter') {
            reference.addEventListener('mouseenter', function () {
                tooltip_SHOWTIMER = setTimeout(function () {
                    ev();
                }, delay);
            });
            toggleUpdate(popper, 'hover', reference, delay);
        }
        else {
            reference.addEventListener('mouseleave', function () {
                clearTimeout(tooltip_SHOWTIMER);
                ev();
            });
        }
    };
    Tooltip.prototype._setTip = function (reference, popper) {
        return (popper.textContent = this._getTip(reference));
    };
    Tooltip.prototype._setMaxWidth = function (reference, popper) {
        var maxWidth = this._getMaxWidth(reference);
        if (maxWidth <= 0)
            return;
        (0,dom_utils.setCss)(popper, 'maxWidth', maxWidth + "px");
        popper.classList.add(prefix.default.tooltip + "-inner-with-width");
    };
    Tooltip.prototype._initSetPopper = function (reference, popper) {
        var offset = this._getOffset(reference);
        var placement = this._getPlacement(reference);
        popper.setAttribute('x-placement', placement);
        return _newCreatePopper(reference, popper, placement, offset);
    };
    Tooltip.prototype._setIsAlwaysShow = function (reference, popper) {
        var isAlways = this._getIsAlways(reference);
        if (isAlways) {
            (0,dom_utils.setCss)(popper, 'display', '');
            this._initSetPopper(reference, popper);
            return true;
        }
        (0,dom_utils.setCss)(popper, 'display', 'none');
    };
    Tooltip.prototype._getTip = function (node) {
        return node.getAttribute('content') || '';
    };
    Tooltip.prototype._getPlacement = function (node) {
        return node.getAttribute('placement') || 'bottom';
    };
    Tooltip.prototype._getDelay = function (node) {
        // 默认 100毫秒的延迟，防止鼠标快速经过时也会显示tooltip
        return Number(node.getAttribute('delay')) || 100;
    };
    Tooltip.prototype._getIsAlways = function (node) {
        return node.getAttribute('always') === 'true';
    };
    Tooltip.prototype._getIsDisabled = function (node) {
        return node.getAttribute('disabled') === 'true';
    };
    Tooltip.prototype._getTheme = function (node) {
        return node.getAttribute('theme') || 'dark';
    };
    Tooltip.prototype._getMaxWidth = function (node) {
        return Number(node.getAttribute('max-width')) || 0;
    };
    Tooltip.prototype._getOffset = function (node) {
        return Number(node.getAttribute('offset')) || 0;
    };
    return Tooltip;
}());
/* harmony default export */ var tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/components/tooltip/index.ts

/* harmony default export */ var components_tooltip = (tooltip);

;// CONCATENATED MODULE: ./src/rabbit-simple-ui.ts




































;// CONCATENATED MODULE: ./src/styles/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/build-umd.ts
/**
 * 用于打包构建 umd 模块，
 * 导出含有 Rabbit 的全局变量，使得相关 api 能够被调用，
 * 主要用于浏览器环境下通过 script 标签引入的方式使用。
 */


// @ts-ignore
/* harmony default export */ var build_umd = (window.Rabbit = rabbit_simple_ui_namespaceObject);


/***/ }),

/***/ "./src/components/prefix.ts":
/*!**********************************!*\
  !*** ./src/components/prefix.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefixCls = 'rab-';
/* harmony default export */ __webpack_exports__["default"] = ({
    alert: prefixCls + "alert",
    avatar: prefixCls + "avatar",
    backtop: prefixCls + "back-top",
    badge: prefixCls + "badge",
    breadcrumb: prefixCls + "breadcrumb",
    button: prefixCls + "btn",
    card: prefixCls + "card",
    carousel: prefixCls + "carousel",
    checkbox: prefixCls + "checkbox",
    collapse: prefixCls + "collapse",
    divider: prefixCls + "divider",
    drawer: prefixCls + "drawer",
    dropdown: prefixCls + "dropdown",
    empty: prefixCls + "empty",
    jumbotron: prefixCls + "jumbotron",
    inputNumber: prefixCls + "input-number",
    icon: prefixCls + "icon",
    loadingBar: prefixCls + "loading-bar",
    message: prefixCls + "message",
    messageChild: prefixCls + "message-notice",
    modal: prefixCls + "modal",
    notice: prefixCls + "notice",
    pageHeader: prefixCls + "page-header",
    poptip: prefixCls + "poptip",
    noticeChild: prefixCls + "notice-notice",
    progress: prefixCls + "progress",
    radio: prefixCls + "radio",
    rate: prefixCls + "rate",
    result: prefixCls + "result",
    skeleton: prefixCls + "skeleton",
    switch: prefixCls + "switch",
    tabs: prefixCls + "tabs",
    tag: prefixCls + "tag",
    spin: prefixCls + "spin",
    steps: prefixCls + "steps",
    time: prefixCls + "time",
    timeline: prefixCls + "timeline",
    tooltip: prefixCls + "tooltip"
});


/***/ }),

/***/ "./src/components/time/time.ts":
/*!*************************************!*\
  !*** ./src/components/time/time.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prefix */ "./src/components/prefix.ts");
/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dom-utils */ "./src/dom-utils/index.ts");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "./node_modules/dayjs/locale/zh-cn.js");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_4__);





var Time = /** @class */ (function () {
    function Time() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.$el)('r-time', { all: true });
        // 配置默认语言 (全局)
        dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale('zh-cn');
        // 改变语言配置 (全局)，需自行引入 dayjs 语言包
        // 注意！通过 script 标签引入 rabbitjs 的情况下，通过这个函数设置语言是无效的
        this.locale = function (str) { return dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale(str); };
        this._create(this.COMPONENTS);
    }
    Time.prototype._create = function (COMPONENTS) {
        var _this = this;
        COMPONENTS.forEach(function (node) {
            var _a = _this._attrs(node), type = _a.type, time = _a.time, interval = _a.interval, hash = _a.hash;
            _this._setTime(node, type, time, interval);
            _this._handleClick(node, hash);
            (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.removeAttrs)(node, ['time', 'type', 'hash', 'interval']);
        });
    };
    Time.prototype._setTime = function (node, type, time, interval) {
        var timeStamp = eval(time);
        var seconds = 0;
        var timer = function () {
            if (type === 'relative') {
                dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default()));
                var _relativeTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeStamp).fromNow();
                // 如果自动更新的间隔小于60则是要通过秒更新时间而不是分钟
                // 当秒数走到60秒后就转换为 “x分钟前” 显示
                if (interval < 60) {
                    var Chinese = ['zh', 'zh-cn', 'zh-hk', 'zh-tw'];
                    // 语言环境为中文才进行并显示秒级别更新
                    if (Chinese.includes(dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale())) {
                        seconds++;
                        (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.setText)(node, seconds + "\u79D2\u524D");
                    }
                }
                else {
                    (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.setText)(node, _relativeTime);
                }
                // 这段为设置中文状态下的情景
                if (_relativeTime === '几秒前') {
                    _relativeTime = '刚刚';
                }
                else {
                    (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.setText)(node, _relativeTime);
                }
            }
            else if (type === 'date') {
                var date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeStamp).format('YYYY-MM-DD');
                (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.setText)(node, date);
            }
            else if (type === 'datetime') {
                var dataTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeStamp).format('YYYY-MM-DD-HH:mm:ss');
                (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.setText)(node, dataTime);
            }
            return timer;
        };
        setTimeout(function () {
            window.setInterval(timer(), interval * 1000);
        }, 0);
    };
    Time.prototype._handleClick = function (node, hash) {
        if (!hash)
            return;
        node.classList.add(_prefix__WEBPACK_IMPORTED_MODULE_2__.default.time + "-with-hash");
        node.addEventListener('click', function () { return (window.location.hash = hash); });
    };
    Time.prototype._attrs = function (node) {
        return {
            time: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.getStrTypeAttr)(node, 'time', ''),
            type: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.getStrTypeAttr)(node, 'type', 'relative'),
            hash: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.getStrTypeAttr)(node, 'hash', ''),
            interval: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_3__.getNumTypeAttr)(node, 'interval', 60)
        };
    };
    return Time;
}());
/* harmony default export */ __webpack_exports__["default"] = (Time);


/***/ }),

/***/ "./src/dom-utils/elem.ts":
/*!*******************************!*\
  !*** ./src/dom-utils/elem.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$el": function() { return /* binding */ $el; },
/* harmony export */   "createElem": function() { return /* binding */ createElem; },
/* harmony export */   "setCss": function() { return /* binding */ setCss; },
/* harmony export */   "setHtml": function() { return /* binding */ setHtml; },
/* harmony export */   "setText": function() { return /* binding */ setText; },
/* harmony export */   "getStrTypeAttr": function() { return /* binding */ getStrTypeAttr; },
/* harmony export */   "getBooleanTypeAttr": function() { return /* binding */ getBooleanTypeAttr; },
/* harmony export */   "getNumTypeAttr": function() { return /* binding */ getNumTypeAttr; },
/* harmony export */   "getArrTypeAttr": function() { return /* binding */ getArrTypeAttr; }
/* harmony export */ });
/**
 * 获取元素
 * @param node
 * @param options 选项 all 表示是否获取所有节点
 */
function $el(node, options) {
    if (options === null || options === void 0 ? void 0 : options.all) {
        return document.querySelectorAll(node);
    }
    else {
        return document.querySelector(node);
    }
}
function createElem(tagName) {
    return document.createElement(tagName);
}
function setCss(node, styeName, value) {
    return (node.style[styeName] = value);
}
function setHtml(node, value) {
    if (value || value === '') {
        return (node.innerHTML = value);
    }
    else {
        return node.innerHTML;
    }
}
function setText(node, value) {
    if (value || value === '') {
        return (node.textContent = value);
    }
    else {
        return node.textContent || '';
    }
}
// 通用的标签属性获取方法
// 获取后的值由原先的字符串类型转换成对应类型
// Return String type
function getStrTypeAttr(node, attrName, defaultVal) {
    return node.getAttribute(attrName) || defaultVal;
}
// Return Boolean type
function getBooleanTypeAttr(node, attrName) {
    return node.getAttribute(attrName) === 'true';
}
// Return Number type
function getNumTypeAttr(node, attrName, defaultVal) {
    return Number(node.getAttribute(attrName)) || defaultVal;
}
// Return Array type
function getArrTypeAttr(node, attrName) {
    var _a;
    var attr = ((_a = node.getAttribute(attrName)) === null || _a === void 0 ? void 0 : _a.replace(/'/g, '"')) || '[]';
    var array = JSON.parse(attr);
    return array;
}


/***/ }),

/***/ "./src/dom-utils/index.ts":
/*!********************************************!*\
  !*** ./src/dom-utils/index.ts + 5 modules ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$el": function() { return /* reexport */ elem.$el; },
  "bind": function() { return /* reexport */ bind; },
  "createElem": function() { return /* reexport */ elem.createElem; },
  "getArrTypeAttr": function() { return /* reexport */ elem.getArrTypeAttr; },
  "getBooleanTypeAttr": function() { return /* reexport */ elem.getBooleanTypeAttr; },
  "getNumTypeAttr": function() { return /* reexport */ elem.getNumTypeAttr; },
  "getStrTypeAttr": function() { return /* reexport */ elem.getStrTypeAttr; },
  "nextAll": function() { return /* reexport */ nextAll; },
  "prevAll": function() { return /* reexport */ prevAll; },
  "removeAttrs": function() { return /* reexport */ removeAttrs; },
  "setCss": function() { return /* reexport */ elem.setCss; },
  "setHtml": function() { return /* reexport */ elem.setHtml; },
  "setText": function() { return /* reexport */ elem.setText; },
  "siblings": function() { return /* reexport */ siblings; },
  "slider": function() { return /* reexport */ slide; },
  "unbind": function() { return /* reexport */ unbind; }
});

;// CONCATENATED MODULE: ./src/dom-utils/bind.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * 解决事件监听兼容性问题
 * @param {Object} obj对象
 * @param {String} type事件类型,不带'on'前缀
 * @param {Function} callback事件处理程序
 */
function bind(obj, type, callback) {
    if (obj.addEventListener) {
        // W3C内核
        obj.addEventListener(type, callback);
    }
    else {
        // IE内核
        obj.attachEvent("on" + type, callback);
    }
}
/**
 * 解决移除事件监听兼容性问题
 * @param {Object} obj对象
 * @param {String} type事件类型,不带'on'前缀
 * @param {Function} callback事件处理程序
 */
function unbind(obj, type, callback) {
    if (obj.removeEventListener) {
        // W3C内核
        obj.removeEventListener(type, callback);
    }
    else {
        // IE内核
        obj.detachEvent("on" + type, callback);
    }
}

// EXTERNAL MODULE: ./src/dom-utils/elem.ts
var elem = __webpack_require__("./src/dom-utils/elem.ts");
;// CONCATENATED MODULE: ./src/dom-utils/prev&next.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */
function prevAll(el) {
    var Parent = el.parentElement;
    var Child = Parent.children;
    var prevChildren = [];
    var i = 0;
    var length = Child.length;
    for (; i < length; i++) {
        var _child = Child[i];
        if (_child == el) {
            break;
        }
        prevChildren.push(_child);
    }
    return prevChildren;
}
function nextAll(el) {
    var Parent = el.parentElement;
    var Child = Parent.children;
    var nextChildren = [];
    var length = Child.length;
    var start = 0;
    var i = length - 1;
    for (; i >= start; i--) {
        var _child = Child[i];
        if (_child == el) {
            break;
        }
        nextChildren.unshift(_child);
    }
    return nextChildren;
}

;// CONCATENATED MODULE: ./src/dom-utils/remove-attrs.ts
/**
 * 移除组件标签的自定义属性
 * 1.非关联css的属性
 * 2.仅取值属性
 * 3.非业务逻辑代码要用的属性
 */
function removeAttrs(elem, attrs) {
    setTimeout(function () {
        var i = 0;
        var length = attrs.length;
        for (; i < length; i++) {
            var attr = attrs[i];
            elem.getAttribute(attr) || elem.getAttribute(attr) === ''
                ? elem.removeAttribute(attr)
                : null;
        }
    }, 0);
}

;// CONCATENATED MODULE: ./src/dom-utils/siblings.ts
function siblings(elem) {
    var _a;
    var r = [];
    var n = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.firstChild;
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
            r.push(n);
        }
    }
    return r;
}

;// CONCATENATED MODULE: ./src/dom-utils/slide.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-rest-params */
// @ts-nocheck
/* harmony default export */ var slide = (window.Slider = (function () {
    // 定义Slider对象
    var Slider = {
        slideDown: function (el, time) {
            void 0;
        },
        slideUp: function (el, time) {
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
            var timer = this.timers.shift(), // 取出定时器
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
            var totalHeight_1 = element.offsetHeight; // 2.保存总高度
            element.style.height = '0px'; // 3.再将元素高度设置为0，元素又变为不可见
            // 定义一个变量保存元素当前高度
            var currentHeight_1 = 0; // 当前元素高度为0
            // 计算每次增加的值
            var increment_1 = totalHeight_1 / (time / 10);
            // 开始循环定时器
            var timer_1 = setInterval(function () {
                // 增加一部分高度
                currentHeight_1 += increment_1;
                // 把当前高度赋值给height属性
                element.style.height = currentHeight_1 + "px";
                // 如果当前高度大于或等于总高度则关闭定时器
                if (currentHeight_1 >= totalHeight_1) {
                    // 关闭定时器
                    clearInterval(timer_1);
                    // 把高度设置为总高度
                    element.style.height = totalHeight_1 + "px";
                    if (element.__TimerManager__ &&
                        element.__TimerManager__.constructor == TimerManager) {
                        element.__TimerManager__.next();
                    }
                }
            }, 10);
        }
        else {
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
            var totalHeight_2 = element.offsetHeight;
            // 定义一个变量保存元素当前高度
            var currentHeight_2 = totalHeight_2;
            // 计算每次减去的值
            var decrement_1 = totalHeight_2 / (time / 10);
            // 开始循环定时器
            var timer_2 = setInterval(function () {
                // 减去当前高度的一部分
                currentHeight_2 -= decrement_1;
                // 把当前高度赋值给height属性
                element.style.height = currentHeight_2 + "px";
                // 如果当前高度小于等于0，就关闭定时器
                if (currentHeight_2 <= 0) {
                    // 关闭定时器
                    clearInterval(timer_2);
                    // 把元素display设置为none
                    element.style.display = 'none';
                    // 把元素高度值还原
                    element.style.height = totalHeight_2 + "px";
                    if (element.__TimerManager__ &&
                        element.__TimerManager__.constructor == TimerManager) {
                        element.__TimerManager__.next();
                    }
                }
            }, 10);
        }
        else {
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
})());

;// CONCATENATED MODULE: ./src/dom-utils/index.ts









/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/build-umd.ts");
/******/ })()
;
});
//# sourceMappingURL=rabbit.js.map