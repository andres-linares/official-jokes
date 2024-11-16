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
  background: var(--color-header);
  color: var(--color-header-text);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 2rem;
  position: sticky;
  top: 0;
}

nav {
  max-width: var(--page-max-width);
  margin-inline: auto;
}

ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  gap: 1.5rem;
}

a {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

a.router-link-active {
  text-decoration: underline;
  font-weight: 600;
}
</style>
