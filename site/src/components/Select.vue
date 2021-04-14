<template>
    <el-select v-model="value" placeholder="选择组件...">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </el-select>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
    props: {
        data: Array
    }
});
</script>

<style>
</style>