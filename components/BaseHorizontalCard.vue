<script setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
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
})
const noOfLetter = 200
const previewText = ref('')
const getPreviewText = () => {
	if (props.desc.length > noOfLetter) {
		previewText.value = `${props.desc.slice(0, 200)}` + '...'
	} else {
		previewText.value = props.desc
	}
}
getPreviewText()
</script>

<template>
	<div
		class="flex flex-col gap-6 lg:gap-16 lg:max-h-[211px] px-4 py-6 lg:p-6 items-center bg-white hover:rounded-xl md:flex-row hover:bg-gray-100"
	>
		<div class="w-full md:w-48 md:flex-none">
			<img
				loading="lazy"
				:srcSet="`/images/mockup/${img}`"
				class="aspect-[1.6] object-cover w-full h-auto md:h-full rounded-m md:rounded-3xl"
				alt="Exhibition"
			/>
		</div>

		<div class="flex lg:gap-12">
			<div class="flex flex-col gap-2 text-darkBlue">
				<p class="text-base font-bold">{{ title }}</p>
				<p class="text-sm font-medium leading-5">{{ previewText }}</p>
				<p class="mt-2 text-sm text-gray-400">{{ date }}</p>
			</div>
			<ArrowLongRightIcon class="invisible w-20 lg:visible" />
		</div>

		<!-- <div class="flex flex-col justify-between leading-normal">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
				/>
			</svg>
		</div> -->
	</div>
</template>

<style scoped></style>
