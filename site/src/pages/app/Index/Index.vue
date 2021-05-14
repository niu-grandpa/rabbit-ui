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
import AppHeader from './Header.vue'
import AppSider from './Sider.vue'
import AppContent from './Content.vue'
import { NavLogo, SearchInput } from '../../../components'
</script>

<style lang="less" scope>
.app-main-wrapper {
  position: relative;
  top: 75px;
  background: #fff;
}
</style>