import { createRouter, createWebHistory } from 'vue-router'
import Games from '@/views/Games.vue'


const routes = [
  {
    path: '/home/discover/games',
    component: Games,
    name: 'Games',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
