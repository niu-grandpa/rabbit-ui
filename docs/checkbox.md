# Checkbox 多选框

多选框。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Card()`

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码示例

基本用法

- 简单的 checkbox

```html
<r-checkbox>Checkbox</r-checkbox>
```

组合使用

- 使用`r-checkbox-group`配合数组来生成组合。在组合使用时，`r-checkbox` 使用 `label` 来自动判断选中状态。

```html
<r-checkbox-group value="['facebook', 'github']">
  <r-checkbox label="twitter" icon="logo-twitter">Twitter</r-checkbox>
  <r-checkbox label="facebook" icon="logo-facebook">Facebook</r-checkbox>
  <r-checkbox label="github" icon="logo-github">Github</r-checkbox>
  <r-checkbox label="snapchat" icon="logo-snapchat">Snapchat</r-checkbox>
</r-checkbox-group>

<r-checkbox-group value="['西瓜']">
  <r-checkbox label="苹果">苹果</r-checkbox>
  <r-checkbox label="西瓜">西瓜</r-checkbox>
  <r-checkbox label="猕猴桃">猕猴桃</r-checkbox>
</r-checkbox-group>
```

不可用

- 通过设置`disabled`属性来禁用多选框。

```html
<r-checkbox checked="true" disabled>Checkbox</r-checkbox>
<r-checkbox-group value="['西瓜']">
  <r-checkbox label="苹果" disabled>苹果</r-checkbox>
  <r-checkbox label="西瓜" disabled>西瓜</r-checkbox>
  <r-checkbox label="猕猴桃">猕猴桃</r-checkbox>
</r-checkbox-group>
```

显示边框 

设置属性 `type="border"` 可以显示边框。

```html
<r-checkbox-group value="['苹果']">
  <r-checkbox label="苹果" type="border">苹果</r-checkbox>
  <r-checkbox label="西瓜" type="border">西瓜</r-checkbox>
  <r-checkbox label="猕猴桃" type="border">猕猴桃</r-checkbox>
</r-checkbox-group>
```

全选

- 在实现全选效果时，你可能会用到 `indeterminate` 属性。示例代码只是一种写法。

```html
<div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
  <r-checkbox id="checkAll">全选</r-checkbox>
</div>
<r-checkbox-group id="checkAllGroup">
  <r-checkbox label="苹果">苹果</r-checkbox>
  <r-checkbox label="西瓜">西瓜</r-checkbox>
  <r-checkbox label="猕猴桃">猕猴桃</r-checkbox>
</r-checkbox-group>

<script>
	const checkbox = new Rabbit.Checkbox();
    const checkAll = checkbox.config('#checkAll');
    const checkAllGroup = checkbox.config('#checkAllGroup');

    checkAll.events({
        onChange: (checked) => {
            if (checkAll.indeterminate) {
                checkAll.checked = false;
            } else {
                checkAll.checked = true;
            }
            checkAll.indeterminate = false;

            if (checked) {
                checkAllGroup.value = ['香蕉', '苹果', '西瓜'];
            } else {
                checkAllGroup.value = [];
            }
        }
    });

    checkAllGroup.events({
        onChange: (data) => {
            if (data.length === 0) {
                checkAll.checked = false;
                checkAll.indeterminate = false;
            } else if (data.length === 3) {
                checkAll.checked = true;
                checkAll.indeterminate = false;
            } else if (data.length && data.length < 3) {
                checkAll.indeterminate = true;
            }
        }
    });
</script>
```

<p style="font-size: 32px">Attributes</p>

### Checkbox

| 属性          | 说明                                                         | 默认值 |
| :------------ | :----------------------------------------------------------- | :----- |
| checked       | 单个是否选中                                                 | false  |
| label         | 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目 | -      |
| disabled      | 是否禁用当前项                                               | false  |
| size          | 单选框的尺寸，可选值为 `large`，`small` 或者不设置           | -      |
| border        | 是否显示边框                                                 | false  |
| icon          | 设置前缀图标                                                 | -      |
| indeterminate | 设置 indeterminate 状态，只负责样式控制                      | false  |

### RadioGroup

| 属性  | 说明                                                 | 默认值 |
| :---- | :--------------------------------------------------- | :----- |
| value | 指定选中项目的集合                                   | [ ]    |
| size  | 多选框组的尺寸，可选值为 `large`、`small` 或者不设置 | -      |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                                | 类型   |
| ---- | --------------------------------------------------- | ------ |
| el   | 配置当前选定的 checkbox，必须是选择器名称或者元素名 | String |

该方法返回以下三个值：

- `checked`
- `disabled`
- `value`
- `indeterminate`
- `events(options)`

| 返回值        | 说明                                         | 类型      | 默认值 |
| ------------- | -------------------------------------------- | --------- | ------ |
| checked       | 响应式设置单个是否选中                       | Boolean   | -      |
| disabled      | 响应式设置是否禁用当前项                     | Boolean   | -      |
| value         | 响应式设置 checkbox-group 当前选中的项目数据 | String[ ] | -      |
| indeterminate | 响应式设置 indeterminate 状态                | Boolean   | -      |
| events        | 非响应式API，添加 Checkbox 的事件，          | Function  | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                                                         | 回调参数                                      |
| :------- | :----------------------------------------------------------- | :-------------------------------------------- |
| onChange | 在选项状态发生改变时触发。当选中的配置目标是 checkbox-group 时，返回已选中的数组。如果是单个 checkbox 则返回当前选中状态 | (checked: boolean \| data: string[ ]) => void |

