<script setup>
defineProps({
	text: {
		type: String,
		require: true
	}
})
</script>

<template>
	<footer
		class="h-[70px] bottom-0 left-0 z-20 w-full bg-white border-t border-gray-200 shadow-xl flex items-center justify-between dark:bg-darkBrown dark:border-gray-600"
	>
		<div class="w-full max-w-screen-xl mx-auto">
			<span
				class="block text-sm text-gray-500 sm:text-center md:text-base dark:text-gray-300"
				style="
					display: block;
					text-align: center;
					margin: 0 auto;
					font-family: 'Inter', sans-serif;
				"
			>
				{{ text }}
			</span>
		</div>
	</footer>
</template>

<style scoped></style>
