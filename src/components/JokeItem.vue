<script setup lang="ts">
import { useFavorites } from "../composables/useFavorites";
import { Joke } from "../types/joke";

defineProps<{
  joke: Joke;
}>();

const { addFavorite, removeFavorite, isFavorite } = useFavorites();

const handleClick = (id: number) => {
  if (isFavorite.value(id)) {
    removeFavorite(id);
  } else {
    addFavorite(id);
  }
};
</script>

<template>
  <article>
    <h2>{{ joke.setup }}</h2>
    <p>{{ joke.punchline }}</p>
    <button @click="handleClick(joke.id)">{{ isFavorite(joke.id) }}</button>
  </article>
</template>
