# Dropdown 下拉菜单

向下弹出的列表。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Dropdown()`

## 何时使用

- 当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 代码示例

 基础用法

- 最简单的下拉菜单，触发对象可以是链接、按钮等各种元素。

- 本例还展示了禁用项和分隔线。

```html
<r-dropdown id="demo">
  <a href="javascript:void(0)">
          下拉菜单 <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item disabled>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item divided>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown style="margin-left: 20px">
  <button class="rab-btn rab-btn-primary">
          下拉菜单 <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </button>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item disabled>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item divided>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<script>
	const dropdown = new Rabbit.Dropdown();
    dropdown.config('#demo').events({
        onClick: (index) => {
            console.log(`当前索引项：${index}`);
        }
    });
</script>
```

触发方式 

- 通过设置属性 `trigger` 可以更改触发方式，可选项为 click 、 hover(默认)、contextMenu(右键)

```html
<r-dropdown>
  <a href="javascript:void(0)">
          hover 触发 <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown trigger="click" style="margin-left: 20px">
  <a href="javascript:void(0)">
          click 触发 <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown trigger="contextMenu" style="margin-left: 20px">
  <a href="javascript:void(0)">
          右键触发 <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </a>
  <r-dropdown-menu>
      <r-dropdown-item>返回</r-dropdown-item>
      <r-dropdown-item style="color: #ed4014">删除</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>
```

对齐方向

- 通过设置属性 `placement` 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。

```html
<r-dropdown placement="bottom-start">
  <a href="javascript:void(0)">
          菜单(左) <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown>
  <a href="javascript:void(0)" style="margin-left: 20px">
          菜单(居中) <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown placement="bottom-end" style="margin-left: 20px">
  <a href="javascript:void(0)">
          菜单(右) <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>
```

嵌套用法 

- 下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。

```html
<r-dropdown placement="bottom-start">
  <a href="javascript:void(0)">
          北京小吃 <i class="rab-icon rab-icon-ios-arrow-down"></i>
      </a>
  <r-dropdown-menu>
      <r-dropdown-item>豆汁儿</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>驴打滚</r-dropdown-item>
      <!-- 嵌套下拉菜单 start -->
      <r-dropdown placement="right-start">
          <r-dropdown-item>
              北京烤鸭 <i class="rab-icon rab-icon-ios-arrow-forward"></i>
          </r-dropdown-item>
          <r-dropdown-menu>
              <r-dropdown-item>壁炉烤鸭</r-dropdown-item>
              <r-dropdown-item>焖炉烤鸭</r-dropdown-item>
          </r-dropdown-menu>
      </r-dropdown>
      <!-- 嵌套下拉菜单 end -->
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>
```

<p style="font-size: 32px">Attributes</p>

#### Dropdown

| 属性      | 说明                                                         | 默认值 |
| :-------- | :----------------------------------------------------------- | :----- |
| trigger   | 触发方式，可选值为 `hover`（悬停）`click`（点击）`contextMenu`（右键） | hover  |
| placement | 下拉菜单出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`, 支持自动识别 | bottom |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                              | 类型   |
| ---- | ------------------------------------------------- | ------ |
| el   | 配置当前选定的 drawer，必须是选择器名称或者元素名 | String |

该方法返回以下方法：

- `events(options)`

| 返回值 | 说明                        | 类型     | 默认值 |
| ------ | --------------------------- | -------- | ------ |
| events | 非响应式API，添加抽屉事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性    | 说明             | 回调参数        |
| :------ | :--------------- | :-------------- |
| onClick | 点击菜单项时触发 | (index) => void |