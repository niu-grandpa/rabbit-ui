<template>
  <article class="markdown">
    <h1>安装</h1>
    <h2 id="CDN-引入">CDN 引入</h2>
    <p>
      我们在 npm 发布包内的 <code>rabbit-simple-ui/dist</code> 目录下提供了 <code>rabbit.js</code>
      <code>rabbit.min.js</code> 以及 <code>styles/rabbit.css</code>。你也可以通过
      <a href="https://www.jsdelivr.com/package/npm/rabbit-simple-ui" target="_blank">jsDelivr</a>
      或
      <a href="https://unpkg.com/rabbit-simple-ui/dist/" target="_blank">UNPKG </a>
      进行下载。
    </p>
    <CDNAZ />
    <h3>示例</h3>
    <p>通过 CDN 可以快速使用 Rabbit UI 写出一个示例：</p>
    <SL />
    <h2 id="Npm 或 Yarn 安装">Npm 或 Yarn 安装</h2>
    <p>
      我们推荐使用 npm 或 yarn
      的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处，也推荐使用
      ES2015。
    </p>
    <blockquote>
      &nbsp;&nbsp;后续将使用按需引入的方式引入 Rabbit UI，由于源文件使用 TS 编写，因此你将需要使用
      TS 编写你的项目代码
    </blockquote>
    <AZCode />
    <p>
      如果你的网络环境不佳，推荐使用
      <a href="https://github.com/cnpm/cnpm" target="_blank"> cnpm </a>。
    </p>
    <p>
      如果您使用了此方式安装，并使用 webpack 作为构建工具，请继续阅读
      <router-link to="/docs/start">快速上手</router-link> 章节。
    </p>
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { AZCode } from '../../../examples-code/docs/introduce'
import { CDNAZ, SL } from '../../../examples-code/docs/install'
import { Anchor } from '../../../components'

const anchors: string[] = ['CDN-引入', 'Npm 或 Yarn 安装']
</script>
