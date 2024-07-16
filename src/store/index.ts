// src/store/index.ts

import { createStore } from "vuex";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface State {
  products: Product[];
  cart: Product[];
}

const store = createStore<State>({
  state: {
    products: [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
    ],
    cart: [],
  },
  mutations: {
    addToCart(state, product: Product) {
      state.cart.push(product);
    },
  },
  actions: {},
  getters: {
    cartItems: (state) => state.cart,
    products: (state) => state.products,
  },
});

export default store;
