# Switch 开关

开关选择器

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Switch()`

## 何时使用

- 需要表示开关状态/两种状态之间的切换时
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合

## 代码示例

基本

- 基本用法，状态切换时会触发事件。

```html
<r-switch id="test"></r-switch>
<script>
	const Switch = new Rabbit.Switch();
     Switch.config('#test').events({
        onChange: (checked) => {
            Rabbit.Message.info(`开关状态: ${checked}`);
        }
    });
</script>
```

尺寸

- 设置`size`为 `large` 或 `small` 使用大号和小号的开关。

```html
<r-switch size="large"></r-switch>
<r-switch></r-switch>
<r-switch size="small"></r-switch>
```

- 文字和图标

设置属性  `open`  和 `close` 自定义切换状态后显示的内容，建议如果使用2个汉字，将开关尺寸设置为 large。

```html
<r-switch open="开" close="关"></r-switch>
<r-switch
  open="<i class='rab-icon rab-icon-md-checkmark'></i>"
  close="<i class='rab-icon rab-icon-md-close'></i>">
</r-switch>
<br />
<r-switch size="large" open="开启" close="关闭"></r-switch>
<r-switch size="large" open="ON" close="OFF"></r-switch>
```

不可用

- 设置属性 `disabled="true"` 禁用开关

```html
<r-switch disabled="true"></r-switch>
```

加载中

- 设置属性  `loading="true"` 标识开关操作仍在执行中。

```html
<r-switch loading="true" checked="true"></r-switch>
<r-switch loading="true" size="small"></r-switch>
```

自定义颜色

- 设置属性 `true-color` 和 `false-color` 可以自定义背景色。

```html
<r-switch true-color="#52c41a" false-color="#ff4d4f"></r-switch>
```



<p style="font-size: 32px">Attributes</p>

### Switch

| 属性           | 说明                                                         | 默认值 |
| -------------- | ------------------------------------------------------------ | ------ |
| checked     | 指定当前是否选中                                             | false  |
| size        | 开关的尺寸，可选值为`large`、`small`、`default`或者不写。建议开关如果使用了2个汉字的文字，使用 large。 | default |
| disabled       | 禁用开关                                                     | false  |
| true-color  | 自定义打开时的背景色                                         | -      |
| false-color | 自定义关闭时的背景色                                         | -      |
| loading     | 加载中的开关                                                 | false  |
| open        | 自定义显示打开时的内容                                  | -      |
| close       | 自定义显示关闭时的内容                                  | -      |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                                | 类型   |
| ---- | --------------------------------------------------- | ------ |
| el   | 配置当前选定的 carousel，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `checked`
- `disabled`
- `loading`

- `events(options)`

| 返回值   | 说明                             | 类型     | 默认值 |
| -------- | -------------------------------- | -------- | ------ |
| checked  | 响应式设置或更新当前是否选中状态 | Boolean  | -      |
| disabled | 响应式设置或更新禁用开关状态     | Boolean  | -      |
| loading  | 响应式设置或更新加载中的开关状态 | Boolean  | -      |
| events   | 非响应式API，添加开关事件        | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                           | 回调参数                   |
| :------- | :----------------------------- | :------------------------- |
| onChange | 开关变化时触发，返回当前的状态 | (checked: boolean) => void |