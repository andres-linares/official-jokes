<script setup lang="ts">
defineProps<{
  disabled?: boolean;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <button :disabled="disabled" @click="emit('click')">
    <slot />
  </button>
</template>

<style scoped>
button {
  background: var(--color-primary);
  color: var(--color-primary-text);
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
}
</style>
