<script setup lang="ts">
import { computed } from "vue";
import { useFavorites } from "../composables/useFavorites";
import JokesList from "../components/JokesList.vue";
import EmptyState from "../components/EmptyState.vue";
import JokeTypeSelect from "../components/JokeTypeSelect.vue";
import JokesPaginator from "../components/JokesPaginator.vue";

const { query, jokes, type, page, PAGE_SIZE, total } = useFavorites();

const data = computed(() => query.value.data);
const success = computed(() => query.value.isSuccess);
</script>

<template>
  <template v-if="data.length > 0">
    <JokeTypeSelect v-model="type" />
    <JokesList :jokes="jokes" />
    <JokesPaginator v-model="page" :total="total" :per-page="PAGE_SIZE" />
  </template>
  <EmptyState v-if="success && data.length === 0" title="No jokes yet">
    Go to the home page to add some jokes to your favorites.
  </EmptyState>
</template>
