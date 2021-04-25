# Steps 步骤条

引导用户按照流程完成任务的导航条。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Steps()`

## 何时使用

- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 代码示例

基础用法

- 基本用法，组件会根据`current`自动判断各步骤状态。

```html
<r-steps current="1">
  <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
  <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
</r-steps>
```

迷你版

- 设置属性`size`为`small`启用迷你版。

```html
<r-steps current="2" size="small">
  <r-step title="已完成"></r-step>
  <r-step title="已完成"></r-step>
  <r-step title="进行中"></r-step>
  <r-step title="待进行"></r-step>
</r-steps>
```

带图标的步骤条

- 通过设置`r-step`的`icon`属性可以自定义图标。

```html
<r-steps current="1">
  <r-step title="注册" icon="ios-person"></r-step>
  <r-step title="上传头像" icon="ios-camera"></r-step>
  <r-step title="验证邮箱" icon="ios-mail"></r-step>
</r-steps>
```

切换步骤

- 通常配合内容及按钮使用，表示一个流程的处理进度。

```html
<r-steps current="0" id="test">
  <r-step title="步骤1"></r-step>
  <r-step title="步骤2"></r-step>
  <r-step title="步骤3"></r-step>
  <r-step title="步骤4"></r-step>
</r-steps>
<br />
<button class="rab-btn rab-btn-primary" onclick="handlClickNext()">下一步</button>

<script>
	const Steps = new Rabbit.Steps();
    
    let n = 0;
    handlClickNext = () => {
        if (n == 3) {
            n = 0;
        } else {
            n += 1;
        }
        Steps.config('#test').current = n;
    };
</script>
```

垂直方向

- 设置属性`direction`为`vertical`在垂直方向展示。

```html
<r-steps current="2" direction="vertical">
  <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
  <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
  <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
</r-steps>
```

步骤运行错误

设置`r-steps`的属性`status`为`error`指定当前步骤状态。

```html
<r-steps current="1" status="error">
  <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
  <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
</r-steps>
```

<p style="font-size: 32px">Attributes</p>

### Steps

整体步骤条

| 属性      | 说明                                                         | 默认值     |
| :-------- | :----------------------------------------------------------- | :--------- |
| current   | 当前步骤，从 0 开始计数                                      | 0          |
| status    | 当前步骤的状态，可选值为`wait`、`process`、`finish`、`error` | process    |
| size      | 步骤条的尺寸，可选值为`small`或者不写                        | -          |
| direction | 步骤条的方向，可选值为`horizontal`（水平）或`vertical`（垂直） | horizontal |

### Step

子项步骤

| 属性    | 说明                                                         | 默认值  |
| :------ | :----------------------------------------------------------- | :------ |
| status  | 步骤的状态，可选值为`wait`、`process`、`finish`、`error`，不设置时自动判断 | process |
| title   | 标题                                                         | -       |
| content | 步骤的详细描述，可选                                         | -       |
| icon    | 步骤的图标，可选                                             | -       |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                             | 类型   |
| ---- | ------------------------------------------------ | ------ |
| el   | 配置当前选定的 steps，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `current`
- `status`
- `title`
- `content`
- `itemStatus`

| 返回值     | 说明                                                         | 类型          | 默认值  |
| ---------- | ------------------------------------------------------------ | ------------- | ------- |
| current    | 响应式设置或更新当前步骤                                     | Number        | 0       |
| status     | 响应式设置或更新当前步骤的状态，可选值为`wait`、`process`、`finish`、`error` | String        | process |
| title      | 响应式设置或更新 title                                       | String        | -       |
| content    | 响应式设置或更新 content                                     | String        | -       |
| itemStatus | 响应式设置或更新每一个子项步骤的状态                         | Array<string> | -       |
