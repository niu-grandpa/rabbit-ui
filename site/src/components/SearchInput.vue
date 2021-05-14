<template>
  <a-select
    v-model="value"
    show-search
    placeholder="搜索组件..."
    not-found-content="没有找到相关组件"
    style="width: 200px"
    allowClear
    :bordered="false"
    :showArrow="false"
    :filter-option="filterOption"
  >
    <template #suffixIcon><SearchOutlined /></template>
    <a-select-option v-for="item in COMPONENTSLIST" :key="item.text">
      <router-link :to="item.path">{{ item.text }}</router-link>
    </a-select-option>
  </a-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { COMPONENTSLIST } from '../router-link-list'
import { SearchOutlined } from '@ant-design/icons-vue'

const value = ref<string | undefined>(undefined)
const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
}
</script>

<style lang="less" scope>
.ant-select-item {
  a {
    width: 100%;
    color: inherit;
    display: inline-block;

    &:hover {
      color: inherit;
    }
  }
}
</style>