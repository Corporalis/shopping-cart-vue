<template>
  <div>
    <h1>Products</h1>
    <ProductItem
      v-for="product in products ?? []"
      :key="product.id"
      :product="product"
      @add="addToCart"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
  components: { ProductItem },
  computed: mapGetters(["products"]),
  methods: mapMutations(["addToCart"]),
});
</script>
