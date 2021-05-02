<template>
    <article class="markdown">
        <Describe title="Empty 空状态" desc="空状态时的展示占位图。" name="Empty">
            <li>当目前没有数据时，用于显式的用户提示。</li>
            <li>初始化场景时的引导创建流程。</li>
        </Describe>
        <Example next-title="自定义">
            <template #content>
                <r-empty></r-empty>
                <p>最简单的用法。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="无描述">
            <template #content>
                <r-empty
                    desc="自定义的<a>描述</a>"
                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    image-style="height: 60px"
                >
                    <button class="rab-btn rab-btn-primary">立即创建</button>
                </r-empty>
                <p>设置属性 <code>image</code> 自定义图片、<code>desc</code> 设置描述、</p>
                <p>如果设置附属内容，容器下必须具有一个父元素</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example>
            <template #content>
                <r-empty desc="false"></r-empty>
                <p>设置属性 <code>desc="false"</code> 不显示描述。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Code4 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Empty from '../../../../../src/components/empty';
import { Describe, Example } from '../../../components/index';
import { Code1, Code2, Code3, Code4 } from '../markdown-code/empty';

onMounted(() => {
    new Empty();
});
</script>