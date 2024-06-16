<script setup>
import { ref } from "vue";
import { useFetch } from "nuxt/app";

useHead({
  title: "Pokemon name generator - Generate random names",
  link: {
    rel: "canonical",
    href: "https://pokemonnamegenerator.com",
  },
  meta: [
    {
      name: "description",
      content:
        "Welcome to Pokemon Name Generator, your tool for generating random Pokemon names! Our service helps you find unique and fun names for your Pokemon.",
    },
  ],
});

const pokemonName = ref("");

const submit = async () => {
  const { data, error } = await useFetch("/api/pokemon");
  if (!error.value) {
    pokemonName.value = data.value.pokemonName;
  } else {
    console.error(error.value);
  }
};
function copyName() {
  navigator.clipboard.writeText(pokemonName.value);
  return alert("Copied");
}
</script>

<template>
  <main>
    <article
      class="max-w-[1000px] px-4 md:px-0 mx-auto my-14 flex flex-col items-center justify-center"
    >
      <p class="text-center text-2xl">
        Welcome to Pokemon Name Generator, your ultimate tool for generating
        random Pokemon names! Our service helps you find unique and fun names
        for your Pokemon adventures. Simply click the button and get a random
        Pokemon name instantly.
      </p>
      <button
        class="mt-10 bg-[#ffde00] text-[#000] font-semibold text-xl px-4 py-2 rounded-md cursor-pointer"
        @click="submit"
      >
        Random Name
      </button>
      <h3
        v-if="pokemonName.length"
        class="relative text-4xl font-bold tracking-wider my-10"
      >
        {{ pokemonName }}
        <div
          class="absolute right-[-24px] top-1 cursor-pointer"
          @click="copyName"
        >
          <icon
            class="absolute right-[-4px] top-2 h-4 w-4 rounded-sm border border-solid bg-white border-[#000]"
          ></icon>
          <icon
            class="absolute right-[-10px] top-3 h-4 w-4 rounded-sm border border-solid bg-white border-[#000]"
          ></icon>
        </div>
      </h3>
    </article>
  </main>
</template>

<style>
/*
yellow: #ffde00
red: #ff0000
blue: #3b4cca
*/
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: "Space Grotesk", sans-serif;
  position: relative;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/public/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.overlay {
  background: #ffdd0038;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 10;
}
.pokemon_text {
  color: #3b4cca;
  -webkit-text-fill-color: #ffde00;
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: #3b4cca;
}
</style>
