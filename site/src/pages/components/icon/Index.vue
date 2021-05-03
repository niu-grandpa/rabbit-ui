<template>
    <article class="markdown">
        <h1>Icon 图标</h1>
        <Anchor title="概述" />
        <p>
            Rabbit UI 的图标来源于开源图标库
            <a href="https://www.iconfont.cn/" target="_blank">iconfont</a>
        </p>
        <Anchor title="图标列表" />
        <div class="icon-search">
            <el-input
                v-model="input"
                size="medium"
                clearable
                placeholder="输入英文关键词搜索，比如 success"
            ></el-input>
            <p>点击下面的图标可以直接复制代码</p>
            <IconList />
        </div>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Describe, Example, Anchor } from '../../../components/index';
import IconList from './IconsList.vue';

const input = ref<string>('');
</script>


<style lang="less" scoped>
.icon-search {
    position: relative;
    margin: 20px auto 30px;
    text-align: center;

    .el-input {
        width: 500px;
    }

    p {
        margin: 20px 0 30px;
    }
}
</style>