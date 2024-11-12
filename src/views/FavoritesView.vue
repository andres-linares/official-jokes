<script setup lang="ts">
import { useFavorites } from "../composables/useFavorites";

const { query } = useFavorites();
</script>

<template>
  {{ query.data }}
</template>
