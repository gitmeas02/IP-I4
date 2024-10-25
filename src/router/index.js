import Category from '@/views/Category.vue'
import Products from '@/views/Products.vue'
import Promotion from '@/views/Promotion.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/categories',
    name: 'Category',
    component: Category
  },
  {
    path: '/products',
    name: 'Products',
    component:Products
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: Promotion
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router