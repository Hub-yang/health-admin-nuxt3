<script setup lang="ts">
import type { EChartsType } from 'echarts/core'
import echarts from '~/config/echarts.config'

type themeType = string | anyKey
interface Props {
  option: anyKey
  width?: string // 必须指定容器的宽高，否则无法显示。（容器内图表会自动获取父元素宽高）
  height?: string
  // eslint-disable-next-line vue/require-default-prop
  theme?: themeType
  onMouseover?: (...args: never[]) => void
  onMouseout?: (...args: never[]) => void
  onClick?: (...args: never[]) => void
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  onMouseover: () => { },
  onMouseout: () => { },
  onClick: () => { },
})

const chartRef = ref<Ref<HTMLDivElement>>()
const chartInstance = ref<EChartsType>()
function draw() {
  if (chartInstance.value)
    chartInstance.value.setOption(props.option, { notMerge: true })
}

function init() {
  if (!chartRef.value)
    return false

  // 确保 ECharts 实例单例
  chartInstance.value = echarts.getInstanceByDom(chartRef.value as never) as EChartsType
  if (!chartInstance.value) {
    chartInstance.value = markRaw(
      echarts.init(chartRef.value as never, props.theme, {
        renderer: 'canvas',
      }),
    )

    // 事件绑定：
    if (props.onMouseover) {
      chartInstance.value.on('mouseover', (event: anyKey) => {
        props.onMouseover(event as never, chartInstance.value as never, props.option as never)
      })
    }
    if (props.onMouseout) {
      chartInstance.value.on('mouseout', (event: anyKey) => {
        props.onMouseout(event as never, chartInstance.value as never, props.option as never)
      })
    }
    if (props.onClick) {
      chartInstance.value.on('click', (event: anyKey) => {
        props.onClick(event as never, chartInstance.value as never, props.option as never)
      })
    }

    draw()
  }
}

watch(() => props.option, () => draw(), { deep: true })

// 窗口自适应并开启过渡动画
function resize() {
  if (chartInstance.value)
    chartInstance.value.resize({ animation: { duration: 300 } })
}

// resize防抖
const debouncedResize = useDebounceFn(resize, 500, { maxWait: 800 })

onMounted(() => {
  init()
  window.addEventListener('resize', debouncedResize)
})

onBeforeUnmount(() => {
  // 容器被销毁之后，销毁实例，避免内存泄漏
  chartInstance.value?.dispose()
  window.removeEventListener('resize', debouncedResize)
})

// 对父组件暴露获取 ECharts 实例的方法，可直接通过实例调用原生函数
defineExpose({
  getInstance: () => chartInstance.value,
  resize,
  draw,
})
</script>

<template>
  <div id="echart" ref="chartRef" :style="{ width: props.width, height: props.height }" />
</template>
