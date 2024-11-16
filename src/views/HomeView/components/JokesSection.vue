<script setup lang="ts">
import { computed } from "vue";
import { useRandomJokes } from "../../../composables/useRandomJokes";
import JokesList from "../../../components/JokesList.vue";
import LoadingIntersector from "../../../components/LoadingIntersector.vue";

const { query } = useRandomJokes();

const data = computed(() => query.data.value || []);
const loading = computed(() => query.isFetchingNextPage.value);
</script>

<template>
  <section>
    <JokesList :jokes="data" />
    <LoadingIntersector :loading="loading" @intersect="query.fetchNextPage" />
  </section>
</template>

<style scoped>
section {
  margin-top: 5vh;
}
</style>
