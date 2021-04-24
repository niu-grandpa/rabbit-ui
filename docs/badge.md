# Badge 徽标数

图标右上角的圆形徽标数字。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Badge()`

## 何时使用

- 一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码示例

基础用法

- 简单的徽章展示，当 `count` 为 `0` 时，默认不显示，可以设置属性 `show-zero="true"` 修改为显示。

```html
<r-badge count="3">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="0" show-zero="true">
  <a class="demo-badge"></a>
</r-badge>
```

小红点

- 没有具体的数字。

```html
<r-badge dot="true">
  <a class="demo-badge"></a>
</r-badge>
<r-badge dot="true">
  <i class="rab-icon rab-icon-ios-notifications-outline" style="font-size: 26px"></i>
</r-badge>
<r-badge dot="true">
  <a>可以是一个链接</a>
</r-badge>
```

封顶数字

- 超过 `maxCount` 的会显示为 `${maxCount}+`，默认的 `maxCount` 为 `99`。

```html
<r-badge count="99">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="100">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="99" max-count="10">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="1000" max-count="999">
  <a class="demo-badge"></a>
</r-badge>
```

独立使用及自定义样式 

- 不包裹任何元素即是独立使用，可自定样式展现。在右上角的 badge 则限定为红色。

```html
<style>
    .demo-badge-alone sup {
      background: #5cb85c !important;
    }
</style>
<r-badge count="25"></r-badge>
<r-badge count="15" class="demo-badge-alone"></r-badge>
```

自定义内容

设置 `text` 属性，可以自定义显示内容。

```html
<r-badge text="new">
  <a class="demo-badge"></a>
</r-badge>
<r-badge text="hot">
  <a class="demo-badge"></a>
</r-badge>
```

自定义位置

设置 `offset` 属性，可以自定义徽标的位置

```html
<r-badge count="3" offset="[5,10]">
  <a class="demo-badge"></a>
</r-badge>
```



状态点 

- 用于表示状态的小圆点。

```html
<r-badge status="success"></r-badge>
<r-badge status="error"></r-badge>
<r-badge status="default"></r-badge>
<r-badge status="processing"></r-badge>
<r-badge status="warning"></r-badge>
<r-badge status="error"></r-badge>
<br />
<r-badge status="success" text="Success"></r-badge>
<br />
<r-badge status="error" text="Error"></r-badge>
<br />
<r-badge status="default" text="Default"></r-badge>
<br />
<r-badge status="processing" text="Processing"></r-badge>
<br />
<r-badge status="warning" text="Warning"></r-badge>
```

多彩徽标

- 属性 `color` 可以设置更多预设的状态点颜色，或者自定义颜色。

```html
<strong>预设：</strong>
<br>
<r-badge color="blue" text="blue"></r-badge> <br />
<r-badge color="green" text="green"></r-badge> <br />
<r-badge color="red" text="red"></r-badge> <br />
<r-badge color="yellow" text="yellow"></r-badge> <br />
<r-badge color="pink" text="pink"></r-badge> <br />
<r-badge color="magenta" text="magenta"></r-badge> <br />
<r-badge color="volcano" text="volcano"></r-badge> <br />
<r-badge color="orange" text="orange"></r-badge> <br />
<r-badge color="gold" text="gold"></r-badge> <br />
<r-badge color="lime" text="lime"></r-badge> <br />
<r-badge color="cyan" text="cyan"></r-badge> <br />
<r-badge color="geekblue" text="geekblue"></r-badge> <br />
<r-badge color="purple" text="purple"></r-badge> <br />
<br>
<strong>自定义：</strong>
<br>
<r-badge color="#2db7f5" text="#2db7f5"></r-badge> <br />
```

预设颜色

- 使用 `type` 属性，可以设置不同的颜色。

```html
<r-badge count="6" type="primary">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="6" type="success">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="6" type="normal">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="6" type="info">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="6" type="error">
  <a class="demo-badge"></a>
</r-badge>
<r-badge count="6" type="warning">
  <a class="demo-badge"></a>
</r-badge>
```

<p style="font-size: 32px">Attributes</p>

### Badge

| 属性      | 说明                                                         | 默认值 |
| --------- | ------------------------------------------------------------ | ------ |
| count     | 显示的数字，大于`maxCount`时，显示`${maxCount}+`，为 0 时隐藏 | -      |
| max-count | 展示封顶的数字值                                             | 99     |
| dot       | 不展示数字，只有一个小红点，如需隐藏 dot，详见下方 config 方法 | false  |
| type      | 使用预设的颜色，可选值为 success、primary、normal、error、warning、info | -      |
| show-zero | 当数值为 0 时，是否展示 Badge                                | false  |
| status    | 设置 Badge 为状态点，可选值为 success、processing、default、error、warning | -      |
| text      | 自定义内容，如果设置了 status，则为状态点的文本              | -      |
| offset    | 设置状态点的位置偏移，格式为 [x, y]                          | -      |
| color     | 设置更多状态点的颜色或自定义颜色                             | -      |

