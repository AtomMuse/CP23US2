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
						<div
							class="w-full my-auto text-xl font-bold leading-5 text-right whitespace-nowrap md:text-lef"
						>
							<span class="text-darkBlue">ATOM</span
							><span class="text-softOrange">MUSE</span>
						</div>
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
								<input
									id="search"
									name="search"
									class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-darkBlue ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-0 sm:text-sm sm:leading-6"
									placeholder="Search"
									type="search"
								/>
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
				<DisclosureButton
					as="a"
					href="#"
					class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50 sm:pl-5 sm:pr-6"
					>Home</DisclosureButton
				>
				<DisclosureButton
					as="a"
					href="#"
					class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
					>Exhibitions</DisclosureButton
				>
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
</script>
<!-- <script setup></script>

<template>
	<div
		class="top-0 left-0 flex items-center justify-between w-full gap-5 pr-12 bg-white shadow pl-14 max-md:flex-wrap max-md:px-5"
		style="font-family: 'Inter', sans-serif"
	>
		<div
			class="my-auto text-xl font-bold leading-5 text-orange-400 grow whitespace-nowrap"
		>
			<span class="text-gray-900">ATOM</span
			><span class="text-orange-400">MUSE</span>
		</div>
		<div
			class="flex items-start self-stretch justify-between gap-5 p-3 leading-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center whitespace-nowrap"
		>
			<div
				class="self-center my-auto text-sm font-medium leading-5 text-center text-gray-900"
			>
				<NuxtLink to="/"> Home </NuxtLink>
			</div>

			<div
				class="self-center my-auto text-sm font-medium leading-5 text-center text-gray-900"
			>
				<NuxtLink to="/exhibitions/"> Exhibitions </NuxtLink>
			</div>

			<div
				class="items-stretch border border-[color:var(--gray-300,#D1D5DB)] shadow-sm bg-white self-center flex gap-2 my-auto pl-3.5 pr-20 py-2.5 rounded-md border-solid max-md:pr-5"
			>
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/049e5821e1deb5b32567a0f40de085353de0bdef0229718469bc8b20d857dfab?"
					class="object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
				/>
				<div class="text-sm leading-5 text-gray-500 grow whitespace-nowrap">
					Search
				</div>
			</div>
			<div
				class="items-stretch border border-[color:var(--gray-300,#D1D5DB)] bg-white self-center flex gap-2 my-auto pl-3.5 pr-5 py-2.5 rounded-md border-solid"
			>
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/a71583ce66d992a920ce10db6c7f5144236f19086cfbe182405364473a1e3e06?"
					class="object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
				/>
				<button
					@click="handleButtonClick"
					class="text-sm font-medium leading-5 text-gray-400 grow whitespace-nowrap"
				>
					New Exhibition
				</button>
			</div>
			<img
				loading="lazy"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ff0f086972886f7a43ff62e8808a97e73f38822ff03534c83ea0bc9e4b3fb7?"
				class="self-center object-contain object-center w-6 max-w-full my-auto overflow-hidden aspect-square shrink-0"
			/>
		</div>
	</div>
</template>-->

<style scoped>
.router-link-active {
	border-bottom-color: #f47340;
	border-bottom-width: 2px;
	color: #f47340;
}
</style>
