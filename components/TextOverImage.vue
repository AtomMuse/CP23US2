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
	<div
		class="relative h-[320px] sm:h-[400px] sm:w-1/2 w-full lg:w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
	>
		<div
			:style="{ backgroundImage: `url(${img})` }"
			class="absolute inset-0 w-full h-full m-0 overflow-hidden text-gray-700 bg-transparent bg-center bg-cover rounded-none shadow-none bg-clip-border"
		>
			<div
				class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"
			></div>
		</div>
		<div class="absolute bottom-0 p-6">
			<div
				class="text-white text-sm font-medium leading-5 border justify-center items-stretch px-10 py-2.5 rounded-3xl border-solid border-white max-md:px-5"
			>
				{{ text }}
			</div>
		</div>
	</div>
</template>

<style scoped></style>
