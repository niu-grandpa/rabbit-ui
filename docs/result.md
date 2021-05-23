# Result 结果

用于反馈一系列操作任务的处理结果。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Result()`。
>
> 该元素标签能够添加额外的子元素节点作为内容部分，并自动追加到指定的内部节点上，且额外添加的所有节点必须只能具有一个父元素包裹

## 何时使用

- 当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码示例

Success

- 成功的结果

```html
<r-result
  status="success"
  title="提交成功"
  subtitle="已提交申请，等待部门审核。"
  extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button> 
         <button type='button' class='rab-btn'>打印</button>"
>
</r-result>
```

Info

- 展示处理结果。

```html
<r-result
  title="请勿重复操作"
  extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>"
>
</r-result>
```

Warning

- 警告类型的结果。

```html
<r-result
  status="warning"
  title="操作发生了一些问题"
  extra="<button type='button' class='rab-btn rab-btn-primary'>重新提交</button>"
>
</r-result>
```

Error

- 复杂的错误反馈。
- 在 `r-result` 标签内部添加节点时，有且只能有一个子元素，所以需要用一个父级盒子包裹内容

```html
<style>
  .typography {
    overflow-wrap: break-word;
    margin-bottom: 8px;
  }

  .typography .rab-icon {
    color: red;
  }
</style>

<r-result
  status="error"
  title="提交失败"
  subtitle="请检查并修改以下信息后再重新提交"
  extra="<button type='button' class='rab-btn rab-btn-primary'>返回修改</button>"
>
  <div>
    <h4 class="typography">您提交的内容有以下错误:</h4>
    <div class="typography">
      <i class="rab-icon rab-icon-ios-close-circle-outline"></i> 您的帐户已被冻结。
      <a>立即解冻></a>
    </div>
    <div class="typography">
      <i class="rab-icon rab-icon-ios-close-circle-outline"></i> 您的帐户还没有资格申请。
      <a>申请解锁></a>
    </div>
  </div>
</r-result>

```

403

- 你没有此页面的访问权限。

```html
<r-result
  status="403"
  title="403"
  subtitle="对不起，您没有权限访问此页。"
  extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>"
>
</r-result>
```

404

- 此页面未找到。

```html
<r-result
  status="404"
  title="404"
  subtitle="对不起，您访问的页面不存在。"
  extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>"
>
</r-result>
```

500

- 服务器发生了错误。

```html
<r-result
  status="500"
  title="500"
  subtitle="对不起，服务器出了点问题。"
  extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>"
>
</r-result>
```

自定义图标

- 自定义 icon。

```html
<r-result
  icon="ios-happy"
  title="太棒了，我们已经完成了所有的操作！"
  extra="<button type='button' class='rab-btn rab-btn-primary'>下一步</button>"
>
</r-result>
```

<p style="font-size: 32px">Attributes</p>

### Result

| 属性     | 说明                                                         | 默认值 |
| -------- | ------------------------------------------------------------ | ------ |
| status   | 结果的状态，决定图标和颜色。可选值为 `success`、`error`、`info` 、 `warning` 、 `404`、`403`、 `500` | info   |
| title    | 标题文字                                                     | -      |
| subtitle | 结果描述                                                     | -      |
| extra    | 操作区，建议放置按钮组                                       | -      |
| icon     | 自定义图标                                                   | -      |
