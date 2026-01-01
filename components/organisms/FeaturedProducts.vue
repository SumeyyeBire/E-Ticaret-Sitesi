<template>
  <section class="featured-products-section">
    <h2 class="section-title">Öne Çıkanlar / Çok Satanlar</h2>

    <div class="product-grid">
      <ProductCard 
        v-for="product in featuredProducts" 
        :key="product.id" 
        :product="product" 
        @addToCart="handleAddToCart"
      />
    </div>

    </section>
</template>

<script setup lang="ts">
import ProductCard from '@/components/molecules/ProductCard.vue';
import { MOCK_PRODUCTS } from '@/data/product-data'; 

// Tüm ürün listesinden sadece ilk 4 ürünü gösteriyoruz
const featuredProducts = MOCK_PRODUCTS.slice(0, 4); 

const handleAddToCart = (productId: number) => {
  console.log(`Ürün ${productId} sepete eklendi!`);
};
</script>

<style scoped>
.featured-products-section {
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>