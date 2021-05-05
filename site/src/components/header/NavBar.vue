<template>
    <el-menu mode="horizontal" :default-active="current">
        <el-menu-item index="0">
            <router-link to="/docs/introduce">文档</router-link>
        </el-menu-item>
        <el-menu-item index="1">
            <router-link to="/components/color">组件</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <a href="https://github.com/niu-grandpa/rabbit-ui" target="_blank">
                GitHub <i class="el-icon-top-right g-icon"></i>
            </a>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const current = ref<string>('');

const setActiveLink = () => {
    const { path } = route;
    if (path.indexOf('/docs/introduce') === 0) {
        current.value = '0';
    } else if (path.indexOf('/components/color') === 0) {
        current.value = '1';
    } else {
        current.value = '';
    }
};

nextTick(setActiveLink);
</script>
