<script setup lang='ts'>
const echarts = ref()
let timer: NodeJS.Timeout
onMounted(() => timer = setTimeout(() => echarts.value.resize(), 500))
onBeforeUnmount(() => clearTimeout(timer))

const year = useState('year')
const { data } = useNuxtData(CHART_DATA_FETCH_KEY)
const currentData = computed(() => getChartFiveData(unref(data), getdateFormated))
const option = computed(() => ({
  color: '#FBD379',
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
    formatter: '{b}<br>{a}:{c}kcal',
  },
  title: {
    textBaseline: 'middle',
    right: 30,
    top: '50%',
    textStyle: {
      color: '#5A5C65',
    },
    text: year.value,
  },
  singleAxis: {
    right: 150,
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
    data: currentData.value?.seriesData,
  },
}))
</script>

<template>
  <BaseEcharts v-if="data" ref="echarts" :option="option" />
</template>
