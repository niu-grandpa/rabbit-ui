<template>
    <h1>{{ props.title }}</h1>
    <p>{{ props.desc }}</p>
    <Anchor title="何时使用" />
    <ul>
        <slot></slot>
    </ul>
    <h2>代码示例</h2>
    <Tip :name="props.name" />
    <el-divider content-position="left">基础用法</el-divider>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import Anchor from 'comps/anchor/Index.vue';
import Tip from 'pages/components/markdown-code/tip/Index.vue';

const props = defineProps({
    title: String,
    desc: String,
    name: String
});
</script>