<template>
    <el-main class="app-right">
        <div class="app-content-wrapper">
            <router-view></router-view>
        </div>
    </el-main>
</template>

<style lang="less" scoped>
.app {
    &-right {
        margin-left: 315px;
    }

    &-content-wrapper {
        min-height: 500px;
        padding: 0 170px 32px 64px;
    }
}
</style>