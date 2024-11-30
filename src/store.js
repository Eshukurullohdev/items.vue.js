import { reactive } from "vue";
export const db = reactive({
    name: "Cart"
})



export const CartModal = reactive({
    cart: [],
    cartCount: 0,
    addToCart(a) {
        this.cart.push(a)
        this.cartCount++
    }
})