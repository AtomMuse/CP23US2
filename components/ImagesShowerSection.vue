<script setup>
const props = defineProps({
	images: {
		type: Array,
		require: true
	}
})
</script>

<template>
	<div class="flex flex-col items-center gap-5 lg:flex-row">
		<div
			v-for="(image, index) in images"
			:key="index"
			class="w-[200px] h-[300px] lg:w-[348px] lg:h-[400px] rounded-2xl content-none bg-center bg-cover"
			:style="`background-image:url(${image})`"
		></div>
	</div>
</template>

<style scoped></style>
