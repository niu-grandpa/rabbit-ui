import { createRouter, createWebHistory } from 'vue-router'
import Loading from '../../../src/components/loading-bar'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
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
      component: () => import('pages/app/views/Introduce.vue')
    },
    {
      path: '/docs/install',
      component: () => import('pages/app/views/Install.vue')
    },
    {
      path: '/docs/start',
      component: () => import('pages/app/views/Start.vue')
    },
    {
      path: '/docs/update',
      component: () => import('pages/app/views/Update.vue')
    },
    {
      path: '/docs/sponsor',
      component: () => import('pages/app/views/Sponsor.vue')
    },
    {
      path: '/docs/faq',
      component: () => import('pages/app/views/FAQ.vue')
    },
    {
      path: '/components/affix',
      component: () => import('pages/app/views/Affix.vue')
    },
    {
      path: '/components/alert',
      component: () => import('pages/app/views/Alert.vue')
    },
    {
      path: '/components/avatar',
      component: () => import('pages/app/views/Avatar.vue')
    },
    {
      path: '/components/back-top',
      component: () => import('pages/app/views/BackTop.vue')
    },
    {
      path: '/components/badge',
      component: () => import('pages/app/views/Badge.vue')
    },
    {
      path: '/components/breadcrumb',
      component: () => import('pages/app/views/Breadcrumb.vue')
    },
    {
      path: '/components/button',
      component: () => import('pages/app/views/Button.vue')
    },
    {
      path: '/components/card',
      component: () => import('pages/app/views/Card.vue')
    },
    {
      path: '/components/carousel',
      component: () => import('pages/app/views/Carousel.vue')
    },
    {
      path: '/components/checkbox',
      component: () => import('pages/app/views/Checkbox.vue')
    },
    {
      path: '/components/circle',
      component: () => import('pages/app/views/Circle.vue')
    },
    {
      path: '/components/collapse',
      component: () => import('pages/app/views/Collapse.vue')
    },
    {
      path: '/components/color',
      component: () => import('pages/app/views/Color.vue')
    },
    {
      path: '/components/count-down',
      component: () => import('pages/app/views/CountDown.vue')
    },
    {
      path: '/components/divider',
      component: () => import('pages/app/views/Divider.vue')
    },
    {
      path: '/components/drawer',
      component: () => import('pages/app/views/Drawer.vue')
    },
    {
      path: '/components/dropdown',
      component: () => import('pages/app/views/Dropdown.vue')
    },
    {
      path: '/components/empty',
      component: () => import('pages/app/views/Empty.vue')
    },
    {
      path: '/components/icon',
      component: () => import('pages/app/views/Icon.vue')
    },
    {
      path: '/components/input-number',
      component: () => import('pages/app/views/InputNumber.vue')
    },
    {
      path: '/components/jumbotron',
      component: () => import('pages/app/views/Jumbotron.vue')
    },
    {
      path: '/components/loading-bar',
      component: () => import('pages/app/views/LoadingBar.vue')
    },
    {
      path: '/components/message',
      component: () => import('pages/app/views/Message.vue')
    },
    {
      path: '/components/mini-modal',
      component: () => import('pages/app/views/MiniModal.vue')
    },
    {
      path: '/components/modal',
      component: () => import('pages/app/views/Modal.vue')
    },
    {
      path: '/components/notice',
      component: () => import('pages/app/views/Notice.vue')
    },
    {
      path: '/components/page-header',
      component: () => import('pages/app/views/PageHeader.vue')
    },
    {
      path: '/components/poptip',
      component: () => import('pages/app/views/Poptip.vue')
    },
    {
      path: '/components/progress',
      component: () => import('pages/app/views/Progress.vue')
    },
    {
      path: '/components/radio',
      component: () => import('pages/app/views/Radio.vue')
    },
    {
      path: '/components/result',
      component: () => import('pages/app/views/Result.vue')
    },
    {
      path: '/components/skeleton',
      component: () => import('pages/app/views/Skeleton.vue')
    },
    {
      path: '/components/spin',
      component: () => import('pages/app/views/Spin.vue')
    },
    {
      path: '/components/steps',
      component: () => import('pages/app/views/Steps.vue')
    },
    {
      path: '/components/switch',
      component: () => import('pages/app/views/Switch.vue')
    },
    {
      path: '/components/tabs',
      component: () => import('pages/app/views/Tabs.vue')
    },
    {
      path: '/components/tag',
      component: () => import('pages/app/views/Tag.vue')
    },
    {
      path: '/components/time',
      component: () => import('pages/app/views/Time.vue')
    },
    {
      path: '/components/timeline',
      component: () => import('pages/app/views/Timeline.vue')
    },
    {
      path: '/components/tooltip',
      component: () => import('pages/app/views/Tooltip.vue')
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

window.addEventListener('load', () => router.replace('/'))
