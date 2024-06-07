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
  ], "@nuxtjs/sitemap", "nuxt-gtag", '@nuxtjs/robots'],
  site: {
    url: "https://pokemonnamegenerator.com/"
  },
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