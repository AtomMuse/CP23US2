<script setup>
import { ref, watchEffect } from 'vue';
import { useLoading } from 'nuxt/app';

// Use a ref to track the loading progress
const scrollProgress = ref(0);

const { loading } = useLoading();

// Use watchEffect to observe the loading state
watchEffect(() => {
  // Adjust the value based on your loading logic
  scrollProgress.value = loading.value ? 50 : 0;
});
</script>

<template>
  <div class="h-2 w-full relative mt-2">
    <div
      class="h-full bg-blue-500 rounded-full absolute"
      :style="{ width: scrollProgress + '%' }"
    ></div>
  </div>
</template>

<style scoped>
  /* Style for the progress bar */
  .h-2 {
    height: 2px;
  }

  /* Adjust the color of the progress bar */
  .bg-blue-500 {
    background-color: #3b82f6;
  }
</style>