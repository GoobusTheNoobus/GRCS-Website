// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    i18n: {
        locales: ["en", "cn"], 
        /* The two locales are "en" for English and "cn" for Chinese. 
        Check the docs for how we can set up localized pages:
        https://docs.astro.build/en/guides/internationalization/#create-localized-folders
        */
        defaultLocale: "en"
    }
});
