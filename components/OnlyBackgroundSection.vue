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
			:class="`w-full h-72  content-none bg-[url('images/mockup/${image}')] bg-center bg-cover`"
		></div>
	</div>
</template>

<style scoped></style>
