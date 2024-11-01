type Res = anyKey[]
type XAxisData = string[]
type SeriesData = anyKey[]

export function getChartOneData(res: Res, cb: Cb) {
  const seriesData: SeriesData = []
  let xAxisData: XAxisData = []
  const dataOne: anyKey[] = []
  const dataTwo: anyKey[] = []
  res.forEach((item: anyKey) => {
    xAxisData.push(cb(item.date))
    dataOne.push(item.weight)
    dataTwo.push(item.caloric)
  })
  // x轴数据
  xAxisData = xAxisData.map((item) => {
    return `${item.split('/')[1]}-${item.split('/')[2]}`
  })
  seriesData.push(
    { name: '体重', data: dataOne },
    { name: '热量', data: dataTwo },
  )
  return { seriesData, xAxisData }
}

export function getChartTwoData(res: Res, cb: Cb) {
  const monthStr: any[] = []
  // 接收第一层数据
  const seriesData: SeriesData = []
  // 接收下钻数据
  const drilldownData: SeriesData = []
  const xAxisData: XAxisData = []
  res.forEach((item: any) => {
    const str = cb(item.date).split('/')[1]
    if (!monthStr.includes(str))
      monthStr.push(str)
  })
  monthStr.forEach((dateitem) => {
    const data: SeriesData = []
    res.forEach((item: anyKey) => {
      const str = cb(item.date).split('/')[1]
      if (str === dateitem) {
        data.push([
          `${str}-${cb(item.date).split('/')[2]}`,
          item.sporttime,
        ])
      }
    })
    drilldownData.push({
      dataGroupId: `${dateitem}月`,
      data,
    })
  })
  drilldownData.forEach((item) => {
    const sumVal = item.data.reduce((pre: number, cur: number[]) => pre + cur[1], 0)
    seriesData.push({
      groupId: item.dataGroupId,
      value: sumVal,
    })
  })
  // 排序
  drilldownData.forEach((item) => {
    item.data.sort((a: any, b: any) => b[0].slice(1) - a[0].slice(1))
  })
  // 排序
  seriesData.sort((a, b) => a.groupId.slice(0, -1) - b.groupId.slice(0, -1))
  seriesData.forEach(item => xAxisData.push(item.groupId))
  return { drilldownData, seriesData, xAxisData }
}

export function getChartThreeData(res: Res) {
  const seriesData: any[] = []
  if (res) {
    console.log('res :>>> ', res)
    const countMap = new Map()
    res.forEach((item) => {
      try {
        item.training = JSON.parse(item.training)[0]
      }
      catch(err){
        console.log(err)
      }
      if (countMap.has(item.training)) {
        countMap.set(item.training, countMap.get(item.training) + 1)
      }
      else {
        countMap.set(item.training, 1)
      }
    })

    countMap.forEach((value, name) => {
      const item = { value, name }
      seriesData.push(item)
    })
    const seriesThree = seriesData.sort((a, b) => a.value - b.value)
    return seriesThree
  }
}

export function getChartFourData(res: Res, cb: Cb) {
  const seriesData = []
  const xAxisData = [
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
  ]
  let JanVal = 0
  let FebVal = 0
  let MarVal = 0
  let AprVal = 0
  let MayVal = 0
  let JunVal = 0
  let JulVal = 0
  let AugVal = 0
  let SepVal = 0
  let OctVal = 0
  let NobVal = 0
  let DecVal = 0
  res.forEach((item: anyKey) => {
    switch (cb(item.date).split('/')[1]) {
      case '1':
        JanVal += item.sporttime
        break
      case '2':
        FebVal += item.sporttime
        break
      case '3':
        MarVal += item.sporttime
        break
      case '4':
        AprVal += item.sporttime
        break
      case '5':
        MayVal += item.sporttime
        break
      case '6':
        JunVal += item.sporttime
        break
      case '7':
        JulVal += item.sporttime
        break
      case '8':
        AugVal += item.sporttime
        break
      case '9':
        SepVal += item.sporttime
        break
      case '10':
        OctVal += item.sporttime
        break
      case '11':
        NobVal += item.sporttime
        break
      case '12':
        DecVal += item.sporttime
        break
      default:
        break
    }
  })
  seriesData.push(
    JanVal,
    FebVal,
    MarVal,
    AprVal,
    MayVal,
    JunVal,
    JulVal,
    AugVal,
    SepVal,
    OctVal,
    NobVal,
    DecVal,
  )

  return { seriesData, xAxisData }
}

export function getChartFiveData(res: Res, cb: Cb) {
  const seriesData = []
  const xAxisData = [
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
  ]
  let JanVal = 0
  let FebVal = 0
  let MarVal = 0
  let AprVal = 0
  let MayVal = 0
  let JunVal = 0
  let JulVal = 0
  let AugVal = 0
  let SepVal = 0
  let OctVal = 0
  let NobVal = 0
  let DecVal = 0
  res.forEach((item: anyKey) => {
    switch (cb(item.date).split('/')[1]) {
      case '1':
        JanVal += item.caloric
        break
      case '2':
        FebVal += item.caloric
        break
      case '3':
        MarVal += item.caloric
        break
      case '4':
        AprVal += item.caloric
        break
      case '5':
        MayVal += item.caloric
        break
      case '6':
        JunVal += item.caloric
        break
      case '7':
        JulVal += item.caloric
        break
      case '8':
        AugVal += item.caloric
        break
      case '9':
        SepVal += item.caloric
        break
      case '10':
        OctVal += item.caloric
        break
      case '11':
        NobVal += item.caloric
        break
      case '12':
        DecVal += item.caloric
        break
      default:
        break
    }
  })
  seriesData.push(
    JanVal,
    FebVal,
    MarVal,
    AprVal,
    MayVal,
    JunVal,
    JulVal,
    AugVal,
    SepVal,
    OctVal,
    NobVal,
    DecVal,
  )
  return { seriesData, xAxisData }
}

export function getKpiData(data: Res) {
  let totalTime = 0
  let totalWeight = 0
  const totalDay = data.length
  data.forEach((item: anyKey) => {
    totalTime += item.sporttime
    totalWeight += item.weight
  })
  const avgWeight = +(totalWeight / totalDay).toFixed(1)
  const avgBMI = +(avgWeight / 1.69 ** 2).toFixed(1)

  return {
    totalTime,
    avgWeight,
    avgBMI,
    totalDay,
  }
}
