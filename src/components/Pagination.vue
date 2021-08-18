<template>
  <el-pagination :layout="layout" :class="className" :page-size="pageSize" />
</template>

<script lang="ts" setup>
defineProps({
  className: {
    type: String,
    default: 'page-block'
  },
  pageSize: {
    type: Number,
    default: 30
  },
  layout: {
    type: String,
    default: 'total, prev, pager, next'
  }
});
</script>


