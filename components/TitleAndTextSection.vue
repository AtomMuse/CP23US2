<script setup>
import { TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	text: {
		type: String,
		default: ''
	},
	background: {
		type: String,
		default: 'transparent'
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
const selectedColor = ref('')
</script>

<template>
	<div>
		<div v-if="isEditMode">
			<div
				class="mx-8 lg:mx-12 p-6 border-2 border-dashed border-gray-400 min-h-[180px] rounded-lg flex items-center flex-col"
			>
				<div
					v-if="dataForm.contentType === 'title and text with bg devider'"
					class="flex flex-col gap-4 p-4 border-2 border-dashed rounded-md"
				>
					<p class="text-xs font-semibold text-center uppercase text-darkBlue">
						{{ dataForm.contentType }}
					</p>
					<div class="flex flex-col gap-3 min-w-[492px]">
						<BaseInput v-model="dataForm.title" label="Title" placeholder="Title" />
						<BaseInput v-model="dataForm.text" label="Text" placeholder="Text" />

						<div class="flex gap-2">
							<div class="flex items-center h-6">
								<input
									id="candidates"
									aria-describedby="candidates-description"
									name="candidates"
									type="checkbox"
									class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
									v-model="selectedColor"
								/>
							</div>
							<label
								for="website"
								class="text-sm font-medium leading-6"
								:class="selectedColor ? 'text-gray-900' : 'text-gray-400'"
								>Background Color :
							</label>

							<input
								type="color"
								v-model="dataForm.background"
								:disabled="!selectedColor"
							/>
						</div>
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
			class="flex flex-col items-center justify-center w-full"
			:class="`${background}`"
		>
			<div class="gap-5 py-6 lg:py-12">
				<p class="text-3xl font-bold text-center" v-if="title != null">
					{{ title }}
				</p>
				<p class="px-8 text-center lg:px-40" v-if="text != null">
					{{ text }}
				</p>
			</div>

			<div
				v-if="isOwner"
				class="flex items-center justify-end w-full gap-2 px-6 text-xs text-darkOrange"
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
