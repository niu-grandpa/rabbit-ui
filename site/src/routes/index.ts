import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/App.vue'),
            meta: {
                title: 'Rabbit UI -一个轻量级的 UI 插件库'
            }
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
            component: () => import('pages/docs/Introduce.vue'),
            meta: { title: '介绍 - Rabbit' }
        },
        {
            path: '/components/color',
            component: () => import('pages/components/Color.vue'),
            meta: { title: '色彩 Color -Rabbit' }
        }
    ]
});

export default router;
