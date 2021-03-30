# Tabs 标签页

选项卡切换组件。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Tabs()`

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

RabbitUI 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。

## 代码示例

基础用法

- `defaultActiveKey` 与 `r-tab-pane` 的 `key` 对应，用于标识当前激活的是哪一项，key 值默认从 0 开始，默认激活第一项。可以使用提供的 `config` 方法返回的 `activeKey` 进行动态改变

```html
<r-tabs defaultActiveKey="1" id="a">
  <r-tab-pane tab="标签一" key="1">标签一的内容</r-tab-pane>
  <r-tab-pane tab="标签二" key="2">标签二的内容</r-tab-pane>
  <r-tab-pane tab="标签三" key="3">标签三的内容</r-tab-pane>
</r-tabs>

<script>
	const tabs = new Rabbit.Tabs();
    setTimeout(() => {
      tabs.config('#a').activeKey = '2';
    }, 1500);
</script>
```

图标

- 通过设置属性 `icon`，可以显示一个图标。

```html
<r-tabs>
  <r-tab-pane tab="macOS" icon="logo-apple">标签一的内容</r-tab-pane>
  <r-tab-pane tab="Windows" icon="logo-windows">标签二的内容</r-tab-pane>
  <r-tab-pane tab="Linux" icon="logo-tux">标签三的内容</r-tab-pane>
</r-tabs>
```

迷你型

- 设置属性 `size` 为 `small` 可以显示为迷你型，只在 `type` 为 `line` 时有效。

```html
<r-tabs size="small">
  <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
  <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
  <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
</r-tabs>
```

禁用

- 禁用某一项。

```html
<r-tabs>
  <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
  <r-tab-pane tab="标签二" disabled="true">标签二的内容</r-tab-pane>
  <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
</r-tabs>
```

卡片样式

- 设置属性 `type` 为 `card` 可以显示卡片样式，常用于容器顶部。

```html
<r-tabs type="card">
  <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
  <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
  <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
</r-tabs>
```

可关闭

- 通过设置属性 `closable` 可以关闭某一项，仅在 `type` 为 `card` 时有效。
- 当设置了可关闭后，面板的切换将不使用切换动画。

```html
<r-tabs type="card" closable="true">
  <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
  <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
  <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
</r-tabs>
```

不使用动画

- 通过设置属性 `animated` 为 `false` 可以禁用动画。

```html
<r-tabs animated="false">
  <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
  <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
  <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
</r-tabs>
```

其它样式

- 可以根据业务自定义 UI，需要一点额外的样式覆盖。

```html
<style>
  .demo-tabs-style1>.rab-tabs-card>.rab-tabs-content {
      height: 120px;
      margin-top: -16px;
  }
  
  .demo-tabs-style1>.rab-tabs-card>.rab-tabs-content>r-tab-pane {
      background: #fff;
      padding: 16px;
  }
  
  .demo-tabs-style1>.rab-tabs-card>.rab-tabs-bar .rab-tabs-tab {
      border-color: transparent;
  }
  
  .demo-tabs-style1>.rab-tabs-card>.rab-tabs-bar .rab-tabs-tab-active {
      border-color: #fff;
  }
  
  .demo-tabs-style2>.rab-tabs-card>.rab-tabs-bar .rab-tabs-tab {
      border-radius: 0;
      background: #fff;
  }
  
  .demo-tabs-style2>.rab-tabs-card>.rab-tabs-bar .rab-tabs-tab-active {
      border-top: 1px solid #3399ff;
  }
  
  .demo-tabs-style2>.rab-tabs-card>.rab-tabs-bar .rab-tabs-tab-active:before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #3399ff;
      position: absolute;
      top: 0;
      left: 0;
  }
</style>

<div class="demo-tabs-style1" style="background: #e3e8ee; padding: 16px">
  <r-tabs type="card">
      <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
      <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
      <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
  </r-tabs>
</div>

<div class="demo-tabs-style2">
  <r-tabs type="card">
      <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
      <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
      <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
  </r-tabs>
</div>
```

<p style="font-size: 32px">Attributes</p>

### Tabs

| 属性             | 说明                                                         | 默认值     |
| ---------------- | ------------------------------------------------------------ | ---------- |
| defaultActiveKey | 初始化选中面板的 key                                         | 第一个面板 |
| type             | 页签的基本样式，可选值为 `line` 和 `card`                    | line       |
| size             | 尺寸，可选值为 `default` 和 `small`，仅在 `type="line"` 时有效 | default    |
| closable         | 是否可以关闭页签，仅在 `type="card"` 时有效                  | false      |
| animated         | 是否使用动画切换 Tabs                                        | true       |

### Tabs-pane 

| 属性     | 说明                                                    | 默认值 |
| -------- | ------------------------------------------------------- | ------ |
| key      | 用于标识当前面板，对应 defaultActiveKey，默认为其索引值 | index  |
| tab      | 选项卡头显示文字                                        | 空     |
| icon     | 选项卡图标                                              | -      |
| disabled | 是否禁用该选项卡                                        | false  |
| closable | 是否可以关闭页签，仅在 `type="card"` 时有效             | -      |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                            | 类型   |
| ---- | ----------------------------------------------- | ------ |
| el   | 配置当前选定的 tabs，必须是选择器名称或者元素名 | String |

该方法返回以下两个值：

- `activeKey`

- `events(options)`

| 返回值    | 说明                          | 类型     | 默认值 |
| --------- | ----------------------------- | -------- | ------ |
| activeKey | 响应式设置当前激活面板的 key  | String   | -      |
| events    | 非响应式API，添加选项卡事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性        | 说明             | 回调参数      |
| :---------- | :--------------- | :------------ |
| onClick     | tab 被点击时触发 | (key) => void |
| onTabRemove | tab 被关闭时触发 | (key) => void |