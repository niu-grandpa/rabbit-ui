<template>
    <el-container class="app-index-home">
        <el-main class="app-index-home-main">
            <HomeContent />
            <HomeFooter />
        </el-main>
    </el-container>
</template>

<script setup>
import HomeContent from './Content.vue';
import HomeFooter from './Footer.vue';
</script>

<style lang="less" scope>
.app-index-home {
    &-main {
        padding: 0 !important;
        color: #55585e;
        text-align: center;
        line-height: 160px;
    }

    &-content {
        margin: 2.5rem 0 2.75rem;
        padding: 0 1.5rem;

        .figure {
            margin: 0;
            padding: 0 1.5rem;

            img {
                display: block;
                margin: 0 auto;
                width: auto;
                height: 200px;
                max-width: 100%;
                max-height: 280px;
            }
        }

        .title {
            font-size: 3rem;
            margin-top: 2.2rem;
            line-height: 1.25;
            color: #2c3e50;
        }

        .desc {
            margin: 0;
            font-weight: 300;
            margin-top: 1.5rem;
            line-height: 1.2;
            font-size: 1.6rem;
        }

        .home-link {
            position: relative;
            top: -10px;

            .el-button {
                padding: 0 36px;
                line-height: 48px;
                font-size: 1.2rem;

                &.is-round {
                    border-radius: 40px;
                }
            }
        }
    }

    &-footer {
        height: auto !important;
        background: #475050;
        text-align: center;
        color: #fff;
        padding: 40px 0;

        p {
            line-height: 1.7;
            margin: 8px 0;
        }

        a {
            color: #fff;
        }

        .social-icon {
            margin: 0 5px;
            font-size: 1.2rem;
        }
    }
}
</style>