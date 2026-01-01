import { defineStore } from 'pinia';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    loading: false
  }),
  actions: {
    // Kayıt Olma Senaryosu (Yazma İşlemi)
    async register(userData: any) {
      const { $db } = useNuxtApp();
      try {
        await addDoc(collection($db as any, "users"), {
          ...userData,
          createdAt: Date.now()
        });
        alert("Başarıyla kayıt oldunuz!");
        return true;
      } catch (e) {
        console.error("Kayıt hatası:", e);
        return false;
      }
    },
    // Giriş Yapma Senaryosu (Okuma ve Sorgulama)
    async login(email: string) {
        const { $db } = useNuxtApp();
        // Firestore'da bu email ile kullanıcı var mı bak
        const q = query(collection($db as any, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // İlk bulunan kullanıcıyı state'e kaydet
        this.user = querySnapshot.docs[0].data();
        return true;
        } else {
            alert("Kullanıcı bulunamadı veya bilgiler hatalı.");
        return false;
        }
    }
  }
});