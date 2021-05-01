<template>
    <article class="markdown">
        <h1>安装</h1>
        <Anchor title="CDN 引入" />
        <p>
            目前可以通过
            <a href="https://cdn.jsdelivr.net/npm/rabbit-simple-ui/" target="_blank">
                cdn.jsdelivr.net/npm/rabbit-simple-ui
            </a>
            看到 Rabbit UI 最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
        </p>
        <Code1 />
        <Anchor title="示例" />
        <p>通过 CDN 的方式我们可以很容易地使用 Rabbit UI 写出一个示例：</p>
        <Code2 />
        <Anchor title="NPM 安装" />
        <div class="markdown-code">
            <div class="code-write">
                <blockquote>
                    <p>
                        <span>你将需要使用</span><code><span>TypeScript</span></code
                        ><span>，并在ts文件里编写和使用代码。</span>
                        请确保你了解过它，并能够大致使用
                    </p>
                </blockquote>
            </div>
        </div>
        <p>使用 npm 安装，享受工具带来的便利，更好地和 webpack 配合使用，且推荐使用 ES2015。</p>
        <NPMInstallCode />
        <p>
            如果您使用了 NPM 安装，并使用 webpack 作为构建工具，请阅读下一节：
            <router-link to="/docs/quickstart">快速上手</router-link>。
        </p>
    </article>
</template>

<script lang="ts" setup>
import Anchor from '../../components/anchor/Index.vue';
import { Code1, Code2 } from './markdown-code/install';
import { Code1 as NPMInstallCode } from './markdown-code/introduce';
</script>