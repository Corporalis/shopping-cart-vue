<template>
  <Container>
    <ProductItem
      v-for="product in products ?? []"
      :key="product.id"
      :product="product"
      @add="addToCart"
    />
  </Container>
</template>

<script setup lang="ts">
import { styled } from "@vvibe/vue-styled-components";

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
</script>

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
