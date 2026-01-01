<template>
  <div style="max-width: 400px; margin: 0 auto; padding: 50px;">
    <h2 style="text-align: center; margin-bottom: 20px;">Giriş Yap</h2>
    
    <form @submit.prevent="handleLogin">
      <div style="margin-bottom: 15px;">
        <input 
          v-model="email" 
          type="email" 
          placeholder="E-posta" 
          style="width: 100%; padding: 10px;" 
          required 
        />
      </div>
      <div style="margin-bottom: 15px;">
        <input 
          v-model="password" 
          type="password" 
          placeholder="Şifre" 
          style="width: 100%; padding: 10px;" 
          required 
        />
      </div>
      
      <button 
        type="submit" 
        style="width: 100%; padding: 12px; background: #1a237e; color: white; border: none; cursor: pointer;"
        :disabled="loading"
      >
        {{ loading ? 'Bekleyiniz...' : 'Giriş Yap' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';

definePageMeta({
  layout: 'auth' //
});

const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const loading = ref(false);

const handleLogin = async () => {
  console.log("Giriş butonuna basıldı. Email:", email.value); // Bu satırı konsolda görmelisin
  
  if (!email.value || !password.value) {
    alert("Lütfen alanları doldurun.");
    return;
  }

  loading.value = true;
  try {
    //
    const success = await authStore.login(email.value);
    
    if (success) {
      console.log("Giriş başarılı, yönlendiriliyor...");
      // navigateTo yerine alternatif olarak useRouter kullanalım
      const router = useRouter();
      router.push('/');
    } else {
      console.warn("Giriş başarısız.");
    }
  } catch (error) {
    console.error("Giriş hatası:", error);
  } finally {
    loading.value = false;
  }
};
</script>