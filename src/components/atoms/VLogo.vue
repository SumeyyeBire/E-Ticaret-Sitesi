<template>
  <router-link to="/" class="logo">
    
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  type?: 'text' | 'image'; 
}>();
</script>

<style scoped>
.logo {
  font-family: cursive; 
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
</style>