<template>
  <section class="slider-container">
    <SliderItem 
      :image="mockSlides[0].image"
      :title="mockSlides[0].title"
      :description="mockSlides[0].description"
      :link="mockSlides[0].link"
      :ctaText="mockSlides[0].ctaText"
    />
    
    </section>
</template>

<script setup lang="ts">
import SliderItem from '@/components/molecules/SliderItem.vue';

// Düzeltilmiş Mock Veri: Tırnak işaretlerinin içindeki metinler temizlendi.
const mockSlides = [
  {
    image: 'https://picsum.photos/id/1015/1200/400', 
    title: 'Özel Koleksiyon: NAR ROZETLERİ',
    description: '750 TL ve üzeri alışverişlerinizde Kargo Ücretsiz!',
    link: '/nar-rozet',
    // Hatanın Kaynağı Olan Yer: Sadece metin kalmalı
    ctaText: 'Hemen İncele',
  },
  // ...
];
</script>

<style scoped>
/* ... Stiller ... */
</style>