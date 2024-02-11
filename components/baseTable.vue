<script setup>
import { SearchOutlined } from '@ant-design/icons-vue'

const {
  totalCount,
  currentPageNum,
  data,
  searchInput,
  columns,
  searchText,
  searchedColumn,
  editableData,
  handleSearch,
  handleReset,
  handleDelete,
  hanleEdit,
  handleSave,
  handleCancel,
  getTagColor,
  loading,
} = useTable()
</script>

<template>
  <!-- 表格 -->
  <a-table
    class="ant-table-striped"
    bordered
    :pagination="false"
    :data-source="data"
    :columns="columns"
    :scroll="{ x: 900, y: 300 }"
    size="middle"
    :loading="loading"
    :row-class-name="
      (_record, index) => (index % 2 === 1 ? 'table-striped' : null)
    "
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'date'">
        <span style="color: #1890ff">日期</span>
      </template>
    </template>
    <template
      #customFilterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column,
      }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          placeholder="搜索日期"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="
            (e) =>
              setSelectedKeys(
                e.target.value ? [e.target.value] : [],
              )
          "
          @press-enter="
            handleSearch(selectedKeys, confirm, column.dataIndex)
          "
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="
            handleSearch(selectedKeys, confirm, column.dataIndex)
          "
        >
          <template #icon>
            <SearchOutlined />
          </template>
          搜索
        </a-button>
        <a-button
          size="small"
          style="width: 90px"
          @click="handleReset(clearFilters, confirm)"
        >
          重置
        </a-button>
      </div>
    </template>
    <template #customFilterIcon="{ filtered }">
      <SearchOutlined
        :style="{ color: filtered ? '#108ee9' : undefined }"
      />
    </template>
    <template #bodyCell="{ text, column, record }">
      <span v-if="searchText && searchedColumn === column.dataIndex">
        <template
          v-for="(fragment, i) in text
            .toString()
            .split(
              new RegExp(
                `(?<=${searchText})|(?=${searchText})`,
                'i',
              ),
            )"
        >
          <mark
            v-if="
              fragment.toLowerCase() === searchText.toLowerCase()
            "
            :key="i"
            class="highlight"
          >
            {{ fragment }}
          </mark>
          <template v-else>{{ fragment }}</template>
        </template>
      </span>
      <template
        v-if="
          ['weight', 'caloric', 'trainingTime'].includes(
            column.dataIndex,
          )
        "
      >
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value.number="
              editableData[record.key][column.dataIndex]
            "
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.key === 'trainingType'">
        <span>
          <a-tag
            v-for="tag in record.trainingType"
            :key="tag"
            :color="getTagColor(tag)"
          >
            {{ tag }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'operation'">
        <div
          :style="{
            display: 'flex',
            width: '190px',
            justifyContent: 'space-around',
          }"
        >
          <a-popconfirm
            v-if="data.length"
            title="确认删除?"
            handle-cancel-text="取消"
            ok-text="确认"
            @confirm="handleDelete(record.date)"
          >
            <a>删除</a>
          </a-popconfirm>
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <a-popconfirm
                title="确认保存?"
                handle-cancel-text="取消"
                ok-text="确认"
                @confirm="handleSave(record, record.key)"
              >
                <a>保存</a>
              </a-popconfirm>
              <a @click="handleCancel(record.key)">取消</a>
            </span>
            <span v-else>
              <a @click="hanleEdit(record.key)">编辑</a>
            </span>
          </div>
        </div>
      </template>
    </template>
  </a-table>
  <!-- 分页器 -->
  <div>
    <a-pagination
      v-model:current="currentPageNum"
      :total="totalCount"
      :show-size-changer="false"
      show-less-items
    />
  </div>
</template>

<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}

.editable-row-operations a {
  margin-right: 8px;
}
</style>
