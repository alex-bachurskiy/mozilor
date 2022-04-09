import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home';
import products from "../views/products";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/products',
    name: 'products',
    component: products
  }
]


const router = new VueRouter({
  routes
})

export default router
