<script setup>
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	text: {
		type: String,
		require: true
	}
})
</script>

<template>
	<div class="py-5 lg:py-0 px-10">
		<div class="border border-zinc-400 lg:px-40 text-center lg:py-10">
			<p v-if="title != ''" class="text-3xl font-bold mb-3">
				{{ title }}
			</p>
			<p class="text-base">{{ text }}</p>
		</div>
	</div>
</template>

<style scoped></style>
