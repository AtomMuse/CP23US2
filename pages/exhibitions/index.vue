<template>
	<div class="w-full h-screen">
		exhibition list
		<nuxt-link
			:to="`/exhibitions/${exhibition.id}`"
			v-for="(exhibition, index) in exhibitionsData"
			:key="index"
		>
			<li>{{ exhibition.exhibitionName }}</li>
		</nuxt-link>
	</div>
</template>

<style scoped></style>

<script setup>
const exhibitionsData = ref([])
const getExhibitions = async () => {
	const res = await fetch('http://localhost:5000/exhibitions')
	exhibitionsData.value = await res.json()
}
await getExhibitions()
</script>
