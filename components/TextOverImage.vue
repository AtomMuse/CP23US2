<script setup>
const props = defineProps({
    text: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    }
})
</script>
 
<template>
  <div class="relative mr-4 mt-10 grid h-[20rem] w-full max-w-[15rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
    <div :style="{ backgroundImage: `url(${img})` }" class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
      <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
    </div>
    <div class="absolute bottom-0 left-0 p-6 px-6 py-14 md:px-12">
      <div class="text-white text-sm font-medium leading-5 border justify-center items-stretch px-10 py-2.5 rounded-3xl border-solid border-white max-md:px-5">
        {{ text }}
      </div>
    </div>
  </div>
</template>
 
<style scoped></style>