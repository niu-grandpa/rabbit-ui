<template>
    <article class="markdown">
        <h1>快速开始</h1>
        <Anchor title="引入 RabbitUI" />
        <p>
            一般会想到在 webpack 入口页面
            <code>main.ts</code>
            直接引入整个包，请不要这样做。我们的做法是，例如在某个页面要用到，那么你就在该页面的ts文件里引入对应的插件并初始化，不要在入口文件引入，但样式文件仍然需要在入口引入。
        </p>
        <p>在<code>main.ts</code>中引入样式文件</p>
        <Code1 />
        <p>在<code>文件1</code>中使用 Alert 插件</p>
        <Code2 />
        <p>在<code>文件2</code>中使用 Collapse 插件</p>
        <Code3 />
        <p>
            以上的引用方法会显得比较繁琐，你可以使用下面按需引用的方式达到同样效果，请参照示例进行配置。
        </p>
        <Anchor title="按需引用" />
        <p>
            借助插件
            <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">
                babel-plugin-import
            </a>
            可以实现按需加载组件，减少文件体积。首先安装，并在文件 .babelrc 中配置：
        </p>
        <Code4 />
        <p>然后这样按需引入组件，就可以减小体积了：</p>
        <Code5 />
    </article>
</template>

<script lang="ts" setup>
import Anchor from '../../components/anchor/Index.vue';
import { Code1, Code2, Code3, Code4, Code5 } from './markdown-code/start';
</script>