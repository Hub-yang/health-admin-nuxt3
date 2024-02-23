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
</script>

<template>
  <div v-if="data" ml3 w-full>
    <div w-full flex justify-start>
      <div min-w-35 flex flex-col items-start>
        <div flex-center gap-2>
          <span bg="#f73b75" inline-block h-7 w-1 rounded-xl />
          <span text-3xl text-white font-bold>{{ currentData?.totalTime ?? "--" }}min</span>
        </div>
        <div text-base-text w-full pl-4 text-4>
          运动总时长
        </div>
      </div>
      <span bg="#2f313c" mr-5 block h-17 w-1 />
      <div min-w-35 flex flex-col items-start>
        <div flex-center gap-2>
          <span bg="#fd982e" inline-block h-7 w-1 rounded-xl />
          <span text-3xl text-white font-bold>{{ currentData?.totalDay ?? "--" }}天</span>
        </div>
        <div text-base-text w-full pl-4 text-4>
          运动总天数
        </div>
      </div>
    </div>
    <div w="90%" border-b="4px solid #2f313c" my-1.5 />
    <div w-full flex justify-start>
      <div min-w-35 flex flex-col items-start>
        <div flex-center gap-2>
          <span bg="#31c7fc" inline-block h-7 w-1 rounded-xl />
          <span text-3xl text-white font-bold>{{ currentData?.avgWeight ?? "--" }}kg</span>
        </div>
        <div text-base-text w-full pl-4 text-4>
          平均体重
        </div>
      </div>
      <span bg="#2f313c" mr-5 block h-17 w-1 />
      <div min-w-35 flex flex-col items-start>
        <div flex-center gap-2>
          <span bg="#8c2eff" inline-block h-7 w-1 rounded-xl />
          <span text-3xl text-white font-bold>{{ currentData?.avgBMI ?? "--" }}</span>
          <span inline-block vertical-bottom text-white>
            {{ avgBMI }}
          </span>
        </div>
        <div text-base-text w-full pl-4 text-4>
          平均BMI
        </div>
      </div>
    </div>
  </div>
</template>
