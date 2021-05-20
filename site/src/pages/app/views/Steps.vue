<template>
  <article class="markdown">
    <ExampleHeaderArea name="Steps" title="步骤条" desc="引导用户按照流程完成任务的导航条。">
      <li>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-steps current="1">
          <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
          <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
          <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
          <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
        </r-steps>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc> 基本用法，组件会根据<code>current</code>自动判断各步骤状态。 </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-steps current="2" size="small">
          <r-step title="已完成"></r-step>
          <r-step title="已完成"></r-step>
          <r-step title="进行中"></r-step>
          <r-step title="待进行"></r-step>
        </r-steps>
      </template>
      <template #header><span id="迷你版">迷你版</span></template>
      <template #desc>设置属性<code>size="small"</code>启用迷你版。</template>
      <template #code><Mini /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-steps current="1">
          <r-step title="注册" icon="ios-person"></r-step>
          <r-step title="上传头像" icon="ios-camera"></r-step>
          <r-step title="验证邮箱" icon="ios-mail"></r-step>
        </r-steps>
      </template>
      <template #header><span id="带图标的步骤条">带图标的步骤条</span></template>
      <template #desc>通过设置<code>r-step</code>的<code>icon</code>属性可以自定义图标。</template>
      <template #code><WithIcon /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-steps current="0" id="test">
          <r-step title="步骤1"></r-step>
          <r-step title="步骤2"></r-step>
          <r-step title="步骤3"></r-step>
          <r-step title="步骤4"></r-step>
        </r-steps>
        <br />
        <button class="rab-btn rab-btn-primary" @click="handlClickNext">下一步</button>
      </template>
      <template #header><span id="切换步骤">切换步骤</span></template>
      <template #desc>通常配合内容及按钮使用，表示一个流程的处理进度。</template>
      <template #code><ChangeStep /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-steps current="2" direction="vertical">
          <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
          <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
          <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
          <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
        </r-steps>
      </template>
      <template #header><span id="垂直方向">垂直方向</span></template>
      <template #desc>设置属性<code>direction="vertical"</code>为在垂直方向展示。</template>
      <template #code><Vertical /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-steps current="1" status="error">
          <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
          <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
          <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
          <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
        </r-steps>
      </template>
      <template #header><span id="步骤运行错误">步骤运行错误</span></template>
      <template #desc>
        设置<code>r-steps</code>的属性<code>status="error"</code>为指定当前步骤状态。
      </template>
      <template #code><Error /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Steps from '../../../../../src/components/steps'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Error,
  Mini,
  Vertical,
  WithIcon,
  ChangeStep,
  APITable
} from '../../../examples-code/components/steps'

let stpes: Steps,
  n = 0

onMounted(() => {
  stpes = new Steps()
})

const handlClickNext = () => {
  if (n == 3) {
    n = 0
  } else {
    n += 1
  }
  stpes.config('#test').current = n
}

const anchors: string[] = [
  '基础用法',
  '迷你版',
  '带图标的步骤条',
  '切换步骤',
  '垂直方向',
  '步骤运行错误',
  'API'
]
</script>