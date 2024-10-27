<template>
  <header>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/categories">Category</RouterLink>
        <RouterLink to="/promotions">Promotions</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
    </div> -->
        <HeaderBar/>
        <Category/>
        <Promotion/>

        <HeaderBar
        title="Popular Product"
        paddingTop="10px"
        paddingBottom="0px"/>
     
        <Products/>
  </header>
  <!-- <RouterView /> -->
</template>

<script setup>
import Products from './views/Products.vue';
import Category from './views/Category.vue';
import HeaderBar from './views/HeaderBar.vue';
import Promotion from './views/Promotion.vue';

</script>

<style scoped>
</style>
