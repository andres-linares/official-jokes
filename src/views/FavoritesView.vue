<script setup lang="ts">
import { computed } from "vue";
import { useFavorites } from "../composables/useFavorites";
import JokesList from "../components/JokesList.vue";
import EmptyState from "../components/EmptyState.vue";
import JokeTypeSelect from "../components/JokeTypeSelect.vue";

const { query, jokes, type } = useFavorites();

const data = computed(() => query.value.data);
</script>

<template>
  <template v-if="data.length > 0">
    <JokeTypeSelect v-model="type" />
    <JokesList :jokes="jokes" />
  </template>
  <EmptyState v-else title="No jokes yet">
    Go to the home page to add some jokes to your favorites.
  </EmptyState>
</template>
