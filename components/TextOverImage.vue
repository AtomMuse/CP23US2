<template>
	<div
		class="relative h-[320px] sm:h-[400px] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
	>
		<div
			@click="$emit('visitExhibition')"
			:style="{ backgroundImage: `url(${img})` }"
			class="absolute inset-0 w-full h-full m-0 overflow-hidden text-gray-700 bg-transparent bg-center bg-cover rounded-none shadow-none bg-clip-border"
		>
			<div
				class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50 hover:via-black/0"
			></div>
		</div>
		<div
			class="absolute w-full p-6"
			:class="isExhibition ? 'bottom-6' : 'bottom-0'"
		>
			<div class="flex flex-col gap-2">
				<div
					class="text-white text-sm font-medium w-fit leading-5 border justify-center items-stretch px-10 py-2.5 rounded-3xl border-solid border-white max-md:px-5"
				>
					{{ text }}
				</div>
				<div class="flex flex-col">
					<div class="text-sm font-bold text-left text-white">
						{{ previewName }}
					</div>
					<div
						class="text-sm text-left text-gray-300"
						v-show="startDate != '' && endDate != ''"
					>
						{{ startDateFormatted }} - {{ endDateFormatted }}
					</div>
				</div>
			</div>
		</div>
		<div
			class="absolute z-50 flex items-center w-full gap-2 px-6 text-xs text-white bottom-6"
			v-show="isExhibition"
		>
			<div
				class="flex items-end justify-center cursor-pointer hover:text-softOrange"
				@click="$emit('delete')"
			>
				<p class="leading-none uppercase">delete</p>
				<TrashIcon class="w-4 h-4" />
			</div>
			<span>|</span>
			<div
				class="flex items-end justify-center cursor-pointer hover:text-softOrange"
				@click="$emit('edit')"
			>
				<p class="leading-none uppercase">edit</p>
				<PencilIcon class="w-4 h-4" />
			</div>
		</div>
	</div>
</template>
<script setup>
import { TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'
defineEmits(['delete', 'edit', 'visitExhibition'])
const props = defineProps({
	text: {
		type: String,
		require: true
	},
	img: {
		type: String,
		require: true
	},
	name: {
		type: String,
		default: ''
	},
	startDate: {
		type: String,
		default: ''
	},
	endDate: {
		type: String,
		default: ''
	},
	isExhibition: {
		type: Boolean,
		default: false
	}
})
const noOfLetter = 20
const previewName = ref('')
const getPreviewName = () => {
	if (props.name.length > noOfLetter && props.name.length != '') {
		previewName.value = props.name.slice(0, 20) + '...'
	} else {
		previewName.value = props.name
	}
}
getPreviewName()

const startDateFormatted = ref('')
const endDateFormatted = ref('')
const getDateFormat = () => {
	startDateFormatted.value =
		new Date(props.startDate).getDate() +
		' ' +
		new Date(props.startDate).toDateString().slice(4, 7) +
		' ' +
		new Date(props.startDate).getFullYear()
	endDateFormatted.value =
		new Date(props.endDate).getDate() +
		' ' +
		new Date(props.endDate).toDateString().slice(4, 7) +
		' ' +
		new Date(props.endDate).getFullYear()
}
getDateFormat()
const log = () => {
	console.log('test')
}
</script>
<style scoped></style>
