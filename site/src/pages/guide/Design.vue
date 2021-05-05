<template>
    <article class="markdown">
        <h1>参与贡献</h1>
        <Anchor title="开发规范" />
        <p>
            贡献代码前请务必先与作者联系
            <a :href="'mailto:' + email">{{ email }}</a>
            ， 确定好开发内容和 API，以免产生不必要或重复的工作。
        </p>
        <h3>使用之前</h3>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Anchor from '../../components/anchor/Index.vue';

const email = ref<string>('2864103063@qq.com');
</script>

<style lang="less" scope>
</style>