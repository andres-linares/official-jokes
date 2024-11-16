<script setup lang="ts">
import { computed } from "vue";
import { useJokeTypes } from "../composables/useJokeTypes";

const model = defineModel<string>({ required: true });

const { query } = useJokeTypes();

const data = computed(() => query.data.value || []);
</script>

<template>
  <div>
    <label for="">Joke Type</label>
    <select v-model="model">
      <option value="">All</option>
      <option v-for="type in data" :key="type" :value="type">
        {{ type }}
      </option>
    </select>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  margin-block: 2rem;
  gap: 0.25rem;
}

label {
  font-weight: 500;
}

select {
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background: var(--color-header);
  color: var(--color-header-text);
}
</style>
