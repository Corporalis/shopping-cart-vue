<template>
  <div id="app">
    <nav>
      <router-link to="/">Products</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
nav {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

a {
  text-decoration: none;
  color: #42b983;
}

a.router-link-exact-active {
  font-weight: bold;
}
</style>
