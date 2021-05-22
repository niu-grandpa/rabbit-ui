<template>
  <article class="markdown">
    <ExampleHeaderArea name="Checkbox" title="多选框" desc="多选框。">
      <li>在一组可选项中进行多项选择时；</li>
      <li>
        单独使用可以表示两种状态之间的切换，和<code>switch</code>类似。区别在于切换
        <code>switch</code>
        会直接触发状态改变，而<code>checkbox</code>一般用于状态标记，需要和提交操作配合。
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-checkbox>Checkbox</r-checkbox>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>简单的 checkbox</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-checkbox-group value="['facebook', 'github']">
          <r-checkbox label="twitter" icon="logo-twitter">Twitter</r-checkbox>
          <r-checkbox label="facebook" icon="logo-facebook">Facebook</r-checkbox>
          <r-checkbox label="github" icon="logo-github">Github</r-checkbox>
          <r-checkbox label="snapchat" icon="logo-snapchat">Snapchat</r-checkbox>
        </r-checkbox-group>
        <r-checkbox-group value="['西瓜']">
          <r-checkbox label="苹果">苹果</r-checkbox>
          <r-checkbox label="西瓜">西瓜</r-checkbox>
          <r-checkbox label="猕猴桃">猕猴桃</r-checkbox>
        </r-checkbox-group>
      </template>
      <template #header><span id="组合使用">组合使用</span></template>
      <template #desc>
        <p>
          使用<code>r-checkbox-group</code>配合数组来生成组合。在组合使用时，<code>r-checkbox</code>使用<code>label</code>来自动判断选中状态。
        </p>
      </template>
      <template #code><Group /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-checkbox checked="true" disabled>Checkbox</r-checkbox>
        <r-checkbox-group value="['西瓜']">
          <r-checkbox label="苹果" disabled>苹果</r-checkbox>
          <r-checkbox label="西瓜" disabled>西瓜</r-checkbox>
          <r-checkbox label="猕猴桃">猕猴桃</r-checkbox>
        </r-checkbox-group>
      </template>
      <template #header><span id="不可用">不可用</span></template>
      <template #desc>通过设置<code>disabled</code>属性来禁用多选框。</template>
      <template #code><Disabled /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-checkbox-group value="['苹果']">
          <r-checkbox label="苹果" type="border">苹果</r-checkbox>
          <r-checkbox label="西瓜" type="border">西瓜</r-checkbox>
          <r-checkbox label="猕猴桃" type="border">猕猴桃</r-checkbox>
        </r-checkbox-group>
      </template>
      <template #header><span id="显示边框">显示边框</span></template>
      <template #desc>设置属性<code>type="border"</code>可以显示边框。</template>
      <template #code><Border /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div style="border-bottom: 1px solid #e9e9e9; padding-bottom: 6px; margin-bottom: 6px">
          <r-checkbox id="checkAll">全选</r-checkbox>
        </div>
        <r-checkbox-group id="checkAllGroup">
          <r-checkbox label="苹果">苹果</r-checkbox>
          <r-checkbox label="西瓜">西瓜</r-checkbox>
          <r-checkbox label="猕猴桃">猕猴桃</r-checkbox>
        </r-checkbox-group>
      </template>
      <template #header><span id="全选">全选</span></template>
      <template #desc>
        在实现全选效果时，你可能会用到<code>indeterminate</code>属性。示例代码只是一种写法。
      </template>
      <template #code><Indeterminate /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Checkbox from '../../../../../src/components/checkbox'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Group,
  Border,
  Disabled,
  Indeterminate,
  APITable
} from '../../../examples-code/components/checkbox'

onMounted(() => {
  const checkbox = new Checkbox()
  const checkAll = checkbox.config('#checkAll')
  const checkAllGroup = checkbox.config('#checkAllGroup')

  checkAll.events({
    onChange: (checked) => {
      if (checkAll.indeterminate) {
        checkAllGroup.value = []
        checkAll.checked = false
        checkAll.indeterminate = false
      } else if (checked) {
        checkAllGroup.value = ['苹果', '西瓜', '猕猴桃']
      } else {
        checkAllGroup.value = []
        checkAll.indeterminate = false
      }
    }
  })

  checkAllGroup.events({
    onChange: (data) => {
      if (data.length === 0) {
        checkAll.checked = false
        checkAll.indeterminate = false
      } else if (data.length === 3) {
        checkAll.checked = true
        checkAll.indeterminate = false
      } else if (data.length && data.length < 3) {
        checkAll.indeterminate = true
      }
    }
  })
})

const anchors: string[] = ['基础用法', '组合使用', '不可用', '显示边框', '全选', 'API']
</script>