<script setup lang="ts">
import JokeItem from "../components/JokeItem.vue";
import { useFavorites } from "../composables/useFavorites";

const { query } = useFavorites();
</script>

<template>
  <ul>
    <JokeItem v-for="joke in query.data" :key="joke.id" :joke="joke" />
  </ul>
</template>
