// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [[
    "@nuxtjs/google-fonts",
    {
      families: {
        "Space+Grotesk": true,
      },
    },
  ], "nuxt-gtag"],
  css: ["~/assets/css/main.css"],
  gtag: {
    id: 'G-S3M8DCNFCK'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});