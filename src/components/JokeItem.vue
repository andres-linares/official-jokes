<script setup lang="ts">
import { useFavorites } from "../composables/useFavorites";
import { Joke } from "../types/joke";
import IconButton from "./IconButton.vue";
import IconStar from "../icons/IconStar.vue";
import { computed } from "vue";

const props = defineProps<{
  joke: Joke;
}>();

const { addFavorite, removeFavorite, isFavorite } = useFavorites();

const isJokeFavorite = computed(() => isFavorite.value(props.joke.id));

const handleClick = () => {
  if (isFavorite.value(props.joke.id)) {
    removeFavorite(props.joke.id);
  } else {
    addFavorite(props.joke.id);
  }
};
</script>

<template>
  <article>
    <sub>{{ joke.type }}</sub>
    <strong>{{ joke.setup }}</strong>
    <p>{{ joke.punchline }}</p>
    <IconButton label="favorite" @click="handleClick">
      <IconStar :filled="isJokeFavorite" />
    </IconButton>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
}

sub {
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
}
</style>
