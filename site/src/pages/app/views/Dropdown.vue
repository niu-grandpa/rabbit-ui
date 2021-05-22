<template>
  <article class="markdown">
    <ExampleHeaderArea name="Dropdown" title="下拉菜单" desc="向下弹出的列表。">
      <li>
        当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
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
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>最简单的下拉菜单，触发对象可以是链接、按钮等各种元素。</p>
        <p>本例还展示了禁用项和分隔线。</p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
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
          <a @click="handleOpen"> custom 触发 <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
          <r-dropdown-menu>
            <r-dropdown-item>
              <p>常用于各种自定义下拉内容的场景。</p>
              <div style="text-align: right; margin: 10px">
                <button class="rab-btn rab-btn-primary" @click="handleClose">关闭</button>
              </div>
            </r-dropdown-item>
          </r-dropdown-menu>
        </r-dropdown>
      </template>
      <template #header><span id="触发方式">触发方式</span></template>
      <template #desc>
        通过设置属性<code>trigger</code>可以更改触发方式，可选项为 click 、
        hover(默认)、contextMenu(右键)
      </template>
      <template #code><Trigger /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
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
          <a> 菜单(居中) <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
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
      </template>
      <template #header><span id="对齐方向">对齐方向</span></template>
      <template #desc>
        通过设置属性<code>placement</code>可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip
        配置一致，支持 12 个方向，详见 API。
      </template>
      <template #code><Placement /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
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
      </template>
      <template #header><span id="嵌套用法">嵌套用法</span></template>
      <template #desc>下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。</template>
      <template #code><Nested /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Dropdown from '../../../../../src/components/dropdown'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Nested,
  Trigger,
  Placement,
  APITable
} from '../../../examples-code/components/dropdown'

let dropdown: Dropdown

onMounted(() => {
  dropdown = new Dropdown()
  dropdown.config('#test').events({
    onClick: (key) => {
      console.log(key)
    },
    onVisibleChange: (visible) => {
      console.log(visible)
    }
  })
})

const handleOpen = () => (dropdown.config('#testCustom').visible = true)
const handleClose = () => (dropdown.config('#testCustom').visible = false)

const anchors: string[] = ['基础用法 ', '触发方式', '对齐方向', '嵌套用法', 'API']
</script>

<style lang="less" scoped>
r-dropdown {
  margin-right: 16px;

  &.custom r-dropdown-item:hover {
    background-color: #fff;
    cursor: default;
  }
}
</style>