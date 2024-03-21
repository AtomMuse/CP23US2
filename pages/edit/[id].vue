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
							@updateSection="updateSection"
							@deleteSection="deleteSection(section._id)"
						/>
						<TextWithBorderSection
							v-if="section.contentType === 'title and text with border devider'"
							:text="section.text"
							:title="section.title"
							isOwner
							:data="section"
							@deleteSection="deleteSection(section._id)"
							@updateSection="updateSection"
						/>
						<TitleAndTextSection
							v-if="section.contentType === 'title and text with bg devider'"
							:title="section.title"
							:text="section.text"
							:background="section.background"
							isOwner
							:data="section"
							@deleteSection="deleteSection(section._id)"
						/>
					</div>
					<div v-if="section.sectionType === '2col'">
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
											@selectFile="upLoad($event, currentSectionIndex, index)"
											:inputId="index.toString()"
										/>
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
	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}exhibitions/${route.params.id}`

	const res = await fetch(url, {
		method: 'GET'
	})
	if (res.status === 200) {
		exhibitionForm.value = await res.json()
		for (let i = 0; i < exhibitionForm.value.exhibitionSections.length; i++) {
			exhibitionForm.value.exhibitionSections[i].isEditMode = false
		}
		console.log(exhibitionForm.value)
	} else if (res.status === 404) {
		errorMessage.value = `Exhibition ID ${route.params.id} Not Found`
	}
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

const sectionForm = ref({})
const updateSection = async (section) => {
	sectionForm.value = section
	sectionForm.value.exhibitionID = exhibitionId.value
	if (section.sectionType === '1col') {
		if (section.contentType === 'background with title devider') {
			const { snapshot, dowloadUrl, metadata } = await uploadFile(section.file)
			sectionForm.value.background = dowloadUrl
		}
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
				// isShowModal.value = false
				// isEditMode.value = false
				// isAddBaseInfo.value = true
			}
		})
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}

const goToEditMode2Col = (index) => {
	exhibitionForm.value.exhibitionSections[index].isEditMode = true
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
</script>
<style scoped></style>
