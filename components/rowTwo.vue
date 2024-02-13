<script setup lang='ts'>
const BasePieChart = defineAsyncComponent(() => import('./charts/basePieChart.vue'))
const BaseBarChart = defineAsyncComponent(() => import('./charts/BaseBarChart.vue'))
</script>

<template>
  <div h="50%" relative flex bg-black>
    <div h-full w="30%">
      <BasePieChart />
    </div>
    <div h-full w="70%">
      <BaseBarChart />
    </div>
  </div>
</template>
