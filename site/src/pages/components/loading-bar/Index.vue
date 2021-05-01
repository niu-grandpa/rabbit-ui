<template>
    <article class="markdown">
        <h1>LoadingBar 加载进度条</h1>
        <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。</p>
        <Anchor title="说明" />
        <p>
            LoadingBar
            只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar
            会模拟进度，当然也可以通过<code>update()</code>方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。
        </p>
        <Anchor title="在路由中使用" />
        <Code1 />
        <Anchor title="在异步请求中使用" />
        <Code2 />
        <Anchor title="代码示例" />
        <Example>
            <template #content>
                <button type="button" class="rab-btn" @click="start">Start</button>
                <button type="button" class="rab-btn" @click="finish">Finish</button>
                <button type="button" class="rab-btn" @click="error">Error</button>
                <p>
                    点击 Start 开始进度，点击 Finish
                    结束。在调用<code>start()</code>方法后，组件会自动模拟进度，当调用<code>finish()</code>或<code>error()</code>时，补全进度并自动消失。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Code4 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Loading from '../../../../../src/components/loading-bar';
import Anchor from '../../../components/anchor/Index.vue';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4 } from '../markdown-code/loading-bar';

const start = () => Loading.start();
const finish = () => Loading.finish();
const error = () => Loading.error();
</script>

<style scoped>
.rab-btn {
    margin-right: 5px;
}
</style>