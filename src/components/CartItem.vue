<script setup lang="ts">
import { defineProps } from "vue";
import { styled } from "@vvibe/vue-styled-components";

export interface CartItemProps {
  item: { id: number; name: string; price: number };
}

const StyledCartItem = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
`;

defineProps<CartItemProps>();
</script>

<template>
  <StyledCartItem>
    <h2>{{ item.name }}</h2>
    <p>{{ item.price }}</p>
  </StyledCartItem>
</template>
