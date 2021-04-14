<template>
    <el-header>
        <el-row>
            <el-col :span="18">
                <HeaderLogo :src="logo" />
                <el-divider direction="vertical"></el-divider>
                <SearchInput />
            </el-col>
            <el-col :span="6"> <NavBar /></el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import HeaderLogo from 'comps/HeaderLogo.vue';
import SearchInput from 'comps/SearchInput.vue';
import NavBar from 'comps/NavBar.vue';

export default defineComponent({
    props: {
        logo: String
    },

    components: {
        HeaderLogo,
        SearchInput,
        NavBar
    },

    setup: () => {
        const state = reactive({});

        return toRefs(state);
    }
});
</script>

<style>
</style>