<template>
  <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="5" :xxl="4" id="app-sider">
    <section class="app-sider-menu-inner">
      <SiderMenu />
      <a-drawer class="drawer-left" placement="left" :closable="false" :visible="visible">
        <SiderMenu />
        <template #handle>
          <div class="drawer-handle" @click="handleVisible">
            <MenuOutlined v-if="!visible" />
            <CloseOutlined v-else />
          </div>
        </template>
      </a-drawer>
    </section>
  </a-col>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons-vue'
import SiderMenu from './SiderMenu.vue'

const visible = ref<boolean>(false)
const handleVisible = () => (visible.value ? (visible.value = false) : (visible.value = true))
</script>

<style lang="less" scope>
#app-sider {
  width: 100%;
  position: fixed;
  top: 75px;
  bottom: 0;
  left: 0;
  border-right: 1px solid #e8eaec;

  &:hover {
    overflow-y: auto;
  }

  .app-sider-menu-inner {
    height: 100%;
    max-height: 100vh;

    .ant-menu-inline {
      @media only screen and (max-width: 767.99px) {
        display: none;
      }

      border-right-color: transparent;
      height: 100%;

      > .ant-menu-item {
        padding-left: 60px !important;

        a {
          color: #333;

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

.drawer-left {
  display: none;

  @media only screen and (max-width: 767.99px) {
    display: inherit;

    .ant-menu-inline {
      .ant-menu-item::after {
        right: auto;
        left: 0;
      }
    }
  }

  .ant-drawer-body {
    padding: 0;
  }

  .drawer-handle {
    right: -40px;
    border-radius: 0 4px 4px 0;
    box-shadow: 2px 0 8px rgb(0 0 0 / 15%);
  }
}

.drawer-handle {
  position: absolute;
  top: 72px;
  width: 41px;
  height: 40px;
  cursor: pointer;
  z-index: 0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
</style>