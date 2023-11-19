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
	// จริงๆต้องเป็นพวก type ตระกูล Date
	endDate: {
		type: String,
		require: true
	}
	// จริงๆต้องเป็นพวก type ตระกูล Date
})
</script>

<template>
	<div>
		<div class="flex flex-col items-center text-center gap-3">
			<p class="text-4xl font-bold">{{ exhibitionName }}</p>
			<p>{{ exhibitionDescription }}</p>
			<p class="text-blue-500">{{ startDate }} - {{ endDate }}</p>
		</div>
	</div>
</template>

<style scoped></style>
