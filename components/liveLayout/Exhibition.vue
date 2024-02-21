<template>
	<div class="h-screen overflow-hidden bg-[#cecece]">
		<div class="containerx">
			<div class="-mt-16 scroller">
				<div class="room room--current">
					<div class="gap-12 room__side room__side--back">
						<div v-for="(center, index) in rooms[selectedRoom].center" :key="index">
							<!-- video -->
							<iframe
								width="600"
								height="315"
								:src="center.src"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
								v-if="center.previewType === 'video'"
								class="-mt-12"
							></iframe>
							<!-- video end -->
							<!-- text -->
							<div
								class="w-[500px] cursor-pointer -mt-12"
								v-if="center.previewType === 'text'"
								@click="showSlideOvers(center)"
							>
								<div
									class="flex flex-col gap-4"
									v-for="(content, index) in center.details.contents"
									:key="index"
								>
									<p class="text-lg font-bold">{{ content.title }}</p>
									<div v-for="(text, index) in content.text" :key="index">
										<p v-for="(detail, index) in text" :key="index">{{ detail }}</p>
									</div>
								</div>
							</div>
							<!-- text end -->
							<!-- img -->
							<div
								class="flex flex-col items-center justify-center w-full gap-4"
								v-if="center.previewType === 'img'"
							>
								<img class="h-[315px]" :src="center.src" alt="Some image" />
								<InformationCircleIcon
									@click="showSlideOvers(center)"
									class="h-12 cursor-pointer w-14 animate__pulse-logo text-darkOrange"
								/>
							</div>
							<!-- img end -->
						</div>
					</div>
					<div class="gap-40 pr-40 room__side room__side--left">
						<div
							v-for="(left, index) in rooms[selectedRoom].left"
							:key="index"
							class="w-full"
						>
							<div
								class="flex flex-col items-center justify-center w-full gap-4"
								v-if="left.previewType === 'img'"
							>
								<img class="room__img" :src="left.src" alt="Some image" />
								<InformationCircleIcon
									@click="showSlideOvers(left)"
									class="h-12 cursor-pointer w-14 animate__pulse-logo text-darkOrange"
								/>
							</div>
							<div
								class="cursor-pointer"
								v-if="left.previewType === 'text'"
								@click="showSlideOvers(left)"
							>
								<div
									class="flex flex-col w-2/3 gap-4"
									v-for="(content, index) in left.details.contents"
									:key="index"
								>
									<p class="text-lg font-bold">{{ content.title }}</p>
									<div v-for="(text, index) in content.text" :key="index">
										<p v-for="(detail, index) in text" :key="index">{{ detail }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="gap-40 pr-40 room__side room__side--right">
						<div
							v-for="(right, index) in rooms[selectedRoom].right"
							:key="index"
							class="w-full"
						>
							<div
								class="flex flex-col items-center justify-center w-full gap-4"
								v-if="right.previewType === 'img'"
							>
								<img class="room__img" :src="right.src" alt="Some image" />
								<InformationCircleIcon
									@click="showSlideOvers(right)"
									class="h-12 cursor-pointer w-14 animate__pulse-logo text-darkOrange"
								/>
							</div>
							<div
								class="cursor-pointer"
								v-if="right.previewType === 'text'"
								@click="showSlideOvers(right)"
							>
								<div
									class="flex flex-col w-2/3 gap-4"
									v-for="(content, index) in right.details.contents"
									:key="index"
								>
									<p class="text-lg font-bold">{{ content.title }}</p>
									<div v-for="(text, index) in content.text" :key="index">
										<p v-for="(detail, index) in text" :key="index">{{ detail }}</p>
									</div>
								</div>
							</div>
							<iframe
								:src="right.src"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
								v-if="right.previewType === 'video'"
								class="w-full h-[338px]"
							></iframe>
						</div>
					</div>
					<div class="room__side room__side--bottom"></div>
				</div>
				<!-- /room -->
			</div>
		</div>

		<BaseModal :open="isShowModal" @close="isShowModal = false" :data="data" />
		<SlideOvers
			:open="isShowSlideOvers"
			@close="isShowSlideOvers = false"
			:data="data"
		/>
		<!-- <div
			class="absolute px-4 py-1 mt-6 bg-[#626262] rounded-3xl right-6 text-white text-sm"
		>
			<BadgeNumber :number="exhibition.visitedNumber" isNumberOfVisit />
		</div>
		<div class="absolute px-6 py-1 mt-6 left-6">
			<p class="text-lg font-semibold">{{ exhibition.exhibitionName }}</p>
			<p class="mt-1 text-sm">Room 1/{{ exhibition.rooms.length }}</p>
		</div>
	-->
		<div class="absolute flex justify-center w-full bottom-28">
			<MenuInLiveLayout @home="$emit('gotoLanding')" @map="$emit('goToMap')" />
		</div>
		<span
			class="absolute left-12 bottom-28"
			@click="$emit('prevRoom')"
			:class="selectedRoom + 1 === 1 ? 'invisible' : ''"
			><ArrowBtn leftArrow
		/></span>
		<span
			class="absolute right-12 bottom-28"
			@click="$emit('nextRoom')"
			:class="selectedRoom + 1 === rooms.length ? 'invisible' : ''"
			><ArrowBtn rightArrow
		/></span>
	</div>
</template>
<script setup>
import 'animate.css'
defineEmits(['gotoLanding', 'goToMap', 'nextRoom', 'prevRoom'])
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
const isShowModal = ref(false)
const data = ref()
const isShowSlideOvers = ref(false)
const showModal = (detail) => {
	isShowModal.value = true
	data.value = detail
}
const showSlideOvers = (detail) => {
	isShowSlideOvers.value = true
	data.value = detail
}
const props = defineProps({
	rooms: {
		type: Array,
		require: true
	},
	selectedRoom: {
		type: Number,
		require: true
	}
})

// const currentRoom = computed(() => {
// 	return props.selectedRoom
// })
</script>

<style scoped>
.containerx {
	position: absolute;
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	perspective: 2000px;
}
.scroller {
	height: 100%;
	transform-style: preserve-3d;
}
.room {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100vw;
	height: 100vh;
	margin: -50vh 0 0 -50vw;
	pointer-events: none;
	opacity: 0;
	transform-style: preserve-3d;
}
.room--current {
	pointer-events: auto;
	opacity: 1;
}
.room__side {
	position: absolute;
	/* position: relative; */
	display: flex;
	justify-content: center;
	align-items: center;
	transform-style: preserve-3d;
}

.room__side--left,
.room__side--right {
	width: 4000px; /* depth */
	height: 100vh;
	background: #dbdbdb;
}

.room__side--back {
	width: 100vw;
	height: 100vh;
	background: #e9e9e9;
	box-shadow: 0 0 0 2px #e9e9e9;
	transform: translate3d(0, 0, -4000px) rotate3d(1, 0, 0, 0.1deg)
		rotate3d(1, 0, 0, 0deg);
	/* Rotation due to rendering bug in Chrome when loader slides up (images seem cut off) */
}

.room__side--right {
	right: 0;
	justify-content: flex-end;
	transform: rotate3d(0, 1, 0, -90.03deg);
	transform-origin: 100% 50%;
}

.room__side--left {
	justify-content: flex-start;
	transform: rotate3d(0, 1, 0, 90deg);
	transform-origin: 0 50%;
}

.room__side--bottom {
	width: 100vw; /* depth */
	height: 4000px;
	background: #d0d0d0;
	transform: rotate3d(1, 0, 0, 90deg) translate3d(0, -4000px, 0);
	transform-origin: 50% 0%;
	top: 100%;
}
/* Inner elements */
.room__img {
	flex: none;
	/* max-width: 50%; */
	width: 100%;
	height: 400px;
	margin: 0 5%;
	transform: translate3d(0, 0, 10px);
	backface-visibility: hidden;
}

.animate__pulse-logo {
	animation: pulse-play-btn 2s;
	animation-iteration-count: infinite;
}

@keyframes pulse-play-btn {
	0% {
		transform: scale(1.1);
	}

	70% {
		transform: scale(0.9);
	}

	100% {
		transform: scale(1.1);
	}
}
</style>
