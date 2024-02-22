<script setup lang="ts">
const { data } = useNuxtData(CHART_DATA_FETCH_KEY)
const currentData = computed(() => getKpiData(unref(data)))
</script>

<template>
  <div v-if="data" class="container">
    <div class="area_3_1">
      <div class="area_3_1_1">
        <div class="area_3_1_1_1">
          <span class="line" />{{ currentData?.totalTime ?? "--" }}min
        </div>
        <div class="area_3_1_1_2">
          运动总时长
        </div>
      </div>
      <div class="area_3_1_line">
        <span />
      </div>
      <div class="area_3_1_2">
        <div class="area_3_1_2_1">
          <span class="line" />{{ currentData?.totalDay ?? "--" }}天
        </div>
        <div class="area_3_1_2_2">
          运动总天数
        </div>
      </div>
    </div>
    <div class="area_3_line" />
    <div class="area_3_2">
      <div class="area_3_1_1">
        <div class="area_3_1_1_1">
          <span class="line" />{{ currentData?.avgWeight ?? "--" }}kg
        </div>
        <div class="area_3_1_1_2">
          平均体重
        </div>
      </div>
      <div class="area_3_1_line">
        <span />
      </div>
      <div class="area_3_1_2">
        <div class="area_3_1_2_1">
          <span class="line" />
          {{ currentData?.avgBMI ?? "--" }}
          <span class="range">
            {{
              currentData?.avgBMI === 0
                ? ""
                : currentData?.avgBMI <= 18 ? "偏低" : currentData?.avgBMI >= 24
                  ? "偏高"
                  : "正常"
            }}
          </span>
        </div>
        <div class="area_3_1_2_2">
          平均BMI
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  margin-left: 24px;

  .area_3_1,
  .area_3_2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .area_3_1 {
    .area_3_1_1_1 .line {
      background-color: #f73b75;
    }

    .area_3_1_2_1 .line {
      background-color: #fd982e;
    }
  }

  .area_3_2 {
    .area_3_1_1_1 .line {
      background-color: #31c7fc;
    }

    .area_3_1_2_1 .line {
      background-color: #8c2eff;
    }
  }

  .area_3_1_1,
  .area_3_1_2 {
    width: 169px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .area_3_1_1_1,
  .area_3_1_2_1 {
    width: 100%;
    text-align: left;
    padding-left: 17px;
    line-height: 35px;

    font-size: 31px;
    color: #fff;
    font-weight: bold;

    .line {
      display: inline-block;
      height: 24px;
      width: 5px;
      border-radius: 3px;
      margin-right: 10px;
    }
  }

  .area_3_1_2_1 .range {
    font-size: 12px;
    display: inline-block;
    line-height: 24px;
    vertical-align: bottom;
  }

  .area_3_1_1_2,
  .area_3_1_2_2 {
    width: 100%;
    font-size: 18px;
    color: #76777e;
    text-align: left;
    padding-left: 32px;
  }

  .area_3_1_line span {
    display: inline-block;
    height: 52px;
    width: 2px;
    background-color: #2f313c;
  }

  .area_3_line {
    width: 90%;
    border-bottom: 3px solid #2f313c;
    margin: 5px 0;
  }
}
</style>
