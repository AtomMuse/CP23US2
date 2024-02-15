<template>
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="relative z-10" tabindex="0">
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

			<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
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
							class="relative max-w-4xl px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:p-6"
						>
							<div class="flex flex-col gap-8 px-10 pt-10 pb-8">
								<div class="flex">
									<!-- modal left side -->
									<div>
										<p class="text-4xl font-bold text-darkBlue">Create New Exhibition</p>
										<p class="text-gray-500">เลือก Layout ที่ต้องการ</p>
									</div>
									<!-- modal left side end-->

									<!-- modal right side -->
									<div class="flex items-center justify-center gap-12">
										<!-- blog layout box -->
										<div
											@click="chooseBox('blogLayout')"
											class="hover:shadow-lg transition-transform transform w-[220px] p-4 gap-2 border-2 rounded-xl flex flex-col justify-center items-center"
											:class="
												layoutSelected === 'blogLayout'
													? 'border-softOrange'
													: 'border-gray-400 hover:scale-105 hover:border-softOrange hover:shadow-lg cursor-pointer'
											"
										>
											<div class="flex h-[180px] items-center justify-center">
												<p
													class="w-[124px] h-[124px] bg-gray-300 flex items-center justify-center"
												>
													icon
												</p>
											</div>
											<div class="">
												<p class="text-xl font-bold">Blog Layout</p>
												<p>เเสดงข้อมูลภายในหน้าเดียวในรูปแบบของ Blog</p>
											</div>
										</div>
										<!-- blog layout box end-->
										<!-- live layout box -->
										<div
											@click="chooseBox('liveLayout')"
											class="transition-transform transform w-[220px] p-4 gap-2 border-2 rounded-xl flex flex-col justify-center items-center"
											:class="
												layoutSelected === 'liveLayout'
													? 'border-softOrange'
													: 'border-gray-400 hover:scale-105 hover:border-softOrange hover:shadow-lg cursor-pointer'
											"
										>
											<div class="flex h-[180px] items-center justify-center">
												<p
													class="w-[124px] h-[124px] bg-gray-300 flex items-center justify-center"
												>
													icon
												</p>
											</div>
											<div>
												<p class="text-xl font-bold">Live Layout</p>
												<p>เเสดงข้อมูลในรูปแบบของ Virtual Room</p>
											</div>
										</div>
										<!-- live layout box end-->
									</div>
									<!-- modal right side end -->
								</div>
								<div class="flex justify-end">
									<button
										@click="$emit('next', layoutSelected)"
										type="button"
										class="rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										:disabled="
											layoutSelected != 'blogLayout' && layoutSelected != 'liveLayout'
										"
										:class="
											layoutSelected != 'blogLayout' && layoutSelected != 'liveLayout'
												? ' bg-gray-400 text-gray-200'
												: 'bg-softOrange hover:bg-darkOrange text-white'
										"
									>
										Next
									</button>
								</div>
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
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
	open: {
		type: Boolean,
		default: true
	},
	currentLayout: {
		type: String,
		default: ''
	}
})
defineEmits(['next'])

const layoutSelected = ref(props.currentLayout)
const chooseBox = (box) => {
	layoutSelected.value = box
}
</script>
