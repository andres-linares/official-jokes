<script setup lang="ts">
import { computed } from "vue";
import JokeItem from "../components/JokeItem.vue";
import { useFavorites } from "../composables/useFavorites";

const { query } = useFavorites();

const data = computed(() => query.value.data);
</script>

<template>
  <ul v-if="data && data.length > 0">
    <li v-for="joke in data" :key="joke.id">
      <JokeItem :joke="joke" />
    </li>
  </ul>
  <p v-else>No jokes favorited yet.</p>
</template>
