<template>
    <article class="markdown">
        <Describe
            title="Breadcrumb 面包屑"
            desc="显示当前页面在系统层级结构中的位置，并能向上返回。"
            name="Breadcrumb"
        >
            <li>当系统拥有超过两级以上的层级结构时；</li>
            <li>当需要告知用户『你在哪里』时；</li>
            <li>当需要向上导航的功能时。</li>
        </Describe>
        <Example next-title="带图标">
            <template #content>
                <r-breadcrumb>
                    <a href="#">Home</a>
                    <a href="#">Components</a>
                    <span>Breadcrumb</span>
                </r-breadcrumb>
                <p>最简单的用法。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="分隔符">
            <template #content>
                <r-breadcrumb>
                    <div>
                        <i class="rab-icon rab-icon-ios-home-outline"></i>
                        <a href="#">Home</a>
                    </div>
                    <div>
                        <i class="rab-icon rab-icon-logo-buffer"></i>
                        <a href="#">Components</a>
                    </div>
                    <div>
                        <i class="rab-icon rab-icon-ios-cafe"></i>
                        <span>Breadcrumb</span>
                    </div>
                </r-breadcrumb>
                <p>可自定义每项的内容，比如带有一个图标。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example>
            <template #content>
                <r-breadcrumb separator=">">
                    <a href="#">Home</a>
                    <a href="#">Components</a>
                    <span>Breadcrumb</span>
                </r-breadcrumb>
                <r-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
                    <a href="#">Home</a>
                    <a href="#">Components</a>
                    <span>Breadcrumb</span>
                </r-breadcrumb>
                <p>
                    通过设置<code>separator</code>属性来自定义分隔符，比如
                    <code>></code>，也可以接受自定义的HTML字符串。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Code4 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Breadcrumb from 'rabbitui/breadcrumb';
import Anchor from 'comps/anchor/Index.vue';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4 } from '../markdown-code/breadcrumb';

onMounted(() => {
    new Breadcrumb();
});
</script>

<style lang="less">
.demo-breadcrumb-separator {
    color: #ff5500;
    padding: 0 5px;
}
</style>