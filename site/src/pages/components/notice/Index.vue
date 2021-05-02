<template>
    <article class="markdown">
        <Describe
            title="Notice 通知提醒框"
            desc="全局展示通知提醒信息。"
            name="Notice"
            :is-methods="true"
        >
            <li>较为复杂的通知内容。</li>
            <li>带有交互的通知，给出用户下一步的行动点。</li>
            <li>系统主动推送。</li>
        </Describe>
        <Example next-title="提醒类型">
            <template #content>
                <button type="button" class="rab-btn rab-btn-primary" @click="notice('open')">
                    打开提醒
                </button>
                <p>
                    基本用法，默认在 4.5秒后关闭。如果 <code>desc</code>
                    参数为空或不填，则自动应用仅标题模式下的样式。
                </p>
                <p>建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="自定义时长">
            <template #content>
                <p>带描述信息</p>
                <button type="button" class="rab-btn" @click="notice('info')">消息</button>
                <button type="button" class="rab-btn" @click="notice('success')">成功</button>
                <button type="button" class="rab-btn" @click="notice('warning')">警告</button>
                <button type="button" class="rab-btn" @click="notice('error')">错误</button>
                <p>仅标题</p>
                <button type="button" class="rab-btn" @click="notice('info', true)">消息</button>
                <button type="button" class="rab-btn" @click="notice('success', true)">成功</button>
                <button type="button" class="rab-btn" @click="notice('warning', true)">警告</button>
                <button type="button" class="rab-btn" @click="notice('error', true)">错误</button>
                <p>带有状态图标的提醒。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="Promise 接口">
            <template #content>
                <button type="button" class="rab-btn rab-btn-primary" @click="time">
                    打开提醒
                </button>
                <p>自定义时长，为 0 则不自动关闭。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="使用 HTML 片段">
            <template #content>
                <button type="button" class="rab-btn" @click="promise">打开提醒</button>
                <p>
                    可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 Rabbit.Notice
                    将要结束时通过 then 显示新的 Rabbit.Notice 。
                </p>
                <p>如果手动通过关闭按钮结束则无效</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="隐藏关闭按钮">
            <template #content>
                <button type="button" class="rab-btn rab-btn-primary" @click="html">
                    打开提醒
                </button>
                <p><code>title</code> 和 <code>desc</code> 属性支持传入 HTML 片段</p>
                <p>
                    将<code>dangerouslyUseHTMLString</code>属性设置为 true， 就会被当作 HTML
                    片段处理。
                </p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example>
            <template #content>
                <button type="button" class="rab-btn" @click="closable">打开提醒</button>
                <p>设置属性 <code>closable</code> 为 <code>false</code> 可以不显示关闭按钮</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Code7 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Notice from '../../../../../src/components/notice';
import { Describe, Example } from '../../../components/index';
import { Code1, Code2, Code3, Code4, Code5, Code6, Code7 } from '../markdown-code/notice';

interface NoticeType {
    str: 'open' | 'info' | 'success' | 'warning' | 'error';
}

const notice = (type: NoticeType['str'], nodesc = false) => {
    Notice[type]({
        title: '这是通知标题',
        desc: nodesc
            ? ''
            : '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述'
    });
};
const time = () => {
    Notice.open({
        title: '这是通知标题',
        desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
        duration: 0
    });
};
const promise = () => {
    Notice.open({
        title: '行程已发布',
        desc: '您的行程订单已发布，正在等待待车主接单...'
    }).then(() => {
        Notice.info({
            title: '已有车主接单啦！',
            desc: '你发布的行程订单已有车主接单了，请提前付款以免被取消订单！'
        }).then(() => {
            Notice.success({
                title: '费用支付成功',
                desc: '您的行程将在2021.9.9 12:30 开始'
            });
        });
    });
};
const html = () => {
    Notice.open({
        title: 'HTML片段',
        desc: `<strong>这是 <i>HTML</i> 片段</strong>`,
        dangerouslyUseHTMLString: true
    });
};
const closable = () => {
    Notice.open({
        title: '这是通知标题',
        closable: false
    });
};
</script>