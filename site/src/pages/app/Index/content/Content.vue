<template>
  <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="19" :xxl="20" id="app-content">
    <section class="main-container">
      <Anchor :linkList="anchorLink" />
    </section>
  </a-col>
</template>

<script lang="ts" setup>
import { Anchor } from '../../../../components'

const anchorLink: {
  href: string
  title: string
}[] = [
  {
    href: 'TX',
    title: '特性'
  },
  {
    href: 'AZ',
    title: '安装'
  },
  {
    href: 'SL',
    title: '示例'
  },
  {
    href: 'BB',
    title: '版本'
  },
  {
    href: 'JR',
    title: '兼容'
  },
  {
    href: 'SZSY',
    title: '相关链接'
  }
]
</script>


<style lang="less" scope>
#app-content {
  .main-container {
    position: relative;
    min-height: 1500px;
    padding: 0 170px 32px 64px;
    background: #fff;

    @media only screen and (max-width: 992px) {
      margin-right: 0;
      margin-left: 0;
      padding-right: 16px;
      padding-left: 16px;
    }
  }
}
</style>