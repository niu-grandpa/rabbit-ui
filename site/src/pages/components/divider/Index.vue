<template>
    <article class="markdown">
        <Describe title="Divider 分割线" desc="区隔内容的分割线。" name="Divider">
            <li>对不同章节的文本段落进行分割。</li>
            <li>对行内文字/链接进行分割，例如表格的操作列。</li>
        </Describe>
        <Example next-title="垂直分割线">
            <template #content>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <r-divider></r-divider>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <r-divider>标题居中</r-divider>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <r-divider dashed="true"></r-divider>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <p>水平分割线，默认为水平分割线，可在中间加入文字。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="标题位置">
            <template #content>
                文本
                <r-divider type="vertical"></r-divider>
                <a href="#">链接</a>
                <r-divider type="vertical"></r-divider>
                <a href="#">链接</a>
                <p>使用 <code>type="vertical"</code> 设置为行内的垂直分割线。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="分割文字使用正文样式">
            <template #content>
                <r-divider orientation="left">左侧标题</r-divider>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <r-divider orientation="right">右侧标题</r-divider>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <p>修改分割线标题的位置。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example>
            <template #content>
                <r-divider plain="true">标题居中</r-divider>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <r-divider plain="true" orientation="left">右侧标题</r-divider>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <r-divider plain="true" orientation="right">右侧标题</r-divider>
                <p>
                    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
                </p>
                <p>使用 <code>plain</code> 可以设置为更轻量的分割文字样式。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Code5 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Divider from 'rabbitui/divider';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5 } from '../markdown-code/divider';

onMounted(() => {
    new Divider();
});
</script>
