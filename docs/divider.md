# Divider 分割线

区隔内容的分割线。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Divider()`

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。


## 代码示例

水平分割线 

- 默认为水平分割线，可在中间加入文字。

```html
<p>
  从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
<r-divider></r-divider>
<p>
  从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
<r-divider>标题居中</r-divider>
<p>
  从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
<r-divider dashed="true"></r-divider>
<p>
  从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
```

垂直分割线

- 使用 `type="vertical"` 设置为行内的垂直分割线。

```html
文本
<r-divider type="vertical"></r-divider>
<a href="#">链接</a>
<r-divider type="vertical"></r-divider>
<a href="#">链接</a>
```

标题位置

- 修改分割线标题的位置。

```html
<r-divider orientation="left">左侧标题</r-divider>
<p>
  从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
<r-divider orientation="right">右侧标题</r-divider>
<p>
  从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
```

分割文字使用正文样式

- 使用 `plain` 可以设置为更轻量的分割文字样式。

```html
<r-divider plain="true">标题居中</r-divider>
<p>
    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
<r-divider plain="true" orientation="left">右侧标题</r-divider>
<p>
    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
<r-divider plain="true" orientation="right">右侧标题</r-divider>
<p>
    从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
</p>
```

<p style="font-size: 32px">Attributes</p>

#### Divider

| 属性        | 说明                                              | 默认值     |
| ----------- | ------------------------------------------------- | ---------- |
| type        | 水平还是垂直类型，可选值为 horizontal 或 vertical | horizontal |
| orientation | 分割线标题的位置，可选值为 left、right 或 center  | center     |
| dashed      | 是否虚线                                          | false      |
| size        | 标题文字尺寸，可选值为 small 或 不填              | -          |
| plain       | 文字是否显示为普通正文样式                        | false      |