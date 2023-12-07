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
	const res = await fetch(
		`http://cp23us2.sit.kmutt.ac.th:5000/exhibitions/${route.params.id}`
	)
	exhibition.value = await res.json()
}
await getExhibition()
</script>

<style scoped></style>
