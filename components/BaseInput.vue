<template>
	<div class="flex flex-col">
		<div class="flex gap-1">
			<label
				v-show="label != ''"
				for="website"
				class="block text-sm font-medium leading-6 text-gray-900"
				>{{ label }}</label
			>
			<span v-show="require" class="text-sm text-red-500">*</span>
		</div>
		<div>
			<div
				class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-softOrange"
			>
				<input
					:type="type"
					name="website"
					:id="id"
					class="focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
					:placeholder="placeholder"
					:value="props.modelValue"
					@input="emit('update:modelValue', $event.target.value)"
					autocomplete="off"
				/>
			</div>
			<p class="invisible text-sm text-softOrange">errrrrrrrrr</p>
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
		default: ''
	},
	require: {
		type: Boolean,
		default: false
	},
	placeholder: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: 'text'
	},
	id: {
		type: String,
		default: ''
	}
})
const emit = defineEmits(['update:modelValue'])
</script>
<style scoped></style>
