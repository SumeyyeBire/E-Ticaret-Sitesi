<template>
  <component 
    :is="to ? 'router-link' : 'button'" 
    :to="to" 
    :type="to ? 'button' : type" 
    :class="['btn', `btn-${color}`, `btn-${size}`]"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary' | 'success' | 'accent'; 
  size?: 'sm' | 'md' | 'lg'; 
  to?: string; 
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button', 
  color: 'primary',
  size: 'md',
});
</script>


<style scoped>
/* ... (Stiller aynı kalacak, sadece önceki VButton.vue kodu temizlenmiş oldu) */
.btn {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.3s, border-color 0.3s;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  text-align: center;
}

/* Koyu Lacivert (Primary) */
.btn-primary { 
  background-color: var(--color-primary); 
  color: white;
  border-color: var(--color-primary);
}
.btn-primary:hover {
    background-color: #111a4b;
    border-color: #111a4b;
}
/* ... diğer renkler ve stiller ... */
.btn-accent { 
  background-color: #8ce1fd; 
  color: var(--color-text-dark); 
  border-color: #8ce1fd;
  font-weight: 600;
  padding: 8px 15px;
  height: 38px; 
}
.btn-accent:hover {
    background-color: #6ed1fa;
    border-color: #6ed1fa;
}
.btn-lg {
  padding: 12px 24px;
  font-size: 16px;
}
</style>