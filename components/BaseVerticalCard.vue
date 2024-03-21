<template>
	<div class="flex items-stretch justify-center cursor-pointer">
		<div
			class="w-[316px] min-h-[407px] flex flex-col jestify-between p-3 rounded-md md:rounded-3xl transition-transform transform hover:scale-105 hover:border border-solid border-darkBrown bg-white hover:shadow-lg"
		>
			<div class="flex flex-col h-full gap-6">
				<img
					loading="lazy"
					:src="img"
					class="aspect-[1.6] rounded-md md:rounded-3xl"
					alt="Exhibition"
				/>
				<div class="text-darkBlue">
					<div class="flex flex-col gap-2">
						<p class="text-base font-bold">{{ title }}</p>
						<p class="text-sm font-medium leading-5">{{ previewText }} ...</p>
					</div>
				</div>
			</div>

			<p class="mb-0 text-sm text-gray-400">
				{{ startDateFormatted }} - {{ endDateFormatted }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>

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
		require: true
	}
})

const noOfLetter = 150
const previewText = ref('')
const getPreviewText = () => {
	if (props.desc.length > noOfLetter) {
		previewText.value = props.desc.slice(0, 150)
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
