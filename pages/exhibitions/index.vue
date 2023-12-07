<template>
	<div class="w-full h-screen px-12">
		<div class="flex flex-col items-center justify-center h-48 gap-2">
			<p class="text-6xl font-bold">Discover Your Preference</p>
			<p class="text-2xl font-bold text-softOrange">
				Journey Through Our Online Exhibitions
			</p>
		</div>
		<div class="flex gap-12">
			<div class="flex flex-col w-1/4 gap-3">
				<BaseFilterDropdown
					icon="filter"
					label="Filter by Category"
					:items="categories"
				/>
				<BaseFilterDropdown
					icon="status"
					label="Filter by Status"
					:items="status"
				/>
				<BaseFilterDropdown icon="sort" label="Sort" :items="sorts" />
			</div>
			<div class="w-full pt-8 border-t-2">
				exhibition list
				<nuxt-link
					:to="`/exhibitions/${exhibition.id}`"
					v-for="(exhibition, index) in exhibitionsData"
					:key="index"
				>
					<li>{{ exhibition.exhibitionName }}</li>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<script setup>
const exhibitionsData = ref([])
const getExhibitions = async () => {
	// const runtimeConfig = useRuntimeConfig()
	// const API_URL = runtimeConfig.public.API_URL
	const res = await fetch(`http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`)
	exhibitionsData.value = await res.json()
}
await getExhibitions()
const categories = ['Art', 'Acedemic']
const status = [
	'Currently Exhibition',
	'Previously Exhibition',
	'Upcoming Exhibition '
]
const sorts = ['Oldest to newest', 'Newest to Oldest']
</script>
