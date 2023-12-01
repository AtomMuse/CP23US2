<template>
	<div class="w-full h-full">
		<div class="grid grid-cols-12 gap-5">
			<BlogHeaderSection
				:startDate="exhibition.startDate"
				:endDate="exhibition.endDate"
				:exhibitionName="exhibition.exhibitionName"
				:exhibitionDescription="exhibition.exhibitionDescription"
				class="col-start-3 col-span-8 py-16"
			/>
		</div>

		<BlogSections
			v-for="(section, index) in exhibition.exhibitiontionSections"
			:key="index"
			:sectionInfo="section"
		/>
	</div>
	<div></div>
</template>
<script setup>
const route = useRoute()
const exhibition = ref([])
const getExhibition = async () => {
	const res = await fetch(`http://localhost:5000/exhibitions/${route.params.id}`)
	exhibition.value = await res.json()
}
await getExhibition()
</script>

<style scoped></style>
