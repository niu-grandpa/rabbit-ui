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
      component: () => import('pages/app/views/docs/Introduce.vue')
    },
    {
      path: '/docs/install',
      component: () => import('pages/app/views/docs/Install.vue')
    },
    {
      path: '/docs/start',
      component: () => import('pages/app/views/docs/Start.vue')
    },
    {
      path: '/docs/update',
      component: () => import('pages/app/views/docs/Update.vue')
    },
    {
      path: '/docs/sponsor',
      component: () => import('pages/app/views/docs/Sponsor.vue')
    },
    {
      path: '/docs/faq',
      component: () => import('pages/app/views/docs/FAQ.vue')
    },
    {
      path: '/components/alert',
      component: () => import('pages/app/views/componentst/Alert.vue')
    },
    {
      path: '/components/avatar',
      component: () => import('pages/app/views/components/Avatar.vue')
    },
    {
      path: '/components/back-top',
      component: () => import('pages/app/views/components/BackTop.vue')
    },
    {
      path: '/components/badge',
      component: () => import('pages/app/views/components/Badge.vue')
    },
    {
      path: '/components/breadcrumb',
      component: () => import('pages/app/views/components/Breadcrumb.vue')
    },
    {
      path: '/components/button',
      component: () => import('pages/app/views/components/Button.vue')
    },
    {
      path: '/components/card',
      component: () => import('pages/app/views/components/Card.vue')
    },
    {
      path: '/components/carousel',
      component: () => import('pages/app/views/components/Carousel.vue')
    },
    {
      path: '/components/checkbox',
      component: () => import('pages/app/views/components/Checkbox.vue')
    },
    {
      path: '/components/collapse',
      component: () => import('pages/app/views/components/Collapse.vue')
    },
    {
      path: '/components/color',
      component: () => import('pages/app/views/components/Color.vue')
    },
    {
      path: '/components/count-down',
      component: () => import('pages/app/views/components/CountDown.vue')
    },
    {
      path: '/components/divider',
      component: () => import('pages/app/views/components/Divider.vue')
    },
    {
      path: '/components/drawer',
      component: () => import('pages/app/views/components/Drawer.vue')
    },
    {
      path: '/components/dropdown',
      component: () => import('pages/app/views/components/Dropdown.vue')
    },
    {
      path: '/components/empty',
      component: () => import('pages/app/views/components/Empty.vue')
    },
    {
      path: '/components/input-number',
      component: () => import('pages/app/views/components/InputNumber.vue')
    },
    {
      path: '/components/jumbotron',
      component: () => import('pages/app/views/components/Jumbotron.vue')
    },
    {
      path: '/components/loading-bar',
      component: () => import('pages/app/views/components/LoadingBar.vue')
    },
    {
      path: '/components/message',
      component: () => import('pages/app/views/components/Message.vue')
    },
    {
      path: '/components/mini-modal',
      component: () => import('pages/app/views/components/MiniModal.vue')
    },
    {
      path: '/components/modal',
      component: () => import('pages/app/views/components/Modal.vue')
    },
    {
      path: '/components/notice',
      component: () => import('pages/app/views/components/Notice.vue')
    },
    {
      path: '/components/page-header',
      component: () => import('pages/app/views/components/PageHeader.vue')
    },
    {
      path: '/components/poptip',
      component: () => import('pages/app/views/components/Poptip.vue')
    },
    {
      path: '/components/progress',
      component: () => import('pages/app/views/components/Progress.vue')
    },
    {
      path: '/components/radio',
      component: () => import('pages/app/views/components/Radio.vue')
    },
    {
      path: '/components/result',
      component: () => import('pages/app/views/components/Result.vue')
    },
    {
      path: '/components/skeleton',
      component: () => import('pages/app/views/components/Skeleton.vue')
    },
    {
      path: '/components/spin',
      component: () => import('pages/app/views/components/Spin.vue')
    },
    {
      path: '/components/steps',
      component: () => import('pages/app/views/components/Steps.vue')
    },
    {
      path: '/components/switch',
      component: () => import('pages/app/views/components/Switch.vue')
    },
    {
      path: '/components/tabs',
      component: () => import('pages/app/views/components/Tabs.vue')
    },
    {
      path: '/components/tag',
      component: () => import('pages/app/views/components/Tag.vue')
    },
    {
      path: '/components/time',
      component: () => import('pages/app/views/components/Time.vue')
    },
    {
      path: '/components/timeline',
      component: () => import('pages/app/views/components/Timeline.vue')
    },
    {
      path: '/components/tooltip',
      component: () => import('pages/app/views/components/Tooltip.vue')
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
