<script setup>
defineProps({
  img: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex shadow-2xl overflow-hidden min-h-[400px] w-full bg-slate-600 custom-bg "
    :style="`background-image:url(/_nuxt${img})`">
    <div class="flex-1 hidden md:block p-8"></div>
    <div class="flex-1 flex justify-center items-center p-8">
      <div class="text-center" >
        <div
          class="text-orange-400 text-6xl font-bold leading-5 max-w-[720px] mt-16 max-md:text-4xl max-md:leading-4 max-md:mt-10 textShadowStyle">
          <span class="text-white">ATOM</span>
          <span class="text-orange-400">MUSE</span>
        </div>

        <div class="text-white text-xl leading-6 max-w-[720px] mt-10 mb-10 max-md:mt-10 mb-10 textShadowStyle">
          Online Exhibition Management System
          <br />
          พื้นที่เล็ก ๆ สำหรับทุกผลงานที่มีพลังยิ่งใหญ่
        </div>

        <a href="javascript:void(0)"
          class="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
          Let’s Exhibit Your Works
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.textShadowStyle {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.custom-bg {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}</style>
