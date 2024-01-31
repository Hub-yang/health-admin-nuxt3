<script setup lang='ts'>
definePageMeta({
  title: '欢迎登录',
})

const isCollapsed = ref(false)
</script>

<template>
  <div
    h-full
    w-full
  >
    <a-layout h-full important-bg-blue>
      <a-layout-content
        width="75%"
        important-bg-blue
      >
        <row-one />
        <row-two />
        <row-three />
      </a-layout-content>
      <side-bar v-model:collapsed="isCollapsed" />
    </a-layout>
  </div>
</template>
