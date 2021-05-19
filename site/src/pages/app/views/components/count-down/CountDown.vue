<template>
  <article class="markdown">
    <ExampleHeaderArea name="CountDown" title="倒计时" desc="根据设置目标时间来倒计时的组件。">
      <li>当页面某个部分或功能需要进行倒计时</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-count-down id="test1" /><br />
        <r-count-down id="test2" />
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>最简单的用法</p>
        <p>设置的时间格式为<code>YYYY/MM/DD HH:mm:ss</code>或<code>YYYY-MM-DD HH:mm:ss</code></p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CountDown from '../../../../../../../src/components/count-down'
import Message from '../../../../../../../src/components/message'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../../components'
import { Basic, APITable } from '../../../../../examples-code/components/count-down'

let countDown: CountDown

const date = new Date()
const YYMMDD = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
const h = date.getHours()
const mm = date.getMinutes()

onMounted(() => {
  countDown = new CountDown()
  countDown.config('#test1').endTime = `${YYMMDD} ${h + 1}:00:00`
  countDown.config('#test2').endTime = `${YYMMDD} ${h}:${mm + 1}:00`
  countDown.config('#test2').events({
    onStop: (stop) => {
      if (stop) Message.info('倒计时结束！')
    }
  })
})

const anchors: string[] = ['基础用法', 'API']
</script>