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
		<div class="flex flex-col justify-center h-full">
			<nuxt-img :src="`images/mockup/${image}`" />
			<p class="text-center text-sm leading-5 mt-5" v-if="description != null">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
