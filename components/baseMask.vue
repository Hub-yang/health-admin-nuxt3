<script setup lang='ts'>
const show = defineModel('show', {
  type: Boolean,
})

const username = toRef(() => useStorage().getItem(USERINFO_KEY)?.username ?? '--')
function handleClickDown() {
  show.value = false
  useHomePageStore().getGlobalData()
}
</script>

<template>
  <div
    h-full
    w-full
    flex-center
    bg-black:93
  >
    <h1
      class="mask-animation"
      cursor-pointer
      text-6xl
      color-white
      font-900
      italic
      @click.once="handleClickDown"
    >
      Hello,{{ username }}
    </h1>
  </div>
</template>
