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

// Mock Veri: 4 adet örnek ürün
const featuredProducts = [
  { id: 101, name: 'FİLİSTİN ROZET/BROŞ', price: 199.99, image: 'https://picsum.photos/id/1/300/300' }, // Ürün sayfasına benzer bir ürün [cite: 35]
  { id: 102, name: 'Kırmızı Baskılı TİŞÖRT', price: 249.90, image: 'https://picsum.photos/id/2/300/300' },
  { id: 103, name: 'BAMBU KAPAK 750 ML', price: 470.98, image: 'https://picsum.photos/id/3/300/300' }, // Sepetteki ürüne benzer [cite: 44]
  { id: 104, name: 'BİR YANIM AT Hediye Seti', price: 149.99, image: 'https://picsum.photos/id/4/300/300' }, // Sepetteki ürüne benzer [cite: 45]
];

const handleAddToCart = (productId: number) => {
  console.log(`Ürün ${productId} sepete eklendi! (Pinia entegrasyonu buraya gelecek)`);
  // İleride Pinia store entegrasyonu buraya gelecek.
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