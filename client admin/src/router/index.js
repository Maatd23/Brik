import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Table from '../views/Table.vue'
import AddProduct from '../views/AddProduct.vue'
import RegisterForm from '../views/RegisterForm.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashbord',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: Table
    },
    {
      path: '/add',
      name: 'productForm',
      component: AddProduct
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login', // Corrected the route definition
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' })
  } else if (to.name === 'login' && isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
