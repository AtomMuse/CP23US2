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
			class="w-full h-72 content-none bg-center bg-cover"
			:style="`background-image:url(/_nuxt/assets/images/mockup/${image})`"
		></div>
	</div>
</template>

<style scoped></style>
