<template>
    <article class="markdown">
        <Describe
            title="MiniModal 轻量对话框"
            desc="创建一次性的轻量级对话框。"
            name="MiniModal"
            :is-methods="true"
        >
            <li>
                当需要一个简洁的确认框询问用户时，可以调用
                <code>Rabbit.MiniModal.confirm()</code> 实例方法创建。
            </li>
        </Describe>
        <Example next-title="确认对话框">
            <template #content>
                <button class="rab-btn" @click="instance('info')">消息</button>
                <button class="rab-btn" @click="instance('success')">成功</button>
                <button class="rab-btn" @click="instance('warning')">警告</button>
                <button class="rab-btn" @click="instance('error')">错误</button>
                <p>四种基本的对话框，只提供一个确定按钮。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example>
            <template #content>
                <button class="rab-btn" @click="confirm">标准</button>
                <button class="rab-btn" @click="custom">自定义按钮文字</button>
                <button class="rab-btn" @click="async">异步关闭</button>
                <p>快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。</p>
                <p>
                    设置属性<code>dangerouslyUseHTMLString="true"</code>，content 就会被当作 HTML
                    片段处理。
                </p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Tip />
        <Code3 />
    </article>
</template>

<script lang="ts" setup>
import MiniModal from '../../../../../src/components/mini-modal';
import Message from '../../../../../src/components/message';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Tip } from '../markdown-code/mini-modal';

const title = '对话框标题';
const content = '这是一段对话框的内容';

const instance = (type: string) => {
    switch (type) {
        case 'info':
            MiniModal.info({
                title,
                content
            });
            break;
        case 'success':
            MiniModal.success({
                title,
                content
            });
            break;
        case 'warning':
            MiniModal.warning({
                title,
                content
            });
            break;
        case 'error':
            MiniModal.error({
                title,
                content
            });
            break;
    }
};

const confirm = () => {
    MiniModal.confirm({
        title: '确认对话框标题',
        content: '<p>这是一段自定义的内容...</p><p>这是一段自定义的内容...</p>',
        dangerouslyUseHTMLString: true,
        onOk: () => {
            Message.info('点击了确定');
        },
        onCancel: () => {
            Message.info('点击了取消');
        }
    });
};

const custom = () => {
    MiniModal.confirm({
        title: '确认对话框标题',
        content: '<p>这是一段自定义的内容...</p><p>这是一段自定义的内容...</p>',
        okText: 'OK',
        cancelText: 'Cancel',
        dangerouslyUseHTMLString: true
    });
};

const async = () => {
    MiniModal.confirm({
        title: '确认对话框标题',
        content: '<p>对话框将在 2秒 后关闭</p>',
        loading: true,
        dangerouslyUseHTMLString: true,
        onOk: () => {
            setTimeout(() => {
                MiniModal.remove();
                Message.info('异步关闭了对话框');
            }, 2000);
        }
    });
};
</script>