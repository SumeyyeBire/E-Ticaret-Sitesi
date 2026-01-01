import { defineStore } from 'pinia';
import type { Product } from '@/types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[]
  }),
  getters: {
    // Toplam fiyatı otomatik hesaplayan getter (İş Zekası)
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + (item.price || 0), 0);
    }
  },
  actions: {
    addToCart(product: Product) {
      this.items.push(product);
      // Opsiyonel: alert yerine daha şık bir notification da eklenebilir
    },
    removeFromCart(productId: string | number) {
      // ID'ye göre ürünü sepetten çıkar (Güncelleme şartı)
      this.items = this.items.filter(item => item.id !== productId);
    }
  }
});