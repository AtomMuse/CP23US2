<script setup>
const props = defineProps({
	icon: {
		type: String,
		require: true
	},
	label: {
		type: String,
		require: true
	},
	items: {
		type: Array,
		require: true
	}
})
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const toggleFilter = () => {
	isOpen.value = !isOpen.value
}
</script>

<template>
	<div>
		<div
			class="flex items-center justify-between cursor-pointer text-darkBlue"
			:class="isOpen === true ? 'border-0 pb-0' : 'border-b-2 pb-3'"
			@click="toggleFilter"
		>
			<div class="flex items-center gap-3">
				<img src="./filter.svg" class="w-5 h-5" v-show="icon === 'filter'" />
				<img
					src="./pajamas_status.svg"
					class="w-5 h-5"
					v-show="icon === 'status'"
				/>
				<img src="./sort.svg" class="w-5 h-5" v-show="icon === 'sort'" />

				<p>{{ label }}</p>
			</div>
			<ChevronDownIcon
				class="w-5 h-5 -mr-1 text-gray-500"
				aria-hidden="true"
				v-if="isOpen === false"
			/>
			<ChevronUpIcon
				class="w-5 h-5 -mr-1 text-gray-500"
				aria-hidden="true"
				v-else
			/>
		</div>
		<div class="flex flex-col gap-3 py-6 text-darkBlue" v-show="isOpen">
			<div
				v-for="(item, index) in items"
				:key="index"
				class="flex justify-center py-1 font-medium border-2 border-gray-400 rounded-full"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<style scoped></style>
