<template>
  <el-table
    ref="table"
    :data="tableData"
    :border="border"
    :stripe="stripe"
    :tooltip-effect="tooltipEffect"
    :style="styleObj"
    :highlight-current-row="highlight"
    class="ym-table"
  >
    <template #empty>
      <div v-if="setEmpty">
        <slot name="setEmpty" />
      </div>
      <div v-else>
        <i class="el-icon-search" />&nbsp;&nbsp;没有数据
      </div>
    </template>
    <slot>
      <el-table-column v-if="selectShow" type="selection" width="55" />
      <el-table-column
        v-for="item in columnData"
        :key="item.prop"
        :sortable="item.sortable"
        :type="item.type"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :min-width="item.minWidth"
        :formatter="item.formatter"
        :fixed="item.fixed"
        :align="item.align"
        :show-overflow-tooltip="!item.hiddenOverflowTooltip"
      >
        <template #default="scope">
          <slot
            v-if="item.slotname"
            :name="item.slotname"
            :row="scope.row"
            :item="scope.row[item.prop]"
          />
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="operatorShow"
        :fixed="isFixed ? 'right' : false"
        label="操作"
        :width="operatorWidth"
      >
        <template #default="scope">
          <slot name="operator" :row="scope.row" :index="scope.$index" />
        </template>
      </el-table-column>
    </slot>
  </el-table>
</template>

<script lang="ts" setup>
import { PropType, CSSProperties, ref, onMounted, onUnmounted, nextTick } from 'vue'

interface BaseObj {
  [key: string]: any
}

const props = defineProps({
  tableData: {
    type: Array as PropType<BaseObj[]>,
    default: () => [],
  },
  columnData: {
    type: Array as PropType<BaseObj[]>,
    default: () => [],
  },
  border: {
    type: Boolean,
    default: false,
  },
  stripe: {
    type: Boolean,
    default: true,
  },
  tooltipEffect: {
    type: String as PropType<'dark' | 'light'>,
    default: 'dark',
    validator: (val: string) => {
      return ['dark', 'light'].includes(val)
    },
  },
  styleObj: {
    type: Object as PropType<CSSProperties>,
    default: () => {
      return { width: '100%' }
    },
  },
  highlight: {
    type: Boolean,
    default: true,
  },
  operatorWidth: {
    default: '140',
    type: String,
  },
  autoFixed: {
    type: Boolean,
    default: true,
  },
  operatorFixed: {
    type: Boolean,
    default: false,
  },
  operatorShow: {
    type: Boolean,
    default: true,
  },
  selectShow: {
    type: Boolean,
    default: false,
  },
  setEmpty: {
    type: Boolean,
    default: false,
  },
});

const table = ref(null)

const isFixed = ref(false)

const setFixed = async () => {
  if (props.autoFixed) {
    await nextTick(() => {
      const val = table.value as any
      const tableEle = val.$el
      const width = tableEle.offsetWidth
      const tableBodyEle = tableEle.querySelector('.el-table__body-wrapper .el-table__body')
      const subWidth = parseInt(tableBodyEle.style.width)
      console.log('t', width, tableBodyEle, tableBodyEle.style.width, subWidth)
      if (subWidth > width + 17) {
        isFixed.value = true
      } else {
        isFixed.value = false
      }
    })
  } else {
    isFixed.value = props.operatorFixed
  }
  console.log(2, props, isFixed.value)
}

const _resizeHandle = () => {
  setFixed()
}

onMounted(() => {
  setFixed()
  window.addEventListener('resize', _resizeHandle)
})

onUnmounted(() => {
  window.removeEventListener('resize', _resizeHandle)
})
</script>


