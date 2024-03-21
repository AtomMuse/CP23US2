<script setup>
import { TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	text: {
		type: String,
		require: true
	},
	isOwner: {
		type: Boolean,
		default: false
	},
	data: {
		type: Object,
		default: {}
	},
	disabledBtn: {
		type: Boolean,
		default: false
	}
})
const dataForm = ref(props.data)
const isEditMode = ref(false)
const emit = defineEmits(['updateSection', 'deleteSection'])
</script>

<template>
	<div>
		<div v-if="isEditMode">
			<div
				class="mx-8 lg:mx-12 p-6 border-2 border-dashed border-gray-400 min-h-[180px] rounded-lg flex items-center flex-col"
			>
				<div
					v-if="data.contentType === 'title and text with border devider'"
					class="flex flex-col gap-4 p-4 border-2 border-dashed rounded-md"
				>
					<p class="text-xs font-semibold text-center uppercase text-darkBlue">
						{{ data.contentType }}
					</p>
					<div class="flex flex-col gap-3 min-w-[492px]">
						<BaseInput v-model="dataForm.title" label="Title" placeholder="Title" />
						<BaseInput v-model="dataForm.text" label="Text" placeholder="Text" />
					</div>
				</div>
			</div>

			<div class="flex justify-end gap-4 mx-8 mt-4 lg:mx-12">
				<button
					type="button"
					class="rounded-md ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					:class="
						disabledBtn
							? 'cursor-default  text-gray-400    '
							: 'cursor-pointer text-gray-900 '
					"
				>
					Back
				</button>
				<button
					@click="$emit('updateSection', dataForm, (isEditMode = false))"
					type="button"
					class="rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					:class="
						disabledBtn === false
							? 'cursor-pointer bg-darkOrange text-white'
							: 'cursor-default bg-gray-400 text-gray-200 '
					"
				>
					Save
				</button>
			</div>
		</div>

		<div class="px-10 py-5" v-else>
			<div class="text-center border border-zinc-400 lg:px-40 lg:py-10">
				<div>
					<p v-if="title != ''" class="mb-3 text-3xl font-bold">
						{{ title }}
					</p>
					<p class="text-base">{{ text }}</p>
				</div>
			</div>
			<div
				v-if="isOwner"
				class="flex items-center justify-end w-full gap-2 text-xs text-darkOrange"
			>
				<div
					@click="$emit('deleteSection')"
					class="flex items-end justify-center cursor-pointer hover:underline"
				>
					<p class="leading-none uppercase">delete</p>
					<TrashIcon class="w-4 h-4" />
				</div>
				<span>|</span>
				<div
					@click="isEditMode = true"
					class="flex items-end justify-center cursor-pointer hover:underline"
				>
					<p class="leading-none uppercase">edit</p>
					<PencilIcon class="w-4 h-4" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
