<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'

useHead({
  title: useRoute().meta.title || appName,
})

const isOnline = useOnline()
if (!isOnline.value)
  message.error('网络不可用，请检查网络连接')
</script>

<template>
  <a-config-provider :locale="zhCN">
    <nuxt-page :transition="{ name: 'page', mode: 'out-in' }" />
  </a-config-provider>
</template>
