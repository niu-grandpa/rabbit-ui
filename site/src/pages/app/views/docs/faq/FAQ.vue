<template>
  <article class="markdown">
    <h1>常见问题</h1>
    <p>
      如果有更多的问题需要提问，请到
      <a href="https://github.com/niu-grandpa/rabbit-ui/issues" target="_blank">Github</a>
      仓库提交您宝贵的 issue，我们将其收集到这里展示。
    </p>
    <h3>rabbit-ui 覆盖了我的全局样式！</h3>
    <p>
      为了方便，我们覆盖了一些全局样式，尽量做到和 <code>rabbit-ui</code> 的样式统一，避免出现组件
      ui 外观异常。
    </p>
    <h3>使用组件的 api 时显得有些繁琐。</h3>
    <p>
      有一些确实会显得比较繁琐，但是 <code>rabbit-ui</code> 内部帮您封装了一些有限的 DOM
      操作，例如DOM元素获取并添加点击事件、鼠标移入移出事件等等，这些都不必您亲自操作。
    </p>
    <h3>rabbit-ui 在移动端体验不佳。</h3>
    <p><code>rabbit-ui</code> 并非针对移动端设计。</p>
    <h3>用 <code>setAttribute</code> 重新赋值属性值，更新组件的内容或状态没有生效？</h3>
    <p>
      因为组件的初始化过程只有一次，所以对标签的属性值用 setAttribute
      重新赋值是不会有效果的，考虑到一些场景下需要异步更新，所以我们提供了
      <code>config</code> 方法，具体请查看对应组件的 api 文档
    </p>
  </article>
</template>
