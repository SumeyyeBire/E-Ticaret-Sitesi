<template>
  <div class="cart-page container">
    <h1>Alışveriş Sepetim</h1>

    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>Sepetiniz şu an boş. Alışverişe devam etmek ister misiniz?</p>
      <NuxtLink to="/" class="btn-continue">Ürünlere Göz At</NuxtLink>
    </div>

    <div v-else class="cart-container">
      <div class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-item-img" />
          <div class="cart-item-info">
            <h3>{{ item.name }}</h3>
            <p class="category">{{ item.category }}</p>
          </div>
          <div class="cart-item-price">
            {{ item.price.toFixed(2) }} TL
          </div>
          <button @click="cartStore.removeFromCart(item.id)" class="btn-remove">
            Kaldır
          </button>
        </div>
      </div>

      <div class="cart-summary">
        <h3>Sipariş Özeti</h3>
        <div class="summary-row">
          <span>Ara Toplam:</span>
          <span>{{ cartStore.totalPrice.toFixed(2) }} TL</span>
        </div>
        <div class="summary-row">
          <span>Kargo:</span>
          <span>Bedava</span>
        </div>
        <hr />
        <div class="summary-row total">
          <span>Toplam:</span>
          <span>{{ cartStore.totalPrice.toFixed(2) }} TL</span>
        </div>
        <button class="btn-checkout" @click="completeOrder">Alışverişi Tamamla</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const completeOrder = () => {
  alert("Siparişiniz alındı! (Bu kısım ödeme sistemine bağlanabilir)");
};
</script>

<style scoped>
.cart-page { padding: 40px 0; min-height: 60vh; }
.cart-container { display: grid; grid-template-columns: 1fr 350px; gap: 30px; }
.cart-item { 
  display: flex; 
  align-items: center; 
  padding: 15px; 
  border-bottom: 1px solid #eee; 
  gap: 20px;
}
.cart-item-img { width: 80px; height: 80px; object-fit: contain; }
.cart-item-info { flex: 1; }
.category { color: #888; font-size: 0.8rem; }
.btn-remove { background: none; border: none; color: #ff4d4f; cursor: pointer; font-size: 0.9rem; }
.cart-summary { 
  background: #f9f9f9; 
  padding: 20px; 
  border-radius: 8px; 
  height: fit-content;
}
.summary-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
.total { font-weight: bold; font-size: 1.2rem; margin-top: 10px; }
.btn-checkout { 
  width: 100%; 
  background: #1a237e; 
  color: white; 
  border: none; 
  padding: 12px; 
  border-radius: 4px; 
  margin-top: 20px; 
  cursor: pointer;
}
.empty-cart { text-align: center; padding: 50px; }
.btn-continue { color: #1a237e; text-decoration: underline; }
</style>