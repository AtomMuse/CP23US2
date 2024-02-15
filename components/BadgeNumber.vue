<script setup>
import { UserIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
	number: {
		type: Number,
		require: true
	},
	isNumberOfVisit: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div>
		<div
			class="px-4 py-1 bg-[#626262] rounded-3xl text-white text-sm flex items-center justify-center gap-1"
		>
			<UserIcon class="w-4" v-if="isNumberOfVisit" />
			<p class="items-center">{{ number }}</p>
		</div>
	</div>
</template>

<style scoped></style>
