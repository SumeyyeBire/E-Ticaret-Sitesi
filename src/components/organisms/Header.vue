<template>
  <header class="main-header">
    <div class="header-top">
      <VLogo class="logo" /> 

      <div class="actions">
        <VButton color="primary" size="sm" to="/login">Giriş Yap</VButton>
        <router-link to="/cart" class="cart-icon">
            [Sepet İkonu]
        </router-link>
      </div>
    </div>

    <nav class="main-nav">
      <VNavLink to="/one-cikanlar">ÖNE ÇIKANLAR</VNavLink>
      <VNavLink to="/firsat">FIRSAT</VNavLink>
      <VNavLink to="/filistin-urunleri">FİLİSTİN ÜRÜNLERİ</VNavLink>
      <VNavLink to="/kirtasiye">KIRTASİYE</VNavLink>
      <VNavLink to="/ev-ofis">EV & OFİS</VNavLink>
      <VNavLink to="/aksesuar">AKSESUAR</VNavLink>
      <VNavLink to="/seccade">SECCADE</VNavLink>
      <VNavLink to="/canta">ÇANTA</VNavLink>
      <VNavLink to="/tisort">TİŞÖRT</VNavLink>
      <VNavLink to="/cocuk">ÇOCUK</VNavLink>
      <VNavLink to="/iletisim">İLETİŞİM</VNavLink>
      </nav>
  </header>
</template>

<script setup lang="ts">
import VLogo from '@/components/atoms/VLogo.vue';
import VButton from '@/components/atoms/VButton.vue';
import VNavLink from '@/components/molecules/VNavLink.vue'; 
</script>

<style scoped>
.main-header {
  /* Renk değişkenini kullanıyoruz */
  border-bottom: 1px solid var(--color-border); 
  padding: 0 40px;
  background-color: var(--color-background-light);
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.cart-icon {
    font-size: 20px;
    color: var(--color-text-dark);
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  /* Renk değişkenini kullanıyoruz */
  border-top: 1px solid var(--color-border); 
  flex-wrap: wrap;
}
</style>