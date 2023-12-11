<template>
	<Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
		<div class="px-8 lg:px-12">
			<div class="flex justify-between h-16">
				<div class="flex w-full md:w-fit">
					<div class="flex items-center mr-2 -ml-2 md:hidden">
						<!-- Mobile menu button -->
						<DisclosureButton
							class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							<span class="absolute -inset-0.5" />
							<span class="sr-only">Open main menu</span>
							<Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
							<XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
						</DisclosureButton>
					</div>

					<div class="flex items-center w-full">
						<AtomsLogo />
					</div>
				</div>

				<div class="items-center hidden gap-5 md:flex">
					<!-- menu -->
					<div class="hidden h-full mr-5 md:flex gap-9 text-darkBlue">
						<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
						<NuxtLink
							to="/"
							class="inline-flex items-center text-sm font-medium hover:text-softOrange"
						>
							Home
						</NuxtLink>
						<NuxtLink
							to="/exhibitions"
							class="inline-flex items-center text-sm font-medium hover:text-softOrange"
						>
							Exhibitions
						</NuxtLink>
					</div>
					<!-- search -->
					<div
						class="items-center justify-center flex-1 hidden md:flex lg:justify-end"
					>
						<div class="w-full max-w-lg lg:max-w-xs">
							<label for="search" class="sr-only">Search</label>
							<div class="relative">
								<div
									class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
								>
									<MagnifyingGlassIcon
										class="w-5 h-5 text-gray-400"
										aria-hidden="true"
									/>
								</div>
								<AtomsSearchInput />
							</div>
						</div>
					</div>
					<!-- button -->
					<div class="flex-shrink-0 hidden lg:flex">
						<button
							type="button"
							class="hover:border-softOrange hover:text-softOrange hover:text-softOramge relative inline-flex items-center gap-x-1.5 rounded-md border border-gray-300 text-gray-400 px-3 py-2 text-sm font-medium shadow-sm"
						>
							<PlusIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
							New Exhibition
						</button>
					</div>
					<!-- ham -->
					<div class="hidden md:flex md:flex-shrink-0 md:items-center">
						<!-- Profile dropdown -->
						<Menu as="div" class="relative">
							<div>
								<MenuButton class="relative flex text-sm bg-white rounded-full">
									<span class="absolute -inset-1.5" />
									<span class="sr-only">Open user menu</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6 text-gray-400"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
								</MenuButton>
							</div>
							<transition
								enter-active-class="transition duration-200 ease-out"
								enter-from-class="transform scale-95 opacity-0"
								enter-to-class="transform scale-100 opacity-100"
								leave-active-class="transition duration-75 ease-in"
								leave-from-class="transform scale-100 opacity-100"
								leave-to-class="transform scale-95 opacity-0"
							>
								<MenuItems
									class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								>
									<MenuItem v-slot="{ active }">
										<a
											href="#"
											:class="[
												active ? 'bg-gray-100' : '',
												' lg:hidden  block px-4 py-2 text-sm text-gray-700'
											]"
											>New Exhibition</a
										>
									</MenuItem>
									<MenuItem v-slot="{ active }">
										<a
											href="#"
											:class="[
												active ? 'bg-gray-100' : '',
												'block px-4 py-2 text-sm text-gray-700'
											]"
											>Your Profile</a
										>
									</MenuItem>
									<MenuItem v-slot="{ active }">
										<a
											href="#"
											:class="[
												active ? 'bg-gray-100' : '',
												'block px-4 py-2 text-sm text-gray-700'
											]"
											>Settings</a
										>
									</MenuItem>
									<MenuItem v-slot="{ active }">
										<a
											href="#"
											:class="[
												active ? 'bg-gray-100' : '',
												'block px-4 py-2 text-sm text-gray-700'
											]"
											>Sign out</a
										>
									</MenuItem>
								</MenuItems>
							</transition>
						</Menu>
					</div>
				</div>
			</div>
		</div>

		<!-- mobile -->
		<DisclosurePanel class="md:hidden">
			<div class="pt-2 pb-3 space-y-1">
				<NuxtLink
					to="/"
					class="block w-full py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 sm:pl-5 sm:pr-6"
					:activeClass="activeClassMobile"
				>
					Home
				</NuxtLink>
				<NuxtLink
					to="/exhibitions"
					class="block w-full py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 sm:pl-5 sm:pr-6"
					:activeClass="activeClassMobile"
				>
					Exhibitions
				</NuxtLink>
			</div>
			<div class="pt-4 pb-3 border-t border-gray-200">
				<div class="mt-3 space-y-1">
					<DisclosureButton
						as="a"
						href="#"
						class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
						>New Exhibition</DisclosureButton
					>
					<DisclosureButton
						as="a"
						href="#"
						class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
						>Your Profile</DisclosureButton
					>
					<DisclosureButton
						as="a"
						href="#"
						class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
						>Settings</DisclosureButton
					>
					<DisclosureButton
						as="a"
						href="#"
						class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
						>Sign out</DisclosureButton
					>
				</div>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script setup>
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems
} from '@headlessui/vue'
import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
	MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'
import { PlusIcon } from '@heroicons/vue/20/solid'

const activeClassMobile = 'text-indigo-700 bg-indigo-50'
// const activeClassMobile = 'text-softOrange border-b-2 border-b-softOrange'
</script>
<style scoped>
.router-link-active {
	border-bottom-color: #f47340;
	border-bottom-width: 2px;
	color: #f47340;
}
</style>
