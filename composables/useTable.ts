/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { cloneDeep } from 'lodash-es'

export function useTable() {
  const dayjs = useDayjs()
  const totalCount = ref(0)
  const pageNum = ref(1)
  const data = ref<anyKey[]>([])
  const loading = ref(false)
  const uid = computed(() => (useStorage().getItem(USERINFO_KEY) as anyKey)?.uid || '')
  const state = reactive({
    searchText: '',
    searchedColumn: '',
  })
  const searchInput = ref()
  const editableData = reactive<anyKey>({})
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      fixed: 'left',
      width: 60,
      align: 'center',
      sorter: (a: anyKey, b: anyKey) => dayjs(a.date).unix() - dayjs(b.date).unix(),
      sortDirections: ['descend', 'ascend'],
      customFilterDropdown: true,
      onFilter: (value: string, record: anyKey) =>
        record.date
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible: boolean) => (visible && setTimeout(() => searchInput.value.focus(), 100)),

    },
    {
      title: '体重',
      dataIndex: 'weight',
      key: 'weight',
      width: 50,
      align: 'center',
    },
    {
      title: '热量',
      dataIndex: 'caloric',
      key: 'caloric',
      width: 50,
      align: 'center',
    },
    {
      title: '训练类型',
      dataIndex: 'trainingType',
      key: 'trainingType',
      width: 80,
      align: 'center',
    },
    {
      title: '运动时长',
      dataIndex: 'trainingTime',
      key: 'trainingTime',
      width: 50,
      align: 'center',
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 90,
      align: 'center',
    },
  ]

  const year = useState('year')
  async function handleGetTableData() {
    loading.value = true
    const tableSeries = [] as anyKey[]
    getTableList({ uid: uid.value, year: year.value, pageNum: pageNum.value, pageSize: 10 })
      .then((res:any) => {
        if (res!.code === 200) {
          loading.value = false
          if (Object.keys(res.tableInfo).length) {
            res!.tableInfo.data.forEach((item: anyKey, index: number) => {
              tableSeries.push({
                key: index,
                date: getdateFormated(item.date, 'datetype'),
                weight: item.weight,
                caloric: item.caloric,
                trainingTime: item.sporttime,
                trainingType: [...JSON.parse(item.training)],
              })
            })
            data.value = tableSeries
            totalCount.value = res.tableInfo.total
          }
        }
        else {
          loading.value = false
          message.error({ content: res.msg, duration: 2 })
        }
      })
      .catch(err => new Error(err))
      .finally(() => loading.value = false)
  }

  function handleSearch(selectedKeys: string[], confirm: () => void, dataIndex: string) {
    confirm()
    state.searchText = selectedKeys[0]
    state.searchedColumn = dataIndex
  }

  function handleReset(clearFilters: any, confirm: () => void) {
    confirm()
    clearFilters({
      confirm: true,
    })
    state.searchText = ''
  }

  function handleDelete(date: number) {
    const formattedDate = new Date(date).getTime() / 1000
    delData({ date: formattedDate, uid: uid.value })
      .then(async (res: any) => {
        if (res.code === 200) {
          await handleGetTableData()
          await refreshNuxtData('chartDataKey')
          message.success({ content: res.msg, duration: 2 })
        }
        else { message.error({ content: res.msg, duration: 2 }) }
      })
  }

  function hanleEdit(key: string) {
    editableData[key] = cloneDeep(
      data.value.filter((item: any) => key === item.key)[0],
    )
  }

  // 更新请求
  const handleUpdate = (values: anyKey) => {
    // 处理日期数据
    const formObj = {
      ...values,
      date: new Date(values.date).getTime() / 1000,
      uid: uid.value,
    }
    // 发送请求
    updateWeight(formObj).then(async (res: any) => {
      if (res.code === 200) {
        await handleGetTableData()
        await refreshNuxtData('chartDataKey')
        message.success({ content: res.msg, duration: 2 })
      }
      else {
        message.error({ content: res.msg, duration: 2 })
      }
    })
  }

  function handleSave(record: any, key: string) {
    // 判断新旧对象是否相等，如果相等则没有实际修改
    const isEqual = isObjectValueEqual(editableData[key], record)
    if (!isEqual)
      handleUpdate(editableData[key])

    delete editableData[key]
  }

  function isObjectValueEqual(newVal: any, oldVal: any) {
    const oldValProps = Object.getOwnPropertyNames(oldVal)
    const newValProps = Object.getOwnPropertyNames(newVal)

    if (newValProps.length !== oldValProps.length)
      return false

    for (let i = 0; i < oldValProps.length; i++) {
      const propName = oldValProps[i]
      const propA = oldVal[propName]
      const propB = newVal[propName]
      if (propA.toString().trim() !== propB.toString().trim())
        return false
    }

    return true
  }

  function handleCancel(key: string) {
    delete editableData[key]
  }

  function getTagColor(tag: string) {
    switch (tag) {
      case '胸':
        return '#02E2CA'
      case '肩':
        return '#C10F15'
      case '背':
        return '#00B050'
      case '腿':
        return '#0070C0'
      case '手臂':
        return '#8EA9DB'
      case '核心':
        return '#FCAD36'
      case 'HIIT':
        return '#EB6420'
      default:
        return '#FCAD36'
    }
  }
  watchEffect(handleGetTableData)
  const total = useState('total')
  watch(total, async () => handleGetTableData())
  return {
    totalCount,
    pageNum,
    data,
    searchInput,
    columns,
    ...toRefs(state),
    editableData,
    loading,
    handleSearch,
    handleReset,
    handleDelete,
    hanleEdit,
    handleSave,
    handleCancel,
    getTagColor,
    handleGetTableData,
  }
}
