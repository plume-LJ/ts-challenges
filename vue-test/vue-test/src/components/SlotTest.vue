<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HighOrderComponent from './HighOrderComponent.vue';
import ScopedSlotComponent from './ScopedSlotComponent.vue';
import StaticWithDefault from './StaticWithDefault.vue';
import HocWithDefault from './HocWithDefault.vue';
import HighChild from './HighChild.vue';

const currentMode = ref<'static' | 'static-default' | 'high-order' | 'high-child' | 'scoped'>('static');

// 方式1：静态DOM获取
onMounted(() => {
  const staticDom = document.getElementById('test-slot');
  console.log('静态DOM获取:', staticDom);
  if (!staticDom) {
    console.warn('未找到ID为test-slot的元素，请确保slot内容包含id="test-slot"');
  }
});
</script>

<template>
  <div class="slot-test">
    <div class="mode-selector">
      <button @click="currentMode = 'static'">静态DOM方式</button>
      <button @click="currentMode = 'high-order'">高阶组件方式</button>
      <button @click="currentMode = 'high-child'">高阶子组件方式</button>
      <button @click="currentMode = 'scoped'">作用域插槽方式</button>
      <button @click="currentMode = 'static-default'">静态Default</button>
    </div>
    
    <div v-if="currentMode === 'static'">
      <slot></slot>
    </div>

    <HighChild v-if="currentMode === 'high-child'">
        <div id="test-child-slot">高阶子组件内容</div>
      </HighChild>
    
    <HighOrderComponent v-if="currentMode === 'high-order'">
      <div id="test-slot">高阶组件内容</div>
    </HighOrderComponent>
    <HocWithDefault v-if="currentMode === 'high-order'">
      <div id="test-slot">高阶组件内容</div>
    </HocWithDefault>
    <HocWithDefault v-if="currentMode === 'high-order'">
    </HocWithDefault>
    
    <ScopedSlotComponent v-if="currentMode === 'scoped'">
      <template #scoped="{ getRef }">
        <div>作用域插槽内容</div>
        <button @click="() => {
          const dom = getRef?.();
          console.log('获取到的DOM:', dom);
          if (!dom) {
            console.warn('未能获取到DOM元素');
          }
        }">测试获取DOM</button>
      </template>
    </ScopedSlotComponent>

    <StaticWithDefault v-if="currentMode === 'static-default'">
    </StaticWithDefault>
    <StaticWithDefault v-if="currentMode === 'static-default'">
      <div>插槽内容</div>
    </StaticWithDefault>
  </div>
</template>

<style scoped>
.slot-test {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}

.mode-selector {
  margin-bottom: 20px;
}

.mode-selector button {
  margin-right: 10px;
  padding: 5px 10px;
}
</style>