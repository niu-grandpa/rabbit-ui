# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.InputNumber()`

## 何时使用

- 当需要获取标准数值时。

## 代码示例

基础用法

- 可以通过输入、鼠标点击或键盘的上下键来改变数值大小。

```html
<r-input-number value="1" min="1" max="10" id="test1"></r-input-number>
<script>
	const inputNumber = new Rabbit.InputNumber();
    inputNumber.config('#test1').events({
        onChange: (value) => {
            console.log('changed!', value);
        }
    });    
</script>
```

小数

- 通过设置`step`属性控制每次改变的精度。

```html
<r-input-number value="1" min="1" max="10" step="1.2"></r-input-number>
```

格式化展示

- 通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。
- formatter 属性的值的字符串格式为：反引号包裹  ${value}。
- parser 属性的值需为字符串的数组，第一个位置为要匹配替换的内容，第二个位置为替换后的结果；若无该属性则使用默认的匹配规则转换。

```html
<r-input-number 
  value="1000" 
  formatter="`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')" 
  parser="[/\$\s?|(,*)/g, '']">
</r-input-number>
<r-input-number value="100" formatter="`${value}%`"></r-input-number>
```

尺寸

- 通过设置`size`属性为`large`和`small`将输入框设置为大和小尺寸，不设置为默认尺寸。

```html
<r-input-number value="3" size="small"></r-input-number>
<r-input-number value="3"></r-input-number>
<r-input-number value="3" size="large"></r-input-number>
```

不可用

- 通过设置`disabled="true"`属性禁用输入框，点击按钮切换状态。

```html
<r-input-number value="1" disabled="true" id="test2"></r-input-number>
<button class="rab-btn rab-btn-primary" onclick="handleClick()">禁用状态</button>

<script>
    const inputNumber = new Rabbit.InputNumber();
	let flag = true;
    handleClick = () => {
       flag ? (flag = !flag) : (flag = true);
       inputNumber.config('#test2').disabled = flag;
    };
</script>
```

只读

- 通过设置`readonly="true"`属性开启只读。

```html
<r-input-number value="1" readonly="true"></r-input-number>
```

不可编辑

- 通过设置`editable="false"`属性控制是否能编辑。

```html
<r-input-number value="1" editable="false"></r-input-number>
```

按钮位置

- 通过设置 `controls-outside="true"` 属性可以将按钮位置置于输入框两侧。

```html
<r-input-number value="1" controls-outside="true"></r-input-number>
```

<p style="font-size: 32px">Attributes</p>

### InputNumber

| 属性             | 说明                                                       | 默认值    |
| :--------------- | :--------------------------------------------------------- | :-------- |
| max              | 最大值                                                     | Infinity  |
| min              | 最小值                                                     | -Infinity |
| value            | 输入框当前值                                               | -         |
| controls-outside | 按钮位置是否置于两侧                                       | false     |
| step             | 每次改变的步伐，可以是小数                                 | 1         |
| size             | 输入框尺寸，可选值为`large`、`small`或者不填               | -         |
| disabled         | 设置禁用状态                                               | false     |
| placeholder      | 占位文本                                                   | -         |
| formatter        | 指定输入框展示值的格式                                     | -         |
| parser           | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | -         |
| readonly         | 是否设置为只读                                             | false     |
| editable         | 是否可编辑                                                 | true      |
| precision        | 数值精度                                                   | -         |
| input-id         | 给内部实际的输入框元素设置 `id`                            | -         |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                                    | 类型   |
| ---- | ------------------------------------------------------- | ------ |
| el   | 配置当前选定的 input-number，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `value`
- `step`
- `disabled`
- `readOnly`
- `editable`
- `events(options)`

| 返回值   | 说明                                   | 类型      |
| -------- | -------------------------------------- | --------- |
| value    | 响应式设置输入框当前值                 | Boolean   |
| step     | 响应式设置每次改变的步伐               | Number    |
| disabled | 响应式设置禁用状态                     | Boolean   |
| readOnly | 响应式设置是否设置为只读               | Boolean   |
| editable | 响应式设置是否可编辑                   | Boolean   |
| events   | 非响应式API，添加 InputNumber 的事件， | Functioin |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                         | 回调参数                    |
| :------- | :--------------------------- | :-------------------------- |
| onChange | 数值改变时的回调，返回当前值 | (value: number) => void     |
| onFocus  | 聚焦时触发                   | (event: InputEvent) => void |
| onBlur   | 失焦时触发                   | 无                          |