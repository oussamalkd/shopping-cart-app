<script setup>
import TotalSales from '@/components/Analytics/TotalSales.vue'
import TrendingList from '@/components/Analytics/Trending/List.vue'
</script>

<template>
  <h1 class="text-3xl font-bold">Dashboard</h1>
  <div class="sales-amount max-w-xs">
    <TotalSales />
  </div>
  <div class="trnding-products-container">
    <TrendingList />
  </div>
</template>
