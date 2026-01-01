<template>
  <div class="product-card">
    <NuxtLink :to="`/product/${product.id}`" class="card-link">
      <div class="image-container">
        <img :src="product.image" :alt="product.name" class="product-image" />
      </div>
      <h3 class="product-name">{{ product.name }}</h3>
    </NuxtLink>

    <div class="price-action">
      <span class="product-price">{{ formattedPrice }} TL</span>
      <span v-if="product.price > 100" class="free-shipping">Kargo Bedava!</span>
      <VButton color="secondary" size="sm" @click="handleAddToCart">
        Sepete Ekle
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// 1. Hocanın istediği merkezi TypeScript tipini çağırıyoruz
import type { Product } from '@/types';

// 2. Props tanımı: Dışarıdan gelen ürün verisini alıyoruz
const props = defineProps<{
  product: Product
}>();

// 3. Emit tanımı: Sepete ekleme olayını üst bileşene bildiriyoruz
const emit = defineEmits(['addToCart']);

// 4. İş Zekası (Logic): Fiyat formatlama
const formattedPrice = computed(() => {
  // Eğer fiyat verisi yoksa 0.00 göster
  const price = props.product.price || 0;
  return price.toFixed(2).replace('.', ',');
});

const handleAddToCart = () => {
  emit('addToCart', props.product.id);
};
</script>

<style scoped>
/* CSS kısımları aynı kalıyor, tasarımın bozulmaması için dokunmadım */
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
.image-container { margin-bottom: 10px; }
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
  min-height: 40px;
}
.card-link { text-decoration: none; }
.price-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #1a237e;
}
</style>