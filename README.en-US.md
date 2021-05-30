<p align="center">
    <a href="https://github.com/niu-grandpa/rabbit-ui">
        <img width="200" src="./assets/logo.svg">
    </a>
</p>

English | [简体中文](./README.md)

# RabbitUI

### A simple UI component library based on JavaScrip

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
[![](https://img.shields.io/npm/v/rabbit-simple-ui.svg?style=flat-square)](https://www.npmjs.com/package/rabbit-simple-ui)
[![](https://data.jsdelivr.com/v1/package/npm/rabbit-simple-ui/badge)](https://www.jsdelivr.com/package/npm/rabbit-simple-ui) 

### Features

- Use semantic custom elements for easy resolution

- Elegant and simple, say goodbye to the huge and bloated dazzling structure

- Does not rely on any third party framework, the underlying base is native JavaScript, import out of the box

- Can be used in Vue, jQuery or other existing projects

- Rich components and features to suit most site scenarios

- Careful, beautiful UI

- Documents that are minutiae

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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rabbit-simple-ui/dist/styles/rabbit.css">
</head>
<body>
    <button type="button" class="rab-btn" onclick="show">Hello Rabbit UI</button>
    <r-modal title="Welcome" id="exampleModal">
       <p>Welcome to RabbitUI</p>
    </r-modal>
</body>
<script src="https://cdn.jsdelivr.net/npm/rabbit-simple-ui/dist/rabbit.min.js"></script>
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