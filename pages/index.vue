<script setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
const exhibitionsData = ref([])
const currentVerticalCardsStep = ref(1)
const verticalCards = ref([])

const getExhibitions = async () => {
	// const runtimeConfig = useRuntimeConfig()
	// const API_URL = runtimeConfig.public.API_URL
	// const url = `${API_URL}exhibitions`
	const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
	const res = await fetch(url, {
		method: 'GET'
	})
	if (res.status === 200) {
		exhibitionsData.value = await res.json()
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}
await getExhibitions()

const checkVerticalCardsStep = (page) => {
	currentVerticalCardsStep.value = page
	if (currentVerticalCardsStep.value === 1) {
		verticalCards.value = exhibitionsData.value.slice(0, 4)
	} else if (currentVerticalCardsStep.value === 2) {
		verticalCards.value = exhibitionsData.value.slice(4, 8)
	} else if (currentVerticalCardsStep.value === 3) {
		verticalCards.value = exhibitionsData.value.slice(8, 12)
	}
}
checkVerticalCardsStep(1)
</script>

<template>
	<div class="w-full h-full">
		<BaseHeader img="/imgs/header-image.png" />
		<div class="p-8 lg:p-12">
			<div class="flex justify-between border-b-2">
				<SectionTitle title="Exhibitions" class="mb-7" />

				<NuxtLink
					to="/exhibitions"
					class="flex gap-2 text-sm font-medium text-darkBlue"
				>
					<span class="hover:underline">see all </span
					><ArrowLongRightIcon class="w-5 h-5" />
				</NuxtLink>
			</div>
			<div
				class="grid w-full grid-cols-1 gap-5 py-12 md:grid-cols-2 lg:gap-0 xl:grid-cols-4"
			>
				<div v-for="(exhibition, index) in verticalCards" :key="index">
					<NuxtLink :to="`/exhibitions/${exhibition.id}`"
						><BaseVerticalCard
							:title="exhibition.exhibitionName"
							:desc="exhibition.exhibitionDescription"
							:startDate="exhibition.startDate"
							:endDate="exhibition.endDate"
							:img="exhibition.thumbnailImg"
					/></NuxtLink>
				</div>
			</div>
			<div class="flex justify-center">
				<ProgressBar
					:step="currentVerticalCardsStep"
					@selectStep="checkVerticalCardsStep"
				/>
			</div>
		</div>
		<div class="flex flex-col p-12 lg:pt-2 lg:flex-row">
			<div class="flex flex-col w-full gap-5 lg:w-2/5 text-darkBlue lg:pt-6">
				<p class="text-2xl font-bold">#vichakarn</p>
				<p class="text-xl font-medium">Exhibitions related to academic work</p>
				<p class="text-xl font-medium">Exhibitions ที่เกี่ยวข้องกับงานวิชาการ</p>
			</div>
			<div class="w-full pt-12 lg:w-3/5 lg:p-0">
				<div v-for="(exhibition, index) in exhibitionsData" :key="index">
					<NuxtLink :to="`/exhibitions/${exhibition.id}`" v-if="index < 3"
						><BaseHorizontalCard
							:class="index === 2 ? 'border-0' : 'border-b-2'"
							:title="exhibition.exhibitionName"
							:desc="exhibition.exhibitionDescription"
							:startDate="exhibition.startDate"
							:endDate="exhibition.endDate"
							:img="exhibition.thumbnailImg"
					/></NuxtLink>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col items-stretch py-12 shadow-xl bg-darkBrown">
		<Imageslide />
		<div
			class="flex flex-col items-center justify-center w-full py-12 text-white"
		>
			<p class="text-2xl font-bold">Explore More Work</p>
			<NuxtLink to="/exhibitions">
				<p class="text-lg font-normal underline">click to see more</p>
			</NuxtLink>
		</div>
		<Imageslide />
	</div>
	<div class="flex flex-col p-12 shadow-inner xl:flex-row">
		<div class="flex flex-col w-full gap-5 xl:w-2/5 text-darkBlue lg:pt-6">
			<p class="text-2xl font-bold">Organized By</p>
			<p class="text-xl font-medium">Interesting work from various organizers</p>
			<p class="text-xl font-medium">ผลงานที่น่าสนใจจากผู้จัดที่หลากหลาย</p>
		</div>
		<div class="w-full pt-12 xl:w-3/5 xl:p-0">
			<div class="flex flex-col justify-items-start max-md:w-full max-md:ml-0">
				<div class="flex flex-col gap-10 sm:items-center lg:grid lg:grid-cols-3">
					<TextOverImage
						class="w-full cursor-pointer sm:w-1/2 lg:w-full"
						text="SCBX"
						img="https://www.scbx.com/wp-content/uploads/2023/09/scbx-ai-first-organization-banner.jpg"
					/>
					<TextOverImage
						class="w-full cursor-pointer sm:w-1/2 lg:w-full"
						text="UDOMSAK KRISANAMIS"
						img="https://seafocus.sg/wp-content/uploads/2021/01/IMG_7542.jpg"
					/>
					<TextOverImage
						class="w-full cursor-pointer sm:w-1/2 lg:w-full"
						text="MIWD"
						img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZSCXiMoy6E1dw5pp4o4CuVGnODgNga9vrp6Gcrc9B7j-Mal7dd6joL7-Y7uK9N-oFfY&usqp=CAU"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.style-1::-webkit-scrollbar {
	width: 360px;
	height: 8px;
}

.style-1::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	background-color: #f5f5f5;
}

.style-1::-webkit-scrollbar {
	width: 12px;
	background-color: #f5f5f5;
}

.style-1::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #280e05;
}
</style>
