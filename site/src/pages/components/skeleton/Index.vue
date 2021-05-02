<template>
    <article class="markdown">
        <Describe
            title="Skeleton 骨架屏"
            desc="在需要等待加载内容的位置提供一个占位图形组合。"
            name="Skeleton"
        >
            <li>网络较慢，需要长时间等待加载处理的情况下。</li>
            <li>图文信息内容较多的列表/卡片中。</li>
            <li>只在第一次加载数据的时候使用。</li>
            <li>
                可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。
            </li>
        </Describe>
        <Example next-title="复杂组合">
            <template #content>
                <r-skeleton></r-skeleton>
                <p>最简单的占位效果。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="动画效果">
            <template #content>
                <r-skeleton avatar="true" paragraph-rows="4"></r-skeleton>
                <p>带有头像占位图的组合。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="自定义段落占位图的宽度">
            <template #content>
                <r-skeleton active="true"></r-skeleton>
                <br />
                <r-skeleton active="true" avatar="true"></r-skeleton>
                <p>显示动画效果。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example>
            <template #content next-line="加载占位图">
                <r-skeleton paragraph-width="[60,80,100]"></r-skeleton>
                <p>设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example>
            <template #content>
                <div class="example">
                    <r-skeleton v-show="show"></r-skeleton>
                    <div class="article">
                        <div class="content" v-if="!show">
                            <h3>Vue.js, the progressive javascript framework</h3>
                            <p>
                                An incrementally adoptable ecosystem that scales between a library
                                and a full-featured framework. Blazing Fast Virtual DOM Minimal
                                Optimization Efforts
                            </p>
                        </div>
                        <button class="rab-btn" :disabled="show" @click="handleClick">
                            显示骨架图
                        </button>
                    </div>
                </div>
                <p>配合其他元素使用</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Code6 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Skeleton from '../../../../../src/components/skeleton';
import { Describe, Example } from '../../../components/index';
import { Code1, Code2, Code3, Code4, Code5, Code6 } from '../markdown-code/skeleton';

onMounted(() => {
    new Skeleton();
});

const show = ref<boolean>(false);

const handleClick = () => {
    show.value = true;
    setTimeout(() => {
        show.value = false;
    }, 3000);
};
</script>

<style lang="less" scoped>
.example {
    .article {
        h3 {
            margin-bottom: 16px;
        }

        button {
            margin-top: 16px;
        }
    }
}
</style>