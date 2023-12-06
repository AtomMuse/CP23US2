<script setup>
defineProps({
	img: {
		type: String,
		required: true
	}
})
</script>

<template>
	<div
		class="bg-gradient-to-l from-black/50 min-h-[400px] w-full bg-cover bg-center relative shadow-xl"
	>
		<img
			:src="img"
			class="absolute object-cover w-full h-full mix-blend-overlay"
		/>
		<div class="flex min-h-[400px] relative">
			<div class="hidden w-1/2 content-none md:flex"></div>
			<div
				class="flex flex-col items-center justify-center w-full gap-6 md:w-1/2 textShadowStyle"
			>
				<div class="text-5xl font-bold text-center md:text-6xl">
					<span class="text-white">ATOM</span>
					<span class="text-softOrange">MUSE</span>
				</div>
				<p class="px-4 text-lg font-normal text-center text-white md:px-0">
					Online Exhibition Management System
					<br />พื้นที่เล็ก ๆ สำหรับทุกผลงานที่มีพลังยิ่งใหญ่
				</p>
				<button
					type="button"
					class="inline-flex items-center px-4 py-2 text-base font-normal text-white border border-gray-300 rounded-md shadow-sm hover:bg-white/20"
				>
					Let’s Exhibit You Works
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.textShadowStyle {
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
