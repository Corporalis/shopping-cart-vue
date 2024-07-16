<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from "vue";
import { styled } from "@vvibe/vue-styled-components";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
}

export interface ProductItemProps {
  product: ProductProps;
}

const StyledProduct = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
`;

const props = defineProps<ProductItemProps>();
const {
  product: { value: product },
} = toRefs(props);

const emit = defineEmits<{
  add: [product: ProductProps];
}>();

function add() {
  emit("add", product);
}
</script>

<template>
  <StyledProduct>
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
    <button @click="add">Add to Cart</button>
  </StyledProduct>
</template>
