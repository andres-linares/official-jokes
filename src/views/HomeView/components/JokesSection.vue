<script setup lang="ts">
import { computed } from "vue";
import JokeItem from "../../../components/JokeItem.vue";
import { useRandomJokes } from "../../../composables/useRandomJokes";

const { query } = useRandomJokes();

const data = computed(() => query.data.value);
</script>

<template>
  <section>
    <h2>Jokes</h2>
    <ul>
      <li v-for="joke in data" :key="joke.id">
        <JokeItem :joke="joke" />
      </li>
    </ul>
  </section>
</template>
