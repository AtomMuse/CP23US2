<template>
	<div class="flex flex-col w-full gap-5">
		<div
			class="flex flex-col items-center justify-center px-8 py-8 lg:py-16 lg:px-12"
		>
			<!-- <p>BLOG LAYOUT</p> -->
			<div>
				<div class="flex flex-col items-center gap-3 text-center">
					<p class="text-4xl font-bold">{{ baseInfo.exhibitionName }}</p>
					<p>{{ baseInfo.exhibitionDescription }}</p>
					<p class="text-blue-500">
						{{ startDateFormatted }} - {{ endDateFormatted }}
					</p>
					<button
						@click="$emit('editBaseInfo', sectionIdList)"
						type="button"
						class="hover:border-softOrange hover:text-softOrange hover:text-softOramge relative inline-flex items-center gap-x-1.5 rounded-md border border-gray-300 text-gray-400 px-3 py-2 text-sm font-medium shadow-sm"
					>
						Edit Base Information
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<div
				class="w-full h-full"
				v-for="(section, index) in exhibitionForm.exhibitionSections"
				:key="index"
			>
				<div v-if="section.sectionState === ''" class="px-8 lg:px-12">
					<div
						@click="addSection(index)"
						class="border-2 text-gray-400 border-gray-400 border-dashed min-h-[180px] rounded-lg flex justify-center items-center cursor-pointer"
					>
						Add Section +
					</div>
				</div>

				<div
					v-if="section.sectionState === 'sectionType'"
					class="mx-8 lg:mx-12 p-6 pb-8 border-2 border-dashed border-gray-400 min-h-[180px] rounded-lg flex justify-center items-center flex-col"
				>
					<nav class="flex justify-start w-full mb-4" aria-label="Breadcrumb">
						<ol role="list" class="flex items-center space-x-4">
							<span class="text-sm font-medium text-gray-500 lowercase cursor-default"
								>select section type</span
							>
						</ol>
					</nav>
					<div
						class="flex flex-col items-center justify-center w-full h-full gap-8 md:flex-row"
					>
						<SectionCard
							colType="1col"
							@click="selectType(index, '1col')"
							icon="icon"
							title="1 Column"
							description="แสดงเนื้อหาแบบ column เดียว"
						/>
						<SectionCard
							colType="1col"
							@click="selectType(index, '2col')"
							icon="icon"
							title="2 Columns"
							description="แสดงเนื้อหาแบบ 2 columns"
						/>
						<SectionCard
							colType="1col"
							@click="selectType(index, '3col')"
							icon="icon"
							title="3 Columns"
							description="แสดงเนื้อหาแบบ 3 columns"
						/>
					</div>
					<!-- <div class="w-full">
						<div class="flex justify-end gap-4 mt-4">
							<button
								type="button"
								class="cursor-default rounded-md text-gray-400 ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Back
							</button>
							<button
								type="button"
								class="cursor-default rounded-md bg-gray-400 text-gray-200 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Save
							</button>
						</div>
					</div> -->
				</div>

				<div
					v-if="section.sectionState === 'contentType'"
					class="mx-8 lg:mx-12 p-6 pb-8 border-2 border-dashed border-gray-400 min-h-[180px] rounded-lg flex items-center flex-col"
				>
					<nav class="flex justify-start w-full mb-4" aria-label="Breadcrumb">
						<ol role="list" class="flex items-center space-x-4">
							<span
								@click="goToSectionType(index)"
								class="text-sm font-medium text-gray-500 lowercase cursor-pointer hover:text-gray-700"
								>select section type</span
							>
							<ChevronRightIcon
								class="flex-shrink-0 w-5 h-5 text-gray-400"
								aria-hidden="true"
							/>
							<span
								class="ml-4 text-sm font-medium text-gray-500 lowercase cursor-default"
								>select content type</span
							>
							<ChevronRightIcon
								v-show="section.sectionType === '2col'"
								class="flex-shrink-0 w-5 h-5 text-gray-400"
								aria-hidden="true"
							/>
							<span
								v-show="section.sectionType === '2col'"
								class="ml-4 text-sm font-medium text-gray-500 lowercase cursor-default"
								>add content</span
							>
						</ol>
					</nav>

					<div>
						<div
							class="flex flex-col w-full h-full"
							v-if="section.sectionType === '1col'"
						>
							<div class="flex flex-col w-full h-full gap-8 lg:flex-row">
								<SectionCard
									v-for="(type, index) in contentTypes1col"
									:key="index"
									@click="selectContent(type)"
									icon="icon"
									:title="type"
									:description="type"
								/>
							</div>
						</div>
						<!-- 2col -->
						<div
							class="flex flex-col w-full h-full gap-6"
							v-if="section.sectionType === '2col'"
						>
							<div class="flex flex-col h-full gap-6 lg:flex-row">
								<div class="w-full h-full">
									<p class="text-xs text-center">Left Column</p>

									<div
										class="flex gap-4 p-4 border-2 border-dashed rounded-md min-h-[195px]"
									>
										<div
											class="flex flex-col w-full gap-4 lg:flex-row"
											v-if="section.leftCol === undefined"
										>
											<SectionCard
												v-for="(type, index) in contentTypes2col"
												:key="index"
												@click="selectContentType2col('left', type)"
												icon="icon"
												:title="type"
												:description="type"
											/>
										</div>
										<div v-else>
											<div class="flex flex-col justify-between h-full gap-4">
												<div>
													<div
														v-if="section.leftCol.contentType === 'image with description'"
														class="flex flex-col gap-3 min-w-[492px]"
													>
														<p
															class="text-xs font-semibold text-center uppercase text-darkBlue"
														>
															{{ section.leftCol.contentType }}
														</p>
														<BaseFileUploadInput
															require
															label="Image"
															@selectFile="upLoad($event, index, 'left')"
															inputId="left"
														/>

														<BaseInput
															v-model="section.leftCol.imageDescription"
															label="Image Description"
															placeholder="Image Description"
														/>
													</div>
													<div
														v-if="section.leftCol.contentType === 'title and text'"
														class="flex flex-col gap-3 min-w-[492px]"
													>
														<p
															class="text-xs font-semibold text-center uppercase text-darkBlue"
														>
															{{ section.leftCol.contentType }}
														</p>
														<BaseInput
															v-model="section.leftCol.title"
															label="Title"
															placeholder="Title"
														/>
														<BaseTextArea
															v-model="section.leftCol.text"
															label="Text"
															placeholder="Text"
														/>
													</div>
												</div>

												<button
													@click="changeContentTypeLeftCol(index)"
													type="button"
													class="w-full rounded-md text-gray-900 ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
												>
													Change Content Type
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="w-full h-full">
									<p class="text-xs text-center">Right Column</p>
									<div class="flex p-4 border-2 border-dashed rounded-md min-h-[195px]">
										<div
											class="flex flex-col w-full gap-4 lg:flex-row"
											v-if="section.rightCol === undefined"
										>
											<SectionCard
												v-for="(type, index) in contentTypes2col"
												:key="index"
												@click="selectContentType2col('right', type)"
												icon="icon"
												:title="type"
												:description="type"
											/>
										</div>
										<div v-else class="flex flex-col justify-between h-full gap-4">
											<div>
												<div
													v-if="section.rightCol.contentType === 'image with description'"
													class="flex flex-col gap-3 min-w-[492px]"
												>
													<p
														class="text-xs font-semibold text-center uppercase text-darkBlue"
													>
														{{ section.rightCol.contentType }}
													</p>
													<BaseFileUploadInput
														require
														label="Image"
														@selectFile="upLoad($event, index, 'right')"
														inputId="right"
													/>
													<BaseInput
														v-model="section.rightCol.imageDescription"
														label="Image Description"
														placeholder="Image Description"
													/>
												</div>
												<div
													v-if="section.rightCol.contentType === 'title and text'"
													class="flex flex-col gap-3 min-w-[492px]"
												>
													<p
														class="text-xs font-semibold text-center uppercase text-darkBlue"
													>
														{{ section.rightCol.contentType }}
													</p>
													<BaseInput
														v-model="section.rightCol.title"
														label="Title"
														placeholder="Title"
													/>
													<BaseTextArea
														v-model="section.rightCol.text"
														label="Text"
														placeholder="Text"
													/>
												</div>
											</div>

											<button
												@click="changeContentTypeRightCol(index)"
												type="button"
												class="w-full rounded-md text-gray-900 ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												Change Content Type
											</button>
										</div>
									</div>
								</div>
							</div>
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
									v-model="section.background"
									:disabled="!selectedColor"
								/>
							</div>
							<!-- <div class="flex items-center justify-center w-full">
								<div class="h-6 bg-pink-400" @click="prevState(index)">back</div>
								<div class="h-6 bg-green-400" @click="save">save</div>
							</div> -->
						</div>
						<div
							class="flex flex-col w-full h-full"
							v-if="section.sectionType === '3col'"
						>
							<div class="flex h-full gap-6">
								<SectionCard
									v-for="(type, index) in contentTypes3col"
									:key="index"
									@click="selectContent(type)"
									icon="icon"
									:title="type"
									:description="type"
								/>
							</div>

							<!-- <div class="h-6 mt-5 bg-pink-400" @click="prevState(index)">back</div> -->
						</div>
						<!-- <div class="w-full h-full bg-red-500" @click="selectContent('1col')">
							2col
						</div>
						<div class="w-full h-full bg-red-500" @click="selectContent('2col')">
							3col
						</div> -->
					</div>
					<!-- <div class="w-full">
						<div class="flex justify-end gap-4 mt-4">
							<button
								@click="goToSectionType(index)"
								type="button"
								class="rounded-md text-gray-900 ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Back
							</button>
							<button
								type="button"
								class="bg-gray-400 text-gray-200 rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Save
							</button>
						</div>
					</div> -->
				</div>
				<div
					v-if="section.sectionState === 'addContent'"
					class="mx-8 lg:mx-12 p-6 border-2 border-dashed border-gray-400 min-h-[180px] rounded-lg flex items-center flex-col"
				>
					<nav class="flex justify-start w-full mb-4" aria-label="Breadcrumb">
						<ol role="list" class="flex items-center space-x-4">
							<span
								@click="goToSectionType(index)"
								class="text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700"
								>select section type</span
							>
							<ChevronRightIcon
								class="flex-shrink-0 w-5 h-5 text-gray-400"
								aria-hidden="true"
							/>
							<span
								@click="goToContentType(index)"
								class="ml-4 text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700"
								>select content type</span
							>
							<ChevronRightIcon
								class="flex-shrink-0 w-5 h-5 text-gray-400"
								aria-hidden="true"
							/>
							<span class="ml-4 text-sm font-medium text-gray-500 cursor-default"
								>add content</span
							>
						</ol>
					</nav>
					<div v-if="section.sectionType === '1col'">
						<div
							v-if="section.contentType === 'background with title devider'"
							class="flex flex-col gap-4 p-4 border-2 border-dashed rounded-md"
						>
							<p class="text-xs font-semibold text-center uppercase text-darkBlue">
								{{ section.contentType }}
							</p>
							<div class="flex flex-col min-w-[492px]">
								<BaseFileUploadInput
									require
									label="Image 1"
									@selectFile="upLoad($event, index, '1col')"
									inputId="1"
								/>
							</div>
							<BaseInput
								v-model="section.title"
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
						<div
							v-if="section.contentType === 'title and text with border devider'"
							class="flex flex-col gap-4 p-4 border-2 border-dashed rounded-md"
						>
							<p class="text-xs font-semibold text-center uppercase text-darkBlue">
								{{ section.contentType }}
							</p>
							<div class="flex flex-col gap-3 min-w-[492px]">
								<BaseInput v-model="section.title" label="Title" placeholder="Title" />
								<BaseInput v-model="section.text" label="Text" placeholder="Text" />
							</div>
						</div>
						<div
							v-if="section.contentType === 'title and text with bg devider'"
							class="flex flex-col gap-4 p-4 border-2 border-dashed rounded-md"
						>
							<p class="text-xs font-semibold text-center uppercase text-darkBlue">
								{{ section.contentType }}
							</p>
							<div class="flex flex-col gap-3 min-w-[492px]">
								<BaseInput v-model="section.title" label="Title" placeholder="Title" />
								<BaseInput v-model="section.text" label="Text" placeholder="Text" />

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

									<!-- <input
										type="color"
										v-model="section.background"
										:disabled="!selectedColor"
									/> -->
									<input
										type="color"
										class="block h-10 p-1 bg-white border border-gray-200 rounded-lg cursor-pointer w-14 disabled:opacity-50 disabled:pointer-events-none"
										id="hs-color-input"
										title="Choose your color"
										v-model="section.background"
										:disabled="!selectedColor"
									/>
								</div>
							</div>
						</div>
					</div>
					<div v-if="section.sectionType === '3col'" class="flex flex-col gap-4">
						<p class="text-xs font-semibold text-center uppercase text-darkBlue">
							{{ section.contentType }}
						</p>
						<div
							class="flex flex-col items-center justify-center w-full gap-6 lg:flex-row"
						>
							<BaseFileUploadInput
								v-for="(image, index) in section.images"
								:key="index"
								require
								:label="`Image ${index + 1}`"
								@selectFile="upLoad($event, currentSectionIndex, index)"
								:inputId="index.toString()"
							/>
						</div>
					</div>
				</div>
				<div v-if="section.sectionState === 'created'">
					<div v-if="section.sectionType === '1col'">
						<BgWithTitleSection
							v-if="section.contentType === 'background with title devider'"
							:backgroundImg="section.background"
							:title="section.title"
						/>
						<TextWithBorderSection
							v-if="section.contentType === 'title and text with border devider'"
							:text="section.text"
							:title="section.title"
						/>
						<TitleAndTextSection
							v-if="section.contentType === 'title and text with bg devider'"
							:title="section.title"
							:text="section.text"
							:background="section.background"
						/>
					</div>
					<div
						v-if="section.sectionType === '2col'"
						class="flex flex-col w-full gap-6 p-8 lg:grid lg:grid-cols-12 lg:py-12 lg:flex-row"
						:class="section.background"
					>
						<!-- left -->
						<div
							v-if="section.leftCol.contentType === 'image with description'"
							class="lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-6"
						>
							<ImageWithDesContent
								:image="section.leftCol.image"
								:description="section.leftCol.imageDescription"
								class="lg:col-start-2 lg:col-span-4"
							/>
						</div>
						<div
							v-if="section.leftCol.contentType === 'title and text'"
							class="lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-5"
						>
							<TitleAndTextContent
								:title="section.leftCol.title"
								:text="section.leftCol.text"
								class="col-span-4 col-start-2"
								textRight
							/>
						</div>
						<!-- left end -->
						<!-- right -->
						<div
							v-if="section.rightCol.contentType === 'title and text'"
							class="lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-5"
						>
							<TitleAndTextContent
								:title="section.rightCol.title"
								:text="section.rightCol.text"
								class="lg:col-start-2 lg:col-span-4"
							/>
						</div>
						<div
							v-if="section.rightCol.contentType === 'image with description'"
							class="lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-6"
						>
							<ImageWithDesContent
								:image="section.rightCol.image"
								:description="section.rightCol.imageDescription"
								class="lg:col-start-2 lg:col-span-4"
							/>
						</div>
						<!-- right end -->
					</div>
					<!-- 3col start -->
					<div
						v-if="section.sectionType === '3col'"
						class="py-12 lg:grid lg:grid-cols-12 lg:gap-6"
					>
						<ImagesShowerSection
							:images="section.images"
							class="flex justify-between lg:col-span-10 lg:col-start-2"
						/>
					</div>
					<!-- 3col end -->
				</div>
				<div
					class="w-full px-8 lg:px-12"
					v-show="section.sectionState != 'created'"
				>
					<div class="flex justify-end gap-4 mt-4">
						<button
							:disabled="section.sectionState === 'sectionType'"
							@click="prevState(index)"
							type="button"
							class="rounded-md ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							:class="
								section.sectionState === 'sectionType'
									? 'cursor-default  text-gray-400    '
									: 'cursor-pointer text-gray-900 '
							"
						>
							Back
						</button>
						<button
							:disabled="section.sectionState === 'addSection'"
							@click="save"
							type="button"
							class="rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							:class="
								section.sectionState === 'addContent' || section.sectionType === '2col'
									? 'cursor-pointer bg-darkOrange text-white'
									: 'cursor-default bg-gray-400 text-gray-200 '
							"
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
		<button
			@click="$emit('updateExhibition', sectionIdList)"
			type="button"
			class="cursor-pointer bg-darkOrange text-white rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Save Exhibition
		</button>
	</div>
</template>
<script setup>
const props = defineProps({
	baseInfo: {
		type: Object,
		require: true
	},
	exhibitionId: {
		type: String,
		require: true
	}
})
import { ChevronRightIcon, HomeIcon, PhotoIcon } from '@heroicons/vue/20/solid'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import SectionCard from './SectionCard.vue'
defineEmits(['editBaseInfo', 'updateExhibition'])
const selectedCategory = ref('')
const isSaveBase = ref(false)
const contentTypes1col = [
	'background with title devider',
	'title and text with border devider',
	'title and text with bg devider'
]
const contentTypes2col = ['image with description', 'title and text']
const contentTypes3col = ['images shower']
const exhibitionId = ref()
const sectionIdList = ref([])
const base64String = ref('')
const isShowModal = ref()
const layoutSelected = ref()
const tagInput = ref('')
const currentSectionIndex = ref(0)
const selectedColor = ref(false)
const changeLayout = (currentLayOut) => {
	layoutSelected.value = currentLayOut
	isShowModal.value = true
}
const exhibitionForm = ref({
	exhibitionName: '',
	exhibitionDescription: '',
	startDate: '',
	endDate: '',
	isPublic: false,
	exhibitionCategories: [],
	exhibitionTags: [],
	layoutUsed: '',
	exhibitionSections: [{ sectionState: '', sectionType: '' }],
	thumbnailImg: ''
})
const selectCategory = () => {
	exhibitionForm.value.exhibitionCategories[0] = selectedCategory.value
}

const addTag = () => {
	tagInput.value = tagInput.value.trimStart()
	tagInput.value = tagInput.value.trimEnd()
	if (tagInput.value != '') {
		exhibitionForm.value.exhibitionTags.push(tagInput.value)
	}
	tagInput.value = ''
}
const removeTag = (index) => {
	exhibitionForm.value.exhibitionTags.splice(index)
}
const saveBase = async () => {
	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}exhibitions`
	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(exhibitionForm.value)
	})
	if (res.status === 201) {
		// exhibitionsData.value = await res.json()
		let returnData = await res.json()
		exhibitionId.value = returnData._id
		isSaveBase.value = true
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}

const addSection = (index) => {
	if (index != 0) {
		exhibitionForm.value.exhibitionSections.push({})
	}
	exhibitionForm.value.exhibitionSections[index].sectionState = 'sectionType'
	currentSectionIndex.value = index
}

const selectType = (index, type) => {
	exhibitionForm.value.exhibitionSections[index].sectionState = 'contentType'
	exhibitionForm.value.exhibitionSections[index].sectionType = type
}

const prevState = (index) => {
	if (
		exhibitionForm.value.exhibitionSections[index].sectionState === 'sectionType'
	) {
		exhibitionForm.value.exhibitionSections[index].sectionState = ''
		delete exhibitionForm.value.exhibitionSections[index].sectionType
	} else if (
		exhibitionForm.value.exhibitionSections[index].sectionState === 'contentType'
	) {
		exhibitionForm.value.exhibitionSections[index].sectionState = 'sectionType'

		delete exhibitionForm.value.exhibitionSections[index].sectionType
		delete exhibitionForm.value.exhibitionSections[index].leftCol
		delete exhibitionForm.value.exhibitionSections[index].rightCol

		console.log(exhibitionForm.value.exhibitionSections[index])
	} else if (
		exhibitionForm.value.exhibitionSections[index].sectionState === 'addContent'
	) {
		exhibitionForm.value.exhibitionSections[index].sectionState = 'contentType'
	}
}

const selectContent = (content) => {
	exhibitionForm.value.exhibitionSections[
		currentSectionIndex.value
	].sectionState = 'addContent'
	exhibitionForm.value.exhibitionSections[
		currentSectionIndex.value
	].contentType = content

	if (
		exhibitionForm.value.exhibitionSections[currentSectionIndex.value]
			.sectionType === '3col'
	) {
		exhibitionForm.value.exhibitionSections[currentSectionIndex.value].images = [
			'',
			'',
			''
		]
	}
}

const selectContentType2col = (col, type) => {
	console.log(currentSectionIndex.value)
	if (col === 'left') {
		exhibitionForm.value.exhibitionSections[currentSectionIndex.value].leftCol = {
			contentType: type
		}
	} else {
		exhibitionForm.value.exhibitionSections[currentSectionIndex.value].rightCol =
			{
				contentType: type
			}
	}
}

const save = async () => {
	// if (
	// 	exhibitionForm.value.exhibitiontionSections[currentSectionIndex.value]
	// 		.sectionType === '1col'
	// ) {
	// 	console.log(
	// 		exhibitionForm.value.exhibitiontionSections[currentSectionIndex.value]
	// 	)
	// }

	if (
		exhibitionForm.value.exhibitionSections[currentSectionIndex.value]
			.sectionType === '1col'
	) {
		if (
			exhibitionForm.value.exhibitionSections[currentSectionIndex.value]
				.contentType === 'title and text with bg devider'
		) {
			// exhibitionForm.value.exhibitionSections[
			// 	currentSectionIndex.value
			// ].background = `bg-[${
			// 	exhibitionForm.value.exhibitionSections[currentSectionIndex.value]
			// 		.background
			// }]`
		} else {
			exhibitionForm.value.exhibitionSections[
				currentSectionIndex.value
			].background =
				exhibitionForm.value.exhibitionSections[
					currentSectionIndex.value
				].background

			console.log(currentSectionIndex.value)
			console.log('save 1 col')
			console.log(
				exhibitionForm.value.exhibitionSections[currentSectionIndex.value]
					.background
			)
		}
	} else if (
		exhibitionForm.value.exhibitionSections[currentSectionIndex.value]
			.sectionType === '2col' &&
		selectedColor.value === true
	) {
		exhibitionForm.value.exhibitionSections[
			currentSectionIndex.value
		].background = `bg-[${
			exhibitionForm.value.exhibitionSections[currentSectionIndex.value].background
		}]`
	}

	// if (
	// 	selectedColor.value === false &&
	// 	exhibitionForm.value.exhibitiontionSections[currentSectionIndex.value]
	// 		.background === undefined
	// ) {
	// 	exhibitionForm.value.exhibitiontionSections[
	// 		currentSectionIndex.value
	// 	].background = 'bg-transparent'
	// 	console.log('hellooooo')
	// }

	selectedColor.value === false
	// else {
	// 	exhibitionForm.value.exhibitiontionSections[
	// 		currentSectionIndex.value
	// 	].background = `bg-[${
	// 		exhibitionForm.value.exhibitiontionSections[currentSectionIndex.value]
	// 			.background
	// 	}]`

	// }

	await createSection(
		exhibitionForm.value.exhibitionSections[currentSectionIndex.value]
	)
	exhibitionForm.value.exhibitionSections[
		currentSectionIndex.value
	].sectionState = 'created'
	currentSectionIndex.value = currentSectionIndex.value + 1
	exhibitionForm.value.exhibitionSections.push({
		sectionState: 'sectionType'
	})
	console.log(exhibitionForm.value)
}

const sectionForm = ref({})
const createSection = async (section) => {
	if (section.title === undefined) {
		sectionForm.value = {
			...section,
			exhibitionID: props.exhibitionId,
			title: ''
		}
	} else {
		sectionForm.value = {
			...section,
			exhibitionID: props.exhibitionId
		}
	}

	console.log(sectionForm.value)

	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}sections`
	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(sectionForm.value)
	})
	if (res.status === 201) {
		// exhibitionsData.value = await res.json()
		let returnData = await res.json()
		sectionIdList.value.push(returnData._id)
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}

const startDateFormatted = ref('')
const endDateFormatted = ref('')
const getDateFormat = () => {
	startDateFormatted.value =
		new Date(props.baseInfo.startDate).getDate() +
		' ' +
		new Date(props.baseInfo.startDate).toDateString().slice(4, 7) +
		' ' +
		new Date(props.baseInfo.startDate).getFullYear()
	endDateFormatted.value =
		new Date(props.baseInfo.endDate).getDate() +
		' ' +
		new Date(props.baseInfo.endDate).toDateString().slice(4, 7) +
		' ' +
		new Date(props.baseInfo.endDate).getUTCFullYear()
	let date = new Date()
}
getDateFormat()

const exhibitionData = ref()
const fileName = ref('image')
const goToSectionType = (index) => {
	exhibitionForm.value.exhibitionSections[index].sectionState = 'sectionType'
}
const goToContentType = (index) => {
	exhibitionForm.value.exhibitionSections[index].sectionState = 'contentType'
}

const changeContentTypeLeftCol = (index) => {
	delete exhibitionForm.value.exhibitionSections[index].leftCol
}

const changeContentTypeRightCol = (index) => {
	delete exhibitionForm.value.exhibitionSections[index].rightCol
}

const file = ref()
const getFile = (file) => {
	file.value = file
}
const upLoad = async (file, index, col) => {
	let { snapshot, dowloadUrl, metadata } = await uploadFile(file)
	console.log(file)
	if (col === '1col') {
		// if (fileUrl.length === 0) return
		// const { snapshot, dowloadUrl, metadata } = await uploadFile(file)
		exhibitionForm.value.exhibitionSections[index].background = dowloadUrl
		console.log('upload 1 col')
		console.log(exhibitionForm.value.exhibitionSections[index].background)
		console.log(index)
	} else if (
		exhibitionForm.value.exhibitionSections[index].sectionType === '2col'
	) {
		if (col === 'left') {
			exhibitionForm.value.exhibitionSections[index].leftCol.image = dowloadUrl
		} else {
			exhibitionForm.value.exhibitionSections[index].rightCol.image = dowloadUrl
		}
	} else if (
		exhibitionForm.value.exhibitionSections[index].sectionType === '3col'
	) {
		console.log(col)
		if (col === 0) {
			exhibitionForm.value.exhibitionSections[index].images[0] = dowloadUrl
		} else if (col === 1) {
			exhibitionForm.value.exhibitionSections[index].images[1] = dowloadUrl
		} else if (col === 2) {
			exhibitionForm.value.exhibitionSections[index].images[2] = dowloadUrl
		}
	}
	// console.log(exhibitionForm.value.exhibitiontionSections[index])
	// }
	// reader.readAsDataURL(file)
}
</script>

<style scoped></style>
