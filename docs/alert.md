# Alert 警告提示

警告提示，展现需要关注的信息。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Alert()`

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码示例

基础用法

- 基本使用方法，有四种样式可以选择`info`、`success`、`warning`、`error`。默认是 `info`

```html
<r-alert title="信息提示的文案"></r-alert>
<r-alert type="success" title="成功提示的文案"></r-alert>
<r-alert type="warning" title="警告提示的文案"></r-alert>
<r-alert type="error" title="错误提示的文案"></r-alert>
```

含有辅助性文字介绍

- 含有辅助性文字介绍的警告提示。

```html
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
```

图标

- 设置 `show-icon`  为 `true` 并根据 `type` 属性自动添加不同图标，或者设置属性 `icon` 自定义图标。

```html
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
<r-alert title="自定义图标" show-icon="true" icon="<i class='rab-icon rab-icon-ios-planet'>">
  <p>自定义图标的内容，自定义图标的内容，自定义图标的内容。</p>
</r-alert>
```

可关闭

- 设置属性 `closable`  为  `true` 显示关闭按钮，点击可关闭提示。

- 设置属性  `close-text` 可以自定义关闭，自定义的文字会替换原先的关闭图标。

```html
<r-alert title="信息提示的文案" closable="true" id="test"></r-alert>
<r-alert type="success" title="成功提示的文案" closable="true">
  <p>成功提示的内容,成功提示的内容，成功提示的,成功提示的内容,成功提示的内容。</p>
</r-alert>
<r-alert type="warning" title="警告提示的文案" closable="true" close-text="知道了"></r-alert>
```

顶部公告

- 设置属性 `banner`  为  `true` 可以应用顶部公告的样式。

```html
<r-alert banner="true" type="warning" title="注意:通知内容……"></r-alert>
<r-alert banner="true" closable="true" type="warning" title="注意:通知内容……"></r-alert>
<r-alert banner="true" show-icon="true" type="warning" title="注意:通知内容……"></r-alert>
```

<p style="font-size: 32px">Attributes</p>

#### Alert

| 属性       | 说明                                                        | 默认值 |
| ---------- | ----------------------------------------------------------- | ------ |
| type       | 警告提示样式，可选值为`info`、`success`、`warning`、`error` | info   |
| title      | 提示标题                                                    | -      |
| show-icon  | 是否显示图标                                                | false  |
| closable   | 是否可关闭                                                  | false  |
| close-text | 关闭按钮自定义文本                                          | -      |
| banner     | 应用顶部公告的样式                                          | -      |
| icon       | 自定义图标内容                                              | -      |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                             | 类型   |
| ---- | ------------------------------------------------ | ------ |
| el   | 配置当前选定的 alert，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `title`
- `icon`

- `events(options)`

| 返回值 | 说明                            | 类型     | 默认值 |
| ------ | ------------------------------- | -------- | ------ |
| title  | 响应式设置或更新警告提示内容    | String   | -      |
| icon   | 响应式设置或更新图标内容        | String   | -      |
| events | 非响应式API，添加提示框的事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性    | 说明                 | 回调参数                       |
| :------ | :------------------- | :----------------------------- |
| onClose | 关闭时触发的回调函数 | (event:  MouseEvent)  =>  void |