import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppAbout from '../views/AppAbout.vue'
import AppMenu from '../views/AppMenu.vue'
import AppGallery from '../views/AppGallery.vue'
import AppContacts from '../views/AppContacts.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/about', component: AppAbout },
  { path: '/menu', component: AppMenu },
  { path: '/gallery', component: AppGallery },
  { path: '/contacts', component: AppContacts }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router