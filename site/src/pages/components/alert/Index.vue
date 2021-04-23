<template>
    <article class="markdown">
        <Describe title="Alert 警告提示" desc="警告提示，展现需要关注的信息。" name="Alert">
            <li>当某个页面需要向用户显示警告的信息时。</li>
            <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
        </Describe>
        <Example next-title="含有辅助性文字介绍">
            <template #content>
                <r-alert title="信息提示的文案"></r-alert>
                <r-alert type="success" title="成功提示的文案"></r-alert>
                <r-alert type="warning" title="警告提示的文案"></r-alert>
                <r-alert type="error" title="错误提示的文案"></r-alert>
                <p>
                    基本使用方法，有四种样式可以选择<code>info</code>、<code>success</code>、
                    <code>warning</code>、<code>error</code>
                </p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="图标">
            <template #content>
                <r-alert title="信息提示的文案">
                    <p>信息提示的内容,信息提示的内容，信息提示的,信息提示的内容,信息提示的内容。</p>
                </r-alert>
                <r-alert type="success" title="成功提示的文案">
                    <p>成功提示的内容,成功提示的内容，成功提示的,成功提示的内容,成功提示的内容。</p>
                </r-alert>
                <r-alert type="warning" title="警告提示的文案">
                    <p>警告提示的内容,警告提示的内容，警告提示的,警告提示的内容,警告提示的内容。</p>
                </r-alert>
                <r-alert type="error" title="错误提示的文案">
                    <p>错误提示的内容,错误提示的内容，错误提示的,错误提示的内容,错误提示的内容。</p>
                </r-alert>
                <p>通过在标签内部添加节点显示描述内容。注意！必须具有一个父元素</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="可关闭">
            <template #content>
                <r-alert title="信息提示的文案" show-icon="true"></r-alert>
                <r-alert type="success" title="成功提示的文案" show-icon="true"></r-alert>
                <r-alert type="warning" title="警告提示的文案" show-icon="true"></r-alert>
                <r-alert type="error" title="错误提示的文案" show-icon="true"></r-alert>

                <r-alert title="信息提示的文案" show-icon="true">
                    <p>信息提示的内容,信息提示的内容，信息提示的,信息提示的内容,信息提示的内容。</p>
                </r-alert>
                <r-alert type="success" title="成功提示的文案" show-icon="true">
                    <p>成功提示的内容,成功提示的内容，成功提示的,成功提示的内容,成功提示的内容。</p>
                </r-alert>
                <r-alert type="warning" title="警告提示的文案" show-icon="true">
                    <p>警告提示的内容,警告提示的内容，警告提示的,警告提示的内容,警告提示的内容。</p>
                </r-alert>
                <r-alert type="error" title="错误提示的文案" show-icon="true">
                    <p>错误提示的内容,错误提示的内容，错误提示的,错误提示的内容,错误提示的内容。</p>
                </r-alert>
                <r-alert
                    title="自定义图标"
                    show-icon="true"
                    icon="<i class='rab-icon rab-icon-ios-planet'>"
                >
                    <p>自定义图标的内容，自定义图标的内容，自定义图标的内容。</p>
                </r-alert>
                <p>
                    设置 <code>show-icon="true"</code> 并根据
                    <code>type</code> 属性自动添加不同图标，或者设置属性
                    <code>icon</code> 自定义图标。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="顶部公告">
            <template #content>
                <r-alert title="信息提示的文案" closable="true" id="test"></r-alert>
                <r-alert type="success" title="成功提示的文案" closable="true">
                    <p>成功提示的内容,成功提示的内容，成功提示的,成功提示的内容,成功提示的内容。</p>
                </r-alert>
                <r-alert
                    type="warning"
                    title="警告提示的文案"
                    closable="true"
                    close-text="知道了"
                ></r-alert>
                <p>设置属性 <code>closable="true"</code> 显示关闭按钮，点击可关闭提示。</p>
                <p>
                    设置属性
                    <code>close-text</code> 可以自定义关闭，自定义的文字会替换原先的关闭图标。
                </p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example>
            <template #content>
                <r-alert banner="true" type="warning" title="注意:通知内容……"></r-alert>
                <r-alert
                    banner="true"
                    closable="true"
                    type="warning"
                    title="注意:通知内容……"
                ></r-alert>
                <r-alert
                    banner="true"
                    show-icon="true"
                    type="warning"
                    title="注意:通知内容……"
                ></r-alert>
                <p>设置属性 <code>banner="true"</code> 可以应用顶部公告的样式。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Code6 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Alert from 'rabbitui/alert';
import Anchor from 'comps/anchor/Index.vue';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5, Code6 } from '../markdown-code/alert';

onMounted(() => {
    new Alert();
});
</script>
