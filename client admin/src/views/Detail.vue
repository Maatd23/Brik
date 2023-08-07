<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          :src="product.imgUrl"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            {{ product?.Category?.name }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }}</h1>

          <p class="leading-relaxed">
            {{ product.description }}
          </p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">{{ currency }}</span>
            <button
              class="flex ml-auto rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
            <button
              @click.prevent="deleteHandle(product.id)"
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapWritableState } from 'pinia'
import { useProductsStore } from '../stores/counter'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(useProductsStore, ['fecthDetailProduct', 'deleteProduct']),
    deleteHandle(id) {
      this.deleteProduct(id)
      this.$router.push('/product')
    }
  },
  computed: {
    ...mapWritableState(useProductsStore, ['product']),
    currency() {
      return this.product?.price?.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
      })
    }
  },
  created() {
    this.fecthDetailProduct(this.$route.params.id)
  }
}
</script>
<style></style>
