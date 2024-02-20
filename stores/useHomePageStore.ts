export const useHomePageStore = defineStore('homePageStore', () => {
  const { year: currentYear } = useYearSelectOptionsAuto()

  const year = ref(currentYear.value)
  const data = reactive({
    totalTime: 0,
    totalDay: 0,
    avgWeight: 0,
    avgBMI: 0,
    totalCount: 0,
  })

  async function getGlobalData() {
    // debugger
    const uid = useStorage().getItem(USERINFO_KEY)?.uid || ''
    const res = await getAllChartsData({ uid, year: year.value }) as any
    if (res && res.length) {
      // 获取总条数
      data.totalCount = res.length
      // 指标
      let totalTime = 0
      let totalWeight = 0
      res.forEach((item: anyKey) => {
        totalTime += item.sporttime
        totalWeight += item.weight
      })
      data.totalTime = totalTime
      data.totalDay = res.length
      data.avgWeight = +(totalWeight / res.length).toFixed(1)
      data.avgBMI = +(data.avgWeight / 1.69 ** 2).toFixed(1)
    }
  }

  return {
    data,
    year,
    getGlobalData,
  }
})
