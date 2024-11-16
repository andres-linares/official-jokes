<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps<{
  loading: boolean;
}>();

const emit = defineEmits<{
  intersect: [];
}>();

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    emit("intersect");
  }
});

const intersector = ref<HTMLElement | null>(null);

onMounted(() => {
  observer.observe(intersector.value!);
});
</script>

<template>
  <div ref="intersector">{{ loading }}</div>
</template>
