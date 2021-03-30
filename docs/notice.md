# Notice 通知提醒框

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 代码示例

 基础用法

- 基本用法，默认在 4.5秒后关闭。如果 `desc` 参数为空或不填，则自动应用仅标题模式下的样式。

  建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。

```js
Rabbit.Notice.open({
  title: '这是通知标题',
  desc:
    '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
  onClick: () => {
    console.log('Notification Clicked!');
  },
  onClose: () => {
    console.log('Notification Close!');
  },
});
Rabbit.Notice.open({
  title: '这是通知标题',
});
```

提醒类型

- 带有状态图标的提醒。

`带描述信息`

```js
Rabbit.Notice.info({
  title: '这是通知标题',
  desc:
    '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
});

Rabbit.Notice.success({
  title: '这是通知标题',
  desc:
    '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
});

Rabbit.Notice.warning({
  title: '这是通知标题',
  desc:
    '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
});

Rabbit.Notice.error({
  title: '这是通知标题',
  desc:
    '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
});

```

`仅标题`

```js
Rabbit.Notice.info({
  title: '这是通知标题',
});

Rabbit.Notice.success({
  title: '这是通知标题',
});

Rabbit.Notice.warning({
  title: '这是通知标题',
});

Rabbit.Notice.error({
  title: '这是通知标题',
});

```

- 自定义时长

自定义时长，为 0 则不自动关闭。

```js
Rabbit.Notice.open({
  title: '这是通知标题',
  desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
  duration: 0,
});
```

Promise 接口

- 可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 Rabbit.Notice 将要结束时通过 then 显示新的 Rabbit.Notice 。
- 如果手动通过关闭按钮结束则无效

```js
Rabbit.Notice
  .open({
    title: '行程已发布',
    desc: '您的行程订单已发布，正在等待待车主接单...',
  })
  .then(() => {
    Rabbit.Notice
      .info({
        title: '已有车主接单啦！',
        desc: '你发布的行程订单已有车主接单了，请提前付款以免被取消订单！',
      })
      .then(() => {
        Rabbit.Notice.success({
          title: '费用支付成功',
          desc: '您的行程将在2021.9.9 12:30 开始',
        });
      });
  });

```

使用 HTML 片段

- `title` 和 `desc` 属性支持传入 HTML 片段

- 将`dangerouslyUseHTMLString`属性设置为 true， 就会被当作 HTML 片段处理。

```js
Rabbit.Notice.open({
  title: 'HTML片段',
  desc: `<strong>这是 <i>HTML</i> 片段</strong>`,
  dangerouslyUseHTMLString: true,
});

```

> `title` 和  `desc`  属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `title` 或 `desc` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `title` 或 `desc` 属性。

- 隐藏关闭按钮

设置属性 `closable` 为 `false` 可以不显示关闭按钮

```js
Rabbit.Notice.open({
  title: '这是通知标题',
  closable: false
});
```

<p style="font-size: 32px">API</p>

#### Notice 实例

通过直接调用以下方法来使用组件：

- `Rabbit.Notice.open(config)`
- `Rabbit.Notice.info(config)`
- `Rabbit.Notice.success(config)`
- `Rabbit.Notice.warning(config)`
- `Rabbit.Notice.error(config)`

组件同时提供 promise 接口。

- `Rabbit.Notice[level](config).then(afterClose)`

其中 `Rabbit.Notice[level]` 是组件已经提供的静态方法。`then` 接口返回值是 Promise。

参数 config 为对象，具体说明如下：

| 属性                     | 说明                                                     | 类型             | 默认值 |
| ------------------------ | -------------------------------------------------------- | ---------------- | ------ |
| title                    | 通知提醒的标题                                           | String           | -      |
| desc                     | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式 | String           | -      |
| duration                 | 自动关闭的延时，单位秒，不关闭可以写 0                   | Number           | 4.5    |
| key                      | 当前通知的唯一标识                                       | String \| Number | -      |
| closable                 | 是否显示关闭按钮                                         | Boolean          | true   |
| style                    | 自定义内联样式                                           | String           | -      |
| className                | 自定义 CSS class                                         | String           | -      |
| dangerouslyUseHTMLString | 是否将 title 或 desc 属性作为 HTML 片段处理              | Boolean          | false  |
| icon                     | 自定义图标                                               | String           | -      |
| onClose                  | 点击默认关闭按钮时触发的回调函数                         | Function         | -      |
| onClick                  | 点击通知时触发的回调函数                                 | Function         | -      |

#### 全局方法

还提供了全局配置、全局关闭某个通知和全局销毁的方法：

- `Rabbit.Notice.config(options)`
- `Rabbit.Notice.close(key)`
- `Rabbit.Notice.destroy()`

```js
Rabbit.Notice.config({
  top: 50,
  duration: 3
});
```

| 属性     | 说明                             | 类型   | 默认值 |
| -------- | -------------------------------- | ------ | ------ |
| top      | 通知组件距离顶端的距离，单位像素 | Number | 24     |
| duration | 默认自动关闭的延时，单位秒       | Number | 4.5    |

## FAQ

### 通过异步或者关闭按钮关闭通知后，为什么 `then`  接口的回调事件不生效

组件提供的 Promise接口是当实例自动关闭时才会触发的，并不是通过任意方式关闭组件都会调用该接口。

如果您想通过手动移除通知后接着添加回调事件，请使用 `onClose` api，至于要在异步移除后添加事件，建议是在异步的那个时机里添加