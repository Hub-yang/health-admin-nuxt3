<script setup>
const BaseScatterChartOne = defineAsyncComponent(() => import('./charts/BaseScatterChartOne.vue'))
const BaseScatterChartTwo = defineAsyncComponent(() => import('./charts/BaseScatterChartTwo.vue'))

const width1 = ref('95%')
const width2 = ref('5%')
const baseTitle = ref('5%')

const areaOne = ref(null)
const areaTwo = ref(null)

function toggleActive(index) {
  switch (index) {
    case 1:
      areaOne.value.classList.add('active')
      areaTwo.value.classList.remove('active')
      width1.value = '95%'
      width2.value = '5%'
      baseTitle.value = '5%'
      break
    case 2:
      areaOne.value.classList.remove('active')
      areaTwo.value.classList.add('active')
      width1.value = '5%'
      width2.value = '95%'
      baseTitle.value = '85%'
      break
  }
}
</script>

<template>
  <div class="scatter_container">
    <div class="title_area">
      <!-- 散点图标题区域 -->
      <div
        class="sandian_title_line"
        :style="{
          backgroundColor: baseTitle === '5%' ? '#7731CC' : '#D0B06B',
        }"
      />
      <!-- 散点图title区域 -->
      <div :style="{ left: baseTitle }" class="sandian_title">
        <span>{{ baseTitle === "5%" ? "时长累计" : "热量累计" }}</span>
      </div>
    </div>

    <!-- 散点图区域 -->
    <div class="chart_area">
      <!-- 散点图1 -->
      <div
        ref="areaOne"
        :style="{ '--width1': width1 }"
        class="area_one"
        @click="toggleActive(1)"
      >
        <BaseScatterChartOne
          v-if="width1 === '95%'"
        />
        <transition>
          <span
            v-show="width1 === '5%'"
            class="iconfont icon-zuo-copy"
            :style="{ cursor: 'pointer' }"
          />
        </transition>
      </div>
      <!-- 散点图2 -->
      <div
        ref="areaTwo"
        :style="{ '--width2': width2 }"
        class="area_two"
        @click="toggleActive(2)"
      >
        <BaseScatterChartTwo

          v-if="width2 === '95%'"
        />
        <transition>
          <span
            v-show="width2 === '5%'"
            class="iconfont icon-zuo"
            :style="{ cursor: 'pointer' }"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$default-color: #222430;
$default-broder-radius: 30px;

.scatter_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title_area {
    position: relative;
    top: -7px;
    width: 100%;
    margin: 10px 0;

    .sandian_title_line {
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #2f313c;
      transition: all ease 700ms;
    }

    .sandian_title {
      position: absolute;
      top: -17px;
      width: 120px;
      transition: all 700ms ease;
      height: 34px;
      background-color: #181b22;
      color: #fff;
      text-align: center;
      line-height: 34px;
      vertical-align: middle;
      font-size: 15px;
      letter-spacing: 2px;
      font-weight: bold;
      font-style: italic;
    }
  }

  .chart_area {
    width: 100%;
    flex: 1;
    display: flex;

    .area_one,
    .area_two {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: $default-broder-radius;
      background-color: $default-color;
      transition: all 700ms ease;

      span {
        font-size: 20px;
        color: #fff;
      }
    }

    .area_one {
      width: var(--width1);
      margin-right: 10px;
    }

    .area_two {
      width: var(--width2);
      margin-left: 10px;
    }

    .area_one.active {
      width: var(--width1);
    }

    .area_two.active {
      width: var(--width2);
    }
  }

  .v-enter-active {
    transition: opacity 2s ease;
  }

  .v-leave-active {
    transition: opacity 0.2s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
