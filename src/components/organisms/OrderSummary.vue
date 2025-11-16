<template>
  <div class="order-summary-container">
    <h3 class="summary-title">Sipariş Özeti</h3>
    <div class="summary-line">
      <span>Sepet Tutarı</span>
      <span>{{ subtotal.toFixed(2) }} TL</span>
    </div>
    <div class="summary-line total">
      <span>Toplam Tutar</span>
      <span>{{ total.toFixed(2) }} TL</span>
    </div>

    <VButton color="success" size="lg" class="complete-btn" to="/checkout">
      Alışverişi Tamamla
    </VButton>

    <div class="coupon-section">
      <div class="coupon-item">
        [Hediye Çeki Kullan]
      </div>
      <div class="coupon-item">
        [Hediye Paketi Uygula]
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import VButton from '@/components/atoms/VButton.vue';

const props = defineProps<{
  subtotal: number;
}>();

// Kargo, vergi vb. hesaplamalar buraya gelebilir. Şimdilik sadece sepet tutarı.
const total = computed(() => {
// Örn: Kargo ücreti 750 TL üzeri ücretsiz [cite: 61]
  const shipping = props.subtotal > 750 ? 0 : 35; 
  return props.subtotal + shipping;
});
</script>

<style scoped>
.order-summary-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.summary-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
}
.total {
  font-size: 16px;
  font-weight: bold;
  color: #1a237e;
  padding-top: 10px;
  border-top: 1px dashed #ddd;
}
.complete-btn {
  width: 100%;
  margin: 20px 0;
}
.coupon-section {
    border-top: 1px solid #ddd;
    padding-top: 15px;
}
.coupon-item {
    padding: 8px 0;
    font-size: 14px;
    color: #777;
}
</style>