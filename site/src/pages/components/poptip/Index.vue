<template>
    <article class="markdown">
        <Describe
            title="Poptip 气泡提示"
            desc="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
            name="Poptip"
        >
            <li>
                当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
            </li>
            <li>
                和 Tooltip 类似，具有很多相同配置，不同点是 Poptip
                以卡片的形式承载了更多的内容，比如链接、表格、按钮等。
            </li>
            <li>Poptip 还 confirm 确认框，与 Modal 不同的是，它会出现在就近元素，相对轻量。</li>
        </Describe>
        <Example next-title="位置">
            <template #content>
                <r-poptip trigger="hover" title="提示标题" content="提示内容">
                    <button type="button" class="rab-btn">hover 激活</button>
                </r-poptip>
                <r-poptip title="提示标题" content="提示内容">
                    <button type="button" class="rab-btn">click 激活</button>
                </r-poptip>
                <r-poptip trigger="focus" title="提示标题" content="提示内容">
                    <button type="button" class="rab-btn">focus 激活</button>
                </r-poptip>
                <r-poptip title="提示标题" content="请输入内容..." id="test">
                    <el-input placeholder="配合输入框" v-model="inputContent" />
                </r-poptip>
                <p>支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="嵌套复杂内容">
            <template #content>
                <div class="top">
                    <r-poptip title="提示标题" content="提示内容" placement="top-start">
                        <button class="rab-btn">上左</button>
                    </r-poptip>
                    <r-poptip title="提示标题" content="提示内容">
                        <button class="rab-btn">上边</button>
                    </r-poptip>
                    <r-poptip title="提示标题" content="提示内容" placement="top-end">
                        <button class="rab-btn">上右</button>
                    </r-poptip>
                </div>
                <div class="center">
                    <div class="center-left">
                        <r-poptip title="提示标题" content="提示内容" placement="left-start">
                            <button class="rab-btn">左上</button>
                        </r-poptip>
                        <br /><br />
                        <r-poptip title="提示标题" content="提示内容" placement="left">
                            <button class="rab-btn">左边</button>
                        </r-poptip>
                        <br /><br />
                        <r-poptip title="提示标题" content="提示内容" placement="left-end">
                            <button class="rab-btn">左下</button>
                        </r-poptip>
                    </div>
                    <div class="center-right">
                        <r-poptip title="提示标题" content="提示内容" placement="right-start">
                            <button class="rab-btn">右上</button>
                        </r-poptip>
                        <br /><br />
                        <r-poptip title="提示标题" content="提示内容" placement="right">
                            <button class="rab-btn">右边</button>
                        </r-poptip>
                        <br /><br />
                        <r-poptip title="提示标题" content="提示内容" placement="right-end">
                            <button class="rab-btn">右下</button>
                        </r-poptip>
                    </div>
                </div>
                <div class="bottom">
                    <r-poptip title="提示标题" content="提示内容" placement="bottom-start">
                        <button class="rab-btn">下左</button>
                    </r-poptip>
                    <r-poptip title="提示标题" content="提示内容" placement="bottom">
                        <button class="rab-btn">下边</button>
                    </r-poptip>
                    <r-poptip title="提示标题" content="提示内容" placement="bottom-end">
                        <button class="rab-btn">下右</button>
                    </r-poptip>
                </div>
                <p>组件提供了12个不同的方向显示<code>Poptip</code>，具体配置可查看API。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="自动换行">
            <template #content>
                <r-poptip width="400" placement="right" :content="complexContent">
                    <button class="rab-btn">复杂内容</button>
                </r-poptip>
                <p>实现复杂的内容。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="确认框">
            <template #content>
                <r-poptip
                    word-wrap="true"
                    width="200"
                    content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"
                >
                    <button class="rab-btn">长文本</button>
                </r-poptip>
                <p>设置属性<code>word-wrap</code>，当超出宽度后，文本将自动换行，并两端对齐。</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example>
            <template #content>
                <r-poptip confirm="true" title="您确认删除这条内容吗？" id="test2">
                    <button class="rab-btn">删除</button>
                </r-poptip>
                <r-poptip
                    confirm="true"
                    title="Are you sure delete this task?"
                    ok-text="yes"
                    cancel-text="no"
                >
                    <button class="rab-btn">国际化</button>
                </r-poptip>
                <p>
                    通过设置属性<code>confirm</code>开启确认框模式。确认框只会以 click
                    的形式激活，并且只会显示 title 的内容，忽略 content。
                </p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Code6 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import Poptip from 'rabbitui/poptip';
import Describe from 'comps/comps-describe/Index.vue';
import Example from 'comps/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4, Code5, Code6 } from '../markdown-code/poptip';

const inputContent = ref<string>('');

onMounted(() => {
    const poptip = new Poptip();
    watchEffect(() => {
        poptip.config('#test').content = inputContent.value;
    });
});

const complexContent = `
      <div class="api">
          <table>
              <thead>
                  <tr>
                      <th>日期</th>
                      <th>姓名</th>
                      <th>地址</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
              </tbody>
          </table>
      </div>
    `;
</script>

<style lang="less" scope>
.rab-btn {
    margin-right: 8px;
}

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

.api {
    table {
        font-family: Consolas, Menlo, Courier, monospace;
        font-size: 12px;
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;
        border: 1px solid #e9e9e9;
        width: 100%;
        margin-bottom: 24px;

        td,
        th {
            border: 1px solid #e9e9e9;
            padding: 8px 16px;
            text-align: left;
        }

        th {
            background: #f7f7f7;
            white-space: nowrap;
            color: #5c6b77;
            font-weight: 600;
        }
    }
}
</style>
