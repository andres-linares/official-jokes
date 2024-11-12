<script setup lang="ts">
import { useFavorites } from "../composables/useFavorites";
import { Joke } from "../types/joke";

defineProps<{
  joke: Joke;
}>();

const { addFavorite } = useFavorites();
</script>

<template>
  <article>
    <h2>{{ joke.setup }}</h2>
    <p>{{ joke.punchline }}</p>
    <button @click="addFavorite(joke.id)">LIKE</button>
  </article>
</template>
