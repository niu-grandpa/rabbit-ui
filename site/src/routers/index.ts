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
      component: () => import('pages/app/views/docs/introduce/Introduce.vue')
    },
    {
      path: '/docs/install',
      component: () => import('pages/app/views/docs/install/Install.vue')
    },
    {
      path: '/docs/start',
      component: () => import('pages/app/views/docs/start/Start.vue')
    },
    {
      path: '/docs/update',
      component: () => import('pages/app/views/docs/update/Update.vue')
    },
    {
      path: '/docs/sponsor',
      component: () => import('pages/app/views/docs/sponsor/Sponsor.vue')
    },
    {
      path: '/docs/faq',
      component: () => import('pages/app/views/docs/faq/FAQ.vue')
    },
    {
      path: '/components/alert',
      component: () => import('pages/app/views/components/alert/Alert.vue')
    },
    {
      path: '/components/avatar',
      component: () => import('pages/app/views/components/avatar/Avatar.vue')
    },
    {
      path: '/components/back-top',
      component: () => import('pages/app/views/components/back-top/BackTop.vue')
    },
    {
      path: '/components/badge',
      component: () => import('pages/app/views/components/badge/Badge.vue')
    },
    {
      path: '/components/breadcrumb',
      component: () => import('pages/app/views/components/breadcrumb/Breadcrumb.vue')
    },
    {
      path: '/components/button',
      component: () => import('pages/app/views/components/button/Button.vue')
    },
    {
      path: '/components/card',
      component: () => import('pages/app/views/components/card/Card.vue')
    },
    {
      path: '/components/carousel',
      component: () => import('pages/app/views/components/carousel/Carousel.vue')
    },
    {
      path: '/components/checkbox',
      component: () => import('pages/app/views/components/checkbox/Checkbox.vue')
    },
    {
      path: '/components/collapse',
      component: () => import('pages/app/views/components/collapse/Collapse.vue')
    },
    {
      path: '/components/color',
      component: () => import('pages/app/views/components/color/Color.vue')
    },
    {
      path: '/components/count-down',
      component: () => import('pages/app/views/components/count-down/CountDown.vue')
    },
    {
      path: '/components/divider',
      component: () => import('pages/app/views/components/divider/Divider.vue')
    },
    {
      path: '/components/drawer',
      component: () => import('pages/app/views/components/drawer/Drawer.vue')
    },
    {
      path: '/components/dropdown',
      component: () => import('pages/app/views/components/dropdown/Dropdown.vue')
    },
    {
      path: '/components/empty',
      component: () => import('pages/app/views/components/empty/Alert.vue')
    },
    {
      path: '/components/input-number',
      component: () => import('pages/app/views/components/input-number/InputNumber.vue')
    },
    {
      path: '/components/jumbotron',
      component: () => import('pages/app/views/components/jumbotron/Jumbotron.vue')
    },
    {
      path: '/components/loading-bar',
      component: () => import('pages/app/views/components/loading-bar/LoadingBar.vue')
    },
    {
      path: '/components/message',
      component: () => import('pages/app/views/components/message/Message.vue')
    },
    {
      path: '/components/mini-modal',
      component: () => import('pages/app/views/components/mini-modal/MiniModal.vue')
    },
    {
      path: '/components/modal',
      component: () => import('pages/app/views/components/modal/Modal.vue')
    },
    {
      path: '/components/notice',
      component: () => import('pages/app/views/components/notice/Notice.vue')
    },
    {
      path: '/components/page-header',
      component: () => import('pages/app/views/components/page-header/PageHeader.vue')
    },
    {
      path: '/components/poptip',
      component: () => import('pages/app/views/components/poptip/Poptip.vue')
    },
    {
      path: '/components/progress',
      component: () => import('pages/app/views/components/progress/Progress.vue')
    },
    {
      path: '/components/radio',
      component: () => import('pages/app/views/components/radio/Radio.vue')
    },
    {
      path: '/components/result',
      component: () => import('pages/app/views/components/result/Result.vue')
    },
    {
      path: '/components/skeleton',
      component: () => import('pages/app/views/components/skeleton/Skeleton.vue')
    },
    {
      path: '/components/spin',
      component: () => import('pages/app/views/components/spin/Spin.vue')
    },
    {
      path: '/components/steps',
      component: () => import('pages/app/views/components/steps/Steps.vue')
    },
    {
      path: '/components/switch',
      component: () => import('pages/app/views/components/switch/Switch.vue')
    },
    {
      path: '/components/tabs',
      component: () => import('pages/app/views/components/tabs/Tabs.vue')
    },
    {
      path: '/components/tag',
      component: () => import('pages/app/views/components/tag/Tag.vue')
    },
    {
      path: '/components/time',
      component: () => import('pages/app/views/components/time/Time.vue')
    },
    {
      path: '/components/timeline',
      component: () => import('pages/app/views/components/timeline/Timeline.vue')
    },
    {
      path: '/components/tooltip',
      component: () => import('pages/app/views/components/tooltip/Tooltip.vue')
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
