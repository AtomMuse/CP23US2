// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
	runtimeConfig: {
		public: {
			API_URL: process.env.API_URL
		}
	},
	app: {
		head: {
			title: 'CP23US2 | Online Exhibition Management System',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/mockup-logo.ico' }
				// {
				// 	rel: 'preconnect',
				// 	href: 'https://fonts.googleapis.com'
				// }
				//Inter
				// {
				// 	rel: 'stylesheet',
				// 	href: 'https://fonts.googleapis.com/css?family=Inter'
				// }
				// {
				// 	rel: 'stylesheet',
				// 	href:
				// 		'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;700&display=swap'
				// }
			]
		}
	}
})
