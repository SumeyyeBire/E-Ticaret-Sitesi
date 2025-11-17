<template>
  <section class="slider-container">
    <SliderItem 
      v-for="(slide, index) in MOCK_SLIDES"
      :key="index"
      v-show="index === currentSlide"
      :image="slide.image"
      :title="slide.title"
      :description="slide.description"
      :link="slide.link"
      :ctaText="slide.ctaText"
    />

    <div class="slider-controls">
        <button class="arrow prev" @click="prevSlide">&#10094;</button> <button class="arrow next" @click="nextSlide">&#10095;</button> </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import SliderItem from '@/components/molecules/SliderItem.vue';
// Veri, otomatik olarak template'e açılır ve template'te kullanılır
import { MOCK_SLIDES } from '@/data/product-data'; 

const currentSlide = ref(0);
const totalSlides = MOCK_SLIDES.length;
let interval: number | undefined;

const nextSlide = () => {
    // Otomatik geçiş ve nextSlide butonu için
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const prevSlide = () => {
    // prevSlide butonu için
    currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

// Otomatik geçiş mantığı
const startSlider = () => {
    // Her 5 saniyede bir geçiş
    interval = setInterval(nextSlide, 5000) as unknown as number;
};

onMounted(() => {
    startSlider();
});

onUnmounted(() => {
    if (interval) clearInterval(interval);
});
</script>

<style scoped>
.slider-container {
  position: relative;
  margin: 30px 0;
  overflow: hidden;
  height: 400px; 
}

.slider-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    padding: 0 10px;
    z-index: 2; /* Okların slaytların üzerinde olmasını sağlar */
}

.arrow {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 20px;
    text-align: center;
    transition: background-color 0.2s;
}

.arrow:hover {
    background: rgba(0, 0, 0, 0.7);
}
</style>