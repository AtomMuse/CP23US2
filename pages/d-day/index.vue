<script setup></script>

<template>
	<div class="w-full h-full flex justify-center items-center flex-col">
		<div>
			<p class="text-4xl mb-20">SIT D-DAY 2023</p>
		</div>
		<div>
			<Slider />
		</div>

		<div class="mt-28">
			<NuxtLink to="/d-day/map">
				<button
					type="button"
					class="rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
				>
					เข้าชมนิทรรศการ
				</button>
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped></style>
