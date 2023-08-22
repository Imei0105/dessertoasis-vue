import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SignIn.vue')
    },
    {

      path: '/cms',
      name: 'cms',
      component: () => import('../views/CmsView.vue')
    },
    {
      path: '/recbackground',
      name: 'recipebackground',
      component: () => import('../views/RecipeBackground.vue')
    }
  ]
})

export default router
