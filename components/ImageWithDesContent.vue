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
		<div class="flex flex-col justify-center h-full items-center">
			<img :src="`/_nuxt/assets/images/mockup/${image}`" class="w-10/12" />
			<p class="text-center text-sm leading-5 mt-5" v-if="description != null">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
