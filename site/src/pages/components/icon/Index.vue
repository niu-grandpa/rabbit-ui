<template>
    <article class="markdown">
        <h1>Icon 图标</h1>
        <Anchor title="概述" />
        <p>
            Rabbit UI 的图标来源于阿里巴巴的开源图标库
            <a href="https://www.iconfont.cn/" target="_blank">iconfont</a>
        </p>
        <Anchor title="使用方法" />
        <p>直接通过设置类名为 <code>rab-icon rab-icon-iconName</code> 来使用即可。例如：</p>
        <Example>
            <template #content>
                <div class="demo-icon">
                    <i class="rab-icon rab-icon-ios-add-circle-outline"></i>
                    <i class="rab-icon rab-icon-ios-construct"></i>
                    <i class="rab-icon rab-icon-ios-color-filter"></i>
                    <button type="button" icon="ios-search" class="rab-btn rab-btn-primary">
                        <span>搜索</span>
                    </button>
                </div>
                <br />
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Anchor title="图标集合" />
        <IconList />
    </article>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Button from '../../../../../src/components/button';
import { Example, Anchor } from '../../../components/index';
import { Code1 } from '../markdown-code/icon';
import IconList from './IconsList.vue';

onMounted(() => new Button());
</script>

<style lang="less" scoped>
.demo-icon {
    .rab-icon {
        color: #55585e;
        margin: 0 20px;
        font-size: 26px;
        vertical-align: middle;
    }
}
</style>