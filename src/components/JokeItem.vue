<script setup lang="ts">
import { useFavorites } from "../composables/useFavorites";
import { JOKE_COLORS } from "../constants/colors";
import IconStar from "../icons/IconStar.vue";
import { Joke } from "../types/joke";
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

const color = computed(() => {
  const randomIndex = Math.floor(Math.random() * JOKE_COLORS.length);
  return JOKE_COLORS[randomIndex];
});
</script>

<template>
  <button class="joke-card" :class="{ favorite: isJokeFavorite }" @click="handleClick">
    <div class="joke-text">
      <p class="joke-setup">{{ joke.setup }}</p>
      <p class="joke-punchline">{{ joke.punchline }}</p>
    </div>

    <sub class="joke-type">{{ joke.type }}</sub>
    <div v-if="isJokeFavorite" class="star">
      <IconStar filled />
    </div>
  </button>
</template>

<style scoped>
.joke-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: v-bind("color");
  box-shadow: 0 0 4px 0 v-bind("color");
  color: #fff;
  padding: 3rem 1.5rem 1rem;
  border-radius: 1rem;
  width: 20rem;
  gap: 3rem;
  text-align: center;
  line-height: 1.1;
  cursor: pointer;
  transition: transform 0.3s;
  height: 100%;
  position: relative;
}

.star {
  position: absolute;
  left: 1.5rem;
  bottom: 1rem;
}

.joke-text {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.joke-card:hover {
  transform: translateY(-0.25rem);
}

.joke-setup {
  font-weight: 700;
  white-space: break-spaces;
}

.joke-punchline {
  font-size: 1.1rem;
  font-weight: 600;
  white-space: break-spaces;
}

.joke-type {
  font-size: 0.8rem;
  margin-top: 3rem;
  color: #f4f4f4df;
  font-weight: 700;
  text-transform: uppercase;
  align-self: flex-end;
  margin-top: auto;
  letter-spacing: 0.02em;
}
</style>
