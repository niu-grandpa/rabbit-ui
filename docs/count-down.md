# CountDown 倒计时

根据设置目标时间来倒计时的组件。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.CountDown()`

## 何时使用

- 当页面某个部分或功能需要进行倒计时


## 代码示例

基础用法

- 最简单的用法
- 设置的时间格式为 `YYYY/MM/DD HH:mm:ss` 或 `YYYY-MM-DD HH:mm:ss` 

```html
<r-count-down id="test1"></r-count-down>
<r-count-down id="test2"></r-count-down>

<script>
	const countDown = new Rabbit.CountDown();
    
    const date = new Date();

    const YYMMDD = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    const h = date.getHours();
    const mm = date.getMinutes();

    // 'YY/MM/DD hh:mm:ss'
    countDown.config('#test1').endTime = `${YYMMDD} ${h + 1}:00:00`;

    countDown.config('#test2').endTime = `${YYMMDD} ${h}:${mm + 1}:00`;

    countDown.config('#test2').events({
        onStop: (stop) => {
            if (stop) alert('倒计时结束!');
        }
    });
</script>
```

<p style="font-size: 32px">Attributes</p>

### CountDown

| 属性     | 说明                     | 默认值 |
| -------- | ------------------------ | ------ |
| end-time | 设置倒计时结束的目标时间 | -      |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                                  | 类型   |
| ---- | ----------------------------------------------------- | ------ |
| el   | 配置当前选定的 count-down，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `endTime`
- `events(options)`

| 返回值  | 说明                            | 类型     | 默认值 |
| ------- | ------------------------------- | -------- | ------ |
| endTime | 响应式设置倒计时结束的目标时间  | String   | -      |
| events  | 非响应式API，添加倒计时的事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性   | 说明                   | 回调参数                   |
| :----- | :--------------------- | :------------------------- |
| onStop | 倒计时结束后触发的事件 | (stop:  boolean)  =>  void |