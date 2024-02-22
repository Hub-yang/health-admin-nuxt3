export async function fetchChartData() {
  const uid = useStorage().getItem(USERINFO_KEY)?.uid || ''
  const year = useState('year')
  const { data: currentData } = useNuxtData(CHART_DATA_FETCH_KEY)
  const previousData = ref([])
  const { data, pending } = await useFetch('/api/getAllChartsData', {
    key: CHART_DATA_FETCH_KEY,
    query: { uid, year },
    watch: [year],
    timeout: 1000 * 10,
    onRequest() {
      // 保存缓存数据确保请求失败时重置
      previousData.value = currentData.value
    },
    onRequestError() {
      message.error('请求失败')
      currentData.value = previousData.value
    },
    onResponseError() {
      message.error('响应失败')
      currentData.value = previousData.value
    },
    onResponse({ response }) {
      const _data = response._data
      if (Array.isArray(_data) && !_data.length)
        message.info('暂无数据，请添加')
      else
        message.success('获取数据成功')
    },
  })

  return {
    data,
    pending,
  }
}
