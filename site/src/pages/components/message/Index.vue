<template>
    <article class="markdown">
        <Describe
            title="Message 全局提示"
            desc="全局展示操作反馈信息。"
            name="Message"
            :is-methods="true"
        >
            <li>可提供成功、警告和错误等反馈信息。</li>
            <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
        </Describe>
        <Example next-title="提示类型">
            <template #content>
                <button type="button" class="rab-btn rab-btn-primary" @click="info">
                    显示普通提示
                </button>
                <p>最基本的提示，默认在3秒后消失。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="带背景色">
            <template #content>
                <button type="button" class="rab-btn" @click="success">显示成功提示</button>
                <button type="button" class="rab-btn" @click="warning">显示警告提示</button>
                <button type="button" class="rab-btn" @click="error">显示错误提示</button>
                <p>包括成功、失败、警告。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="加载中">
            <template #content>
                <button type="button" class="rab-btn" @click="background('info')">
                    显示普通提示
                </button>
                <button type="button" class="rab-btn" @click="background('success')">
                    显示成功提示
                </button>
                <button type="button" class="rab-btn" @click="background('warning')">
                    显示警告提示
                </button>
                <button type="button" class="rab-btn" @click="background('error')">
                    显示错误提示
                </button>
                <p>设置属性 <code>background</code> 为 true 后，通知提示会显示背景色。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="Promise 接口">
            <template #content>
                <button type="button" class="rab-btn" @click="loading">显示加载中...</button>
                <p>进行全局 loading，异步自行移除。需要手动调用 <code>destroy</code> 方法关闭</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="自定义时长">
            <template #content>
                <button type="button" class="rab-btn" @click="promise">显示promise的提示</button>
                <p>
                    可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 Rabbit.Message
                    将要结束时通过 then 显示新的 Rabbit.Message 。
                </p>
                <p>如果手动通过关闭按钮结束则无效</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example next-title="可关闭">
            <template #content>
                <button type="button" class="rab-btn" @click="time">显示一个10秒的提示</button>
                <p>自定义时长，也可以在 <code>Message.config()</code> 中全局配置，详见API。</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Example next-title="使用 HTML 片段">
            <template #content>
                <button type="button" class="rab-btn" @click="closable">
                    显示一个可关闭的提示
                </button>
                <p>设置 <code>closable</code> 为 true 后可以手动关闭提示。</p>
            </template>
            <template #code><Code7 /></template>
        </Example>
        <Example>
            <template #content>
                <button type="button" class="rab-btn" @click="html">显示一个html片段提示</button>
                <p>传入 HTML 片段</p>
            </template>
            <template #code><Code8 /></template>
        </Example>
        <Code9 />
    </article>
</template>

<script lang="ts" setup>
import Message from '../../../../../src/components/message';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import {
    Code1,
    Code2,
    Code3,
    Code4,
    Code5,
    Code6,
    Code7,
    Code8,
    Code9
} from '../markdown-code/message';

const info = () => Message.info('这是一条普通的提示');
const success = () => Message.success('这是一条成功的提示');
const warning = () => Message.warning('这是一条警告的提示');
const error = () => Message.error('这是一条错误的提示');
const background = (type: 'info' | 'success' | 'warning' | 'error') => {
    Message[type]({
        background: true,
        content: '这是一条带背景色的通知'
    });
};
const loading = () => {
    Message.loading({
        content: '正在加载中...',
        duration: 0
    });
    setTimeout(() => Message.destroy(), 3000);
};
const promise = () => {
    Message.loading('正在加载中...').then(() => {
        Message.success('加载成功!').then(() => {
            Message.info('加载成功后的提示');
        });
    });
};
const time = () => {
    Message.success({
        content: '这是成功的提示信息，我将在10秒内消失',
        duration: 10
    });
};
const closable = () => {
    Message.info({
        content: '可手动关闭的提示',
        duration: 8,
        closable: true
    });
};
const html = () => {
    Message.info({
        content: `<strong>这是 <i>HTML</i> 片段</strong>`,
        dangerouslyUseHTMLString: true
    });
};
</script>