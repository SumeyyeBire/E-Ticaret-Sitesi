<template>
  <input 
    class="input-field"
    :type="type" 
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  type?: string; 
  placeholder?: string;
  modelValue?: string | number; // v-model için
}>();

const emits = defineEmits(['update:modelValue']);
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.input-field:focus {
  border-color: #1a237e;
  outline: none;
}
</style>