<script setup>
import { onMounted } from 'vue'
import SideBar from './components/layouts/SideBar.vue'
import { getProducts } from './api'

onMounted(async () => {
  await getProducts()
})
</script>

<template>
  <div class="app">
    <div class="app-side-bar">
      <SideBar />
    </div>
    <main class="app-view">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  height: 100dvh;
  @apply w-full flex flex-row;
  .app-side-bar {
    @apply w-2/12;
  }
  .app-view {
    @apply w-10/12 h-full px-5 py-10;
  }
}
@media (min-width: 1024px) {
}
</style>
