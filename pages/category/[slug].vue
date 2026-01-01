<template>
  <div class="category-page container">
    <h1 class="category-title">{{ $route.params.slug.toString().toUpperCase() }}</h1>

    <div v-if="filteredProducts.length > 0" class="product-grid">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product"
        @addToCart="cartStore.addToCart(product)"
      />
    </div>
    <div v-else class="no-products">
      <p>Bu kategoride henüz ürün bulunmuyor.</p>
      <NuxtLink to="/">Ana Sayfaya Dön</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

// İş Zekası: URL'deki kategori ismiyle Firestore'daki category alanını eşleştirme
const filteredProducts = computed(() => {
  const slug = route.params.slug;
  return productStore.products.filter(p => p.category === slug);
});

// Ürünler henüz yüklenmemişse çek
onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchProducts();
  }
});
</script>

<style scoped>
.category-page { padding: 40px 0; }
.category-title { margin-bottom: 30px; text-align: center; color: #1a237e; }
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.no-products { text-align: center; padding: 100px; }
</style>