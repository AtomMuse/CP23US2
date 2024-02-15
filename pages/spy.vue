<template>
	<div class="h-screen overflow-hidden bg-[#cecece]">
		<div class="container">
			<div class="scroller">
				<div class="room room--current">
					<div class="gap-12 room__side room__side--back">
						<div v-for="(center, index) in mockData.rooms[0].center" :key="index">
							<iframe
								width="600"
								height="315"
								:src="center.src"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
								v-if="center.previewType === 'video'"
							></iframe>
							<div
								class="w-[500px] cursor-pointer"
								v-if="center.previewType === 'text'"
								@click="showModal(center)"
							>
								<p class="text-lg font-bold">{{ center.details.contents.title }}</p>
								<p class="text-sm">
									{{ center.details.contents.text }}
								</p>
							</div>
						</div>
					</div>
					<div class="room__side room__side--left">
						<div v-for="(left, index) in mockData.rooms[0].left" :key="index">
							<img
								class="cursor-pointer room__img"
								:src="left.src"
								alt="Some image"
								@click="showModal(left)"
								v-if="left.previewType === 'img'"
							/>
						</div>
					</div>
					<div class="room__side room__side--right">
						<div v-for="(right, index) in mockData.rooms[0].right" :key="index">
							<img
								class="cursor-pointer room__img"
								:src="right.src"
								alt="Some image"
								@click="showModal(right)"
								v-if="right.previewType === 'img'"
							/>
						</div>
					</div>
					<div class="room__side room__side--bottom"></div>
				</div>
				<!-- /room -->
			</div>
		</div>
		<BaseModal :open="isShowModal" @close="isShowModal = false" :data="data" />
		<div
			class="absolute px-4 py-1 mt-6 bg-[#626262] rounded-3xl right-6 text-white text-sm"
		>
			<BadgeNumber :number="mockData.visitNumber" isNumberOfVisit />
		</div>
		<div class="absolute px-6 py-1 mt-6 left-6">
			<p class="text-lg font-semibold">{{ mockData.exhibitionName }}</p>
			<p class="mt-1 text-sm">Room 1/{{ mockData.rooms.length }}</p>
		</div>
		<div class="absolute bottom-[-35px] flex justify-center w-full">
			<MenuInLiveLayout />
		</div>
	</div>
</template>
<script setup>
const isShowModal = ref(false)
const data = ref()
const mockData = ref({
	id: 1,
	exhibitionName: 'SIT D-Day 2023',
	exhibitionDescription: '',
	visitNumber: 500,
	rooms: [
		{
			left: [
				{
					previewType: 'img',
					src: 'imgs/groupPicIT62-BU11.png',
					details: {
						img: 'imgs/groupPicIT62-BU11.png',
						contents: [
							{
								title: 'AUTHOR',
								text: [
									[
										'Ms.Noparat Prasongdee',
										'รหัสนักศึกษา 62130500126',
										'noparat.saimai@mail.kmutt.ac.th'
									],
									[
										'Ms.Praepanwa Tedprasit',
										'รหัสนักศึกษา 62130500069',
										'praepanwa.phaeng@mail.kmutt.ac.th'
									],
									[
										'Mr.Similan Klinsmith',
										'รหัสนักศึกษา 62130500096',
										'similan.klinsmith@mail.kmutt.ac.th'
									]
								]
							},
							{
								title: 'ADVISOR',
								text: [['Tuul Triyason']]
							}
						]
					}
				},
				{
					previewType: 'img',
					src: 'imgs/screenshot1.IT62-BU11.png',
					details: {
						img: 'imgs/screenshot1.IT62-BU11.png'
					}
				},
				{
					previewType: 'img',
					src: 'imgs/screenshot2.IT62-BU11.png',
					details: { img: 'imgs/screenshot2.IT62-BU11.png' }
				},
				{}
			],
			center: [
				{
					previewType: 'video',
					src: 'https://www.youtube.com/embed/z9RIAUsh0-U?si=HzytPN6w3g8Legd1&amp;controls=0'
				},
				{
					previewType: 'text',
					details: {
						img: 'imgs/groupPicIT62-BU11.png',
						contents: {
							title: 'Detail',
							text:
								'เนื่องด้วยปัญหาสำหรับเลขานุการที่ประสบพบเจอกับการจัดตารางเวลาสำหรับผู้บริหารเพื่อทำการนัดหมายการประชุมหรือทำกิจกรรมต่าง ๆ ที่ต้องมีการนัดหมายกัน ตั้งแต่ 2 ท่านเป็นต้นไปนั้น ทำให้การนัดหมายสำหรับเลขานุการเป็นไปได้อย่างยากลำบาก เนื่องจากการหาเวลาที่คณะผู้บริหารตรงกันนั้นแต่ละบุคคลจะใช้การติดต่อทางช่องทางที่แตกต่างกันไป ทำให้จัดสรรได้อย่างไม่มีประสิทธิภาพมาก และหาข้อสรุปได้ยาก ทั้งนี้ในการจัดการเวลาในการนัดหมายต่าง ๆ ไม่ว่าจะเป็นการประชุมหรือการจัดกิจกรรม ที่มีความยุ่งยากในการนัดหมายและการจัดการ เนื่องด้วยเหตุนี้จึงเกิดเเนวคิดที่พัฒนา Web Application ที่จะช่วยจัดสรรตารางเวลาที่ เหล่าผู้บริหารมีเวลาว่างสอดคล้องกันรวมไปถึงการนัดหมายการประชุมให้มีความสะดวกสบายมากยิ่งขึ้นลดเวลาและขั้นตอนในการจัดการ และเพิ่มประสิทธิภาพในการทำงานมากขึ้นโดยกลุ่มเป้าหมายหลักในการ พัฒนา Web Applicationนี้ คือคณะเลขานุการภายในมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
						}
					}
				}
			],
			right: [
				{
					previewType: 'img',
					src: 'imgs/screenshot3.IT62-BU11.png',
					details: {
						img: 'imgs/screenshot3.IT62-BU11.png'
					}
				},
				{
					previewType: 'img',
					src: 'imgs/screenshot4.IT62-BU11.png',
					details: {
						img: 'imgs/screenshot4.IT62-BU11.png'
					}
				}
			]
		}
	]
})
</script>

<style scoped>
.container {
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
	max-width: 50%;
	max-height: 60%;
	margin: 0 5%;
	transform: translate3d(0, 0, 10px);
	backface-visibility: hidden;
}
</style>
