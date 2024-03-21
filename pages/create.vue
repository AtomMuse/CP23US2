<template>
	<div class="w-full h-full">
		<CreateModal
			@next="addBaseInfo"
			:open="isShowModal"
			v-if="isShowModal"
			:info="exhibitionForm"
			:isEditMode="isEditMode"
			@edit="fetchEditBaseInfo"
		/>

		<div class="flex justify-center">
			<CreateBlog
				v-if="isAddBaseInfo"
				:baseInfo="exhibitionForm"
				@editBaseInfo="editBaseInfo"
				:exhibitionId="exhibitionId"
				@updateExhibition="saveExhibition"
			/>

			<div v-if="exhibitionForm.layoutUsed === 'liveLayout'">
				LIVE LAYOUT
				<button
					@click="changeLayout('liveLayout')"
					type="button"
					class="hover:border-softOrange hover:text-softOrange hover:text-softOramge relative inline-flex items-center gap-x-1.5 rounded-md border border-gray-300 text-gray-400 px-3 py-2 text-sm font-medium shadow-sm"
				>
					Change Layout
				</button>
			</div>
		</div>
	</div>
</template>
<script setup>
import Swal from 'sweetalert2'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref()
const exhibitionForm = ref({
	exhibitionName: '',
	exhibitionDescription: '',
	startDate: '',
	endDate: '',
	isPublic: false,
	exhibitionCategories: [],
	exhibitionTags: [],
	layoutUsed: '',
	thumbnailImg: ''
})
// const contentTypes1col = [
// 	'background with title devider',
// 	'title and text with border devider',
// 	'title and text with bg devider'
// ]
// const contentTypes2col = ['image with description', 'title and text']
// const contentTypes3col = ['images shower']
const isShowModal = ref(true)
const layoutSelected = ref()
const baseInfoForm = ref()
const isAddBaseInfo = ref(false)
const isEditMode = ref(false)
const addBaseInfo = (baseInfoForm) => {
	// layoutSelected.value = layout
	// isShowModal.value = false
	// isEditMode.value = false
	// selectedLayout.value = layout

	exhibitionForm.value = {
		...baseInfoForm,
		exhibitionSections: [{ sectionState: '', sectionType: '' }],
		status: 'darft',
		userId: {
			_id: '000000000000000000000000',
			userId: 6,
			firstName: 'SIT',
			lastName: 'KMUTT'
		}
	}
	// isAddBaseInfo.value = true
	saveBase()
}

onMounted(() => {
	isShowModal.value = true // <div>
})
const exhibitionId = ref('')
const editBaseInfo = (sectionIdList) => {
	console.log(sectionIdList)
	isShowModal.value = true
	isEditMode.value = true
	isAddBaseInfo.value = false
	if (sectionIdList.length != 0) {
		exhibitionForm.value.exhibitionSectionsID = sectionIdList
	} else {
		exhibitionForm.value.exhibitionSectionsID = ['']
	}
}

const saveBase = async () => {
	// console.log(exhibitionForm.value.thumbnailImg[0])
	if (!exhibitionForm.value.thumbnailImg.length) return
	const { snapshot, dowloadUrl, metadata } = await uploadFile(
		exhibitionForm.value.thumbnailImg[0]
	)
	exhibitionForm.value.thumbnailImg = dowloadUrl

	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}exhibitions`
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

		Swal.fire({
			title: 'Base Information Saved !',
			text: 'You are currently in draft mode',
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
// const changeLayout = (currentLayOut) => {
// 	layoutSelected.value = currentLayOut
// 	isShowModal.value = true
// }
const addSectionState = ref('')
// const currentSectionIndex = ref(0)
// const addSection = (index) => {
// 	if (index != 0) {
// 		exhibitionForm.value.exhibitiontionSections.push({})
// 	}
// 	exhibitionForm.value.exhibitiontionSections[index].sectionState = 'sectionType'
// 	currentSectionIndex.value = index
// }

// const selectType = (index, type) => {
// 	exhibitionForm.value.exhibitiontionSections[index].sectionState = 'contentType'
// 	exhibitionForm.value.exhibitiontionSections[index].sectionType = type
// }

// const selectContent = (content) => {
// 	exhibitionForm.value.exhibitiontionSections[
// 		currentSectionIndex.value
// 	].sectionState = 'addContent'
// 	exhibitionForm.value.exhibitiontionSections[
// 		currentSectionIndex.value
// 	].contentType = content
// 	if (
// 		exhibitionForm.value.exhibitiontionSections[currentSectionIndex.value]
// 			.sectionType === '3col'
// 	) {
// 		exhibitionForm.value.exhibitiontionSections[
// 			currentSectionIndex.value
// 		].images = ['', '', '']
// 	}
// }
// const prevState = (index) => {
// 	if (
// 		exhibitionForm.value.exhibitiontionSections[index].sectionState ===
// 		'sectionType'
// 	) {
// 		exhibitionForm.value.exhibitiontionSections[index].sectionState = ''
// 		delete exhibitionForm.value.exhibitiontionSections[index].sectionType
// 	} else if (
// 		exhibitionForm.value.exhibitiontionSections[index].sectionState ===
// 		'contentType'
// 	) {
// 		exhibitionForm.value.exhibitiontionSections[index].sectionState =
// 			'sectionType'
// 		delete exhibitionForm.value.exhibitiontionSections[index].sectionType
// 	} else if (
// 		exhibitionForm.value.exhibitiontionSections[index].sectionState ===
// 		'addContent'
// 	) {
// 		exhibitionForm.value.exhibitiontionSections[index].sectionState =
// 			'contentType'
// 	}
// }

// const selectedCategory = ref('')
// const selectCategory = () => {
// 	exhibitionForm.value.exhibitionCategories[0] = selectedCategory.value
// }

// -- preview image in BaseUploadPhoto --
const file = ref()
const imagePreview = ref()
// imagePreview.value = editCpairs.value.cpairImage
// const selectPhoto = (e) => {
// 	if (e.target.files[0]) {
// 		file.value = e.target.files[0]
// 		if (file.value) {
// 			imagePreview.value = URL.createObjectURL(file.value)
// 		}
// 	}
// 	console.log(file.value)
// }
// const base64String = ref('')
// const upLoadImg = (e, index, col) => {
// 	let file = e.target.files[0]
// 	let reader = new FileReader()
// 	reader.onload = function () {
// 		base64String.value = reader.result.replace('data:', '').replace(/^.+,/, '')
// 		if (col === undefined) {
// 			exhibitionForm.value.exhibitiontionSections[index].background =
// 				base64String.value
// 		} else if (
// 			exhibitionForm.value.exhibitiontionSections[index].sectionType === '2col'
// 		) {
// 			if (col === 'left') {
// 				exhibitionForm.value.exhibitiontionSections[index].leftCol.image =
// 					base64String.value
// 			} else {
// 				exhibitionForm.value.exhibitiontionSections[index].rightCol.image =
// 					base64String.value
// 			}
// 		} else if (
// 			exhibitionForm.value.exhibitiontionSections[index].sectionType === '3col'
// 		) {
// 			if (col === 'left') {
// 				exhibitionForm.value.exhibitiontionSections[index].images[0] =
// 					base64String.value
// 			} else if (col === 'center') {
// 				exhibitionForm.value.exhibitiontionSections[index].images[1] =
// 					base64String.value
// 			} else if (col === 'right') {
// 				exhibitionForm.value.exhibitiontionSections[index].images[2] =
// 					base64String.value
// 			}
// 		}
// 	}

// 	reader.readAsDataURL(file)
// }

// const selectContentType2col = (col, type) => {
// 	if (col === 'left') {
// 		exhibitionForm.value.exhibitiontionSections[
// 			currentSectionIndex.value
// 		].leftCol = {
// 			contentType: type
// 		}
// 	} else {
// 		exhibitionForm.value.exhibitiontionSections[
// 			currentSectionIndex.value
// 		].rightCol = {
// 			contentType: type
// 		}
// 	}
// }
// const tagInput = ref('')
// const addTag = () => {
// 	tagInput.value = tagInput.value.trimStart()
// 	tagInput.value = tagInput.value.trimEnd()
// 	if (tagInput.value != '') {
// 		exhibitionForm.value.exhibitionTags.push(tagInput.value)
// 	}
// 	tagInput.value = ''
// }
// const removeTag = (index) => {
// 	exhibitionForm.value.exhibitionTags.splice(index)
// }

// const save = async () => {
// 	await createSection(
// 		exhibitionForm.value.exhibitiontionSections[currentSectionIndex.value]
// 	)
// 	exhibitionForm.value.exhibitiontionSections.push({ sectionState: '' })
// }
// const createSection = async (section) => {
// 	const runtimeConfig = useRuntimeConfig()
// 	const API_URL = runtimeConfig.public.API_URL
// 	const url = `${API_URL}exhibitionSections`
// 	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
// 	const res = await fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(section)
// 	})
// 	if (res.status === 201) {
// 		// exhibitionsData.value = await res.json()
// 		let returnData = await res.json()
// 		sectionIdList.value.push(returnData.id)
// 	} else {
// 		console.log(`Could not fetch data from ${url}`)
// 	}
// }
// const exhibitionId = ref()
// const sectionIdList = ref([])
// const createExhibition = async () => {
// 	if (
// 		exhibitionForm.value.exhibitiontionSections[currentSectionIndex.value] === {}
// 	) {
// 		exhibitionForm.value.exhibitiontionSections[
// 			currentSectionIndex.value
// 		].splice()
// 	}

// 	exhibitionForm.value.exhibitiontionSections = sectionIdList.value
// 	const runtimeConfig = useRuntimeConfig()
// 	const API_URL = runtimeConfig.public.API_URL
// 	const url = `${API_URL}exhibitions/${exhibitionId.value}`
// 	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
// 	const res = await fetch(url, {
// 		method: 'PUT',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(exhibitionForm.value)
// 	})
// 	if (res.status === 200) {
// 		// exhibitionsData.value = await res.json()
// 		isSaveBase.value = false
// 	} else {
// 		console.log(`Could not fetch data from ${url}`)
// 	}
// }

// const isSaveBase = ref(false)

// const saveBase = async () => {
// 	const runtimeConfig = useRuntimeConfig()
// 	const API_URL = runtimeConfig.public.API_URL
// 	const url = `${API_URL}exhibitions`
// 	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
// 	const res = await fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(exhibitionForm.value)
// 	})
// 	if (res.status === 201) {
// 		// exhibitionsData.value = await res.json()
// 		let returnData = await res.json()
// 		exhibitionId.value = returnData.id
// 		isSaveBase.value = true
// 	} else {
// 		console.log(`Could not fetch data from ${url}`)
// 	}
// }
</script>
<style scoped></style>
