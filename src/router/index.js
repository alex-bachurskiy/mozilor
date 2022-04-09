import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home';
import products from "../views/products";
import about from "../views/about";
import contact from "../views/contact";

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
  },
  {
    path: '/about-us',
    name: 'about',
    component: about
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  }
]


const router = new VueRouter({
  routes
})

export default router
