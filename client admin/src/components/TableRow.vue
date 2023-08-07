<template>
  <tr class="border-b-2 border-gray-300">
    <th scope="row" @click.prevent="$router.push(`/detail/${product.id}`)" class="cursor-pointer">
      {{ product.id }}
    </th>
    <td @click.prevent="$router.push(`/detail/${product.id}`)" class="cursor-pointer">
      {{ product.name }}
    </td>
    <td @click.prevent="$router.push(`/detail/${product.id}`)" class="cursor-pointer">
      <img class="w-80 h-48 mx-auto" :src="product.imgUrl" alt="" />
    </td>
    <td @click.prevent="$router.push(`/detail/${product.id}`)" class="cursor-pointer">
      {{ product.description }}
    </td>
    <td class="text-center cursor-pointer" @click.prevent="$router.push(`/detail/${product.id}`)">
      {{ currency }}
    </td>
    <td class="text-center">{{ product.stock }}</td>
    <td>
      <div class="text-center">
        <a data-bs-toggle="modal" data-bs-target="#exampleModal" href=""
          ><i
            class="fa-regular fa-pen-to-square hover:bg-gradient-to-r from-sky-600 to-cyan-400"
          ></i
        ></a>
        {{ '| ' }}
        <!-- <a href=""><i class="fa-solid fa-eye outline-orange"></i></a> {{ '| ' }} -->
        <a @click.prevent="deleteHandle(product.id)" href=""
          ><i class="fa-regular fa-trash-can hover:bg-gradient-to-r from-sky-600 to-cyan-400"></i
        ></a>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'pinia'
import { useProductsStore } from '../stores/counter'
export default {
  props: ['product'],
  methods: {
    ...mapActions(useProductsStore, ['deleteProduct']), // Corrected action name
    deleteHandle(id) {
      this.deleteProduct(id)
    }
  },
  computed: {
    currency() {
      return this.product.price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
      })
    }
  }
}
</script>

<style></style>
