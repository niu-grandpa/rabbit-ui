<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Avatar"
      title="头像"
      desc="用来代表用户或事物，支持图片、图标或字符展示。"
      :showWhenToUse="false"
    />
    <CodeBox>
      <template #case>
        <r-avatar icon="md-person" size="64" />
        <r-avatar icon="md-person" size="large" />
        <r-avatar icon="md-person" />
        <r-avatar icon="md-person" size="small" />
        <br />
        <r-avatar icon="md-person" shape="square" size="64" />
        <r-avatar icon="md-person" shape="square" size="large" />
        <r-avatar icon="md-person" shape="square" />
        <r-avatar icon="md-person" shape="square" size="small" />
      </template>
      <template #header>
        <span id="基础用法">基础用法</span>
      </template>
      <template #desc>
        <p>头像有三种尺寸，两种形状可选。</p>
        <p>属性 <code>size</code> 可以设置为数值，但不能带任何单位只能是数字</p>
      </template>
      <template #code>
        <Basic />
      </template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-avatar icon="md-person"></r-avatar>
        <r-avatar>U</r-avatar>
        <r-avatar>USER</r-avatar>
        <r-avatar style="color: #f56a00; background-color: #fde3cf">U</r-avatar>
        <r-avatar src="https://avatars3.githubusercontent.com/u/62378518" />
        <r-avatar style="background-color: #87d068" icon="md-person" />
      </template>
      <template #header>
        <span id="类型">类型</span>
      </template>
      <template #desc>
        <p>支持三种类型：图片、icon 以及字符，其中 icon 和字符型可以自定义图标颜色及背景色。</p>
      </template>
      <template #code>
        <Type />
      </template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-avatar style="background-color: #f56a00">U</r-avatar>
        <r-avatar style="background-color: #7265e6">Lucy</r-avatar>
        <r-avatar style="background-color: #ffbf00">Tom</r-avatar>
        <r-avatar style="background-color: #00a2ae">Edward</r-avatar>
      </template>
      <template #header>
        <span id="自动调整字符大小">自动调整字符大小</span>
      </template>
      <template #desc>
        <p>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。</p>
      </template>
      <template #code>
        <AutoFontSize />
      </template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Avatar from '../../../../../../../src/components/avatar'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../../components'
import { Basic, Type, AutoFontSize, APITable } from '../../../../../examples-code/components/avatar'

onMounted(() => new Avatar())

const anchors: string[] = ['基础用法', '类型', '自动调整字符大小', 'API']
</script>

<style lang="less" scoped>
r-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
</style>