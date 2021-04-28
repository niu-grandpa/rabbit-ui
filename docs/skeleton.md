# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

>注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Skeleton()`

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码示例

基础用法

- 最简单的占位效果。

```html
<r-skeleton></r-skeleton>
```

复杂组合

- 带有头像占位图的组合。

```html
<r-skeleton avatar="true" paragraph-rows="4"></r-skeleton>
```

动画效果

- 显示动画效果。

```html
<r-skeleton active="true"></r-skeleton>
<r-skeleton active="true" avatar="true"></r-skeleton>
```

自定义段落占位图的宽度

- 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度

```html
<r-skeleton paragraph-width="[60,80,100]"></r-skeleton>
```

加载占位图

- 配合其他元素使用

```html
<style>
  .example {
    width: 918px;
    padding: 42px 24px 50px;
    margin: 50px auto;
    border: 1px solid #f0f0f0;
  }

  .article h3 {
    margin-bottom: 16px;
  }

  .article button {
    margin-top: 16px;
  }
</style>

<div class="example">
  <r-skeleton style="display: none" id="demoSkeleton"></r-skeleton>
  <div class="article">
    <div class="content">
      <h3>Vue.js, the progressive javascript framework</h3>
      <p>
        An incrementally adoptable ecosystem that scales between a library and a full-featured
        framework. Blazing Fast Virtual DOM Minimal Optimization Efforts
      </p>
    </div>
    <button type="button" class="rab-btn" onclick="toggle(this)">显示骨架图</button>
  </div>

  <script>
    const skeleton = document.querySelector('#demoSkeleton');
    const content = document.querySelector('.content');

    toggle = ($this) => {
      skeleton.style.display = '';
      content.style.display = 'none';
      $this.setAttribute('disabled', 'true');

      setTimeout(() => {
        skeleton.style.display = 'none';
        content.style.display = '';
        $this.removeAttribute('disabled');
      }, 3000);
    };
  </script>
</div>
```

<p style="font-size: 32px">Attributes</p>

### Skeleton

| 属性            | 说明                                                         | 默认值 |
| --------------- | ------------------------------------------------------------ | ------ |
| active          | 是否展示动画效果                                             | false  |
| avatar          | 是否显示头像占位图                                           | false  |
| paragraph       | 是否显示段落占位图                                           | true   |
| title           | 是否显示标题占位图                                           | true   |
| title-width     | 设置标题占位图的宽度                                         | -      |
| paragraph-rows  | 设置段落占位图的行数                                         | -      |
| paragraph-width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是首行的宽度 | -      |
| avatar-size     | 设置头像占位图的大小，可选值为 `small`、`large`              | large  |
| avatar-shape    | 指定头像的形状，可选值为 `circle`、`square`                  | circle |