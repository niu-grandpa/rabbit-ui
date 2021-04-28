<template>
    <article class="markdown">
        <Describe title="Tooltip 结果" desc="简单的文字提示气泡框。" name="Tooltip">
            <li>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</li>
            <li>可用来代替系统默认的 ‘title’ 提示，提供一个’按钮/文字/操作’的文案解释。</li>
        </Describe>
        <Example next-title="位置">
            <template #content>
                <r-tooltip content="这里是提示文字" id="test">
                    鼠标经过这段文字时，会显示一个气泡框
                </r-tooltip>
                <p>最简单的用法。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="自定义内容">
            <template #content>
                <div class="top">
                    <r-tooltip content="Top Left 文字提示" placement="top-start">
                        <button class="rab-btn">上左</button>
                    </r-tooltip>
                    <r-tooltip content="Top Center 文字提示">
                        <button class="rab-btn">上边</button>
                    </r-tooltip>
                    <r-tooltip content="Top Right 文字提示" placement="top-end">
                        <button class="rab-btn">上右</button>
                    </r-tooltip>
                </div>
                <div class="center">
                    <div class="center-left">
                        <r-tooltip content="Left Top 文字提示" placement="left-start">
                            <button class="rab-btn">左上</button>
                        </r-tooltip>
                        <br /><br />
                        <r-tooltip content="Left Center 文字提示" placement="left">
                            <button class="rab-btn">左边</button>
                        </r-tooltip>
                        <br /><br />
                        <r-tooltip content="Left Bottom 文字提示" placement="left-end">
                            <button class="rab-btn">左下</button>
                        </r-tooltip>
                    </div>
                    <div class="center-right">
                        <r-tooltip content="Right Top 文字提示" placement="right-start">
                            <button class="rab-btn">右上</button>
                        </r-tooltip>
                        <br /><br />
                        <r-tooltip content="Right Center 文字提示" placement="right">
                            <button class="rab-btn">右边</button>
                        </r-tooltip>
                        <br /><br />
                        <r-tooltip content="Right Bottom 文字提示" placement="right-end">
                            <button class="rab-btn">右下</button>
                        </r-tooltip>
                    </div>
                </div>
                <div class="bottom">
                    <r-tooltip content="Bottom Left 文字提示" placement="bottom-start">
                        <button class="rab-btn">下左</button>
                    </r-tooltip>
                    <r-tooltip content="Bottom Center 文字提示" placement="bottom">
                        <button class="rab-btn">下边</button>
                    </r-tooltip>
                    <r-tooltip content="Bottom Right 文字提示" placement="bottom-end">
                        <button class="rab-btn">下右</button>
                    </r-tooltip>
                </div>
                <p>组件提供了12个不同的方向显示Tooltip，具体配置可查看API。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="禁用">
            <template #content>
                <r-tooltip :content="customContent" placement="top">
                    <button class="rab-btn">多行</button>
                </r-tooltip>
                <p>
                    如果需要添加带有HTML代码或其他复杂的内容，抑或是需要动态更新内容，请使用组件提供的响应式API渲染
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="延时">
            <template #content>
                <r-tooltip placement="top" disabled="true">
                    <button class="rab-btn">禁用提示</button>
                </r-tooltip>
                <p>通过设置属性<code>disabled</code>可以禁用文字提示。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="主题">
            <template #content>
                <r-tooltip content="Tooltip 文字提示" delay="1000">
                    <button class="rab-btn">延时1秒显示</button>
                </r-tooltip>
                <p>通过设置属性<code>delay</code>可以延时显示文字提示，单位毫秒。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example next-title="自动换行">
            <template #content>
                <div class="demo-color">
                    <r-tooltip
                        content="content of tooltip"
                        v-for="color in colors"
                        :key="color"
                        :theme="color"
                    >
                        <button class="rab-btn">{{ color }}</button>
                    </r-tooltip>
                </div>

                <p>设置属性<code>theme</code>可以显示不同的颜色。</p>
                <p>有多种预设色彩的文字提示样式，用作不同场景使用。</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Example>
            <template #content>
                <r-tooltip max-width="200" :content="text">
                    <button class="rab-btn">长文本</button>
                </r-tooltip>
                <p>设置属性<code>max-width</code>，当超出最大值后，文本将自动换行，并两端对齐。</p>
            </template>
            <template #code><Code7 /></template>
        </Example>
        <Code8 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Tooltip from 'rabbitui/tooltip';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5, Code6, Code7, Code8 } from '../markdown-code/tooltip';

const customContent = `<div><p>显示多行信息</p><p><i>可以自定义样式</i></p></div>`;
const text =
    '史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。';

onMounted(() => {
    const tooltip = new Tooltip();

    tooltip.config('#test').events({
        onVisibleChange: (visable: boolean) => {
            console.log(visable);
        }
    });
});

const colors = [
    'dark',
    'light',
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime'
];
</script>

<style lang="less" scope>
.top,
.bottom {
    text-align: center;

    .rab-btn {
        margin: 0 5px;
    }
}

.center {
    width: 300px;
    margin: 10px auto;
    overflow: hidden;

    &-left {
        float: left;
    }

    &-right {
        float: right;
    }
}

.demo-color {
    .rab-btn {
        margin-right: 8px;
        margin-bottom: 8px;
    }
}
</style>