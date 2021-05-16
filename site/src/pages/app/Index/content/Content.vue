<template>
  <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="19" :xxl="20" id="app-content">
    <section class="main-container">
      <article class="markdown">
        <h1>关于 Rabbit UI</h1>
        <p>
          <code>Rabbit UI</code> ，是一个基于 Javascript 并使用 Typescript 编写的开源 UI
          组件库，主要使用于 PC 界面。其提供的组件的 HTML
          代码奉行着简洁至上、简单表意、易于分辨的准则。
        </p>
        <h2 id="特性">特性</h2>
        <ul>
          <li v-for="item in features" :key="item">{{ item }}</li>
        </ul>
        <h2 id="安装">安装</h2>
        <h3 id="使用-npm-或-yarn-安装">使用 npm 或 yarn 安装</h3>
        <p>
          我们推荐使用 npm 或 yarn
          的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
        </p>
        <!-- MarkdownCode1 -->
        <p>
          如果你的网络环境不佳，推荐使用
          <a href="https://github.com/cnpm/cnpm" target="_blank"> cnpm </a>。
        </p>
        <h3 id="浏览器引入">浏览器引入</h3>
        <p>
          在浏览器中使用 <code>script</code> 和 <code>link</code> 标签直接引入文件，并使用全局变量
          <code>Rabbit</code>。
        </p>
        <!-- MarkdownCode2 -->
        <p>
          我们在 npm 发布包内的 <code>rabbit-simple-ui/dist</code> 目录下提供了
          <code>rabbit.js</code> <code>rabbit.min.js</code> 以及
          <code>styles/rabbit.css</code>。你也可以通过
          <a href="https://www.jsdelivr.com/package/npm/rabbit-simple-ui" target="_blank">
            <img
              src="https://data.jsdelivr.com/v1/package/npm/rabbit-simple-ui/badge"
              alt="jsdelivr"
            />
          </a>
          或
          <a href="https://unpkg.com/rabbit-simple-ui/dist/" target="_blank">UNPKG </a>
          进行下载。</p
        >
        <h2 id="示例">示例</h2>
        <!-- MarkdownCode3 -->
        <p>效果</p>
        <h2 id="版本">版本</h2>
        <p>
          <a href="https://www.npmjs.com/package/rabbit-simple-ui" target="_blank">
            <img src="https://img.shields.io/npm/v/rabbit-simple-ui.svg?style=flat-square" />
          </a>
        </p>
        <h2 id="兼容">兼容</h2>
        <ul>
          <li></li>
        </ul>
        <h2 id="相关链接">相关链接</h2>
        <ul>
          <li v-for="link in relatedLinks" :key="link.title">
            <a :href="link.href" target="_blank">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </article>
    </section>
  </a-col>
</template>

<script lang="ts" setup>
import { Anchor } from '../../../../components'

const features: string[] = [
  '使用语义化的自定义元素，易于分辨',
  '优雅、简洁，与庞大且臃肿令人眼花缭乱的结构 say goodbye',
  '不依赖任何第三方框架，底层基于原生 Javascript，引入即用',
  '能够在 Vue、JQuery或者其他现有项目中配合使用',
  '丰富的组件和功能，满足大部分网站场景',
  '细致、漂亮的 UI',
  '事无巨细的文档'
]
const relatedLinks: {
  href: string
  title: string
}[] = [
  {
    href: 'https://es6.ruanyifeng.com/',
    title: 'ECMAScript 6'
  },
  {
    href: 'https://www.tslang.cn/docs/home.html',
    title: 'Typescript'
  },
  {
    href: 'https://webpack.docschina.org/',
    title: 'Webpack'
  },
  {
    href: 'https://www.iconfont.cn/',
    title: '阿里巴巴矢量图标库'
  },
  {
    href: 'https://www.jq22.com/myhome',
    title: 'jQuery插件库'
  },
  {
    href: 'https://www.iviewui.com/',
    title: 'View UI'
  },
  {
    href: 'https://2x.antdv.com/components/overview-cn/',
    title: 'Ant Design Vue'
  }
]
</script>


<style lang="less" scope>
#app-content {
  .main-container {
    position: relative;
    min-height: 1500px;
    padding: 20px 170px 32px 64px;
    background: #fff;

    @media only screen and (max-width: 992px) {
      margin-right: 0;
      margin-left: 0;
      padding-right: 16px;
      padding-left: 16px;
    }

    .markdown {
      color: #55585e;
      font-size: 14px;
      line-height: 2;

      h1 {
        margin-top: 8px;
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 30px;
        line-height: 38px;
        color: #2c3e50;
      }

      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #2c3e50;
        clear: both;
        margin: 1.6em 0 0.6em;
        font-weight: 500;
      }

      h2 {
        font-size: 24px;
        line-height: 32px;
      }

      h3 {
        font-size: 18px;
      }

      p,
      pre {
        margin: 1em 0;
      }

      ul > li {
        margin-left: 20px;
        padding-left: 4px;
        list-style-type: circle;
      }

      code {
        margin: 0 1px;
        padding: 0.2em 0.4em;
        font-size: 0.9em;
        background: #f2f4f5;
        border: 1px solid #f0f0f0;
        border-radius: 3px;
        color: #55585e;
      }
    }
  }
}
</style>