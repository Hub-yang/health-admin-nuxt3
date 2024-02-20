<script setup lang='ts'>
const uid = useStorage().getItem(USERINFO_KEY)?.uid || ''
const { year } = storeToRefs(useHomePageStore())
const { data, pending } = await useFetch('/api/getAllChartsData', {
  query: { uid, year },
  watch: [year],
  lazy: true,
  transform: data => handleData(data),
})

function handleData(data: any) {
  return getChartThreeData(data)
}

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
    data: data.value,
  },
}))
</script>

<template>
  <BaseEcharts v-if="!pending" :option="option" />
</template>
