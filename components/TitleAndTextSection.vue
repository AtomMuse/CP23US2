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
		default: ''
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
const emit = defineEmits(['updateSection'])
const dataForm = ref(props.data)
const isEditMode = ref(false)
const selectedColor = ref(props.data.background)
// const isSelectedColor = computed(() => {
// 	// if (selectedColor.value != '') {
// 	// 	return true
// 	// }
// })
const isSelectedColor = ref(false)
if (props.data.background != '') {
	isSelectedColor.value = true
}

const save = () => {
	isEditMode.value = false
	if (isSelectedColor.value === false) {
		dataForm.value.background = ''
	}
	emit('updateSection', dataForm.value)
}

const bgColor = computed(() => `background-color:${props.data.background}`)
</script>

<template>
	<div>
		<div v-if="isEditMode" :style="[bgColor]">
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
									v-model="isSelectedColor"
								/>
							</div>

							<label
								for="website"
								class="text-sm font-medium leading-6"
								:class="selectedColor ? 'text-gray-900' : 'text-gray-400'"
								>Background Color :
							</label>

							<!-- <input
								type="color"
								v-model="dataForm.background"
								:disabled="!selectedColor"
							/> -->
							<input
								type="color"
								class="block h-10 p-1 bg-white border border-gray-200 rounded-lg cursor-pointer w-14 disabled:opacity-50 disabled:pointer-events-none"
								id="hs-color-input"
								title="Choose your color"
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
					@click="save"
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
			:style="[bgColor]"
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
