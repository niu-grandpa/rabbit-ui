<template>
    <article class="markdown">
        <Describe title="Switch 开关" desc="开关选择器" name="Switch">
            <li>需要表示开关状态/两种状态之间的切换时</li>
            <li>
                和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox
                一般用于状态标记，需要和提交操作配合
            </li>
        </Describe>
        <Example next-title="尺寸">
            <template #content>
                <r-switch id="test"></r-switch>
                <p>基本用法，状态切换时会触发事件。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="文字和图标">
            <template #content>
                <r-switch size="large"></r-switch>
                <r-switch></r-switch>
                <r-switch size="small"></r-switch>
                <p>设置 <code>size="large"</code> 或 <code>small</code> 使用大号和小号的开关。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="不可用">
            <template #content>
                <r-switch open="开" close="关"></r-switch>
                <r-switch
                    open="<i class='rab-icon rab-icon-md-checkmark'></i>"
                    close="<i class='rab-icon rab-icon-md-close'></i>"
                >
                </r-switch>
                <br />
                <r-switch size="large" open="开启" close="关闭"></r-switch>
                <r-switch size="large" open="ON" close="OFF"></r-switch>
                <p>
                    设置属性 <code>open</code> 和
                    <code>close</code>
                    自定义切换状态后显示的内容，建议如果使用2个汉字，将开关尺寸设置为 large。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="加载中">
            <template #content>
                <r-switch disabled="true"></r-switch>
                <p>设置属性 <code>disabled="true"</code> 禁用开关</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="自定义颜色">
            <template #content>
                <r-switch loading="true" checked="true"></r-switch>
                <r-switch loading="true" size="small"></r-switch>
                <p>设置属性 <code>loading="true"</code> 标识开关操作仍在执行中。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example>
            <template #content>
                <r-switch true-color="#52c41a" false-color="#ff4d4f"></r-switch>
                <p>
                    设置属性 <code>true-color</code> 和 <code>false-color</code> 可以自定义背景色。
                </p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Code7 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Switch from 'rabbitui/switch';
import Message from 'rabbitui/message';
import Anchor from 'comps/anchor/Index.vue';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5, Code6, Code7 } from '../markdown-code/switch';

onMounted(() => {
    const _switch = new Switch();

    _switch.config('#test').events({
        onChange: (checked: boolean) => {
            Message.info(`开关状态: ${checked}`);
        }
    });
});
</script>

<style lang="less" scoped>
.markdown {
    r-switch {
        margin-right: 8px;
    }
}
</style>