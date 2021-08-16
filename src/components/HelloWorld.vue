<template>
  <div class="header">
    <el-button type="primary" @click="changeTheme()">切换主题</el-button>
  </div>

  <div class="table-wrap">
    <ele-table :table-data="tableData" :column-data="columnData"></ele-table>
  </div>

  <div class="theme-test">{{ msg }}</div>

  <div class="status-list">
    <div
      v-for="item in statusList"
      class="table-status"
      :class="item.class"
      :key="item.class"
    >
      <span class="circle"></span>
      <span>{{ item.label }}</span>
    </div>
  </div>

  <div class="tag-list">
    <div
      class="tag"
      :class="tag.class + '-tag'"
      v-for="tag in tagList"
      :key="tag.class"
    >
      {{ tag.label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineProps } from 'vue'
import EleTable from './EleTable.vue'

const props = defineProps({
  msg: {
    type: String,
  },
})

const tableData = reactive([
  {
    name: 'zs',
    age: 19,
  },
  {
    name: 'ls',
    age: 18,
  },
])

const columnData = reactive([
  {
    prop: 'name',
    label: '姓名',
    minWidth: '200px',
  },
  {
    prop: 'age',
    label: '性别',
    minWidth: '200px',
  },
  {
    prop: 'name',
    label: '姓名',
    minWidth: '200px',
  },
  {
    prop: 'age',
    label: '性别',
    minWidth: '200px',
  },
  {
    prop: 'name',
    label: '姓名',
    minWidth: '200px',
  },
  {
    prop: 'age',
    label: '性别',
    minWidth: '200px',
  },
  {
    prop: 'name',
    label: '姓名',
  },
  {
    prop: 'age',
    label: '性别',
  },
  {
    prop: 'name',
    label: '姓名',
  },
  {
    prop: 'age',
    label: '性别',
  },
])

const changeTheme = () => {
  const ele = window.document.documentElement
  const currentTheme = ele.getAttribute('data-theme')
  currentTheme === 'light'
    ? ele.setAttribute('data-theme', 'dark')
    : ele.setAttribute('data-theme', 'light')
}

const statusList = [
  {
    label: '待支付',
    class: 'pay-wait',
  },
  {
    label: '待分诊',
    class: 'triage-wait',
  },
  {
    label: '分诊中',
    class: 'triage-process',
  },
  {
    label: '待咨询',
    class: 'consult-wait',
  },
  {
    label: '咨询中',
    class: 'consult-process',
  },
  {
    label: '待复核',
    class: 'check-wait',
  },
  {
    label: '复核中',
    class: 'check-process',
  },
  {
    label: '待确认',
    class: 'confirm-wait',
  },
  {
    label: '已完成',
    class: 'complete',
  },
  {
    label: '已取消',
    class: 'cancel',
  },
  {
    label: '已关闭',
    class: 'close',
  },
  {
    label: '待规划',
    class: 'operator-wait',
  },
  {
    label: '规划中',
    class: 'operator-process',
  },
  {
    label: '处理',
    class: 'handle',
  },
]

const tagList = [
  {
    label: '门诊',
    class: 'outpatient',
  },
  {
    label: '住院',
    class: 'hospital',
  },
  {
    label: '急诊',
    class: 'emergency',
  },
  {
    label: 'CT',
    class: 'modality',
  },
]

// export default defineComponent({
//   name: 'HelloWorld',
//   components: {
//     EleTable,
//   },
//   props: {
//     msg: {
//       type: String,
//       required: true,
//     },
//   },
//   setup: () => {
//     const count = ref(0)

//     const tableData = reactive([
//       {
//         name: 'zs',
//         age: 19,
//       },
//       {
//         name: 'ls',
//         age: 18,
//       },
//     ])

//     const columnData = reactive([
//       {
//         prop: 'name',
//         label: '姓名',
//       },
//       {
//         prop: 'age',
//         label: '性别',
//       },
//     ])

//     const changeTheme = () => {
//       const ele = window.document.documentElement
//       const currentTheme = ele.getAttribute('data-theme')
//       currentTheme === 'light'
//         ? ele.setAttribute('data-theme', 'dark')
//         : ele.setAttribute('data-theme', 'light')
//     }

//     return { count, tableData, columnData, changeTheme }
//   },
// })
</script>

<style lang="scss" coped>
// @import '@/theme/var.scss';
@import '@/theme/base.scss';

.header {
  padding-right: 10px;
  height: 60px;
  line-height: 60px;
  text-align: right;
  background: var(--background-color-base);
  border-radius: 6px;
}

.table-wrap {
  margin-top: 10px;
  padding: 10px;
  background: var(--background-color-base);
  border-radius: 6px;
}

.theme-test {
  height: 40px;
  line-height: 40px;
  @include font-color('color1');
}

.status-list {
  display: inline-flex;
  color: var(--table-color);
  .table-status {
    margin: 0 5px;
  }
}

.tag-list {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    margin: 0 5px;
  }
}
</style>
