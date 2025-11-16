<template>
  <Header />
  <div class="page-container">
    <ProductDetails />
    <h2 style="text-align: center; margin-top: 50px;">Benzer Ürünler</h2>
  </div>
  <SiteFooter />
</template>

<script setup lang="ts">
import Header from '@/components/organisms/Header.vue';
import SiteFooter from '@/components/organisms/SiteFooter.vue';
import ProductDetails from '@/components/organisms/ProductDetails.vue';
</script>

<style scoped>
.page-container {
    min-height: 80vh;
}
</style>