# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Breadcrumb()`

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 代码示例

基础用法

- 最简单的用法。

```html
<r-breadcrumb>
  <a href="#">Home</a>
  <a href="#">Components</a>
  <span>Breadcrumb</span>
</r-breadcrumb>
```

带图标

- 可自定义每项的内容，比如带有一个图标。

```html
<r-breadcrumb>
  <div>
      <i class="rab-icon rab-icon-ios-home-outline"></i>
      <a href="#">Home</a>
  </div>
  <div>
      <i class="rab-icon rab-icon-logo-buffer"></i>
      <a href="#">Components</a>
  </div>
  <div>
      <i class="rab-icon rab-icon-ios-cafe"></i>
      <span>Breadcrumb</span>
  </div>
</r-breadcrumb>
```

分隔符

- 通过设置`separator`属性来自定义分隔符，比如` > `，也可以接受自定义的HTML字符串。

```html
<r-breadcrumb separator=">">
  <a href="#">Home</a>
  <a href="#">Components</a>
  <span>Breadcrumb</span>
</r-breadcrumb>

<r-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
  <a href="#">Home</a>
  <a href="#">Components</a>
  <span>Breadcrumb</span>
</r-breadcrumb>
```

<p style="font-size: 32px">Attributes</p>

### Breadcrumb

| 属性      | 说明         | 默认值 |
| --------- | ------------ | ------ |
| separator | 自定义分隔符 | /      |