<template>
    <article class="markdown">
        <Describe title="Radio 单选框" desc="单选框。" name="Radio">
            <li>用于在多个备选项中选中单个状态。</li>
            <li>
                和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
            </li>
        </Describe>
        <Example next-title="组合使用">
            <template #content>
                <r-radio id="demoRadio">Radio</r-radio>
                <p style="color: #b3b3b3">{{ stateText }}</p>
                <p>最简单的用法。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="不可用">
            <template #content>
                <r-radio-group value="apple">
                    <r-radio label="apple" icon="logo-apple">Apple</r-radio>
                    <r-radio label="android" icon="logo-android">Android</r-radio>
                    <r-radio label="windows" icon="logo-windows">Windows</r-radio>
                </r-radio-group>
                <br />
                <r-radio-group value="爪哇犀牛" id="demoRadioGroup">
                    <r-radio label="金斑蝶">金斑蝶</r-radio>
                    <r-radio label="爪哇犀牛">爪哇犀牛</r-radio>
                    <r-radio label="印度黑羚">印度黑羚</r-radio>
                </r-radio-group>
                <p>
                    使用<code>r-radio-group</code>实现一组互斥的选项组。在组合使用时，
                    <code>radio </code>
                    使用<code>label</code>来自动判断。每个 radio 的内容可以自定义。
                </p>
                <p>设置属性<code>icon</code>可以添加前缀图标</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="垂直">
            <template #content>
                <r-radio checked="true" disabled>Radio</r-radio>
                <br />
                <r-radio-group value="爪哇犀牛">
                    <r-radio label="金斑蝶" disabled>金斑蝶</r-radio>
                    <r-radio label="爪哇犀牛">爪哇犀牛</r-radio>
                    <r-radio label="印度黑羚">印度黑羚</r-radio>
                </r-radio-group>
                <p>通过设置<code>disabled</code>属性来禁用单选框。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="按钮样式">
            <template #content>
                <r-radio-group value="apple" direction="vertical">
                    <r-radio label="apple">Apple</r-radio>
                    <r-radio label="android">Android</r-radio>
                    <r-radio label="windows">Windows</r-radio>
                </r-radio-group>
                <p>设置属性<code>direction="vertical"</code>可以垂直显示，按钮样式下无效。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="填底的按钮样式">
            <template #content>
                <r-radio-group value="北京" type="button">
                    <r-radio label="北京">北京</r-radio>
                    <r-radio label="上海">上海</r-radio>
                    <r-radio label="深圳">深圳</r-radio>
                    <r-radio label="杭州">杭州</r-radio>
                </r-radio-group>
                <br /><br />
                <r-radio-group value="北京" type="button">
                    <r-radio label="北京">北京</r-radio>
                    <r-radio label="上海" disabled>上海</r-radio>
                    <r-radio label="深圳">深圳</r-radio>
                    <r-radio label="杭州">杭州</r-radio>
                </r-radio-group>
                <br /><br />
                <r-radio-group value="北京" type="button">
                    <r-radio label="北京" disabled>北京</r-radio>
                    <r-radio label="上海" disabled>上海</r-radio>
                    <r-radio label="深圳" disabled>深圳</r-radio>
                    <r-radio label="杭州" disabled>杭州</r-radio>
                </r-radio-group>
                <p>组合使用时可以设置属性<code>type</code>为 button 来应用按钮的样式。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example next-title="显示边框">
            <template #content>
                <r-radio-group value="北京" type="button" button-style="solid">
                    <r-radio label="北京">北京</r-radio>
                    <r-radio label="上海">上海</r-radio>
                    <r-radio label="深圳">深圳</r-radio>
                    <r-radio label="杭州">杭州</r-radio>
                </r-radio-group>
                <br />
                <r-radio-group
                    value="深圳"
                    type="button"
                    button-style="solid"
                    style="margin-top: 16px"
                >
                    <r-radio label="北京">北京</r-radio>
                    <r-radio label="上海" disabled>上海</r-radio>
                    <r-radio label="深圳">深圳</r-radio>
                    <r-radio label="杭州">杭州</r-radio>
                </r-radio-group>
                <p>设置属性<code>button-style="solid"</code>可显示为实色填底的单选按钮样式。</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Example next-title="尺寸">
            <template #content>
                <r-radio-group value="金斑蝶">
                    <r-radio label="金斑蝶" type="border">金斑蝶</r-radio>
                    <r-radio label="爪哇犀牛" type="border">爪哇犀牛</r-radio>
                    <r-radio label="印度黑羚" type="border">印度黑羚</r-radio>
                </r-radio-group>
                <p>radio 设置属性<code>type="border"</code>可以显示边框。</p>
            </template>
            <template #code><Code7 /></template>
        </Example>
        <Example>
            <template #content>
                <r-radio-group value="北京" type="button" size="large">
                    <r-radio label="北京">北京</r-radio>
                    <r-radio label="上海">上海</r-radio>
                    <r-radio label="深圳">深圳</r-radio>
                    <r-radio label="杭州">杭州</r-radio>
                </r-radio-group>
                <br /><br />
                <r-radio-group value="北京" type="button">
                    <r-radio label="北京">北京</r-radio>
                    <r-radio label="上海">上海</r-radio>
                    <r-radio label="深圳">深圳</r-radio>
                    <r-radio label="杭州">杭州</r-radio>
                </r-radio-group>
                <br /><br />
                <r-radio-group value="北京" type="button" size="small">
                    <r-radio label="北京">北京</r-radio>
                    <r-radio label="上海">上海</r-radio>
                    <r-radio label="深圳">深圳</r-radio>
                    <r-radio label="杭州">杭州</r-radio>
                </r-radio-group>
                <p>
                    通过设置属性<code>size</code>为<code>large</code>或<code>small</code>将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。
                </p>
            </template>
            <template #code><Code8 /></template>
        </Example>
        <Code9 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Radio from '../../../../../src/components/radio';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
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
} from '../markdown-code/radio';

const stateText = ref<boolean>(false);

onMounted(() => {
    const radio = new Radio();

    radio.config('#demoRadio').events({
        onChange: (state: boolean) => {
            stateText.value = state;
        }
    });

    radio.config('#demoRadioGroup').events({
        onChange: (data) => {
            console.log(data);
        }
    });
});
</script>