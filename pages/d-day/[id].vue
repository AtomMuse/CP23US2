<script setup>
const route = useRoute()
const isShowAuthor = ref(false)
const isShowLeft = ref(false)
const isShowRight = ref(false)
const authorDetail = [
	{
		id: 1,
		title: 'Ms.',
		name: 'Pathinya Thonguam',
		studentID: '62130500048',
		email: 'pathinya.gift@mail.kmutt.ac.th'
	},
	{
		id: 2,
		title: 'Mr.',
		name: 'Napat Wattanasuttiwong',
		studentID: '62130500023',
		email: 'napat.watt@mail.kmutt.ac.th'
	},
	{
		id: 3,
		title: 'Mr.',
		name: 'Kritsanapon Rakkiatngam',
		studentID: '62130500008',
		email: 'kritsanapon.melo@mail.kmutt.ac.th'
	}
]
const leftDetail = [
	{
		frontEnd: {
			language: 'JavaScript with TypeScript',
			framework: 'Next.js',
			library: ['Tailwind CSS', 'MobX', 'AXIOS'],
			testing: 'Cypress'
		},
		backEnd: {
			language: 'Node.js with TypeScript',
			framework: 'Express.js',
			odm: 'Mongoose',
			testing: 'Jest',
			utility: ['Nodemailer', 'Celebrate'],
			thirdPartyAPI: 'Edamam'
		},
		database: {
			dbms: 'MongoDB',
			storage: 'Firebase Storage'
		}
	}
]
const rightDetail = [
	{
		systemScope: ['x', 'xx', 'xxx', 'xx'],
		userTarget: 'People who like to cook'
	}
]
</script>

<template>
	<div class="w-full h-screen bg-gray-300">
		<!-- {{ route.params.id }} -->
		<div class="h-[85%] flex justify-center">
			<div class="w-full grid grid-cols-12 gap-6 mx-6 my-50">
				<div class="col-start-2 col-span-2 mb-[-50px] flex items-end">
					<div
						class="h-4/6 bg-[url('~/assets/imgs/left.png')] w-full bg-no-repeat cursor-pointer"
						@click="isShowLeft = true"
					>
						<p class="invisible">left</p>
					</div>
				</div>
				<!-- center -->
				<div
					class="col-start-5 col-span-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 flex flex-col justify-center items-center gap-7"
				>
					<div class="shadow-xl">
						<img src="~/assets/imgs/posterIT62-BU10.png" class="" />
					</div>

					<p
						class="bg-white text-center px-5 text-xs cursor-pointer"
						@click="isShowAuthor = true"
					>
						Author & Advisor
					</p>
					<!-- <p class="bg-white text-center">Slide</p> -->
				</div>

				<div class="col-start-10 col-span-2 mb-[-50px] flex items-end">
					<div
						class="h-4/6 bg-[url('~/assets/imgs/right.png')] w-full bg-no-repeat"
						@click="isShowRight = true"
					>
						<p class="invisible">right</p>
					</div>
				</div>
			</div>
		</div>
		<div
			class="bg-[url(https://img.freepik.com/free-photo/backgrounds-closeup-texture-gray-macro_1122-1711.jpg?w=1060&t=st=1697189147~exp=1697189747~hmac=a9bcac7946eb2af1f4bba1d3ae793aba8415cc58599e5dabf2a2333b00d61ed2)] h-[15%] border-t-4 border-t-gray-500"
		>
			<p class="invisible">cccc</p>
		</div>
		<Modals
			v-if="isShowAuthor"
			@close="isShowAuthor = false"
			:detail="authorDetail"
		/>
		<Modals v-if="isShowLeft" @close="isShowLeft = false" :detail="leftDetail" />
		<Modals
			v-if="isShowRight"
			@close="isShowRight = false"
			:detail="rightDetail"
		/>
	</div>
</template>

<style scoped></style>
