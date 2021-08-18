<template>
  <div class="table-status" :class="info.statusCode && CodeMaps[info.statusCode].class">
    <span class="circle"></span>
    <span>{{ info.status }}</span>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { CodeMaps } from '../configs/CodeMap'
interface BaseObj {
  [key: string]: any
}

defineProps({
  info: {
    type: Object as PropType<BaseObj>,
    required: true
  }
})
</script>

