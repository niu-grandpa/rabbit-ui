import { bind, unbind } from './bind';

import {
    $el,
    createElem,
    setCss,
    setHtml,
    setText,
    getStrTypeAttr,
    getNumTypeAttr,
    getArrTypeAttr,
    getBooleanTypeAttr
} from './elem';

import { prevAll, nextAll } from './prev&next';
import removeAttrs from './remove-attrs';
import siblings from './siblings';
import slider from './slide';

export {
    bind,
    unbind,
    $el,
    createElem,
    setCss,
    setHtml,
    setText,
    prevAll,
    nextAll,
    removeAttrs,
    siblings,
    slider,
    getStrTypeAttr,
    getNumTypeAttr,
    getArrTypeAttr,
    getBooleanTypeAttr
};
