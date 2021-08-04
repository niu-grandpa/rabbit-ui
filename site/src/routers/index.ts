import { createRouter, createWebHistory } from 'vue-router'
import Loading from '../../../src/components/loading-bar'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      meta: {
        title: 'Rabbit UI - 一个基于 JavaScript 的简洁 UI 组件库'
      },
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
      meta: {
        title: '介绍'
      },
      component: () => import('pages/app/views/Introduce.vue')
    },
    {
      path: '/docs/install',
      meta: {
        title: '安装'
      },
      component: () => import('pages/app/views/Install.vue')
    },
    {
      path: '/docs/start',
      meta: {
        title: '快速上手'
      },
      component: () => import('pages/app/views/Start.vue')
    },
    {
      path: '/docs/update',
      meta: {
        title: '更新日志'
      },
      component: () => import('pages/app/views/Update.vue')
    },
    {
      path: '/docs/sponsor',
      meta: {
        title: '支持我们'
      },
      component: () => import('pages/app/views/Sponsor.vue')
    },
    {
      path: '/docs/faq',
      meta: {
        title: '常见问题'
      },
      component: () => import('pages/app/views/FAQ.vue')
    },
    {
      path: '/components/affix',
      meta: {
        title: '图钉'
      },
      component: () => import('pages/app/views/Affix.vue')
    },
    {
      path: '/components/alert',
      meta: {
        title: '警告提示'
      },
      component: () => import('pages/app/views/Alert.vue')
    },
    {
      path: '/components/avatar',
      meta: {
        title: '头像'
      },
      component: () => import('pages/app/views/Avatar.vue')
    },
    {
      path: '/components/back-top',
      meta: {
        title: '返回顶部'
      },
      component: () => import('pages/app/views/BackTop.vue')
    },
    {
      path: '/components/badge',
      meta: {
        title: '徽标'
      },
      component: () => import('pages/app/views/Badge.vue')
    },
    {
      path: '/components/breadcrumb',
      meta: {
        title: '面包屑'
      },
      component: () => import('pages/app/views/Breadcrumb.vue')
    },
    {
      path: '/components/button',
      meta: {
        title: '按钮'
      },
      component: () => import('pages/app/views/Button.vue')
    },
    {
      path: '/components/card',
      meta: {
        title: '卡片'
      },
      component: () => import('pages/app/views/Card.vue')
    },
    {
      path: '/components/carousel',
      meta: {
        title: '走马灯'
      },
      component: () => import('pages/app/views/Carousel.vue')
    },
    {
      path: '/components/checkbox',
      meta: {
        title: '复选框'
      },
      component: () => import('pages/app/views/Checkbox.vue')
    },
    {
      path: '/components/circle',
      meta: {
        title: '进度坏'
      },
      component: () => import('pages/app/views/Circle.vue')
    },
    {
      path: '/components/collapse',
      meta: {
        title: '折叠面板'
      },
      component: () => import('pages/app/views/Collapse.vue')
    },
    {
      path: '/components/color',
      meta: {
        title: '颜色'
      },
      component: () => import('pages/app/views/Color.vue')
    },
    {
      path: '/components/count-down',
      meta: {
        title: '倒计时'
      },
      component: () => import('pages/app/views/CountDown.vue')
    },
    {
      path: '/components/divider',
      meta: {
        title: '分割线'
      },
      component: () => import('pages/app/views/Divider.vue')
    },
    {
      path: '/components/drawer',
      meta: {
        title: '抽屉'
      },
      component: () => import('pages/app/views/Drawer.vue')
    },
    {
      path: '/components/dropdown',
      meta: {
        title: '下拉菜单'
      },
      component: () => import('pages/app/views/Dropdown.vue')
    },
    {
      path: '/components/empty',
      meta: {
        title: '空状态'
      },
      component: () => import('pages/app/views/Empty.vue')
    },
    {
      path: '/components/icon',
      meta: {
        title: '图标'
      },
      component: () => import('pages/app/views/Icon.vue')
    },
    {
      path: '/components/input-number',
      meta: {
        title: '数字输入框'
      },
      component: () => import('pages/app/views/InputNumber.vue')
    },
    {
      path: '/components/jumbotron',
      meta: {
        title: '巨幕'
      },
      component: () => import('pages/app/views/Jumbotron.vue')
    },
    {
      path: '/components/loading-bar',
      meta: {
        title: '加载进度条'
      },
      component: () => import('pages/app/views/LoadingBar.vue')
    },
    {
      path: '/components/message',
      meta: {
        title: '消息提示'
      },
      component: () => import('pages/app/views/Message.vue')
    },
    {
      path: '/components/mini-modal',
      meta: {
        title: '迷你模态框'
      },
      component: () => import('pages/app/views/MiniModal.vue')
    },
    {
      path: '/components/modal',
      meta: {
        title: '模态框'
      },
      component: () => import('pages/app/views/Modal.vue')
    },
    {
      path: '/components/notice',
      meta: {
        title: '通知提醒'
      },
      component: () => import('pages/app/views/Notice.vue')
    },
    {
      path: '/components/page-header',
      meta: {
        title: '页头'
      },
      component: () => import('pages/app/views/PageHeader.vue')
    },
    {
      path: '/components/poptip',
      meta: {
        title: '气泡提示'
      },
      component: () => import('pages/app/views/Poptip.vue')
    },
    {
      path: '/components/progress',
      meta: {
        title: '进度条'
      },
      component: () => import('pages/app/views/Progress.vue')
    },
    {
      path: '/components/radio',
      meta: {
        title: '单选框'
      },
      component: () => import('pages/app/views/Radio.vue')
    },
    {
      path: '/components/result',
      meta: {
        title: '结果'
      },
      component: () => import('pages/app/views/Result.vue')
    },
    {
      path: '/components/skeleton',
      meta: {
        title: '骨架屏'
      },
      component: () => import('pages/app/views/Skeleton.vue')
    },
    {
      path: '/components/spin',
      meta: {
        title: '加载中'
      },
      component: () => import('pages/app/views/Spin.vue')
    },
    {
      path: '/components/steps',
      meta: {
        title: '步骤条'
      },
      component: () => import('pages/app/views/Steps.vue')
    },
    {
      path: '/components/switch',
      meta: {
        title: '开关'
      },
      component: () => import('pages/app/views/Switch.vue')
    },
    {
      path: '/components/tabs',
      meta: {
        title: '选项卡'
      },
      component: () => import('pages/app/views/Tabs.vue')
    },
    {
      path: '/components/tag',
      meta: {
        title: '标签'
      },
      component: () => import('pages/app/views/Tag.vue')
    },
    {
      path: '/components/time',
      meta: {
        title: '相对时间'
      },
      component: () => import('pages/app/views/Time.vue')
    },
    {
      path: '/components/timeline',
      meta: {
        title: '时间轴'
      },
      component: () => import('pages/app/views/Timeline.vue')
    },
    {
      path: '/components/tooltip',
      meta: {
        title: '文字提示'
      },
      component: () => import('pages/app/views/Tooltip.vue')
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  Loading.start()
  next()
})
router.afterEach(() => {
  Loading.finish()
  window.scrollTo(0, 0)
})
