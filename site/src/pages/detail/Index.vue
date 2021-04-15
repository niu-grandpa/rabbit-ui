<template>
    <el-container>
        <Slider :docs="props.docs" />
        <Content />
    </el-container>
</template>

<script lang="ts" setup>
import Slider from './Slider.vue';
import Content from './Content.vue';
import { defineProps } from 'vue';

const props = defineProps({
    docs: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="less" scope>
.app {
    &-left {
        position: fixed;
        top: 64px;
        left: 0;
        bottom: 0;
        border-right: 1px solid #e6e6e6;
        overflow: hidden;

        &:hover {
            overflow-y: auto;
        }

        .el-menu {
            border-right: none;
        }

        .comp {
            &-link {
                &-menu {
                    padding-top: 15px;
                }
                &-item {
                    padding-left: 50px !important;
                }
            }
        }
    }

    &-right {
        margin-left: 315px;
    }
}
</style>