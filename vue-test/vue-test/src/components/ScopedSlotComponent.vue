<script setup lang="ts">
import { ref } from 'vue';

const wrapper = ref<HTMLElement | null>(null);
const getRef = () => wrapper.value;
</script>

<template>
  <div ref="wrapper">
    <slot name="scoped" :getRef="getRef">
      <div ></div>
    </slot>
  </div>
</template>

<style scoped>
.scoped-slot-component {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>