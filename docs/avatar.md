# Avatar头像

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Avatar()`

用来代表用户或事物，支持图片、图标或字符展示。

## 代码示例

- 基础用法

头像有三种尺寸，两种形状可选。

`size` 可以设置为数值，但不能带任何单位只能是数字

```html
<r-avatar icon="md-person" size="64"></r-avatar>
<r-avatar icon="md-person" size="large"></r-avatar>
<r-avatar icon="md-person"></r-avatar>
<r-avatar icon="md-person" size="small"></r-avatar>

<r-avatar icon="md-person" shape="square" size="64"></r-avatar>
<r-avatar icon="md-person" shape="square" size="large"></r-avatar>
<r-avatar icon="md-person" shape="square"></r-avatar>
<r-avatar icon="md-person" shape="square" size="small"></r-avatar>
```

- 类型

支持三种类型：图片、icon 以及字符，其中 icon 和字符型可以自定义图标颜色及背景色。

```html
<r-avatar icon="md-person"></r-avatar>
<r-avatar>U</r-avatar>
<r-avatar>USER</r-avatar>
<r-avatar style="color: #f56a00; background-color: #fde3cf">U</r-avatar>
<r-avatar src="https://avatars3.githubusercontent.com/u/62378518"></r-avatar>
<r-avatar style="background-color: #87d068" icon="md-person"></r-avatar>
```

- 自动调整字符大小

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

```html
<r-avatar style="background-color: #f56a00">U</r-avatar>
<r-avatar style="background-color: #7265e6">Lucy</r-avatar>
<r-avatar style="background-color: #ffbf00">Tom</r-avatar>
<r-avatar style="background-color: #00a2ae">Edward</r-avatar>
```

- 自定义图标

自定义图标

```html
<r-avatar custom-icon="<i class='rab-icon rab-icon-md-happy'>"></r-avatar>
```

<p style="font-size: 32px">Attributes</p>

### Avatar

| 属性           | 说明                                                        | 默认值 |
| -------------- | ----------------------------------------------------------- | ------ |
| shape       | 指定头像的形状，可选值为 `circle`、`square`                 | circle |
| size        | 设置头像的大小，可选值为 `large`、`small`，支持设置具体数值 | -      |
| src         | 图片类头像的资源地址                                        | -      |
| icon        | 设置头像的图标类型，参考 `icon`                        | -      |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                                | 类型   |
| ---- | --------------------------------------------------- | ------ |
| el   | 配置当前选定的 avatar，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `events(options)`

| 返回值 | 说明                            | 类型     | 默认值 |
| ------ | ------------------------------- | -------- | ------ |
| events | 非响应式API，添加提示框的事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                                                     | 回调参数                                       |
| :------- | :------------------------------------------------------- | :--------------------------------------------- |
| onError  | 在设置 src 且图片加载不成功时触发                             | (event:Event) => void                         |
