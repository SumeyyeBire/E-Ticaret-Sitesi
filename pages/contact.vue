<template>
  <div class="contact-page">
    <h2>Bize Yazın</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="form.fullName" placeholder="Ad Soyad" required />
      <input v-model="form.email" type="email" placeholder="E-posta" required />
      <textarea v-model="form.content" placeholder="Mesajınız"></textarea>
      <button type="submit">Gönder</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores/messageStore';
const messageStore = useMessageStore();

const form = ref({ fullName: '', email: '', content: '' });

const handleSubmit = async () => {
  const success = await messageStore.sendMessage(form.value);
  if (success) {
    alert("Mesajınız Firestore'a yazıldı!");
    form.value = { fullName: '', email: '', content: '' };
  }
};
</script>