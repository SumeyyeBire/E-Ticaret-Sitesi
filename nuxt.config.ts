export default defineNuxtConfig({
  compatibilityDate: '2025-12-21', // Terminaldeki tavsiye edilen tarih uyarısı için
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  css: [
    '@/assets/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  components: [
    { path: '~/components/atoms', pathPrefix: false },
    { path: '~/components/molecules', pathPrefix: false },
    { path: '~/components/organisms', pathPrefix: false },
    '~/components'
  ]
})