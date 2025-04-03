<!-- ChildComponent.vue -->
<script setup lang="ts">
import { useSlots, type VNode } from 'vue'
import createSlot, { type SlotHOCType } from './createSlot'

const slots = useSlots()

// 获取默认插槽内容（带类型）
const slotVNode: VNode[] | undefined = slots.default?.()

// 创建类型化的高阶组件
const SlotHOC: SlotHOCType = createSlot()

// DOM 回调示例
const handleSlotMounted = (dom: HTMLElement) => {
  console.log('Mounted DOM:', dom.offsetWidth, dom)
}

const handleSlotUpdated = (dom: HTMLElement) => {
  console.log('Updated DOM:', dom.clientHeight)
}
</script>

<template>
  <component 
    :is="SlotHOC"
    :vnode="slotVNode || []"
    @mounted="handleSlotMounted"
    @updated="handleSlotUpdated"
  />
</template>