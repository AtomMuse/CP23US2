<template>
	<div
		class="inset-0 flex items-center justify-center w-full min-h-screen transition-opacity bg-gray-500 bg-opacity-75"
	>
		<div
			class="max-w-4xl text-left transition-all transform bg-white shadow-xl sm:mx-10 xl:mx-0 sm:rounded-lg sm:w-full"
		>
			<!-- <div
								class="flex flex-col gap-8 px-10 pt-10 pb-8"
								v-if="currentModelState === 'selectLayout'"
							>
								<div class="flex">
									<div>
										<p class="text-4xl font-bold text-darkBlue">Create New Exhibition</p>
										<p class="text-gray-500">เลือก Layout ที่ต้องการ</p>
									</div>

									<div class="flex items-center justify-center gap-12">
										<LayoutCard
											@click="chooseBox('blogLayout')"
											icon="Blog Icon"
											layoutName="Blog Layout"
											layoutDesc="เเสดงข้อมูลภายในหน้าเดียวในรูปแบบของ Blog"
											:isSelected="isSelecteBlogLayout"
										/>

										<LayoutCard
											@click="chooseBox('liveLayout')"
											icon="Live Icon"
											layoutName="Live Layout"
											layoutDesc="เเสดงข้อมูลในรูปแบบของ Virtual Room"
											:isSelected="isSelecteLiveLayout"
										/>
									</div>
								</div>
								<div class="flex justify-end">
									<button
										@click="goToAddBaseInfoState"
										type="button"
										class="rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										:disabled="
											layoutSelected != 'blogLayout' && layoutSelected != 'liveLayout'
										"
										:class="
											layoutSelected != 'blogLayout' && layoutSelected != 'liveLayout'
												? ' bg-gray-400 text-gray-200'
												: 'bg-softOrange hover:bg-darkOrange text-white'
										"
									>
										Next
									</button>
								</div>
							</div> -->
			<div class="flex flex-col gap-8 px-10 pt-10 pb-8">
				<div class="flex flex-col">
					<p class="mb-6 text-4xl font-bold text-center text-darkBlue">
						<span v-if="isEditMode">Edit Base Information</span>
						<span v-else>Create New Exhibition</span>
					</p>

					<div class="flex flex-col gap-6 sm:flex-row">
						<div class="flex flex-col gap-4">
							<div>
								<div class="flex gap-1">
									<label
										for="website"
										class="block text-sm font-medium leading-6 text-gray-900"
										>Select Layout</label
									>
									<span class="text-sm text-red-500">*</span>
								</div>

								<div class="flex flex-col gap-3">
									<div
										@click="chooseBox('blogLayout')"
										class="w-full sm:w-[220px] p-4 transition-transform transform ring-1 rounded-xl"
										:class="
											isSelecteBlogLayout
												? 'ring-softOrange shadow-lg'
												: 'ring-gray-300  hover:scale-105 hover:ring-softOrange hover:shadow-lg cursor-pointer'
										"
									>
										<div>
											<p class="font-bold text-darkBlue text-md">Blog Layout</p>
											<p class="text-xs text-gray-600">
												เเสดงข้อมูลภายในหน้าเดียว<br />ในรูปแบบของ Blog
											</p>
										</div>
									</div>
									<div
										@click="chooseBox('liveLayout')"
										class="w-full p-4 sm:w-[220px] transition-transform transform ring-1 rounded-xl"
										:class="
											isSelecteLiveLayout
												? 'ring-softOrange shadow-lg'
												: 'ring-gray-300  hover:scale-105 hover:ring-softOrange hover:shadow-lg cursor-pointer'
										"
									>
										<div>
											<p class="font-bold text-md text-darkBlue">Live Layout</p>
											<p class="text-xs text-gray-600">
												เเสดงข้อมูลในรูปแบบของ <br />Virtual Room
											</p>
										</div>
									</div>
								</div>
							</div>

							<!-- <div>
												<label
													for="website"
													class="block text-sm font-medium leading-6 text-gray-900"
													>Current Layout Selected</label
												>
												<LayoutCard
													@click="chooseBox('blogLayout')"
													icon="Blog Icon"
													layoutName="Blog Layout"
													layoutDesc="เเสดงข้อมูลภายในหน้าเดียวในรูปแบบของ Blog"
													:isSelected="isSelecteBlogLayout"
													v-show="isSelecteBlogLayout"
												/>
												<LayoutCard
													@click="chooseBox('liveLayout')"
													icon="Live Icon"
													layoutName="Live Layout"
													layoutDesc="เเสดงข้อมูลในรูปแบบของ Virtual Room"
													:isSelected="isSelecteLiveLayout"
													v-show="isSelecteLiveLayout"
												/>
											</div> -->
							<div class="col-span-full">
								<div class="flex gap-1">
									<label
										for="website"
										class="block text-sm font-medium leading-6 text-gray-900"
										>Thumbnail Image</label
									>
									<span class="text-sm text-red-500">*</span>
								</div>
								<div
									class="flex justify-center p-6 border border-dashed rounded-lg border-gray-900/25"
								>
									<div class="flex flex-col justify-center text-center item-center">
										<PhotoIcon
											v-show="imageUrl === ''"
											class="w-10 h-10 mx-auto text-gray-300"
											aria-hidden="true"
										/>
										<div class="flex justify-center">
											<img class="w-40" :src="imageUrl" v-show="imageUrl != ''" />
										</div>

										<div class="flex flex-col mt-2 text-sm leading-6 text-gray-600">
											<label
												for="file-upload"
												class="relative text-xs font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
											>
												<span>Upload a file</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													class="sr-only"
													@change="upLoadImg"
												/>
											</label>
											<p class="text-xs">or drag and drop</p>
										</div>
										<p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
									</div>
								</div>
							</div>
						</div>
						<div class="w-full">
							<div class="w-full">
								<div class="grid w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
									<div class="sm:col-span-4">
										<div class="flex gap-1">
											<label
												for="website"
												class="block text-sm font-medium leading-6 text-gray-900"
												>Exhibition Name</label
											>
											<span class="text-sm text-red-500">*</span>
										</div>
										<div>
											<div
												class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-softOrange sm:max-w-md"
											>
												<input
													type="text"
													name="website"
													id="website"
													class="block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
													placeholder="Exhibition Name"
													v-model="baseInfoForm.exhibitionName"
												/>
											</div>
										</div>
									</div>

									<div class="col-span-full">
										<div class="flex gap-1">
											<label
												for="website"
												class="block text-sm font-medium leading-6 text-gray-900"
												>Exhibition Description</label
											>
											<span class="text-sm text-red-500">*</span>
										</div>
										<div>
											<textarea
												id="about"
												name="about"
												rows="3"
												class="block w-full focus-within:outline-none focus:ring-1 focus:ring-inset focus:ring-softOrange rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
												v-model="baseInfoForm.exhibitionDescription"
												placeholder="Exhibition Description"
											/>
										</div>
										<p class="mt-2 text-sm leading-6 text-gray-600">
											Write a few sentences about your exhibition.
										</p>
									</div>
									<div class="sm:col-span-3">
										<div class="flex gap-1">
											<label
												for="website"
												class="block text-sm font-medium leading-6 text-gray-900"
												>Start Date</label
											>
											<span class="text-sm text-red-500">*</span>
										</div>
										<div>
											<VueDatePicker
												v-model="baseInfoForm.startDate"
												:enable-time-picker="false"
												placeholder="Select Date"
											></VueDatePicker>
										</div>
									</div>

									<div class="sm:col-span-3">
										<div class="flex gap-1">
											<label
												for="website"
												class="block text-sm font-medium leading-6 text-gray-900"
												>End Date</label
											>
											<span class="text-sm text-red-500">*</span>
										</div>
										<div>
											<VueDatePicker
												v-model="baseInfoForm.endDate"
												:enable-time-picker="false"
												placeholder="Select Date"
											></VueDatePicker>
										</div>
									</div>
									<div class="sm:col-span-3">
										<div class="flex gap-1">
											<label
												for="website"
												class="block text-sm font-medium leading-6 text-gray-900"
												>Exhibition Category</label
											>
											<span class="text-sm text-red-500">*</span>
										</div>
										<div>
											<select
												v-model="selectedCategory"
												@change="selectCategory"
												id="country"
												name="country"
												autocomplete="country-name"
												class="block w-full focus-within:outline-none focus:ring-1 focus:ring-inset focus:ring-softOrange rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
											>
												<option value="Art">Art</option>
												<option value="Acedemic">Acedemic</option>
											</select>
										</div>
									</div>
									<div class="sm:col-span-3">
										<div class="flex gap-1">
											<label
												for="website"
												class="block text-sm font-medium leading-6 text-gray-900"
												>Tags</label
											>
										</div>
										<div
											class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md"
										>
											<input
												type="text"
												name="website"
												id="website"
												class="block flex-1 rounded-md border-0 focus-within:outline-none focus:ring-1 focus:ring-inset focus:ring-softOrange bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
												placeholder="Tags"
												v-model="tagInput"
											/>
											<button
												@click="addTag"
												type="button"
												class="px-2 py-1 text-xs text-gray-400 rounded shadow-sm"
											>
												Add
											</button>
										</div>
									</div>
									<div class="col-span-full">
										<div class="flex flex-wrap items-end gap-2">
											<div
												v-for="(tag, index) in baseInfoForm.exhibitionTags"
												:key="index"
												class="flex items-center justify-center p-1 px-3 text-xs border border-gray-300 rounded-full text-darkBlue"
											>
												{{ tag }}
												<XMarkIcon
													@click="removeTag(index)"
													class="w-3 h-3 font-bold text-gray-400 cursor-pointer hover:text-darkOrange"
												/>
											</div>
										</div>
									</div>
									<div class="col-span-full">
										<div class="flex flex-col sm:gap-6 sm:flex-col">
											<div class="w-fit">
												<div class="flex gap-1">
													<label
														for="website"
														class="block text-sm font-medium leading-6 text-gray-900"
														>Save as</label
													>
													<span class="text-sm text-red-500">*</span>
												</div>
											</div>

											<div class="flex">
												<label class="inline-flex items-center justify-end cursor-pointer">
													<span
														class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
														>Private</span
													>
													<input
														type="checkbox"
														:value="true"
														class="sr-only peer"
														v-model="baseInfoForm.isPublic"
													/>
													<div
														class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-softOrange"
													></div>
													<span
														class="text-sm font-medium text-gray-900 ms-3 dark:text-gray-300"
														>Public</span
													>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-end gap-6 mt-4">
						<button
							@click="clearBaseInfoForm"
							type="button"
							class="text-sm font-semibold leading-6 text-gray-900"
						>
							Cancel
						</button>
						<button
							v-show="isEditMode === false"
							@click="$emit('next', baseInfoForm)"
							type="button"
							class="rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							:disabled="isNotNullInput === false"
							:class="
								isNotNullInput === false
									? ' bg-gray-400 text-gray-200'
									: 'bg-softOrange hover:bg-darkOrange text-white'
							"
						>
							Next
						</button>
						<button
							v-show="isEditMode === true"
							@click="$emit('edit')"
							type="button"
							class="rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							:disabled="isNotNullInput === false"
							:class="
								isNotNullInput === false
									? ' bg-gray-400 text-gray-200'
									: 'bg-softOrange hover:bg-darkOrange text-white'
							"
						>
							Save
						</button>
					</div>
				</div>
			</div>
			<!-- {{ exhibitionData }} -->
		</div>
	</div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	TransitionChild,
	TransitionRoot
} from '@headlessui/vue'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
	open: {
		type: Boolean,
		default: true
	},
	info: {
		type: Object,
		require: true
	},
	isEditMode: {
		type: Boolean,
		require: true
	}
	// currentLayout: {
	// 	type: String,
	// 	default: ''
	// }
})
// console.log(props.info)
const baseInfoForm = ref(props.info)
defineEmits(['next', 'edit'])

const layoutSelected = ref(props.currentLayout)
const isSelecteLiveLayout = ref(false)
const isSelecteBlogLayout = ref(false)
// const baseInfoForm = ref({
// 	exhibitionName: '',
// 	exhibitionDescription: '',
// 	startDate: '',
// 	endDate: '',
// 	isPublic: false,
// 	exhibitionCategories: [],
// 	exhibitionTags: [],
// 	layoutUsed: ''
// })

const chooseBox = (box) => {
	if (box === 'blogLayout') {
		isSelecteBlogLayout.value = true
		isSelecteLiveLayout.value = false
	} else if (box === 'liveLayout') {
		isSelecteBlogLayout.value = false
		isSelecteLiveLayout.value = true
	}
	baseInfoForm.value.layoutUsed = box
}

const currentModelState = ref('selectLayout')
const goToAddBaseInfoState = () => {
	currentModelState.value = 'addBaseInfo'
}

const selectedCategory = ref(props.info.exhibitionCategories[0])
const selectCategory = () => {
	baseInfoForm.value.exhibitionCategories[0] = selectedCategory.value
}

const tagInput = ref('')
const addTag = () => {
	tagInput.value = tagInput.value.trimStart()
	tagInput.value = tagInput.value.trimEnd()
	if (tagInput.value != '') {
		baseInfoForm.value.exhibitionTags.push(tagInput.value)
	}
	tagInput.value = ''
}
const removeTag = (index) => {
	baseInfoForm.value.exhibitionTags.splice(index, 1)
}
const clearBaseInfoForm = (index) => {
	baseInfoForm.value = {
		exhibitionName: '',
		exhibitionDescription: '',
		startDate: '',
		endDate: '',
		isPublic: false,
		exhibitionCategories: [],
		exhibitionTags: [],
		layoutUsed: ''
	}
	selectedCategory.value = ''
	isSelecteBlogLayout.value = false
	isSelecteLiveLayout.value = false
}

// const isNotNullInput = ref(false)
const isNotNullInput = computed(() => {
	if (
		baseInfoForm.value.exhibitionName != '' &&
		baseInfoForm.value.exhibitionDescription != '' &&
		baseInfoForm.value.startDate != '' &&
		baseInfoForm.value.endDate != '' &&
		selectedCategory.value != '' &&
		baseInfoForm.value.layoutUsed != '' &&
		baseInfoForm.value.thumbnailImg != ''
	) {
		return true
	} else {
		return false
	}
})
const checkLayout = () => {
	if (baseInfoForm.value.layoutUsed === 'blogLayout') {
		isSelecteBlogLayout.value = true
		isSelecteLiveLayout.value = false
	} else if (baseInfoForm.value.layoutUsed === 'liveLayout') {
		isSelecteBlogLayout.value = false
		isSelecteLiveLayout.value = true
	}
}

checkLayout()
const base64String = ref('')

const files = ref('')
const imageUrl = ref(props.info.thumbnailImg)

const upLoadImg = async (e) => {
	baseInfoForm.value.thumbnailImg = e.target.files || e.dataTransfer.files
	// if (!files.value.length) return
	// const { snapshot, dowloadUrl, metadata } = await uploadFile(files[0])
	if (baseInfoForm.value.thumbnailImg) {
		imageUrl.value = URL.createObjectURL(baseInfoForm.value.thumbnailImg[0])
	}
}
</script>
