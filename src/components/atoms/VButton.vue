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
import { defineProps, withDefaults } from 'vue';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary' | 'success'; 
  size?: 'sm' | 'md' | 'lg'; 
  to?: string; // Yeni: Eğer bir rota belirtilirse
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button', // Varsayılan tipi 'button' olarak belirledik
  color: 'primary',
  size: 'md',
});
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.3s, border-color 0.3s;
  font-size: 14px;
  font-weight: 500;
  display: inline-block; /* router-link için */
  text-align: center;
}

/* Koyu Lacivert (Giriş Yap) */
.btn-primary { 
  background-color: var(--color-primary); 
  color: white;
  border-color: var(--color-primary);
}

.btn-primary:hover {
    background-color: #111a4b; /* Biraz daha koyu ton */
    border-color: #111a4b;
}

/* Açık Mavi (Sepete Ekle) */
.btn-secondary { 
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-color: var(--color-secondary);
}

.btn-secondary:hover {
    background-color: #c9e6ff;
}

/* Yeşil (Tamamla) */
.btn-success { 
  background-color: var(--color-success); 
  color: white;
  border-color: var(--color-success);
}

.btn-success:hover {
    background-color: #43a047;
}

.btn-lg {
  padding: 12px 24px;
  font-size: 16px;
}
</style>