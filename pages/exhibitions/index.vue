<template>
	<div class="w-full h-full px-12 pb-12 m-auto">
		<div class="flex flex-col items-center justify-center h-auto gap-2 py-16">
			<p class="text-4xl font-bold text-center">Discover Your Preference</p>
			<p class="text-xl font-bold text-center text-softOrange">
				Journey Through Our Online Exhibitions
			</p>
		</div>
		<div class="flex flex-col gap-12 md:flex-row">
			<div class="flex flex-col w-full gap-3 lg:w-1/4">
				<BaseFilterDropdown
					icon="filter"
					label="Filter by Category"
					:items="categories"
					@selectOption="filterByCate"
					:currentActive="currentActiveOption"
				/>
				<BaseFilterDropdown
					icon="status"
					label="Filter by Status"
					:items="status"
				/>
				<BaseFilterDropdown icon="sort" label="Sort" :items="sorts" />
			</div>
			<div
				class="grid w-full h-full gap-10 md:pt-8 md:border-t-2 lg:grid-cols-3 xl:grid-cols-4"
				v-if="filteredExhibitions.length != 0"
			>
				<nuxt-link
					:to="`/exhibitions/${exhibition.id}`"
					v-for="(exhibition, index) in filteredExhibitions"
					:key="index"
				>
					<TextOverImage
						class="w-full bg-green-500"
						:text="exhibition.exhibitionCategories[0]"
						:img="`/images/mockup/${exhibition.thumbnailImg}`"
						:name="exhibition.exhibitionName"
						:startDate="exhibition.startDate"
						:endDate="exhibition.endDate"
					/>
				</nuxt-link>
			</div>
			<div v-else class="flex justify-center w-full min-h-screen md:border-t-2">
				<p class="mt-10 text-lg text-center">
					Ops sorry, no exhibition at this time.<br />Please check back later for
					upcoming exhibition.
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<script setup>
const exhibitionsData = ref([])
const filteredExhibitions = ref([])
const getExhibitions = async () => {
	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}exhibitions`
	const res = await fetch(url, {
		method: 'GET'
	})
	if (res.status === 200) {
		exhibitionsData.value = await res.json()
		filteredExhibitions.value = exhibitionsData.value.sort(
			(a, b) => Number(new Date(b.startDate)) - Number(new Date(a.startDate))
		)
	} else {
		console.log(`Could not fetch data from ${url}`)
		filteredExhibitions.value = []
	}
}
await getExhibitions()

const categories = ['Art', 'Acedemic']
const status = [
	'Currently Exhibition',
	'Previously Exhibition',
	'Upcoming Exhibition '
]
const sorts = ['Oldest to newest', 'Newest to Oldest']

const currentActiveOption = ref('')

const filterByCate = (item) => {
	if (currentActiveOption.value === item) {
		currentActiveOption.value = ''
		filteredExhibitions.value = exhibitionsData.value.sort(
			(a, b) => Number(new Date(b.startDate)) - Number(new Date(a.startDate))
		)
	} else {
		currentActiveOption.value = item
		Object.filter = (obj, predicate) =>
			Object.fromEntries(
				Object.entries(obj).filter(([key, value]) => predicate(value))
			)

		filteredExhibitions.value = Object.filter(
			exhibitionsData.value,
			(exhibition) => exhibition.exhibitionCategories[0] === item
		)
	}
}
</script>
