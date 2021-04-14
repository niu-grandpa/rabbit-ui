import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('pages/Home.vue'),
            meta: {
                title: 'Rabbit UI -一个轻量级的 UI 插件库'
            }
        },
        {
            path: '/docs',
            redirect: '/',
            component: () => import('pages/docs/Detail.vue'),

            children: [
                {
                    path: '/introduce',
                    component: () => import('pages/docs/Introduce.vue'),
                    meta: { title: '介绍 - Rabbit' }
                }
            ]
        },
        {
            path: '/components',
            redirect: '/',
            component: () => import('pages/components/Detail.vue'),

            children: []
        }
    ]
});

export default router;
