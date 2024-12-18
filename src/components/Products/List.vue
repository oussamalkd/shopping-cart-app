<script lang="ts" setup>
import { getProducts } from '@/api'
import { onMounted, ref } from 'vue'
import Pagination from '../Elements/Pagination.vue'

const loading = ref(false)
const products = ref([])
const currentPage = ref(1)

const fetchProducts = async (page = 1) => {
  loading.value = true
  products.value = await getProducts({ page })
  currentPage.value = page
  loading.value = false
}

// fetch product on mounted
onMounted(async () => {
  fetchProducts()
})

//handle pagination
const handlePaginate = (page) => {
  fetchProducts(page)
}
</script>

<template>
  <div class="no-data-found" v-if="!loading && products.length === 0">
    <p>no products found</p>
  </div>
  <div v-else class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Total Sales</th>
        </tr>
      </thead>
      <tbody v-if="loading">
        <tr class="skeleton animate-pulse" v-for="i in 10" :key="i">
          <td><div class="bar"></div></td>
          <td><div class="bar"></div></td>
          <td><div class="bar"></div></td>
          <td><div class="bar"></div></td>
          <td><div class="bar"></div></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="product in products" :key="product.ProductID">
          <th>{{ product.ProductID }}</th>
          <td>{{ product.ProductName }}</td>
          <td>{{ product.Category }}</td>
          <td>${{ product.Price }}</td>
          <td>{{ product.TotalSales }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="products.length !== 0" class="pagination-container">
    <Pagination :currentPage="currentPage" @paginate="handlePaginate" />
  </div>
</template>

<style scoped>
@import '../../assets/css/components/products/list.css';
</style>
