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
            component: () => import('pages/components/Color.vue')
        }
    ]
});

router.afterEach(() => window.scrollTo(0, 0));

export default router;
