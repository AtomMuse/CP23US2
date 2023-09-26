// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		head: {
			title: 'CP23US2 | Online Exhibition Management System',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/mockup-logo.ico' },
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com'
				},
				//roboto + sarabun
				{
					rel: 'stylesheet',
					href:
						'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Sarabun:wght@400;700&display=swap'
				}
			]
		}
	}
})
