<template>
  <router-link to="/" class="logo-container">
    <img src="/genc-atolye-logo.png" alt="genç ATOLYE bir paket iyilik" class="full-logo-image" /> 
  </router-link>
</template>

<script setup lang="ts">
// Artık script bloğu boş kalabilir.
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