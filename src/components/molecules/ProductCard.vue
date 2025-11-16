<template>
  <div class="product-card">
    <router-link :to="`/product/${product.id}`" class="card-link">
      <div class="image-container">
        <img :src="product.image" :alt="product.name" class="product-image" />
      </div>
      <h3 class="product-name">{{ product.name }}</h3>
    </router-link>

    <div class="price-action">
      <span class="product-price">{{ formattedPrice }} TL</span>
      <VButton color="secondary" size="sm" @click="$emit('addToCart', product.id)">
        Sepete Ekle
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';
import VButton from '@/components/atoms/VButton.vue';

// Ürün verisinin tip tanımı
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const props = defineProps<{
  product: Product;
}>();

// Fiyatı formatlama işlemi (1,000.00 TL gibi)
const formattedPrice = computed(() => {
  return props.product.price.toFixed(2).replace('.', ',');
});

// Sepete Ekle butonuna tıklandığında üst bileşene bildirmek için
const emits = defineEmits(['addToCart']);
</script>

<style scoped>
.product-card {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 15px;
  text-align: center;
  transition: box-shadow 0.3s;
  width: 100%;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.image-container {
  margin-bottom: 10px;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.product-name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 15px;
  min-height: 40px; /* Sabit yükseklik */
}

.card-link {
    text-decoration: none;
}

.price-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #1a237e; /* Vurgu Rengi */
}
</style>