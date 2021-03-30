# Switch 开关

开关选择器

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Switch()`

## 何时使用

- 需要表示开关状态/两种状态之间的切换时
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合

## 代码示例

- 基本

基本用法，状态切换时会触发事件。

```html
<r-switch id="example"></r-switch>
开关状态：<span id="status">false</span>
<script>
	const $switch = new Switch();
    $switch.onChange('#example', ([status, $this]) => {
        document.querySelector('#status').textContent = `${status}`;
        console.log($this); // 输出当前点击的switch
    });
</script>
```

- 尺寸

设置`size`为 `large` 或 `small` 使用大号和小号的开关。

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
  close="<i class='rab-icon rab-icon-md-close'></i>"
></r-switch>
<r-switch size="large" open="开启" close="关闭"></r-switch>
<r-switch size="large" open="ON" close="OFF"></r-switch>

```

- 不可用

禁用开关

```html
<r-switch disabled></r-switch>
```

- 加载中

设置属性  `loading="true"` 标识开关操作仍在执行中。

```html
<r-switch loading="true" checked="true"></r-switch>
<r-switch loading="true" size="small"></r-switch>
```

- 自定义颜色

设置属性 `true-color` 和 `false-color` 可以自定义背景色。

<p style="font-size: 32px">Attributes</p>

### Switch

| 属性           | 说明                                                         | 默认值 |
| -------------- | ------------------------------------------------------------ | ------ |
| checked     | 指定当前是否选中                                             | false  |
| size        | 开关的尺寸，可选值为`large`、`small`或者不写。建议开关如果使用了2个汉字的文字，使用 large。 | -      |
| disabled       | 禁用开关                                                     | false  |
| true-color  | 自定义打开时的背景色                                         | -      |
| false-color | 自定义关闭时的背景色                                         | -      |
| loading     | 加载中的开关                                                 | false  |
| open        | 开关打开时的内容                                             | -      |
| close       | 开关关闭时的内容                                             | -      |

### 事件

| 名称     | 说明                           | 参数                          | 回调参数                   |
| -------- | ------------------------------ | ----------------------------- | ---------------------------------- |
| onChange | 开关变化时触发，返回当前的状态。该事件的参数是一个数组 | `(el, [status, $this]) => {}` | 第一个参数必须是选择器名称，第二个参数是一个数组，其第一个元素为当前状态，返回 `true` / `false` ，第二个返回当前switch |

