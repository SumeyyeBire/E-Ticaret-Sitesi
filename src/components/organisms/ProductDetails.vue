<template>
  <div class="product-details-layout">
    <div class="image-gallery">
      <img :src="product.mainImage" :alt="product.name" class="main-image" />
      <div class="thumbnail-row">
        [Küçük Görseller]
      </div>
    </div>

    <div class="info-section">
      <h1 class="product-name">{{ product.name }}</h1>
      <div class="price">{{ product.price.toFixed(2) }} TL</div>

      <div class="action-area">
        <div class="quantity-picker">
          <label>Adet:</label>
          <input type="number" v-model.number="quantity" min="1" class="qty-input" />
        </div>

        <VButton color="secondary" size="lg" @click="addToCart" class="add-to-cart-btn">
          SEPETE EKLE
        </VButton>
      </div>

      <div class="delivery-info">
          [Teslimat Bilgileri ve Taksit Seçenekleri]
      </div>
    </div>
  </div>

  <div class="description-section">
      <h2>Ürün Açıklaması</h2>
      <p>{{ product.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VButton from '@/components/atoms/VButton.vue';

// Mock Ürün Verisi
const product = {
  id: 101,
  name: 'ÖZGÜR FİLİSTİN ROZET/BROŞ',
  price: 199.99,
  mainImage: 'https://picsum.photos/id/201/500/500', 
  description: 'Filistin davasına destek olmak amacıyla tasarlanmış özel roket ve broş koleksiyonu. Kaliteli metal malzemeden üretilmiştir.',
  stock: 50,
};

const quantity = ref(1);

const addToCart = () => {
    console.log(`${product.name} ürününden ${quantity.value} adet sepete eklendi.`);
    // İleride Pinia entegrasyonu buraya gelecek.
};
</script>

<style scoped>
.product-details-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  min-height: 60vh;
}

.image-gallery {
  text-align: center;
}

.main-image {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border: 1px solid #eee;
  border-radius: 4px;
}

.product-name {
    font-size: 32px;
    margin-bottom: 15px;
}

.price {
    font-size: 28px;
    font-weight: bold;
    color: #1a237e;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.action-area {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
}

.qty-input {
    width: 60px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
}

.add-to-cart-btn {
    flex-grow: 1;
}

.description-section {
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 20px;
}

/* Medya sorgusu */
@media (max-width: 900px) {
    .product-details-layout {
        grid-template-columns: 1fr;
    }
}
</style>