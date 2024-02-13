<script setup lang='ts'>
const option = {
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
    data: [
      {
        value: 2,
        name: '肩',
      },
      {
        value: 2,
        name: '背',
      },
      {
        value: 2,
        name: '腿',
      },
      {
        value: 3,
        name: 'HIIT',
      },
      {
        value: 16,
        name: '手臂',
      },
      {
        value: 27,
        name: '燃脂',
      },
      {
        value: 28,
        name: '胸',
      },
      {
        value: 53,
        name: '核心',
      },
    ],
  },
}
</script>

<template>
  <BaseEcharts width="100%" height="100%" :option="option" />
</template>
