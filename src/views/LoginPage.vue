<template>
  <Header />
  <div class="page-content">
    <LoginForm />
  </div>
  <SiteFooter />
</template>

<script setup lang="ts">
import Header from '@/components/organisms/Header.vue';
import SiteFooter from '@/components/organisms/SiteFooter.vue';
import LoginForm from '@/components/organisms/LoginForm.vue'; 
</script>

<style scoped>
.page-content {
  min-height: 70vh; /* Footer'ı aşağı itmek için */
}
</style>