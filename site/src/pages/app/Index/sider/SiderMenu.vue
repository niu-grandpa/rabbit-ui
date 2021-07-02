<template>
  <a-menu :selectedKeys="current" mode="inline">
    <!-- 文档选项列表 -->
    <template v-if="show">
      <a-menu-item v-show="show" v-for="item in DOCSLIST" :key="item.path">
        <router-link :to="item.path">{{ item.text }}</router-link>
      </a-menu-item>
    </template>
    <!-- 组件选项列表 -->
    <template v-else>
      <a-menu-item v-show="!show" v-for="item in COMPONENTSLIST" :key="item.path">
        <router-link :to="item.path">{{ item.text }}</router-link>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { DOCSLIST, COMPONENTSLIST } from "../../../../router-link-list";

const route = useRoute();
const show = ref<boolean>(false);
const current = ref<string[]>([route.path]);

const changeOptionList = () => {
  const { path } = route;
  if (path.includes("/docs/")) {
    show.value = true;
  } else if (path.includes("/components/")) {
    show.value = false;
  }
};

const changeActiveLink = () => {
  const curArr = current.value!;
  curArr.splice(0, 1, route.path);
};

watchEffect(() => {
  changeActiveLink();
  changeOptionList();
});
</script>
