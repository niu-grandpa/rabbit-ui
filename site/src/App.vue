<template>
  <HomePage v-if="show" />
  <AppPage v-else />
  <r-back-top />
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import BackTop from '../../src/components/back-top'
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
@import './markdown.css';
@import 'ant-design-vue/dist/antd.css';
@import '../../dist/styles/rabbit.css';

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #e8eaec;
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: transparent;
}

.rab-btn {
  margin-right: 6px;
}
</style>