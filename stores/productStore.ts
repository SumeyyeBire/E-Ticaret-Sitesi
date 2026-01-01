// stores/productStore.ts
import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import type { Product } from '@/types';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    loading: false
  }),

  actions: {
    async fetchProducts() {
      const { $db } = useNuxtApp(); // Plugins/firebase.client.ts'den gelen db
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection($db as any, "products"));
        this.products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Product[];
      } catch (error) {
        console.error("Ürünler yüklenirken hata oluştu:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});