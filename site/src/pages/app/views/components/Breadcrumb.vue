<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Breadcrumb"
      title="面包屑"
      desc="显示当前页面在系统层级结构中的位置，并能向上返回。"
    >
      <li>当系统拥有超过两级以上的层级结构时；</li>
      <li>当需要告知用户『你在哪里』时；</li>
      <li>当需要向上导航的功能时。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-breadcrumb>
          <a href="#">Home</a>
          <a href="#">Components</a>
          <span>Breadcrumb</span>
        </r-breadcrumb>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>最简单的用法。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-breadcrumb>
          <div>
            <i class="rab-icon rab-icon-ios-home-outline"></i>
            <a href="#">Home</a>
          </div>
          <div>
            <i class="rab-icon rab-icon-logo-buffer"></i>
            <a href="#">Components</a>
          </div>
          <div>
            <i class="rab-icon rab-icon-ios-cafe"></i>
            <span>Breadcrumb</span>
          </div>
        </r-breadcrumb>
      </template>
      <template #header><span id="带图标">带图标</span></template>
      <template #desc>可自定义每项的内容，比如带有一个图标。</template>
      <template #code><WithIcon /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-breadcrumb separator=">">
          <a href="#">Home</a>
          <a href="#">Components</a>
          <span>Breadcrumb</span>
        </r-breadcrumb>

        <r-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
          <a href="#">Home</a>
          <a href="#">Components</a>
          <span>Breadcrumb</span>
        </r-breadcrumb>
      </template>
      <template #header><span id="分隔符">分隔符</span></template>
      <template #desc>
        通过设置<code>separator</code>属性来自定义分隔符，比如<code>&gt;</code>，也可以接受自定义的HTML字符串。
      </template>
      <template #code><Separator /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Breadcrumb from '../../../../../../src/components/breadcrumb'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../components'
import {
  Basic,
  WithIcon,
  Separator,
  APITable
} from '../../../../examples-code/components/breadcrumb'

onMounted(() => new Breadcrumb())

const anchors: string[] = ['基础用法', '带图标', '分隔符', 'API']
</script>

<style lang="less">
.demo-breadcrumb-separator {
  color: #ff5500;
  padding: 0 5px;
}
</style>