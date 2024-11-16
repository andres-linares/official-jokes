<script setup lang="ts">
import { computed } from "vue";
import { useFavorites } from "../composables/useFavorites";
import JokesList from "../components/JokesList.vue";
import EmptyState from "../components/EmptyState.vue";

const { query } = useFavorites();

const data = computed(() => query.value.data);
</script>

<template>
  <JokesList v-if="data.length > 0" :jokes="data" />
  <EmptyState v-else title="No jokes yet">
    Go to the home page to add some jokes to your favorites.
  </EmptyState>
</template>
