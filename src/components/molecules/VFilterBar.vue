<template>
  <div class="filter-bar">
    <select v-model="filters.priceRange" class="filter-select">
      <option value="">Fiyat Aralığı</option>
      <option value="0-100">0 - 100 TL</option>
      <option value="100-300">100 - 300 TL</option>
      <option value="300-max">300 TL+</option>
    </select>

    <select v-model="filters.filter" class="filter-select">
      <option value="">Filtreler</option>
      <option value="stokta">Stokta Olanlar</option>
      <option value="yeni">Yeni Ürünler</option>
    </select>

    <select v-model="filters.sort" class="filter-select">
      <option value="default">Sıralama</option>
      <option value="price_asc">En Düşük Fiyat</option>
      <option value="price_desc">En Yüksek Fiyat</option>
      <option value="newest">En Yeni</option>
    </select>

    <div class="view-toggle">
        [Izgara İkonu] [Liste İkonu]
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';

const filters = reactive({
  priceRange: '',
  filter: '',
  sort: 'default',
});

// İleride bu filtreleri üst View'e iletmek için kullanılır
watch(filters, (newFilters) => {
  console.log('Yeni Filtreler:', newFilters);
  // emit('update:filters', newFilters); // Üst bileşene iletmek için
});
</script>

<style scoped>
.filter-bar {
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-select {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.view-toggle {
    margin-left: auto;
}
</style>