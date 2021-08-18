<template>
  <div class="info-wrap">
    <div class="info-tr">
      <span class="info-td name">{{ info.patName }}</span>
      <span v-if="info.patSourceCode" class="info-td">
        <span class="tag" :class="PatSource[info.patSourceCode].class + '-tag'">
          {{
            info.patSource
          }}
        </span>
      </span>
      <span v-if="info.patFlagEd" class="info-td">
        <span class="tag emergency-tag">急诊</span>
      </span>
      <span v-if="infoType === 'followUp'">检查日期:{{ info.studyTime }}</span>
    </div>
    <div class="info-tr">
      <div class="info-td">
        <span>性别：</span>
        <span>{{ info.sex }}</span>
      </div>
      <div class="info-td">
        <span>年龄：</span>
        <span>{{ info.patAge }} {{ info.patAgeUnit }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { patSource } from '../configs/CodeMap'

const PatSource: any = patSource

console.log(PatSource)

defineProps({
  info: {
    type: Object,
    default: () => { }
  },
  infoType: {
    type: String,
    default: ''
  }
})

</script>



<style lang="scss" scoped>
.info {
  &-tr {
    display: flex;
    align-items: center;
    font-size: var(--font-size-small);
  }

  &-td {
    margin-right: 8px;
  }

  .name {
    font-size: var(--font-size-base);
  }
}
</style>
