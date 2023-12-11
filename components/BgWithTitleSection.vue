<script setup>
const props = defineProps({
	backgroundImg: {
		type: String,
		require: true
	},
	title: {
		type: String,
		default: ''
	}
})
console.log(props.title)
</script>

<template>
	<div>
		<div
			:style="`background-image:url(/images/mockup/${backgroundImg})`"
			:class="
				title != ''
					? 'w-full bg-center bg-cover h-72 content-none'
					: 'w-full bg-center bg-cover h-52'
			"
		>
			<p
				class="flex items-center justify-center w-full h-full text-3xl font-bold text-center text-white bg-opacity-50 bg-zinc-950"
			>
				{{ title }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
