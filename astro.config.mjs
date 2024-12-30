// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Sitzplan.Digital',
        social: {
            github: 'https://github.com/vonReyher-media/',
        },
        customCss: [
            // Relative path to your custom CSS file
            // './src/styles/custom.css',
            './src/fonts/font-face.css',
            './src/tailwind.css',
        ],

        logo: {
            src: './src/assets/sitzplandigital_logo.svg',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), tailwind({
        // Disable the default base styles:
        applyBaseStyles: false,
    }),],
});