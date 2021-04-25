<template>
    <article class="markdown">
        <Describe title="Card 警告提示" desc="通用卡片容器。" name="Card">
            <li>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</li>
        </Describe>
        <Example next-title="无边框">
            <template #content>
                <r-card title="卡片标题" extra="<a>更多</a>" style="width: 340px">
                    <div>
                        <p>卡片内容 1</p>
                        <p>卡片内容 2</p>
                        <p>卡片内容 3</p>
                    </div>
                </r-card>
                <p>包含标题、内容（添加内容部分时，标签内必须具有一个父元素）、操作区域。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="禁用悬停阴影">
            <template #content>
                <div class="example-card-box" style="width: 340px">
                    <r-card title="无边框" no-border="true">
                        <p>
                            这是没有边框类型的卡片这是没有边框类型的卡片这是没有边框类型的卡片这是没有
                        </p>
                    </r-card>
                </div>
                <p>
                    通过设置属性
                    <code>no-border="true"</code> ，可以不添加边框，建议在灰色背景下使用。
                </p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="卡片阴影">
            <template #content>
                <el-row>
                    <el-col :span="8">
                        <r-card title="卡片标题">
                            <div>
                                <p>卡片内容 1</p>
                                <p>卡片内容 2</p>
                                <p>卡片内容 3</p>
                            </div>
                        </r-card>
                    </el-col>
                    <el-col :span="8">
                        <r-card title="卡片标题" dis-hover="true">
                            <div>
                                <p>卡片内容 1</p>
                                <p>卡片内容 2</p>
                                <p>卡片内容 3</p>
                            </div>
                        </r-card>
                    </el-col>
                </el-row>
                <p>通过设置属性 <code>dis-hover="true"</code> 来禁用鼠标悬停显示阴影的效果。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="简洁卡片">
            <template #content>
                <div class="example-card-box">
                    <el-row>
                        <el-col :span="8">
                            <r-card title="卡片标题" no-border="true">
                                <div>
                                    <p>卡片内容 1</p>
                                    <p>卡片内容 2</p>
                                    <p>卡片内容 3</p>
                                </div>
                            </r-card>
                        </el-col>
                        <el-col :span="8">
                            <r-card title="卡片标题" shadow="true">
                                <div>
                                    <p>卡片内容 1</p>
                                    <p>卡片内容 2</p>
                                    <p>卡片内容 3</p>
                                </div>
                            </r-card>
                        </el-col>
                    </el-row>
                </div>
                <p>
                    通过设置属性
                    <code>shadow="true"</code>
                    来显示卡片阴影，使用该属性后，<code>no-border</code>和
                    <code>dis-hover</code> 将无效，建议在灰色背景下使用。
                </p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example>
            <template #content>
                <r-card style="width: 340px">
                    <div style="text-align: center">
                        <img src="@/assets/logo.png" style="height: 95px" />
                        <h3 style="margin: 8px 0">一套基于TS构建的UI组件库</h3>
                    </div>
                </r-card>
                <p>只包含内容区域，没有标题。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Code6 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Card from 'rabbitui/card';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5, Code6 } from '../markdown-code/card';

onMounted(() => {
    new Card();
});
</script>

<style lang="less" scoped>
.markdown {
    r-card {
        margin-right: 10px;
    }

    .example-card-box {
        background: #eee;
        padding: 20px;
    }
}
</style>