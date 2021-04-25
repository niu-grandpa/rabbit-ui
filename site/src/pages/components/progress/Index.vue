<template>
    <article class="markdown">
        <Describe
            title="Progress 警告提示"
            desc="用于展示操作进度，告知用户当前状态和预期。"
            name="Progress"
        >
            <li>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</li>
            <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；</li>
            <li>当需要显示一个操作完成的百分比时</li>
        </Describe>
        <Example next-title="百分比内显">
            <template #content>
                <r-progress percent="30"></r-progress>
                <r-progress percent="50" status="active"></r-progress>
                <r-progress percent="70" status="wrong"></r-progress>
                <r-progress percent="100" status="success"></r-progress>
                <r-progress percent="50" status="warning"></r-progress>
                <r-progress percent="50" show-text="false"></r-progress>
                <p>标准的进度条。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="渐变色">
            <template #content>
                <r-progress text-inside="true" stroke-width="20" percent="30"></r-progress>

                <r-progress text-inside="true" stroke-width="20" percent="70" status="active">
                </r-progress>

                <r-progress text-inside="true" stroke-width="20" percent="100" status="success">
                </r-progress>

                <r-progress text-inside="true" stroke-width="20" percent="80" status="warning">
                </r-progress>

                <r-progress text-inside="true" stroke-width="20" percent="50" status="wrong">
                </r-progress>
                <p>设置属性 <code>text-inside="true"</code> 可以将百分比显示在进度条内部。</p>
                <p>需要通过属性 <code>stroke-width</code> 设置一个足够的高度。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="分段进度条">
            <template #content>
                <r-progress percent="99" stroke-color="['#108ee9', '#87d068']"></r-progress>
                <r-progress percent="99" stroke-color="['#108ee9', '#87d068']" status="active">
                </r-progress>
                <p>设置属性 <code>stroke-color</code> 为数组时，可以显示为渐变色。</p>
                <p>数组只能设置为两项。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example>
            <template #content>
                <r-progress percent="60" success-percent="30"></r-progress>
                <p>标准的进度条。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Code5 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Progress from 'rabbitui/progress';
import Anchor from 'comps/anchor/Index.vue';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5 } from '../markdown-code/progress';

onMounted(() => {
    new Progress();
});
</script>
