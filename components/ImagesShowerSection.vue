<script setup>
const props = defineProps({
	images: {
		type: Array,
		require: true
	}
})
</script>

<template>
	<div>
		<div
			v-for="(image, index) in images"
			:key="index"
			class="w-[348px] h-[400px] rounded-2xl content-none bg-center bg-cover"
			:style="`background-image:url(/_nuxt/assets/images/mockup/${image})`"
		></div>
	</div>
</template>

<style scoped></style>
