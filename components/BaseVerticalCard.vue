<template>
	<div class="flex items-stretch justify-center cursor-pointer">
		<div
			class="w-[316px] min-h-[407px] flex flex-col jestify-between p-3 rounded-md md:rounded-3xl transition-transform transform hover:scale-105 hover:border border-solid border-darkBrown bg-white hover:shadow-lg"
		>
			<div class="flex flex-col h-full gap-6">
				<img
					loading="lazy"
					:srcSet="`/images/mockup/${img}`"
					class="aspect-[1.6] rounded-md md:rounded-3xl"
					alt="Exhibition"
				/>
				<div class="text-darkBlue">
					<div class="flex flex-col gap-2">
						<p class="text-base font-bold">{{ title }}</p>
						<p class="text-sm font-medium leading-5">{{ previewText }} ...</p>
					</div>
				</div>
			</div>

			<p class="mb-0 text-sm text-gray-400">{{ date }}</p>
		</div>
	</div>
</template>

<style scoped></style>

<script setup>
const props = defineProps({
	title: {
		type: String,
		require: true
	},
	desc: {
		type: String,
		require: true
	},
	date: {
		type: String,
		require: true
	},
	img: {
		type: String,
		require: true
	}
})

const noOfLetter = 150
const previewText = ref('')
const getPreviewText = () => {
	if (props.desc.length > noOfLetter) {
		previewText.value = props.desc.slice(0, 150)
	}
}
getPreviewText()
</script>
