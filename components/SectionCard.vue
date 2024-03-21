<template>
	<div>
		<div
			class="flex flex-col xl:min-w-[220px] gap-4 p-4 transition-transform transform border-2 border-gray-400 cursor-pointer text-darkBlue rounded-xl hover:scale-105 hover:border-softOrange hover:shadow-lg"
		>
			<div class="flex items-center justify-center">
				<div class="flex items-center justify-center w-16 h-16 bg-gray-300">
					{{ icon }}
				</div>
			</div>
			<div>
				<p class="font-bold capitalize text-md">{{ title }}</p>
				<p class="text-sm">{{ description }}</p>
			</div>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	icon: {
		type: String,
		require: true
	},
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	}
})
</script>
<style scoped></style>
