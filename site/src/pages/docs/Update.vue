<template>
    <article class="markdown">
        <h1>更新日志</h1>
    </article>
    <div class="doc-update">
        <r-timeline>
            <r-timeline-item v-for="item in updateInfo" :key="item.date" :dot="item.icon">
                <h2 class="version">{{ item.version }}</h2>
                <p class="date">
                    <code>{{ item.date }}</code>
                </p>
                <ul class="info-list">
                    <li v-for="info in item.info" :key="info">{{ info }}</li>
                </ul>
            </r-timeline-item>
        </r-timeline>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Anchor from 'comps/anchor/Index.vue';
import Timeline from 'rabbitui/timeline';

onMounted(() => {
    new Timeline();
});

const updateInfo = [
    {
        version: '1.0.3',
        date: '2021-4-18',
        info: [
            '调整 timeline 插件的时间轴样式大小为 13px，边框为 1px',
            '修改 package.json 的入口文件为 src/index.ts',
            '修改 README 文档部分内容'
        ]
    },
    {
        version: '1.0.2',
        date: '2021-4-17',
        info: ['修复 backtop 插件外观显示异常', '修改 package.json 的入口文件为 dist/rabbit.js']
    },
    { version: '1.0.1', date: '2021-4-12', info: ['修改 README 文档部分内容'] },
    {
        version: '1.0.0 The patron saint of the moon',
        date: '2021-4-11',
        icon: '<i class="rab-icon rab-icon-ios-trophy"></i>',
        info: ['第一个正式版于今天发布']
    }
];
</script>

<style lang="less" scoped>
.doc-update {
    margin-top: 50px;

    .version {
        font-size: 22px;
        font-weight: 400;
    }

    .date {
        margin: 8px;
        font-size: 16px;

        code {
            margin: 8px 0 10px;
        }
    }

    .info-list {
        padding-left: 20px;
        list-style: circle;
    }
}
</style>