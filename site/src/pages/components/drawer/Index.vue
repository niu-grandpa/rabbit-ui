<template>
    <article class="markdown">
        <Describe title="Drawer 抽屉" desc="屏幕边缘滑出的浮层面板。" name="Drawer">
            <li>
                抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。
            </li>
            <li>
                当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
            </li>
            <li>
                当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。
            </li>
        </Describe>
        <Example next-title="自定义位置">
            <template #content>
                <button class="rab-btn rab-btn-primary" @click="handleClick">Open</button>
                <r-drawer title="Basic Drawer" id="test1">
                    <div>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </div>
                </r-drawer>
                <p>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。</p>
                <p>注意！容器内的节点必须具有一个父元素</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="在当前 DOM  内打开">
            <template #content>
                <button class="rab-btn" @click="Top">Top</button>
                <button class="rab-btn" @click="Left">Left</button>
                <button class="rab-btn" @click="Bottom">Bottom</button>
                <button class="rab-btn" @click="Right">Right</button>
                <r-drawer
                    title="Basic Drawer"
                    v-for="item in list"
                    :id="item.id"
                    :placement="item.placement"
                    :key="item.id"
                >
                    <div>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </div>
                </r-drawer>
                <p>自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="多层抽屉">
            <template #content>
                <div class="container">
                    <button class="rab-btn rab-btn-primary" @click="openInner">Open Inner</button>
                    <r-drawer title="Basic Drawer" inner="true" id="test6">
                        <p>Some contents...</p>
                    </r-drawer>
                </div>
                <p>设置抽屉在当前元素内打开</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example>
            <template #content>
                <button class="rab-btn rab-btn-primary" @click="handleClick1">多层抽屉</button>
                <r-drawer id="test7" title="多层抽屉" width="512px">
                    <button class="rab-btn rab-btn-primary" @click="handleClick2">
                        打开第二层抽屉
                    </button>
                </r-drawer>
                <r-drawer id="test8" title="第二层抽屉">
                    <p>这是第二层抽屉。</p>
                </r-drawer>
                <p>在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Code5 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Drawer from '../../../../../src/components/drawer';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5 } from '../markdown-code/drawer';

const list = [
    {
        id: 'test2',
        placement: 'top'
    },
    {
        id: 'test3',
        placement: 'left'
    },
    {
        id: 'test4',
        placement: 'bottom'
    },
    {
        id: 'test5',
        placement: ''
    }
];

let drawer: any,
    visible = false,
    top = false,
    left = false,
    bottom = false,
    right = false,
    inner = false,
    first = false,
    second = false;

onMounted(() => {
    drawer = new Drawer();
    drawer.config('#test1').events({
        onClose: () => {
            console.log('关闭抽屉');
        }
    });
});

const handleClick = () => {
    visible === false ? (visible = !visible) : visible;
    drawer.config('#test1').visable = visible;
};
const Top = () => {
    top === false ? (top = !top) : top;
    drawer.config('#test2').visable = top;
};
const Left = () => {
    left === false ? (left = !left) : left;
    drawer.config('#test3').visable = left;
};
const Bottom = () => {
    bottom === false ? (bottom = !bottom) : bottom;
    drawer.config('#test4').visable = bottom;
};
const Right = () => {
    right === false ? (right = !right) : right;
    drawer.config('#test5').visable = right;
};
const openInner = () => {
    inner === false ? (inner = !inner) : inner;
    drawer.config('#test6').visable = inner;
};
const handleClick1 = () => {
    first === false ? (first = !first) : first;
    drawer.config('#test7').visable = first;
};
const handleClick2 = () => {
    second === false ? (second = !second) : second;
    drawer.config('#test8').visable = second;
};
</script>

<style scope>
.container {
    width: 480px;
    height: 200px;
    line-height: 100px;
    margin: 20px auto;
    overflow: hidden;
    position: relative;
    border: 1px solid #ebedf0;
    border-radius: 2px;
    padding: 48px;
    text-align: center;
    background: #fafafa;
}

.rab-btn {
    margin-right: 8px;
}
</style>