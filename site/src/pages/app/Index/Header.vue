<template>
  <header class="app-header">
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
        <a-menu :selectedKeys="current" mode="horizontal" id="nav">
          <a-menu-item key="docs">
            <router-link to="/docs/introduce">文档</router-link>
          </a-menu-item>
          <a-menu-item key="components">
            <router-link to="/components/alert">组件</router-link>
          </a-menu-item>
        </a-menu>
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item-group title="赞助">
                <a-menu-item key="sponsor-wechat">
                  <a-popover placement="left">
                    <template #content>
                      <img
                        width="160"
                        height="160"
                        src="/src/assets/wechat-money.png"
                        alt="wechat-money"
                      />
                    </template>
                    <a>微信</a>
                  </a-popover>
                </a-menu-item>
                <a-menu-item key="sponsor-zfb">
                  <a-popover placement="left">
                    <template #content>
                      <img
                        width="160"
                        height="160"
                        src="/src/assets/zfb-money.jpg"
                        alt="zfb-money"
                      />
                    </template>
                    <a>支付宝</a>
                  </a-popover>
                </a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="交流">
                <a-menu-item key="qq">
                  <a-popover placement="left">
                    <template #content>
                      <img width="160" height="160" src="/src/assets/qq.png" alt="qq" />
                    </template>
                    <a>QQ (724617944)</a>
                  </a-popover>
                </a-menu-item>
              </a-menu-item-group>
            </a-menu>
          </template>
          <a-button size="small" class="more-btn">
            更多
            <DownOutlined />
          </a-button>
        </a-dropdown>
        <span class="github-link">
          <a
            href="https://github.com/niu-grandpa/rabbit-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined class="gh-btn" /> GitHub
          </a>
        </span>
      </a-col>
    </a-row>
  </header>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { NavLogo, SearchInput } from '../../../components'
import { SearchOutlined, DownOutlined, GithubOutlined } from '@ant-design/icons-vue'

const route = useRoute()
const current = ref<string>()

watchEffect(() => {
  route.path.includes('/components') ? (current.value = 'components') : (current.value = 'docs')
})
</script>

<style lang="less">
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