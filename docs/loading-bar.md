# LoadingBar 加载进度条

全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

> LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度，当然也可以通过`update()`方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。

#### 在路由中使用

 ```js
// 部分代码省略
import Rabbit from 'rabbit-ui';

router.beforeEach((to, from, next) => {
    Rabbit.Loading.start();
    next();
});

router.afterEach(route => {
    Rabbit.Loading.finish();
});
 ```

#### 在异步请求中使用

```js
<script>
// 以jQuery的Ajax为例，部分代码省略
import $ from 'jquery';

function getData () {
  loading.start();
  $.ajax({
      url: '/api/someurl',
      type: 'get',
      success: () => {
          Rabbit.Loading.finish();
      }
      error: () => {
          Rabbit.Loading.error();
      }
  });
}
</script>
```

## 代码示例

 基本用法

- 点击 Start 开始进度，点击 Finish 结束。在调用`start()`方法后，组件会自动模拟进度，当调用`finish()`或`error()`时，补全进度并自动消失。

```js
Rabbit.Loading.statr();
Rabbit.Loading.finish();
Rabbit.Loading.error();
```

<p style="font-size: 32px">API</p>

#### LoadingBar instance

通过直接调用以下方法来使用组件：

- `Rabbit.Loading.start()`
- `Rabbit.Loading.finish()`
- `Rabbit.Loading.error()`
- `Rabbit.Loading.update(percent)`

函数及参数说明如下：

| 函数名 | 说明                                     | 参数                      |
| ------ | ---------------------------------------- | ------------------------- |
| start  | 开始从 0 显示进度条，并自动加载进度      | 无                        |
| finish | 结束进度条，自动补全剩余进度             | 无                        |
| error  | 以错误的类型结束进度条，自动补全剩余进度 | 无                        |
| update | 精确加载到指定的进度                     | percent，指定的进度百分比 |

另外提供了全局配置和全局销毁的方法：

- `Rabbit.Loading.config(options)`
- `Rabbit.Loading.destroy()`

```
Rabbit.Loading.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 5
});
```

| 属性        | 说明                                   | 类型   | 默认值  |
| :---------- | :------------------------------------- | :----- | :------ |
| color       | 进度条的颜色，默认为 Rabbit 主色       | String | primary |
| failedColor | 失败时的进度条颜色，默认为 Rabbit 主色 | String | error   |
| height      | 进度条高度，单位 px                    | Number | 2       |
| duration    | 隐藏时的持续时间，单位 ms              | Number | 800     |