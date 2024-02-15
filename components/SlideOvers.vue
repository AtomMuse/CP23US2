<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="relative z-10 cursor-pointer" @click="$emit('close')">
			<TransitionChild
				as="template"
				enter="ease-in-out duration-500"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in-out duration-500"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-50" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-hidden">
				<div class="absolute inset-0 overflow-hidden">
					<div
						class="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none"
					>
						<TransitionChild
							as="template"
							enter="transform transition ease-in-out duration-500 sm:duration-700"
							enter-from="translate-x-full"
							enter-to="translate-x-0"
							leave="transform transition ease-in-out duration-500 sm:duration-700"
							leave-from="translate-x-0"
							leave-to="translate-x-full"
						>
							<DialogPanel class="relative pointer-events-auto w-96">
								<TransitionChild
									as="template"
									enter="ease-in-out duration-500"
									enter-from="opacity-0"
									enter-to="opacity-100"
									leave="ease-in-out duration-500"
									leave-from="opacity-100"
									leave-to="opacity-0"
								>
									<div
										class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4"
									>
										<button
											type="button"
											class="relative text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
											@click="$emit('close')"
										>
											<span class="absolute -inset-2.5" />
											<span class="sr-only">Close panel</span>
											<XMarkIcon class="w-6 h-6" aria-hidden="true" />
										</button>
									</div>
								</TransitionChild>
								<div class="h-full p-8 mt-16 overflow-y-auto bg-white">
									<div class="pb-16 space-y-6">
										<div
											class="flex flex-col w-full h-full gap-8"
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
										<div
											v-if="data.previewType === 'text'"
											class="flex flex-col gap-4 pr-6"
										>
											<div
												class="flex flex-col gap-4"
												v-for="(content, index) in data.details.contents"
												:key="index"
											>
												<p class="text-lg font-bold">{{ content.title }}</p>
												<div v-for="(text, index) in content.text" :key="index">
													<p v-for="(detail, index) in text" :key="index">{{ detail }}</p>
												</div>
											</div>
										</div>
										<!-- <div>
											<div
												class="block w-full overflow-hidden rounded-lg aspect-h-7 aspect-w-10"
											>
												<img
													src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
													alt=""
													class="object-cover"
												/>
											</div>
											<div class="flex items-start justify-between mt-4">
												<div>
													<h2 class="text-base font-semibold leading-6 text-gray-900">
														<span class="sr-only">Details for </span>IMG_4985.HEIC
													</h2>
													<p class="text-sm font-medium text-gray-500">3.9 MB</p>
												</div>
												<button
													type="button"
													class="relative flex items-center justify-center w-8 h-8 ml-4 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
												>
													<span class="absolute -inset-1.5" />
													<HeartIcon class="w-6 h-6" aria-hidden="true" />
													<span class="sr-only">Favorite</span>
												</button>
											</div>
										</div>
										<div>
											<h3 class="font-medium text-gray-900">Information</h3>
											<dl
												class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
											>
												<div class="flex justify-between py-3 text-sm font-medium">
													<dt class="text-gray-500">Uploaded by</dt>
													<dd class="text-gray-900">Marie Culver</dd>
												</div>
												<div class="flex justify-between py-3 text-sm font-medium">
													<dt class="text-gray-500">Created</dt>
													<dd class="text-gray-900">June 8, 2020</dd>
												</div>
												<div class="flex justify-between py-3 text-sm font-medium">
													<dt class="text-gray-500">Last modified</dt>
													<dd class="text-gray-900">June 8, 2020</dd>
												</div>
												<div class="flex justify-between py-3 text-sm font-medium">
													<dt class="text-gray-500">Dimensions</dt>
													<dd class="text-gray-900">4032 x 3024</dd>
												</div>
												<div class="flex justify-between py-3 text-sm font-medium">
													<dt class="text-gray-500">Resolution</dt>
													<dd class="text-gray-900">72 x 72</dd>
												</div>
											</dl>
										</div>
										<div>
											<h3 class="font-medium text-gray-900">Description</h3>
											<div class="flex items-center justify-between mt-2">
												<p class="text-sm italic text-gray-500">
													Add a description to this image.
												</p>
												<button
													type="button"
													class="relative flex items-center justify-center w-8 h-8 -mr-2 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
												>
													<span class="absolute -inset-1.5" />
													<PencilIcon class="w-5 h-5" aria-hidden="true" />
													<span class="sr-only">Add description</span>
												</button>
											</div>
										</div>
										<div>
											<h3 class="font-medium text-gray-900">Shared with</h3>
											<ul
												role="list"
												class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
											>
												<li class="flex items-center justify-between py-3">
													<div class="flex items-center">
														<img
															src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
															alt=""
															class="w-8 h-8 rounded-full"
														/>
														<p class="ml-4 text-sm font-medium text-gray-900">
															Aimee Douglas
														</p>
													</div>
													<button
														type="button"
														class="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
													>
														Remove<span class="sr-only"> Aimee Douglas</span>
													</button>
												</li>
												<li class="flex items-center justify-between py-3">
													<div class="flex items-center">
														<img
															src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
															alt=""
															class="w-8 h-8 rounded-full"
														/>
														<p class="ml-4 text-sm font-medium text-gray-900">
															Andrea McMillan
														</p>
													</div>
													<button
														type="button"
														class="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
													>
														Remove<span class="sr-only"> Andrea McMillan</span>
													</button>
												</li>
												<li class="flex items-center justify-between py-2">
													<button
														type="button"
														class="flex items-center p-1 -ml-1 bg-white rounded-md group focus:outline-none focus:ring-2 focus:ring-indigo-500"
													>
														<span
															class="flex items-center justify-center w-8 h-8 text-gray-400 border-2 border-gray-300 border-dashed rounded-full"
														>
															<PlusIcon class="w-5 h-5" aria-hidden="true" />
														</span>
														<span
															class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500"
															>Share</span
														>
													</button>
												</li>
											</ul>
										</div>
										<div class="flex">
											<button
												type="button"
												class="flex-1 px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												Download
											</button>
											<button
												type="button"
												class="flex-1 px-3 py-2 ml-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
											>
												Delete
											</button>
										</div> -->
									</div>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
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
	TransitionChild,
	TransitionRoot
} from '@headlessui/vue'
import { HeartIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PencilIcon, PlusIcon } from '@heroicons/vue/20/solid'

// const open = ref(true)

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
