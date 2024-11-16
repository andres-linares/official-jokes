<template>
  <div class="skeleton-card"></div>
</template>

<style scoped>
@keyframes skeleton {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.skeleton-card {
  min-height: 227px;
  background-color: #aeaeaec7;
  border-radius: 1rem;
  animation: skeleton 1.5s infinite alternate;
}
</style>
