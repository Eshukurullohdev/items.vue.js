import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Technology from "../views/Technology.vue"
import Allproducts from "../views/Allproducts.vue"
import Cart from "../views/Cart.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/tech/",
      name: "technology",
      component: Technology
    },
    {
      path: "/shop/",
      name: "shop",
      component: Allproducts,
    },
    {
      path: "/cart/",
      name: "cart",
      component: Cart,
    },

  ]
})

export default router
