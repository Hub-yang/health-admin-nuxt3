import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
export function useForm() {
  // 日期选择器国际化设置
  dayjs.locale('zh-cn')
  const formRef = ref()
  const form = reactive<anyKey>({
    date: null,
    weight: '',
    training: [],
    sportTime: '',
    caloric: '',
  })

  // #region validater
  const validateDate = async (rules: any, value: any) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        checkPending = setTimeout(() => reject('请选择日期！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }

  const validateWeight = async (rule: any, value: any) => {
    let checkPending
    if (!value) {
      clearTimeout(checkPending)
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        checkPending = setTimeout(() => reject('体重不能为空！'), 500)
      })
    }
    else if (Number.isNaN(+value)) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        checkPending = setTimeout(() => reject('请输入数字！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }

  const validateTrain = async (rule: any, value: any) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value?.length) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        checkPending = setTimeout(() => reject('请选择训练类型！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }

  const validateSportTime = async (rule: any, value: any) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        checkPending = setTimeout(() => reject('运动时长不能为空！'), 500)
      })
    }
    else if (typeof value !== 'number') {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        checkPending = setTimeout(() => reject('请输入数字！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }

  const validateCaloric = async (rule: any, value: any) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        checkPending = setTimeout(() => reject('热量不能为空！'), 500)
      })
    }
    else if (typeof value !== 'number') {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        checkPending = setTimeout(() => reject('请输入数字！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }
  // #endregion

  const rules = {
    date: [{ required: true, validator: validateDate, trigger: 'change' }],
    weight: [
      { required: true, validator: validateWeight, trigger: 'change' },
    ],
    training: [
      { required: true, validator: validateTrain, trigger: 'change' },
    ],
    sportTime: [
      { required: true, validator: validateSportTime, trigger: 'change' },
    ],
    caloric: [
      { required: true, validator: validateCaloric, trigger: 'change' },
    ],
  }

  const trainingType = [
    { value: '胸' },
    { value: '核心' },
    { value: '燃脂' },
    { value: '手臂' },
    { value: '腿' },
    { value: '肩' },
    { value: '背' },
    { value: 'HIIT' },
  ]

  const submitLoading = ref(false)
  // 重新请求
  const homePageStore = useHomePageStore()
  const getData = () => homePageStore.getGlobalData()
  const resetForm = () => formRef.value.resetFields()

  const onFinish = (values: anyKey) => {
    submitLoading.value = true
    // 处理日期数据
    const formObj = {
      ...values,
      date: new Date(values.date).getTime() / 1000,
      uid: useStorage().getItem(USERINFO_KEY)?.uid || '',
    }

    // 发送请求
    addweight(formObj).then(async (res: any) => {
      if (res.code === 200) {
        await getData()
        message.success({ content: res.msg, duration: 2 })
        submitLoading.value = false
        setTimeout(() => resetForm(), 100)
      }
      else {
        message.error({ content: res.msg, duration: 2 })
        submitLoading.value = false
      }
    })
  }

  const onFinishFailed = () => {
    submitLoading.value = true
    setTimeout(() => submitLoading.value = false, 1000)
  }

  return {
    formRef,
    form,
    rules,
    trainingType,
    onFinish,
    onFinishFailed,
    resetForm,
    locale,
    submitLoading,
  }
}
