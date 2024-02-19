<script setup lang="ts">
const { options } = useYearSelectOptionsAuto()
const year = defineModel('year', { type: String })
</script>

<template>
  <a-select
    v-model:value="year"
    show-search
    placeholder="选择年份"
    :options="options"
  />
</template>
