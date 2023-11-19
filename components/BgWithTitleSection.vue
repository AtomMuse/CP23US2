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
			:class="`w-full h-52   bg-[url('images/mockup/${backgroundImg}')] bg-center bg-cover `"
		>
			<p
				class="text-3xl text-white font-bold text-center w-full h-full items-center flex justify-center bg-zinc-950 bg-opacity-50 w-full"
			>
				{{ title }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
