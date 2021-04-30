<template>
    <article class="markdown">
        <h1>关于 Rabbit UI</h1>
        <p>
            <code>Rabbit UI</code> 是一个基于 Javascript 编写的轻量级开源 UI 插件库，主要使用于 PC
            端界面。
        </p>
    </article>
    <article class="markdown">
        <Anchor title="特性" />
        <ul>
            <li v-for="item in features" :key="item">
                <p>{{ item }}</p>
            </li>
        </ul>
        <Anchor title="安装" />
        <span
            >使用 npm 安装 ，请阅读安装章节的<router-link to="install">NPM安装</router-link
            >部分</span
        >
        <Code1 />
        <p>或使用 <code>&lt;script&gt;</code> 全局引用，并使用全局变量 <code>Rabbit</code></p>
        <Code2 />
        <Anchor title="示例" />
        <Code3 />
        <p>效果：</p>
    </article>
    <p>
        <r-tooltip content="这里是提示文字">当鼠标经过这段文字时，会显示一个气泡框</r-tooltip>
    </p>
    <r-alert title="信息提示的文案" show-icon="true">
        <p>信息提示的内容,信息提示的内容，信息提示的,信息提示的内容,信息提示的内容。</p>
    </r-alert>
    <r-alert type="success" title="成功提示的文案" show-icon="true">
        <p>成功提示的内容,成功提示的内容，成功提示的,成功提示的内容,成功提示的内容。</p>
    </r-alert>
    <article class="markdown">
        <Anchor title="版本" />
        <p class="badge">
            <a href="https://www.npmjs.com/package/rabbit-simple-ui" target="_blank">
                <img :src="npmVersionImg" />
            </a>
            <a href="https://www.jsdelivr.com/package/npm/rabbit-simple-ui" target="_blank">
                <img src="https://data.jsdelivr.com/v1/package/npm/rabbit-simple-ui/badge" />
            </a>
        </p>
        <Anchor title="兼容" />
        <ul>
            <li v-for="item in compatibility" :key="item">{{ item }}</li>
        </ul>
        <Anchor title="相关链接" />
        <ul>
            <li v-for="item in relatedLinks" :key="item.value">
                <a :href="item.href" target="_blank">{{ item.value }}</a>
            </li>
        </ul>
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Anchor from 'comps/anchor/Index.vue';
import { Code1, Code2, Code3 } from 'docsMdCode/introduce';
import Alert from 'rabbitui/alert';
import Tooltip from 'rabbitui/tooltip';

const version = '1.4.0';
const npmVersionImg = `https://img.shields.io/badge/npm-v${version}-orange`;

const features = [
    '优雅、简洁，与庞大且臃肿令人眼花缭乱的结构 Say goodbye',
    '不依赖任何第三方框架，底层基于原生 Javascript，引入即用',
    '使用少量 HTML 代码且语义化可读性高的自定义标签',
    '能够在 Vue、JQuery或者其他现有项目中配合使用',
    '丰富的组件和功能，满足大部分网站场景',
    '细致、漂亮的 UI',
    '事无巨细的文档'
];

const compatibility = [
    '支持在所有能用 JavaScript 的地方',
    '支持 JQuery',
    '支持 Vue.js（不推荐）',
    '支持 TypeScript',
    '支持 IE9 及以上浏览器'
];

const relatedLinks = [
    { value: 'TypeScript官方文档', href: 'https://www.tslang.cn/' },
    { value: 'Webpack', href: 'tp://webpack.github.io/' },
    { value: '阿里巴巴矢量图标库', href: 'https://www.iconfont.cn/' },
    { value: 'ViewUI', href: 'https://www.iviewui.com/' },
    { value: 'Ant Design', href: 'https://ant.design/index-cn' },
    { value: 'Ant Design of Vue', href: 'https://2x.antdv.com/docs/vue/introduce-cn/' },
    { value: 'Element', href: 'https://element.eleme.cn/' },
    { value: 'Element-angular', href: 'https://element-angular.faas.ele.me/guide/install' }
];

onMounted(() => {
    new Alert();
    new Tooltip();
});
</script>

<style lang="less" scoped>
.markdown {
    .badge {
        a {
            margin-right: 8px;
        }
    }
}
</style>