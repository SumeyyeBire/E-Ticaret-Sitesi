// stores/categoryStore.ts
import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as any[],
    loading: false
  }),
  actions: {
    async fetchCategories() {
      const { $db } = useNuxtApp();
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection($db as any, "categories"));
        this.categories = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("Kategori verileri çekildi:", this.categories);
      } catch (error) {
        console.error("Kategori yükleme hatası:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});