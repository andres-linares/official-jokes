<script setup lang="ts">
import MainLayout from "./layout/MainLayout.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style>
body {
  --page-max-width: 70rem;
  --color-background: #fff4e6;
  --color-background-alt: #fff;
  --color-text: #0d103a;
  --color-header: #565b5a;
  --color-header-text: #f5f5f5;

  background-color: var(--color-background);
  font-family: "Open Sans", sans-serif;
  color: var(--color-text);
}
</style>
