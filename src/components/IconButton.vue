<script setup lang="ts">
defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <button :aria-label="label" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;
  width: fit-content;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
