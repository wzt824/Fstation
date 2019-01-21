import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld  from '@/components/HelloWorld'
import Index from '../pages/Index'
import My from '../pages/My'
import Listen from '../pages/Listen'
import Vip from '../pages/Vip'
import Tuokx from '../pages/Tuokx'
import Products from '../pages/Products'
import Grade from '../pages/Grade'
import Grade2 from '../pages/Grade2'

import Shops from '../pages/Shops'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/Index',
      component: Index
    },
    {
      path: '/My',
      name:"My",
      component: My
    },
    {
      path: '/Listen',
      name:"Listen",
      component: Listen
    },
    {
      path: '/Vip',
      name:"Vip",
      component: Vip
    },
    {
      path: '/Tuokx',
      name:"Tuokx",
      component: Tuokx
    },
    {
      path: '/Products',
      name:"Products",
      component: Products
    },
    {
      path: '/Grade',
      name:"Grade",
      component: Grade
    },
    {
      path: '/Grade2',
      name:"Grade2",
      component: Grade2
    },
    {
      path: '/Shops',
      name:"Shops",
      component: Shops
    }
    // {
    //   path:"/",
    //   name: "Index",
    //   component:
    // }
  ]
})
