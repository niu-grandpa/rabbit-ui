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

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CompsOpts from '../../comps-opts';

interface InputProps {
    value: string;
    path: string;
}

const router = useRouter();
const components = ref<InputProps[]>([{ value: '', path: '' }]);
const state = ref('');

const querySearch = (queryString: string | undefined, cb: Function) => {
    const results = queryString
        ? components.value.filter(createFilter(queryString))
        : components.value;
    // 调用 callback 返回建议列表的数据
    cb(results);
};

const createFilter = (queryString: string) => (components: InputProps) =>
    components.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;

const handleSelect = ({ path }: InputProps) => {
    router.push(path);
    state.value = '';
};

onMounted(() => {
    components.value = CompsOpts;
});
</script>

<style>
</style>