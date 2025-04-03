<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'HighOrderComponent',
  setup(props, { slots }) {
    const slotRef = ref<HTMLElement | null>(null);
    
    onMounted(() => {
      console.log('高阶组件获取:', slotRef.value);
    });
    
    return {
      slotRef
    };
  }
});
</script>

<template>
  <div class="high-order-component">
    <div ref="slotRef">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.high-order-component {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>