import { defineStore } from 'pinia';
import { collection, addDoc } from 'firebase/firestore';
import type { UserMessage } from '@/types';

export const useMessageStore = defineStore('message', {
  actions: {
    async sendMessage(payload: UserMessage) {
      const { $db } = useNuxtApp();
      try {
        await addDoc(collection($db as any, "userMessages"), {
          ...payload,
          createdAt: Date.now()
        });
        return true;
      } catch (error) {
        console.error("Yazma hatası:", error);
        return false;
      }
    }
  }
});