<template>
  <article class="markdown">
    <h1>常见问题</h1>
    <p>
      如果有更多的问题需要提问，请到
      <a href="https://github.com/niu-grandpa/rabbit-ui/issues" target="_blank">Github</a>
      仓库提交您宝贵的 issue，我们将其收集到这里展示。
    </p>
    <h3>为什么把组件的 HTML 代码放到页面上没有效果？</h3>
    <p>
      例如你想使用 Alert 组件，那么你首先要做的事情就是在它需要使用的地方全局初始化一次
      <code>new Rabbit.Alert()</code> ，NPM 安装则 <code>new Alert()</code>。
    </p>
    <h3>rabbit-ui 在移动端体验不佳。</h3>
    <p><code>rabbit-ui</code> 并非针对移动端设计。</p>
    <h3>
      当我通过关闭按钮或异步关闭 Message 或 Notice 组件后，为什么其提供的 then
      接口的回调事件不生效？
    </h3>
    <p>
      组件提供的
      Promise接口是当实例自动关闭时才会触发的，并不是通过任意方式关闭组件都会调用该接口，如果您想通过手动移除消息后接着添加回调事件，请使用
      <code>onClose</code> api，至于要在异步移除后添加事件，建议是在异步的那个时机里添加。
    </p>
    <h3>为什么通过<code>setAttribute</code>重新赋值，组件的内容或状态没有更新？</h3>
    <p>
      因为组件的初始化只有一次，所以用 setAttribute
      重新赋值是不会有效果的，考虑到一些场景下需要异步更新，所以我们提供了
      <code>config</code> 方法，具体请查看对应组件的 api 文档。
    </p>
    <h3>使用组件的 api 时显得有些繁琐。</h3>
    <p>
      有一些确实会显得比较繁琐，但是 <code>rabbit-ui</code> 内部帮您封装了一些有限的 DOM
      操作，例如DOM元素获取并添加点击事件、鼠标移入移出事件等等，这些都不必您亲自操作。
    </p>
    <h3>rabbit-ui 覆盖了我的全局样式！</h3>
    <p>
      为了方便，我们覆盖了一些全局样式，尽量做到和
      <code>rabbit-ui</code> 的样式统一，避免出现组件 ui 外观异常。
    </p>
  </article>
</template>
