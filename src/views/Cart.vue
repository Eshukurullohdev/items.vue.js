<script setup>
import { useProductsStore } from "../store/products"
let products = useProductsStore()
</script>
<template>
    <div class="cart">
        <div class="cart_top">
            <h3>fresh and organic</h3>
            <h1>organic</h1>
        </div>
        <div class="cart_content container">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>products image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><img src="https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-2.jpg?raw=true"
                                alt=""></td>
                        <td>strawbery</td>
                        <td>85$</td>
                        <td><input type="number" value="0"></td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>total</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>subtotal</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>shipping</td>
                        <td>$40</td>
                    </tr>
                    <tr>
                        <td>total</td>
                        <td>$540</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
.cart_top {
    width: 100%;
    height: 60vh;
    background-color: var(--abs);
}

.cart_top {
    width: 100%;
    height: 60vh;
    background-color: #364b55;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.cart_top h3 {
    color: var(--ac);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-family: sans-serif;
}

.cart_top h1 {
    font-size: 50px;
    font-weight: 900;
    color: #fff;
    margin-top: 20px;
    font-family: sans-serif;
    line-height: 4rem;
}

.cart_content table img {
    max-width: 50px;
    height: 50px;
    width: 90%;
    border-radius: 5px;
}

.cart_content table {
    border: 1px solid #f9f9f9;
    width: 100%;
    border-collapse: collapse;
}

.cart_content table thead {
    border-bottom: 1px solid #eee;
    border-collapse: collapse;
}

.cart_content table thead tr {
    background-color: #efefef;
}

.cart_content table thead th {
    border-right: 1px solid #efefef;
    padding: 15px;
    font-weight: 500;
    text-align: center;
    font-family: sans-serif;
}

.cart_content table thead th:last-child {
    border-right: none;
}

.cart_content table td {
    border: 1px solid #efefef;
    padding: 20px 0;
    color: #051922;
    text-align: center;
}

.cart_content table td input {
    margin: 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
}

.cart_content table i {
    border: 0.5px solid #051922;
    padding: 1px;
    cursor: pointer;
    letter-spacing: 01px;
    color: #051922;
}

.cart_content {
    padding: 70px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.cart_content table:nth-child(2) {
    width: 40%;
    margin-left: 30px;
}

.cart_content table:nth-child(2) tr td {
    text-align: left;
    padding-left: 10px;
    font-family: sans-serif;
}
</style>