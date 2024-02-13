<script setup lang='ts'>
const BaseLineChart = defineAsyncComponent(() => import('./charts/baseLineChart.vue'))
</script>

<template>
  <div h="30%" relative>
    <BaseLineChart />
  </div>
</template>
