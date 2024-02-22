export async function fetchChartData() {
  const uid = useStorage().getItem(USERINFO_KEY)?.uid || ''
  const year = useState('year')
  let previousData: any = null
  let rollback: any = null
  const { data, pending } = await useFetch('/api/getAllChartsData', {
    key: CHART_DATA_FETCH_KEY,
    query: { uid, year },
    watch: [year],
    onRequest() {
      // 保存缓存数据确保请求失败时重置
      previousData = useNuxtData(CHART_DATA_FETCH_KEY).data?.value
    },
    onRequestError() {
      message.error('请求失败')
      rollback = previousData
    },
    onResponseError() {
      message.error('响应失败')
      rollback = previousData
    },
  })

  if (data.value && data.value.length) {
    message.success('获取数据成功')
    return {
      data,
      pending,
    }
  }
  else if (Array.isArray(data.value) && !data.value.length) {
    message.info('暂无数据，请添加')
    return {
      data,
      pending,
    }
  }
  else {
    return {
      data: rollback,
      pending,
    }
  }
}
