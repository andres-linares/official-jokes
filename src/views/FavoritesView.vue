<script setup lang="ts">
import { computed } from "vue";
import { useFavorites } from "../composables/useFavorites";
import JokesList from "../components/JokesList.vue";
import EmptyState from "../components/EmptyState.vue";
import JokeTypeSelect from "../components/JokeTypeSelect.vue";
import JokesPaginator from "../components/JokesPaginator.vue";
import ErrorState from "../components/ErrorState.vue";

const { query, jokes, type, page, PAGE_SIZE, total } = useFavorites();

const data = computed(() => query.value.data);
const success = computed(() => query.value.isSuccess);
const fetching = computed(() => query.value.isFetching);
const loading = computed(() => query.value.isLoading);
const error = computed(() => query.value.isError);
</script>

<template>
  <template v-if="success && data.length > 0">
    <JokeTypeSelect v-model="type" />
    <JokesList :jokes="jokes" :loading="fetching" />
    <JokesPaginator v-model="page" :total="total" :per-page="PAGE_SIZE" />
  </template>

  <JokesList v-if="loading" :jokes="[]" :loading="fetching" />

  <EmptyState v-if="success && jokes.length === 0" title="No jokes yet">
    Go to the home page to add some jokes to your favorites.
  </EmptyState>
  <ErrorState v-if="error" title="Something went wrong">
    The servers might not been feeling well. Please try again later.
  </ErrorState>
</template>
