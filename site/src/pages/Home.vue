<template>
    <el-container>
        <el-main>Main</el-main>
        <el-footer>
            <p class="text">MIT Licensed | Copyright © 2020-present Ryan John</p>
        </el-footer>
    </el-container>
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