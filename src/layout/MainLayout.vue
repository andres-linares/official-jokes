<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <main>
    <slot />
  </main>
</template>

<style scoped>
main {
  max-width: var(--page-max-width);
  margin-inline: auto;
  margin-block: 2rem;
}
</style>
