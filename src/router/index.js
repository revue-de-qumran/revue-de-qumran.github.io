import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History.vue')
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('../views/Board.vue')
    },
    {
      path: '/issues',
      name: 'issues',
      component: () => import('../views/Issues.vue')
    },

    {
      path: '/contributors',
      name: 'contributors',
      component: () => import('../views/Contributors.vue')
    },
    {
      path: '/datas',
      name: 'datas',
      component: () => import('../views/Datas.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/Tools.vue')
    },
    {
      path: '/cahiers',
      name: 'cahiers',
      component: () => import('../views/Cahiers.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
  ]
})

export default router