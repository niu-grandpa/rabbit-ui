<template>
    <el-main class="app-right">
        <section class="app-content-wrapper">
            <router-view></router-view>
        </section>
    </el-main>
</template>

<style lang="less" scope>
.app {
    &-right {
        max-width: 960px;
        margin-left: 380px;
    }

    &-content-wrapper {
        min-height: 500px;
        padding: 20px 25px;
    }
}
</style>