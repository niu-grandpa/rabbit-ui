<template>
    <article class="markdown">
        <Describe title="Time 相对时间" desc="相对于当前时间。" name="Time">
            <li>常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。</li>
        </Describe>
        <Example next-title="自动更新间隔">
            <template #content>
                <r-time :time="baseTimeStr"></r-time>
                <br />
                <r-time :time="timeStr"></r-time>
                <p>为属性 <code>time</code> 设置一个时间戳或 Date，可自动转为相对于当前的时间。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="不同类型">
            <template #content>
                <r-time time="new Date()" interval="1"></r-time>
                <p>设置自动更新间隔，默认为 60 秒。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="锚点">
            <template #content>
                <r-time :time="timeStr"></r-time>
                <br />
                <r-time :time="timeStr" type="date"></r-time>
                <br />
                <r-time :time="timeStr" type="datetime"></r-time>
                <p>设置属性 <code>type</code> 可以根据情况，设置不同的显示类型。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example>
            <template #content>
                <r-time :time="timeStr" hash="#hash"></r-time>
                <p>设置 <code>hash</code> 属性，相对时间可以点击并定位锚点。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Code5 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Time from '../../../../../src/components/time';
import { Describe, Example } from '../../../components/index';
import { Code1, Code2, Code3, Code4, Code5 } from '../markdown-code/time';

const baseTimeStr = 'new Date().getTime() - 60 * 3 * 1000';
const timeStr = 'new Date().getTime() - 86400 * 3 * 1000';

onMounted(() => {
    new Time();
});
</script>
