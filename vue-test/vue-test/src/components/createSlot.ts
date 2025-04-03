// createSlot.ts
import { defineComponent, h, type VNode, type DefineComponent } from 'vue'

export interface SlotHOCProps<T = any> {
  vnode: VNode | VNode[] // 接收 VNode 或 VNode 数组
  onMounted?: (dom: HTMLElement) => void
  onUpdated?: (dom: HTMLElement) => void
}

// 定义返回组件的类型
export type SlotHOCType = DefineComponent<SlotHOCProps>

export default function createSlot(): SlotHOCType {
  return defineComponent({
    props: {
      vnode: {
        type: [Object, Array] as unknown as () => VNode | VNode[],
        required: true
      }
    },
    emits: ['mounted', 'updated'],
    mounted() {
      const dom = this.$el as HTMLElement
      this.$emit('mounted', dom)
    },
    updated() {
      const dom = this.$el as HTMLElement
      this.$emit('updated', dom)
    },
    render() {
      return Array.isArray(this.vnode) 
        ? h('div', this.vnode) // 多个根节点需要包裹
        : this.vnode
    }
  }) as SlotHOCType
}