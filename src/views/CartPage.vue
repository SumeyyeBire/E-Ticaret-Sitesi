<template>
  <Header />
  <div class="cart-page-content">
    <h1>Sepetim</h1>
    <div class="cart-layout">
      <div class="cart-items-list">
        <div class="promo-banner">
          750 TL ve ÜZERİ ALIŞVERİŞLERİNİZDE KARGO ÜCRETSİZ!
        </div>

        <CartItem 
          v-for="item in mockCartItems" 
          :key="item.id" 
          :item="item" 
          @updateQuantity="updateQuantity"
          @removeItem="removeItem"
        />
      </div>

      <div class="summary-area">
        <OrderSummary :subtotal="cartSubtotal" />
      </div>
    </div>
  </div>
  <SiteFooter />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Header from '@/components/organisms/Header.vue';
import SiteFooter from '@/components/organisms/SiteFooter.vue';
import CartItem from '@/components/molecules/CartItem.vue';
import OrderSummary from '@/components/organisms/OrderSummary.vue';

// Sepet verilerini şimdilik ref ile tutuyoruz. İleride Pinia'dan gelecek.
const mockCartItems = ref([
  { id: 1, name: 'BAMBU KAPAK 750 ML', price: 470.98, image: 'https://picsum.photos/id/401/80/80', quantity: 1 },
  { id: 2, name: 'BİR YANIM AT Hediye Seti', price: 149.99, image: 'https://picsum.photos/id/402/80/80', quantity: 1 }
]);

const cartSubtotal = computed(() => {
    return mockCartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

// Sahte sepet fonksiyonları
const updateQuantity = ({ id, quantity }: { id: number, quantity: number }) => {
    const item = mockCartItems.value.find(i => i.id === id);
    if (item && quantity > 0) {
        item.quantity = quantity;
        console.log(`Ürün ${id} adet güncellendi: ${quantity}`);
    }
};

const removeItem = (id: number) => {
    mockCartItems.value = mockCartItems.value.filter(i => i.id !== id);
    console.log(`Ürün ${id} sepetten kaldırıldı.`);
};
</script>

<style scoped>
.cart-page-content {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  min-height: 60vh;
}

h1 {
  font-size: 24px;
  margin-bottom: 30px;
}

.cart-layout {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Sol: Ürünler (2 kısım), Sağ: Özet (1 kısım) */
  gap: 30px;
}

.promo-banner {
    background-color: #ffe0b2;
    color: #e65100;
    padding: 10px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 4px;
    font-weight: 500;
}

@media (max-width: 900px) {
    .cart-layout {
        grid-template-columns: 1fr; /* Küçük ekranlarda tek sütun */
    }
    .summary-area {
        order: -1; /* Özeti yukarı taşı */
    }
}
</style>