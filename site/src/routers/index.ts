import { createRouter, createWebHistory } from 'vue-router'
import Loading from '../../../src/components/loading-bar'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
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
      component: () => import('pages/app/routers/docs/introduce/Introduce.vue')
    },
    {
      path: '/docs/install',
      component: () => import('pages/app/routers/docs/install/Install.vue')
    },
    {
      path: '/docs/start',
      component: () => import('pages/app/routers/docs/start/Start.vue')
    },
    {
      path: '/docs/update',
      component: () => import('pages/app/routers/docs/update/Update.vue')
    },
    {
      path: '/docs/sponsor',
      component: () => import('pages/app/routers/docs/sponsor/Sponsor.vue')
    },
    {
      path: '/docs/faq',
      component: () => import('pages/app/routers/docs/faq/FAQ.vue')
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  Loading.start()
  next()
})
router.afterEach(() => {
  Loading.finish()
  window.scrollTo(0, 0)
})
