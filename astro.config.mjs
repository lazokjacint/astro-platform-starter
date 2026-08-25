import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    // Only enable the Netlify adapter in production to avoid dev-time
    // Netlify CLI interactions that may require additional permissions.
    ...(process.env.NODE_ENV === 'production'
        ? { adapter: netlify({ devFeatures: { environmentVariables: true } }) }
        : {})
});
