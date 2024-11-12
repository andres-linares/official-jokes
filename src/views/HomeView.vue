<script setup lang="ts">
import JokeItem from "../components/JokeItem.vue";
import { api } from "../api";
import { useQuery } from "@tanstack/vue-query";

const { data } = useQuery({
  queryFn: api.getRandomJoke,
  queryKey: ["random_joke"],
});
</script>

<template>
  <JokeItem v-if="data" :joke="data" />
</template>
