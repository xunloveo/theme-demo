<template>
  <div class="header">
    <span class="theme-test">{{ msg }}</span>
    <el-button type="primary" @click="changeTheme()">切换主题</el-button>
  </div>

  <div class="status-list">
    <div v-for="item in statusList" class="table-status" :class="item.class" :key="item.class">
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
    >{{ tag.label }}</div>
  </div>

  <div class="table-wrap">
    <div class="tip">表格数据过多时操作固定在右侧，窗口大小改变也会相应变化，当将autoFixed设置为false时，此时根据你设置的operatorFixed为准</div>
    <ele-table :table-data="tableData" :column-data="columnData" @row-click="rowClick">
      <template #info="{ row }">
        <user-info-column :info="row" />
      </template>
      <template #status="{ row }">
        <status :info="{ statusCode: row.statusCode, status: row.status }" />
      </template>
      <template #methods="{ row }">
        <check-methods :info="{ modality: row.modality, scan: row.scan }" />
      </template>
      <template #operator="{ row }">
        <el-button type="text" size="small" @click="look(row)">查看</el-button>
        <el-button type="text" size="small" @click="edit(row)">编辑</el-button>
      </template>
    </ele-table>

    <div class="block"></div>

    <ele-table :table-data="tableData" :column-data="columnData1">
      <template #info="{ row }">
        <user-info-column :info="row" />
      </template>
      <template #status="{ row }">
        <status :info="{ statusCode: row.statusCode, status: row.status }" />
      </template>
      <template #methods="{ row }">
        <check-methods :info="{ modality: row.modality, scan: row.scan }" />
      </template>
    </ele-table>

    <pagination :total="40" @current-change="handleCurrentChange" />

    <pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="currentPage"
      :page-size="100"
      layout="total, prev, pager, next,sizes"
      :page-sizes="[100, 200, 300, 400]"
      :total="1000"
    ></pagination>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import EleTable from './EleTable.vue'
import UserInfoColumn from './UserInfoColumn.vue'
import CheckMethods from './CheckMethods.vue'
import Status from './Status.vue'
import Pagination from './Pagination.vue'

defineProps({
  msg: {
    type: String,
  },
})

const currentPage = ref(5)

const handleSizeChange = (val: number) => {
  console.log(`每页 ${val} 条`);
};


const tableData = reactive([
  {
    patName: 'ZhangSan',
    patSourceCode: '103201',
    patSource: '住院',
    patFlagEd: true,
    sex: '男',
    patAge: 19,
    patAgeUnit: '岁',
    modality: 'CT',
    scan: '平扫+增强',
    statusCode: '103104',
    status: '待咨询',
  },
  {
    patName: 'LiSi',
    patSourceCode: '103202',
    patSource: '门诊',
    patFlagEd: false,
    sex: '女',
    patAge: 49,
    patAgeUnit: '岁',
    modality: 'DR',
    scan: '平扫+增强',
    statusCode: '待规划',
    status: '待规划',
  },
])

const columnData = reactive([
  {
    prop: 'name',
    label: '患者',
    minWidth: '800',
    slotname: 'info'
  },
  {
    prop: 'status',
    label: '状态',
    minWidth: '200',
    slotname: 'status'
  },
  {
    prop: 'scan',
    label: '检查方法',
    minWidth: '200',
    slotname: 'methods'
  },
  {
    prop: 'sex',
    label: '性别',
    minWidth: '200',
  },
  // {
  //   prop: 'sex',
  //   label: '性别',
  //   minWidth: '200px',
  // }, 
  // {
  //   prop: 'sex',
  //   label: '性别',
  //   minWidth: '200px',
  // },  
  // {
  //   prop: 'sex',
  //   label: '性别',
  //   minWidth: '200px',
  // }, 
])

const columnData1 = reactive([
  {
    prop: 'name',
    label: '患者',
    minWidth: '200',
    slotname: 'info'
  },
  {
    prop: 'status',
    label: '状态',
    minWidth: '200',
    slotname: 'status'
  },
  {
    prop: 'scan',
    label: '检查方法',
    minWidth: '200',
    slotname: 'methods'
  },
  {
    prop: 'sex',
    label: '性别',
    minWidth: '200',
  },
  // {
  //   prop: 'sex',
  //   label: '性别',
  //   minWidth: '200px',
  // }, 
  // {
  //   prop: 'sex',
  //   label: '性别',
  //   minWidth: '200px',
  // },  
  // {
  //   prop: 'sex',
  //   label: '性别',
  //   minWidth: '200px',
  // }, 
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
    label: '体检',
    class: 'examination',
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


const rowClick = (row: Object) => {
  console.log('rowClick:', row)
}

const look = (row: Object) => {
  console.log('look:', row)
}

const edit = (row: Object) => {
  console.log('edit:', row)
}

const handleCurrentChange = (val: number) => {
  console.log('current-change:当前页-', val)
}

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
@import "@/theme/base.scss";

.tip {
  height: 40px;
  line-height: 40px;
  color: var(--color-green-light);
}
.block {
  height: 20px;
}

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
  margin-right: 20px;
  line-height: 40px;

  @include font-color("color1");
}

.status-list {
  display: inline-flex;
  height: 40px;
  line-height: 40px;
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
