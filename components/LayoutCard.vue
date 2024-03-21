<template>
	<div>
		<div
			class="transition-transform transform w-[220px] p-4 border-2 rounded-xl"
			:class="
				isSelected
					? 'border-softOrange'
					: 'border-gray-400 hover:scale-105 hover:border-softOrange hover:shadow-lg cursor-pointer'
			"
		>
			<div class="flex h-[180px] items-center justify-center">
				<p class="w-[124px] h-[124px] bg-gray-300 flex items-center justify-center">
					{{ icon }}
				</p>
			</div>
			<div>
				<p class="text-xl font-bold">{{ layoutName }}</p>
				<p>{{ layoutDesc }}</p>
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
	layoutName: {
		type: String,
		require: true
	},
	layoutDesc: {
		type: String,
		require: true
	},
	isSelected: {
		type: Boolean,
		default: false
	}
})
</script>
<style scoped></style>
