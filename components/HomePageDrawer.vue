<script setup lang="ts">
import { getTrainingType } from '~/api'

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



const isVisible = ref(true)
function onDrawerClose() {
  resetForm()
}

const activeKey = ref('1')

const trainingType = await getTrainingType() as anyKey[] || []
function onSelectBlur() {
  const set1 = new Set(form.training)
  const set2 = new Set(trainingType.map(i => i.value))
  let newItem = set1.difference(set2)
  if (newItem.size) {
    newItem = [...newItem] as never
    // 调用新增接口
    console.log('新增类型 :>>> ', newItem)
  }
}
</script>

<template>
  <!-- button to open the drawer -->
  <button
    fixed
    left-0
    top="[calc(50%-5rem)]"
    z-1
    h35
    w4
    flex="~ start content-start items-center"
    rounded-l-0
    rounded-r-5
    bg="#27b2f3"
    color-white
    shadow-blue
    outline-none
    transition-all
    hover="w-6"
    @click="isVisible = true"
  >
    <span i-carbon-chevron-right />
  </button>

  <a-drawer
    v-model:open="isVisible"
    destroy-on-close
    title="记录 · 查询"
    width="720"
    :closable="false"
    placement="left"
    :header-style="{ height: '40px' }"
    :footer-style="{ textAlign: 'right', padding: '8px' }"
    :body-style="{ padding: '5px 10px', marginBottom: '49px' }"
    @close="onDrawerClose"
  >
    <div h-auto w-full>
      <a-tabs v-model:active-key="activeKey">
        <a-tab-pane key="1" tab="新增记录">
          <!-- 表单区域 -->
          <a-form
            ref="formRef"
            :model="form"
            :rules="(rules as any)"
            layout="vertical"
            autocomplete="off"
            @finish="onFinish"
            @finish-failed="onFinishFailed"
          >
            <a-row :gutter="16">
              <!-- 日期选择 -->
              <a-col :span="12">
                <a-form-item has-feedback label="日期:" name="date">
                  <a-date-picker
                    v-model:value="form.date"
                    :locale="locale"
                    style="width: 100%"
                    placeholder="选择日期"
                    value-format="YYYY-MM-DD"
                    :get-popup-container="
                      (trigger) => trigger.parentElement as any
                    "
                  />
                </a-form-item>
              </a-col>
              <!-- 体重 -->
              <a-col :span="12">
                <a-form-item
                  has-feedback
                  label="体重(kg):"
                  name="weight"
                >
                  <a-input
                    v-model:value.trim="form.weight"
                    placeholder="输入体重"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <!-- 训练类型 -->
              <a-col :span="12">
                <a-form-item
                  has-feedback
                  label="训练类型:"
                  name="training"
                >
                  <a-select
                    v-model:value="form.training"
                    mode="tags"
                    placeholder="选择训练类型"
                    :options="trainingType"
                    @blur="onSelectBlur"
                  />
                </a-form-item>
              </a-col>
              <!-- 运动时长 -->
              <a-col :span="12">
                <a-form-item
                  has-feedback
                  label="运送时长(min):"
                  name="sportTime"
                >
                  <a-input
                    v-model:value.number.trim="form.sportTime"
                    placeholder="输入运动时长"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <!-- 热量 -->
              <a-col :span="12">
                <a-form-item
                  has-feedback
                  label="热量(kcal)："
                  name="caloric"
                >
                  <a-input
                    v-model:value.number.trim="form.caloric"
                    placeholder="输入热量"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <!-- button groups -->
            <div
              fixed
              bottom-0
              left-0
              z-1
              w="720px"
              bg-white
              b-t="1 solid #e9e9e9"
              px-2
              py-3
              text-right
            >
              <a-button mr-2 @click="resetForm">
                重置
              </a-button>
              <a-button
                html-type="submit"
                type="primary"
                ghost
                :loading="submitLoading"
              >
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
</template>
