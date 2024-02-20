<template>
	<div>
		<div class="flex gap-3 px-4 py-2 bg-gray-400 rounded-full">
			<div
				@click="$emit('home')"
				class="flex items-center justify-center w-10 h-10 transition duration-500 ease-out bg-gray-300 rounded-full cursor-pointer hover:border-2 hover:transform hover:scale-125 hover:bg-darkOrange hover:text-white"
			>
				<HomeIcon class="w-5 h-5" />
			</div>
			<!-- <div
				@click="$emit('home')"
				class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer hover:border-2 hover:transform hover:scale-125 hover:text-darkOrange hover:border-darkOrange"
			>
				<HomeIcon class="w-5 h-5" />
			</div> -->
			<div
				@click="$emit('map')"
				class="flex items-center justify-center w-10 h-10 transition duration-500 ease-out bg-gray-300 rounded-full cursor-pointer hover:border-2 hover:transform hover:scale-125 hover:bg-darkOrange hover:text-white"
			>
				<MapIcon class="w-5 h-5" />
			</div>
			<div
				class="flex items-center justify-center w-10 h-10 transition duration-500 ease-out bg-gray-300 rounded-full cursor-pointer hover:border-2 hover:transform hover:scale-125 hover:bg-darkOrange hover:text-white"
			>
				<HeartIcon class="w-5 h-5" />
			</div>
			<div
				class="flex items-center justify-center w-10 h-10 transition duration-500 ease-out bg-gray-300 rounded-full cursor-pointer hover:border-2 hover:transform hover:scale-125 hover:bg-darkOrange hover:text-white"
			>
				<PencilIcon class="w-5 h-5" />
			</div>
			<div
				class="flex items-center justify-center w-10 h-10 transition duration-500 ease-out bg-gray-300 rounded-full cursor-pointer hover:border-2 hover:transform hover:scale-125 hover:bg-darkOrange hover:text-white"
			>
				<ShareIcon class="w-5 h-5" />
			</div>
		</div>
	</div>
</template>
<script setup>
import {
	UserIcon,
	HomeIcon,
	MapIcon,
	HandThumbUpIcon,
	ShareIcon,
	PencilIcon,
	HeartIcon
} from '@heroicons/vue/24/outline'
defineEmits(['home', 'map'])
</script>
<style scoped></style>
