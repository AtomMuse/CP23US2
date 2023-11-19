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
	<div class="px-10">
		<div class="border border-zinc-400 px-40 text-center py-10">
			<p v-if="title != ''" class="text-3xl font-bold mb-3">
				{{ title }}
			</p>
			<p class="text-base">{{ text }}</p>
		</div>
	</div>
</template>

<style scoped></style>
