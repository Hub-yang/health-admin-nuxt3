<script setup lang='ts'>
const isCollapsed = defineModel('collapsed', { type: Boolean, default: false })
</script>

<template>
  <a-layout-sider
    v-model:collapsed="isCollapsed"
    width="25%"
    :collapsed-width="0"
    :reverse-arrow="true"
    :collapsible="true"
    rounded-l-3xl
    important-bg-red
  />
</template>
