<template>
  <section id="add-new-prodcut" class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div class="flex items-center justify-center 2xl:container">
      <div class="mx-auto w-full max-w-[550px] max-w-sm mx-auto p-2 bg-white"></div>
    </div>
    <div class="px-6 flex items-center justify-center space-x-4 2xl:container">
      <div
        class="mx-auto w-full max-w-[550px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 shadow-xl"
      >
        <h2 class="font-medium text-[#07074D] mx-auto text-2xl text-center mb-5">
          {{ productData ? 'edit Product' : 'Add New Product' }}
        </h2>
        <form @submit.prevent="productData ? updateProduct() : addNewProduct()">
          <div class="mb-5">
            <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
              Product name
            </label>
            <input
              type="text"
              v-model="newProduct.name"
              id="name"
              placeholder="Product name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label for="subject" class="mb-3 block text-base font-medium text-[#07074D]">
              category
            </label>
            <select
              id="Category"
              v-model="newProduct.categoryId"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="" selected disabled>---select category---</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="mb-5">
            <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
              imageUrl
            </label>
            <input
              type="text"
              id="name"
              v-model="newProduct.imgUrl"
              placeholder="image Url"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label for="description" class="mb-3 block text-base font-medium text-[#07074D]">
              description
            </label>
            <textarea
              rows="4"
              v-model="newProduct.description"
              id="description"
              placeholder="Type your description"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div class="mb-5">
            <label for="subject" class="mb-3 block text-base font-medium text-[#07074D]">
              stock
            </label>
            <input
              type="number"
              v-model="newProduct.stock"
              id="subject"
              placeholder="Enter your subject"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label for="subject" class="mb-3 block text-base font-medium text-[#07074D]">
              Price
            </label>
            <input
              type="number"
              v-model="newProduct.price"
              id="subject"
              placeholder="Enter your subject"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <button
              class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { useProductsStore } from '../stores/counter'
export default {
  name: 'productForm',
  data() {
    return {
      newProduct: {
        name: '',
        description: '',
        categoryId: null,
        stock: null,
        price: null,
        imgUrl: ''
      },
      productData: this.productData
    }
  },
  methods: {
    ...mapActions(useProductsStore, ['fecthCategory', 'addProduct']),
    addNewProduct() {
      console.log(this.newProduct)
      this.addProduct({
        name: this.newProduct.name,
        description: this.newProduct.description,
        categoryId: this.newProduct.categoryId,
        stock: this.newProduct.stock,
        price: this.newProduct.price,
        imgUrl: this.newProduct.imgUrl
      })
    }
  },
  computed: {
    ...mapWritableState(useProductsStore, ['categories'])
  },
  created() {
    this.fecthCategory()
  }
}
</script>

<style></style>
