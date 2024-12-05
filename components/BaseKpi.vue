<script setup lang="ts">
const { data } = useNuxtData(CHART_DATA_FETCH_KEY)
const currentData = computed(() => getKpiData(unref(data)))

const avgBMI = computed(() => {
  let num = currentData.value?.avgBMI
  if (!num)
    return ''
  num = +num
  return num <= 18 ? '偏低' : num >= 24 ? '偏高' : '正常'
})

// 获取深蹲次数
await fetchSquatTotal().getValue()
const squatTotal = useState('squatTotal', () => 0)
const year = useState('year')
watch(year, () => fetchSquatTotal().getValue())
</script>

<template>
  <div v-if="data" ml3 w-full>
    <div w-full flex justify-start>
      <div min-w-30 flex flex-col items-start>
        <div flex-center gap-2>
          <span bg="#f73b75" inline-block h-7 w-1 rounded-xl />
          <span text-3xl text-white font-bold>{{ currentData?.totalTime || "--" }}min</span>
        </div>
        <div w-full pl-4 text-4 text-base-text>
          运动总时长
        </div>
      </div>
      <span bg="#2f313c" mx-4 block h-17 w-1 />
      <div min-w-30 flex flex-col items-start>
        <div flex-center gap-2>
          <span bg="#fd982e" inline-block h-7 w-1 rounded-xl />
          <span text-3xl text-white font-bold>{{ currentData?.totalDay || "--" }}天</span>
        </div>
        <div w-full pl-4 text-4 text-base-text>
          运动总天数
        </div>
      </div>
    </div>
    <div w="90%" border-b="4px solid #2f313c" my-1.5 />
    <div w-full flex justify-start>
      <div min-w-30 flex flex-col items-start>
        <div flex-center gap-2>
          <span bg="#31c7fc" inline-block h-7 w-1 rounded-xl />
          <span text-3xl text-white font-bold>{{ currentData?.avgWeight || "--" }}kg</span>
        </div>
        <div w-full pl-4 text-4 text-base-text>
          平均体重
        </div>
      </div>
      <span bg="#2f313c" mx-4 block h-17 w-1 />
      <div min-w-30 flex flex-col items-start>
        <div flex-center gap-2>
          <span bg="#8c2eff" inline-block h-7 w-1 rounded-xl />
          <span text-3xl text-white font-bold>{{ currentData?.avgBMI || "--" }}</span>
          <span inline-block vertical-bottom text-white>
            {{ avgBMI }}
          </span>
        </div>
        <div w-full pl-4 text-4 text-base-text>
          平均BMI
        </div>
      </div>
    </div>
    <div w="90%" border-b="4px solid #2f313c" my-1.5 />
    <div mt-4 w-full flex items-center gap-3>
      <span bg="#9ecb7f" inline-block h-7 w-1 rounded-xl />
      <div flex gap-2>
        <span text-4 text-white>深蹲次数</span>
        <span color-white:50>—</span>
        <span text-4 text-white>{{ squatTotal }}</span>
      </div>
    </div>
  </div>
</template>
