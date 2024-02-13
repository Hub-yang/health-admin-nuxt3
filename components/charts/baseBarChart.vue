<script setup lang='ts'>
const option = {
  animationDuration: 1200,
  animationDelay: 200,
  tooltip: {
    trigger: 'axis',
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
    formatter: '{b}<br>{a} : {c}min',
  },
  dataZoom: {
    type: 'inside',
    start: 0,
    end: 100,
  },
  grid: {
    top: '13%',
    left: '2%',
    right: '2%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      fontWeight: 'bold',
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
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
  yAxis: {
    type: 'value',
    name: 'min',
    nameTextStyle: {
      color: '#5A5C65',
      fontWeight: 'bold',
    },
    offset: -10,
    splitNumber: 3,
    axisLine: {
      show: false,
    },
    axisLabel: {
      color: '#5A5C65',
      fontWeight: 'bold',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: 'rgba(255,255,255,0.5)',
        type: [
          2,
          5,
        ],
        dashOffset: 5,
      },
    },
  },
  animationDurationUpdate: 500,
  series: {
    type: 'bar',
    name: '时间',
    barMaxWidth: '20%',
    label: {
      show: true,
    },
    itemStyle: {
      borderRadius: [
        12,
        12,
        5,
        5,
      ],
    },
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.1)',
    },
    universalTransition: {
      enabled: true,
      divideShape: 'clone',
    },
    data: [
      {
        groupId: '1月',
        value: 392,
      },
      {
        groupId: '2月',
        value: 490,
      },
      {
        groupId: '3月',
        value: 346,
      },
      {
        groupId: '4月',
        value: 178,
      },
      {
        groupId: '5月',
        value: 263,
      },
      {
        groupId: '6月',
        value: 290,
      },
      {
        groupId: '7月',
        value: 270,
      },
      {
        groupId: '8月',
        value: 78,
      },
      {
        groupId: '9月',
        value: 22,
      },
      {
        groupId: '10月',
        value: 738,
      },
      {
        groupId: '11月',
        value: 593,
      },
      {
        groupId: '12月',
        value: 140,
      },
    ],
  },
  dataGroupId: '',
}
</script>

<template>
  <BaseEcharts width="100%" height="100%" :option="option" />
</template>
