<template>
  <el-config-provider :locale="locale">
    <hello-world msg="Hello Vue 3 + TypeScript + Vite" />
  </el-config-provider>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = zhCn
</script>

<style lang="scss">
@import "./theme/mixins.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: var(--background-color-1);

  overflow: auto;

  @include scroll-bar();
}
</style>
