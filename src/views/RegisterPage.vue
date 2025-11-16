<template>
  <Header />
  <div class="page-content">
    <RegisterForm />
  </div>
  <SiteFooter />
</template>

<script setup lang="ts">
import Header from '@/components/organisms/Header.vue';
import SiteFooter from '@/components/organisms/SiteFooter.vue';
import RegisterForm from '@/components/organisms/RegisterForm.vue';
</script>