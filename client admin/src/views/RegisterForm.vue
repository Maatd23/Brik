<template>
  <section id="add-new-prodcut" class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div class="flex items-center justify-center 2xl:container">
      <div class="mx-auto w-full max-w-[550px] max-w-sm mx-auto p-2 bg-white">
        <div
          class="mx-auto w-full max-w-[550px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 shadow-xl"
        >
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <form @submit.prevent="Sign">
            <input
              type="text"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-5"
              v-model="signUpInput.username"
              placeholder="User Name"
            />

            <input
              type="text"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-5"
              v-model="signUpInput.email"
              placeholder="Email"
            />

            <input
              type="password"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-5"
              v-model="signUpInput.password"
              placeholder="Password"
            />
            <div
              class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
              v-if="errMsg"
            >
              <span class="font-medium">Password!</span> <span>{{ errMsg }}</span
              >.
            </div>
            <input
              type="text"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-5"
              v-model="signUpInput.phoneNumber"
              placeholder="Phone Number"
            />

            <input
              type="text"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-5"
              name="adress"
              v-model="signUpInput.address"
              placeholder="adress"
            />

            <button
              type="submit"
              class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia'
import { useProductsStore } from '../stores/counter'
export default {
  name: 'user',
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
    ...mapActions(useProductsStore, ['addUserAdmin']),
    Sign() {
      this.addUserAdmin(this.signUpInput)
    }
  }
}
</script>

<style></style>
