<script setup lang="ts">
import JokeItem from "../../components/JokeItem.vue";
import { api } from "../../api";
import { useQuery } from "@tanstack/vue-query";
import JokesSection from "./components/JokesSection.vue";

const { data } = useQuery({
  queryFn: api.getRandomJoke,
  queryKey: ["random_joke"],
});
</script>

<template>
  <div class="main-joke">
    <JokeItem v-if="data" :joke="data" />
  </div>

  <JokesSection />
</template>

<style scoped>
.main-joke {
  display: grid;
  place-items: center;
  height: 25vh;
}
</style>
