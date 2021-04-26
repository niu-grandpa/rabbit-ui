<template>
    <article class="markdown">
        <Describe title="Dropdown 下拉菜单" desc="向下弹出的列表。" name="Dropdown">
            <li>
                当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
            </li>
        </Describe>
        <Example next-title="触发方式">
            <template #content>
                <r-dropdown id="demo">
                    <a> 下拉菜单 <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
                    <r-dropdown-menu>
                        <r-dropdown-item
                            v-for="item in list2"
                            :disabled="item.disabled"
                            :key="item.key"
                        >
                            {{ item.value }}
                        </r-dropdown-item>
                    </r-dropdown-menu>
                </r-dropdown>

                <r-dropdown style="margin-left: 20px">
                    <button class="rab-btn rab-btn-primary">
                        下拉菜单 <i class="rab-icon rab-icon-ios-arrow-down"></i>
                    </button>
                    <r-dropdown-menu>
                        <r-dropdown-item
                            v-for="item in list2"
                            :disabled="item.disabled"
                            :key="item.key"
                        >
                            {{ item.value }}
                        </r-dropdown-item>
                    </r-dropdown-menu>
                </r-dropdown>
                <p>最简单的下拉菜单，触发对象可以是链接、按钮等各种元素。</p>
                <p>本例还展示了禁用项和分隔线。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="对齐方向">
            <template #content>
                <r-dropdown>
                    <a> hover 触发 <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
                    <r-dropdown-menu>
                        <r-dropdown-item v-for="item in list1" :key="item.key">
                            {{ item.value }}
                        </r-dropdown-item>
                    </r-dropdown-menu>
                </r-dropdown>

                <r-dropdown trigger="click" style="margin-left: 20px">
                    <a> click 触发 <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
                    <r-dropdown-menu>
                        <r-dropdown-item v-for="item in list1" :key="item.key">
                            {{ item.value }}
                        </r-dropdown-item>
                    </r-dropdown-menu>
                </r-dropdown>

                <r-dropdown trigger="contextMenu" style="margin-left: 20px">
                    <a> 右键触发 <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
                    <r-dropdown-menu>
                        <r-dropdown-item>返回</r-dropdown-item>
                        <r-dropdown-item style="color: #ed4014">删除</r-dropdown-item>
                    </r-dropdown-menu>
                </r-dropdown>
                <p>
                    通过设置属性 <code>trigger</code> 可以更改触发方式，可选项为 click 、
                    hover(默认)、contextMenu(右键)
                </p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="嵌套用法">
            <template #content>
                <r-dropdown placement="bottom-start">
                    <a> 菜单(左) <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
                    <r-dropdown-menu>
                        <r-dropdown-item v-for="item in list1" :key="item.key">
                            {{ item.value }}
                        </r-dropdown-item>
                    </r-dropdown-menu>
                </r-dropdown>

                <r-dropdown>
                    <a style="margin-left: 20px">
                        菜单(居中) <i class="rab-icon rab-icon-ios-arrow-down"></i>
                    </a>
                    <r-dropdown-menu>
                        <r-dropdown-item v-for="item in list1" :key="item.key">
                            {{ item.value }}
                        </r-dropdown-item>
                    </r-dropdown-menu>
                </r-dropdown>

                <r-dropdown placement="bottom-end" style="margin-left: 20px">
                    <a> 菜单(右) <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
                    <r-dropdown-menu>
                        <r-dropdown-item v-for="item in list1" :key="item.key">
                            {{ item.value }}
                        </r-dropdown-item>
                    </r-dropdown-menu>
                </r-dropdown>
                <p>
                    通过设置属性 <code>placement</code> 可以更改下拉菜单出现的方向，与 Poptip 和
                    Tooltip 配置一致，支持 12 个方向，详见 API。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example>
            <template #content>
                <r-dropdown placement="bottom-start">
                    <a> 北京小吃 <i class="rab-icon rab-icon-ios-arrow-down"></i> </a>
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
                <p>下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Code5 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Dropdown from 'rabbitui/dropdown';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5 } from '../markdown-code/dropdown';

const list1 = [
    { value: '老干妈', key: 1 },
    { value: '炸酱面', key: 2 },
    { value: '葱油饼', key: 2 },
    { value: '黄金糕', key: 4 },
    { value: '冰糖葫芦', key: 5 }
];
const list2 = [
    { value: '老干妈', key: 1 },
    { value: '炸酱面', key: 2 },
    { value: '葱油饼', disabled: true, key: 2 },
    { value: '黄金糕', key: 4 },
    { value: '冰糖葫芦', disabled: true, key: 5 }
];

onMounted(() => {
    const dropdown = new Dropdown();
    dropdown.config('#demo').events({
        onClick: (index: number) => {
            console.log(`当前索引项：${index}`);
        }
    });
});
</script>
