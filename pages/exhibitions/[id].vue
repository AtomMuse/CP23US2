<template>
	<div>
		<div
			class="w-full h-full"
			v-if="res.status === 200 && exhibition.layoutUsed === 'blogLayout'"
		>
			<div class="grid lg:grid-cols-12 lg:gap-5">
				<BlogHeaderSection
					:startDate="exhibition.startDate"
					:endDate="exhibition.endDate"
					:exhibitionName="exhibition.exhibitionName"
					:exhibitionDescription="exhibition.exhibitionDescription"
					class="col-span-8 col-start-3 p-8 lg:py-16 lg:px-0"
				/>
			</div>

			<BlogSections
				v-for="(section, index) in exhibition.exhibitionSections"
				:key="index"
				:sectionInfo="section"
			/>
		</div>
		<div
			v-else-if="res.status === 200 && exhibition.layoutUsed === 'liveLayout'"
			class="relative w-full h-screen bg-center bg-cover bg-black/80"
		>
			<!-- <div
			v-else-if="res.status === 200 && exhibition.layoutUsed === 'liveLayout'"
			class="relative flex items-center justify-center w-full h-screen"
			:class="!isExhibitionState ? 'bg-center bg-cover bg-black/80 ' : ''"
		> -->
			<img
				src="/images/mockup/d-day.jpg "
				class="absolute object-cover w-full h-full mix-blend-overlay"
			/>
			<LiveLayoutLandingExhibition
				@goToMap="goToMap"
				v-if="isLandingState === true"
				:visitedNumber="exhibition.visitedNumber"
				:exhibitionName="exhibition.exhibitionName"
				:exhibitionDescription="exhibition.exhibitionDescription"
				:organizer="exhibition.userId"
				:class="[isChangePage ? fadeOutClass : fadeInClass]"
			/>
			<LiveLayoutMap
				v-if="isMapState"
				@goToLanding="goToLanding"
				@goToExhibition="goToExhibition"
				:mapItems="exhibition.rooms"
				:visitedNumber="exhibition.visitedNumber"
				:exhibitionName="exhibition.exhibitionName"
				:class="[isChangePage ? fadeOutClass : fadeInClass]"
				class="pt-20"
			/>
			<LiveLayoutExhibition
				v-if="isExhibitionState"
				@gotoLanding="goToLanding"
				@goToMap="goToMap"
				@nextRoom="nextRoom"
				@prevRoom="prevRoom"
				:rooms="exhibition.rooms"
				:selectedRoom="room"
				:class="[isChangePage ? fadeOutClass : fadeInClass]"
			/>
			<div
				class="absolute flex justify-between w-full px-12 top-6"
				:class="!isExhibitionState ? 'text-white' : ''"
			>
				<div
					:class="
						isLandingState === true || isChangePage === true
							? 'invisible '
							: fadeInClass
					"
				>
					<p class="text-lg font-semibold">
						{{ exhibition.exhibitionName }}
					</p>

					<p class="mt-1 text-sm" v-if="isExhibitionState">
						Room {{ room + 1 }}/{{ exhibition.rooms.length }}
					</p>
				</div>
				<BadgeNumber :number="exhibition.visitedNumber" isNumberOfVisit />
			</div>
		</div>
		<div class="w-full h-full" v-else>
			<p class="mt-20 text-xl text-center text-red-500">{{ errorMessage }}</p>
			<p class="text-xl text-center text-red-500">
				Please access other exhibitions.
			</p>
		</div>
	</div>
</template>
<script setup>
import 'animate.css'
const isMapState = ref(false)
const isLandingState = ref(true)
const isExhibitionState = ref(false)
const room = ref()
const isChangePage = ref(false)
const fadeInClass = ref('')
const fadeOutClass = ref('')

const goToMap = () => {
	isChangePage.value = true
	if (isExhibitionState.value) {
		fadeInClass.value = 'animate__animated animate__fadeInLeft animate__fast'
		fadeOutClass.value = 'animate__animated animate__fadeOutRight animate__fast'
	} else {
		fadeInClass.value = 'animate__animated animate__fadeInRight animate__fast'
		fadeOutClass.value = 'animate__animated  animate__fadeOutLeft animate__fast'
	}
	setTimeout(() => {
		isChangePage.value = false
		isMapState.value = true
		isLandingState.value = false
		isExhibitionState.value = false
	}, 800)
}
const goToLanding = () => {
	isChangePage.value = true
	if (isExhibitionState.value || isMapState.value) {
		fadeOutClass.value = 'animate__animated animate__fadeOutRight animate__fast'
		fadeInClass.value = 'animate__animated animate__fadeInLeft animate__fast'
	}
	setTimeout(() => {
		isChangePage.value = false
		isMapState.value = false
		isLandingState.value = true
		isExhibitionState.value = false
	}, 800)
}
// const currentRoom = ref()
const goToExhibition = (index) => {
	isChangePage.value = true
	room.value = index
	// currentRoom.value = index
	fadeInClass.value = 'animate__animated animate__zoomIn '
	fadeOutClass.value = 'animate__animated  animate__zoomOut '
	setTimeout(() => {
		isChangePage.value = false
		isExhibitionState.value = true
		isMapState.value = false
		isLandingState.value = false
	}, 500)
}
const route = useRoute()
const exhibition = ref([])
const errorMessage = ref('')
const res = ref()
const getExhibition = async () => {
	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}exhibitions/${route.params.id}`

	res.value = await fetch(url, {
		method: 'GET'
	})
	if (res.value.status === 200) {
		exhibition.value = await res.value.json()
	} else if (res.value.status === 404) {
		errorMessage.value = `Exhibition ID ${route.params.id} Not Found`
	}
}
await getExhibition()

const nextRoom = () => {
	room.value = room.value + 1
}
const prevRoom = () => {
	room.value = room.value - 1
}
</script>

<style scoped></style>
