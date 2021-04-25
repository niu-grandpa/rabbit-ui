# Time 相对时间

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Time()`

常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。

## 代码示例

基础用法

- 为属性 `time` 设置一个时间戳或 Date，可自动转为相对于当前的时间。

```html
<r-time time="new Date().getTime() - 60 * 3 * 1000"></r-time>
<r-time time="new Date().getTime() - 86400 * 3 * 1000"></r-time>
```

自动更新间隔

- 设置自动更新间隔，默认为 60 秒。

```html
<r-time time="new Date()" interval="1"></r-time>
```

不同类型

- 设置属性 `type` 可以根据情况，设置不同的显示类型。

```html
<r-time time="new Date().getTime() - 86400 * 3 * 1000"></r-time>
<r-time time="new Date().getTime() - 86400 * 3 * 1000" type="date"></r-time>
<r-time time="new Date().getTime() - 86400 * 3 * 1000" type="datetime"></r-time>
```

锚点

- 设置 `hash` 属性，相对时间可以点击并定位锚点。

```html
<r-time time="new Date().getTime() - 86400 * 3 * 1000" hash="#hash"></r-time>
```

<p style="font-size: 32px">Attributes</p>

### Time

| 属性     | 说明                                         | 默认值   |
| -------- | -------------------------------------------- | -------- |
| time     | 需要对比的时间，可以是时间戳或 Date 类型     | -        |
| type     | 类型，可选值为 relative、date 或 datetime    | relative |
| interval | 自动更新的间隔，单位：秒                     | 60       |
| hash     | 填写该值，点击会定位锚点                     | -        |

## 改变语言配置 (全局)

在 `NodeJs` 或者 `Webpack` 环境下，要改变全局语言配置，只需调用实例的内置函数 `locale`，并引入  Day.js 的语言文件来自由切换其他语言。

```js
import 'dayjs/locale/de';  // ES 2015 
// require('dayjs/locale/de'); // CommonJs

const time = new Rabbit.Time();
time.locale('de');
```

[支持的语言列表](https://github.com/iamkun/dayjs/tree/dev/src/locale)

