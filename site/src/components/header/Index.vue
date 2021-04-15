<template>
    <el-header class="app-header">
        <el-row>
            <el-col :span="18">
                <HeaderLogo />
                <el-divider direction="vertical" />
                <SearchInput />
            </el-col>
            <el-col :span="6">
                <NavBar />
            </el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs } from 'vue';
import HeaderLogo from './HeaderLogo.vue';
import SearchInput from './SearchInput.vue';
import NavBar from './NavBar.vue';
</script>

<style lang="less" scope>
@import '../../src/styles/custom';

.app-header {
    height: 64px !important;
    background: @white;
    color: @text-color;
    border-bottom: 1px solid @border-color-split;
    z-index: 10;

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .logo-wrapper {
        display: inline-block;
        margin-bottom: 0;

        #logo {
            height: 64px;
            overflow: hidden;
            color: @title-color;
            font-size: 18px;
            line-height: 64px;
            white-space: nowrap;
            padding-right: @padding-md;
            padding-left: 40px;

            img {
                position: relative;
                top: 9px;
                height: 32px;
                margin-right: 12px;
            }
        }
    }

    .inline-search-input {
        @media (max-width: 1200px) {
            display: none;
        }

        .el-input__inner {
            border: none;
        }
    }

    .g-icon {
        width: 15px;
        position: relative;
        top: -1px;
        font-size: 16px;
    }

    .el-menu {
        @media (max-width: 1200px) {
            display: none;
        }

        background-color: transparent;

        &.el-menu--horizontal {
            border: none;
        }
    }
}
</style>