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
import { defineProps } from 'vue';
import VFilterBar from '@/components/molecules/VFilterBar.vue';
import ProductCard from '@/components/molecules/ProductCard.vue';

const props = defineProps<{
  categoryName: string; // Hangi kategori olduğunu gösterir
}>();

// Mock Veri: Kategoriye ait örnek ürünler
const categoryProducts = [
    // Farklı görsellerle ProductCard molekülünü tekrar kullanıyoruz
    { id: 201, name: 'KIRTASİYE Seti: Kalemler', price: 99.50, image: 'https://picsum.photos/id/16/300/300' },
    { id: 202, name: 'Çiçek Desenli Spiralli Defter', price: 149.99, image: 'https://picsum.photos/id/17/300/300' },
    { id: 203, name: 'Mini Avokado Defter', price: 79.99, image: 'https://picsum.photos/id/18/300/300' },
    { id: 204, name: 'Büyük Boy Sırt Çantası', price: 399.00, image: 'https://picsum.photos/id/19/300/300' },
    { id: 205, name: 'FİLİSTİN Bayraklı T-Shirt', price: 299.00, image: 'https://picsum.photos/id/20/300/300' },
    { id: 206, name: 'Cep Seccadesi', price: 129.00, image: 'https://picsum.photos/id/21/300/300' },
];
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