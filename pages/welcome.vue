<script setup lang='ts'>
definePageMeta({
  title: '欢迎访问',
  middleware: (to, from) => {
    if (from.path !== '/login')
      return navigateTo('/dashBoard', { replace: true })
  },
})

const username = computed(() => useStorage().getItem(USERINFO_KEY)?.username ?? '--')
async function handleMaskClick() {
  await navigateTo('/dashBoard', { replace: true })
}
</script>

<template>
  <div class="h-full w-full flex-center bg-black:93">
    <img left="61%" top="30%" absolute w-30 rotate-10 src="../assets/images/arrow-purple.gif" alt="">
    <h1
      class="cursor-pointer text-6xl color-white font-900 italic animate-color-change-3x"
      @click="handleMaskClick"
    >
      Hello,{{ username }}
    </h1>
  </div>
</template>
