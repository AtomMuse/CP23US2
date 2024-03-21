<template>
	<div class="col-span-full">
		<div class="flex gap-1">
			<label
				for="website"
				class="block text-sm font-medium leading-6 text-gray-900"
				>Text</label
			>
			<span v-show="require" class="text-sm text-red-500">*</span>
		</div>
		<div>
			<textarea
				id="about"
				name="about"
				rows="3"
				class="block w-full focus-within:outline-none focus:ring-1 focus:ring-inset focus:ring-softOrange rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
				:placeholder="placeholder"
				:value="props.modelValue"
				@input="emit('update:modelValue', $event.target.value)"
			/>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	modelValue: {
		type: null,
		require: true
	},
	label: {
		type: String,
		require: true
	},
	require: {
		type: Boolean,
		default: false
	},
	placeholder: {
		type: String,
		default: ''
	}
})
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
