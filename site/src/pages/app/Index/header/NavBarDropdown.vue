<template>
  <a-popover overlayClassName="popover-menu" placement="bottomRight">
    <template #content>
      <NavRouterLink direction="inline" />
      <a-menu>
        <a-menu-item style="padding-left: 24px">
          <a href="https://github.com/niu-grandpa/rabbit-ui" target="_blank">GitHub</a>
        </a-menu-item>
      </a-menu>
      <NavMore placement="left" />
    </template>
    <BarsOutlined id="nav-phone-icon" />
  </a-popover>
</template>

<script lang="ts" setup>
import { BarsOutlined } from '@ant-design/icons-vue'
import NavRouterLink from './NavRouterLink.vue'
import NavMore from './NavMore.vue'
</script>

<style lang="less">
.popover-menu {
  width: 300px;

  .ant-popover-inner-content {
    padding: 0;

    #nav {
      .ant-menu-item,
      .ant-menu-submenu {
        text-align: left;
      }
    }
  }
}

#nav-phone-icon {
  position: absolute;
  top: 25px;
  right: 30px;
  z-index: 1;
  display: none;
  width: 16px;
  height: 22px;
  cursor: pointer;

  @media only screen and (max-width: 767.99px) {
    display: block;
  }
}
</style>