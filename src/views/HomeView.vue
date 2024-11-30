<script setup>
import SecondPage from '../components/SecondPage.vue'
import Products from '@/components/Products.vue';
</script>

<template>
  <div class="home">
    <div class="home_banner">
      <h4>FRESH ORGANIC</h4>
      <h1>Delicius Seasonal Fruits</h1>
      <div>
        <a href="#">fruit collection</a>
        <a href="#">contact us</a>
      </div>
    </div>
    <SecondPage />
    <Products />

  </div>
</template>

<style scoped>
.home_banner {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/pexels-evie-shaffer-2395249.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home_banner h4 {
  color: #f38123;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 7px;
  font-size: 15px;
}

.home_banner h1 {
  text-transform: capitalize;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.3;
  color: #333;
  margin: 15px 0 1.25rem 0;
}

.home_banner div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home_banner div a {
  text-decoration: none;
  text-transform: capitalize;
  background-color: #f38123;
  color: #fff;
  padding: 12px 25px;
  margin-right: 30px;
  border-radius: 30px;
  transition: 0.3s all ease;
}

.home_banner div a:last-child {
  background-color: transparent;
  border: 2px solid #f38123;
  color: black;
}

.home_banner div a:hover {
  background-color: black;
  color: #f38123;
}

.home_banner div a:last-child:hover {
  background-color: #f38123;
  color: #fff;
}
</style>
