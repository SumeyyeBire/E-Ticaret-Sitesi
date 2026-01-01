<template>
  <div class="slider-item">
    <img :src="image" :alt="title" class="slider-image" />
    <div class="content">
      </div>
  </div>
</template>

<script setup lang="ts">


interface Props {
  image: string;
  title: string;
  description: string;
  link: string;
  ctaText: string;
}

// Props'u tanımlıyoruz ancak V-if ile kullanmadığımız için Typescript uyarısı verecektir, bu normal.
const props = defineProps<Props>(); 
</script>

<style scoped>
.slider-item {
  position: relative;
  width: 100%;
  height: 100%; 
  overflow: hidden; 
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center; 
  display: block;
}

.content {
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
  display: none; /* Metinler görsel içinde olduğundan gizlenir */
}
</style>