<template>
	<div class="w-screen h-screen">
		<BaseNavbar class="fixed top-0 z-50 w-full" />
		<main class="min-h-screen mt-16">
			<slot></slot>
		</main>
		<BaseFooter text="© 2023 ATOMMUSE, SIT KMUTT." />
	</div>
</template>
<style></style>
