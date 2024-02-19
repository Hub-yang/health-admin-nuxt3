<script setup lang='ts'>
definePageMeta({
  title: '欢迎登录',
})
const isCollapsed = ref(false)
const startStyleShow = ref(true)
</script>

<template>
  <div
    h-full w-full overflow-hidden
  >
    <Transition name="page" mode="out-in">
      <baseMask
        v-if="startStyleShow"
        v-model:show="startStyleShow"
      />
    </Transition>
    <homePageDrawer v-if="!startStyleShow" />
    <Transition name="page" mode="out-in">
      <a-layout
        v-if="!startStyleShow"
        h-full
      >
        <a-layout-content
          width="75%"
        >
          <row-one />
          <row-two />
          <row-three />
        </a-layout-content>
        <side-bar v-model:collapsed="isCollapsed" />
      </a-layout>
    </Transition>
  </div>
</template>
