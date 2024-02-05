<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'

useHead({
  title: useRoute().meta.title || appName,
})
</script>

<template>
  <a-config-provider :locale="zhCN">
    <nuxt-page :transition="{ name: 'page', mode: 'out-in' }" />
  </a-config-provider>
</template>

<style>
/* global-page-transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
