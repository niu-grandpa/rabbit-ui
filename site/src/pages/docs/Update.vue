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
        version: '1.3.0',
        date: '2021-4-27',
        info: [
            '重写 dropdown，优化代码逻辑并且修复若干个bug',
            'dropdown 新增属性 stop-propagation，新增 visible 属性，用于手动控制下拉框的显示',
            'dropdown 新增事件 onVisibleChange，菜单显示状态改变时调用，新增事件 onClickOutside，点击外部关闭下拉菜单时触发',
            'dropdown-item 新增属性 key，用来标识这一项，新增属性 danger'
        ]
    },
    {
        version: '1.2.0',
        date: '2021-4-21',
        info: [
            '新增 Modal 插件的实例化方法 $Modal，用来创建一次性的轻量级对话框。',
            '$Modal 在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框。'
        ]
    },
    {
        version: '1.1.0',
        date: '2021-4-20',
        info: [
            '重写 tooltip，优化代码逻辑并且修复若干个bug',
            '新增 tooltip 多种预设色彩的文字提示样式',
            '修复 1.0.x 版本中，tooltip 的箭头方向无法随着气泡方向更新的问题'
        ]
    },
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