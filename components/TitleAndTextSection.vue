<script setup>
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	text: {
		type: String,
		default: ''
	},
	background: {
		type: String,
		default: 'transparent'
	}
})
</script>

<template>
	<div>
		<div
			class="w-full flex items-center justify-center py-12"
			:class="`${background}`"
		>
			<p class="text-3xl font-bold" v-if="title != null">{{ title }}</p>
			<p class="px-40 text-center" v-if="text != null">{{ text }}</p>
		</div>
	</div>
</template>

<style scoped></style>
