<template>
  <div class="auth-container">
    <h2>Yeni Hesap Oluştur</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="form.fullName" placeholder="Ad Soyad" required />
      <input v-model="form.email" type="email" placeholder="E-posta" required />
      <input v-model="form.password" type="password" placeholder="Şifre" required />
      <button type="submit">Kayıt Ol</button>
    </form>
    <NuxtLink to="/login">Zaten hesabım var</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
const authStore = useAuthStore();

const form = ref({ fullName: '', email: '', password: '' });

const handleRegister = async () => {
  // Formdaki verileri alıp store içindeki register fonksiyonuna gönderiyoruz
  const result = await authStore.register(form.value);
  if (result) {
    alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
    useRouter().push('/login');
  }
};
</script>