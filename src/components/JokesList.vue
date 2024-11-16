<script setup lang="ts">
import { Joke } from "../types/joke";
import JokeItem from "./JokeItem.vue";

defineProps<{
  jokes: Joke[];
}>();
</script>

<template>
  <ul>
    <li v-for="joke in jokes" :key="joke.id">
      <JokeItem :joke="joke" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
}
</style>
