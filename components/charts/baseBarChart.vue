<script setup lang="ts">
const myChart = ref()
const showBack = ref(false)
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

const drilldownData = [
  {
    dataGroupId: '1月',
    data: [
      [
        '1-1',
        20,
      ],
      [
        '1-2',
        32,
      ],
      [
        '1-9',
        25,
      ],
      [
        '1-10',
        20,
      ],
      [
        '1-11',
        20,
      ],
      [
        '1-17',
        25,
      ],
      [
        '1-20',
        25,
      ],
      [
        '1-21',
        45,
      ],
      [
        '1-23',
        45,
      ],
      [
        '1-24',
        20,
      ],
      [
        '1-26',
        40,
      ],
      [
        '1-27',
        30,
      ],
      [
        '1-29',
        20,
      ],
      [
        '1-30',
        25,
      ],
    ],
  },
  {
    dataGroupId: '2月',
    data: [
      [
        '2-5',
        56,
      ],
      [
        '2-6',
        35,
      ],
      [
        '2-7',
        21,
      ],
      [
        '2-8',
        35,
      ],
      [
        '2-11',
        40,
      ],
      [
        '2-12',
        66,
      ],
      [
        '2-15',
        30,
      ],
      [
        '2-16',
        21,
      ],
      [
        '2-18',
        55,
      ],
      [
        '2-19',
        30,
      ],
      [
        '2-22',
        21,
      ],
      [
        '2-24',
        37,
      ],
      [
        '2-25',
        43,
      ],
    ],
  },
  {
    dataGroupId: '3月',
    data: [
      [
        '3-6',
        25,
      ],
      [
        '3-7',
        40,
      ],
      [
        '3-11',
        56,
      ],
      [
        '3-13',
        35,
      ],
      [
        '3-14',
        25,
      ],
      [
        '3-18',
        40,
      ],
      [
        '3-20',
        25,
      ],
      [
        '3-22',
        30,
      ],
      [
        '3-27',
        40,
      ],
      [
        '3-31',
        30,
      ],
    ],
  },
  {
    dataGroupId: '4月',
    data: [
      [
        '4-6',
        25,
      ],
      [
        '4-7',
        23,
      ],
      [
        '4-8',
        27,
      ],
      [
        '4-10',
        23,
      ],
      [
        '4-15',
        25,
      ],
      [
        '4-18',
        25,
      ],
      [
        '4-22',
        30,
      ],
    ],
  },
  {
    dataGroupId: '5月',
    data: [
      [
        '5-6',
        25,
      ],
      [
        '5-8',
        25,
      ],
      [
        '5-10',
        13,
      ],
      [
        '5-11',
        33,
      ],
      [
        '5-15',
        28,
      ],
      [
        '5-22',
        35,
      ],
      [
        '5-23',
        40,
      ],
      [
        '5-25',
        25,
      ],
      [
        '5-28',
        39,
      ],
    ],
  },
  {
    dataGroupId: '6月',
    data: [
      [
        '6-4',
        40,
      ],
      [
        '6-5',
        23,
      ],
      [
        '6-15',
        32,
      ],
      [
        '6-16',
        40,
      ],
      [
        '6-18',
        48,
      ],
      [
        '6-25',
        22,
      ],
      [
        '6-26',
        30,
      ],
      [
        '6-27',
        25,
      ],
      [
        '6-28',
        30,
      ],
    ],
  },
  {
    dataGroupId: '7月',
    data: [
      [
        '7-4',
        24,
      ],
      [
        '7-10',
        40,
      ],
      [
        '7-15',
        49,
      ],
      [
        '7-22',
        67,
      ],
      [
        '7-23',
        30,
      ],
      [
        '7-30',
        35,
      ],
      [
        '7-31',
        25,
      ],
    ],
  },
  {
    dataGroupId: '8月',
    data: [
      [
        '8-2',
        25,
      ],
      [
        '8-22',
        25,
      ],
      [
        '8-25',
        28,
      ],
    ],
  },
  {
    dataGroupId: '9月',
    data: [
      [
        '9-3',
        22,
      ],
    ],
  },
  {
    dataGroupId: '10月',
    data: [
      [
        '10-2',
        45,
      ],
      [
        '10-3',
        80,
      ],
      [
        '10-3',
        45,
      ],
      [
        '10-4',
        56,
      ],
      [
        '10-5',
        26,
      ],
      [
        '10-5',
        53,
      ],
      [
        '10-5',
        22,
      ],
      [
        '10-6',
        47,
      ],
      [
        '10-7',
        30,
      ],
      [
        '10-10',
        22,
      ],
      [
        '10-12',
        35,
      ],
      [
        '10-12',
        19,
      ],
      [
        '10-15',
        51,
      ],
      [
        '10-18',
        30,
      ],
      [
        '10-25',
        25,
      ],
      [
        '10-27',
        40,
      ],
      [
        '10-27',
        19,
      ],
      [
        '10-29',
        30,
      ],
      [
        '10-29',
        20,
      ],
      [
        '10-29',
        43,
      ],
    ],
  },
  {
    dataGroupId: '11月',
    data: [
      [
        '11-1',
        20,
      ],
      [
        '11-2',
        27,
      ],
      [
        '11-2',
        20,
      ],
      [
        '11-4',
        40,
      ],
      [
        '11-4',
        20,
      ],
      [
        '11-4',
        41,
      ],
      [
        '11-5',
        35,
      ],
      [
        '11-5',
        15,
      ],
      [
        '11-7',
        31,
      ],
      [
        '11-9',
        34,
      ],
      [
        '11-11',
        46,
      ],
      [
        '11-12',
        46,
      ],
      [
        '11-12',
        28,
      ],
      [
        '11-12',
        50,
      ],
      [
        '11-15',
        30,
      ],
      [
        '11-15',
        20,
      ],
      [
        '11-25',
        50,
      ],
      [
        '11-25',
        20,
      ],
      [
        '11-27',
        20,
      ],
    ],
  },
  {
    dataGroupId: '12月',
    data: [
      [
        '12-17',
        50,
      ],
      [
        '12-18',
        30,
      ],
      [
        '12-19',
        28,
      ],
      [
        '12-20',
        32,
      ],
    ],
  },
]

// 下钻
function handleClick(event: any) {
  if (event.data && drilldownData.length) {
    showBack.value = true
    const subData = drilldownData.find((data) => {
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
        data: subData.data.map((item) => {
          return item[0]
        }),
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
        data: subData.data.map((item) => {
          return item[1]
        }),
      },
    }

    myChart.value?.getInstance()?.setOption(options)
  }
}

// 后退，获取上层数据
function handleBack() {
  myChart.value.getInstance().setOption(option)
  showBack.value = false
}
</script>

<template>
  <div class="container">
    <!-- 下钻后退按钮 -->
    <span v-show="showBack" i-carbon-home @click.stop="handleBack" />
    <BaseEcharts ref="myChart" width="100%" height="100%" :option="option" :on-click="handleClick" />
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

  .title {
    width: 100%;
    text-align: center;
    height: 20px;
    cursor: pointer;

    .left {
      display: inline-block;
      border: 20px solid transparent;
      border-bottom: 20px solid #181b22;
      transform: translate(20px, -20px) rotate(45deg);
      border-radius: 30%;
    }

    .right {
      display: inline-block;
      border: 20px solid transparent;
      border-bottom: 20px solid #181b22;
      transform: translate(-20px, -20px) rotate(-45deg);
      border-radius: 30%;
    }

    .middle {
      display: inline-block;
      height: 23px;
      width: 120px;
      white-space: nowrap;
      line-height: 23px;
      font-size: 13px;
      color: #fff;
      background-color: #181b22;
      transform: translateY(-23px);
    }
  }

  .canvas {
    flex: 1;
    width: 100%;
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
}
</style>
