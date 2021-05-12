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
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  Loading.start()
  next()
})
router.afterEach(() => Loading.finish())
