<template>
	<div>
		<!-- 1col -->
		<OnlyBackgroundSection
			v-if="isOnlyBackground"
			:image="sectionInfo.background"
		/>
		<BgWithTitleSection
			v-if="isBackgroundWithTitle"
			:backgroundImg="sectionInfo.background"
			:title="sectionInfo.title"
		/>
		<TextWithBorderSection
			v-if="sectionInfo.contentType === 'title and text with border devider'"
			:text="sectionInfo.text"
			:title="sectionInfo.title"
		/>
		<TitleAndTextSection
			v-if="sectionInfo.contentType === 'title and text with bg devider'"
			:title="sectionInfo.title"
			:text="sectionInfo.text"
			:background="sectionInfo.background"
		/>
		<!-- 1col end -->

		<!-- 2col start -->
		<div
			v-if="sectionInfo.sectionType === '2col'"
			class="flex flex-col w-full gap-6 p-8 lg:grid lg:grid-cols-12 lg:py-12 lg:flex-row"
			:class="sectionInfo.background"
		>
			<!-- LeftCol -->
			<div
				v-if="sectionInfo.leftCol.contentType === 'image with description'"
				class="lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-6"
			>
				<ImageWithDesContent
					:image="sectionInfo.leftCol.image"
					:description="sectionInfo.leftCol.imageDescription"
					class="lg:col-start-2 lg:col-span-4"
				/>
			</div>
			<div
				v-if="sectionInfo.leftCol.contentType === 'title and text'"
				class="lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-5"
			>
				<TitleAndTextContent
					:title="sectionInfo.leftCol.title"
					:text="sectionInfo.leftCol.text"
					class="col-span-4 col-start-2"
					textRight
				/>
			</div>
			<!-- LeftCol End-->
			<!-- RightCol Start -->
			<div
				v-if="sectionInfo.rightCol.contentType === 'title and text'"
				class="lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-5"
			>
				<TitleAndTextContent
					:title="sectionInfo.rightCol.title"
					:text="sectionInfo.rightCol.text"
					class="lg:col-start-2 lg:col-span-4"
				/>
			</div>
			<div
				v-if="sectionInfo.rightCol.contentType === 'image with description'"
				class="lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-6"
			>
				<ImageWithDesContent
					:image="sectionInfo.rightCol.image"
					:description="sectionInfo.rightCol.imageDescription"
					class="lg:col-start-2 lg:col-span-4"
				/>
			</div>
			<!-- RightCol End -->
		</div>
		<!-- 2col end -->

		<!-- 3col start -->
		<div
			v-if="sectionInfo.sectionType === '3col'"
			class="py-12 lg:grid lg:grid-cols-12 lg:gap-6"
		>
			<ImagesShowerSection
				:images="sectionInfo.images"
				class="flex justify-between lg:col-span-10 lg:col-start-2"
			/>
		</div>
		<!-- 3col end -->
	</div>
</template>

<style scoped></style>

<script setup>
const props = defineProps({
	sectionInfo: {
		type: Object,
		require: true
	}
})
const isOnlyBackground = ref(false)
const isBackgroundWithTitle = ref(false)

const checkDevider = () => {
	if (
		props.sectionInfo.sectionType === '1col' &&
		props.sectionInfo.contentType === 'only background devider'
	) {
		isOnlyBackground.value = true
		isBackgroundWithTitle.value = false
	} else if (
		props.sectionInfo.sectionType === '1col' &&
		props.sectionInfo.contentType === 'background with title devider'
	) {
		isOnlyBackground.value = false
		isBackgroundWithTitle.value = true
	}
}
checkDevider()
</script>
