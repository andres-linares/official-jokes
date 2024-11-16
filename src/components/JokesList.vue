<script setup lang="ts">
import { Joke } from "../types/joke";
import JokeItem from "./JokeItem.vue";
import JokeSkeleton from "./JokeSkeleton.vue";

defineProps<{
  jokes: Joke[];
  loading: boolean;
}>();
</script>

<template>
  <ul>
    <li v-for="joke in jokes" :key="joke.id">
      <JokeItem :joke="joke" />
    </li>

    <template v-if="loading">
      <JokeSkeleton v-for="i in 10" :key="i" />
    </template>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
}
</style>
