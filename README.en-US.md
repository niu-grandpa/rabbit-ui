<p align="center">
    <a href="https://github.com/niu-grandpa/rabbit-ui">
        <img width="200" src="./assets/logo.svg">
    </a>
</p>

English | [简体中文](./README.md)

<h1>
RabbitUI
    <h3>A lightweight UI plug-in library written in TypeScript and based on JavaScript</h3>
</h1>


> The official documentation website is in the works

### Features

- Elegant, concise, and huge and bloated let people see the dazzling structure Say goodbye

- It does not rely on any third party framework, and is based on native JavaScript at the bottom, out-of-the-box

- Custom tags that use small amounts of HTML code and are semantically readable

- Can be used directly in Vue, React, or other existing projects

- Rich components and features to meet most site scenarios

- Careful, beautiful UI

-Documentation in detail

### Install

- With NPM, you'll need to use 'TypeScript' and write and use code in TS files. Make sure you understand it and can use it in general

```text
npm install rabbit-simple-ui --save
```

- Using a script tag for global use:

Import the file directly in the browser using the `script` and `link` tags, and use the global variable `Rabbit`.

```html
<!--import the style-->
<link rel="stylesheet" href="dist/styles/rabbit.css">
<!--import RabbitUI -->
<script type="text/javascript" src="rabbit.min.js"></script>
```

## Usage

With a CDN we can easily write an example using Rabbit UI:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>RabbitUI demo</title>
    <link rel="stylesheet" href="https://unpkg.com/rabbit-simple-ui/dist/styles/rabbit.css">
</head>
<body>
    <button type="button" class="rab-btn" onclick="show">Hello Rabbit UI</button>
    <r-modal title="Welcome" id="exampleModal">
       <p>Welcome to RabbitUI</p>
    </r-modal>
</body>
<script src="https://unpkg.com/rabbit-simple-ui/dist/rabbit.min.js"></script>
<script>
    // 初始化modal
    const modal = new Rabbit.Modal();
    show = function() {
        modal.config('#exampleModal').visable = true;  
    }
</script>
</html>
```

NPM environment

Use NPM to install, enjoy the convenience of the tool, work better with Webpack, and ES2015 is recommended.

```js
import Alert from 'rabbit-simple-ui/src/components/alert';
import Tooltip from 'rabbit-simple-ui/src/components/alert';
import Collapse from 'rabbit-simple-ui/src/components/alert';

new Alert();   
new Tooltip();
new Collapse();  
```

Using css via import:

```js
import 'rabbit-simple-ui/dist/styles/rabbit.css';
```

## Import as needed

With the help of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), you can load components on demand and reduce file size. First install and configure it in file '.babelrc ':

```text
npm install babel-plugin-import --save-dev
```

```json
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "rabbit-simple-ui",
    "libraryDirectory": "src/components"
  }]]
}
```

Then import the components as needed to reduce the size:

```js
import { Alert, Message } from 'rabbit-simple-ui';
```

### Especially remind

-According to the need to still need to import the reference style that the **main js** or the root component `import 'rabbit-simple-ui/dist/styles/rabbit.css';`

## Browser Support

Modern browsers and Internet Explorer 9+.

## Related links

- [TypeScript](https://www.tslang.cn/)
- [Webpack](http://webpack.github.io/)
- [Iconfont](https://www.iconfont.cn/)
- [ViewUI](https://www.iviewui.com/)
- [Ant Design](https://ant.design/index-cn)
- [Ant Design of Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Element](https://element.eleme.cn/)
- [Element-angular](https://element-angular.faas.ele.me/guide/install)

## Contribute

If you wish to participate in contribution, welcome [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls) or email contact 2864103063@qq.com, the contribution guide has not yet been produced

## LICENSE

[MIT](https://github.com/niu-grandpa/RabbitUI/blob/master/LICENSE)