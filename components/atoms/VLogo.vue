<template>
  <NuxtLink to="/" class="logo-container">
    <img 
      src="/images/genc_atolye_logo.webp" 
      alt="genç ATOLYE bir paket iyilik" 
      class="full-logo-image" 
    /> 
  </NuxtLink>
</template>

<script setup lang="ts">
</script>

<style scoped>
.logo-container {
  display: inline-block;
  text-decoration: none;
  padding: 10px 0;
}

.full-logo-image {
    /* Orijinal siteye uygun boyut */
    height: 90px; 
    width: auto;
    object-fit: contain;
}
</style>