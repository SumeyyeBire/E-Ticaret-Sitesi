<template>
  <header class="main-header">
    <div class="header-top-actions">
        <div class="space-filler"></div> 

        <div class="actions">
          <span class="top-action">Türkiye - TRY</span>
    
          <NuxtLink to="/login" class="top-action-icon" title="Hesabım">
            &#128100; 
          </NuxtLink>
    
          <span class="top-action-icon" title="Arama">
            &#128269; 
          </span>
    
          <NuxtLink to="/cart" class="top-action-icon" title="Sepetim">
           &#128722; 
           <span v-if="cartStore.items.length > 0" class="cart-count">
             {{ cartStore.items.length }}
           </span> 
          </NuxtLink>
    
            <span v-if="authStore.user" class="welcome-text">
                Merhaba, {{ authStore.user.fullName }}
            </span>
  
          <VButton v-else color="primary" size="sm" to="/login" class="login-btn">
              Giriş Yap
          </VButton>


        </div>
    </div>
    
    <div class="header-logo-area">
        <VLogo /> 
    </div>

    <nav class="main-nav">
        <VNavLink to="/category/one-cikanlar">ÖNE ÇIKANLAR</VNavLink>
        <VNavLink to="/category/firsat">FIRSAT</VNavLink>
        <VNavLink to="/category/filistin-urunleri">FİLİSTİN ÜRÜNLERİ</VNavLink>
        <VNavLink to="/category/kirtasiye">KIRTASİYE</VNavLink>
        <VNavLink to="/category/ev-ofis">EV & OFİS</VNavLink>
        <VNavLink to="/category/aksesuar">AKSESUAR</VNavLink>
        <VNavLink to="/category/seccade">SECCADE</VNavLink>
        <VNavLink to="/category/canta">ÇANTA</VNavLink>
        <VNavLink to="/category/tisort">TİŞÖRT</VNavLink>
        <VNavLink to="/category/cocuk">ÇOCUK</VNavLink>
        <VNavLink to="/hakkimizda">HAKKIMIZDA</VNavLink> 
        <NuxtLink to="/contact" class="nav-link-extra">İLETİŞİM</NuxtLink>
        <VNavLink to="/category/ihh">İHH</VNavLink> 
    </nav>
  </header>
</template>

<script setup lang="ts">
// Pinia Store'u bağlayarak sepet sayısını canlı alıyoruz
import { useCartStore } from '@/stores/cartStore';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const cartStore = useCartStore();

// Nuxt 3'te atomik bileşenler otomatik tanımlandığı için 
// config'de belirttiğimiz yollar sayesinde importlara gerek kalmaz
</script>

<style scoped>
/* Mevcut stillerin aynen korunuyor, sadece NuxtLink uyumu eklendi */
.main-header {
  border-bottom: 1px solid var(--color-border, #eee); 
  padding: 0 40px;
  background-color: var(--color-background-light, #fff);
}

.header-top-actions {
    display: flex;
    justify-content: flex-end; 
    padding: 10px 0 5px;
    align-items: center;
}

.actions {
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 14px;
}

.top-action-icon {
    font-size: 20px; 
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: #666;
    transition: color 0.2s;
}

.top-action-icon:hover {
    color: #1a237e;
}

.cart-count {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: #1a237e;
    color: white;
    font-size: 10px;
    border-radius: 50%;
    padding: 2px 5px;
    line-height: 1;
}

.header-logo-area {
    text-align: center; 
    padding: 10px 0;
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px 0;
  border-top: 1px solid #eee; 
  flex-wrap: wrap;
}

.nav-link-extra {
  text-decoration: none;
  color: #333;
  font-size: 13px;
  font-weight: bold;
}

.login-btn {
    margin-left: 10px; 
}
</style>