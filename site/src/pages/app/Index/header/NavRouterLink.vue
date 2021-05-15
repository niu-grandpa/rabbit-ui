<template>
  <a-menu :selectedKeys="current" :mode="props.direction" id="nav">
    <a-menu-item key="docs">
      <router-link to="/docs/introduce">文档</router-link>
    </a-menu-item>
    <a-menu-item key="components">
      <router-link to="/components/alert">组件</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { defineProps, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { DownOutlined, GithubOutlined } from '@ant-design/icons-vue'

const route = useRoute()
const props = defineProps({
  direction: {
    type: String,
    default: 'horizontal'
  }
})
const current = ref<string[]>([route.path])

watchEffect(() => {
  if (route.path.includes('/docs')) {
    current.value!.splice(0, 1, 'docs')
  } else if (route.path.includes('/components')) {
    current.value!.splice(0, 1, 'components')
  }
})
</script>

<style lang="less">
#nav {
  height: 100%;
  font-size: 14px;
  border: 0;

  &.ant-menu-horizontal {
    border-bottom: none;

    > .ant-menu {
      &-item {
        min-width: 40px;
        height: 64px;
        margin-right: 12px;
        margin-left: 12px;
        line-height: 60px;
        border-top: 2px solid transparent;
        padding: 0;

        &:hover {
          border-top: 2px solid #1890ff;
          border-bottom: 2px solid transparent;
        }
      }

      &-item {
        &-selected {
          border-top: 2px solid #1890ff;
          border-bottom: 2px solid transparent;
        }
      }
    }
  }

  > .ant-menu {
    &-item,
    &-submenu {
      text-align: center;
    }
  }
}
</style>