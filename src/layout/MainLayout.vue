<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <main>
    <div class="main-container">
      <slot />
    </div>
  </main>
</template>

<style scoped>
main {
  margin-block: 2rem;
  padding-inline: 2rem;
}

.main-container {
  margin-inline: auto;
  max-width: var(--page-max-width);
}
</style>
