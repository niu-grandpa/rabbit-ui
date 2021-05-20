<template>
  <article class="markdown">
    <h1>LoadingBar 加载进度条</h1>
    <blockquote>
      特别提醒： 非 NPM 环境下调用实例方法必须添加<code>Rabbit</code>前缀，反之则无需。
    </blockquote>
    <h2>概述</h2>
    <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。</p>
    <h2>说明</h2>
    <p>
      LoadingBar
      只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar
      会模拟进度，当然也可以通过<code>update()</code>方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。
    </p>
    <p>在路由中使用 </p>
    <UsedInRoute />
    <p>在异步请求中使用</p>
    <UseInAsync />
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="start">开始</button>
        <button type="button" class="rab-btn" @click="finish">完成</button>
        <button type="button" class="rab-btn" @click="error">错误</button>
      </template>
      <template #header><span id="基本用法">基本用法</span></template>
      <template #desc>
        点击 Start 开始进度，点击 Finish
        结束。在调用<code>start()</code>方法后，组件会自动模拟进度，当调用<code>finish()</code>或<code>error()</code>时，补全进度并自动消失。
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import Loading from '../../../../../src/components/loading-bar'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  UsedInRoute,
  UseInAsync,
  APITable
} from '../../../examples-code/components/loading-bar'

const anchors: string[] = ['基础用法', 'API']
const start = () => {
  Loading.start()
}
const finish = () => {
  Loading.finish()
}
const error = () => {
  Loading.error()
}
</script>