<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBarVue from './components/SideBar.vue'
</script>

<template>
  <div>
    <header v-if="$route.name !== 'login'">
      <div class="wrapper">
        <SideBarVue />
      </div>
    </header>
    <div :class="{ 'mt-36': $route.name != 'login' }">
      <RouterView />
    </div>
  </div>
</template>

<style></style>
