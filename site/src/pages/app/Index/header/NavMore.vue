<template>
  <a-menu>
    <a-menu-item-group title="赞助">
      <a-menu-item key="sponsor-wechat">
        <a-popover placement="left">
          <template #content>
            <img width="160" height="160" src="/wechat-money.png" alt="wechat-money" />
          </template>
          <a>微信</a>
        </a-popover>
      </a-menu-item>
      <a-menu-item key="sponsor-zfb">
        <a-popover placement="left">
          <template #content>
            <img width="160" height="160" src="/zfb-money.jpg" alt="zfb-money" />
          </template>
          <a>支付宝</a>
        </a-popover>
      </a-menu-item>
    </a-menu-item-group>
    <a-menu-item-group title="交流">
      <a-menu-item key="qq">
        <a-popover placement="left">
          <template #content>
            <img width="160" height="160" src="/src/assets/qq.png" alt="qq" />
          </template>
          <a>QQ (724617944)</a>
        </a-popover>
      </a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>
