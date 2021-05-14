<template>
  <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="5" :xxl="4" id="app-sider">
    <section class="app-sider-menu-inner">
      <a-menu :selectedKeys="current" mode="inline">
        <!-- 文档选项列表 -->
        <template v-if="show">
          <a-menu-item v-for="item in DOCSLIST" :key="item.path">
            <router-link :to="item.path">{{ item.text }}</router-link>
          </a-menu-item>
        </template>
        <!-- 组件选项列表 -->
        <template v-else>
          <a-menu-item v-for="item in COMPONENTSLIST" :key="item.path">
            <router-link :to="item.path">{{ item.text }}</router-link>
          </a-menu-item>
        </template>
      </a-menu>
    </section>
  </a-col>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { DOCSLIST, COMPONENTSLIST } from '../../../router-link-list'

const route = useRoute()
const show = ref<boolean>()
const current = ref<string[]>([route.path])

const changeOptionList = () => {
  const { path } = route
  if (path.includes('/docs/')) {
    show.value = true
  } else if (path.includes('/components/')) {
    show.value = false
  }
}

const changeActiveLink = () => {
  const curArr = current.value!
  curArr.length = 0
  curArr.push(route.path)
}

watchEffect(() => {
  changeActiveLink()
  changeOptionList()
})
</script>

<style lang="less">
#app-sider {
  width: 100%;
  position: fixed;
  top: 75px;
  bottom: 0;
  left: 0;

  &:hover {
    overflow-y: auto;
  }

  .app-sider-menu-inner {
    max-height: 100vh;

    .ant-menu-inline {
      height: 100%;

      > .ant-menu-item {
        padding-left: 40px !important;

        a {
          color: #515a6e;

          &:hover {
            color: #1890ff;
          }
        }

        &-selected {
          a {
            color: #1890ff;
          }
        }
      }
    }
  }
}
</style>