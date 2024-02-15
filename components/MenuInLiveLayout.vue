<template>
	<div>
		<div class="flex gap-2 px-4 py-1 bg-gray-400 rounded-full">
			<div
				@click="$emit('home')"
				class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer"
			>
				<HomeIcon class="w-5 h-5" />
			</div>
			<div
				@click="$emit('map')"
				class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer"
			>
				<MapIcon class="w-5 h-5" />
			</div>
			<div
				class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer"
			>
				<HeartIcon class="w-5 h-5" />
			</div>
			<div
				class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer"
			>
				<PencilIcon class="w-5 h-5" />
			</div>
			<div
				class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer"
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
