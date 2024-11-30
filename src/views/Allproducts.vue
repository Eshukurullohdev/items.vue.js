<script setup>
import { computed, ref } from 'vue';
import { useProductsStore } from '@/store/products'

const globalProductStore = useProductsStore()

let number = ref(1)
function activeQilish(a) {
    number.value = ref(a).value
}
const fiterProducts = computed(() => {
    if (number.value == 1) {
        return globalProductStore.allProducts
    } else {
        return globalProductStore.allProducts.filter((a) => {
            if (number.value == 2) {
                return a.name.toLocaleLowerCase() == 'strawberry'
            } else if (number.value == 3) {
                return a.name.toLocaleLowerCase() == 'berry'
            } else if (number.value == 4) {
                return a.name.toLocaleLowerCase() == 'lemon'
            }
        })
    }
})
</script>

<template>
    <div class="allproducts">
        <div class="allproducts_first">
            <h3>fresh and organic</h3>
            <h1 @click="globalProductStore.addToCart(1)">{{ globalProductStore.cart }}</h1>
        </div>
        <div class="allproducts_second container">
            <div class="allproducts_second-top">
                <ul>
                    <li :class="{ active: number == 1 }" @click="activeQilish(1)">all</li>
                    <li :class="{ active: number == 2 }" @click="activeQilish(2)">strawbery</li>
                    <li :class="{ active: number == 3 }" @click="activeQilish(3)">bery</li>
                    <li :class="{ active: number == 4 }" @click="activeQilish(4)">lemon</li>
                </ul>
            </div>
            <div class="products_box-wrapper container">
                <div v-for="p in fiterProducts" class="products_box">
                    <img :src="p.image" alt="">
                    <h3>{{ p.name }}</h3>
                    <p>per kg</p>
                    <h1>{{ p.cost }}</h1>
                    <a href="#" @click="CartModal.addToCart(p.name)">
                        <i class="fa-solid fa-shopping-cart"></i>
                        add to cart
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.allproducts_first {
    width: 100%;
    height: 60vh;
    background-color: #364b55;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.allproducts_first h3 {
    color: var(--ac);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-family: sans-serif;
}

.allproducts_first h1 {
    font-size: 50px;
    font-weight: 900;
    color: #fff;
    margin-top: 20px;
    font-family: sans-serif;
    line-height: 4rem;
}

.allproducts_second-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.allproducts_second-top ul {
    display: flex;
    align-items: center;
    justify-content: center;
}

.allproducts_second-top ul li {
    list-style: none;
    display: inline-block;
    font-weight: 700;
    font-size: 18px;
    margin: 15px;
    cursor: pointer;
    padding: 8px 20px;
    font-family: sans-serif;
    border-radius: 25px;
    border: 2px solid #051922;
    text-transform: capitalize;
}

.allproducts_second-top {
    padding-top: 150px;
}

.active {
    border: 2px solid var(--ac) !important;
    color: #fff;
    background-color: var(--ac);
    transition: 0.5s all ease;
}

.products_box {
    width: 380px;
    height: 573px;
    border-radius: 5px;
    box-shadow: 0 0 20px #e4e4e4;
    text-align: center;
    transition: 0.5s all ease;
    margin-bottom: 20px;
}

.products_box-wrapper {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
}

.products_box img {
    width: 90%;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: 0.3s all ease;
}

.products_box h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 2.25rem;
}

.products_box p {
    display: block;
    opacity: 0.8;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 1.8;
    columns: #051922;
}

.products_box h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.8;
    color: #051922;
}

.products_box a {
    text-decoration: none;
    background-color: #f28123;
    display: inline-block;
    padding: 10px 20px;
    transition: 0.3s all ease;
    color: #fff;
    border-radius: 50px;
    text-transform: capitalize;
}

.products_box a:hover {
    background-color: #051922;
    color: #f28123;
}

.products_box:hover {
    box-shadow: 0 0 0 0 transparent;
}
</style>