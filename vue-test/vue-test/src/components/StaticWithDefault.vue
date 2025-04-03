<!-- ChildComponent.vue -->
<template>
  <div class="wrapper">
    <div v-if="showDefault" ref="defaultRef">
      <slot>
        <div class="fallback-content">
          <p>默认显示内容</p>
        </div>
      </slot>
    </div>
    
    <div v-else ref="customRef">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useSlots, defineExpose } from 'vue'

const defaultRef = ref(null)
const customRef = ref(null)
const showDefault = ref(false)
const currentSlotRef = ref(null)

// 检测插槽是否被覆盖
const slots = useSlots()
watchEffect(() => {
  showDefault.value = !slots.default?.()
  currentSlotRef.value = showDefault.value ? defaultRef : customRef
  console.log('showDefault:', currentSlotRef.value.value)
})

// 暴露DOM引用
defineExpose({
  getSlotElement: () => currentSlotRef.value?.value
})
</script>