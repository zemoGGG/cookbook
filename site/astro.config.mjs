// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://mmrecipes.pages.dev',
    build: {
        assets: '_assets'
    },
    markdown: {
        shikiConfig: {
            theme: 'github-light'
        }
    }
});
