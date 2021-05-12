<template>
  <Header />
  <HomePage v-if="show" />
  <AppPage v-else />
  <r-back-top />
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import BackTop from '../../src/components/back-top'
import { Header } from './components'
import { HomePage, AppPage } from './pages'

const route = useRoute()
const show = ref<boolean>(true)

const changePage = () => {
  const { path } = route
  // 显示文档的详情页面，隐藏首页
  if (path.includes('/docs/') || path.includes('/components/')) {
    show.value = false
  } else {
    show.value = true
  }
}

onMounted(() => new BackTop())
watchEffect(changePage)
</script>


<style lang="less">
@import '../../dist/styles/rabbit.css';
</style>