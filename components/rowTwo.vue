<script setup lang='ts'>
const BasePieChart = defineAsyncComponent(() => import('./charts/BasePieChart.vue'))
const BaseBarChart = defineAsyncComponent(() => import('./charts/BaseBarChart.vue'))
</script>

<template>
  <div relative h-full flex justify-between>
    <div w="29.2%" h-full rounded-3xl bg-base>
      <BasePieChart />
    </div>
    <div w="69.2%" h-full rounded-3xl bg-base>
      <BaseBarChart />
    </div>
  </div>
</template>
