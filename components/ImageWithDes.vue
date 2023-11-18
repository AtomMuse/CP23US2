<script setup>
const props = defineProps({
	image: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	}
})
</script>

<template>
	<div>
		<div class="flex flex-col justify-center h-full">
			<nuxt-img :src="`images/mockup/${image}`" />
			<p class="text-center text-sm leading-5 mt-5">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
