<template>
    <article class="markdown">
        <Describe
            title="Jumbotron 巨幕"
            desc="用于排版和分行，以便在较大的容器中分隔内容。"
            name="Jumbotron"
        >
            <li>当需要展示巨大的标题和段落时使用。</li>
        </Describe>
        <Example next-title="外观">
            <template #content>
                <r-jumbotron
                    title="Hello, world!"
                    sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！"
                >
                    <div>
                        <hr style="margin-bottom: 1.5rem" />
                        <p>它使用实用程序类来排版和空格，以便在较大的容器中分隔内容。</p>
                        <button class="rab-btn rab-btn-primary rab-btn-lg">了解更多</button>
                    </div>
                </r-jumbotron>
                <p>最简单的用法，如果添加额外内容则标签容器下必须具有一个父元素</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example>
            <template #content>
                <r-jumbotron
                    type="light"
                    title="Hello, world!"
                    sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！"
                >
                </r-jumbotron>

                <r-jumbotron
                    type="dark"
                    title="Hello, world!"
                    sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！"
                >
                </r-jumbotron>
                <p>通过设置属性 <code>type</code> 切换外观背景色</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Code3 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Jumbotron from '../../../../../src/components/jumbotron';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2, Code3 } from '../markdown-code/jumbotron';

onMounted(() => {
    new Jumbotron();
});
</script>

<style lang="less">
.markdown {
    .rab-jumbotron-title {
        font-size: 3.5rem !important;
    }
}
</style>