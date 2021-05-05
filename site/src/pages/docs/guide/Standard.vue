<template>
    <article class="markdown">
        <h1>参与贡献</h1>
        <Anchor title="开发规范" />
        <p>
            贡献代码前请务必先与作者联系
            <a :href="'mailto:' + email">{{ email }}</a>
            ， 确定好开发内容和 API，以免产生不必要或重复的工作。
        </p>
        <h3>使用之前</h3>
        <p>使用最新ES2015语法，具体如下：</p>
        <ul>
            <li>正确使用<code>const</code>和<code>let</code>替代var</li>
            <li>使用模板字符串<code>`${this.data}`</code></li>
            <li>将工具函数等依赖单独分离，并用<code>import</code>导入</li>
            <li>对象字面量缩写、箭头函数</li>
        </ul>
        <p>
            在<code>examples/</code>内创建对应用例文件夹并创建测试文件，文件由一个<code>.ts</code>
            和一个<code>.html</code>
            文件组成，并在 main.ts 中引用，具体请查看 examples 文件夹内的示例。
        </p>
        <h3>组件标签</h3>
        <p>命名</p>
        <ul>
            <li>尽量简单、表意。</li>
            <li>标签名前缀使用 <code>r-</code></li>
            <li>
                自定义元素的名字必须包含一个破折号（-）<code>&lt;r-tags&gt;</code>、<code>&lt;r-element&gt;</code>和<code>&lt;r-awesome-app&gt;</code>都是正确的名字，而<code>&lt;tabs&gt;</code>和<code>&lt;foo_bar&gt;</code>是不正确的
            </li>
        </ul>
        <p>目录</p>
        <ul>
            <li>
                组件在目录<code>src/components/</code>下，每个组件单独一个目录，目录命名使用小写，入口文件为<code>index.ts</code>，导出组件
            </li>
        </ul>
        <p>属性</p>
        <h3>事件</h3>
        <p>命名</p>
        <p>规范</p>
        <h3>样式</h3>
        <ul>
            <li>css前缀使用<code>rab-</code></li>
            <li>使用 less 语言编写样式</li>
        </ul>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Anchor from '../../../components/anchor/Index.vue';

const email = ref<string>('2864103063@qq.com');
</script>

<style lang="less" scope>
</style>