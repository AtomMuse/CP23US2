<template>
	<div class="w-full h-full">
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
			v-for="(section, index) in exhibition.exhibitiontionSections"
			:key="index"
			:sectionInfo="section"
		/>
	</div>
</template>
<script setup>
const route = useRoute()
const exhibition = ref([])
const getExhibition = async () => {
	// const runtimeConfig = useRuntimeConfig()
	// const API_URL = runtimeConfig.public.API_URL
	// const url = `${API_URL}exhibitions/${route.params.id}`
	const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions/${route.params.id}`
	const res = await fetch(url, {
		method: 'GET'
	})
	if (res.status === 200) {
		exhibition.value = await res.json()
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}
await getExhibition()
</script>

<style scoped></style>
