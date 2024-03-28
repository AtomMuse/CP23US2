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
					<form v-if="isSigninMode">
						<div class="flex flex-col gap-2">
							<BaseInput
								require
								v-model="loginForm.email"
								label="Email"
								placeholder="Email"
								type="email"
								id="email-login"
							/>
							<BaseInput
								v-model="loginForm.password"
								label="Password"
								require
								placeholder="Password"
								type="password"
								id="password-login"
							/>
							<div class="flex flex-col">
								<button
									@click="login"
									:disable="loginForm.email === '' || loginForm.password === ''"
									type="button"
									class="uppercase mt-2 rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									:class="
										loginForm.email === '' || loginForm.password === ''
											? 'cursor-default bg-gray-400 text-gray-200 '
											: 'cursor-pointer bg-softOrange text-white'
									"
								>
									LOG IN
								</button>

								<p
									class="text-sm text-right text-softOrange"
									v-show="errorMessage != ''"
								>
									{{ errorMessage }}
								</p>
							</div>
						</div>
					</form>

					<!-- Input SignIn Mode End -->
					<!-- Input SignUp Mode -->
					<form v-else>
						<div class="flex flex-col gap-2">
							<BaseInput
								require
								v-model="signUpForm.username"
								label="Username"
								placeholder="Username"
								id="username"
							/>
							<BaseInput
								require
								v-model="signUpForm.email"
								label="Email"
								placeholder="Email"
								id="email"
							/>
							<BaseInput
								v-model="signUpForm.password"
								label="Password"
								require
								placeholder="Password"
								type="password"
								id="password"
							/>
							<BaseInput
								v-model="confirmPassword"
								label="Confirm Password"
								require
								placeholder="confirm Password"
								type="password"
								id="confirm-password"
							/>
							<div class="flex flex-col">
								<button
									@click="register"
									type="button"
									class="uppercase mt-2 cursor-pointer bg-softOrange text-white rounded-md px-6 py-1.5 text-sm font-normal shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									SIGN UP
								</button>
								<p class="invisible text-sm text-right text-softOrange">errrrrrrrrr</p>
							</div>
						</div>
					</form>

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
import Swal from 'sweetalert2'
const loginForm = ref({
	email: '',
	password: ''
})

const confirmPassword = ref('')

const signUpForm = ref({
	username: '',
	email: '',
	password: '',
	profile: 'test fetchhhh'
})

const isSigninMode = ref(true)
const changeMode = () => {
	isSigninMode.value ? (isSigninMode.value = false) : (isSigninMode.value = true)
}
const errorMessage = ref('')
const login = async () => {
	// const runtimeConfig = useRuntimeConfig()
	// const AUTH_API_URL = runtimeConfig.public
	const url = `http://10.4.56.17/auth/login`
	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(loginForm.value)
	})
	if (res.status === 200) {
		// exhibitionsData.value = await res.json()
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Login Success !',
			showConfirmButton: false,
			timer: 2000
		}).then((result) => {
			const router = useRouter()
			router.push('/')
			errorMessage.value = ''
		})
	} else if (res.status === 401) {
		errorMessage.value = 'Email or Password Mismatch'
		// console.log(`Could not fetch data from ${url}`)
	}
}

const register = async () => {
	// const runtimeConfig = useRuntimeConfig()
	// const AUTH_API_URL = runtimeConfig.public.AUTH_API_URL
	const url = `http://10.4.56.17/auth/register`
	// const url = `http://10.4.56.45/auth/register`
	// const url = `http://cp23us2.sit.kmutt.ac.th:5000/exhibitions`
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(signUpForm.value)
	})
	if (res.status === 200) {
		// exhibitionsData.value = await res.json()
		const router = useRouter()
		router.push('/')
		console.log(res)
	} else {
		// console.log(`Could not fetch data from ${url}`)
	}
}
</script>
<style scoped></style>
