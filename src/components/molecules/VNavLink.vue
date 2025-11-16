<template>
  <router-link :to="to" class="nav-link">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
    
const props = defineProps<{
  to: string; 
}>();
</script>

<style scoped>
.nav-link {
  padding: 15px 12px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.2s;
  white-space: nowrap; 
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #795548; 
}
</style>