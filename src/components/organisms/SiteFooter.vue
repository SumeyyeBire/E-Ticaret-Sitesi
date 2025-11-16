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
          <VButton color="accent" size="sm" class="newsletter-btn">KAYIT OL</VButton> 
        </div>
      </div>
    </div>

  

    <div class="footer-bottom">
            <VLogo type="text" />
            <div class="social-icons">
                <VNavLink to="https://facebook.com" class="social-link">[F]</VNavLink>
                <VNavLink to="https://x.com" class="social-link">[X]</VNavLink>
                <VNavLink to="https://instagram.com" class="social-link">[I]</VNavLink>
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
  /* Global değişkeni kullanıyoruz */
  background-color: var(--color-background-footer); 
  padding: 40px 40px 20px 40px;
  border-top: 1px solid var(--color-border);
  margin-top: 50px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-border); /* Değişken kullanıldı */
}

/* Footer Link Grupları İçin Ek Stil */
.group-title {
    color: var(--color-text-dark); /* Başlıkları daha koyu yapar */
}
.link-list a {
    color: var(--color-text-light); /* Linkleri açık gri yapar */
    padding: 2px 0;
    display: block;
    font-size: 13px;
}

/* E-Bülten Alanı */
.newsletter h4 {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: bold;
  color: var(--color-text-dark);
}

.newsletter p {
  font-size: 13px;
  color: var(--color-text-light);
  margin-bottom: 15px;
}

.newsletter-form {
  /* Butonu input'a yapıştırmak için flex ve gap: 0 kullanıldı */
  display: flex;
  gap: 0;
}

.input-email {
  flex-grow: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-right: none; /* Butona yapıştırmak için */
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 38px;
  font-size: 14px;
}

/* Alt Bölüm */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-link {
  font-size: 18px;
  color: var(--color-text-dark);
}
.social-link:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .footer-content {
      grid-template-columns: repeat(2, 1fr); 
  }
}
</style>