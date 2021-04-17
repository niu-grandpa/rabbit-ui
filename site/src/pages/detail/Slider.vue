<template>
    <el-aside width="320px" class="app-left" :class="{ 'aside-fixed': fixed }">
        <el-menu :default-active="route.path">
            <div class="comp-link-menu">
                <template v-if="show">
                    <!-- 文档列表选项 -->
                    <router-link v-for="item in DocsOpts" :to="item.path" :key="item.value">
                        <el-menu-item :index="item.path" class="comp-link-item">
                            {{ item.value }}
                        </el-menu-item>
                    </router-link>
                </template>
                <template v-else>
                    <!-- 组件列表选项 -->
                    <router-link v-for="item in CompsOpts" :to="item.path" :key="item.value">
                        <el-menu-item :index="item.path" class="comp-link-item">
                            {{ item.value }}
                        </el-menu-item>
                    </router-link>
                </template>
            </div>
        </el-menu>
    </el-aside>
</template>

<script lang="ts" setup>
import { onMounted, watchEffect, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import DocsOpts from '@/docs-opts';
import CompsOpts from '@/comps-opts';

const route = useRoute();

const show = ref(false);
const fixed = ref(false);

const changeList = () => {
    const isDocsPage: boolean = route.path.indexOf('/docs') === 0;
    isDocsPage ? (show.value = true) : (show.value = false);
};

const handleScroll = () => {
    //获取滚动时的高度
    const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    scrollTop >= 20 ? (fixed.value = true) : (fixed.value = false);
};

watchEffect(() => changeList());

onMounted(() => window.addEventListener('scroll', handleScroll));

onUnmounted(() => window.removeEventListener('scroll', handleScroll));

window.addEventListener;
</script>

<style lang="less" scope>
@active-color: #409eff;
@active-bgc: #ecf5ff;

.app-left {
    position: fixed;
    top: 65px;
    left: 0;
    bottom: 0;
    border-right: 1px solid #e6e6e6;
    overflow: hidden;

    &.aside-fixed {
        top: 0;
    }

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

                &.is-active {
                    background-color: @active-bgc;
                    border-right: 3px solid @active-color;
                    &:hover {
                        background-color: @active-bgc;
                    }
                }

                &:hover {
                    background-color: transparent;
                    color: @active-color;
                }
            }
        }
    }
}
</style>