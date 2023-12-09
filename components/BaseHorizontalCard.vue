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
	startDate: {
		type: String,
		require: true
	},
	endDate: {
		type: String,
		require: true
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

const startDateFormatted = ref('')
const endDateFormatted = ref('')
const getDateFormat = () => {
	startDateFormatted.value =
		new Date(props.startDate).getDate() +
		' ' +
		new Date(props.startDate).toDateString().slice(4, 7) +
		' ' +
		new Date(props.startDate).getFullYear()
	endDateFormatted.value =
		new Date(props.endDate).getDate() +
		' ' +
		new Date(props.endDate).toDateString().slice(4, 7) +
		' ' +
		new Date(props.endDate).getFullYear()
}
getDateFormat()
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
				<p class="mt-2 text-sm text-gray-400">
					{{ startDateFormatted }} - {{ endDateFormatted }}
				</p>
			</div>
			<ArrowLongRightIcon class="invisible w-20 lg:visible" />
		</div>
	</div>
</template>

<style scoped></style>
