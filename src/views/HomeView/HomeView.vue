<script setup lang="ts">
import { computed } from "vue";
import { useRandomJokes } from "../../composables/useRandomJokes";
import JokesList from "../../components/JokesList.vue";
import LoadingIntersector from "../../components/LoadingIntersector.vue";
import ErrorState from "../../components/ErrorState.vue";

const { query } = useRandomJokes();

const data = computed(() => query.data.value || []);
const loading = computed(() => query.isFetchingNextPage.value);
const error = computed(() => query.isError.value);
</script>

<template>
  <ErrorState v-if="error" title="Something went wrong">
    The servers might not been feeling well. Please try again later.
  </ErrorState>

  <section v-if="!error">
    <JokesList :jokes="data" />
    <LoadingIntersector :loading="loading" @intersect="query.fetchNextPage" />
  </section>
</template>

<style scoped>
section {
  margin-top: 5vh;
}
</style>
