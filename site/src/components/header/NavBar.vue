<template>
    <el-menu mode="horizontal" :default-active="current">
        <el-menu-item index="1">
            <router-link to="/docs/introduce">文档</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/components/color">组件</router-link>
        </el-menu-item>
        <el-menu-item index="3">
            <a href="https://github.com/niu-grandpa/rabbit-ui" target="_blank">
                GitHub <i class="el-icon-top-right g-icon"></i>
            </a>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const current = ref('');

const setActiveLink = () => {
    if (route.path.indexOf('/docs') === 0) {
        current.value = '1';
    } else if (route.path.indexOf('/components') === 0) {
        current.value = '2';
    } else {
        current.value = '';
    }
};

watchEffect(() => setActiveLink());
</script>
