<script setup>
const props = defineProps({
	image: {
		type: String,
		require: true
	},
	description: {
		type: String,
		default: ''
	}
})
</script>

<template>
	<div>
		<div class="flex flex-col items-center justify-center h-full">
			<img :src="image" class="w-10/12" />
			<p class="mt-5 text-sm leading-5 text-center" v-if="description != null">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
