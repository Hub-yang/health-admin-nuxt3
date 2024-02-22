<script setup lang="ts">
const myChart = ref()
const showBack = ref(false)

const { data } = useNuxtData(CHART_DATA_FETCH_KEY)
const currentData = computed(() => getChartTwoData(
  unref(data),
  getdateFormated,
))

const option = computed(() => ({
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
      color(_: any, index: number) {
        const colorList = [
          '#00FCFF',
          '#0091FF',
          '#901698',
          '#40FBCB',
          '#FD982E',
          '#F73B75',
          '#862DFF',
          '#97FE33',
          '#00FCFF',
          '#0091FF',
          '#901698',
          '#40FBCB',
        ]
        return colorList[index]
      },
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
    data: currentData.value?.xAxisData,
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
      borderRadius: [12, 12, 5, 5],
      color(params: anyKey) {
        const colorList = [
          '#00FCFF',
          '#0091FF',
          '#901698',
          '#40FBCB',
          '#FD982E',
          '#F73B75',
          '#862DFF',
          '#97FE33',
          '#00FCFF',
          '#0091FF',
          '#901698',
          '#40FBCB',
        ]
        return colorList[params.dataIndex]
      },
    },
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.1)',
    },
    universalTransition: {
      enabled: true,
      divideShape: 'clone',
    },
    data: currentData.value?.seriesData,
  },
  dataGroupId: '',
}))

// 下钻
function handleClick(event: any) {
  if (event.data && currentData.value?.drilldownData.length) {
    showBack.value = true
    const subData = currentData.value.drilldownData.find((data) => {
      return data.dataGroupId === event.data.groupId
    })
    if (!subData)
      return false

    const barChartOptions = {
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
      },
    }

    const options = {
      ...barChartOptions,
      xAxis: {
        ...barChartOptions.xAxis,
        axisLabel: {
          color: '#00FCFF',
        },
        data: subData.data.map((item: anyKey) => item[0]),
      },
      series: {
        ...barChartOptions.series,
        barMaxWidth: '40%',
        itemStyle: {
          color: '#00FCFF',
        },
        emphasis: {
          itemStyle: {
            color: '#0091FF',
          },
        },
        dataGroupId: subData.dataGroupId,
        data: subData.data.map((item: anyKey) => item[1]),
      },
    }

    myChart.value?.getInstance()?.setOption(options)
  }
}

// 后退，获取上层数据
function handleBack() {
  myChart.value.getInstance().setOption(option.value)
  showBack.value = false
}
</script>

<template>
  <div class="container">
    <span v-if="showBack" i-carbon-home class="back_btn" @click.stop="handleBack" />
    <BaseEcharts v-if="data" ref="myChart" :option="option" :on-click="handleClick" />
  </div>
</template>

<style scoped lang="scss">
$border-radius: 30px;

.container {
  width: 100%;
  height: 100%;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  background-color: #222430;
  border-radius: $border-radius;
  position: relative;
}

.back_btn {
  z-index: 999;
  color: #fff;
  position: absolute;
  right: 2%;
  margin-top: 10px;
  cursor: pointer;
}

.back_btn :hover {
  transition: all ease 0.2s;
  color: #00fcff;
}
</style>
