<script setup>
const props = defineProps({
	image: {
		type: String,
		require: true
	}
})
</script>

<template>
	<div>
		<div
			class="w-full bg-center bg-cover h-72 content-none"
			:style="`background-image:url(/images/mockup/${image})`"
		></div>
	</div>
</template>

<style scoped></style>
