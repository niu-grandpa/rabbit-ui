<template>
  <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="19" :xxl="20" id="app-content">
    <section class="main-container">
      <router-view />
    </section>
  </a-col>
</template>

<style lang="less" scope>
#app-content {
  .main-container {
    position: relative;
    min-height: 1500px;
    padding: 20px 170px 32px 64px;
    background: #fff;

    @media only screen and (max-width: 992px) {
      margin-right: 0;
      margin-left: 0;
      padding-right: 16px;
      padding-left: 16px;
    }

    .markdown {
      color: #55585e;
      font-size: 14px;
      line-height: 2;

      h1 {
        margin-top: 8px;
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 30px;
        line-height: 38px;
        color: #2c3e50;
      }

      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #2c3e50;
        clear: both;
        margin: 1.6em 0 0.6em;
        font-weight: 500;
      }

      h2 {
        font-size: 24px;
        line-height: 32px;
      }

      h3 {
        font-size: 18px;
      }

      p {
        margin: 1em 0;
      }

      ul > li {
        margin-left: 20px;
        padding-left: 4px;
        list-style-type: circle;
      }

      code {
        margin: 0 1px;
        padding: 0.2em 0.4em;
        font-size: 0.9em;
        background-color: #fff5f5;
        color: #fa795e;
        border: 1px solid #fff5f5;
        border-radius: 3px;
      }

      blockquote {
        margin: 1em 0;
        padding-left: 0.8em;
        font-size: 90%;
      }
    }
  }
}
</style>