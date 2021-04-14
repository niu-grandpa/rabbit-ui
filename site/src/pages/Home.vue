<template>
    <el-main>Main</el-main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Logo from 'assets/logo.svg';

import 'styles/home.less';

export default defineComponent({
    setup: () => {
        const state = reactive({});

        return toRefs(state);
    }
});
</script>