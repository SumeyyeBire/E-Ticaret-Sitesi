// plugins/firebase.client.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyDPFFL60oCjT1GUMnD7TAzgtgkO-8fJgRw",
    authDomain: "gencatolyeproject.firebaseapp.com",
    projectId: "gencatolyeproject",
    storageBucket: "gencatolyeproject.firebasestorage.app",
    messagingSenderId: "412620431214",
    appId: "1:412620431214:web:b8c958f6a988af86376b7f"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return {
    provide: {
      db: db
    }
  };
});