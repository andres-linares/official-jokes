<script setup lang="ts">
import { computed } from "vue";
import { useFavorites } from "../composables/useFavorites";
import JokesList from "../components/JokesList.vue";

const { query } = useFavorites();

const data = computed(() => query.value.data);
</script>

<template>
  <JokesList v-if="data.length > 0" :jokes="data" />
  <p v-else>No jokes favorited yet.</p>
</template>
