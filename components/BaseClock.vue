<script setup lang="ts">
const now = useDateFormat(useNow(), `YYYY年MM月DD日 dddd HH : mm : ss`)
</script>

<template>
  <div w-full flex items-center justify-start gap-3.5 px-3.5 color-white>
    <span i-carbon-time block />
    <span block>{{ now }}</span>
  </div>
</template>
