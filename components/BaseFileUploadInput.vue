<template>
	<div class="col-span-full">
		<div class="flex gap-1">
			<label
				for="website"
				class="block text-sm font-medium leading-6 text-gray-900"
				>{{ label }}</label
			>
			<span v-show="require" class="text-sm text-red-500">*</span>
		</div>
		<div
			class="min-w-[220px] flex justify-center p-6 border border-dashed rounded-lg border-gray-900/25"
		>
			<div class="flex flex-col justify-center text-center item-center">
				<PhotoIcon
					class="w-10 h-10 mx-auto text-gray-300"
					aria-hidden="true"
					v-show="fileUrl === ''"
				/>
				<div class="flex justify-center">
					<img class="w-40" :src="fileUrl" v-show="fileUrl != ''" />
				</div>
				<div class="flex flex-col mt-2 text-sm leading-6 text-gray-600">
					<label
						:for="computedId"
						class="relative text-xs font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
					>
						<span>Upload a file</span>
						<input
							:id="computedId"
							:name="computedId"
							type="file"
							class="sr-only"
							@change="upLoad"
						/>
					</label>
					<p class="text-xs">or drag and drop</p>
				</div>
				<p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ChevronRightIcon, HomeIcon, PhotoIcon } from '@heroicons/vue/20/solid'
const emit = defineEmits(['selectFile'])
const props = defineProps({
	require: {
		type: Boolean,
		defaule: false
	},
	label: {
		type: String,
		require: true
	},
	isFull: {
		type: Boolean,
		defaule: false
	},
	inputId: {
		type: String,
		require: true
	},
	file: {
		type: String,
		default: ''
	}
})

const computedId = computed(() => `fileInput_${props.inputId}`)
// console.log(computedId.value)
const files = ref()
const fileUrl = ref(props.file)
// console.log(props.file)
const upLoad = async (e) => {
	files.value = e.target.files || e.dataTransfer.files
	// if (!files.value.length) return
	// const { snapshot, dowloadUrl, metadata } = await uploadFile(files[0])
	if (files.value) {
		fileUrl.value = URL.createObjectURL(files.value[0])

		emit('selectFile', files.value[0])
	}
}
</script>

<style scoped></style>
