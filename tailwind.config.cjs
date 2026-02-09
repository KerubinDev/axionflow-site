/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#0F1115',
                foreground: '#EAEAEA',
                accent: '#3B82F6',
                warning: '#F59E0B',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
