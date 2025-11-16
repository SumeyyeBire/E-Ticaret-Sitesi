<template>
  <Header />
  <ProductSlider /> 
  <FeaturedProducts /> <SiteFooter />
</template>

<script setup lang="ts">
import Header from '@/components/organisms/Header.vue';
import SiteFooter from '@/components/organisms/SiteFooter.vue';
import ProductSlider from '@/components/organisms/ProductSlider.vue';
import FeaturedProducts from '@/components/organisms/FeaturedProducts.vue'; // Yeni import
</script>