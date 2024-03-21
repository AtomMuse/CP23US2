<script setup>
import { TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
	backgroundImg: {
		type: String,
		require: true
	},
	title: {
		type: String,
		default: ''
	},
	data: {
		type: Object,
		default: {}
	},
	disabledBtn: {
		type: Boolean,
		default: false
	},
	isOwner: {
		type: Boolean,
		default: false
	}
})

const dataForm = ref(props.data)
const isEditMode = ref(false)

const emit = defineEmits(['updateSection', 'deleteSection'])
const file = ref({})
const getFile = (file) => {
	dataForm.value.file = file
}
</script>

<template>
	<div>
		<div v-if="isEditMode">
			<div
				class="mx-8 lg:mx-12 p-6 border-2 border-dashed border-gray-400 min-h-[180px] rounded-lg flex items-center flex-col"
			>
				<div>
					<div
						v-if="data.contentType === 'background with title devider'"
						class="flex flex-col gap-4 p-4 border-2 border-dashed rounded-md"
					>
						<p class="text-xs font-semibold text-center uppercase text-darkBlue">
							{{ data.contentType }}
						</p>
						<div class="flex flex-col min-w-[492px]">
							<BaseFileUploadInput
								require
								label="Image 1"
								inputId="1"
								:file="data.background"
								@selectFile="getFile"
							/>
						</div>
						<BaseInput
							v-model="dataForm.title"
							label="Title Over Background Image"
							placeholder="Title Over Background Image"
						/>

						<!-- <div>
								<div>
									<label>Background image:</label>
									<input type="file" @change="upLoad($event, index)" />
								</div>

								
							</div> -->
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
		<div
			v-else
			:style="`background-image:url(${backgroundImg})`"
			:class="
				title != ''
					? 'w-full bg-center bg-cover h-72 content-none'
					: 'w-full bg-center bg-cover h-52'
			"
		>
			<div
				class="relative flex flex-col items-center justify-center w-full h-full bg-opacity-50 bg-zinc-950"
			>
				<div
					v-if="isOwner"
					class="absolute z-50 flex items-center justify-end w-full gap-2 px-6 text-xs text-white bottom-6"
				>
					<div
						@click="$emit('deleteSection')"
						class="flex items-end justify-center cursor-pointer hover:text-softOrange hover:underline"
					>
						<p class="leading-none uppercase">delete</p>
						<TrashIcon class="w-4 h-4" />
					</div>
					<span>|</span>
					<div
						@click="isEditMode = true"
						class="flex items-end justify-center cursor-pointer hover:text-softOrange hover:underline"
					>
						<p class="leading-none uppercase">edit</p>
						<PencilIcon class="w-4 h-4" />
					</div>
				</div>
				<p class="text-3xl font-bold text-center text-white">
					{{ title }}
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
