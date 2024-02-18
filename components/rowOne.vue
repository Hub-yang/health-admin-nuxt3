<script setup lang='ts'>
const BaseLineChart = defineAsyncComponent(() => import('./charts/BaseLineChart.vue'))
</script>

<template>
  <div h="30%" relative>
    <BaseLineChart />
  </div>
</template>
