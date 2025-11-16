<template>
  <div class="login-form-container">
    <h2>Giriş Yap</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">E-posta</label>
        <VInput type="email" placeholder="E-posta adresinizi giriniz" v-model="email" id="email" />
      </div>
      <div class="form-group">
        <label for="password">Şifre</label>
        <VInput type="password" placeholder="Şifrenizi giriniz" v-model="password" id="password" />
        <router-link to="/forgot-password" class="forgot-link">Şifremi Unuttum?</router-link>
      </div>

      <VButton type="submit" color="primary" size="lg" class="login-btn">Giriş Yap</VButton>

      <p class="signup-prompt">
        Hesabınız yok mu? 
        <router-link to="/register">Hemen Kayıt Olun</router-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VInput from '@/components/atoms/VInput.vue';
import VButton from '@/components/atoms/VButton.vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Giriş Denemesi:', { email: email.value, password: password.value });
  // İleride API çağrısı ve oturum yönetimi buraya gelecek
};
</script>

<style scoped>
.login-form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
  position: relative;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 14px;
}

.forgot-link {
  position: absolute;
  right: 0;
  bottom: -18px;
  font-size: 12px;
  color: #777;
}

.login-btn {
  width: 100%;
  margin-top: 10px;
}

.signup-prompt {
    margin-top: 20px;
    font-size: 14px;
}
</style>