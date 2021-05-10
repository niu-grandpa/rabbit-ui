<template>
    <article class="markdown">
        <Describe
            title="InputNumber 数字输入框"
            desc="通过鼠标或键盘，输入范围内的数值。"
            name="InputNumber"
        >
            <li>当需要获取标准数值时。</li>
        </Describe>
        <Example next-title="小数">
            <template #content>
                <r-input-number value="1" min="1" max="10" id="test1"></r-input-number>
                <p>可以通过输入、鼠标点击或键盘的上下键来改变数值大小。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="格式化展示">
            <template #content>
                <r-input-number value="1" min="1" max="10" step="1.2"></r-input-number>
                <p>通过设置<code>step</code>属性控制每次改变的精度。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="尺寸">
            <template #content>
                <r-input-number
                    value="1000"
                    formatter="`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                    parser="[/\$\s?|(,*)/g, '']"
                >
                </r-input-number>
                <r-input-number value="100" formatter="`${value}%`"></r-input-number>
                <p>
                    通过<code>formatter</code>格式化数字，以展示具有具体含义的数据，往往需要配合<code>parser</code>一起使用。
                </p>
                <p>
                    属性<code>formatter</code>的值的字符串格式为：反引号包裹<code>${value}</code>。
                </p>
                <p>
                    属性<code>parser</code>
                    的值需为字符串的数组，第一个位置为要匹配替换的内容，第二个位置为替换后的结果；若无该属性则使用默认的匹配规则转换。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="不可用">
            <template #content>
                <r-input-number value="3" size="small"></r-input-number>
                <r-input-number value="3"></r-input-number>
                <r-input-number value="3" size="large"></r-input-number>
                <p>
                    通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认尺寸。
                </p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="只读">
            <template #content>
                <r-input-number value="1" disabled="true" id="test2"></r-input-number>
                <button class="rab-btn rab-btn-primary" @click="handleClick">禁用状态</button>
                <p>通过设置<code>disabled="true"</code>属性禁用输入框，点击按钮切换状态。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example next-title="不可编辑">
            <template #content>
                <r-input-number value="1" readOnly="true"></r-input-number>
                <p>通过设置<code>readonly="true"</code>属性开启只读。</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Example next-title="按钮位置">
            <template #content>
                <r-input-number value="1" editable="false"></r-input-number>
                <p>通过设置<code>editable="false"</code>属性控制是否能编辑。</p>
            </template>
            <template #code><Code7 /></template>
        </Example>
        <Example>
            <template #content>
                <r-input-number value="1" controls-outside="true"></r-input-number>
                <p>
                    通过设置<code>controls-outside="true"</code>属性可以将按钮位置置于输入框两侧。
                </p>
            </template>
            <template #code><Code8 /></template>
        </Example>
        <Code9 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import InputNumber from '../../../../../src/components/input-number';
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
} from '../markdown-code/input-number';

let inputNumber: InputNumber,
    flag = true;

onMounted(() => {
    inputNumber = new InputNumber();
    inputNumber.config('#test1').events({
        onChange: (value) => {
            console.log('changed!', value);
        }
    });
});

const handleClick = () => {
    flag ? (flag = !flag) : (flag = true);
    inputNumber.config('#test2').disabled = flag;
};
</script>

<style scope>
.rab-input-number {
    margin-right: 8px;
}
</style>