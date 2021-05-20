<template>
  <article class="markdown">
    <h1>快速开始</h1>
    <blockquote>
      在开始之前，推荐先学习 TypeScript 和 ES2015，并正确安装和配置了
      <a href="https://nodejs.org/en/" target="_blank">Node.js</a>。 官方指南假设你已了解关于
      HTML、CSS 、JavaScript 和 TypeScript 的基础知识。如果你刚开始学习前端，将 UI
      库作为你的第一步可能不是最好的主意。
    </blockquote>
    <h2 id="引入-RabbitUI">引入 RabbitUI</h2>
    <div>
      一般会想到在 webpack 入口页面
      <code>main.ts</code>
      中直接引入整个包，但请不要这样做，在你需要用到的页面的对应 ts
      文件中引入对应组件的构造函数，配置如下：
      <h3>方式一</h3>
      <p>从源文件路径引入</p>
      <Code1 />
      <h3>方式二</h3>
      <p>
        按需引用，借助插件
        <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">
          babel-plugin-import
        </a>
        可以实现按需加载组件，减少文件体积。首先安装，并在文件 <code>.babelrc</code> 中配置：
      </p>
      <Code2 />
      <p>然后这样按需引入组件，就可以减小体积了：</p>
      <Code3 />
    </div>
    <h2 id="特别提醒 ">特别提醒 </h2>
    <ul>
      <li>
        按需引用仍然需要导入样式，即在 main.ts 或根组件执行
        <code> import 'rabbit-simple-ui/dist/styles/rabbit.css'; </code>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { Code1, Code2, Code3 } from '../../../examples-code/docs/start/'
</script>