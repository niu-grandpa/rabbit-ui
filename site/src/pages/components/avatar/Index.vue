<template>
    <article class="markdown">
        <Describe
            title="Avatar 头像"
            desc="用来代表用户或事物，支持图片、图标或字符展示。"
            name="Avatar"
        >
            <li>当需要用来代表用户或事物，支持图片、图标或字符展示。</li>
        </Describe>
        <Example next-title="类型">
            <template #content>
                <r-avatar icon="md-person" size="64"></r-avatar>
                <r-avatar icon="md-person" size="large"></r-avatar>
                <r-avatar icon="md-person"></r-avatar>
                <r-avatar icon="md-person" size="small"></r-avatar>
                <br />
                <r-avatar icon="md-person" shape="square" size="64"></r-avatar>
                <r-avatar icon="md-person" shape="square" size="large"></r-avatar>
                <r-avatar icon="md-person" shape="square"></r-avatar>
                <r-avatar icon="md-person" shape="square" size="small"></r-avatar>
                <p>头像有三种尺寸，两种形状可选。</p>
                <p><code>size</code> 可以设置为数值，但不能带任何单位只能是数字</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="自动调整字符大小">
            <template #content>
                <r-avatar icon="md-person"></r-avatar>
                <r-avatar>U</r-avatar>
                <r-avatar>USER</r-avatar>
                <r-avatar style="color: #f56a00; background-color: #fde3cf">U</r-avatar>
                <r-avatar src="https://avatars3.githubusercontent.com/u/62378518"></r-avatar>
                <r-avatar style="background-color: #87d068" icon="md-person"></r-avatar>
                <p>
                    支持三种类型：图片、icon 以及字符，其中 icon
                    和字符型可以自定义图标颜色及背景色。
                </p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example>
            <template #content>
                <r-avatar style="background-color: #f56a00">U</r-avatar>
                <r-avatar style="background-color: #7265e6">Lucy</r-avatar>
                <r-avatar style="background-color: #ffbf00">Tom</r-avatar>
                <r-avatar style="background-color: #00a2ae">Edward</r-avatar>
                <p>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Code4 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Avatar from 'rabbitui/avatar';
import Anchor from 'comps/anchor/Index.vue';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4 } from '../markdown-code/avatar';

onMounted(() => {
    new Avatar();
});
</script>

<style lang="less" scoped>
.markdown {
    r-avatar {
        margin-top: 16px;
        margin-right: 16px;
    }
}
</style>