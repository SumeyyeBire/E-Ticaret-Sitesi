<template>
  <Header />
  <CategoryListing :categoryName="currentCategoryName" />
  <SiteFooter />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router'; // Rota parametrelerini almak için
import Header from '@/components/organisms/Header.vue';
import SiteFooter from '@/components/organisms/SiteFooter.vue';
import CategoryListing from '@/components/organisms/CategoryListing.vue';

const route = useRoute();

// Rota (URL) slug'ını alıp büyük harfle kategori adı yapıyoruz
const currentCategoryName = computed(() => {
    // Örneğin, URL /firsat ise -> "FIRSAT" olarak gösterir
    const slug = route.params.slug as string;
    return slug ? slug.toUpperCase() : 'KATEGORİ';
});
</script>