<template>
  <div>
    <h1>Cart</h1>
    <div v-if="cartItems.length">
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default defineComponent({
  components: { CartItem },
  computed: mapGetters(["cartItems"]),
});
</script>
