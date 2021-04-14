<template>
    <el-main>
        <div class="home-main-wrapper">
            <figure class="figure">
                <img :src="logo" alt="logo" />
            </figure>
            <h1 class="title">Rabbit UI</h1>
            <p class="desc">一个基于原生Javascript编写的轻量级UI插件库</p>
            <router-link to="/docs/introduce" class="home-link">
                <el-button type="primary" round>开始使用</el-button>
            </router-link>
        </div>
    </el-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Logo from 'assets/logo.svg';

import 'styles/home.less';

export default defineComponent({
    setup: () => {
        const state = reactive({
            logo: Logo
        });

        return toRefs(state);
    }
});
</script>