<template>
  <header class="app-header">
    <NavBarDropdown />
    <a-row>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="4" :xxl="4">
        <NavLogo />
      </a-col>
      <a-col :xs="0" :sm="0" :md="18" :lg="18" :xl="19" :xxl="20" class="menu-row">
        <div id="search-box">
          <SearchOutlined />
          <span class="algolia-autocomplete">
            <SearchInput />
          </span>
        </div>
        <NavBar />
      </a-col>
    </a-row>
  </header>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { BarsOutlined, SearchOutlined } from '@ant-design/icons-vue'
import { NavLogo, SearchInput } from '../../../../components'
import NavBar from './NavBar.vue'
import NavBarDropdown from './NavBarDropdown.vue'
</script>

<style lang="less" scope>
.app {
  &-header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 8px #f0f1f2;
    background-color: #fff;

    .ant-row {
      flex-flow: nowrap;
    }

    .menu-row {
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0 16px 0 0;
      }
    }

    #search-box {
      position: relative;
      display: flex;
      flex: auto !important;
      align-items: center;
      height: 22px;
      margin: 0 auto 0 0 !important;
      padding-left: 16px;
      line-height: 22px;
      white-space: nowrap;
      border-left: 1px solid #f0f0f0;
      transition: width 0.5s;

      > * {
        flex: auto;
      }

      .anticon {
        position: absolute;
        top: 50%;
        z-index: 1;
        flex: none;
        color: #ced4d9;
        transform: translateY(-50%);
        pointer-events: none;
      }

      .algolia-autocomplete {
        width: 100%;
        max-width: 200px;
        padding-left: 10px;
      }
    }

    .more-btn:hover {
      color: inherit;
      border-color: #d9d9d9;
    }

    .github-link {
      margin-right: 40px;

      &:hover {
        color: inherit;
      }

      a {
        color: inherit;
        &:hover {
          color: inherit;
        }
      }

      .gh-btn {
        height: auto;
        padding: 1px 4px;
        background: 0 0;
        border: 0;
        vertical-align: bottom;

        svg {
          width: 18px;
          height: 18px;
          margin: 0;
        }
      }
    }
  }
}
</style>