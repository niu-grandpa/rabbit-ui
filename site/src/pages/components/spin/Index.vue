<template>
    <article class="markdown">
        <Describe title="Spin 加载中" desc="用于页面和区块的加载中状态。" name="Spin">
            <li>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</li>
        </Describe>
        <Example next-title="各种尺寸">
            <template #content>
                <r-spin></r-spin>
                <p>最简单使用 Spin 的方法。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="居中固定">
            <template #content>
                <div class="col-span-8">
                    <r-spin size="small"></r-spin>
                </div>
                <div class="col-span-8">
                    <r-spin></r-spin>
                </div>
                <div class="col-span-8">
                    <r-spin size="large"></r-spin>
                </div>
                <p>
                    通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将 Spin
                    设置为大和小尺寸，不设置为默认（中）尺寸。
                </p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="自定义内容">
            <template #content>
                <div class="demo-spin-container">
                    <r-spin fix></r-spin>
                </div>
                <p>
                    设置属性<code>fix</code>在容器内部垂直居中固定，需要父级有`relative`或`absolute`。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="状态切换">
            <template #content>
                <div class="demo-spin-col col-span-8">
                    <r-spin fix>加载中...</r-spin>
                </div>

                <div class="demo-spin-col col-span-8">
                    <r-spin fix>
                        <i class="rab-icon rab-icon-loading1 rab-load-loop"></i>
                        <div>Loading...</div>
                    </r-spin>
                </div>
                <p>自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="整页加载">
            <template #content>
                <div class="demo-spin-article">
                    <h3>登金陵凤凰台</h3>
                    <address>李白</address>
                    <article>
                        <p>凤凰台上凤凰游，凤去台空江自流。</p>
                        <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                        <p>三山半落青天外，二水中分白鹭洲。</p>
                        <p>总为浮云能蔽日，长安不见使人愁。</p>
                    </article>
                    <r-spin v-show="show" fix size="large"></r-spin>
                </div>
                <br />
                切换显示状态：
                <r-switch></r-switch>
                <p>控制 Spin 组件的显示和消失。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example>
            <template #content>
                <button class="rab-btn rab-btn-primary" @click="handleShow">
                    整页显示，3秒后关闭
                </button>
                <button class="rab-btn rab-btn-primary" @click="handleHide">自定义显示内容</button>
                <p>
                    使用Spin提供的 <code>show</code> 和 <code>hide</code> 方法可以全局加载和隐藏。
                </p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Code7 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Spin from 'rabbitui/spin';
import Switch from 'rabbitui/switch';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5, Code6, Code7 } from '../markdown-code/spin';

const show = ref(true);
let spin: any;

onMounted(() => {
    spin = new Spin();
    const _switch = new Switch();

    _switch.config('r-switch').events({
        onChange: (checked: boolean) => {
            show.value = !checked;
        }
    });
});

const handleShow = () => {
    spin.show();
    setTimeout(() => {
        spin.hide();
    }, 3000);
};
const content = `<i class="rab-icon rab-icon-loading1 rab-load-loop" 
						style="font-size: 22px;height: 30px"></i>
           		 <div>Loading...</div>`;
const handleHide = () => {
    spin.show({ content });
    setTimeout(() => {
        spin.hide();
    }, 3000);
};
</script>

<style lang="less">
.markdown {
    .rab-btn {
        margin-right: 8px;
    }
    .demo-spin {
        &-container {
            display: inline-block;
            width: 200px;
            height: 100px;
            position: relative;
            border: 1px solid #eee;
        }
        &-article {
            width: 400px;
            height: 200px;
            padding: 10px;
            text-align: center;
            position: relative;
        }
    }

    .col-span-8 {
        display: block;
        width: 33.33333333%;
        float: left;
    }

    .demo-spin-col {
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }

    .demo-spin-article {
        width: 400px;
        height: 240px;
        padding: 10px;
        text-align: center;
        position: relative;
    }
}
</style>