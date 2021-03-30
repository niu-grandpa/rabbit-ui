# Poptip 气泡提示

点击/鼠标移入元素，弹出气泡式的卡片浮层。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Poptip()`

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和`Tooltip` 类似，具有很多相同配置，不同点是 `Poptip` 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。

`Poptip `还 `confirm` 确认框，与 `Modal`不同的是，它会出现在就近元素，相对轻量。

## 代码示例

 基础用法

- 支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。

```html
<r-poptip trigger="hover" title="提示标题" content="提示内容">
  <button type="button" class="rab-btn">hover 激活</button>
</r-poptip>
<r-poptip title="提示标题" content="提示内容">
  <button type="button" class="rab-btn">click 激活</button>
</r-poptip>
<r-poptip trigger="focus" title="提示标题" content="提示内容">
  <button type="button" class="rab-btn">focus 激活</button>
</r-poptip>
<r-poptip title="提示标题" content="请输入内容..." id="test-input">
  <input type="text" placeholder="配合输入框" oninput="handleChange(this.value)" />
</r-poptip>

<script>
    const poptip = new Rabbit.Poptip();
    handleChange = (val) => {
      poptip.config('#test-input').content = val;
    };
</script>
```

位置

- 组件提供了12个不同的方向显示`Poptip`，具体配置可查看`API`。

```html
<div class="top">
  <r-poptip title="提示标题" content="提示内容" placement="top-start">
      <button class="rab-btn">上左</button>
  </r-poptip>
  <r-poptip title="提示标题" content="提示内容">
      <button class="rab-btn">上边</button>
  </r-poptip>
  <r-poptip title="提示标题" content="提示内容" placement="top-end">
      <button class="rab-btn">上右</button>
  </r-poptip>
</div>
<div class="center">
  <div class="center-left">
      <r-poptip title="提示标题" content="提示内容" placement="left-start">
          <button class="rab-btn">左上</button> </r-poptip><br /><br />
      <r-poptip title="提示标题" content="提示内容" placement="left">
          <button class="rab-btn">左边</button> </r-poptip><br /><br />
      <r-poptip title="提示标题" content="提示内容" placement="left-end">
          <button class="rab-btn">左下</button>
      </r-poptip>
  </div>
  <div class="center-right">
      <r-poptip title="提示标题" content="提示内容" placement="right-start">
          <button class="rab-btn">右上</button> </r-poptip><br /><br />
      <r-poptip title="提示标题" content="提示内容" placement="right">
          <button class="rab-btn">右边</button> </r-poptip><br /><br />
      <r-poptip title="提示标题" content="提示内容" placement="right-end">
          <button class="rab-btn">右下</button>
      </r-poptip>
  </div>
</div>
<div class="bottom">
  <r-poptip title="提示标题" content="提示内容" placement="bottom-start">
      <button class="rab-btn">下左</button>
  </r-poptip>
  <r-poptip title="提示标题" content="提示内容" placement="bottom">
      <button class="rab-btn">下边</button>
  </r-poptip>
  <r-poptip title="提示标题" content="提示内容" placement="bottom-end">
      <button class="rab-btn">下右</button>
  </r-poptip>
</div>
```

嵌套复杂内容

- 通过 `config` 方法来实现复杂的内容。

```html
<r-poptip width="400" placement="right" id="test1">
  <button class="rab-btn">复杂内容</button>
</r-poptip>

<script>
	const poptip = new Rabbit.Poptip();
    const complexContent = `
      <div class="api">
          <table>
              <thead>
                  <tr>
                      <th>日期</th>
                      <th>姓名</th>
                      <th>地址</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
              </tbody>
          </table>
      </div>
    `;
	poptip.config('#test1').content = complexContent;
</script>
```

自动换行

- 设置属性 `word-wrap`，当超出宽度后，文本将自动换行，并两端对齐。

```html
<r-poptip
  word-wrap="true"
  width="200"
  content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"
>
  <button class="rab-btn">长文本</button>
</r-poptip>

```

确认框

- 通过设置属性`confirm`开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

```html
<r-poptip confirm="true" title="您确认删除这条内容吗？" id="test2">
  <button class="rab-btn">删除</button>
</r-poptip>
<r-poptip confirm="true" title="Are you sure delete this task?" ok-text="yes" cancel-text="no">
  <button class="rab-btn">国际化</button>
</r-poptip>

<script>
    const poptip = new Rabbit.Poptip();
    poptip.config('#test2').events({
        onOk: () => {
            Rabbit.Message.info('点击了确定');
        },
        onCancel: () => {
            Rabbit.Message.info('点击了取消');
        }
    });
</script>
```

<p style="font-size: 32px">Attributes</p>

#### Poptip

| 属性        | 说明                                                         | 默认值   |
| :---------- | :----------------------------------------------------------- | :------- |
| trigger     | 触发方式，可选值为`hover`（悬停）`click`（点击）`focus`（聚焦）,在 confirm 模式下，只有 click 有效 | click    |
| title       | 显示的标题                                                   | -        |
| content     | 显示的正文内容，只在非 confirm 模式下有效-                   | -        |
| placement   | 提示框出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`，支持自动识别top | top      |
| width       | 宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px | -        |
| confirm     | 是否开启对话框模式                                           | false    |
| disabled    | 是否禁用                                                     | false    |
| ok-text     | 确定按钮的文字，只在 confirm 模式下有效                      | 确定     |
| cancel-text | 取消按钮的文字，只在 confirm 模式下有效                      | 取消     |
| padding     | 自定义间距值                                                 | 8px 16px |
| offset      | 出现位置的偏移量                                             | 0        |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                              | 类型   |
| ---- | ------------------------------------------------- | ------ |
| el   | 配置当前选定的 poptip，必须是选择器名称或者元素名 | String |

该方法返回以下三个值：

- `title`

- `content`

- `events(options)`

| 返回值  | 说明                            | 类型             | 默认值 |
| ------- | ------------------------------- | ---------------- | ------ |
| title   | 响应式设置提示框标题            | String \| Number | -      |
| content | 响应式设置提示框的内容          | String\| Number  | -      |
| events  | 非响应式API，添加提示框的事件， | Function         | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                                    | 回调参数 |
| :------- | :-------------------------------------- | :------- |
| onShow   | 在提示框显示时触发                      | 无       |
| onHide   | 在提示框消失时触发                      | 无       |
| onOK     | 点击确定的回调，只在 confirm 模式下有效 | 无       |
| onCancel | 点击取消的回调，只在 confirm 模式下有效 | 无       |