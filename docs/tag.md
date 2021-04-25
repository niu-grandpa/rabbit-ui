# Tag 标签

进行标记和分类的小标签。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Tag()`

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码示例

基本用法

- 简单的展示，添加属性`closable="true"`可以关闭标签。

- 点击关闭标签时，可以使用 `onClose` 方法添加回调事件

```html
<r-tag>标签一</r-tag>
<r-tag>标签二</r-tag>
<r-tag closable="true" id="closeTag">标签三</r-tag>

<script>
	const tag = new Rabbit.Tag();
    tag.config('#closeTag').events({
        onClose: ($this) => {
            //....
        }
    })
</script>
```

样式类型

- 通过设置 `type` 属性为 `border` 或 `dot` 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。

```html
<r-tag type="border">标签三</r-tag>
<r-tag type="border" closable="true">标签四</r-tag>
<r-tag type="dot">标签一</r-tag>
<r-tag type="dot" closable="true">标签二</r-tag>
```

各种颜色

- 多种预设颜色，可自定义颜色。

```html
<r-tag color="default">default</r-tag>
<r-tag color="primary">primary</r-tag>
<r-tag color="success">success</r-tag>
<r-tag color="error">error</r-tag>
<r-tag color="warning">warning</r-tag>
<r-tag color="magenta">magenta</r-tag>
<r-tag color="red">red</r-tag>
<r-tag color="volcano">volcano</r-tag>
<r-tag color="orange">orange</r-tag>
<r-tag color="gold">gold</r-tag>
<r-tag color="yellow">yellow</r-tag>
<r-tag color="lime">lime</r-tag>
<r-tag color="green">green</r-tag>
<r-tag color="cyan">cyan</r-tag>
<r-tag color="blue">blue</r-tag>
<r-tag color="geekblue">geekblue</r-tag>
<r-tag color="purple">purple</r-tag>
<r-tag color="#FFA2D3">Custom Color</r-tag>
<br /><br />
<r-tag type="border" closable="true" color="primary">标签一</r-tag>
<r-tag type="border" closable="true" color="success">标签二</r-tag>
<r-tag type="border" closable="true" color="warning">标签三</r-tag>
<r-tag type="border" closable="true" color="error">标签四</r-tag>
<br /><br />
<r-tag type="dot" closable="true" color="primary">标签一</r-tag>
<r-tag type="dot" closable="true" color="success">标签二</r-tag>
<r-tag type="dot" closable="true" color="warning">标签三</r-tag>
<r-tag type="dot" closable="true" color="error">标签四</r-tag>
```

可选择

- 设置属性 `checkable="true"`，可以对标签进行选择，属性 `checked` 控制当前选择状态。

```html
<r-tag checkable="true" color="primary" id="checkedTag">标签一</r-tag>
<r-tag checkable="true" color="success">标签二</r-tag>
<r-tag checkable="true" color="error">标签三</r-tag>
<r-tag checkable="true" color="warning">标签四</r-tag>

<script>
	const tag = new Rabbit.Tag();
    tag.config('#checkedTag').events({
        onChange: (checked) => {
            console.log(checked);
        }
    })
</script>
```

尺寸

- 设置属性 `size` 可以显示不同尺寸的标签。

```html
<r-tag>默认标签</r-tag>
<r-tag size="medium">中号标签</r-tag>
<r-tag size="large">大号标签</r-tag>
```

<p style="font-size: 32px">Attributes</p>

### Tag

| 属性      | 说明                                                         | 默认值  |
| :-------- | :----------------------------------------------------------- | :------ |
| closable  | 标签是否可以关闭                                             | false   |
| checkable | 标签是否可以选择                                             | false   |
| checked   | 标签的选中状态                                               | true    |
| type      | 标签的样式类型，可选值为 `border`、`dot`或不填               | -       |
| color     | 标签颜色，预设颜色值为`default`、`primary`、`success`、`warning`、`error`、`blue`、`green`、`red`、`yellow`、`pink`、`magenta`、`volcano`、`orange`、`gold`、`lime`、`cyan`、`geekblue`、`purple`，也可以自定义颜色值。 | default |
| size      | 尺寸，可选值为 large、medium                                 | -       |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                           | 类型   |
| ---- | ---------------------------------------------- | ------ |
| el   | 配置当前选定的 tag，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `events(options)`

| 返回值 | 说明                        | 类型     | 默认值 |
| ------ | --------------------------- | -------- | ------ |
| events | 非响应式API，添加标签事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明               | 回调参数                  |
| :------- | :----------------- | :------------------------ |
| onClose  | 关闭时触发         | ($this:Element) => void   |
| onChange | 切换选中状态时触发 | (checked:Boolean) => void |