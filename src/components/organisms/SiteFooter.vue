<template>
  <footer class="site-footer">
    <div class="footer-content">
      <VListGroup :title="links1.title" :links="links1.items" />
      <VListGroup :title="links2.title" :links="links2.items" />
      <VListGroup :title="links3.title" :links="links3.items" />

      <div class="newsletter">
        <h4>E-BÜLTEN KAYIT</h4>
        [cite_start]<p>Kampanyalarımızdan ve yeni ürünlerimizden haberdar olmak için e-bültenimize kayıt olun[cite: 30].</p>
        <div class="newsletter-form">
          <input type="email" placeholder="E-posta adresinizi giriniz..." class="input-email" />
          <VButton color="secondary" size="sm">KAYIT OL</VButton>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
        <VLogo type="text" />
        <div class="social-icons">
            [Sosyal Medya İkonları]
        </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import VListGroup from '@/components/molecules/VListGroup.vue';
import VButton from '@/components/atoms/VButton.vue';
import VLogo from '@/components/atoms/VLogo.vue';

// Orijinal sitedeki link başlıklarına göre Mock Veriler [cite: 8]
const links1 = {
  title: 'ALIŞVERİŞ BİLGİLERİ',
  items: [
    { text: 'Sipariş Takibi', to: '/siparis-takibi' },
    { text: 'Teslimat', to: '/teslimat' },
    { text: 'İptal ve İade Koşulları', to: '/iade-kosullari' },
    { text: 'Gizlilik', to: '/gizlilik' },
  ],
};

const links2 = {
  title: 'MÜŞTERİ HİZMETLERİ',
  items: [
    { text: 'İletişim', to: '/iletisim' },
  ],
};

const links3 = {
  title: 'KURUMSAL',
  items: [
    { text: 'Hakkımızda', to: '/hakkimizda' },
    { text: 'Tarihçe', to: '/tarihce' },
  ],
};
</script>

<style scoped>
.site-footer {
  background-color: #f7f7f7;
  padding: 40px 40px 20px 40px;
  border-top: 1px solid #eee;
  margin-top: 50px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 3 Link Grubu + 1 E-Bülten Alanı */
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.newsletter h4 {
  font-size: 14px;
  margin-bottom: 10px;
}

.newsletter p {
  font-size: 13px;
  color: #666;
  margin-bottom: 15px;
}

.newsletter-form {
  display: flex;
  gap: 5px;
}

.input-email {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    max-width: 1200px;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: repeat(2, 1fr); 
    }
}
</style>