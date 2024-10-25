<template>
  <header>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/categories">Category</RouterLink>
        <RouterLink to="/promotions">Promotions</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
    </div> -->
    <div class="C">
      <Category/>
      <Promotion/>
      <Products/>
    </div>
  </header>
  <!-- <RouterView /> -->
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Category from './views/Category.vue';
import Promotion from './views/Promotion.vue';
import Products from './views/Products.vue';
</script>

<style scoped>
.C{
  display: flex;
  align-items: center;
  flex-direction: column;
}
/* .wrapper {
  padding: 20px;
  background-color: #f8f9fa;
}
  
nav {
  display: flex;
  gap: 10px;
} */
</style>
