/// <reference types="vite/client" />
// src/env.d.ts (或 vite-env.d.ts)
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// types/slots.d.ts
// import type { Ref } from 'vue'

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     getSlotElement: () => Ref<HTMLElement | undefined>
//   }
// }

// export interface SlotHOCExpose {
//   slotRef: Ref<HTMLElement | undefined>
// }