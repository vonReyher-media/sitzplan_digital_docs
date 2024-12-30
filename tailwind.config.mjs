import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: '#46710F',
					50: '#F4FBDE',
					100: '#E8F6BC',
					200: '#CBED78',
					300: '#A8E435',
					400: '#77B518',
					500: '#46710F',
					600: '#375F0D',
					700: '#294D0A',
					800: '#1D3B08',
					900: '#132905',
					950: '#0E2004'
				},
				gray: {
					DEFAULT: '#2A4409',
					50: '#EAF5B0',
					100: '#DDF08E',
					200: '#BFE74B',
					300: '#93CB1B',
					400: '#5B8712',
					500: '#2A4409',
					600: '#1F3607',
					700: '#152905',
					800: '#0C1B04',
					900: '#050E02',
					950: '#030701'
				},
			},
			fontFamily: {
				sans: ['Host Grotesk'],
				// Your preferred code font. Starlight uses system monospace fonts by default.
				mono: ['"IBM Plex Mono"'],
			},
		},
	},
	plugins: [starlightPlugin()],
}
