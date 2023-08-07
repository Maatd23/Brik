<script>
import { mapActions, mapWritableState } from 'pinia'
import { useProductsStore } from '../stores/counter'
export default {
  name: 'HomeView',
  data() {
    return {
      signUpInput: {
        email: '',
        password: '',
        phoneNumber: null,
        username: '',
        address: ''
      },
      errMsg: ''
    }
  },
  methods: {
    ...mapActions(useProductsStore, ['fecthProduct', 'fecthCategory'])
  },
  computed: {
    ...mapWritableState(useProductsStore, ['products', 'totalPage', 'total', 'categories'])
  },
  created() {
    this.fecthProduct()
    this.fecthCategory()
    console.log(this.products)
  }
}
</script>

<template>
  <section class="ml-24 mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div class="px-6 flex items-center justify-center mt-24 space-x-4 2xl:container">
      <!-- dashbord -->
      <div
        class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around shadow-md duration-200 hover:scale-105 hover:shadow-xl"
      >
        <img
          class="w-32 h-32"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMS41IDIzbC04LjUtNC41MzV2LTMuOTUzbDUuNCAzLjEyMiAzLjEtMy40MDZ2OC43NzJ6bTEtLjAwMXYtOC44MDZsMy4xNjIgMy4zNDMgNS4zMzgtMi45NTh2My44ODdsLTguNSA0LjUzNHptLTEwLjMzOS0xMC4xMjVsLTIuMTYxLTEuMjQ0IDMtMy4zMDItMy0yLjgyMyA4LjcxOC00LjUwNSAzLjIxNSAyLjM4NSAzLjMyNS0yLjM4NSA4Ljc0MiA0LjU2MS0yLjk5NSAyLjc3MSAyLjk5NSAzLjQ0My0yLjI0MiAxLjI0MXYtLjAwMWwtNS45MDMgMy4yNy0zLjM0OC0zLjU0MSA3LjQxNi0zLjk2Mi03LjkyMi00LjM3Mi03LjkyMyA0LjM3MiA3LjQyMiAzLjkzN3YuMDI0bC0zLjI5NyAzLjYyMi01LjIwMy0zLjAwOC0uMTYtLjA5Mi0uNjc5LS4zOTN2LjAwMnoiLz48L3N2Zz4="
        />
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800">{{ total }}</h1>
          <span class="text-gray-500">product</span>
        </div>
      </div>
      <div
        class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around shadow-md duration-200 hover:scale-105 hover:shadow-xl"
      >
        <img
          class="w-32 h-32"
          src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTguODkxIDE5LjQ5OGgtMTMuNzgybC0xLjUyLTkuNTAxaDE2LjgyM3ptLTE0LjMwNi0xMi41MDZoMTQuODY4bC0uMjI3IDEuNTA2aC0xNC40MTV6bS45OTMtMi40OTRoMTIuODgybC0uMTMuOTgzaC0xMi42MjN6bTE2LjQyMSA0Ljk5OGMwLS41NTgtLjQ1Ni0uOTk4LTEuMDAxLS45OThoLS4yNTNjLjMwOS0yLjA2NC4yODktMS45MTEuMjg5LTIuMDA5IDAtLjU4LS40NjktMS4wMDgtMS0xLjAwOGgtLjE4OWMuMTkzLTEuNDYxLjE4Ny0xLjM5OS4xODctMS40ODIgMC0uNjcxLS41NzUtMS4wMDEtMS4wMDEtMS4wMDFoLTE0LjAyNGMtLjUzNiAwLTEuMDAxLjQzMy0xLjAwMSAxIDAgLjA4My0uMDA4LjAxMy4xODggMS40ODNoLS4xOWMtLjUyNCAwLTEuMDAxLjQyMi0xLjAwMSAxLjAwNyAwIC4xMDEtLjAxNi0uMDI3LjI5IDIuMDFoLS4yOTFjLS41NjkgMC0xLjAwMS40NjQtMS4wMDEuOTk5IDAgLjExOC0uMTA1LS41ODIgMS42OTQgMTAuNjU5LjA3Ny40ODYuNDk2Ljg0Mi45ODguODQyaDE0LjYzNWMuNDkyIDAgLjkxMS0uMzU2Ljk4OC0uODQyIDEuODAxLTExLjI1IDEuNjkzLTEwLjU0IDEuNjkzLTEwLjY2eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"
        />
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800">{{ categories?.length }}</h1>
          <span class="text-gray-500">Categories</span>
        </div>
      </div>
    </div>
  </section>
</template>
