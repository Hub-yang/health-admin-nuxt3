<script setup lang="ts">
const now = useDateFormat(useNow(), `YYYY年MM月DD日 dddd HH : mm : ss`)
</script>

<template>
  <div flex="~" w-full items-center justify-start gap-1 px-3.5 color-white>
    <span i-carbon-time /> {{ now }}
  </div>
</template>
