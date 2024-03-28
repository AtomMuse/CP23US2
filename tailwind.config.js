/** @type {import('tailwindcss').Config} */
export default {
	content: ['./node_modules/preline/preline.js'],
	theme: {
		extend: {
			colors: {
				darkBrown: '#280E05',
				darkOrange: '#E0400B',
				softOrange: '#F47340',
				darkBlue: '#111827'
			}
		}
	},
	plugins: [require('preline/plugin')]
}
