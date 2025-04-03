<!-- ChildComponent.vue -->
<script setup>
import { ref,onMounted, useSlots } from 'vue'
import { createSlotHOC } from './slothoc'

const defaultRef = ref(null)
const slots = useSlots()
const SlotHOC = createSlotHOC(slots)

onMounted(() => {
  console.log('子组件挂载:', slots.default?.()?.[0]?.el ||  defaultRef.value || '无插槽内容')
})
</script>

<template>
  <div class="container">
    <SlotHOC v-if="slots.default" />
    
    <!-- 默认内容 -->
    <div v-else ref="defaultRef">
      <p>默认显示内容</p>
    </div>
  </div>
</template>