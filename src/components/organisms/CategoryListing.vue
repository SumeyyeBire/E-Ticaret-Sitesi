<template>
  <section class="category-listing-container">
    <h1 class="category-title">{{ categoryName }} Ürünleri</h1>

    <VFilterBar />

    <div class="product-grid">
      <ProductCard 
        v-for="product in categoryProducts" 
        :key="product.id" 
        :product="product" 
      />
    </div>

    </section>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import VFilterBar from '@/components/molecules/VFilterBar.vue';
import ProductCard from '@/components/molecules/ProductCard.vue';
import { MOCK_PRODUCTS } from '@/data/product-data'; 

const props = defineProps<{
  categoryName: string; 
}>();

// Rota slug'ına göre ürün listesini dinamik olarak filtreliyoruz
const categoryProducts = computed(() => {
    const slug = props.categoryName.toLowerCase();
    // Eğer rota 'aksesuar' ise, sadece categorySlug'ı 'aksesuar' olanlar gelir.
    return MOCK_PRODUCTS.filter(p => p.categorySlug === slug);
});
</script>

<style scoped>
.category-listing-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  min-height: 60vh;
}

.category-title {
    font-size: 28px;
    margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>