<template>
	<div class="flex justify-center items-stretch cursor-pointer">
		<div
			class="w-[316px] min-h-[407px] flex flex-col jestify-between p-3 rounded-md md:rounded-3xl transition-transform transform hover:scale-105 hover:border border-solid border-darkBrown bg-white hover:shadow-lg"
		>
			<div class="gap-6 flex flex-col h-full">
				<img
					loading="lazy"
					:srcSet="`/_nuxt/assets/images/mockup/${img}`"
					class="aspect-[1.6] rounded-md md:rounded-3xl"
					alt="Exhibition"
				/>
				<div class="text-darkBlue">
					<div class="flex flex-col gap-2">
						<p class="font-bold text-base">{{ title }}</p>
						<p class="font-medium text-sm leading-5">{{ previewText }} ...</p>
					</div>
				</div>
			</div>

			<p class="text-gray-400 text-sm mb-0">{{ date }}</p>
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
