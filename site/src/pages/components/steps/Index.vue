<template>
    <article class="markdown">
        <Describe title="Steps 步骤条" desc="引导用户按照流程完成任务的导航条。" name="Steps">
            <li>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</li>
        </Describe>
        <Example next-title="迷你版">
            <template #content>
                <r-steps current="1">
                    <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
                </r-steps>
                <p>基本用法，组件会根据<code>current</code>自动判断各步骤状态。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="带图标的步骤条">
            <template #content>
                <r-steps current="2" size="small">
                    <r-step title="已完成"></r-step>
                    <r-step title="已完成"></r-step>
                    <r-step title="进行中"></r-step>
                    <r-step title="待进行"></r-step>
                </r-steps>
                <p>设置属性<code>size="small"</code>为启用迷你版。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="切换步骤">
            <template #content>
                <r-steps current="1">
                    <r-step title="注册" icon="ios-person"></r-step>
                    <r-step title="上传头像" icon="ios-camera"></r-step>
                    <r-step title="验证邮箱" icon="ios-mail"></r-step>
                </r-steps>
                <p>通过设置<code>r-step</code>的<code>icon</code>属性可以自定义图标。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="垂直方向">
            <template #content>
                <r-steps current="0" id="test">
                    <r-step title="步骤1"></r-step>
                    <r-step title="步骤2"></r-step>
                    <r-step title="步骤3"></r-step>
                    <r-step title="步骤4"></r-step>
                </r-steps>
                <br />
                <button class="rab-btn rab-btn-primary" @click="handleClick">下一步</button>
                <p>通常配合内容及按钮使用，表示一个流程的处理进度。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="步骤运行错误">
            <template #content>
                <r-steps current="2" direction="vertical">
                    <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
                </r-steps>
                <p>设置属性<code>direction="vertical"</code>为在垂直方向展示。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example>
            <template #content>
                <r-steps current="1" status="error">
                    <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
                    <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
                </r-steps>
                <p>设置<code>r-steps</code>的属性<code>status="error"</code>指定当前步骤状态。</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Code7 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Steps from '../../../../../src/components/steps';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5, Code6, Code7 } from '../markdown-code/steps';

let steps: any,
    n = 0;

onMounted(() => {
    steps = new Steps();
});

const handleClick = () => {
    if (n == 3) {
        n = 0;
    } else {
        n += 1;
    }
    steps.config('#test').current = n;
};
</script>