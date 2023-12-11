<template>
	<div>
		<div
			class="flex h-2 bg-gray-300 rounded-md w-60 content-none justify-items-stretch"
		>
			<div
				@click="$emit('selectStep', 1)"
				class="w-20 h-2 rounded-md cursor-pointer content-none justify-self-start hover:bg-darkBrown"
				:class="step === 1 ? 'bg-darkBrown' : 'bg-transparent'"
			></div>
			<div
				@click="$emit('selectStep', 2)"
				class="w-20 h-2 rounded-md cursor-pointer content-none justify-self-center hover:bg-darkBrown"
				:class="step === 2 ? 'bg-darkBrown' : 'bg-transparent'"
			></div>
			<div
				@click="$emit('selectStep', 3)"
				class="w-20 h-2 rounded-md cursor-pointer content-none justify-self-end hover:bg-darkBrown"
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
