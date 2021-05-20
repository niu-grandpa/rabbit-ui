<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="MiniModal"
      title="轻量对话框"
      desc="创建一次性的轻量级对话框。"
      :showTip="false"
    >
      <li> 当需要一个简洁的确认框询问用户时。 </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <button class="rab-btn" @click="instance('info')">消息</button>
        <button class="rab-btn" @click="instance('success')">成功</button>
        <button class="rab-btn" @click="instance('warning')">警告</button>
        <button class="rab-btn" @click="instance('error')">错误</button>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>四种基本的对话框，只提供一个确定按钮。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn" @click="confirm">标准</button>
        <button class="rab-btn" @click="custom">自定义按钮文字</button>
        <button class="rab-btn" @click="async">异步关闭</button>
      </template>
      <template #header><span id="确认对话框">确认对话框</span></template>
      <template #desc>
        <p>快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。</p>
        <p>
          将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>content</code>就会被当作
          HTML 片段处理。
        </p>
      </template>
      <template #code><Confirm /></template>
    </CodeBox>
    <blockquote>
      <code>title</code> 和 <code>content</code>属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意
      HTML 是非常危险的，因为容易导致
      <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank"> XSS 攻击 </a
      >。因此在<code>dangerouslyUseHTMLString</code> 打开的情况下，请确保<code>content</code>
      的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给<code>content</code>
      属性。
    </blockquote>
    <h2 id="API">API</h2>
    <h3>Modal instance</h3>
    <p>通过直接调用以下方法来使用（注：NPM 环境下无需添加 Rabbit 前缀）：</p>
    <ul>
      <li><code>Rabbit.MiniModal.info(config)</code></li>
      <li><code>Rabbit.MiniModal.success(config)</code></li>
      <li><code>Rabbit.MiniModal.warning(config)</code></li>
      <li><code>Rabbit.MiniModal.error(config)</code></li>
    </ul>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import Message from '../../../../../../../src/components/message'
import MiniModal from '../../../../../../../src/components/mini-modal'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../../components'
import { Basic, Confirm, APITable } from '../../../../../examples-code/components/mini-modal'

const anchors: string[] = ['基础用法', '确认对话框', 'API']

const title = '对话框标题'
const content = '这是一段对话框的内容'

const instance = (type: string) => {
  switch (type) {
    case 'info':
      MiniModal.info({
        title,
        content
      })
      break
    case 'success':
      MiniModal.success({
        title,
        content
      })
      break
    case 'warning':
      MiniModal.warning({
        title,
        content
      })
      break
    case 'error':
      MiniModal.error({
        title,
        content
      })
      break
  }
}
const confirm = () => {
  MiniModal.confirm({
    title: '确认对话框标题',
    content: '<p>这是一段自定义的内容...</p><p>这是一段自定义的内容...</p>',
    dangerouslyUseHTMLString: true,
    onOk: () => {
      Message.info('点击了确定')
    },
    onCancel: () => {
      Message.info('点击了取消')
    }
  })
}

const custom = () => {
  MiniModal.confirm({
    title: '确认对话框标题',
    content: '<p>这是一段自定义的内容...</p><p>这是一段自定义的内容...</p>',
    okText: 'OK',
    cancelText: 'Cancel',
    dangerouslyUseHTMLString: true
  })
}

const async = () => {
  MiniModal.confirm({
    title: '确认对话框标题',
    content: '<p>对话框将在 2秒 后关闭</p>',
    loading: true,
    dangerouslyUseHTMLString: true,
    onOk: () => {
      setTimeout(() => {
        MiniModal.remove()
        Message.info('异步关闭了对话框')
      }, 2000)
    }
  })
}
</script>