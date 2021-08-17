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
      <div v-else><i class="el-icon-search" />&nbsp;&nbsp;没有数据</div>
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
        :fixed="operatorFixed ? 'right' : false"
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
import { PropType, CSSProperties, ref } from 'vue'

defineProps({
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
</script>


