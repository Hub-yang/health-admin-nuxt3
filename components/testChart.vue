<script setup lang='ts'>
const gridRight = ref('50%')

setTimeout(() =>
  gridRight.value = '10%', 2000)
const option = computed(() => ({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  grid: {
    top: '1%',
    bottom: '1%',
    left: '1%',
    right: gridRight.value,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}))
</script>

<template>
  <BaseEcharts width="100%" height="100%" :option="option" />
</template>
