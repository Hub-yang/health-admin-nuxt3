<script setup lang='ts'>
// #region 获取缓存，请求失败时边界处理
const { data: previousData } = useNuxtData(CHART_DATA_FETCH_KEY)
// #endregion
const { data, pending } = await fetchChartData() as anyKey
const currentData = computed(() => {
  const argData = unref(data) || unref(previousData) || []
  return getChartOneData(
    argData,
    getdateFormated,
  )
})

const option = computed(() => ({
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
    formatter: '{b}<br><br>{a1} : {c1}kcal<br>{a0} : {c0}kg',
  },
  legend: {
    top: '5%',
    textStyle: {
      color: '#5A5C65',
      height: 10,
      fontWeight: 'bold',
      fontStyle: 'italic',
      rich: {
        a: {
          verticalAlign: 'middle',
        },
      },
    },
    icon: 'circle',
    data: [
      {
        name: '体重',
        itemStyle: {
          color: '#91CC75',
        },
      },
      {
        name: '热量',
        itemStyle: {
          color: '#CD4D44',
        },
      },
    ],
  },
  dataZoom: {
    type: 'inside',
    start: 0,
    end: 100,
  },
  grid: {
    top: '20%',
    left: '2%',
    right: '2%',
    bottom: '0%',
    containLabel: true,
  },
  xAxis: {
    show: false,
    data: currentData.value?.xAxisData,
  },
  yAxis: [
    {
      type: 'value',
      name: 'kcal',
      nameTextStyle: {
        color: '#5A5C65',
        fontWeight: 'bold',
      },
      min: 0,
      max: 500,
      splitNumber: 5,
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#5A5C65',
        fontWeight: 'bold',
      },
    },
    {
      type: 'value',
      name: 'kg',
      nameTextStyle: {
        color: '#5A5C65',
        fontWeight: 'bold',
      },
      min: 50,
      max: 70,
      splitNumber: 5,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#5A5C65',
        fontWeight: 'bold',
      },
    },
  ],
  series: [
    {
      name: '体重',
      data: currentData.value?.seriesData?.[0]?.data,
      animationDuration: 1200,
      animationDelay: 100,
      z: 1,
      zlevel: 1,
      color: '#65b687',
      type: 'line',
      yAxisIndex: 1,
      emphasis: {
        focus: 'series',
      },
      markPoint: {
        data: [
          {
            type: 'max',
            name: 'Max',
          },
          {
            type: 'min',
            name: 'Min',
          },
        ],
        symbolSize: 40,
        label: {
          color: '#fff',
        },
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#84fab0',
              },
              {
                offset: 1,
                color: 'green',
              },
            ],
            global: false,
          },
        },
      },
      showSymbol: false,
    },
    {
      name: '热量',
      data: currentData.value?.seriesData?.[1]?.data,
      animationDuration: 1200,
      animationDelay: 100,
      z: 2,
      zlevel: 2,
      type: 'line',
      yAxisIndex: 0,
      emphasis: {
        focus: 'series',
      },
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgb(255, 191, 0)',
            },
            {
              offset: 1,
              color: 'rgb(224, 62, 76)',
            },
          ],
          global: false,
        },
      },
    },
  ],
}))
</script>

<template>
  <BaseEcharts v-if="!pending" :option="option" />
</template>
