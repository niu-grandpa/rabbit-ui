<template>
  <div class="app-container">
    <AppHeader />
    <a-row class="app-main-wrapper">
      <AppSider />
      <AppContent />
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from './header/Header.vue'
import AppSider from './sider/Sider.vue'
import AppContent from './content/Content.vue'
</script>

<style lang="less" scope>
.app-main-wrapper {
  position: relative;
  top: 75px;
  background: #fff;
}
</style>