<script setup lang="ts">
import { RouteName } from "../constants/routes";
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: RouteName.HOME }">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: RouteName.FAVORITES }">Favorites</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: aquamarine;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 2rem;
}
</style>
