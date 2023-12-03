<script setup>
const props = defineProps({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    date: {
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
    <div class="flex justify-center items-stretch">
        <div class="flex flex-col px-5 py-4 rounded-md md:rounded-3xl transition-transform transform hover:scale-105 hover:border border-solid border-black bg-white"
            style="width: 350px; font-family: 'Inter', sans-serif;">
            <img loading="lazy" :srcSet="img"
                class="aspect-[1.6] object-cover w-full h-48 md:h-auto md:w-auto mx-auto mb-4 rounded-md md:rounded-3xl"
                alt="Exhibition" />
            <div class="text-gray-900 text-base font-bold mt-2 md:mt-7">{{ title }}</div>
            <div class="text-gray-900 text-base font-medium leading-5 mt-2 md:mt-3">
                <p class="mb-3 font-normal">{{ desc }}</p>
            </div>
            <div class="text-gray-400 text-sm mt-2 md:mt-7">{{ date }}</div>
        </div>
    </div>
</template>
  
<style scoped>
</style>
  