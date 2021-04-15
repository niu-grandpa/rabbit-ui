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
import CompsOpts from '@/comps-opts';

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

        const handleSelect = ({ path }: InputComps) => {
            router.push(path);
            state.value = '';
        };

        onMounted(() => {
            components.value = CompsOpts;
        });

        return {
            components,
            state,
            querySearch,
            createFilter,
            CompsOpts,
            handleSelect
        };
    }
});
</script>

<style>
</style>