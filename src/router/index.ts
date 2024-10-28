import { createRouter, createWebHistory } from 'vue-router'
import ApacheComponent from '@/components/ApacheComponent.vue'
import nodeJsComponent from '@/components/nodeJsComponent.vue'
import mongoDbComponent from '@/components/mongoDbComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ApacheComponent
    },
    {
      path: '/apache',
      name: 'apache',
      component: ApacheComponent
    },
    {
      path: '/nodeJs',
      name: 'nodejs',
      component: nodeJsComponent
    },
    {
      path: '/mongoDb',
      name: 'mongoDB',
      component: mongoDbComponent
    }
  ]
})

export default router
