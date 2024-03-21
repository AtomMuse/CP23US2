<template>
	<div>
		<div class="flex w-full min-h-screen">
			<div
				class="relative hidden w-full bg-center bg-cover shadow-xl md:block bg-black/50"
			>
				<img
					:src="
						isSigninMode
							? 'https://firebasestorage.googleapis.com/v0/b/atommuse-storage.appspot.com/o/images%2Fimage27.png?alt=media&token=0c96287a-adec-4b23-b273-fc060f975038'
							: 'https://firebasestorage.googleapis.com/v0/b/atommuse-storage.appspot.com/o/images%2Fimage28.png?alt=media&token=4304b2e1-087c-46e4-9d02-84345fb9d49a'
					"
					class="absolute object-cover w-full h-full mix-blend-overlay"
				/>
			</div>
			<div class="flex items-center justify-center w-full">
				<div class="flex flex-col lg:-mt-16 lg:w-1/2">
					<div class="flex flex-col items-center justify-center gap-2 mb-9">
						<p class="font-bold text-gray-400" v-if="isSigninMode">Log in to</p>
						<p class="font-bold text-gray-400" v-else>Welcome to</p>
						<div class="w-full text-5xl font-bold text-center">
							<span class="text-darkBlue">ATOM</span
							><span class="text-softOrange">MUSE</span>
						</div>
						<p class="font-bold text-gray-400" v-show="isSigninMode === false">
							Create your account
						</p>
					</div>
					<!-- Input SignIn Mode -->
					<div class="flex flex-col gap-2" v-if="isSigninMode">
						<BaseInput
							require
							v-model="loginForm.username"
							label="Username or Email"
							placeholder="Username or Email"
						/>
						<BaseInput
							v-model="loginForm.password"
							label="Password"
							require
							placeholder="Password"
							type="password"
						/>
						<div class="flex flex-col">
							<button
								type="button"
								class="uppercase mt-2 cursor-pointer bg-softOrange text-white rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								LOG IN
							</button>

							<p class="invisible text-sm text-right text-softOrange">errrrrrrrrr</p>
						</div>
					</div>
					<!-- Input SignIn Mode End -->
					<!-- Input SignUp Mode -->
					<div class="flex flex-col gap-2" v-else>
						<BaseInput
							require
							v-model="signUpForm.username"
							label="Username"
							placeholder="Username"
						/>
						<BaseInput
							require
							v-model="signUpForm.email"
							label="Email"
							placeholder="Email"
						/>
						<BaseInput
							v-model="signUpForm.password"
							label="Password"
							require
							placeholder="Password"
							type="password"
						/>
						<BaseInput
							v-model="confirmPassword"
							label="Confirm Password"
							require
							placeholder="confirm Password"
							type="password"
						/>
						<div class="flex flex-col">
							<button
								type="button"
								class="uppercase mt-2 cursor-pointer bg-softOrange text-white rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								SIGN UP
							</button>
							<p class="invisible text-sm text-right text-softOrange">errrrrrrrrr</p>
						</div>
					</div>
					<!-- Input SignUp Mode End -->
					<p class="text-center text-gray-400 mt-7" v-if="isSigninMode">
						Don’t have an account?
						<span
							@click="changeMode"
							class="font-semibold cursor-pointer text-softOrange hover:underline"
						>
							Sign Up</span
						>
					</p>
					<p class="text-center text-gray-400 mt-7" v-else>
						Already have an accout?
						<span
							@click="changeMode"
							class="font-semibold cursor-pointer text-softOrange hover:underline"
						>
							Log in</span
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const loginForm = ref({
	username: '',
	password: ''
})

const confirmPassword = ref('')

const signUpForm = ref({
	username: '',
	email: '',
	password: ''
})

const isSigninMode = ref(true)
const changeMode = () => {
	isSigninMode.value ? (isSigninMode.value = false) : (isSigninMode.value = true)
}
</script>
<style scoped></style>
