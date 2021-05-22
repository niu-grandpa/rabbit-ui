<template>
  <article class="markdown">
    <ExampleHeaderArea name="Drawer" title="抽屉" desc="屏幕边缘滑出的浮层面板。">
      <li>
        抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。
      </li>
      <li>
        当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
      </li>
      <li>当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <button class="rab-btn rab-btn-primary" @click="handleClick">Open</button>
        <r-drawer title="Basic Drawer" id="test1">
          <div>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
        </r-drawer>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc></template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn" @click="Top">Top</button>
        <button class="rab-btn" @click="Left">Left</button>
        <button class="rab-btn" @click="Bottom">Bottom</button>
        <button class="rab-btn" @click="Right">Right</button>
        <r-drawer id="test2" title="Basic Drawer" placement="top">
          <div>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
        </r-drawer>
        <r-drawer id="test3" title="Basic Drawer" placement="left">
          <div>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
        </r-drawer>
        <r-drawer id="test4" title="Basic Drawer" placement="bottom">
          <div>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
        </r-drawer>
        <r-drawer id="test5" title="Basic Drawer">
          <div>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
        </r-drawer>
      </template>
      <template #header><span id="自定义位置">自定义位置</span></template>
      <template #desc></template>
      <template #code><Custom /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div class="container">
          <button class="rab-btn rab-btn-primary" @click="openInner">Open Inner</button>
          <r-drawer title="Basic Drawer" id="test6" inner="true">
            <p>Some contents...</p>
          </r-drawer>
        </div>
      </template>
      <template #header><span id="在当前 DOM  内打开">在当前 DOM 内打开</span></template>
      <template #desc></template>
      <template #code><Inner /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn rab-btn-primary" @click="handleClick1">多层抽屉</button>
        <r-drawer id="test7" title="多层抽屉" width="512px">
          <button class="rab-btn rab-btn-primary" @click="handleClick2">打开第二层抽屉</button>
        </r-drawer>
        <r-drawer id="test8" title="第二层抽屉">
          <p>这是第二层抽屉。</p>
        </r-drawer>
      </template>
      <template #header><span id="多层抽屉">多层抽屉</span></template>
      <template #desc></template>
      <template #code><Multilayer /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Drawer from '../../../../../src/components/drawer'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Inner,
  Custom,
  Multilayer,
  APITable
} from '../../../examples-code/components/drawer'

let drawer: Drawer,
  visible = false,
  top = false,
  left = false,
  bottom = false,
  right = false,
  inner = false,
  first = false,
  second = false

onMounted(() => {
  drawer = new Drawer()
  drawer.config('#test1').events({
    onClose: () => {
      console.log('关闭抽屉')
    }
  })
})

const handleClick = () => {
  visible === false ? (visible = !visible) : visible
  drawer.config('#test1').visable = visible
}
const Top = () => {
  top === false ? (top = !top) : top
  drawer.config('#test2').visable = top
}

const Left = () => {
  left === false ? (left = !left) : left
  drawer.config('#test3').visable = left
}

const Bottom = () => {
  bottom === false ? (bottom = !bottom) : bottom
  drawer.config('#test4').visable = bottom
}

const Right = () => {
  right === false ? (right = !right) : right
  drawer.config('#test5').visable = right
}

const openInner = () => {
  inner === false ? (inner = !inner) : inner
  drawer.config('#test6').visable = inner
}

const handleClick1 = () => {
  first === false ? (first = !first) : first
  drawer.config('#test7').visable = first
}

const handleClick2 = () => {
  second === false ? (second = !second) : second
  drawer.config('#test8').visable = second
}

const anchors: string[] = ['基础用法', '自定义位置', '在当前 DOM  内打开', '多层抽屉', 'API']
</script>

<style scope>
.container {
  width: 480px;
  height: 200px;
  margin: 20px auto;
  overflow: hidden;
  position: relative;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  padding: 48px;
  text-align: center;
  background: #fafafa;
}
</style>