/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import Account from '@/pages/Account.vue'
import ArticleDetail from '@/pages/ArticleDetail.vue'
import ArticleSearch from '@/components/ArticleSearch.vue'
import Cart from '@/pages/Cart.vue'
import Home from '@/pages/Home.vue'
import List from '@/pages/List.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import HistoricOrder from '@/pages/HistoricOrder.vue'
import Order from '@/pages/Order.vue'


const routes=[
  {
    path:'/',component:Home
  },
  {
    path:'/search',
    component:ArticleSearch
  },
  {
    path:'/article/:id',
    component:ArticleDetail
  },
  {
    path:'/account',
    component:Account
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/list',
    component:List
  },
  {
    path:'/historic-order',
    component:HistoricOrder
  },
  {
    path:'/order',
    component:Order
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
