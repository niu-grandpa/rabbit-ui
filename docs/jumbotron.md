# Jumbotron 巨幕

用于排版和分行，以便在较大的容器中分隔内容。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Jumbotron()`
>

## 何时使用

- 当需要展示巨大的标题和段落时使用。

## 代码示例

基础用法

- 最简单的用法，如果添加额外内容则标签容器下有且只能由一个子节点组成

```html
<r-jumbotron 
  title="Hello, world!" 
  sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！">
  <div>
      <hr style="margin-bottom: 1.5rem;" />
      <p>它使用实用程序类来排版和空格，以便在较大的容器中分隔内容。</p>
      <button class="rab-btn rab-btn-primary rab-btn-lg">了解更多</button>
  </div>
</r-jumbotron>
```

外观

- 通过设置属性 `type` 切换外观背景色

```html
<r-jumbotron 
  type="light" 
  title="Hello, world!" 
  sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！">
</r-jumbotron>

<r-jumbotron 
  type="dark" 
  title="Hello, world!" 
  sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！">
</r-jumbotron>
```

<p style="font-size: 32px">Attributes</p>

### Jumbotron

| 属性      | 说明                                     | 默认值 |
| :-------- | :--------------------------------------- | :----- |
| type      | 更改外观颜色，可选值为 `light` 和 `dark` | -      |
| title     | 设置大标题                               | -      |
| sub-title | 设置描述标题                             | -      |