<script setup lang='ts'>
const show = defineModel('show', {
  type: Boolean,
})

const username = toRef(() => useStorage().getItem(USERINFO_KEY)?.username ?? '--')
</script>

<template>
  <div
    h-full
    w-full
    flex-center
    bg-black:93
  >
    <img left="61%" top="30%" absolute w-30 rotate-10 src="../assets/images/arrow-purple.gif" alt="">
    <h1
      class="mask-animation"
      cursor-pointer
      text-6xl
      color-white
      font-900
      italic
      @click.once="show = false"
    >
      Hello,{{ username }}
    </h1>
  </div>
</template>
