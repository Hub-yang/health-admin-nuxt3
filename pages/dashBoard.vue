<script setup lang='ts'>
definePageMeta({
  title: '欢迎登录',
})
const isCollapsed = ref(false)

// async function logout() {
//   useStorage().removeItems(TOKEN_KEY, USERINFO_KEY)
//   await navigateTo('/login', { replace: true })
// }

const startStyleShow = ref(true)
</script>

<template>
  <div
    h-full w-full
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
        important-bg-blue
      >
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
    </Transition>
  </div>
</template>
