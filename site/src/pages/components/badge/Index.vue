<template>
    <article class="markdown">
        <Describe title="Badge 徽标数" desc="图标右上角的圆形徽标数字。" name="Badge">
            <li>
                一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。
            </li>
        </Describe>
        <Example next-title="小红点">
            <template #content>
                <r-badge count="3">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="0" show-zero="true">
                    <a class="demo-badge"></a>
                </r-badge>
                <p>
                    简单的徽章展示，当 <code>count</code> 为
                    <code>0</code> 时，默认不显示，可以设置属性
                    <code>show-zero="true"</code> 修改为显示。
                </p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="封顶数字">
            <template #content>
                <r-badge dot="true">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge dot="true">
                    <i
                        class="rab-icon rab-icon-ios-notifications-outline"
                        style="font-size: 26px"
                    ></i>
                </r-badge>
                <r-badge dot="true">
                    <a>可以是一个链接</a>
                </r-badge>
                <p>没有具体的数字。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="独立使用及自定义样式">
            <template #content>
                <r-badge count="99">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="100">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="99" max-count="10">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="1000" max-count="999">
                    <a class="demo-badge"></a>
                </r-badge>
                <p>
                    超过 <code>maxCount</code> 的会显示为 <code>${maxCount}+</code>，默认的
                    <code>maxCount</code> 为 <code>99</code>。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="自定义内容">
            <template #content>
                <r-badge count="25"></r-badge>
                <r-badge count="15" class="demo-badge-alone"></r-badge>
                <p>不包裹任何元素即是独立使用，可自定样式展现。在右上角的 badge 则限定为红色。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="自定义位置">
            <template #content>
                <r-badge text="new">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge text="hot">
                    <a class="demo-badge"></a>
                </r-badge>
                <p>设置 <code>text</code> 属性，可以自定义显示内容。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example next-title="状态点">
            <template #content>
                <r-badge count="3" offset="[5,10]">
                    <a class="demo-badge"></a>
                </r-badge>
                <p>设置 <code>offset</code> 属性，可以自定义徽标的位置</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Example next-title="多彩徽标">
            <template #content>
                <r-badge status="success"></r-badge>
                <r-badge status="error"></r-badge>
                <r-badge status="default"></r-badge>
                <r-badge status="processing"></r-badge>
                <r-badge status="warning"></r-badge>
                <r-badge status="error"></r-badge>
                <br />
                <r-badge status="success" text="Success"></r-badge>
                <br />
                <r-badge status="error" text="Error"></r-badge>
                <br />
                <r-badge status="default" text="Default"></r-badge>
                <br />
                <r-badge status="processing" text="Processing"></r-badge>
                <br />
                <r-badge status="warning" text="Warning"></r-badge>
                <p>用于表示状态的小圆点。</p>
            </template>
            <template #code><Code7 /></template>
        </Example>
        <Example next-title="预设颜色">
            <template #content>
                <strong>预设：</strong>
                <br />
                <r-badge color="blue" text="blue"></r-badge> <br />
                <r-badge color="green" text="green"></r-badge> <br />
                <r-badge color="red" text="red"></r-badge> <br />
                <r-badge color="yellow" text="yellow"></r-badge> <br />
                <r-badge color="pink" text="pink"></r-badge> <br />
                <r-badge color="magenta" text="magenta"></r-badge> <br />
                <r-badge color="volcano" text="volcano"></r-badge> <br />
                <r-badge color="orange" text="orange"></r-badge> <br />
                <r-badge color="gold" text="gold"></r-badge> <br />
                <r-badge color="lime" text="lime"></r-badge> <br />
                <r-badge color="cyan" text="cyan"></r-badge> <br />
                <r-badge color="geekblue" text="geekblue"></r-badge> <br />
                <r-badge color="purple" text="purple"></r-badge> <br />
                <br />
                <strong>自定义：</strong>
                <br />
                <r-badge color="#2db7f5" text="#2db7f5"></r-badge> <br />
                <p>属性 <code>color</code> 可以设置更多预设的状态点颜色，或者自定义颜色。</p>
            </template>
            <template #code><Code8 /></template>
        </Example>
        <Example>
            <template #content>
                <r-badge count="6" type="primary">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="6" type="success">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="6" type="normal">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="6" type="info">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="6" type="error">
                    <a class="demo-badge"></a>
                </r-badge>
                <r-badge count="6" type="warning">
                    <a class="demo-badge"></a>
                </r-badge>
                <p>使用 <code>type</code> 属性，可以设置不同的颜色。</p>
            </template>
            <template #code><Code9 /></template>
        </Example>
        <Code10 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Badge from 'rabbitui/badge';
import Anchor from 'comps/anchor/Index.vue';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import {
    Code1,
    Code2,
    Code3,
    Code4,
    Code5,
    Code6,
    Code7,
    Code8,
    Code9,
    Code10
} from '../markdown-code/badge';

onMounted(() => {
    new Badge();
});
</script>

<style lang="less" scope>
.markdown {
    r-badge {
        margin-left: 15px;
        vertical-align: top;
    }

    .demo-badge {
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;

        &-alone sup {
            background: #5cb85c !important;
        }
    }

    .badge-status r-badge {
        margin-left: 3px;
    }
}
</style>