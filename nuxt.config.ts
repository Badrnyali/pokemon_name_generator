// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [[
    "@nuxtjs/google-fonts",
    {
      families: {
        "Space+Grotesk": true,
      },
    },
  ], "@nuxtjs/sitemap"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});