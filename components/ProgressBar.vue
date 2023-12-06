<template>
	<div>
		<div
			class="h-2 w-60 content-none bg-gray-300 rounded-md flex justify-items-stretch"
		>
			<div
				@click="$emit('selectStep', 1)"
				class="h-2 content-none w-20 rounded-md justify-self-start hover:bg-darkBrown cursor-pointer"
				:class="step === 1 ? 'bg-darkBrown' : 'bg-transparent'"
			></div>
			<div
				@click="$emit('selectStep', 2)"
				class="h-2 content-none w-20 rounded-md justify-self-center hover:bg-darkBrown cursor-pointer"
				:class="step === 2 ? 'bg-darkBrown' : 'bg-transparent'"
			></div>
			<div
				@click="$emit('selectStep', 3)"
				class="h-2 content-none w-20 rounded-md justify-self-end hover:bg-darkBrown cursor-pointer"
				:class="step === 3 ? 'bg-darkBrown' : 'bg-transparent'"
			></div>
		</div>
	</div>
</template>

<style scoped></style>

<script setup>
const props = defineProps({
	step: {
		type: Number,
		require: true
	}
})
defineEmits(['selectStep'])
</script>
