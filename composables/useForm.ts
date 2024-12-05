import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import { addSquatCount } from '~/api'

export function useForm() {
  const formRef = ref()
  const form = reactive<anyKey>({
    date: null,
    weight: '',
    training: [],
    sportTime: '',
    caloric: '',
    squatCount: '', // 深蹲次数
  })

  // #region validater
  const validateDate = async (rules: anyKey, value: string | null) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value) {
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('请选择日期！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }

  const validateWeight = async (rule: anyKey, value: string | number | null) => {
    let checkPending
    if (!value) {
      clearTimeout(checkPending)
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('体重不能为空！'), 500)
      })
    }
    else if (Number.isNaN(+value)) {
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('请输入数字！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }

  const validateTrain = async (rule: anyKey, value: string | null) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value?.length) {
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('请选择训练类型！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }

  const validateSportTime = async (rule: anyKey, value: string | number | null) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value) {
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('运动时长不能为空！'), 500)
      })
    }
    else if (typeof value !== 'number') {
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('请输入数字！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }

  const validateCaloric = async (rule: anyKey, value: string | number | null) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value) {
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('热量不能为空！'), 500)
      })
    }
    else if (typeof value !== 'number') {
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('请输入数字！'), 500)
      })
    }
    else {
      return new Promise((resolve) => {
        checkPending = setTimeout(() => resolve('OK'), 500)
      })
    }
  }
  const validateSquatCount = async (rule: anyKey, value: string | number | null) => {
    let checkPending
    clearTimeout(checkPending)
    if (!value) {
      return new Promise((resolve, reject) => {
        checkPending = setTimeout(() => reject('请输入数字！'), 500)
      })
    }
    else if (typeof value !== 'number') {
      return new Promise((resolve, reject) => {
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
    squatCount: [
      { required: true, validator: validateSquatCount, trigger: 'change' },
    ],

  }

  const submitLoading = ref(false)
  const resetForm = () => formRef.value.resetFields()
  const onFinish = () => {
    submitLoading.value = true
    formRef.value.validateFields(['date', 'weight', 'training', 'sportTime', 'caloric']).then(() => {
      // 处理日期数据
      const formObj = {
        ...toRaw(form),
        date: new Date(form.date).getTime() / 1000,
        uid: (useStorage().getItem(USERINFO_KEY) as anyKey)?.uid || '',
      }
      // 发送请求
      addweight(formObj).then(async (res: anyKey) => {
        if (res.code === 200) {
          await fetchTotal().refreshTotal()
          await refreshNuxtData(CHART_DATA_FETCH_KEY)
          message.success({ content: res.msg, duration: 2 })
          setTimeout(() => resetForm(), 100)
        }
        else {
          message.error({ content: res.msg, duration: 2 })
        }
      })
    }).finally(() => submitLoading.value = false)
  }

  const onFinishFailed = () => {
    submitLoading.value = true
    setTimeout(() => submitLoading.value = false, 1000)
  }

  const addSquatLoading = ref(false)
  /**
   * 添加深蹲次数
   */
  function onSquatCountAdd() {
    addSquatLoading.value = true
    formRef.value.validateFields(['squatCount'])
      .then(async () => {
        const params = {
          uid: (useStorage().getItem(USERINFO_KEY) as anyKey)?.uid || '',
          year: useState('year').value,
          value: form.squatCount,
        }
        const res = await addSquatCount(params) as anyKey
        if (res.code === 200) {
          message.success({ content: res.msg, duration: 2 })
          await fetchSquatTotal().getValue()
          setTimeout(() => resetForm(), 100)
        }
        else {
          message.error({ content: res.msg, duration: 3 })
        }
      })
      .finally(() => addSquatLoading.value = false)
  }

  return {
    formRef,
    form,
    rules,
    onFinish,
    onFinishFailed,
    resetForm,
    locale,
    submitLoading,
    addSquatLoading,
    onSquatCountAdd,
  }
}
