<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import { CartModal } from './store';
</script>

<template>
  <div class="main">
    <div class="nav">
      <div class="nav_wrapper container">
        <a href="#">logo</a>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="#">abaut</a></li>
          <li><a href="#">pages</a></li>
          <li><a href="#">news</a></li>
          <li><a href="/cart/">cart
            </a></li>
          <li><a href="/shop/">shop </a></li>
        </ul>
        <div>
          <i class="fa-solid fa-shopping-cart"><span class="cart_count"></span></i>
          <i class="fa-solid fa-search"></i>
        </div>
      </div>
    </div>
    <RouterView />
    <Footer />
  </div>
</template>
<style scoped>
.nav {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 4px;
}

.nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav ul li {
  list-style: none;
  margin-right: 33px;
}

.nav ul a {
  text-decoration: none;
  color: #000;
  text-transform: capitalize;
  font-family: sans-serif;
  position: relative;
}

.nav a {
  text-decoration: none;
  color: #000;
}

.nav i {
  font-size: 18px;
  cursor: pointer;
  position: relative;
}

.nav .nav_wrapper div {
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.cart_count {
  position: absolute;
  font-size: 11px;
  top: -10px;
  color: orange;
  font-family: sans-serif;
}
</style>


