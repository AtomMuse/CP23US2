<script setup>
defineProps({
  text: {
    type: String,
    require: true
  }
})
</script>

<template>
  <footer
    class="bottom-0 left-0 z-20 w-full p- bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-[#280E05] dark:border-gray-600"
  >
    <div class="w-full max-w-screen-xl mx-auto p-2 md:p-2">
      <span
        class="block text-gray-500 sm:text-center text-sm md:text-base dark:text-gray-300 "
        style="display: block; text-align: center; margin: 0 auto; font-family: 'Inter', sans-serif;"
      >
        {{text}}
      </span>
    </div>
  </footer>
</template>

<style scoped>
</style>