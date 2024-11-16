<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps<{
  title: string;
}>();

const mounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    mounted.value = true;
  }, 100);
});
</script>

<template>
  <div class="empty-state" :class="{ mounted }">
    <img width="200" height="176" alt="" src="/cat.png" />

    <div class="empty-state-text">
      <h2>{{ title }}</h2>
      <p><slot /></p>
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 25rem;
  margin: 4rem auto;
  text-align: center;
  border: 1px solid #cecece96;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-alt);
  transform: scale(0);
}

.empty-state.mounted {
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.empty-state-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

h2 {
  font-size: 1.1rem;
  font-weight: 700;
}
</style>
