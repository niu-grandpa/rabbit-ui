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
<r-dropdown id="test">
  <a>下拉菜单 <i class="rab-icon rab-icon-ios-arrow-down"></i></a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item disabled>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item divided>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown>
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
    dropdown.config('#test').events({
        onClick: (key) => {
            console.log(key);
        },
        onVisibleChange: (visible) => {
            console.log(visible);
        }
    });
</script>
```

触发方式 

- 通过设置属性 `trigger` 可以更改触发方式，可选项为 click 、 hover(默认)、contextMenu(右键)

```html
<r-dropdown>
  <a>hover 触发 <i class="rab-icon rab-icon-ios-arrow-down"></i></a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown trigger="click">
  <a>click 触发 <i class="rab-icon rab-icon-ios-arrow-down"></i></a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown trigger="contextMenu">
  <a>右键触发 <i class="rab-icon rab-icon-ios-arrow-down"></i></a>
  <r-dropdown-menu>
      <r-dropdown-item>返回</r-dropdown-item>
      <r-dropdown-item danger>删除</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown trigger="custom" class="custom" id="testCustom">
  <a onclick="handleOpen()">
      custom 触发 <i class="rab-icon rab-icon-ios-arrow-down"></i>
  </a>
  <r-dropdown-menu>
      <r-dropdown-item>
          <p>常用于各种自定义下拉内容的场景。</p>
          <div style="text-align: right;margin:10px;">
              <button class="rab-btn rab-btn-primary" onclick="handleClose()">关闭</button>
          </div>
      </r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<script>
    const dropdown = new Rabbit.Dropdown();
    // 下拉菜单自定义触发
    handleOpen = () => (dropdown.config('#testCustom').visible = true);
    handleClose = () => (dropdown.config('#testCustom').visible = false);
</script>
```

对齐方向

- 通过设置属性 `placement` 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。

```html
<r-dropdown placement="bottom-start">
  <a>菜单(左) <i class="rab-icon rab-icon-ios-arrow-down"></i></a>
  <r-dropdown-menu>
      <r-dropdown-item>老干妈</r-dropdown-item>
      <r-dropdown-item>炸酱面</r-dropdown-item>
      <r-dropdown-item>葱油饼</r-dropdown-item>
      <r-dropdown-item>黄金糕</r-dropdown-item>
      <r-dropdown-item>冰糖葫芦</r-dropdown-item>
  </r-dropdown-menu>
</r-dropdown>

<r-dropdown>
  <a>
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

<r-dropdown placement="bottom-end">
  <a>菜单(右) <i class="rab-icon rab-icon-ios-arrow-down"></i></a>
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
  <a>北京小吃 <i class="rab-icon rab-icon-ios-arrow-down"></i></a>
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

### Dropdown

| 属性                     | 说明                                                         | 默认值 |
| :----------------------- | :----------------------------------------------------------- | :----- |
| trigger                  | 触发方式，可选值为 `hover`（悬停）`click`（点击）`contextMenu`（右键）`custom` (自定义) | hover  |
| placement                | 下拉菜单出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`, 支持自动识别 | bottom |
| visible `1.3.0`          | 手动控制下拉框的显示，在 trigger = 'custom' 时使用           | false  |
| stop-propagation `1.3.0` | 是否开启 stop-propagation，在trigger = 'custom' 时，如果将事件绑定到 r-dropdown 上时最好使用 | false  |

### DropdownItem

| 属性           | 说明                         | 默认值 |
| :------------- | :--------------------------- | :----- |
| key `1.3.0`    | 用来标识这一项               | -      |
| disabled       | 禁用该项                     | -      |
| divided        | 显示分割线                   | -      |
| selected       | 标记该项为选中状态           | -      |
| danger `1.3.0` | 标记为危险项，用于删除项操作 |        |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                              | 类型   |
| ---- | ------------------------------------------------- | ------ |
| el   | 配置当前选定的 drawer，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `visible`

- `events(options)`

| 返回值          | 说明                          | 类型     | 默认值 |
| --------------- | ----------------------------- | -------- | ------ |
| visible `1.3.0` | 响应式设置或更新下拉框的显示  | Boolean  | false  |
| events          | 非响应式API，添加下拉菜单事件 | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性                    | 说明                                             | 回调参数                  |
| :---------------------- | :----------------------------------------------- | :------------------------ |
| onClick `1.3.0`         | 点击菜单项时触发，返回 r-dropdown-item 的 key 值 | (key:String)  =>  void    |
| onVisibleChange `1.3.0` | 菜单显示状态改变时调用                           | (visible:Boolean) => void |
| onClickOutside `1.3.0`  | 点击外部关闭下拉菜单时触发                       | (event:Event) => void     |

