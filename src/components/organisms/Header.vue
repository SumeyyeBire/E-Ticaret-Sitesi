<template>
  <header class="main-header">
    <div class="header-top-actions">
        <div class="space-filler"></div> 

        <div class="actions">
          <span class="top-action">Türkiye - TRY</span>
    
          <router-link to="/login" class="top-action-icon" title="Hesabım">
            &#128100; </router-link>
    
          <span class="top-action-icon" title="Arama">
            &#128269; </span>
    
          <router-link to="/cart" class="top-action-icon" title="Sepetim">
           &#128722; <span class="cart-count">0</span> </router-link>
    
          <VButton color="primary" size="sm" to="/login" class="login-btn">Giriş Yap</VButton>
        </div>
    </div>
    
    <div class="header-logo-area">
        <VLogo /> 
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
        <VNavLink to="/hakkimizda">HAKKIMIZDA</VNavLink> <VNavLink to="/iletisim">İLETİŞİM</VNavLink>
        <VNavLink to="/ihh">İHH</VNavLink> </nav>
  </header>
</template>

<script setup lang="ts">
import VLogo from '@/components/atoms/VLogo.vue';
import VButton from '@/components/atoms/VButton.vue';
import VNavLink from '@/components/molecules/VNavLink.vue'; 
</script>

<style scoped>
.main-header {
  border-bottom: 1px solid var(--color-border); 
  padding: 0 40px;
  background-color: var(--color-background-light);
}

.header-top-actions {
    /* Logo'nun üzerindeki aksiyonlar sağa hizalanır */
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

.top-action {
    color: var(--color-text-light);
}

/* YENİ STİLLER (İkonlar için) */

.top-action-icon {
    font-size: 20px; /* İkon boyutunu büyütme */
    cursor: pointer;
    position: relative;
    color: var(--color-text-light); /* İkon rengi de açık gri */
    transition: color 0.2s;
}

.top-action-icon:hover {
    color: var(--color-primary); /* Vurgu rengine dönüş */
}

.cart-count {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: var(--color-primary);
    color: white;
    font-size: 10px;
    border-radius: 50%;
    padding: 2px 5px;
    line-height: 1;
}
/* YENİ STİLLER BİTİŞ */


.header-logo-area {
    /* VLogo bileşenini ortalamak için */
    text-align: center; 
    padding: 10px 0;
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px 0;
  border-top: 1px solid var(--color-border); 
  flex-wrap: wrap;
}

.login-btn {
    margin-left: 10px; 
}
</style>