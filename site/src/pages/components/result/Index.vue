<template>
    <article class="markdown">
        <Describe title="Result 结果" desc="用于反馈一系列操作任务的处理结果。" name="Result">
            <li>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</li>
        </Describe>
        <Example next-title="Info">
            <template #content>
                <r-result
                    status="success"
                    title="提交成功"
                    subtitle="已提交申请，等待部门审核。"
                    :extra="res1Btn"
                >
                </r-result>
                <p>Success 成功的结果</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="Warning">
            <template #content>
                <r-result title="请勿重复操作" :extra="res2Btn"> </r-result>
                <p>展示处理结果。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="Error">
            <template #content>
                <r-result status="warning" title="操作发生了一些问题" :extra="res3Btn"> </r-result>
                <p>警告类型的结果。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="403">
            <template #content>
                <r-result
                    status="error"
                    title="提交失败"
                    subtitle="请检查并修改以下信息后再重新提交"
                    :extra="res4Btn"
                >
                    <div>
                        <h4 class="typography">您提交的内容有以下错误:</h4>
                        <div class="typography">
                            <i class="rab-icon rab-icon-ios-close-circle-outline"></i>
                            您的帐户已被冻结。
                            <a>立即解冻></a>
                        </div>
                        <div class="typography">
                            <i class="rab-icon rab-icon-ios-close-circle-outline"></i>
                            您的帐户还没有资格申请。
                            <a>申请解锁></a>
                        </div>
                    </div>
                </r-result>
                <p>复杂的错误反馈。容器下必须具有一个父元素</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="404">
            <template #content>
                <r-result
                    status="403"
                    title="403"
                    subtitle="对不起，您没有权限访问此页。"
                    :extra="res5Btn"
                >
                </r-result>
                <p>你没有此页面的访问权限。</p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example next-title="500">
            <template #content>
                <r-result
                    status="404"
                    title="404"
                    subtitle="对不起，您访问的页面不存在。"
                    :extra="res6Btn"
                >
                </r-result>
                <p>此页面未找到。</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Example next-title="自定义图标">
            <template #content>
                <r-result
                    status="500"
                    title="500"
                    subtitle="对不起，服务器出了点问题。"
                    :extra="res7Btn"
                >
                </r-result>
                <p>服务器发生了错误。</p>
            </template>
            <template #code><Code7 /></template>
        </Example>
        <Example>
            <template #content>
                <r-result
                    icon="ios-happy"
                    title="太棒了，我们已经完成了所有的操作！"
                    :extra="res8Btn"
                >
                </r-result>
                <p>自定义 icon。</p>
            </template>
            <template #code><Code8 /></template>
        </Example>
        <Code9 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Result from '../../../../../src/components/result';
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
} from '../markdown-code/result';

const res1Btn = `<button type='button' class='rab-btn rab-btn-primary'>返回首页</button> 
         <button type='button' class='rab-btn'>打印</button>`;
const res2Btn = `<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>`;
const res3Btn = `<button type='button' class='rab-btn rab-btn-primary'>重新提交</button>`;
const res4Btn = `<button type='button' class='rab-btn rab-btn-primary'>返回修改</button>`;
const res5Btn = `<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>`;
const res6Btn = `<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>`;
const res7Btn = `<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>`;
const res8Btn = `<button type='button' class='rab-btn rab-btn-primary'>下一步</button>`;

onMounted(() => {
    new Result();
});
</script>

<style scope>
.typography {
    overflow-wrap: break-word;
    margin-bottom: 8px;
}

.typography .rab-icon {
    color: red;
}
</style>