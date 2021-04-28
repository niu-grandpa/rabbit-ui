# Radio 单选框

单选框。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Radio()`

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码示例

单独使用

- 最简单的用法。

```html
<r-radio checked="true" id="demoRadio">Radio</r-radio>

<script>
	const radio = new Rabbit.Radio();
    radio.config('#demoRadio').events({
        onChange: (state) => {
            console.log(`当前状态：${state}`)
        }
    })
</script>
```

组合使用

- 使用`r-radio-group`实现一组互斥的选项组。在组合使用时，`radio` 使用 `label` 来自动判断。每个 radio 的内容可以自定义。
- 设置属性 `icon` 可以添加前缀图标

```html
<r-radio-group value="apple">
  <r-radio label="apple" icon="logo-apple">Apple</r-radio>
  <r-radio label="android" icon="logo-android">Android</r-radio>
  <r-radio label="windows" icon="logo-windows">Windows</r-radio>
</r-radio-group>

<r-radio-group value="爪哇犀牛" id="demoRadioGroup">
  <r-radio label="金斑蝶">金斑蝶</r-radio>
  <r-radio label="爪哇犀牛">爪哇犀牛</r-radio>
  <r-radio label="印度黑羚">印度黑羚</r-radio>
</r-radio-group>

<script>
	const radio = new Rabbit.Radio();
    radio.config('#demoRadioGroup').events({
        onChange: (item) => {
            console.log(item)
        }
    })
</script>
```

不可用

- 通过设置`disabled`属性来禁用单选框。

```html
<r-radio checked="true" disabled>Radio</r-radio>

<r-radio-group value="爪哇犀牛">
  <r-radio label="金斑蝶" disabled>金斑蝶</r-radio>
  <r-radio label="爪哇犀牛">爪哇犀牛</r-radio>
  <r-radio label="印度黑羚">印度黑羚</r-radio>
</r-radio-group>
```

垂直

- 设置属性 `direction="vertical"` 可以垂直显示，按钮样式下无效。

```html
<r-radio-group value="apple" direction="vertical">
  <r-radio label="apple">Apple</r-radio>
  <r-radio label="android">Android</r-radio>
  <r-radio label="windows">Windows</r-radio>
</r-radio-group>
```

按钮样式

- 组合使用时可以设置属性`type`为 button 来应用按钮的样式。

```html
<r-radio-group value="北京" type="button">
  <r-radio label="北京">北京</r-radio>
  <r-radio label="上海">上海</r-radio>
  <r-radio label="深圳">深圳</r-radio>
  <r-radio label="杭州">杭州</r-radio>
</r-radio-group>

<r-radio-group value="北京" type="button">
  <r-radio label="北京">北京</r-radio>
  <r-radio label="上海" disabled>上海</r-radio>
  <r-radio label="深圳">深圳</r-radio>
  <r-radio label="杭州">杭州</r-radio>
</r-radio-group>

<r-radio-group value="北京" type="button">
  <r-radio label="北京" disabled>北京</r-radio>
  <r-radio label="上海" disabled>上海</r-radio>
  <r-radio label="深圳" disabled>深圳</r-radio>
  <r-radio label="杭州" disabled>杭州</r-radio>
</r-radio-group>
```

填底的按钮样式

- 设置属性 `button-style` 为 `solid` 可显示为实色填底的单选按钮样式。

```html
<r-radio-group value="北京" type="button" button-style="solid">
  <r-radio label="北京">北京</r-radio>
  <r-radio label="上海">上海</r-radio>
  <r-radio label="深圳">深圳</r-radio>
  <r-radio label="杭州">杭州</r-radio>
</r-radio-group>

<r-radio-group value="深圳" type="button" button-style="solid" style="margin-top: 16px">
  <r-radio label="北京">北京</r-radio>
  <r-radio label="上海" disabled>上海</r-radio>
  <r-radio label="深圳">深圳</r-radio>
  <r-radio label="杭州">杭州</r-radio>
</r-radio-group>
```

显示边框

- radio 设置属性 `type="border"` 可以显示边框。

```html
<r-radio-group value="金斑蝶">
  <r-radio label="金斑蝶" type="border">金斑蝶</r-radio>
  <r-radio label="爪哇犀牛" type="border">爪哇犀牛</r-radio>
  <r-radio label="印度黑羚" type="border">印度黑羚</r-radio>
</r-radio-group>
```

尺寸

- 通过设置属性`size`为`large`或`small`将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。

```html
<r-radio-group value="北京" type="button" size="large">
  <r-radio label="北京">北京</r-radio>
  <r-radio label="上海">上海</r-radio>
  <r-radio label="深圳">深圳</r-radio>
  <r-radio label="杭州">杭州</r-radio>
</r-radio-group>

<r-radio-group value="北京" type="button">
  <r-radio label="北京">北京</r-radio>
  <r-radio label="上海">上海</r-radio>
  <r-radio label="深圳">深圳</r-radio>
  <r-radio label="杭州">杭州</r-radio>
</r-radio-group>

<r-radio-group value="北京" type="button" size="small">
  <r-radio label="北京">北京</r-radio>
  <r-radio label="上海">上海</r-radio>
  <r-radio label="深圳">深圳</r-radio>
  <r-radio label="杭州">杭州</r-radio>
</r-radio-group>
```

<p style="font-size: 32px">Attributes</p>

###  Radio

| 属性     | 说明                                                         | 默认值 |
| :------- | :----------------------------------------------------------- | :----- |
| checked  | 单个是否选中                                                 | false  |
| label    | 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目 | -      |
| disabled | 是否禁用当前项                                               | false  |
| size     | 单选框的尺寸，可选值为 `large`，`small` 或者不设置           | -      |
| border   | 是否显示边框                                                 | false  |
| icon     | 设置前缀图标                                                 | -      |

### RadioGroup

| 属性         | 说明                                               | 默认值 |
| :----------- | :------------------------------------------------- | :----- |
| value        | 指定当前选中的项目数据                             | -      |
| type         | 可选值为 button 或不填，为 button 时使用按钮样式   | -      |
| button-style | 按钮样式，可选值为 solid                           | -      |
| size         | 单选框的尺寸，可选值为 `large`，`small` 或者不设置 | -      |
| direction    | 是否垂直排列，按钮样式下无效，可选值为 `vertical`  | -      |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                             | 类型   |
| ---- | ------------------------------------------------ | ------ |
| el   | 配置当前选定的 radio，必须是选择器名称或者元素名 | String |

该方法返回以下三个值：

- `checked`

- `value`

- `events(options)`

| 返回值  | 说明                                      | 类型     | 默认值 |
| ------- | ----------------------------------------- | -------- | ------ |
| checked | 响应式设置单个是否选中                    | Boolean  | -      |
| value   | 响应式设置 radio-group 当前选中的项目数据 | String   | -      |
| events  | 非响应式API，添加 Radio 的事件，          | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                                                         | 回调参数                               |
| :------- | :----------------------------------------------------------- | :------------------------------------- |
| onChange | 在选项状态发生改变时触发，当选中的配置目标是 radio-group 时，则返回一个对象，为当前选中的项，如果是单个 radio 则返回当前选中状态 | (state:Boolean \| item:Object) => void |