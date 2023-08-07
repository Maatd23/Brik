import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('product', {
  state: () => ({
    products: [],
    product: [],
    categories: [],
    total: null,
    totalPage: 0,
    skip: 1,
    loading: false,
    search: ''
  }),

  actions: {
    async fecthProduct() {
      try {
        const res = await fetch(`http://localhost:3000/products?page=${this.skip}`)
        console.log(res)
        if (!res.ok) {
          const text = await res.text()
          throw Error(text)
        }
        const data = await res.json()
        console.log(data)
        this.products = data.data
        this.totalPage = data.totalPage
        this.total = data.total
      } catch (error) {
        console.log(error)
      }
    },
    async fecthCategory() {
      try {
        const res = await fetch(`http://localhost:3000/categories`)
        if (!res.ok) {
          const text = await res.text()
          throw Error(text)
        }
        const data = await res.json()
        console.log(data)
        this.categories = data
      } catch (error) {
        console.log(error)
      }
    },
    async deleteProduct(id) {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`, {
          method: 'delete'
        })
        console.log(res)
        if (!res.ok) {
          const text = await res.text()
          throw new Error(text)
        }
        console.log('berhasil')
        await this.fecthProduct()
      } catch (error) {
        console.log(error)
      }
    },
    async fecthDetailProduct(id) {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`)
        if (!res.ok) {
          const text = await res.text()
          throw Error(text)
        }
        const data = await res.json()
        console.log(data)
        this.product = data
      } catch (error) {
        console.log(error)
      }
    },
    async addProduct(data) {
      try {
        const res = await fetch('http://localhost:3000/products', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if (!res.ok) {
          const text = await res.text()
          throw new Error(text)
        }
        await this.fecthProduct()
        this.router.push('/product')
      } catch (error) {
        console.log(error)
      }
    },
    async addUserAdmin(data) {
      try {
        const res = await fetch('http://localhost:3000/registers/admin', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if (!res.ok) {
          const text = await res.text()
          throw new Error(text)
        }
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async login(userData) {
      try {
        const response = await fetch(`http://localhost:3000/login`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })

        if (!response.ok) {
          const text = await response.json()
          throw new Error(text.message)
        }

        const data = await response.json()
        console.log(data)
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        localStorage.access_token = data.access_token
        localStorage.email = data.email
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: error.message
        })
      }
    }
  }
})
