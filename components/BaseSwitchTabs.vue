<script setup lang="ts">
const activeIndex = ref(0)
const items = [
  { label: '健身' },
  { label: '读书' },
]

function handleClick(index: number) {
  activeIndex.value = index
}

function getTabClass(index: number) {
  return activeIndex.value === index ? 'w-50%' : ''
}

function getTextClass(index: number) {
  return activeIndex.value === index ? 'op100' : 'op0'
}

function getOverlayClass() {
  return activeIndex.value ? 'left-50%' : 'left-0'
}
</script>

<template>
  <div relative h-full w-full flex overflow-hidden border-10 border-color-main rounded-3xl bg-main>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="z-2 h-full w-50% flex-col-center cursor-pointer transition-duration-300"
      :class="getTabClass(i)"
      @click="handleClick(i)"
    >
      <span v-for="(_, y) in 2" :key="y" class="block select-none text-13 text-#4298e7 font-900 transition-600" :class="getTextClass(i)">
        {{ item.label.split("")[y] }}
      </span>
    </div>
    <div
      class="absolute left-0 top-0 h-full w-50% rounded-2xl bg-#222430 transition-duration-600"
      :class="getOverlayClass()"
    />
  </div>
</template>
