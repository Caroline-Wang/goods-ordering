import Vue from 'vue'
import Router from 'vue-router'
import Menus from '@/components/pages/Menus'
import FoodList from '@/components/pages/FoodList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menus',
      component: Menus
    },
    {
      path: '/foodlist',
      name: 'foodlist',
      component: FoodList
    }
  ]
})
