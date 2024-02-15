<template>
	<div class="w-full h-full">
		<CreateModal
			@next="selectedLayout"
			:open="isShowModal"
			v-if="isShowModal"
			:currentLayout="layoutSelected"
		/>
		<div>
			<div v-if="layoutSelected === 'blogLayout'" class="px-12">
				BLOG LAYOUT
				<button
					@click="changeLayout('blogLayout')"
					type="button"
					class="hover:border-softOrange hover:text-softOrange hover:text-softOramge relative inline-flex items-center gap-x-1.5 rounded-md border border-gray-300 text-gray-400 px-3 py-2 text-sm font-medium shadow-sm"
				>
					Change Layout
				</button>
				<div class="w-full h-full">
					<div
						@click="addSection"
						v-if="addSectionState === ''"
						class="bg-gray-500 h-[180px] rounded-lg flex justify-center items-center cursor-pointer"
					>
						+
					</div>
					<div
						v-if="addSectionState === 'sectionType'"
						class="p-6 bg-gray-500 h-[180px] rounded-lg flex flex-col cursor-pointer"
					>
						<div class="flex items-center justify-center w-full h-full gap-6">
							<div class="w-full h-full bg-red-500" @click="selectType('1col')">
								1col
							</div>
							<div class="w-full h-full bg-red-500" @click="selectType('2col')">
								2col
							</div>
							<div class="w-full h-full bg-red-500" @click="selectType('3col')">
								3col
							</div>
						</div>
						<div class="h-6 mt-5 bg-pink-400" @click="prevState">back</div>
					</div>
					<div
						v-if="addSectionState === 'contentType'"
						class="p-6 bg-gray-500 h-[180px] rounded-lg flex justify-center items-center cursor-pointer"
					>
						<div
							class="flex flex-col w-full h-full"
							v-if="inputData.exhibitiontionSections[0].sectionType === '1col'"
						>
							<div class="flex h-full gap-6">
								<div
									@click="selectContent('background with title devider')"
									class="w-full h-full bg-green-500"
								>
									background with title devider
								</div>
								<div
									@click="selectContent('title and text with border devider')"
									class="w-full h-full bg-green-500"
								>
									title and text with border devider
								</div>
								<div
									@click="selectContent('title and text with bg devider')"
									class="w-full h-full bg-green-500"
								>
									title and text with bg devider
								</div>
							</div>

							<div class="h-6 mt-5 bg-pink-400" @click="prevState">back</div>
						</div>
						<!-- <div class="w-full h-full bg-red-500" @click="selectContent('1col')">
							2col
						</div>
						<div class="w-full h-full bg-red-500" @click="selectContent('2col')">
							3col
						</div> -->
					</div>
					<div
						v-if="addSectionState === 'addContent'"
						class="gap-6 p-6 bg-gray-500 h-[180px] rounded-lg flex justify-center items-center cursor-pointer"
					>
						<div class="w-full h-full bg-red-500" @click="selectContent('1col')">
							1col
						</div>
						<div class="w-full h-full bg-red-500" @click="selectContent('1col')">
							2col
						</div>
						<div class="w-full h-full bg-red-500" @click="selectContent('2col')">
							3col
						</div>
					</div>
				</div>
			</div>
			<div v-if="layoutSelected === 'liveLayout'">
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
const isShowModal = ref()
const layoutSelected = ref()

const selectedLayout = (layout) => {
	layoutSelected.value = layout
	isShowModal.value = false
}

onMounted(() => {
	isShowModal.value = true // <div>
})

const inputData = ref({
	exhibitionName: '',
	exhibitionDescription: '',
	thumbnailImg: '',
	startDate: '',
	endDate: '',
	isPublic: true,
	exhibitionCategories: [],
	exhibitionTags: [],
	layoutUsed: layoutSelected.value,
	exhibitiontionSections: []
})

const changeLayout = (currentLayOut) => {
	layoutSelected.value = currentLayOut
	isShowModal.value = true
}
const addSectionState = ref('')
const addSection = () => {
	addSectionState.value = 'sectionType'
	inputData.value.exhibitiontionSections.push({})
}
const selectType = (type) => {
	addSectionState.value = 'contentType'
	inputData.value.exhibitiontionSections[0].sectionType = type
	console.log(inputData.value.exhibitiontionSections[0])
}
const selectContent = (content) => {
	addSectionState.value = 'addContent'
	inputData.value.exhibitiontionSections[0].contentType = content
	console.log(inputData.value.exhibitiontionSections[0])
}
const prevState = () => {
	if (addSectionState.value === 'sectionType') {
		addSectionState.value = ''
	} else if (addSectionState.value === 'contentType') {
		addSectionState.value = 'sectionType'
	}
}
</script>
<style scoped></style>
