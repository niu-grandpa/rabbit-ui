/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import warn from '../mixins/warn';

const typeOf = (r: any): string => {
    const s = Object.prototype.toString.call(r);
    return s.match(/\[object (.*?)\]/)![1].toLowerCase();
};

const errMsg = (right: string, wrong: string): boolean => {
    warn(
        `The expected type accepted is ${right}, but the error type currently in use is --> ${wrong}`
    );
    return false;
};

export const isUndef = (r: any): boolean => typeof r === 'undefined';

export const isStr = (r: any): boolean =>
    typeof r === 'string' ? true : errMsg('string', typeOf(r));

export const isNum = (r: any): boolean =>
    typeof r === 'number' ? true : errMsg('number', typeOf(r));

export const isBol = (r: any): boolean =>
    typeof r === 'boolean' ? true : errMsg('boolean', typeOf(r));

/**
 *
 * @param r  函数名
 * @param param 回调附带的参数。有多个参数时使用数组传递
 */
export const isFn = (r: any, param?: [...any] | any): any =>
    typeof r === 'function' ? r(param) : errMsg('function', typeOf(r));

export const isObj = (r: any): boolean =>
    r.constructor === Object ? true : errMsg('object', typeOf(r));

export const isArr = (r: any): boolean =>
    r.constructor === Array ? true : errMsg('array', typeOf(r));
