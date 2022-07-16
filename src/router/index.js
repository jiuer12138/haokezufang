import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Layout/Home')
      },
      {
        path: '/home/list',
        component: () => import('@/views/Layout/List')
      },
      {
        path: '/home/news',
        component: () => import('@/views/Layout/News')
      },
      {
        path: '/home/profiles',
        name: 'Profiles',
        component: () => import('@/views/Layout/Profiles')
      }
    ]
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '*',
    component: () => import('@/views/NotFound')
  }
]

const router = new VueRouter({
  routes
})

export default router
