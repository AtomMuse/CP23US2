<script setup></script>

<template>
  <footer
    class="fixed bottom-0 left-0 z-20 w-full p- bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-[#280E05] dark:border-gray-600"
  >
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-4">
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-300"
        style="display: block; text-align: center; margin: 0 auto; font-family: 'Inter', sans-serif;"
      >
        © 2023 ATOMMUSE, SIT KMUTT.
      </span>
    </div>
  </footer>
</template>

<style scoped>
@media (max-width: 768px) {
  .footer .text-center {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
