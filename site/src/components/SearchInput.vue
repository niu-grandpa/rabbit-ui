<template>
    <el-autocomplete
        class="inline-search-input"
        placeholder="搜索组件..."
        prefix-icon="el-icon-search"
        v-model="state"
        :fetch-suggestions="querySearch"
        @select="handleSelect"
    ></el-autocomplete>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

interface InputComps {
    value: string;
    path: string;
}

export default defineComponent({
    setup: () => {
        const router = useRouter();
        const components = ref([]);
        const state = ref('');

        const querySearch = (queryString: string, cb: Function) => {
            const results = queryString
                ? components.value.filter(createFilter(queryString))
                : components.value;
            // 调用 callback 返回建议列表的数据
            cb(results);
        };

        const createFilter = (queryString: string) => (components: InputComps) =>
            components.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;

        const loadAll = () => {
            return [
                { value: 'Color 色彩', path: '/components/color' },
                { value: 'Button 按钮', path: '/components/button' },
                { value: 'Icon 图标', path: '/components/icon' },
                { value: 'Card 卡片', path: '/components/card' },
                { value: 'Collapse 折叠面板', path: '/components/collapse' },
                { value: 'Divider 分割线', path: '/components/divider' },
                { value: 'PageHeader 页头', path: '/components/page-header' },
                { value: 'Tabs 标签页', path: '/components/tabs' },
                { value: 'Dropdown 下拉菜单', path: '/components/dropdown' },
                { value: 'Empty 空状态', path: '/components/empty' },
                { value: 'Jumbotron 巨幕', path: '/components/jumbotron' },
                { value: 'Breadcrumd 面包屑', path: '/components/breadcrumd' },
                { value: 'Badge 徽标数', path: '/components/badge' },
                { value: 'Steps 步骤条', path: '/components/steps' },
                { value: 'LoadingBar 加载中进度条', path: '/components/loading-bar' },
                { value: 'Radio 单选框', path: '/components/radio' },
                { value: 'Switch 开关', path: '/components/switch' },
                { value: 'Alert 警告', path: '/components/alert' },
                { value: 'Message 全局提示', path: '/components/message' },
                { value: 'Notice 通知提醒', path: '/components/notice' },
                { value: 'Modal 对话框', path: '/components/modal' },
                { value: 'Drawer 抽屉', path: '/components/drawer' },
                { value: 'Tooltip 文字提示', path: '/components/tooltip' },
                { value: 'Poptip 气泡提示', path: '/components/poptip' },
                { value: 'Progress 进度条', path: '/components/progress' },
                { value: 'Result 结果', path: '/components/result' },
                { value: 'Skeleton 骨架屏', path: '/components/skeleton' },
                { value: 'Avatar 头像', path: '/components/avatar' },
                { value: 'Tag 标签', path: '/components/tag' },
                { value: 'Timeline 时间轴', path: '/components/timeline' },
                { value: 'Time 相对时间', path: '/components/time' },
                { value: 'BackTop 返回顶部', path: '/components/back-top' },
                { value: 'Spin 加载中', path: '/components/spin' }
            ];
        };

        const handleSelect = ({ path }: InputComps) => {
            router.push(path);
            state.value = '';
        };

        onMounted(() => {
            components.value = loadAll();
        });

        return {
            components,
            state,
            querySearch,
            createFilter,
            loadAll,
            handleSelect
        };
    }
});
</script>

<style>
</style>