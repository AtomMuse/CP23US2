<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-col items-center bg-white rounded-md md:rounded-3xl md:flex-row max-w-[800px] max-h-[300px] mr-10 hover:bg-gray-100">
    <div class="w-full md:w-48 md:flex-none">
      <img loading="lazy" :srcSet="img" class="aspect-[1.6] object-cover w-full h-auto md:h-full rounded-m md:rounded-3xl m-4" alt="Exhibition" />
    </div>

    <div class="flex flex-col justify-between p-4 leading-normal ml-5 mt-4 md:mt-0">
      <div class="text-gray-900 text-base font-bold mt-2 md:mt-7">{{ title }}</div>
      <div class="text-gray-900 text-base font-medium leading-5 mt-2 md:mt-3">
        <p class="mb-3 font-normal">{{ desc }}</p>
      </div>
      <div class="text-gray-400 text-sm mt-2 md:mt-2">{{ date }}</div>
    </div>

    <div class="flex flex-col justify-between p-4 leading-normal">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    </div>
  </div>
</template>

<style scoped>

</style>
