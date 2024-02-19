// import { getUserList } from 'api/request.js'
// import { getdateFormated } from 'utils/dateFormat'
// import {
//   getChartFiveData,
//   getChartFourData,
//   getChartOneData,
//   getChartThreeData,
//   getChartTwoData,
// } from 'utils/handleData'

export const useHomePageStore = defineStore('homePageStore', () => {
  const { year } = useYearSelectOptionsAuto()
  const data = reactive({
    // 选择框年份
    year: year.value,
    seriesOne: [],
    xAxisDataOne: [],
    seriesTwo: [],
    drilldownData: [],
    seriesThree: [],
    seriesFour: [],
    seriesFive: [],
    totalTime: 0,
    totalDay: 0,
    avgWeight: 0,
    avgBMI: 0,
    // 总条数
    totalCount: 0,
  })

  function getGlobalData() {}

  return {
    data,
    getGlobalData,
  }
})
