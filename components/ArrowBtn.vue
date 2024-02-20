<template>
	<div>
		<ArrowRightCircleIcon
			v-if="rightArrow"
			class="w-12 h-12 text-[#626262] transition duration-500 hover:transform hover:scale-125 ease-out hover:text-darkOrange hover:cursor-pointer"
		/>
		<ArrowLeftCircleIcon
			v-if="leftArrow"
			class="w-12 h-12 text-[#626262] transition duration-500 hover:transform hover:scale-125 ease-out hover:text-darkOrange hover:cursor-pointer"
		/>
	</div>
</template>
<script setup>
import {
	ArrowRightCircleIcon,
	ArrowLeftCircleIcon
} from '@heroicons/vue/24/solid'
// defineEmits(['goToMap'])
const props = defineProps({
	rightArrow: {
		type: Boolean,
		default: false
	},
	leftArrow: {
		type: Boolean,
		default: false
	}
})
</script>
<style scoped></style>
