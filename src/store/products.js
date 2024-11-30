import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
    state: () => ({
        allProducts: [
            {
                name: "Strawberry",
                cost: "85$",
                image: "https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-1.jpg?raw=true"
            }, {
                name: "Berry",
                cost: "35$",
                image: "https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-2.jpg?raw=true"
            },
            {
                name: "Lemon",
                cost: "20$",
                image: "https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-3.jpg?raw=true"
            },
            {
                name: "Kivi",
                cost: "2$",
                image: "https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-4.jpg?raw=true"
            },
            {
                name: "Olma",
                cost: "99$",
                image: "https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-5.jpg?raw=true"
            },
            {
                name: "malina",
                cost: "200$",
                image: "https://github.com/hwandev12/rasm/blob/main/assets/img/products/product-img-6.jpg?raw=true"
            },
        ],
        cart: []
    }),
    actions: {
        addToCart(product) {
            this.cart.push(product)
        }
    }
})