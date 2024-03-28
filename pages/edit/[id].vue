<template>
	<div class="w-full h-full">
		<div
			class="flex flex-col items-center justify-center px-8 lg:px-12"
			v-if="isAddBaseInfo"
		>
			<p>BLOG LAYOUT</p>
			<div>
				<div class="flex flex-col items-center gap-3 text-center">
					<p class="text-4xl font-bold">{{ exhibitionForm.exhibitionName }}</p>
					<p>{{ exhibitionForm.exhibitionDescription }}</p>
					<p class="text-blue-500">
						{{ startDateFormatted }} - {{ endDateFormatted }}
					</p>
				</div>
			</div>
			<button
				@click="editBaseInfo"
				type="button"
				class="hover:border-softOrange hover:text-softOrange hover:text-softOramge relative inline-flex items-center gap-x-1.5 rounded-md border border-gray-300 text-gray-400 px-3 py-2 text-sm font-medium shadow-sm"
			>
				Edit Base Information
			</button>
		</div>
		<CreateModal
			:open="isShowModal"
			v-if="isShowModal"
			:info="exhibitionForm"
			:isEditMode="isEditMode"
			@edit="fetchEditBaseInfo"
		/>
		<div class="flex flex-col justify-center" v-if="isAddBaseInfo">
			<div
				v-for="(section, index) in exhibitionForm.exhibitionSections"
				:key="index"
			>
				<div>
					<div v-if="section.sectionType === '1col'">
						<BgWithTitleSection
							v-if="section.contentType === 'background with title devider'"
							:backgroundImg="section.background"
							:title="section.title"
							:data="section"
							isOwner
							@updateSection="updateSection(section, index)"
							@deleteSection="deleteSection(section._id)"
						/>
						<TextWithBorderSection
							v-if="section.contentType === 'title and text with border devider'"
							:text="section.text"
							:title="section.title"
							isOwner
							:data="section"
							@deleteSection="deleteSection(section._id)"
							@updateSection="updateSection(section, index)"
						/>
						<TitleAndTextSection
							v-if="section.contentType === 'title and text with bg devider'"
							:title="section.title"
							:text="section.text"
							:background="section.background"
							isOwner
							:data="section"
							@deleteSection="deleteSection(section._id)"
							@updateSection="updateSection(section, index)"
						/>
					</div>
					<div
						v-if="section.sectionType === '2col'"
						:style="
							section.background === undefined
								? ''
								: `background-color:${section.background}`
						"
					>
						<div v-if="section.isEditMode">
							<div
								class="mx-8 lg:mx-12 p-6 border-2 border-dashed border-gray-400 min-h-[180px] rounded-lg flex items-center flex-col"
							>
								<div class="flex flex-col w-full h-full gap-6">
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
																	@selectFile="getFile($event, index, 'left')"
																	inputId="left"
																	:file="section.leftCol.image"
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

														<!-- <button
															@click="changeContentTypeLeftCol(index)"
															type="button"
															class="w-full rounded-md text-gray-900 ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
														>
															Change Content Type
														</button> -->
													</div>
												</div>
											</div>
										</div>
										<div class="w-full h-full">
											<p class="text-xs text-center">Right Column</p>
											<div
												class="flex p-4 border-2 border-dashed rounded-md min-h-[195px]"
											>
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
																@selectFile="getFile($event, index, 'right')"
																inputId="right"
																:file="section.rightCol.image"
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
													<!-- 
													<button
														@click="changeContentTypeRightCol(index)"
														type="button"
														class="w-full rounded-md text-gray-900 ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
													>
														Change Content Type
													</button> -->
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
											v-model="section.background"
											:disabled="!selectedColor"
										/> -->

										<input
											type="color"
											class="block h-10 p-1 bg-white border border-gray-200 rounded-lg cursor-pointer w-14 disabled:opacity-50 disabled:pointer-events-none"
											id="hs-color-input"
											title="Choose your color"
											v-model="section.background"
											:disabled="!isSelectedColor"
										/>
									</div>
									<!-- <div class="flex items-center justify-center w-full">
								<div class="h-6 bg-pink-400" @click="prevState(index)">back</div>
								<div class="h-6 bg-green-400" @click="save">save</div>
							</div> -->
								</div>
							</div>
							<div class="flex justify-end gap-4 mx-8 mt-4 lg:mx-12">
								<button
									type="button"
									class="cursor-default text-gray-400 rounded-md ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Back
								</button>
								<button
									@click="updateSection(section, index)"
									type="button"
									class="cursor-pointer bg-darkOrange text-white rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</div>

						<div
							v-else
							class="flex flex-col w-full gap-6 p-8 lg:grid lg:grid-cols-12 lg:py-12 lg:flex-row"
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
						<div
							v-if="section.isEditMode === false"
							class="z-50 flex items-center justify-end w-full gap-2 px-6 text-xs text-darkOrange bottom-6"
						>
							<div
								@click="deleteSection(section._id)"
								class="flex items-end justify-center cursor-pointer hover:underline"
							>
								<p class="leading-none uppercase">delete</p>
								<TrashIcon class="w-4 h-4" />
							</div>
							<span>|</span>
							<div
								@click="goToEditMode2Col(index)"
								class="flex items-end justify-center cursor-pointer hover:underline"
							>
								<p class="leading-none uppercase">edit</p>
								<PencilIcon class="w-4 h-4" />
							</div>
						</div>
					</div>

					<!-- 3col start -->
					<div v-if="section.sectionType === '3col'">
						<div v-if="section.isEditMode">
							<div
								class="mx-8 lg:mx-12 p-6 border-2 border-dashed border-gray-400 min-h-[180px] rounded-lg flex items-center flex-col"
							>
								<div class="flex flex-col gap-4">
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
											@selectFile="getFile3Col($event, index)"
											:inputId="index.toString()"
											:file="image"
										/>
									</div>
								</div>
							</div>
							<div class="flex justify-end gap-4 mx-8 mt-4 lg:mx-12">
								<button
									type="button"
									class="cursor-default text-gray-400 rounded-md ring-1 ring-inset ring-gray-400 px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Back
								</button>
								<button
									@click="updateSection(section, index)"
									type="button"
									class="cursor-pointer bg-darkOrange text-white rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</div>
						<div v-else>
							<div class="py-12 lg:grid lg:grid-cols-12 lg:gap-6">
								<ImagesShowerSection
									:images="section.images"
									class="flex justify-between lg:col-span-10 lg:col-start-2"
								/>
							</div>
							<div
								class="z-50 flex items-center justify-end w-full gap-2 px-6 text-xs text-darkOrange bottom-6"
							>
								<div
									@click="deleteSection(section._id)"
									class="flex items-end justify-center cursor-pointer hover:underline"
								>
									<p class="leading-none uppercase">delete</p>
									<TrashIcon class="w-4 h-4" />
								</div>
								<span>|</span>
								<div
									@click="goToEditMode2Col(index)"
									class="flex items-end justify-center cursor-pointer hover:underline"
								>
									<p class="leading-none uppercase">edit</p>
									<PencilIcon class="w-4 h-4" />
								</div>
							</div>
						</div>
					</div>

					<!-- 3col end -->
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import Swal from 'sweetalert2'
import { TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'
const isEditMode = ref(false)
const isShowModal = ref(false)
const isAddBaseInfo = ref(true)
const route = useRoute()
const exhibitionForm = ref({})
const errorMessage = ref('')
const exhibitionId = ref(route.params.id)
const isEditSection2Col = ref(false)
const selectedColor = ref('')

const getExhibition = async () => {
	const res = await getExhibitonById(route.params.id)
	if (res.status.value === 'success') {
		exhibitionForm.value = res.data.value
		for (let i = 0; i < exhibitionForm.value.exhibitionSections.length; i++) {
			exhibitionForm.value.exhibitionSections[i].isEditMode = false
		}
		// console.log(exhibitionForm.value)
	}
	// else if (res.error.value === 404) {
	// 	errorMessage.value = `Exhibition ID ${route.params.id} Not Found`
	// }
}
await getExhibition()
const editBaseInfo = () => {
	// console.log(sectionIdList)
	isShowModal.value = true
	isEditMode.value = true
	isAddBaseInfo.value = false
	// if (sectionIdList.length != 0) {
	// 	exhibitionForm.value.exhibitionSectionsID = sectionIdList
	// } else {
	// 	exhibitionForm.value.exhibitionSectionsID = ['']
	// }
}
const saveExhibition = async (sectionIdList) => {
	if (sectionIdList.length != 0) {
		exhibitionForm.value.exhibitionSectionsID = sectionIdList
	} else {
		exhibitionForm.value.exhibitionSectionsID = ['']
	}

	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}exhibitions/${exhibitionId.value}`
	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`

	const res = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(exhibitionForm.value)
	})
	if (res.status === 200) {
		Swal.fire({
			title: 'Create Exhibition Success !',

			icon: 'success'
		}).then((result) => {
			if (result.isConfirmed) {
				// isShowModal.value = false
				// isEditMode.value = false
				// isAddBaseInfo.value = true
			}
		})
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}
const fetchEditBaseInfo = async () => {
	if (exhibitionForm.value.thumbnailImg != '') {
		console.log('have image')
	} else {
		const { snapshot, dowloadUrl, metadata } = await uploadFile(
			exhibitionForm.value.thumbnailImg[0]
		)
		exhibitionForm.value.thumbnailImg = dowloadUrl
	}
	console.log(exhibitionForm.value)
	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}exhibitions/${exhibitionId.value}`
	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`

	const res = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(exhibitionForm.value)
	})
	if (res.status === 200) {
		Swal.fire({
			title: 'Base Information Updated !',

			icon: 'success'
		}).then((result) => {
			if (result.isConfirmed) {
				isShowModal.value = false
				isEditMode.value = false
				isAddBaseInfo.value = true
			}
		})
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}

const isSameData1Col = () => {
	if (sectionForm.value.contentType === 'title and text with border devider') {
		if (oldSectionData.value.title === undefined) {
			oldSectionData.value.title = ''
		}
		if (oldSectionData.value.text === undefined) {
			oldSectionData.value.text = ''
		}
		if (sectionForm.value.text === undefined) {
			sectionForm.value.text = ''
		}
		if (sectionForm.value.title === undefined) {
			sectionForm.value.title = ''
		}

		if (
			sectionForm.value.title === oldSectionData.value.title &&
			sectionForm.value.text === oldSectionData.value.text
		) {
			return true
		}
	} else if (sectionForm.value.contentType === 'background with title devider') {
		// console.log(sectionForm.value.background)
		// console.log(oldSectionData.value.background)
		// console.log(sectionForm.value.title)
		// console.log(oldSectionData.value.title)
		if (oldSectionData.value.title === undefined) {
			oldSectionData.value.title = ''
		}
		if (oldSectionData.value.background === undefined) {
			oldSectionData.value.background = ''
		}
		if (sectionForm.value.title === undefined) {
			sectionForm.value.title = ''
		}
		if (sectionForm.value.background === undefined) {
			sectionForm.value.background = ''
		}
		if (
			sectionForm.value.background === oldSectionData.value.background &&
			sectionForm.value.title === oldSectionData.value.title
		) {
			return true
		}
	} else if (
		sectionForm.value.contentType === 'title and text with bg devider'
	) {
		if (oldSectionData.value.title === undefined) {
			oldSectionData.value.title = ''
		}
		if (oldSectionData.value.background === undefined) {
			oldSectionData.value.background = ''
		}
		if (sectionForm.value.title === undefined) {
			sectionForm.value.title = ''
		}
		if (sectionForm.value.background === undefined) {
			sectionForm.value.background = ''
		}
		if (oldSectionData.value.text === undefined) {
			oldSectionData.value.text = ''
		}
		if (sectionForm.value.text === undefined) {
			sectionForm.value.text = ''
		}
		if (
			sectionForm.value.background === oldSectionData.value.background &&
			sectionForm.value.title === oldSectionData.value.title &&
			sectionForm.value.text === oldSectionData.value.text
		) {
			return true
		}
	}
}

const isSameData2Col = () => {
	if (oldSectionData.value.background === undefined) {
		oldSectionData.value.background = ''
	}
	const isSameLeft = () => {
		if (sectionForm.value.leftCol.contentType === 'image with description') {
			if (
				sectionForm.value.leftCol.image === oldSectionData.value.leftCol.image &&
				sectionForm.value.leftCol.imageDescription ===
					oldSectionData.value.leftCol.imageDescription &&
				sectionForm.value.background === oldSectionData.value.background
			) {
				return true
			} else {
				return false
			}
		} else if (sectionForm.value.leftCol.contentType === 'title and text') {
			if (
				sectionForm.value.leftCol.title === oldSectionData.value.leftCol.title &&
				sectionForm.value.leftCol.text === oldSectionData.value.leftCol.text &&
				sectionForm.value.background === oldSectionData.value.background
			) {
				return true
			} else {
				return false
			}
		}
	}
	const isSameRight = () => {
		if (sectionForm.value.rightCol.contentType === 'image with description') {
			if (
				sectionForm.value.rightCol.image === oldSectionData.value.rightCol.image &&
				sectionForm.value.rightCol.imageDescription ===
					oldSectionData.value.rightCol.imageDescription &&
				sectionForm.value.background === oldSectionData.value.background
			) {
				return true
			} else {
				return false
			}
		} else if (sectionForm.value.rightCol.contentType === 'title and text') {
			if (
				sectionForm.value.rightCol.title === oldSectionData.value.rightCol.title &&
				sectionForm.value.rightCol.text === oldSectionData.value.rightCol.text &&
				sectionForm.value.background === oldSectionData.value.background
			) {
				return true
			} else {
				return false
			}
		}
	}
	if (isSameLeft() && isSameRight()) {
		return true
	} else {
		return false
	}
}

const isSameData3Col = () => {
	if (
		sectionForm.value.images[0] === oldSectionData.value.images[0] &&
		sectionForm.value.images[1] === oldSectionData.value.images[1] &&
		sectionForm.value.images[2] === oldSectionData.value.images[2]
	) {
		return true
	} else {
		return false
	}
}
const sectionForm = ref({})
const updateSection = async (section, index) => {
	sectionForm.value = section
	sectionForm.value.exhibitionID = exhibitionId.value
	delete sectionForm.value.exhibitionId
	delete sectionForm.value.isEditMode

	if (section.sectionType === '1col') {
		if (section.contentType === 'background with title devider') {
			await getSection(section._id)
			if (section.file != undefined) {
				const { snapshot, dowloadUrl, metadata } = await uploadFile(section.file)
				sectionForm.value.background = dowloadUrl
			}
			if (isSameData1Col()) return
		} else {
			await getSection(section._id)
			if (isSameData1Col()) return
		}
	} else if (section.sectionType === '2col') {
		await getSection(section._id)
		if (section.leftCol.contentType === 'image with description') {
			if (section.leftCol.file != undefined) {
				const { snapshot, dowloadUrl, metadata } = await uploadFile(
					imageLeftCol.value
				)
				sectionForm.value.leftCol.image = dowloadUrl
			}
		}
		if (section.rightCol.contentType === 'image with description') {
			if (section.leftCol.file != undefined) {
				const { snapshot, dowloadUrl, metadata } = await uploadFile(
					imageRightCol.value
				)
				sectionForm.value.rightCol.image = dowloadUrl
			}
		}
		if (isSelectedColor.value === false) {
			sectionForm.value.background = ''
		}
		exhibitionForm.value.exhibitionSections[index].isEditMode = false
		if (isSameData2Col()) return
	} else if (section.sectionType === '3col') {
		await getSection(section._id)
		for (let i = 0; i < image3Col.value.length; i++) {
			if (image3Col.value[i] != '') {
				const { snapshot, dowloadUrl, metadata } = await uploadFile(
					image3Col.value[i]
				)
				sectionForm.value.images[i] = dowloadUrl
			}
		}

		if (isSameData3Col()) return
	}

	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}sections/${section._id}`
	// // const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
	const res = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(section)
	})
	if (res.status === 200) {
		Swal.fire({
			title: 'Update Section Success !',
			icon: 'success'
		}).then((result) => {
			if (result.isConfirmed) {
				// exhibitionForm.value.exhibitionSections[index].isEditMode = false
				// isShowModal.value = false
				// isEditMode.value = false
				// isAddBaseInfo.value = true
			}
		})
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}

const isSelectedColor = ref(false)
const goToEditMode2Col = (index) => {
	exhibitionForm.value.exhibitionSections[index].isEditMode = true

	if (
		exhibitionForm.value.exhibitionSections[index].background != '' &&
		exhibitionForm.value.exhibitionSections[index].background != undefined
	) {
		isSelectedColor.value = true
	} else {
		isSelectedColor.value = false
	}
}

const deleteSection = (sectionId) => {
	Swal.fire({
		title: 'Delete Section?',
		text: `ต้องการลบ section`,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Confirm',
		reverseButtons: true
	}).then(async (result) => {
		if (result.isConfirmed) {
			await fetchDeleteSection(sectionId)
		}
	})
}

const fetchDeleteSection = async (sectionId) => {
	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}sections/${sectionId}`
	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`

	const res = await fetch(url, {
		method: 'DELETE'
	})
	if (res.status === 200) {
		Swal.fire({
			title: 'Delete Section Success !',

			icon: 'success'
		}).then((result) => {
			if (result.isConfirmed) {
				getExhibition()
				// console.log(exhibitionForm.value)
				isShowModal.value = false
				isEditMode.value = false
				isAddBaseInfo.value = true
			}
		})
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}

const startDateFormatted = ref('')
const endDateFormatted = ref('')
const getDateFormat = () => {
	startDateFormatted.value =
		new Date(exhibitionForm.value.startDate).getDate() +
		' ' +
		new Date(exhibitionForm.value.startDate).toDateString().slice(4, 7) +
		' ' +
		new Date(exhibitionForm.value.startDate).getFullYear()
	endDateFormatted.value =
		new Date(exhibitionForm.value.endDate).getDate() +
		' ' +
		new Date(exhibitionForm.value.endDate).toDateString().slice(4, 7) +
		' ' +
		new Date(exhibitionForm.value.endDate).getUTCFullYear()
	let date = new Date()
}
getDateFormat()

const imageLeftCol = ref()
const imageRightCol = ref()
const getFile = (file, index, col) => {
	if (col === 'left') {
		imageLeftCol.value = file
	} else if (col === 'right') {
		imageRightCol.value = file
	}
}

const image3Col = ref(['', '', ''])
const getFile3Col = (file, imageIndex) => {
	if (imageIndex === 0) {
		image3Col.value[0] = file
	} else if (imageIndex === 1) {
		image3Col.value[1] = file
	} else if (imageIndex === 2) {
		image3Col.value[2] = file
	}
}

const oldSectionData = ref({})
const getSection = async (sectionId, exhibitionId) => {
	const res = await getSectionById(sectionId)
	oldSectionData.value = await res.data.value
}
</script>
<style scoped></style>
