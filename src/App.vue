<script setup>
import { getCurrentInstance, inject, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/layouts/SideBar.vue'

const app = getCurrentInstance()
const axios = app.appContext.config.globalProperties.$axios

onMounted(async () => {
  const data = await $axios.get('/products')
  console.log(data)
})
</script>

<template>
  <header>
    <div class="wrapper">
      <SideBar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
