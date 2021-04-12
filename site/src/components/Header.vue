<template>
    <el-header>
        <el-row>
            <el-col :span="12">
                <h1 class="logo-wrapper">
                    <router-link id="logo" to="/">
                        <img alt="logo" :src="logo" />Rabbit UI
                    </router-link>
                </h1>
            </el-col>
            <el-col :span="12"> </el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
    props: {
        logo: String
    },
    setup: () => {
        const state = reactive({});

        return toRefs(state);
    }
});
</script>

<style>
</style>