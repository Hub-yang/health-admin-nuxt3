<script setup lang="ts">
const BaseScatterChartOne = defineAsyncComponent(() => import('./charts/BaseScatterChartOne.vue'))
const BaseScatterChartTwo = defineAsyncComponent(() => import('./charts/BaseScatterChartTwo.vue'))
const activeIndex = ref(1)

function toggleActive(index: number) {
  activeIndex.value = index
}
const title = computed(() => {
  const year = useState('year').value ?? ''
  return activeIndex.value === 1 ? `时长累计 : ${year}` : `热量累计 : ${year}`
})

const baseTitleClass = computed(() => activeIndex.value === 1 ? '5%' : '85%')
const defaultActiveClass = computed(() => activeIndex.value === 1 ? '97%' : '3%')
const anotherActiveClass = computed(() => activeIndex.value === 2 ? '97%' : '3%')
const baseTitleBg = computed(() => activeIndex.value === 1 ? '#7731CC' : '#D0B06B')
</script>

<template>
  <div class="relative h-full w-full flex flex-col">
    <div class="title_area relative top--7px my-10px w-full">
      <div
        class="absolute h-1 w-full bg-main transition-700"
        :style="{ backgroundColor: baseTitleBg }"
      />
      <div :style="{ left: baseTitleClass }" class="absolute top--17px h-34px w-140px bg-main text-center text-4 text-white font-bold line-height-34px italic transition-all-700">
        <span>{{ title }}</span>
      </div>
    </div>

    <div class="w-full flex flex-1">
      <div
        :style="{ width: defaultActiveClass }"
        class="mr-10px h-full flex-center overflow-hidden rounded-3xl bg-base transition-all-700"
        @click="toggleActive(1)"
      >
        <transition>
          <BaseScatterChartOne v-if="activeIndex === 1" />
          <span
            v-else
            class="i-solar-double-alt-arrow-right-linear block h-full cursor-pointer text-xl text-white transition-all-300 hover:text-#D0B06B"
          />
        </transition>
      </div>
      <div
        :style="{ width: anotherActiveClass }"
        class="ml-10px h-full flex-center overflow-hidden rounded-3xl bg-base transition-all-700"
        @click="toggleActive(2)"
      >
        <transition>
          <BaseScatterChartTwo v-if="activeIndex === 2" />
          <span
            v-else
            class="i-solar-double-alt-arrow-left-linear block h-full cursor-pointer text-xl text-white transition-all-300 hover:text-#7731CC"
          />
        </transition>
      </div>
    </div>
  </div>
</template>
