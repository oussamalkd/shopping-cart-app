<script setup>
import ProductsList from '../components/Products/List.vue'
</script>

<template>
  <h1 class="page-title">Products:</h1>
  <div class="products-container">
    <ProductsList />
  </div>
</template>

<style lang="css" scoped>
.page-title {
  @apply text-3xl font-bold my-10;
}
</style>
