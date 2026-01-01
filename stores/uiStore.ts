import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore'; 

export const useUiStore = defineStore('ui', {
  state: () => ({
    slides: [] as any[],
    loading: false
  }),
  actions: {
    async fetchSlides() {
      const { $db } = useNuxtApp();
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection($db as any, "slides"));
        this.slides = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        }));
        console.log("Slider verileri başarıyla çekildi:", this.slides);
      } catch (error) {
        console.error("Slider yükleme hatası:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});