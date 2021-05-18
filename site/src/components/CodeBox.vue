<template>
  <a-row class="code-box">
    <a-col class="code-box-demo" :span="24">
      <section class="code-box-case">
        <slot name="case" />
      </section>
      <header class="code-box-header">
        <span><slot name="header" /></span>
      </header>
      <section class="code-box-desc">
        <slot name="desc" />
      </section>
    </a-col>
    <div class="code-box-split"></div>
    <a-col class="code-box-code" :span="24">
      <section v-show="!show">
        <slot name="code" />
      </section>
      <section class="code-box-more" @click="handleShow">
        <DownOutlined v-show="show" />
        <UpOutlined v-show="!show" />
        <button type="button" class="rab-btn rab-btn-text" v-show="show">
          <span>显示代码</span>
        </button>
      </section>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue'

const show = ref<boolean>(true)
const handleShow = () => {
  show.value ? (show.value = false) : (show.value = true)
}
</script>


<style lang="less">
.code-box {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 7px rgb(0 0 0 / 15%);
    border-color: transparent;
    position: relative;
  }

  &-demo {
    padding: 20px 0;
    position: relative;
  }

  &-case {
    padding: 0 20px;
  }

  &-header {
    font-weight: 500;
    margin: 30px 0 10px;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #eee;
      position: absolute;
      top: 12px;
      left: 0;
    }

    span {
      display: inline-block;
      background: #fff;
      position: relative;
      margin-left: 14px;
      font-size: 14px;

      a {
        color: inherit;
      }
    }
  }

  &-desc {
    padding: 0 20px;

    p {
      text-align: justify;
      line-height: 1.7em;
    }

    code {
      font-size: 85%;
    }
  }

  &-split {
    width: 100%;
    position: relative;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    border: 1px dashed #f0f0f0;
    float: left;
  }

  &-code {
    padding: 0 10px;
    position: relative;
    overflow: hidden;
    transition: height 0.2s ease-in-out;

    pre.md-fences {
      font-size: 14px;
      background-color: #fff;
      border-color: transparent;
    }
  }

  &-more {
    position: relative;
    text-align: center;
    cursor: pointer;
    padding: 5px 0;

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      box-shadow: inset 0 -15px 30px #fff;
    }

    .anticon {
      position: relative;
      top: 2px;
      z-index: 2;
      font-size: 12px;
    }

    .rab-btn {
      padding: 0 4px 4px;
      position: relative;
      top: 2px;
      z-index: 2;
    }
  }
}
</style>