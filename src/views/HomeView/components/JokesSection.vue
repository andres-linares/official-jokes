<script setup lang="ts">
import { computed } from "vue";
import { useRandomJokes } from "../../../composables/useRandomJokes";
import JokesList from "../../../components/JokesList.vue";
import LoadingIntersector from "../../../components/LoadingIntersector.vue";

const { query } = useRandomJokes();

const data = computed(() => query.data.value?.pages[0]);
const loading = computed(() => query.isFetching.value);
</script>

<template>
  <section>
    <div>
      <h2>Jokes</h2>
    </div>
    <JokesList v-if="data" :jokes="data" />
    <LoadingIntersector :loading="loading" @intersect="query.fetchNextPage" />
  </section>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
