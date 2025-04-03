// utils/slotHOC.ts
import { h, ref, defineComponent, onMounted } from 'vue'

export const createSlotHOC = (slots: any) => {
  const slotRef = ref<HTMLElement>()
  
  return defineComponent({
    setup(_, { expose }) {
      onMounted(() => {
        console.log('插槽DOM:', slotRef.value)
      })

      expose({ slotRef })
      
      return () => h('div', { ref: slotRef }, slots.default?.())
    }
  })
}