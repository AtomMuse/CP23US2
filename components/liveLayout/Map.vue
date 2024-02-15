<template>
	<div>
		<!-- <div class="flex justify-between mx-12 my-6">
			<div>
				<p class="text-lg font-semibold">{{ exhibitionName }}</p>
			</div>
			<div class="px-4 py-1 bg-[#626262] rounded-3xl text-white text-sm h-fit">
				<BadgeNumber :number="visitedNumber" isNumberOfVisit />
			</div>
		</div> -->

		<div class="flex flex-col gap-6">
			<div class="flex items-center justify-center gap-6">
				<div
					v-for="(room, index) in mapItems"
					:key="index"
					v-show="index < 3"
					@click="$emit('goToExhibition', index)"
					class="cursor-pointer"
				>
					<img :src="room.mapThumbnail" class="h-[136px]" />
				</div>
			</div>
			<div class="flex items-center justify-center gap-6">
				<div
					v-for="(room, index) in mapItems"
					:key="index"
					v-show="index >= 3 && index < 7"
					class="cursor-pointer"
				>
					<img :src="room.mapThumbnail" class="h-[136px]" />
				</div>
			</div>
			<div class="flex items-center justify-center gap-6">
				<div
					v-for="(room, index) in mapItems"
					:key="index"
					v-show="index >= 7 && index < 10"
					class="cursor-pointer"
				>
					<img :src="room.mapThumbnail" class="h-[136px]" />
				</div>
			</div>
		</div>
		<div class="flex justify-center w-full mt-10">
			<MenuInLiveLayout @home="$emit('goToLanding')" />
		</div>
	</div>
</template>
<script setup>
defineEmits(['goToLanding', 'goToExhibition'])
const props = defineProps({
	mapItems: {
		type: Array,
		require: true
	},
	visitedNumber: {
		type: Number,
		require: true
	},
	exhibitionName: {
		type: String,
		require: true
	}
})
</script>

<style scoped></style>
