<template>
  <!-- 文档 & 组件 -->
  <NavRouterLink />
  <!-- 更多 -->
  <a-dropdown>
    <template #overlay>
      <NavMore />
    </template>
    <a-button size="small" class="more-btn">
      更多
      <DownOutlined />
    </a-button>
  </a-dropdown>
  <!-- GitHub 按钮 -->
  <span class="github-link">
    <a href="https://github.com/niu-grandpa/rabbit-ui" target="_blank" rel="noopener noreferrer">
      <GithubOutlined class="gh-btn" /> GitHub
    </a>
  </span>
</template>

<script lang="ts" setup>
import { DownOutlined, GithubOutlined } from '@ant-design/icons-vue'
import NavRouterLink from './NavRouterLink.vue'
import NavMore from './NavMore.vue'
</script>


