<template>
    <el-card shadow="hover">
        <slot name="content"></slot>
        <div class="example-code">
            <el-collapse>
                <el-collapse-item>
                    <slot name="code"></slot>
                </el-collapse-item>
            </el-collapse>
        </div>
    </el-card>
    <br />
    <template v-if="props.nextTitle">
        <el-divider content-position="left">{{ props.nextTitle }}</el-divider>
    </template>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    nextTitle: String
});
</script>


