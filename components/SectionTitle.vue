<script setup>
defineProps({
	title: {
		type: String,
		require: true
	}
})
</script>

<template>
	<div>
		<p class="text-2xl md:text-3xl font-bold text-darkBlue">{{ title }}</p>
	</div>
</template>

<style scoped></style>
