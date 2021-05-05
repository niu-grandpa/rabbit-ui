<template>
    <article class="markdown">
        <Describe title="Tabs 标签页" desc="选项卡切换组件。" name="Tabs">
            <li>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</li>
            <li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li>
            <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</li>
        </Describe>
        <Example next-title="图标">
            <template #content>
                <r-tabs active-index="0">
                    <r-tab-pane tab="标签一" index="1">标签一的内容</r-tab-pane>
                    <r-tab-pane tab="标签二" index="2">标签二的内容</r-tab-pane>
                    <r-tab-pane tab="标签三" index="3">标签三的内容</r-tab-pane>
                </r-tabs>
                <p>
                    <code>active-index</code> 与 <code>r-tab-pane</code> 的
                    <code>index</code> 对应，用于标识当前激活的是哪一项，key 值默认从 0
                    开始，默认激活第一项。可以使用提供的 <code>config</code> 方法返回的
                    <code>activeKey</code>
                    进行动态改变
                </p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="迷你型">
            <template #content>
                <r-tabs>
                    <r-tab-pane tab="macOS" icon="logo-apple">标签一的内容</r-tab-pane>
                    <r-tab-pane tab="Windows" icon="logo-windows">标签二的内容</r-tab-pane>
                    <r-tab-pane tab="Linux" icon="logo-tux">标签三的内容</r-tab-pane>
                </r-tabs>
                <p>通过设置属性 <code>icon</code>，可以显示一个图标。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="禁用">
            <template #content>
                <r-tabs size="small">
                    <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
                    <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
                    <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
                </r-tabs>
                <p>
                    设置属性 <code>size="small"</code> 可以显示为迷你型，只在
                    <code>type="line"</code> 时有效。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="卡片样式">
            <template #content>
                <r-tabs>
                    <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
                    <r-tab-pane tab="标签二" disabled="true">标签二的内容</r-tab-pane>
                    <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
                </r-tabs>
                <p>设置 <code>disabled="true"</code> 禁用某一项。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="可关闭">
            <template #content>
                <r-tabs type="card">
                    <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
                    <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
                    <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
                </r-tabs>
                <p>设置属性 <code>type="card"</code> 可以显示卡片样式，常用于容器顶部。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example next-title="不使用动画">
            <template #content>
                <r-tabs type="card" closable="true">
                    <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
                    <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
                    <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
                </r-tabs>
                <p>
                    通过设置属性 <code>closable="true"</code> 可以关闭某一项，仅在
                    <code>type="card"</code> 时有效。
                </p>
                <p>当设置了可关闭后，面板的切换将不使用切换动画。</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Example next-title="其它样式">
            <template #content>
                <r-tabs animated="false">
                    <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
                    <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
                    <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
                </r-tabs>
                <p>通过设置属性 <code>animated="false"</code> 可以禁用动画。</p>
            </template>
            <template #code><Code7 /></template>
        </Example>
        <Example>
            <template #content>
                <el-row>
                    <el-col :span="12">
                        <div class="demo-tabs-style1" style="background: #e3e8ee; padding: 16px">
                            <r-tabs type="card">
                                <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
                                <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
                                <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
                            </r-tabs>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="demo-tabs-style2">
                            <r-tabs type="card">
                                <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
                                <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
                                <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
                            </r-tabs>
                        </div>
                    </el-col>
                </el-row>

                <p>可以根据业务自定义 UI，需要一点额外的样式覆盖。</p>
            </template>
            <template #code><Code8 /></template>
        </Example>
        <Code9 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Tabs from '../../../../../src/components/tabs';
import { Describe, Example } from '../../../components/index';
import {
    Code1,
    Code2,
    Code3,
    Code4,
    Code5,
    Code6,
    Code7,
    Code8,
    Code9
} from '../markdown-code/tabs';

onMounted(() => {
    new Tabs();
});
</script>

<style lang="less" scope>
.demo-tabs {
    &-style1 {
        > .rab-tabs-card {
            & > .rab-tabs-content {
                height: 120px;
                margin-top: -16px;

                & > r-tab-pane {
                    background: #fff;
                    padding: 16px;
                }
            }

            & > .rab-tabs-bar {
                .rab-tabs-tab {
                    border-color: transparent;
                }

                .rab-tabs-tab-active {
                    border-color: #fff;
                }
            }
        }
    }

    &-style2 {
        margin-left: 20px;
        > .rab-tabs-card {
            & > .rab-tabs-bar {
                .rab-tabs-tab {
                    border-radius: 0;
                    background: #fff;
                }

                .rab-tabs-tab-active {
                    border-top: 1px solid #3399ff;

                    &::before {
                        content: '';
                        display: block;
                        width: 100%;
                        height: 1px;
                        background: #3399ff;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                }
            }
        }
    }
}
</style>