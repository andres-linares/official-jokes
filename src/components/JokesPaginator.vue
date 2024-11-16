<script setup lang="ts">
import AppButton from "./AppButton.vue";

const model = defineModel<number>({ required: true });

defineProps<{
  total: number;
  perPage: number;
}>();
</script>

<template>
  <div class="paginator">
    <AppButton :disabled="model === 1" @click="model--">Previous</AppButton>
    <span>{{ model }} / {{ Math.ceil(total / perPage) }}</span>
    <AppButton :disabled="model === Math.ceil(total / perPage)" @click="model++">
      Next
    </AppButton>
  </div>
</template>

<style scoped>
.paginator {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;
  margin-block: 2rem;
}
</style>
