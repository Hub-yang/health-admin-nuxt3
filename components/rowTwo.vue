<script setup lang='ts'>
const BasePieChart = defineAsyncComponent(() => import('./charts/BasePieChart.vue'))
const BaseBarChart = defineAsyncComponent(() => import('./charts/BaseBarChart.vue'))
</script>

<template>
  <div relative h-full flex justify-between>
    <div w="29.2%" h-full flex flex-col rounded-3xl bg-base>
      <div title-main>
        部位训练频率分布
      </div>
      <BasePieChart flex-1 />
    </div>
    <div w="69.2%" h-full flex flex-col rounded-3xl bg-base>
      <div title-main>
        锻炼时长统计
      </div>
      <BaseBarChart flex-1 />
    </div>
  </div>
</template>
