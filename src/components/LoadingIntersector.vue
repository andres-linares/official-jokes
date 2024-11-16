<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  loading: boolean;
}>();

const emit = defineEmits<{
  intersect: [];
}>();

const observer = new IntersectionObserver((entries) => {
  if (props.loading) return;

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
  <div ref="intersector">
    <span v-if="loading" class="loader"></span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid var(--color-header);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
