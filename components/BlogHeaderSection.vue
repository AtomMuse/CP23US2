<script setup>
const props = defineProps({
	exhibitionName: {
		type: String,
		require: true
	},
	exhibitionDescription: {
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
	}
})
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
		new Date(props.endDate).getUTCFullYear()
	let date = new Date()
}
getDateFormat()
</script>

<template>
	<div>
		<div class="flex flex-col items-center gap-3 text-center">
			<p class="text-4xl font-bold">{{ exhibitionName }}</p>
			<p>{{ exhibitionDescription }}</p>
			<p class="text-blue-500">
				{{ startDateFormatted }} - {{ endDateFormatted }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
