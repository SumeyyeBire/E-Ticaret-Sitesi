import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue') 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartPage.vue')
    },
    {
    path: '/register', // Header'daki "Hemen Kayıt Olun" linki buraya yönlendirir
    name: 'register',
    component: () => import('@/views/RegisterPage.vue') 
    },
    {
    path: '/product/:id', // Ürün ID'sini rota parametresi olarak alacak
    name: 'productDetail',
    component: () => import('@/views/ProductDetail.vue') 
    },
    {
     // Dinamik slug (firsat, canta, kirtasiye vb. için geçerli olacak)
    path: '/:slug', 
    name: 'categoryListing',
    component: () => import('@/views/CategoryPage.vue') 
     // Buraya gelen tüm bilinmeyen rotaları CategoryPage'e yönlendirir
    },
    // Diğer rotalar buraya gelecek
  ]
})

export default router