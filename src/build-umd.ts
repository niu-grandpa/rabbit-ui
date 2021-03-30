/**
 * 用于打包构建 umd 模块，
 * 导出含有 Rabbit 的全局变量，使得相关 api 能够被调用，
 * 主要用于浏览器环境下通过 script 标签引入的方式使用。
 */

import * as Rabbit from './rabbit-simple-ui';
import './styles/index.less';

// @ts-ignore
export default window.Rabbit = Rabbit;
