import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
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
        }
    ]
});

router.afterEach(() => window.scrollTo(0, 0));

export default router;
