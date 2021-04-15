<template>
    <el-aside width="315px" class="app-left">
        <el-menu>
            <div class="comp-link-menu">
                <router-link v-for="item in options" :to="item.path" :key="item.value">
                    <el-menu-item :index="item.value" class="comp-link-item">
                        {{ item.value }}
                    </el-menu-item>
                </router-link>
            </div>
        </el-menu>
    </el-aside>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import DocsOpts from '@/docs-opts';
import CompsOpts from '@/comps-opts';

const props = defineProps({
    docs: {
        type: Boolean,
        default: false
    }
});

const options = !props.docs ? CompsOpts : DocsOpts;
</script>