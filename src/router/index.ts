import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage.vue'
import TaskPage from '@/views/TaskPage.vue'
import SearchPage from '@/views/SearchPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/task/:taskId',
      name: 'task',
      component: TaskPage,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage,
    },
  ],
})

export default router
