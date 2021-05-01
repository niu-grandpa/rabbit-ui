<template>
    <article class="markdown">
        <Describe title="Collapse 折叠面板" desc="可以折叠/展开的内容区域。" name="Collapse">
            <li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>
            <li>手风琴是一种特殊的折叠面板，只允许单个内容区域展开。</li>
        </Describe>
        <Example next-title="手风琴">
            <template #content>
                <r-collapse defaultActiveKey="1" id="demoCollapse">
                    <r-collapse-panel key="1" title="面板标题1">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="2" title="面板标题2">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="3" title="面板标题3">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                </r-collapse>
                <p>
                    通过设置属性
                    <code>defaultActiveKey</code> 可以同时展开多个面板，这个例子默认展开了第一个。
                </p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="简洁风格">
            <template #content>
                <r-collapse defaultActiveKey="1" accordion="true">
                    <r-collapse-panel key="1" title="面板标题1">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="2" title="面板标题2">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="3" title="面板标题3">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                </r-collapse>
                <p>
                    通过设置属性<code>accordion="true"</code>开启手风琴模式，每次只能打开一个面板。
                </p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="隐藏箭头">
            <template #content>
                <r-collapse defaultActiveKey="1" simple="true">
                    <r-collapse-panel key="1" title="面板标题1">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="2" title="面板标题2">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="3" title="面板标题3">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                </r-collapse>
                <p>设置属性<code>simple="true"</code>可以显示为一套没有边框的简洁样式。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="幽灵折叠面板">
            <template #content>
                <r-collapse defaultActiveKey="1">
                    <r-collapse-panel key="1" title="面板标题1">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="2" title="面板标题2" hide-arrow="true">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                </r-collapse>
                <p>
                    通过给 <code>r-collapse-panel</code> 设置属性
                    <code>hide-arrow="true"</code> 可以隐藏面板的箭头图标
                </p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example>
            <template #content>
                <r-collapse defaultActiveKey="1" ghost="true">
                    <r-collapse-panel key="1" title="面板标题1">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="2" title="面板标题2">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                    <r-collapse-panel key="3" title="面板标题3">
                        <p>
                            狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
                        </p>
                    </r-collapse-panel>
                </r-collapse>
                <p>通过设置属性 <code>ghost="true"</code> 将折叠面板的背景变成透明。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Code6 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Collapse from '../../../../../src/components/collapse';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5, Code6 } from '../markdown-code/collapse';

onMounted(() => {
    const collapse = new Collapse();
    collapse.config('#demoCollapse').events({
        onChange: (key: string[]) => {
            console.log(key);
        }
    });
});
</script>
