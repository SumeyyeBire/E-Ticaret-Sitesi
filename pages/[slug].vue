<template>
  <div class="container">
    <h2>Kategori: {{ $route.params.slug.toString().toUpperCase() }}</h2>
    <div class="product-grid">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const productStore = useProductStore();

// İş Zekası: URL'deki kategori ismine göre ürünleri filtrele
const filteredProducts = computed(() => {
  return productStore.products.filter(p => p.category === route.params.slug);
});
</script>