<template>
    <article class="markdown">
        <Describe title="CountDown 倒计时" desc="根据设置目标时间来倒计时的组件。" name="CountDown">
            <li>当页面某个部分或功能需要进行倒计时</li>
        </Describe>
        <Example>
            <template #content>
                <r-count-down id="test1"></r-count-down>
                <br />
                <r-count-down id="test2"></r-count-down>
                <p>最简单的用法</p>
                <p>
                    设置的时间格式为 <code>YYYY/MM/DD HH:mm:ss</code> 或
                    <code>YYYY-MM-DD HH:mm:ss</code>
                </p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Code2 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import CountDown from '../../../../../src/components/count-down';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2 } from '../markdown-code/count-down';

onMounted(() => {
    const countDown = new CountDown();

    const date = new Date();
    const YYMMDD = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    const h = date.getHours();
    const mm = date.getMinutes();

    // 'YY/MM/DD hh:mm:ss'
    countDown.config('#test1').endTime = `${YYMMDD} ${h + 1}:00:00`;
    countDown.config('#test2').endTime = `${YYMMDD} ${h}:${mm + 1}:00`;
    countDown.config('#test2').events({
        onStop: (stop: boolean) => {
            if (stop) alert('倒计时结束!');
        }
    });
});
</script>