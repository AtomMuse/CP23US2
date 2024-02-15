<template>
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="relative z-10" @click="$emit('close')">
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
			</TransitionChild>

			<div class="fixed inset-0 z-10 w-screen mt-16 overflow-y-auto">
				<div
					class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0"
				>
					<TransitionChild
						as="template"
						enter="ease-out duration-300"
						enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enter-to="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leave-from="opacity-100 translate-y-0 sm:scale-100"
						leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<DialogPanel
							class="relative max-w-5xl px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:p-6"
						>
							<div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
								<button
									type="button"
									class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									@click="$emit('close')"
								>
									<span class="sr-only">Close</span>
									<XMarkIcon class="w-6 h-6" aria-hidden="true" />
								</button>
							</div>
							<div
								class="flex w-full h-full gap-8 pr-6"
								v-if="data.previewType === 'img'"
							>
								<div>
									<img :src="data.details.img" />
								</div>
								<div
									class="flex flex-col gap-8"
									:class="data.details.contents != undefined ? 'w-full' : ''"
								>
									<div
										class="flex flex-col gap-4"
										v-for="(content, index) in data.details.contents"
										:key="index"
									>
										<p class="text-lg font-bold">{{ content.title }}</p>
										<div
											v-for="(text, index) in content.text"
											:key="index"
											class="pl-4 border-l-2"
										>
											<p v-for="(detail, index) in text" :key="index">{{ detail }}</p>
										</div>
									</div>
								</div>
							</div>
							<div v-if="data.previewType === 'text'" class="flex flex-col gap-4 pr-6">
								<p class="text-lg font-bold">{{ data.details.contents.title }}</p>
								<p>{{ data.details.contents.text }}</p>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	TransitionChild,
	TransitionRoot
} from '@headlessui/vue'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({
	open: {
		type: Boolean,
		default: false
	},
	data: {
		type: Object,
		default: {}
	}
})
defineEmits(['close'])
</script>
