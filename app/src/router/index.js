import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view',
      component: () => import('@/pages/home.vue'),
      children: [
        {
          path: '/',
          name: 'kitchen',
          component: () => import('@/pages/views/kitchen.vue')
        },
        {
          path: '/more',
          name: 'more',
          component: () => import('@/pages/views/more.vue')
        }
      ]
    },
    {
      path: '/img',
      name: 'img',
      component: () => import('@/pages/img.vue')
    }
  ]
})
