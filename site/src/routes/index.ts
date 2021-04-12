import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: () => import('pages/Home.vue') },
        { path: '/docs/introduce', component: () => import('pages/docs/Introduce.vue') }
    ]
});

export default router;
