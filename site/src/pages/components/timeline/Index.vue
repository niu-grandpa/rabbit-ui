<template>
    <article class="markdown">
        <Describe title="Timeline" desc="可视化地呈现时间流信息。" name="Timeline">
            <li>当有一系列信息需按时间排列时，可正序和倒序。</li>
            <li>需要有一条时间轴进行视觉上的串联时。</li>
        </Describe>
        <Example next-title="圆圈颜色">
            <template #content>
                <r-timeline>
                    <r-timeline-item>
                        <p class="time">1976s</p>
                        <p class="content">第一代苹果问世</p>
                    </r-timeline-item>
                    <r-timeline-item>
                        <p class="time">1984s</p>
                        <p class="content">发布麦金塔电脑</p>
                    </r-timeline-item>
                    <r-timeline-item>
                        <p class="time">2007s</p>
                        <p class="content">发布 iPhone</p>
                    </r-timeline-item>
                    <r-timeline-item>
                        <p class="time">2010s</p>
                        <p class="content">发布 iPad</p>
                    </r-timeline-item>
                    <r-timeline-item color="gray">
                        <p class="time">2011.10.05</p>
                        <p class="content">史蒂夫·乔布斯去世</p>
                    </r-timeline-item>
                </r-timeline>
                <p>最简单定义一个时间轴的用法。</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="最后一个">
            <template #content>
                <r-timeline>
                    <r-timeline-item color="green">发布1.0版本</r-timeline-item>
                    <r-timeline-item color="green">发布2.0版本</r-timeline-item>
                    <r-timeline-item color="red">重大Bug</r-timeline-item>
                    <r-timeline-item color="gray">推迟发布</r-timeline-item>
                    <r-timeline-item>发布3.0版本</r-timeline-item>
                </r-timeline>
                <p>
                    圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，灰色表示当前任务状态停滞或取消，蓝色可表示正在进行或其他默认状态。
                </p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="自定义时间轴点">
            <template #content>
                <r-timeline pending="true">
                    <r-timeline-item>2021-04-01 创建服务器网站</r-timeline-item>
                    <r-timeline-item>2021-04-01 解决了初始化网络问题</r-timeline-item>
                    <r-timeline-item>2021-04-01 技术人员进行测试</r-timeline-item>
                    <r-timeline-item><a href="#">查看更多</a></r-timeline-item>
                </r-timeline>
                <p>
                    通过添加属性<code>pending="true"</code>来标记最后一个为幽灵节点，标识还未完成。
                </p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example>
            <template #content>
                <r-timeline>
                    <r-timeline-item
                        dot="<i class='rab-icon rab-icon-ios-trophy'></i>"
                        color="green"
                    >
                        发布里程碑版本
                    </r-timeline-item>
                    <r-timeline-item>发布1.0版本</r-timeline-item>
                    <r-timeline-item>发布2.0版本</r-timeline-item>
                    <r-timeline-item>发布3.0版本</r-timeline-item>
                </r-timeline>
                <p>可根据实际场景⾃定义节点</p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Code5 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Timeline from '../../../../../src/components/timeline';
import { Describe, Example } from '../../../components/index';
import { Code1, Code2, Code3, Code4, Code5 } from '../markdown-code/timeline';

onMounted(() => {
    new Timeline();
});
</script>

<style lang="less" scoped>
.time {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
}

.content {
    padding-left: 5px;
    margin: 0;
}
</style>
