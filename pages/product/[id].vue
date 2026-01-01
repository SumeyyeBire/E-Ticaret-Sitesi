<template>
  <div v-if="product" class="product-detail container">
    <div class="detail-grid">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="product-info">
        <nav class="breadcrumb">Anasayfa > {{ product.category }}</nav>
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price.toFixed(2) }} TL</p>
        <p class="description">
          Bu harika {{ product.name }} Genç Atölye kalitesiyle sizlerle buluşuyor. 
          Filistin temalı ürünlerimizle iyiliğe ortak olun.
        </p>
        <VButton color="primary" @click="cartStore.addToCart(product)">
          SEPETE EKLE
        </VButton>
      </div>
    </div>
  </div>
  <div v-else class="container">Ürün yükleniyor...</div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

// İş Zekası: URL'deki ID ile store'daki ürünü bulma
const product = computed(() => {
  return productStore.products.find(p => p.id === route.params.id);
});

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchProducts();
  }
});
</script>

<style scoped>
.product-detail { padding: 60px 0; }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
.product-image img { width: 100%; border-radius: 8px; border: 1px solid #eee; }
.breadcrumb { font-size: 0.8rem; color: #888; margin-bottom: 10px; }
.price { font-size: 2rem; font-weight: bold; color: #1a237e; margin: 20px 0; }
.description { margin-bottom: 30px; line-height: 1.6; color: #555; }
</style>