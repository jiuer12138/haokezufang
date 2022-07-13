import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/home',
    component: () => import('@/views/Layout/Home'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/Layout/List')
      },
      {
        path: 'news',
        component: () => import('@/views/Layout/News')
      },
      {
        path: 'profiles',
        name: 'Profiles',
        component: () => import('@/views/Layout/Profiles')
      }
    ]
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
