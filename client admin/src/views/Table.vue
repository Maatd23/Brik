<template>
  <div>
    <div
      id="btn new product"
      class="ml-auto mb-6 justify-end lg:w-[75%] xl:w-[80%] 2xl:w-[85%] px-6"
    >
      <div class="flex flex-col md:flex-row justify-end items-center text-gray-900">
        <button
          class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:text-white border-2 border-gray-900 focus:outline-none"
          @click="changeSection('productForm')"
        >
          Add Product
        </button>
      </div>
    </div>
    <section
      id="tabel-product"
      class="ml-auto mb-6 min-w-screen min-h-screen lg:w-[75%] xl:w-[80%] 2xl:w-[85%] px-6"
    >
      <!-- table -->
      <table class="border-collapse w-full">
        <thead>
          <tr>
            <th
              scope="col"
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >
              #
            </th>
            <th
              scope="col"
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >
              name
            </th>
            <th
              scope="col"
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >
              Image
            </th>
            <th
              scope="col"
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell w-1/3"
            >
              Description
            </th>
            <th
              scope="col"
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >
              Price
            </th>
            <th
              scope="col"
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >
              Stock
            </th>
            <th
              scope="col"
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <TableRow v-for="product in products" :key="product.id" :product="product" />
        </tbody>
      </table>
      <div class="w-full mt-5 mb-10 mx-auto">
        <nav aria-label="Page navigation example" class="flex justify-end">
          <ul class="inline-flex -space-x-px">
            <!-- Kode untuk Previous tetap sama -->
            <li class="cursor-pointer">
              <a
                v-if="currentPage > 1"
                @click.prevent="goToPage(currentPage - 1)"
                class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white select-none"
                >Previous</a
              >
              <span
                v-else
                class="bg-white border border-gray-300 text-gray-500 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-default select-none"
                >Previous</span
              >
            </li>
            <!-- Kode untuk pagination dengan class inline-flex -->
            <li v-for="(n, i) in displayedPages" :key="i">
              <a
                @click.prevent="$router.push({ path: '/product', query: { page: n, search } })"
                :class="
                  currentPage == n
                    ? 'bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white cursor-pointer select-none'
                    : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer select-none'
                "
                >{{ n }}</a
              >
            </li>
            <!-- Kode untuk Next tetap sama -->
            <li>
              <a
                v-if="currentPage < totalPage"
                @click.prevent="goToPage(Number(currentPage) + 1)"
                class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer select-none"
                >Next</a
              >
              <span
                v-else
                class="bg-white border border-gray-300 text-gray-500 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-default select-none"
                >Next</span
              >
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
  <!-- table product -->
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import TableRow from '../components/TableRow.vue'
import { useProductsStore } from '../stores/counter'
export default {
  components: { TableRow },
  data() {
    return {
      currentPage: this.$route.query.page || 1
    }
  },
  methods: {
    ...mapActions(useProductsStore, ['fecthProduct', 'fecthCategory']),
    goToPage(pageNumber) {
      this.$router.push({ path: '/product', query: { page: pageNumber } })
    }
  },
  computed: {
    ...mapWritableState(useProductsStore, ['products', 'totalPage', 'total', 'categories', 'skip']),
    displayedPages() {
      const limit = 5
      const totalPages = this.totalPage
      const start = Math.max(1, this.currentPage - Math.floor(limit / 2))
      const end = Math.min(start + limit - 1, totalPages)
      const pages = []
      if (end - start < 4) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        for (let i = start; i <= end; i++) {
          pages.push(i)
        }
      }
      return pages
    }
  },
  watch: {
    '$route.query'() {
      this.currentPage = this.$route.query.page
      this.skip = this.currentPage
      this.fecthProduct()
    }
  },
  created() {
    this.fecthProduct()
    this.fecthCategory()
    console.log(this.products)
  }
}
</script>

<style></style>
