<template>
  <article class="markdown">
    <ExampleHeaderArea name="Switch" title="开关" desc="开关选择器">
      <li>需要表示开关状态/两种状态之间的切换时</li>
      <li>
        和<code>checkbox</code>的区别是，切换<code>switch</code>会直接触发状态改变，而<code>checkbox</code>一般用于状态标记，需要和提交操作配合
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-switch id="test" />
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>基本用法，状态切换时会触发事件。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-switch size="large" />
        <r-switch />
        <r-switch size="small" />
      </template>
      <template #header><span id="尺寸">尺寸</span></template>
      <template #desc>
        设置<code>size</code>为<code>large</code>或<code>small</code>使用大号和小号的开关。
      </template>
      <template #code><Size /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-switch open="开" close="关" />
        <r-switch
          open="<i class='rab-icon rab-icon-md-checkmark'></i>"
          close="<i class='rab-icon rab-icon-md-close'></i>"
        />
        <br />
        <r-switch size="large" open="开启" close="关闭" />
        <r-switch size="large" open="ON" close="OFF" />
      </template>
      <template #header><span id="文字和图标">文字和图标</span></template>
      <template #desc>
        设置属性<code>open</code>和<code>close</code>自定义切换状态后显示的内容，建议如果使用2个汉字，将开关尺寸设置为
        large。
      </template>
      <template #code><TextAndIcon /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-switch disabled="true" />
      </template>
      <template #header><span id="不可用">不可用</span></template>
      <template #desc> 设置属性<code>disabled="true"</code>禁用开关 </template>
      <template #code><Disabled /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-switch loading="true" checked="true" />
        <r-switch loading="true" size="small" />
      </template>
      <template #header><span id="加载中">加载中</span></template>
      <template #desc>设置属性<code>loading="true"</code>标识开关操作仍在执行中。</template>
      <template #code><Loading /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-switch true-color="#52c41a" false-color="#ff4d4f" />
      </template>
      <template #header><span id="自定义颜色">自定义颜色</span></template>
      <template #desc>
        设置属性<code>true-color</code>和<code>false-color</code>可以自定义背景色。
      </template>
      <template #code><CustomColor /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Message from '../../../../../../src/components/message'
import Switch from '../../../../../../src/components/switch'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../components'
import {
  Basic,
  Size,
  Loading,
  Disabled,
  CustomColor,
  TextAndIcon,
  APITable
} from '../../../../examples-code/components/switch'

onMounted(() => {
  const _switch = new Switch()

  _switch.config('#test').events({
    onChange: (checked) => {
      Message.info(`开关状态: ${checked}`)
    }
  })
})

const anchors: string[] = [
  '基础用法',
  '尺寸',
  '文字和图标',
  '不可用',
  '加载中',
  '自定义颜色',
  'API'
]
</script>

<style scoped>
r-switch {
  margin-right: 8px;
}
</style>