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
  series: {
    animationDelay: 100,
    animationDuration: 1300,
    name: '次数',
    type: 'pie',
    radius: [
      '30%',
      '60%',
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
      length: 6,
      length2: 16,
    },
    data: currentData.value,
  },
}))
</script>

<template>
  <BaseEcharts v-if="data" :option="option" />
</template>
