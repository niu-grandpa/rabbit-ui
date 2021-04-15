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

<script lang="ts">
import { defineComponent } from 'vue';
import DocsOpts from '@/docs-opts';
import CompsOpts from '@/comps-opts';

export default defineComponent({
    props: {
        docs: {
            type: Boolean,
            default: false
        }
    },

    setup: ({ docs }) => {
        const options = !docs ? CompsOpts : DocsOpts;
        return {
            options
        };
    }
});
</script>

<style lang="less" scope>
.app-left {
    position: fixed;
    top: 64px;
    left: 0;
    bottom: 0;
    border-right: 1px solid #e6e6e6;
    overflow: hidden;

    &:hover {
        overflow-y: auto;
    }

    .el-menu {
        border-right: none;
    }

    .comp {
        &-link {
            &-menu {
                padding-top: 15px;
            }
            &-item {
                padding-left: 50px !important;
            }
        }
    }
}
</style>