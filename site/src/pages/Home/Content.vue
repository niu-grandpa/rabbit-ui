<template>
    <div class="app-index-home-content">
        <figure class="figure">
            <img :src="Logo" alt="logo" />
        </figure>
        <h1 class="title">Rabbit UI</h1>
        <p class="desc">一个基于原生Javascript编写的轻量级UI插件库</p>
        <router-link to="/docs/introduce" class="home-link">
            <el-button type="primary" round>开始使用</el-button>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import Logo from 'assets/logo.svg';
</script>

