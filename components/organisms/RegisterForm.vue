<template>
  <div class="register-form-container">
    <h2>Yeni Üyelik</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="name">Ad Soyad</label>
        <VInput type="text" placeholder="Adınızı ve soyadınızı giriniz" v-model="name" id="name" />
      </div>
      <div class="form-group">
        <label for="email">E-posta</label>
        <VInput type="email" placeholder="E-posta adresinizi giriniz" v-model="email" id="email" />
      </div>
      <div class="form-group">
        <label for="phone">Telefon</label>
        <VInput type="tel" placeholder="Telefon numaranızı giriniz" v-model="phone" id="phone" />
      </div>
      <div class="form-group">
        <label for="password">Şifre</label>
        <VInput type="password" placeholder="Şifre" v-model="password" id="password" />
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="terms" v-model="termsAccepted">
        <label for="terms">Kullanım koşullarını okudum ve kabul ediyorum.</label>
      </div>

      <VButton type="submit" color="primary" size="lg" class="register-btn" :disabled="!termsAccepted">
        Kayıt Ol
      </VButton>
    </form>

    <p class="login-prompt">
      Zaten hesabınız var mı? 
      <router-link to="/login">Giriş Yapın</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VInput from '@/components/atoms/VInput.vue';
import VButton from '@/components/atoms/VButton.vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const termsAccepted = ref(false);

const handleRegister = () => {
  console.log('Kayıt Denemesi:', { name: name.value, email: email.value });
  // İleride API çağrısı buraya gelecek
};
</script>

<style scoped>
.register-form-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 14px;
}

.checkbox-group {
    text-align: left;
    margin-bottom: 20px;
    font-size: 13px;
}

.register-btn {
  width: 100%;
  margin-top: 20px;
}

.login-prompt {
    margin-top: 20px;
    font-size: 14px;
}
</style>