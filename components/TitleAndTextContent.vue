<script setup>
const props = defineProps({
	title: {
		type: String,
		require: true
	},
	text: {
		type: String,
		require: true
	},
	textRight: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div>
		<div
			class="flex flex-col gap-5 justify-center h-full"
			:class="textRight === true ? `text-right` : `text-left`"
		>
			<p class="text-3xl font-bold">
				{{ title }}
			</p>
			<p class="text-base">{{ text }}</p>
		</div>
	</div>
</template>

<style scoped></style>
