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
			:src="`/_nuxt${img}`"
			class="w-full h-full object-cover absolute mix-blend-overlay"
		/>
		<div class="flex min-h-[400px] relative">
			<div class="w-1/2 content-none hidden md:flex"></div>
			<div
				class="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 textShadowStyle"
			>
				<div class="font-bold text-5xl md:text-6xl text-center">
					<span class="text-white">ATOM</span>
					<span class="text-softOrange">MUSE</span>
				</div>
				<p class="text-center text-white text-lg font-normal px-4 md:px-0">
					Online Exhibition Management System
					<br />พื้นที่เล็ก ๆ สำหรับทุกผลงานที่มีพลังยิ่งใหญ่
				</p>
				<button
					type="button"
					class="hover:bg-white/20 inline-flex items-center rounded-md border border-gray-300 text-white px-4 py-2 text-base font-normal shadow-sm"
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
