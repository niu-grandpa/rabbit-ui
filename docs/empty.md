# Empty 空状态

空状态时的展示占位图。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Empty()`

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 代码示例

基础用法

- 简单的展示。

```html
<r-empty></r-empty>
```

自定义

- 设置属性 ` image` 自定义图片、`desc` 设置描述、 
- 如果设置附属内容，容器下有且只能由一个子节点

```html
<r-empty desc="自定义的<a>描述</a>"
  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
  image-style="height: 60px">
  <button class="rab-btn rab-btn-primary">立即创建</button>
</r-empty>
```

无描述

- 设置属性 `desc="false"` 不显示描述。

```html
<r-empty desc="false"></r-empty>
```

<p style="font-size: 32px">Attributes</p>

### Empty

| 属性        | 说明           | 默认值 |
| :---------- | :------------- | :----- |
| desc        | 自定义描述内容 | -      |
| image-style | 图片样式       | -      |
| image       | 自定义图片地址 | -      |