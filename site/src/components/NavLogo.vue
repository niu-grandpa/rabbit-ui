<template>
  <h1 class="header-nav-logo">
    <router-link to="/" class="header-nav-logo-link">
      <img :src="Logo" width="32" height="32" alt="logo" />
      Rabbit UI
    </router-link>
  </h1>
</template>

<script setup>
import Logo from '@/assets/logo.svg'
</script>

<style lang="less">
.header-nav-logo {
  margin-bottom: 0;
  text-align: center;

  &-link {
    height: 64px;
    overflow: hidden;
    color: inherit;
    font-size: 18px;
    line-height: 64px;
    white-space: nowrap;

    &:hover {
      color: inherit;
    }

    img {
      position: relative;
      top: -1.5px;
      margin-right: 16px;
    }
  }
}
</style>