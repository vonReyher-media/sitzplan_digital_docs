// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: {
            'de': 'Sitzplan.Digital Dokumentation',
            'en': 'Sitzplan.Digital Documentation',
        },
        defaultLocale: 'de',
        locales: {
            // Englische Dokumente in `src/content/docs/de/`
            de: {
                label: 'Deutsch',
                lang: 'de',
            },
            // Vereinfachte chinesische Dokumente in `src/content/docs/en/`
            en: {
                label: 'Englisch',
                lang: 'en',
            },
        },
        description: 'Sitzplan.Digital Documentation',

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
        editLink: {
            baseUrl: 'https://github.com/vonReyher-media/sitzplan_digital_docs/edit/main/src/content/docs/',
        },
        lastUpdated: true,
        sidebar: [
            {
                label: 'Allgemein',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Schnellstart', slug: 'allgemein/schnellstart' },
                    { label: 'Preise', slug: 'allgemein/preise' },
                    { label: 'Kickstarter', slug: 'allgemein/kickstarter' },
                    { label: 'FAQ', slug: 'allgemein/faq' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'Mittmachen',
                autogenerate: { directory: 'mitmachen'},
            },
        ],
		}), tailwind({
        // Disable the default base styles:
        applyBaseStyles: false,
    }),],
});