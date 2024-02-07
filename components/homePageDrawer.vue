<script setup>
const {
  rules,
  trainingType,
  onFinish,
  onFinishFailed,
  resetForm,
  locale,
  form,
  formRef,
  submitLoading,
} = useForm()

const visible = ref(false)
</script>

<template>
  <!-- button to open the drawer -->
  <div class="home_aside">
    <button class="showDrawnBtn" @click="visible = true">
      >
    </button>
  </div>
  <div>
    <a-drawer
      v-model:open="visible"
      title="请输入内容"
      width="720"
      :closable="false"
      placement="left"
      :header-style="{ height: '40px' }"
      :footer-style="{ textAlign: 'right', padding: '8px' }"
      :body-style="{ padding: '5px 10px', marginBottom: '49px' }"
    >
      <div class="main_area">
        <!-- 表单区域 -->
        <a-form
          ref="formRef"
          :model="form"
          :rules="rules"
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
                    (trigger) => trigger.parentElement
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
                  mode="multiple"
                  placeholder="选择训练类型"
                  :options="trainingType"
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
          <!-- 底部按钮控件 -->
          <div class="drawer_bottom">
            <a-button style="margin-right: 8px" @click="resetForm">
              重置
            </a-button>
            <a-button
              type="primary"
              html-type="submit"
              :loading="submitLoading"
            >
              提交
            </a-button>
          </div>
        </a-form>
        <!-- 表格区域 -->
        <div class="table_area">
          <!-- <Table /> -->
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<style scoped lang="scss">
.home_aside {
  position: fixed;
  z-index: 1;
  left: 0;
  top: calc(50% - 75px);
  height: 150px;
  width: 76px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .showDrawnBtn {
    cursor: pointer;
    display: block;
    width: 20px;
    height: 150px;
    overflow: hidden;
    outline: none;
    border: 1px solid #27b2f3;
    border-radius: 0 15px 15px 0;
    box-shadow: 2px 0 10px 0 #27b2f3;
    text-align: center;
    padding: 0;
    background-color: #27b2f3;
    color: white;
    transition: all 0.3s ease;
  }

  .showDrawnBtn:hover {
    width: 25px;
    transition: all 0.3s ease;
  }
}
.drawer_bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 720px;
  border-top: 1px solid #e9e9e9;
  padding: 8px 16px;
  background: #fff;
  text-align: right;
  z-index: 1;
}

.main_area {
  width: 100%;
  height: auto;
  // display: flex;
  // flex-direction: column;

  .table_area {
    width: 100%;
  }
}
</style>
