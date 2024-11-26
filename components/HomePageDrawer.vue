<script setup lang="ts">
import { addTrainingType, delTrainingType, getTrainingType, updateTrainingType } from '~/api'

const {
  rules,
  onFinish,
  onFinishFailed,
  resetForm,
  locale,
  form,
  formRef,
  submitLoading,
} = useForm()

const uid = ref((useStorage().getItem(USERINFO_KEY) as anyKey)?.uid)
const isVisible = ref(true)
function onDrawerClose() {
  resetForm()
}

const activeKey = ref('1')

const trainingType = ref<anyKey[]>([])
const editTrainingType = ref('')

fetchTrainingType()
async function fetchTrainingType() {
  trainingType.value = await getTrainingType(uid.value) as anyKey[] || []
}

async function onSelectBlur() {
  const set1 = new Set(form.training)
  const set2 = new Set(trainingType.value.map(i => i.value))
  const newItem = set1.difference(set2)
  if (newItem.size) {
    const value = [...newItem][0]
    // 调用新增接口
    await addTrainingType({ value, uid: uid.value }) as anyKey
    fetchTrainingType()
  }
}

const open = ref(false)
function onTypeEdit() {
  open.value = true
}

const columns: any = [
  {
    title: '类型',
    dataIndex: 'title',
    align: 'center',
    key: 'title',
  },
  {
    title: '操作',
    align: 'center',
    key: 'action',
    fixed: 'right',
    width: 200,
  },
]

const tableData = ref<anyKey[]>([])

watch(trainingType, (val: anyKey[]) => {
  tableData.value = val.map(({ value: title, id }: anyKey, idx: number) => {
    return {
      idx,
      isDetail: true,
      title,
      id,
    }
  })
})

function _resetFormState() {
  editTrainingType.value = ''
  tableData.value.forEach((item: anyKey) => {
    item.isDetail = true
  })
}

function onModalCancel() {
  _resetFormState()
}

/**
 * 训练类型修改点击事件
 */
function onTypeEditClick(idx: number) {
  tableData.value.forEach((item: anyKey) => {
    if (item.idx === idx) {
      item.isDetail = !item.isDetail
      editTrainingType.value = item.title
    }
  })
}

/**
 * 训练类型删除操作
 */
async function onDelConfirm(id: number, type: string) {
  const params = {
    id,
    type,
    uid: uid.value,
  }
  const res = await delTrainingType(params) as anyKey
  if (res.code === 200) {
    message.success({ content: res.msg, duration: 3 })
    await fetchTrainingType()
    form.training = []
    formRef.value.clearValidate('training')
  }
  else {
    message.error({ content: res.msg, duration: 3 })
  }
}

function onTypeEditCancel(idx: number) {
  tableData.value.forEach((item: anyKey) => {
    if (item.idx === idx) {
      item.isDetail = true
    }
  })
}

/**
 * 训练类型新修改操作
 */
async function onTypeSaveConfirm(id: number, value: string) {
  const newVal = editTrainingType.value
  if (newVal === value) {
    _resetFormState()
    return
  }
  const params = {
    value: newVal,
    id,
    uid: uid.value,
  }
  const res = await updateTrainingType(params)
  if (res.code === 200) {
    message.success({ content: res.msg, duration: 3 })
    await fetchTrainingType()
    _resetFormState()
    form.training = []
    formRef.value.clearValidate('training')
  }
  else {
    message.error({ content: '操作失败，请重试', duration: 3 })
  }
}
</script>

<template>
  <!-- button to open the drawer -->
  <button
    fixed left-0 top="[calc(50%-5rem)]" z-1 h35 w4 flex="~ start content-start items-center" rounded-l-0
    rounded-r-5 bg="#27b2f3" color-white shadow-blue outline-none transition-all hover="w-6" @click="isVisible = true"
  >
    <span i-carbon-chevron-right />
  </button>

  <a-drawer
    v-model:open="isVisible" destroy-on-close title="记录 · 查询" width="720" :closable="false" placement="left"
    :header-style="{ height: '40px' }" :footer-style="{ textAlign: 'right', padding: '8px' }"
    :body-style="{ padding: '5px 10px', marginBottom: '49px' }" @close="onDrawerClose"
  >
    <div h-auto w-full>
      <a-tabs v-model:active-key="activeKey">
        <a-tab-pane key="1" tab="新增记录">
          <!-- 表单区域 -->
          <a-form
            ref="formRef" :model="form" :rules="(rules as any)" layout="vertical" autocomplete="off"
            @finish="onFinish" @finish-failed="onFinishFailed"
          >
            <a-row :gutter="16">
              <!-- 日期选择 -->
              <a-col :span="12">
                <a-form-item has-feedback label="日期:" name="date">
                  <a-date-picker
                    v-model:value="form.date" :locale="locale" style="width: 100%" placeholder="选择日期"
                    value-format="YYYY-MM-DD" :get-popup-container="(trigger) => trigger.parentElement as any
                    "
                  />
                </a-form-item>
              </a-col>
              <!-- 体重 -->
              <a-col :span="12">
                <a-form-item has-feedback label="体重(kg):" name="weight">
                  <a-input v-model:value.trim="form.weight" placeholder="输入体重" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <!-- 训练类型 -->
              <a-col :span="12">
                <a-form-item has-feedback label="训练类型:" name="training" class="custon_row">
                  <a-select
                    v-model:value="form.training"
                    mode="tags" placeholder="选择训练类型" :options="trainingType"
                    @blur="onSelectBlur"
                  />
                  <a-button @click="onTypeEdit">
                    编辑
                  </a-button>
                </a-form-item>
              </a-col>
              <!-- 运动时长 -->
              <a-col :span="12">
                <a-form-item has-feedback label="运送时长(min):" name="sportTime">
                  <a-input v-model:value.number.trim="form.sportTime" placeholder="输入运动时长" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <!-- 热量 -->
              <a-col :span="12">
                <a-form-item has-feedback label="热量(kcal)：" name="caloric">
                  <a-input v-model:value.number.trim="form.caloric" placeholder="输入热量" />
                </a-form-item>
              </a-col>
            </a-row>
            <!-- button groups -->
            <div fixed bottom-0 left-0 z-1 w="720px" bg-white b-t="1 solid #e9e9e9" px-2 py-3 text-right>
              <a-button mr-2 @click="resetForm">
                重置
              </a-button>
              <a-button html-type="submit" type="primary" ghost :loading="submitLoading">
                提交
              </a-button>
            </div>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" tab="新建训练计划" force-render />
        <a-tab-pane key="3" tab="表格" force-render>
          <!-- 表格区域 -->
          <div w-full>
            <base-table />
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-drawer>

  <a-modal v-model:open="open" title="训练类型维护" :footer="null" @cancel="onModalCancel">
    <a-table :columns="columns" :data-source="tableData" size="small" :pagination="false">
      <template #bodyCell="{ column, record: { isDetail, title, idx, id } }">
        <template
          v-if="column.key === 'title'"
        >
          <div>
            <a-input
              v-if="!isDetail"
              v-model:value="editTrainingType"
              style="margin: -5px 0;width: 50%;"
            />
            <template v-else>
              {{ title }}
            </template>
          </div>
        </template>
        <template v-if="column.key === 'action'">
          <a-button v-if="isDetail" type="link" size="small" @click="onTypeEditClick(idx)">
            修改
          </a-button>
          <template v-else>
            <a-popconfirm
              title="确认保存?"
              handle-cancel-text="取消"
              ok-text="确认"
              @confirm="onTypeSaveConfirm(id, title)"
            >
              <a-button type="link" size="small">
                保存
              </a-button>
            </a-popconfirm>
            <a-button type="link" size="small" @click="onTypeEditCancel(idx)">
              取消
            </a-button>
          </template>
          <a-popconfirm
            :title="`是否删除训练类型[${title}]`"
            ok-text="是"
            cancel-text="否"
            @confirm="onDelConfirm(id, title)"
          >
            <a-button type="link" size="small">
              删除
            </a-button>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </a-modal>
</template>

<style lang="scss" scoped>
.custon_row {
  :deep(.ant-form-item-control) {
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: space-between;
    }
    .ant-select {
      width: 80%;
    }
  }
}
</style>
