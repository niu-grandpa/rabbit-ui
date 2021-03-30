# BackTop 回到顶部

返回页面顶部的操作按钮。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.BackTop()`

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。

## 代码示例

> 向下滚动页面，灰色的按钮为默认效果。

基础用法

- 默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。

```html
<r-back-top></r-back-top>
```

> 向下滚动页面，蓝色的按钮为自定义效果。

自定义样式

- 自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。

```html
<style>
  .top {
      padding: 10px;
      background: rgba(0, 153, 229, 0.7);
      color: #fff;
      text-align: center;
      border-radius: 2px;
  }
</style>

<r-back-top height="100" bottom="200">
  <div class="top">返回顶端</div>
</r-back-top>
```

<p style="font-size: 32px">Attributes</p>

### BackTop

| 属性     | 说明                                      | 默认值 |
| -------- | ----------------------------------------- | ------ |
| height   | 页面滚动高度达到该值时才显示`BackTop`组件 | 400    |
| bottom   | 组件距离底部的距离                        | 30     |
| right    | 组件距离右部的距离                        | 30     |
| duration | 滚动动画持续时间，单位 毫秒               | 500    |