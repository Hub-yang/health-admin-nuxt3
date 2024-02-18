<script setup lang="ts">
const year = defineModel('year', { default: '2023' })
const options = [
  {
    value: '2023',
    label: '2023',
  },
  {
    value: '2022',
    label: '2022',
  },
]
</script>

<template>
  <a-select
    v-model:value="year"
    show-search
    placeholder="选择年份"
    :options="options"
  />
</template>
