import { createRouter, createWebHistory } from 'vue-router';

export default () =>
    createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                component: () => import('@/App.vue')
            },
            {
                path: '/docs',
                redirect: '/'
            },
            {
                path: '/components',
                redirect: '/'
            },
            {
                path: '/docs/introduce',
                component: () => import('pages/docs/Introduce.vue')
            },
            {
                path: '/docs/install',
                component: () => import('pages/docs/Install.vue')
            },
            {
                path: '/docs/quickstart',
                component: () => import('pages/docs/Start.vue')
            },
            {
                path: '/docs/update',
                component: () => import('pages/docs/Update.vue')
            },
            {
                path: '/components/color',
                component: () => import('pages/components/color/Index.vue')
            },
            {
                path: '/components/alert',
                component: () => import('pages/components/alert/Index.vue')
            },
            {
                path: '/components/avatar',
                component: () => import('pages/components/avatar/Index.vue')
            },
            {
                path: '/components/breadcrumb',
                component: () => import('pages/components/breadcrumb/Index.vue')
            },
            {
                path: '/components/empty',
                component: () => import('pages/components/empty/Index.vue')
            },
            {
                path: '/components/back-top',
                component: () => import('pages/components/back-top/Index.vue')
            },
            {
                path: '/components/jumbotron',
                component: () => import('pages/components/jumbotron/Index.vue')
            },
            {
                path: '/components/badge',
                component: () => import('pages/components/badge/Index.vue')
            },
            {
                path: '/components/card',
                component: () => import('pages/components/card/Index.vue')
            },
            {
                path: '/components/carousel',
                component: () => import('pages/components/carousel/Index.vue')
            },
            {
                path: '/components/count-down',
                component: () => import('pages/components/count-down/Index.vue')
            },
            {
                path: '/components/progress',
                component: () => import('pages/components/progress/Index.vue')
            },
            {
                path: '/components/steps',
                component: () => import('pages/components/steps/Index.vue')
            },
            {
                path: '/components/page-header',
                component: () => import('pages/components/page-header/Index.vue')
            },
            {
                path: '/components/switch',
                component: () => import('pages/components/switch/Index.vue')
            },
            {
                path: '/components/timeline',
                component: () => import('pages/components/timeline/Index.vue')
            },
            {
                path: '/components/loading-bar',
                component: () => import('pages/components/loading-bar/Index.vue')
            },
            {
                path: '/components/collapse',
                component: () => import('pages/components/collapse/Index.vue')
            },
            {
                path: '/components/divider',
                component: () => import('pages/components/divider/Index.vue')
            },
            {
                path: '/components/time',
                component: () => import('pages/components/time/Index.vue')
            },
            {
                path: '/components/checkbox',
                component: () => import('pages/components/checkbox/Index.vue')
            },
            {
                path: '/components/result',
                component: () => import('pages/components/result/Index.vue')
            },
            {
                path: '/components/tag',
                component: () => import('pages/components/tag/Index.vue')
            },
            {
                path: '/components/dropdown',
                component: () => import('pages/components/dropdown/Index.vue')
            },
            {
                path: '/components/tooltip',
                component: () => import('pages/components/tooltip/Index.vue')
            },
            {
                path: '/components/poptip',
                component: () => import('pages/components/poptip/Index.vue')
            },
            {
                path: '/components/skeleton',
                component: () => import('pages/components/skeleton/Index.vue')
            },
            {
                path: '/components/radio',
                component: () => import('pages/components/radio/Index.vue')
            },
            {
                path: '/components/drawer',
                component: () => import('pages/components/drawer/Index.vue')
            }
        ]
    });
