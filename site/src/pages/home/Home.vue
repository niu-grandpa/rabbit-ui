<template>
  <main class="home">
    <section class="home-main">
      <header class="home-header-box">
        <div class="home-header">
          <NavLogo class="home-header-nav-logo" />
          <div class="home-search">
            <SearchInput />
          </div>
        </div>
      </header>
      <div class="home-middle">
        <div class="home-hero">
          <figure class="figure">
            <img src="src/assets/logo.svg" width="200" height="200" alt="logo" />
          </figure>
          <h1 class="title">Rabbit UI</h1>
          <p class="desc">一个基于 JavaScript 的简洁 UI 组件库</p>
          <div class="nav-link-group">
            <router-link to="/docs/introduce">
              <a-button type="primary" size="large" shape="round"> 开始使用 </a-button>
            </router-link>
            <a href="https://github.com/niu-grandpa/rabbit-ui" target="_blank">
              <a-button size="large" shape="round" class="ghost-btn">
                <template #icon><GithubOutlined /></template> GitHub
              </a-button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <footer class="home-copyright">
      <span>MIT Licensed | Copyright © 2021-present Ryan John</span>
    </footer>
  </main>
</template>

<script lang="ts" setup>
import { NavLogo, SearchInput } from '../../components/index'
import { GithubOutlined } from '@ant-design/icons-vue'
</script>

<style lang="less" scope>
.home {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  background-image: url(/src/assets/home-bg.png);
  background-repeat: no-repeat;
  overflow: hidden;

  &-main {
    width: 100%;
    height: 100%;
  }

  &-header-box {
    width: 100%;

    @media (max-width: 420px) {
      border-bottom: 1px solid #dcdee2;
    }
  }

  &-header {
    @media (max-width: 420px) {
      width: 100%;
      margin-left: -5%;
    }

    width: 1380px;
    height: 70px;
    margin-left: 8%;
    line-height: 70px;

    &-nav-logo {
      display: inline;
    }
  }

  &-middle {
    position: relative;
    height: 100%;
  }

  &-hero {
    margin: 2.5rem 0 2.75rem;
    padding: 0 1.5rem;
    text-align: center;

    @media (min-width: 420px) {
      margin: 3.5rem 0;
    }

    @media (min-width: 720px) {
      margin: 4rem 0 4.25rem;
    }

    .figure {
      padding: 0 1.5rem;

      img {
        display: block;
        margin: 0 auto;
        width: auto;
        max-width: 100%;
        max-height: 280px;
      }
    }

    .title {
      margin-top: 1rem;
      font-size: 2rem;
      color: #2c3e50;

      @media (min-width: 420px) {
        font-size: 3rem;
      }

      @media (min-width: 720px) {
        margin-top: 2rem;
      }
    }

    .desc {
      color: #476582;
      font-size: 1.2rem;
      margin-top: 10px;
      padding-left: 16px;

      @media (min-width: 420px) {
        line-height: 1.2;
        font-size: 1.6rem;
      }
    }

    .nav-link-group {
      margin-top: 1.3rem;
      display: inline-block;

      @media (min-width: 420px) {
        margin-top: 1.8rem;
        display: inline-block;
      }

      .ghost-btn {
        margin-left: 12px;
        color: #1890ff;
        border-color: #40a9ff;
        background-color: fade(#fff, 30%);

        &:hover {
          background-color: fade(#fff, 10%);
        }
      }
    }
  }

  &-logo {
    margin-right: 16px;

    &-text {
      position: relative;
      display: inline-block;
      font-size: 1.2rem;
      top: 4px;
    }
  }

  &-search {
    display: inline-block;
    margin-left: 32px;

    @media (max-width: 420px) {
      margin-left: 0;
    }

    .ant-select {
      width: 200px;
    }
  }

  &-copyright {
    @media (max-width: 420px) {
      font-size: 0.5rem;
    }

    width: 100%;
    position: fixed;
    bottom: 10px;
    text-align: center;
    color: #9ca0a8;

    a {
      color: inherit;
    }
  }
}
</style>