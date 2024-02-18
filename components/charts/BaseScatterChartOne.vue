<script setup lang='ts'>
const echarts = ref()
let timer: NodeJS.Timeout
onMounted(() => timer = setTimeout(() => echarts.value.resize(), 500))
onBeforeUnmount(() => clearTimeout(timer))
const option = {
  color: '#8C35F3',
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
    formatter: '{b}<br>{a}:{c}min',
  },
  title: {
    textBaseline: 'middle',
    left: 30,
    top: '50%',
    textStyle: {
      color: '#5A5C65',
    },
    text: '2023',
  },
  singleAxis: {
    left: 150,
    top: '47.5%',
    type: 'category',
    boundaryGap: false,
    height: '5%',
    axisLabel: {
      color: '#5A5C65',
      fontWeight: 'bold',
    },
    axisTick: {
      lineStyle: {
        width: 5,
      },
    },
    data: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ],
  },
  series: {
    animationDuration: 1200,
    singleAxisIndex: 0,
    coordinateSystem: 'singleAxis',
    type: 'scatter',
    name: '总计',
    data: [
      392,
      490,
      346,
      178,
      263,
      290,
      270,
      78,
      22,
      738,
      593,
      140,
    ],
  },
}
</script>

<template>
  <BaseEcharts ref="echarts" width="100%" height="100%" :option="option" />
</template>
