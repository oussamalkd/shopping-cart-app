<script setup>
const props = defineProps({
  currentPage: { default: 1 },
})

const emit = defineEmits(['paginate'])
</script>

<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="emit('paginate', currentPage - 1)">prev</button>
    <span>page {{ currentPage }}</span>
    <button @click="emit('paginate', currentPage + 1)">next</button>
  </div>
</template>
<style>
@import '../../assets/css/components/elements/pagination.css';
</style>
