<script setup>
</script>

<template>
	<div class="flex top-0 left-0 w-full shadow bg-white flex items-center justify-between gap-5 pl-14 pr-12 max-md:flex-wrap max-md:px-5" style="font-family: 'Inter', sans-serif;">
	  <div class="text-orange-400 text-xl font-bold leading-5 grow whitespace-nowrap my-auto">
		<span class="text-gray-900">ATOM</span><span class="text-orange-400">MUSE</span>
	  </div>
	  <div class="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center leading-5 whitespace-nowrap p-3">
		
		<div class="text-gray-900 text-center text-sm font-medium leading-5 self-center my-auto">
			<NuxtLink to="/sutee">
				Home
			</NuxtLink>
		</div>
		
		<div class="text-gray-900 text-center text-sm font-medium leading-5 self-center my-auto">
			<NuxtLink to="/d-day/">
				Exhibitions
			</NuxtLink>
		</div>

		<div class="items-stretch border border-[color:var(--gray-300,#D1D5DB)] shadow-sm bg-white self-center flex gap-2 my-auto pl-3.5 pr-20 py-2.5 rounded-md border-solid max-md:pr-5">
		  <img
			loading="lazy"
			src="https://cdn.builder.io/api/v1/image/assets/TEMP/049e5821e1deb5b32567a0f40de085353de0bdef0229718469bc8b20d857dfab?"
			class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
		  />
		  <div class="text-gray-500 text-sm leading-5 grow whitespace-nowrap">
			Search
		  </div>
		</div>
		<div class="items-stretch border border-[color:var(--gray-300,#D1D5DB)] bg-white self-center flex gap-2 my-auto pl-3.5 pr-5 py-2.5 rounded-md border-solid">
		  <img
			loading="lazy"
			src="https://cdn.builder.io/api/v1/image/assets/TEMP/a71583ce66d992a920ce10db6c7f5144236f19086cfbe182405364473a1e3e06?"
			class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
		  />
		  <button @click="handleButtonClick" class="text-gray-400 text-sm font-medium leading-5 grow whitespace-nowrap">
			New Exhibition
		  </button>
		</div>
		<img
		  loading="lazy"
		  src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ff0f086972886f7a43ff62e8808a97e73f38822ff03534c83ea0bc9e4b3fb7?"
		  class="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
		/>
	  </div>
	</div>
  </template>

<style scoped></style>
