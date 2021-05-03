<template>
    <el-row :gutter="12">
        <el-col :span="props.span" v-for="item in props.data" :key="item.name">
            <el-card class="demo-color-card" shadow="hover" :style="{ background: item.desc }">
                <div class="demo-color-name" :class="{ dark: item.dark }">{{ item.name }}</div>
                <div class="demo-color-desc" :class="{ dark: item.dark }">{{ item.desc }}</div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script  setup>
import { defineProps } from 'vue';

const props = defineProps({
    span: {
        type: Number,
        default: 8
    },
    data: Array
});
</script>

<style lang="less">
.demo-color {
    &-card {
        height: 84px;
        margin: 10px 0;
        border: none;

        .el-card__body {
            padding: 14px;
        }
    }

    &-name,
    &-desc {
        color: #fff;
        &.dark {
            color: #657180;
        }
    }

    &-name {
        font-size: 16px;
    }

    &-desc {
        opacity: 0.7;
    }
}
</style>