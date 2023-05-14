/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blacks: {
					eerie: '#17171B',
					raisin: '#1A1C23',
				},
				whites: {
					platinum: '#DEE5E5',
				},
				reds: {
					crayola: '#ED254E',
				},
			},
		},
	},
	plugins: [],
}
