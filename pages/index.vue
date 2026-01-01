<template>
  <div class="container">
    <div v-if="uiStore.loading" class="loading-state">İçerik yükleniyor...</div>
    
    <div v-else-if="uiStore.slides.length > 0" class="hero-slider">
      <div 
        v-for="(slide, index) in uiStore.slides" 
        :key="slide.id" 
        v-show="currentSlide === index" 
        class="slide-item"
      >
        <img 
          v-if="slide.imageUrl"
          :src="slide.imageUrl" 
          :alt="slide.title || 'Slider'" 
          class="slider-img" 
        />
        <div class="slide-overlay">
          <h2 v-if="slide.title">{{ slide.title }}</h2>
        </div>
      </div>
    </div>

    <section class="category-section">
      <div class="section-header">
        <h2>DEFTERLER</h2>
        <NuxtLink to="/category/defter" class="view-all">Tümünü Gör</NuxtLink>
      </div>
      
      <div v-if="productStore.loading" class="loading-state">Ürünler yükleniyor...</div>
      <div v-else class="product-grid">
        <ProductCard 
          v-for="product in defterProducts" 
          :key="product.id" 
          :product="product"
          @addToCart="cartStore.addToCart(product)"
        />
      </div>
    </section>

    <section class="category-section">
      <h2>SİZİN İÇİN SEÇTİKLERİMİZ</h2>
      <div v-if="productStore.loading" class="loading-state">Ürünler yükleniyor...</div>
      <div v-else class="product-grid">
        <ProductCard 
          v-for="product in otherProducts" 
          :key="product.id" 
          :product="product"
          @addToCart="cartStore.addToCart(product)"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Store ve Vue yardımcılarını import ediyoruz
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import { useUiStore } from '@/stores/uiStore';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const productStore = useProductStore();
const cartStore = useCartStore();
const uiStore = useUiStore();

// Slider akışı için gerekli değişkenler
const currentSlide = ref(0);
let timer: any = null;

onMounted(async () => {
  // Verileri paralel olarak çekiyoruz
  await Promise.all([
    productStore.fetchProducts(),
    uiStore.fetchSlides()
  ]);

  // Eğer slayt varsa, her 4 saniyede bir değiştir
  if (uiStore.slides.length > 0) {
    timer = setInterval(() => {
      // Mod alma (%) operatörü ile son slayttan sonra başa döner
      currentSlide.value = (currentSlide.value + 1) % uiStore.slides.length;
    }, 4000);
  }
});

// Sayfadan çıkıldığında zamanlayıcıyı temizliyoruz (Performans yönetimi)
onUnmounted(() => {
  if (timer) clearInterval(timer);
});

// Ürün filtreleme mantığı (İş Zekası)
const defterProducts = computed(() => {
  return productStore.products.filter(p => p.category === 'defter').slice(0, 4);
});

const otherProducts = computed(() => {
  return productStore.products.filter(p => p.category !== 'defter').slice(0, 8);
});
</script>

<style scoped>
/* Slider Alanı Tasarımı */
.hero-slider {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  margin: 20px 0 40px;
  border-radius: 12px;
  background-color: #f0f0f0; /* Resim yüklenmezse gri alan görünür */
}

.slider-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
}

/* Ürün Grid ve Başlık Tasarımı */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 25px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #1a237e;
  padding-bottom: 10px;
}

.view-all {
  color: #1a237e;
  text-decoration: none;
  font-weight: bold;
}

.category-section { margin-top: 50px; }
.loading-state { text-align: center; padding: 40px; color: #666; }
</style>