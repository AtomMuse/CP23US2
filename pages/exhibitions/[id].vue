<template>
	<div>
		<div class="w-full h-full" v-if="res.status === 200">
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
		<div class="w-full h-full" v-else>
			<p class="mt-20 text-xl text-center text-red-500">{{ errorMessage }}</p>
			<p class="text-xl text-center text-red-500">
				Please access other exhibitions.
			</p>
		</div>
	</div>
</template>
<script setup>
const route = useRoute()
const exhibition = ref([])
const errorMessage = ref('')
const res = ref()
const getExhibition = async () => {
	// const runtimeConfig = useRuntimeConfig()
	// const API_URL = runtimeConfig.public.API_URL
	// const url = `${API_URL}exhibitions/${route.params.id}`
	const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions/${route.params.id}`
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
</script>

<style scoped></style>
