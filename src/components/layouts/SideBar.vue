<script lang="ts" setup></script>

<template>
  <aside class="side-bar">
    <div class="logo">
      <h1>Shopping Cart</h1>
    </div>
    <div class="side-bar-menu">
      <ul>
        <li>
          <RouterLink to="/">Dashboard</RouterLink>
        </li>
        <li>
          <RouterLink to="products">Products</RouterLink>
        </li>
      </ul>
    </div>
    <div class="side-bar-ations">
      <ul>
        <li>
          <a href="">Dark</a>
        </li>
      </ul>
    </div>
  </aside>
</template>
<style>
@import '../../assets/css/layouts/sidebar.css';
</style>
