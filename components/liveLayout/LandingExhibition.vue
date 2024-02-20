<template>
	<div class="relative flex items-center justify-center w-full h-screen">
		<div class="relative flex flex-col items-center justify-center -mt-16">
			<div
				class="flex flex-col items-center justify-center gap-3 mb-16 text-center text-white"
			>
				<p class="text-4xl font-bold">{{ exhibitionName }}</p>
				<p class="w-2/4 text-md">{{ exhibitionDescription }}</p>
				<p class="text-sm uppercase">
					<span class="font-bold">Organized By : </span>
					<span>{{ organizer.firstName }} {{ organizer.lastName }}</span>
				</p>
			</div>
			<div>
				<Slider />
			</div>

			<div class="mt-24">
				<button
					@click="$emit('goToMap')"
					type="button"
					class="transition duration-500 ease-out cursor-pointer hover:transform hover:scale-110 rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
				>
					เข้าชมนิทรรศการ
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<script setup>
defineEmits(['goToMap'])
const props = defineProps({
	visitedNumber: {
		type: Number,
		require: true
	},
	exhibitionName: {
		type: String,
		require: true
	},
	exhibitionDescription: {
		type: String,
		require: true
	},
	organizer: {
		type: Object,
		require: true
	}
})
</script>
