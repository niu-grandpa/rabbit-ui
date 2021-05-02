<template>
    <article class="markdown">
        <Describe title="BackTop 回到顶部" desc="返回页面顶部的操作按钮。" name="BackTop">
            <li>当页面内容区域比较长时。</li>
            <li>当用户需要频繁返回顶部查看相关内容时。</li>
        </Describe>

        <p>向下滚动页面，灰色的按钮为默认效果，蓝色的按钮为自定义效果。</p>
        <Example next-title="自定义样式">
            <template #content>
                <p>默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example>
            <template #content>
                <r-back-top height="100" bottom="200">
                    <div class="top">返回顶端</div>
                </r-back-top>
                <p>自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Code3 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import BackTop from '../../../../../src/components/back-top';
import { Describe, Example } from '../../../components/index';
import { Code1, Code2, Code3 } from '../markdown-code/back-top';

onMounted(() => {
    new BackTop();
});
</script>

<style lang="less" scoped>
.top {
    padding: 10px;
    background: rgba(0, 153, 229, 0.7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
}
</style>