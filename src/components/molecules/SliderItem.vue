<template>
  <div class="slider-item" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <VButton color="primary" size="lg" :to="link">{{ ctaText }}</VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import VButton from '@/components/atoms/VButton.vue';

const props = defineProps<{
  image: string;      // Slayt arka plan görseli yolu
  title: string;
  description: string;
  link: string;       // Butonun gideceği rota
  ctaText: string;    // Buton metni (Örn: "Hemen İncele")
}>();
</script>

<style scoped>
.slider-item {
  height: 400px; /* Slider yüksekliği */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center; /* İçeriği dikey ortala */
  padding: 0 80px;
  color: white;
}

.content {
  padding: 20px;
  border-radius: 8px;
}

.title {
  font-size: 36px;
  margin-bottom: 10px;
}

.description {
  margin-bottom: 20px;
}
</style>