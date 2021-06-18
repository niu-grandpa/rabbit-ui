<template>
  <article class="markdown">
    <h1>关于 Rabbit UI</h1>
    <p>
      <code>Rabbit UI</code> ，是一个基于 Javascript 并使用 Typescript 编写的开源 UI
      组件库，主要使用于 PC 界面。
    </p>
    <p>
      <code>Rabbit UI</code>提供的组件 HTML 代码奉行着简洁至上、简单表意、易于分辨的准则。
    </p>
    <p>
      不知你是否有这样的苦恼，例如 Boostrap ，你想使用一个 Modal 组件但是其提供的 HTML
      代码多达十几二十行，再加上自己填充的内容就更不用说了，如果不加注释后期难以找到其位置和分辨，
      而<code>rabbit-ui</code>提供的代码仅仅几行，不仅清晰还让你更易分辨。
    </p>
    <h2 id="特性">特性</h2>
    <ul>
      <li v-for="item in features" :key="item">{{ item }}</li>
    </ul>
    <h2 id="安装">安装</h2>
    <h3 id="使用-npm-或-yarn-安装">使用 npm 或 yarn 安装</h3>
    <blockquote>
      &nbsp;&nbsp;注意：请先阅读<router-link to="/docs/install">安装</router-link>章节！
    </blockquote>
    <AZCode />
    <h3 id="浏览器引入">浏览器引入</h3>
    <p>
      在浏览器中使用 <code>script</code> 和
      <code>link</code> 标签直接引入文件，并使用全局变量 <code>Rabbit</code>。
    </p>
    <AZCode2 />
    <h2 id="示例">示例</h2>
    <SLCode />
    <p>效果</p>
    <r-progress percent="10" id="example" />
    <button type="button" class="rab-btn rab-btn-primary" @click="handleStar">
      模拟进度条
    </button>
    <button type="button" class="rab-btn" @click="handleRest">重置</button>
    <h2 id="版本">版本</h2>
    <p>
      <a href="https://www.npmjs.com/package/rabbit-simple-ui" target="_blank">
        <img src="https://img.shields.io/npm/v/rabbit-simple-ui.svg?style=flat-square" />
      </a>
    </p>
    <h2 id="兼容">兼容</h2>
    <ul>
      <li>支持所有能运行 Javascript 的地方</li>
      <li>支持与其他的 UI 库或框架一起使用</li>
      <li>支持 TypeScript</li>
      <li>支持现代浏览器和 Internet Explorer 10+</li>
    </ul>
    <h2 id="相关链接">相关链接</h2>
    <ul>
      <li v-for="link in relatedLinks" :key="link.title">
        <a :href="link.href" target="_blank">
          {{ link.title }}
        </a>
      </li>
    </ul>
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Progress from "../../../../../src/components/progress";
import { Anchor } from "../../../components";
import { AZCode, AZCode2, SLCode } from "../../../examples-code/docs/introduce";

const features: string[] = [
  "使用简洁且语义化的自定义标签",
  "优雅、简洁的标签代码，与庞大且臃肿令人眼花缭乱的结构区别",
  "不依赖任何第三方框架，底层基于原生 Javascript，引入即用",
  "能与 Vue、jQuery 或者其他第三方库和框架配合使用",
  "丰富的组件和功能，满足大部分网站场景",
  "细致、漂亮的 UI",
  "事无巨细的文档",
];
const relatedLinks: {
  href: string;
  title: string;
}[] = [
  {
    href: "https://es6.ruanyifeng.com/",
    title: "ECMAScript 6",
  },
  {
    href: "https://www.tslang.cn/docs/home.html",
    title: "Typescript",
  },
  {
    href: "https://webpack.docschina.org/",
    title: "Webpack",
  },
  {
    href: "https://www.iconfont.cn/",
    title: "阿里巴巴矢量图标库",
  },
  {
    href: "https://www.jq22.com/myhome",
    title: "jQuery插件库",
  },
  {
    href: "https://www.iviewui.com/",
    title: "View UI",
  },
  {
    href: "https://2x.antdv.com/components/overview-cn/",
    title: "Ant Design Vue",
  },
];
const anchors: string[] = ["特性", "安装", "示例", "版本", "兼容", "相关链接"];

let progress: Progress,
  timer: any = null,
  n = 10;

onMounted(() => (progress = new Progress()));

const handleStar = () => {
  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    if (n >= 100) clearInterval(timer);
    n = n + Math.random() * 10 >= 100 ? 100 : (n + Math.random() * 10) | 0;
    progress.config("#example").percent = n;
  }, 300 + Math.random() * 1000);
};
const handleRest = () => {
  if (timer) clearInterval(timer);
  n = 0;
  progress.config("#example").percent = 0;
};
</script>
