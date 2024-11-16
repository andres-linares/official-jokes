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
  --color-primary: #565b5a;
  --color-primary-text: #f5f5f5;

  background-color: var(--color-background);
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  color: var(--color-text);
}
</style>
