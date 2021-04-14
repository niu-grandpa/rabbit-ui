<template>
    <el-header>
        <el-row>
            <el-col :span="18">
                <HeaderLogo :src="logo" />
                <Select />
            </el-col>
            <el-col :span="6">
                <NavBar />
            </el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import HeaderLogo from 'comps/HeaderLogo.vue';
import Select from 'comps/Select.vue';
import NavBar from 'comps/NavBar.vue';

export default defineComponent({
    props: {
        logo: String
    },

    components: {
        HeaderLogo,
        Select,
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