<script setup>
const props = defineProps({
	backgroundImg: {
		type: String,
		require: true
	},
	title: {
		type: String,
		require: true
	}
})
</script>

<template>
	<div>
		<div
			class="w-full bg-center bg-cover h-52"
			:style="`background-image:url(/images/mockup/${backgroundImg})`"
		>
			<p
				class="flex items-center justify-center w-full h-full text-3xl font-bold text-center text-white bg-opacity-50 bg-zinc-950"
			>
				{{ title }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
