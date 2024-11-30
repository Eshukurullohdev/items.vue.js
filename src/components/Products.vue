<script setup>

</script>

<template>
    <div class="products">
        <div class="products_top container">
            <h1>
                <span>our</span>
                products
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa consequuntur atque sit aperiam eligendi!
            </p>
        </div>
        <div class="products_box-wrapper container">
            <div class="products_box">
                <img src="https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-1.jpg?raw=true"
                    alt="">
                <h3>strawbery</h3>
                <p>per kg</p>
                <h1>85$</h1>
                <a href="#">
                    <i class="fa-solid fa-shopping-cart"></i>
                    add to cart
                </a>
            </div>
            <div class="products_box">
                <img src="https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-2.jpg?raw=true"
                    alt="">
                <h3>Berry</h3>
                <p>per kg</p>
                <h1>70$</h1>
                <a href="#">
                    <i class="fa-solid fa-shopping-cart"></i>
                    add to cart
                </a>
            </div>
            <div class="products_box">
                <img src="https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-3.jpg?raw=true"
                    alt="">
                <h3>Lemon</h3>
                <p>per kg</p>
                <h1>35$</h1>
                <a href="#">
                    <i class="fa-solid fa-shopping-cart"></i>
                    add to cart
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.products {
    font-family: sans-serif;
    width: 100%;
    padding-top: 100px;
}

.products_top {
    width: 730px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.products_top h1 {
    font-size: 40px;
    margin-bottom: 40px;
    position: relative;
    font-family: sans-serif;
}

.products_top h1 span {
    color: #ffa500;
    text-transform: capitalize;
}

.products_top h1::before {
    position: absolute;
    content: "";
    width: 35%;
    left: 35%;
    height: 4px;
    background-color: orange;
    border-radius: 2px;
    bottom: -15px;
}

.products_top p {
    font-size: 15px;
    color: #555;
    line-height: 1.8;
    letter-spacing: 0.1px;
    font-weight: 400;
}

.products_box {
    width: 380px;
    height: 573px;
    border-radius: 5px;
    box-shadow: 0 0 20px #e4e4e4;
    text-align: center;
    transition: 1s all ease;
}

.products_box-wrapper {
    margin-top: 50px;
    display: flex;
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
    transition: 1s all ease;
}
</style>