<script setup lang='ts'>
const echarts = ref()
let timer: NodeJS.Timeout
onMounted(() => timer = setTimeout(() => echarts.value.resize(), 500))
onBeforeUnmount(() => clearTimeout(timer))

const uid = useStorage().getItem(USERINFO_KEY)?.uid || ''
const { year } = storeToRefs(useHomePageStore())
const { data, pending } = await useFetch('/api/getAllChartsData', {
  query: { uid, year },
  watch: [year],
  lazy: true,
  transform: data => handleData(data),
})

function handleData(data: any) {
  const { seriesData, xAxisData } = getChartFourData(
    data,
    getdateFormated,
  )
  return {
    seriesData,
    xAxisData,
  }
}

const option = computed(() => ({
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
    text: year.value,
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
    data: data.value?.xAxisData,
  },
  series: {
    animationDuration: 1200,
    singleAxisIndex: 0,
    coordinateSystem: 'singleAxis',
    type: 'scatter',
    name: '总计',
    data: data.value?.seriesData,
  },
}))
</script>

<template>
  <BaseEcharts v-if="!pending" ref="echarts" :option="option" />
</template>
