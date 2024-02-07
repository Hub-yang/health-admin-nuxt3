<script setup lang='ts'>
const show = defineModel('show', {
  type: Boolean,
})
const username = toRef(() => (useCookie(userInfo_key).value as any)?.username ?? '--') // readonly
</script>

<template>
  <div
    h-full
    w-full
    flex-center
    bg-black:80
  >
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
