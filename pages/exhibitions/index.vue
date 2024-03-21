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
				<button
					@click="clearFilter"
					type="button"
					class="hover:border-softOrange hover:text-softOrange hover:text-softOramge flex items-center justify-center gap-x-1.5 rounded-md border mt-4 border-gray-300 text-gray-400 px-3 py-2 text-sm font-medium shadow-sm"
				>
					Clear Filter
				</button>
			</div>
			<div
				class="grid w-full h-full gap-10 md:pt-8 md:border-t-2 lg:grid-cols-3 xl:grid-cols-4"
				v-if="filteredExhibitions.length != 0"
			>
				<div v-for="(exhibition, index) in filteredExhibitions" :key="index">
					<TextOverImage
						isExhibition
						class="w-full bg-green-500"
						:text="exhibition.exhibitionCategories[0]"
						:img="exhibition.thumbnailImg"
						:name="exhibition.exhibitionName"
						:startDate="exhibition.startDate"
						:endDate="exhibition.endDate"
						v-if="exhibition.exhibitionCategories != undefined"
						@delete="
							cornfirmDeleteExhibition(exhibition._id, exhibition.exhibitionName)
						"
						@visitExhibition="visitExhibition(exhibition._id)"
						@edit="goToEditPage(exhibition._id)"
					/>
				</div>
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
import Swal from 'sweetalert2'
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
		filteredExhibitions.value = []
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
const clearFilter = () => {
	currentActiveOption.value = ''
	filteredExhibitions.value = exhibitionsData.value.sort(
		(a, b) => Number(new Date(b.startDate)) - Number(new Date(a.startDate))
	)
}

const cornfirmDeleteExhibition = (exhibitionID, exhibitionName) => {
	Swal.fire({
		title: 'Delete Exhibition',
		text: `ต้องการลบ ${exhibitionName}`,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Confirm',
		reverseButtons: true
	}).then((result) => {
		if (result.isConfirmed) {
			fetchDeleteExhibition(exhibitionID, exhibitionName)
		}
	})
}

const fetchDeleteExhibition = async (exhibitionID, exhibitionName) => {
	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}exhibitions/${exhibitionID}`
	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
	const res = await fetch(url, {
		method: 'DELETE'
	})
	if (res.status === 200) {
		Swal.fire({
			title: 'Deleted !',
			text: `ลบ ${exhibitionName} สำเร็จ`,
			icon: 'success'
		})
		await getExhibitions()
	} else {
		console.log(`Could not fetch data from ${url}`)
	}
}

const visitExhibition = (exhibitionId) => {
	const router = useRouter()
	router.push(`/exhibitions/${exhibitionId}`)
}
const goToEditPage = (exhibitionId) => {
	const router = useRouter()
	router.push(`/edit/${exhibitionId}`)
}
</script>
