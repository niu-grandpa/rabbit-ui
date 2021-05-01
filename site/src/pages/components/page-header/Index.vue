<template>
    <article class="markdown">
        <Describe
            title="PageHeader 倒计时"
            desc="页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。"
            name="PageHeader"
        >
            <li>
                当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。
            </li>
        </Describe>
        <Example>
            <template #content>
                <r-page-header
                    id="test"
                    title="首页"
                    sub-title="这是副标题描述"
                    style="border: 1px solid #f0f0f0"
                >
                </r-page-header>
                <p>标准页头，适合使用在需要简单描述的场景。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Code2 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import PageHeader from '../../../../../src/components/page-header';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2 } from '../markdown-code/page-header';

onMounted(() => {
    const pg = new PageHeader();
    pg.config('#test').events({
        onBack: () => {
            console.log('Click back!');
        }
    });
});
</script>