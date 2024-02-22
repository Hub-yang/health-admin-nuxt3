<script setup lang='ts'>
const { data } = useNuxtData(CHART_DATA_FETCH_KEY)
const currentData = computed(() => getChartThreeData(unref(data)))

const option = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(50,50,50,0.8)',
    borderColor: 'rgba(50,50,50,0.8)',
    padding: [
      2,
      5,
      2,
      5,
    ],
    textStyle: {
      color: '#FFF',
      fontStyle: 'oblique',
      fontWeight: 'bold',
    },
    formatter: '{b}<br>{a} : {c}',
  },
  grid: {
    top: '3%',
    left: '0%',
    right: '0%',
    bottom: '0%',
    containLabel: true,
  },
  series: {
    animationDelay: 100,
    animationDuration: 1300,
    name: '次数',
    type: 'pie',
    radius: [
      50,
      100,
    ],
    center: [
      '50%',
      '50%',
    ],
    roseType: 'area',
    itemStyle: {
      borderRadius: 8,
    },
    labelLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.3)',
      },
      smooth: 0.2,
      length: 10,
      length2: 20,
    },
    data: currentData.value,
  },
}))
</script>

<template>
  <BaseEcharts v-if="data" :option="option" />
</template>
