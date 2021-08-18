<template>
  <div class="check-methods">
    <span class="tag modality-tag">{{ info.modality }}</span>
    <span>{{ info.scan }}</span>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
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

<style lang="scss" scoped>
.check-methods {
  display: inline-flex;
  align-items: center;
  .tag {
    margin-right: 8px;
  }
}
</style>
