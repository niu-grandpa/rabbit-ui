<template>
  <article class="markdown">
    <ExampleHeaderArea name="Alert" title="警告提示" desc="警告提示，展现需要关注的信息。">
      <li>当某个页面需要向用户显示警告的信息时。</li>
      <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-alert title="信息提示的文案" />
        <r-alert type="success" title="成功提示的文案" />
        <r-alert type="warning" title="警告提示的文案" />
        <r-alert type="error" title="错误提示的文案" />
      </template>
      <template #header>
        <span id="基础用法">基础用法</span>
      </template>
      <template #desc>
        <p>
          基本使用方法，有四种样式可以选择<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>。
        </p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-alert title="信息提示的文案">
          <p>信息提示的内容,信息提示的内容，信息提示的,信息提示的内容,信息提示的内容。</p>
        </r-alert>
        <r-alert type="success" title="成功提示的文案">
          <p>成功提示的内容,成功提示的内容，成功提示的,成功提示的内容,成功提示的内容。</p>
        </r-alert>
        <r-alert type="warning" title="警告提示的文案">
          <p>警告提示的内容,警告提示的内容，警告提示的,警告提示的内容,警告提示的内容。</p>
        </r-alert>
        <r-alert type="error" title="错误提示的文案">
          <p>错误提示的内容,错误提示的内容，错误提示的,错误提示的内容,错误提示的内容。</p>
        </r-alert>
      </template>
      <template #header>
        <span id="含描述信息">含描述信息</span>
      </template>
      <template #desc>
        <p>含有辅助性文字介绍的警告提示</p>
      </template>
      <template #code><WithDesc /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-alert title="信息提示的文案" show-icon="true"></r-alert>
        <r-alert type="success" title="成功提示的文案" show-icon="true"></r-alert>
        <r-alert type="warning" title="警告提示的文案" show-icon="true"></r-alert>
        <r-alert type="error" title="错误提示的文案" show-icon="true"></r-alert>
        <r-alert title="信息提示的文案" show-icon="true">
          <p>信息提示的内容,信息提示的内容，信息提示的,信息提示的内容,信息提示的内容。</p>
        </r-alert>
        <r-alert type="success" title="成功提示的文案" show-icon="true">
          <p>成功提示的内容,成功提示的内容，成功提示的,成功提示的内容,成功提示的内容。</p>
        </r-alert>
        <r-alert type="warning" title="警告提示的文案" show-icon="true">
          <p>警告提示的内容,警告提示的内容，警告提示的,警告提示的内容,警告提示的内容。</p>
        </r-alert>
        <r-alert type="error" title="错误提示的文案" show-icon="true">
          <p>错误提示的内容,错误提示的内容，错误提示的,错误提示的内容,错误提示的内容。</p>
        </r-alert>
        <r-alert
          title="自定义图标"
          show-icon="true"
          icon="<i class='rab-icon rab-icon-ios-planet'>"
        >
          <p>自定义图标的内容，自定义图标的内容，自定义图标的内容。</p>
        </r-alert>
      </template>
      <template #header>
        <span id="图标">图标</span>
      </template>
      <template #desc>
        <p>
          设置 <code>show-icon="true"</code> 并会根据 type 属性自动添加不同图标，或者设置属性
          <code>icon</code> 自定义图标。
        </p>
      </template>
      <template #code><WithIcon /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-alert title="信息提示的文案" closable="true" id="test"></r-alert>
        <r-alert type="success" title="成功提示的文案" closable="true">
          <p>成功提示的内容,成功提示的内容，成功提示的,成功提示的内容,成功提示的内容。</p>
        </r-alert>
        <r-alert
          type="warning"
          title="警告提示的文案"
          closable="true"
          close-text="知道了"
        ></r-alert>
      </template>
      <template #header>
        <span id="可关闭">可关闭</span>
      </template>
      <template #desc>
        <p>显示关闭按钮，点击可关闭提示，也可以自定义关闭内容</p>
      </template>
      <template #code><WithClose /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-alert banner="true" type="warning" title="注意:通知内容……"></r-alert>
        <r-alert banner="true" closable="true" type="warning" title="注意:通知内容……"></r-alert>
        <r-alert banner="true" show-icon="true" type="warning" title="注意:通知内容……"></r-alert>
      </template>
      <template #header>
        <span id="顶部公告">顶部公告</span>
      </template>
      <template #desc>
        <p>设置属性 <code>banner="true"</code> 可以应用顶部公告的样式。</p>
      </template>
      <template #code><WithBanner /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Alert from '../../../../../src/components/alert'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  WithDesc,
  WithIcon,
  WithClose,
  WithBanner,
  APITable
} from '../../../examples-code/components/alert'

onMounted(() => {
  const alert = new Alert()
  alert.config('#test').events({
    onClose: () => {
      console.log('关闭了警告提示!')
    }
  })
})

const anchors: string[] = ['基础用法', '含描述信息', '图标', '可关闭', '顶部公告', 'API']
</script>

<style lang="less" scope>
.rab-alert-desc {
  p {
    margin: 0 !important;
  }
}
</style>